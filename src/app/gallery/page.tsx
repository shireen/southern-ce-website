import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  getPhotosByCategory,
  getCategories,
  getCategoryLabel,
} from "@/lib/cloudinary";

export const metadata: Metadata = {
  title: "Gallery | Southern C & E LLC",
  description:
    "Browse our completed remodeling projects — bathrooms, kitchens, flooring, and more in the DC, MD & VA area.",
};

export const revalidate = 60;

export default async function GalleryPage() {
  const categories = getCategories();
  const allPhotos = await getPhotosByCategory();

  // Group photos by category
  const grouped = categories.map((cat) => ({
    key: cat,
    label: getCategoryLabel(cat),
    photos: allPhotos.filter((p) => p.category === cat),
  }));

  const hasAnyPhotos = allPhotos.length > 0;
  const categoriesWithPhotos = grouped.filter((g) => g.photos.length > 0);
  const categoriesWithoutPhotos = grouped.filter((g) => g.photos.length === 0);

  return (
    <>
      {/* Header */}
      <section className="gradient-bg text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold tracking-widest uppercase text-blue-300 mb-4">
            Our Work
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Project{" "}
            <span className="gradient-text">Gallery</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            See the quality of our craftsmanship firsthand. Browse through our
            completed projects below.
          </p>
        </div>
      </section>

      {/* Categories with photos — alternate white/dark sections */}
      {categoriesWithPhotos.map((group, index) => (
        <section
          key={group.key}
          className={`py-24 ${index % 2 === 0 ? "bg-white" : "bg-[#09090b]"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14 max-w-2xl">
              <p
                className={`text-sm font-semibold tracking-widest uppercase mb-3 ${
                  index % 2 === 0 ? "text-[#2563eb]" : "text-[#059669]"
                }`}
              >
                {group.photos.length} Photo{group.photos.length !== 1 ? "s" : ""}
              </p>
              <h2
                className={`text-3xl md:text-4xl font-bold mb-4 ${
                  index % 2 === 0 ? "text-[#09090b]" : "text-white"
                }`}
              >
                {group.label}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {group.photos.map((photo) => (
                <div key={photo.publicId} className="group">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src={photo.url}
                      alt={photo.caption || `${group.label} project photo`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  {photo.caption && (
                    <p
                      className={`mt-4 text-sm font-medium ${
                        index % 2 === 0 ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      {photo.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Fallback if no photos at all */}
      {!hasAnyPhotos && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <svg
              className="w-16 h-16 text-gray-300 mx-auto mb-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Gallery Coming Soon
            </h2>
            <p className="text-gray-500 max-w-md mx-auto">
              We&apos;re adding photos of our completed projects. Check back soon!
            </p>
          </div>
        </section>
      )}

      {/* Coming Soon categories — dark section */}
      {categoriesWithoutPhotos.length > 0 && (
        <section className="py-24 bg-[#09090b]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold tracking-widest uppercase text-[#059669] mb-3">
                In Progress
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                More Projects{" "}
                <span className="gradient-text">Coming Soon</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categoriesWithoutPhotos.map((group) => (
                <div
                  key={group.key}
                  className="bg-gray-900 rounded-2xl border border-gray-800 p-14 text-center hover:border-gray-700 transition-colors duration-300"
                >
                  <svg
                    className="w-12 h-12 text-gray-600 mx-auto mb-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-300">
                    {group.label}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">Photos coming soon</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA — white section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#09090b] mb-4">
            Like What You See?
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Let us bring the same level of quality and attention to detail to
            your next project.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#2563eb] to-[#059669] hover:opacity-90 text-white px-10 py-4 rounded-full font-semibold text-lg transition-opacity duration-200 shadow-lg shadow-blue-500/25"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
