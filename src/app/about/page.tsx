import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Southern C & E LLC",
  description:
    "Learn about Southern C & E LLC — licensed and insured remodeling contractor serving Washington DC, Baltimore, and Annapolis.",
};

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

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="gradient-bg text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-300 mb-4">
            Our Story
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Southern C & E</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Building trust through quality craftsmanship, one project at a time.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
                Who We Are
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Southern C & E LLC
              </h2>
              <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
                <p>
                  Southern C & E LLC is a full-service remodeling company led by
                  Christopher Hodge, serving the greater Washington DC,
                  Baltimore, and Annapolis areas. We specialize in whole-house
                  remodeling for both residential and commercial properties.
                </p>
                <p>
                  From kitchen and bathroom renovations to flooring, electrical
                  work, and appliance installation, we bring professional
                  craftsmanship and attention to detail to every project — big or
                  small.
                </p>
                <p>
                  We believe in transparent communication, fair pricing, and
                  delivering results that exceed expectations. Every project
                  begins with a detailed proposal and clear timeline, so you know
                  exactly what to expect.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-6 text-xl">
                  Why Choose Us
                </h3>
                <ul className="space-y-5">
                  {[
                    {
                      title: "Licensed & Insured",
                      desc: "Fully licensed and insured in Maryland, DC, and Virginia. License and insurance documents can be provided upon request.",
                    },
                    {
                      title: "All Work Warranted",
                      desc: "We stand behind every project with a warranty on all work performed.",
                    },
                    {
                      title: "OSHA Compliant",
                      desc: "All work is performed in accordance with OSHA local and state safety codes.",
                    },
                    {
                      title: "Transparent Pricing",
                      desc: "Detailed proposals with clear breakdowns of labor and materials costs. No hidden fees.",
                    },
                    {
                      title: "Bulk Purchasing Discounts",
                      desc: "We pass savings on to you through our bulk appliance and materials purchasing power.",
                    },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-accent mt-1 shrink-0"
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
                      <div>
                        <p className="font-semibold text-gray-900">
                          {item.title}
                        </p>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-300 mb-3 text-center">
            How We Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              {
                step: "1",
                title: "Free Consultation",
                desc: "We discuss your vision, assess the space, and understand your needs and budget.",
              },
              {
                step: "2",
                title: "Detailed Proposal",
                desc: "You receive a comprehensive proposal with scope of work, materials, timeline, and pricing.",
              },
              {
                step: "3",
                title: "Professional Execution",
                desc: "Our team completes the project with quality craftsmanship, keeping you informed throughout.",
              },
              {
                step: "4",
                title: "Final Walkthrough",
                desc: "We do a final walkthrough together to ensure everything meets your expectations.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-5 shadow-lg">
                  {item.step}
                </div>
                <h3 className="font-semibold text-white mb-2 text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 text-center">
            What Our Clients Say
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
            Client Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <div className="flex gap-1 text-primary mb-5">
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
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
            Whether it&apos;s a kitchen, bathroom, or whole-house renovation —
            we&apos;re ready to bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="gradient-btn text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all inline-block shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
