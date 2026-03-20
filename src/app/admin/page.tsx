"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

type Photo = {
  publicId: string;
  url: string;
  category: string;
  caption: string;
  width: number;
  height: number;
};

const CATEGORIES = [
  { value: "bathroom", label: "Bathroom Remodeling" },
  { value: "kitchen", label: "Kitchen Remodeling" },
  { value: "flooring", label: "Flooring Installation" },
  { value: "full-home", label: "Full Home Renovations" },
];

export default function AdminPage() {
  const [token, setToken] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  // Upload form state
  const [file, setFile] = useState<File | null>(null);
  const [category, setCategory] = useState("bathroom");
  const [caption, setCaption] = useState("");

  useEffect(() => {
    const stored = sessionStorage.getItem("admin_token");
    if (stored) setToken(stored);
  }, []);

  const fetchPhotos = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    try {
      const res = await fetch("/api/admin/photos", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 401) {
        sessionStorage.removeItem("admin_token");
        setToken(null);
        return;
      }
      const data = await res.json();
      setPhotos(data.photos ?? []);
    } catch {
      setMessage({ type: "error", text: "Failed to load photos" });
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (token) fetchPhotos();
  }, [token, fetchPhotos]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        setLoginError("Invalid password");
        return;
      }
      const data = await res.json();
      sessionStorage.setItem("admin_token", data.token);
      setToken(data.token);
      setPassword("");
    } catch {
      setLoginError("Something went wrong. Please try again.");
    }
  }

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    if (!file || !token) return;

    if (file.size > 10 * 1024 * 1024) {
      setMessage({ type: "error", text: "File must be under 10MB" });
      return;
    }

    setUploading(true);
    setMessage(null);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("category", category);
    formData.append("caption", caption);

    try {
      const res = await fetch("/api/admin/photos", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Upload failed");
      }
      setMessage({ type: "success", text: "Photo uploaded successfully!" });
      setFile(null);
      setCaption("");
      // Reset file input
      const fileInput = document.getElementById(
        "photo-file"
      ) as HTMLInputElement;
      if (fileInput) fileInput.value = "";
      fetchPhotos();
    } catch (err) {
      setMessage({
        type: "error",
        text: err instanceof Error ? err.message : "Upload failed",
      });
    } finally {
      setUploading(false);
    }
  }

  async function handleDelete(publicId: string) {
    if (!token) return;
    if (!confirm("Are you sure you want to delete this photo?")) return;

    try {
      const res = await fetch(
        `/api/admin/photos/${encodeURIComponent(publicId)}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (!res.ok) throw new Error("Delete failed");
      setMessage({ type: "success", text: "Photo deleted" });
      setPhotos((prev) => prev.filter((p) => p.publicId !== publicId));
    } catch {
      setMessage({ type: "error", text: "Failed to delete photo" });
    }
  }

  function handleLogout() {
    sessionStorage.removeItem("admin_token");
    setToken(null);
    setPhotos([]);
  }

  // Group photos by category
  const grouped = CATEGORIES.map((cat) => ({
    ...cat,
    photos: photos.filter((p) => p.category === cat.value),
  }));

  // LOGIN SCREEN
  if (!token) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="w-full max-w-md mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">
                Admin Login
              </h1>
              <p className="text-gray-500 mt-1">
                Enter password to manage photos
              </p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  className="w-full px-4 py-3.5 pr-12 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
              {loginError && (
                <p className="text-red-500 text-sm">{loginError}</p>
              )}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // ADMIN DASHBOARD
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">
            Photo Manager
          </h1>
          <button
            onClick={handleLogout}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Message */}
        {message && (
          <div
            className={`mb-6 px-4 py-3 rounded-xl text-sm font-medium ${
              message.type === "success"
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Upload Section */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Upload Photo
          </h2>
          <form onSubmit={handleUpload} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="photo-file"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Photo *
                </label>
                <input
                  type="file"
                  id="photo-file"
                  accept="image/*"
                  onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                  required
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary/10 file:text-primary hover:file:bg-primary/20 transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="photo-category"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Category *
                </label>
                <select
                  id="photo-category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="photo-caption"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Caption
                </label>
                <input
                  type="text"
                  id="photo-caption"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="e.g. Master bathroom remodel"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={uploading || !file}
              className="bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-all hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
            >
              {uploading ? "Uploading..." : "Upload Photo"}
            </button>
          </form>
        </div>

        {/* Photo Grid by Category */}
        {loading ? (
          <div className="text-center py-12 text-gray-500">
            Loading photos...
          </div>
        ) : (
          <div className="space-y-8">
            {grouped.map((group) => (
              <div key={group.value}>
                <h2 className="text-lg font-bold text-gray-900 mb-3">
                  {group.label}{" "}
                  <span className="text-sm font-normal text-gray-400">
                    ({group.photos.length} photo
                    {group.photos.length !== 1 ? "s" : ""})
                  </span>
                </h2>
                {group.photos.length === 0 ? (
                  <p className="text-sm text-gray-400 italic">
                    No photos yet. Upload one above!
                  </p>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {group.photos.map((photo) => (
                      <div
                        key={photo.publicId}
                        className="group relative bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm"
                      >
                        <div className="aspect-[3/4] relative">
                          <Image
                            src={photo.url}
                            alt={photo.caption || "Gallery photo"}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                          />
                        </div>
                        {photo.caption && (
                          <div className="px-3 py-2">
                            <p className="text-xs text-gray-600 truncate">
                              {photo.caption}
                            </p>
                          </div>
                        )}
                        <button
                          onClick={() => handleDelete(photo.publicId)}
                          className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                          title="Delete photo"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
