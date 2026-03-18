import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Southern C & E LLC",
  description:
    "Browse our completed remodeling projects — bathrooms, kitchens, flooring, and more in the DC, MD & VA area.",
};

const bathroomPhotos = [
  {
    src: "/images/bathroom-1.jpg",
    alt: "Complete bathroom remodel with marble tile flooring, glass shower enclosure, modern vanity, and recessed lighting",
    caption: "Full Bathroom Remodel — Marble Tile & Glass Enclosure",
  },
  {
    src: "/images/bathroom-2.jpg",
    alt: "Shower interior with penny tile floor, marble wall tile, and built-in niche",
    caption: "Shower Detail — Penny Tile Floor with Marble Walls",
  },
  {
    src: "/images/bathroom-3.jpg",
    alt: "Glass shower door detail showing built-in bench and penny tile floor",
    caption: "Glass Enclosure — Built-in Bench & Grab Bars",
  },
];

export default function GalleryPage() {
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

      {/* Bathroom Remodel — white section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-[#2563eb] mb-3">
              Featured Project
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#09090b] mb-4">
              Bathroom Remodel
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Complete bathroom renovation featuring marble tile throughout, a
              walk-in shower with glass enclosure, penny tile shower floor,
              built-in bench and niche, grab bars, recessed lighting, and modern
              vanity installation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bathroomPhotos.map((photo) => (
              <div key={photo.src} className="group">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md shadow-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="mt-4 text-sm text-gray-500 font-medium">
                  {photo.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon — dark section */}
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
            {["Kitchen Remodels", "Flooring Projects", "Full Home Renovations"].map(
              (category) => (
                <div
                  key={category}
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
                    {category}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">Photos coming soon</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

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
