import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Kitchen Remodeling",
    description:
      "Complete kitchen renovations including cabinets, countertops, flooring, and bulk appliance purchasing at a discount.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
        />
      </svg>
    ),
  },
  {
    title: "Bathroom Remodeling",
    description:
      "Full bathroom renovations — tub removal, shower tiling, flooring, vanity installation, mirrors, and electrical.",
    icon: (
      <svg
        className="w-8 h-8"
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
    ),
  },
  {
    title: "Flooring",
    description:
      "Installation of LVP, hardwood, carpeting, laminate, and more. Includes removal of existing flooring and baseboards.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
  },
  {
    title: "Electrical",
    description:
      "Recessed lighting installation, LED mirror wiring, exhaust fans, and other electrical upgrades.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Appliance Installation",
    description:
      "Professional installation of hot water heaters, ovens, dishwashers, refrigerators, microwaves, and more.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: "Marcus T.",
    location: "Washington, DC",
    text: "Chris and his team completely transformed our kitchen. From the cabinet installation to the new countertops, every detail was handled with care. The project was completed on time and the results exceeded our expectations.",
  },
  {
    name: "Angela R.",
    location: "Baltimore, MD",
    text: "We hired Southern C & E for a full bathroom remodel and couldn't be happier. The tile work is stunning, and Chris was communicative throughout the entire process. Highly recommend!",
  },
  {
    name: "David & Lisa K.",
    location: "Annapolis, MD",
    text: "Had all the flooring in our home replaced with luxury vinyl planks. The team was professional, clean, and the finished product looks amazing. Fair pricing too — we'll definitely use them again.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg relative overflow-hidden">
        {/* Radial glow effects */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#2563eb]/20 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#059669]/15 rounded-full blur-[128px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-44">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-wider text-[#059669] font-semibold mb-4">
              Licensed &amp; Insured Contractors
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-white">
              Quality Remodeling
              <br />
              <span className="gradient-text">You Can Trust</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
              Whole-house remodeling for residential and commercial properties in
              Washington DC, Baltimore, and Annapolis. Licensed, insured, and
              committed to excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all text-center shadow-lg shadow-[#2563eb]/25"
              >
                Get a Free Estimate
              </Link>
              <Link
                href="/services"
                className="bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all text-center"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-[#2563eb] font-semibold mb-3">
              OUR SERVICES
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything Your Home Needs
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From kitchens to bathrooms, flooring to electrical — we handle
              every aspect of your remodeling project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#2563eb]/10 to-[#059669]/10 rounded-2xl flex items-center justify-center text-[#2563eb] mb-5 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="text-[#2563eb] hover:text-[#1d4ed8] font-semibold inline-flex items-center gap-2 transition-colors text-lg"
            >
              View All Services
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="gradient-bg relative overflow-hidden py-24">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#2563eb]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#059669]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-[#059669] font-semibold mb-3">
              FEATURED PROJECT
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stunning Bathroom Remodel
            </h2>
            <p className="text-gray-400 text-lg">
              Full marble tile installation with glass enclosure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-white/10 group">
              <Image
                src="/images/bathroom-1.jpg"
                alt="Full bathroom remodel with marble tile, glass shower enclosure, and modern vanity"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-white/10 group">
              <Image
                src="/images/bathroom-2.jpg"
                alt="Shower floor detail with penny tile and marble walls"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-white/10 group">
              <Image
                src="/images/bathroom-3.jpg"
                alt="Glass shower enclosure with built-in bench and niche"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="text-white font-semibold inline-flex items-center gap-2 hover:text-[#059669] transition-colors text-lg"
            >
              View Full Gallery
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-[#2563eb] font-semibold mb-3">
              TESTIMONIALS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-1 text-[#059669] mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="gradient-bg relative overflow-hidden py-24">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#2563eb]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-wider text-[#059669] font-semibold mb-3">
            SERVICE AREA
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Serving the DMV Area
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            We proudly serve residential and commercial clients throughout
            Washington DC, Baltimore, Annapolis, and surrounding communities in
            Maryland and Virginia.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Washington DC",
              "Baltimore",
              "Annapolis",
              "Laurel",
              "Columbia",
              "Silver Spring",
              "Bowie",
              "Glen Burnie",
            ].map((area) => (
              <span
                key={area}
                className="bg-white/5 backdrop-blur px-5 py-2.5 rounded-full border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-wider text-[#2563eb] font-semibold mb-3">
            GET STARTED
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
            Contact us today for a free estimate. We&apos;ll work with you to
            bring your vision to life — on time and on budget.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#059669] to-[#10b981] hover:from-[#047857] hover:to-[#059669] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-[#059669]/25"
            >
              Get a Free Estimate
            </Link>
            <a
              href="tel:202-704-1684"
              className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-[#2563eb]/25"
            >
              Call (202) 704-1684
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
