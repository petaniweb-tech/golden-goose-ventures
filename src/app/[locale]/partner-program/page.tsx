import React from "react";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CtaOne from "@/components/Section/CTA/CtaOne";
import Link from "next/link";
import IconSVG from "@/components/IconSVG";

export default function PartnerProgramPage() {
  return (
    <>
      <BreadcrumbItem
        link="Partner Program"
        img="/images/banner/about1.png"
        title="Partner Program"
        desc="Join Golden Gate Ventures' exclusive partner network and access premium opportunities in the blockchain and cryptocurrency ecosystem."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">
              GGV Partner Network
            </h2>
            <p className="text-lg mb-8">
              The Golden Gate Ventures Partner Network brings together industry
              leaders, technology experts, institutional investors, and
              corporate partners to create a powerful ecosystem that accelerates
              innovation and growth in the blockchain and cryptocurrency space.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-xl font-semibold mb-4">
                  Why Join Our Partner Network?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-brown-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">1</span>
                    </div>
                    <div>
                      <span className="font-medium">Deal Flow Access</span>
                      <p className="mt-1">
                        Get early access to promising investment opportunities
                        in our pipeline.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-brown-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">2</span>
                    </div>
                    <div>
                      <span className="font-medium">Industry Insights</span>
                      <p className="mt-1">
                        Receive exclusive market research and industry analysis
                        from our team.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-brown-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">3</span>
                    </div>
                    <div>
                      <span className="font-medium">Network Connections</span>
                      <p className="mt-1">
                        Connect with other partners and portfolio companies in
                        our ecosystem.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-brown-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">4</span>
                    </div>
                    <div>
                      <span className="font-medium">
                        Co-Investment Opportunities
                      </span>
                      <p className="mt-1">
                        Participate in select co-investment opportunities
                        alongside GGV.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="order-1 md:order-2">
                <img
                  src="/images/blog/930x593.png"
                  alt="Partner Network"
                  className="rounded-lg shadow-md w-full"
                />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Partner Categories
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-brown-500 rounded-full flex items-center justify-center mb-4">
                  <IconSVG type="service-1" size={24} color="#FFFFFF" />
                </div>
                <h3 className="text-lg font-semibold mb-3">
                  Strategic Partners
                </h3>
                <p className="mb-4">
                  Corporate and institutional partners who bring strategic value
                  to our ecosystem.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Industry leaders and established companies</li>
                  <li>Financial institutions and exchanges</li>
                  <li>Corporate venture arms</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-brown-500 rounded-full flex items-center justify-center mb-4">
                  <IconSVG type="service-2" size={24} color="#FFFFFF" />
                </div>
                <h3 className="text-lg font-semibold mb-3">
                  Technology Partners
                </h3>
                <p className="mb-4">
                  Technology providers and infrastructure companies supporting
                  our portfolio.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Blockchain infrastructure providers</li>
                  <li>Security and compliance solutions</li>
                  <li>Development and tooling platforms</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-brown-500 rounded-full flex items-center justify-center mb-4">
                  <IconSVG type="service-3" size={24} color="#FFFFFF" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Capital Partners</h3>
                <p className="mb-4">
                  Investment partners who collaborate on funding opportunities.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Venture capital firms</li>
                  <li>Family offices and HNWIs</li>
                  <li>Institutional investors</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Application Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-brown-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Apply</h3>
                <p className="text-sm">
                  Submit your application through our online form
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-brown-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Review</h3>
                <p className="text-sm">Our team evaluates your application</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-brown-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Discussion</h3>
                <p className="text-sm">
                  In-depth conversation about partnership opportunities
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-brown-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  4
                </div>
                <h3 className="font-semibold mb-2">Onboarding</h3>
                <p className="text-sm">Welcome to the GGV Partner Network</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="#application-form"
                className="inline-block px-8 py-3 bg-brown-500 text-white rounded-md font-medium hover:bg-brown-600 transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* <div
            id="application-form"
            className="mb-16 bg-white p-8 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">
              Partner Application
            </h2>
            <p className="text-center mb-8">
              Interested in joining our Partner Network? Fill out the form below
              and our team will be in touch.
            </p>

            <form className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="company"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="website"
                  >
                    Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500"
                    placeholder="https://example.com"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="name"
                  >
                    Contact Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="md:col-span-2">
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="partner-type"
                  >
                    Partner Type
                  </label>
                  <select
                    id="partner-type"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500"
                  >
                    <option value="">Select partner type</option>
                    <option value="strategic">Strategic Partner</option>
                    <option value="technology">Technology Partner</option>
                    <option value="capital">Capital Partner</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="message"
                  >
                    How can we collaborate?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500"
                    placeholder="Tell us about your organization and how you envision partnering with Golden Gate Ventures..."
                  ></textarea>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block px-8 py-3 bg-brown-500 text-white rounded-md font-medium hover:bg-brown-600 transition-colors"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div> */}
        </div>
      </div>

      <CtaOne />
    </>
  );
}
