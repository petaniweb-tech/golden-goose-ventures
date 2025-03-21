import React from "react";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CtaOne from "@/components/Section/CTA/CtaOne";
import IconSVG from "@/components/IconSVG";
import Link from "next/link";
import Image from "next/image";

export default function PartnerBenefitsPage() {
  return (
    <>
      <BreadcrumbItem
        link="Partner Benefits"
        img="/images/banner/about1.png"
        title="Partner Program Benefits"
        desc="Discover the exclusive advantages and opportunities available to members of the Golden Gate Ventures Partner Network."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Why Join Our Partner Network?
            </h2>
            <p className="text-lg mb-10 max-w-3xl mx-auto">
              The Golden Gate Ventures Partner Network offers a comprehensive
              range of benefits designed to create value for our partners while
              fostering a collaborative ecosystem within the blockchain and
              cryptocurrency industry.
            </p>

            <div className="flex justify-center mb-10">
              <Link
                href="/partner-program#application-form"
                className="inline-block px-8 py-3 bg-brown-500 text-white rounded-md font-medium hover:bg-brown-600 transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>

          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl font-bold mb-6">
                  Investment Opportunities
                </h2>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-semibold text-lg mb-3 flex items-center">
                      <span className="w-8 h-8 bg-brown-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">
                        1
                      </span>
                      Deal Flow Access
                    </h3>
                    <p>
                      Early access to high-quality investment opportunities in
                      our pipeline before they reach the broader market.
                      Partners receive detailed investment memos and analysis
                      for qualified opportunities.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-semibold text-lg mb-3 flex items-center">
                      <span className="w-8 h-8 bg-brown-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">
                        2
                      </span>
                      Co-Investment Rights
                    </h3>
                    <p>
                      Exclusive opportunities to co-invest alongside GGV in
                      select deals, with preferential terms and allocation
                      rights for strategic partners.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-semibold text-lg mb-3 flex items-center">
                      <span className="w-8 h-8 bg-brown-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">
                        3
                      </span>
                      Secondary Opportunities
                    </h3>
                    <p>
                      Access to secondary share purchases in established
                      portfolio companies, providing entry points to
                      high-performing investments.
                    </p>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <Image
                  src="/images/about/about-1.png"
                  alt="Investment Opportunities"
                  className="rounded-lg shadow-lg w-full"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <Image
                  src="/images/about/about-2.png"
                  alt="Knowledge & Insights"
                  className="rounded-lg shadow-lg w-full"
                  width={800}
                  height={600}
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">
                  Knowledge & Insights
                </h2>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-semibold text-lg mb-3 flex items-center">
                      <span className="w-8 h-8 bg-brown-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">
                        1
                      </span>
                      Market Intelligence
                    </h3>
                    <p>
                      Exclusive access to GGV&apos;s research reports, market
                      analysis, and industry insights covering emerging trends,
                      regulatory developments, and technology advancements.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-semibold text-lg mb-3 flex items-center">
                      <span className="w-8 h-8 bg-brown-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">
                        2
                      </span>
                      Educational Content
                    </h3>
                    <p>
                      Specialized webinars, workshops, and educational resources
                      designed to deepen understanding of blockchain technology
                      and cryptocurrency markets.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-semibold text-lg mb-3 flex items-center">
                      <span className="w-8 h-8 bg-brown-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">
                        3
                      </span>
                      Quarterly Partner Briefings
                    </h3>
                    <p>
                      Detailed updates on portfolio performance, market
                      conditions, and investment strategy from the GGV
                      leadership team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl font-bold mb-6">
                  Network & Collaboration
                </h2>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-semibold text-lg mb-3 flex items-center">
                      <span className="w-8 h-8 bg-brown-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">
                        1
                      </span>
                      Partner Events
                    </h3>
                    <p>
                      Invitation to exclusive networking events, annual partner
                      summit, and specialized roundtables focused on strategic
                      collaboration.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-semibold text-lg mb-3 flex items-center">
                      <span className="w-8 h-8 bg-brown-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">
                        2
                      </span>
                      Portfolio Connections
                    </h3>
                    <p>
                      Facilitated introductions to GGV portfolio companies for
                      business development, strategic partnerships, and
                      technology integration opportunities.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-semibold text-lg mb-3 flex items-center">
                      <span className="w-8 h-8 bg-brown-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">
                        3
                      </span>
                      Partner Directory
                    </h3>
                    <p>
                      Access to the private partner directory, facilitating
                      direct connections and collaboration among network
                      members.
                    </p>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <Image
                  src="/images/about/about-3.png"
                  alt="Network & Collaboration"
                  className="rounded-lg shadow-lg w-full"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Partner Tiers & Benefits
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-20 h-20 bg-brown-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconSVG type="service-1" size={40} color="#ac8742" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">
                  Associated Partner
                </h3>
                <p className="text-sm text-center mb-6">
                  Entry-level membership with core benefits for emerging
                  organizations
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Basic deal flow updates</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Quarterly market reports</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Invitations to selected events</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Access to partner directory</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-brown-500 relative">
                <div className="absolute top-0 right-0 bg-brown-500 text-white text-xs px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
                <div className="w-20 h-20 bg-brown-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconSVG type="service-2" size={40} color="#ac8742" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">
                  Premium Partner
                </h3>
                <p className="text-sm text-center mb-6">
                  Comprehensive benefits package for established partners
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Priority deal flow access</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Co-investment opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Full research library access</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>All partner events & webinars</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Portfolio company introductions</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Quarterly strategy briefings</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-20 h-20 bg-brown-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconSVG type="service-3" size={40} color="#ac8742" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">
                  Strategic Partner
                </h3>
                <p className="text-sm text-center mb-6">
                  Elite membership with customized benefits for key strategic
                  allies
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>All Premium Partner benefits</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Guaranteed co-investment rights</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Dedicated relationship manager</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Customized research reports</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Strategic advisory sessions</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Executive leadership access</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Join Our Partner Network?
            </h2>
            <p className="mb-6">
              Apply today to start accessing the exclusive benefits of the
              Golden Gate Ventures Partner Program.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/partner-program#application-form"
                className="inline-block px-6 py-3 bg-brown-500 text-white rounded-md font-medium hover:bg-brown-600 transition-colors"
              >
                Apply Now
              </Link>

              <Link
                href="/contact"
                className="inline-block px-6 py-3 border border-brown-500 text-brown-500 rounded-md font-medium hover:bg-brown-500 hover:text-white transition-colors"
              >
                Contact Us With Questions
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CtaOne />
    </>
  );
}
