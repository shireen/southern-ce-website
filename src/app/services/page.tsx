import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Southern C & E LLC",
  description:
    "Kitchen remodeling, bathroom renovation, flooring, electrical, and appliance installation services in DC, MD & VA.",
};

const services = [
  {
    title: "Kitchen Remodeling",
    description:
      "Transform your kitchen into the heart of your home. We handle every aspect of kitchen renovation, from design consultation to the final walkthrough.",
    items: [
      "Cabinet replacement and installation (base, drawer, sink, and wall cabinets)",
      "Countertop installation",
      "Kitchen sink and faucet replacement",
      "Kitchen flooring and baseboard installation",
      "Bulk appliance purchasing at discounted rates",
      "Door replacement and closet updates",
      "Full demo and debris removal",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1m-2 0h2" />
      </svg>
    ),
  },
  {
    title: "Bathroom Remodeling",
    description:
      "From a simple refresh to a complete gut renovation, we create beautiful, functional bathrooms tailored to your style and needs.",
    items: [
      "Bathtub removal or replacement",
      "Shower wall and floor tiling (marble, ceramic, penny tile, and more)",
      "Glass shower enclosure installation",
      "Vanity and mirror installation",
      "Toilet replacement",
      "Flooring installation (tile, LVP, etc.)",
      "Exhaust fan installation",
      "Drywall repair and ceiling updates",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Flooring Installation",
    description:
      "Upgrade the look and feel of any room with professional flooring installation. We remove old flooring and install new materials with precision.",
    items: [
      "Luxury vinyl plank (LVP) installation",
      "Hardwood flooring",
      "Carpet installation and removal",
      "Laminate flooring",
      "Tile flooring",
      "Baseboard and shoe molding installation",
      "Subfloor preparation and repair",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "Electrical Work",
    description:
      "Safe, reliable electrical services to modernize your home's lighting and fixtures.",
    items: [
      "Recessed lighting installation",
      "LED mirror wiring and installation",
      "Exhaust fan wiring",
      "Light fixture replacement",
      "Outlet and switch upgrades",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Appliance Installation",
    description:
      "Professional installation of all major home appliances. We ensure everything is properly connected, level, and functioning correctly.",
    items: [
      "Hot water heater installation",
      "Oven and range installation",
      "Dishwasher installation",
      "Refrigerator setup",
      "Microwave installation (including over-the-range)",
      "Washer and dryer hookup",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Header - Dark with gradient */}
      <section className="gradient-bg text-white py-24 md:py-32">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-wider text-primary-light font-semibold mb-4">
            What We Do
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our{" "}
            <span className="gradient-text">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Comprehensive remodeling services for residential and commercial
            properties. Every project is completed with professional
            craftsmanship and backed by our warranty.
          </p>
        </div>
      </section>

      {/* Services List - Alternating dark/light */}
      {services.map((service, index) => {
        const isDark = index % 2 === 0;

        return isDark ? (
          /* Dark section */
          <section
            key={service.title}
            className="gradient-bg py-24"
          >
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur border border-white/10 flex items-center justify-center text-primary-light">
                      {service.icon}
                    </div>
                    <p className="text-sm uppercase tracking-wider text-primary-light font-semibold">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
                  <h3 className="font-semibold text-white mb-6 text-lg">
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-4">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-accent mt-0.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ) : (
          /* Light section */
          <section
            key={service.title}
            className="bg-white py-24"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      {service.icon}
                    </div>
                    <p className="text-sm uppercase tracking-wider text-primary font-semibold">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-8">
                  <h3 className="font-semibold text-gray-900 mb-6 text-lg">
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-4">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-accent mt-0.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Warranty & Compliance - Dark section with glass cards */}
      <section className="gradient-bg py-24">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-primary-light font-semibold mb-4">
              Our Guarantee
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Quality You Can{" "}
              <span className="gradient-text">Trust</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-primary-light"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Licensed & Insured
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Licensed and insured in Maryland, DC, and Virginia. Documents
                available upon request.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-accent-light"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                All Work Warranted
              </h3>
              <p className="text-gray-400 leading-relaxed">
                We stand behind every project. All work performed by Southern C &
                E LLC is fully warranted.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-primary-light"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                OSHA Compliant
              </h3>
              <p className="text-gray-400 leading-relaxed">
                All work is performed in accordance with OSHA local and state
                safety codes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Light section */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-4">
            Get Started
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform{" "}
            <span className="gradient-text">Your Space?</span>
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Contact us today for a free, no-obligation estimate on your next
            remodeling project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Get a Free Estimate
            </Link>
            <a
              href="tel:202-704-1684"
              className="border-2 border-gray-200 text-gray-900 hover:border-primary hover:text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all"
            >
              Call (202) 704-1684
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
