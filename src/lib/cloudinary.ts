import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export type Photo = {
  publicId: string;
  url: string;
  category: string;
  caption: string;
  width: number;
  height: number;
};

const CATEGORIES = ["bathroom", "kitchen", "flooring", "full-home"] as const;
export type Category = (typeof CATEGORIES)[number];

export function getCategories() {
  return CATEGORIES;
}

export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    bathroom: "Bathroom Remodeling",
    kitchen: "Kitchen Remodeling",
    flooring: "Flooring Installation",
    "full-home": "Full Home Renovations",
  };
  return labels[category] ?? category;
}

export async function getPhotosByCategory(
  category?: string
): Promise<Photo[]> {
  try {
    const prefix = category ? `gallery/${category}` : "gallery";
    const result = await cloudinary.api.resources({
      type: "upload",
      prefix,
      max_results: 100,
      context: true,
    });

    return result.resources.map(
      (r: {
        public_id: string;
        secure_url: string;
        width: number;
        height: number;
        context?: { custom?: { caption?: string } };
      }) => ({
        publicId: r.public_id,
        url: r.secure_url,
        category: extractCategory(r.public_id),
        caption: r.context?.custom?.caption ?? "",
        width: r.width,
        height: r.height,
      })
    );
  } catch {
    console.error("Failed to fetch photos from Cloudinary");
    return [];
  }
}

export async function uploadPhoto(
  fileBuffer: Buffer,
  category: string,
  caption: string
): Promise<Photo> {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: `gallery/${category}`,
        context: `caption=${caption}`,
        resource_type: "image",
      },
      (error, result) => {
        if (error || !result) {
          reject(error ?? new Error("Upload failed"));
          return;
        }
        resolve({
          publicId: result.public_id,
          url: result.secure_url,
          category,
          caption,
          width: result.width,
          height: result.height,
        });
      }
    );
    uploadStream.end(fileBuffer);
  });
}

export async function deletePhoto(publicId: string): Promise<void> {
  await cloudinary.uploader.destroy(publicId);
}

function extractCategory(publicId: string): string {
  // publicId format: gallery/bathroom/abc123
  const parts = publicId.split("/");
  return parts.length >= 2 ? parts[1] : "uncategorized";
}

export default cloudinary;
