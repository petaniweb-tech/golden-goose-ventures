import React from "react";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CtaOne from "@/components/Section/CTA/CtaOne";
import IconSVG from "@/components/IconSVG";

export default function VentureCapitalPage() {
  return (
    <>
      <BreadcrumbItem
        link="Venture Capital"
        img="/images/banner/about1.png"
        title="Venture Capital"
        desc="Golden Goose Ventures' flagship investment arm focused on blockchain and cryptocurrency opportunities."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Our Venture Capital Practice
            </h2>
            <p className="text-lg mb-8">
              Golden Goose Ventures&apos; venture capital division identifies,
              invests in, and supports the most promising blockchain and
              cryptocurrency startups globally. With a proven track record of
              successful investments and deep industry expertise, we partner
              with visionary founders to build the future of finance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Investment Focus</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Blockchain Infrastructure</li>
                  <li>Digital Asset Platforms</li>
                  <li>DeFi Protocols</li>
                  <li>Web3 Applications</li>
                  <li>Crypto Financial Services</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">
                  Investment Stages
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Seed Stage</li>
                  <li>Series A</li>
                  <li>Series B</li>
                  <li>Strategic Later-Stage Investments</li>
                  <li>Secondary Opportunities</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Our Approach
            </h2>

            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brown-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconSVG type="service-1" size={32} color="#FFFFFF" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Rigorous Due Diligence
                  </h3>
                  <p>
                    Comprehensive evaluation of technology, team, market fit,
                    and growth potential.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-brown-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconSVG type="service-2" size={32} color="#FFFFFF" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Hands-on Support
                  </h3>
                  <p>
                    Strategic guidance, industry connections, and operational
                    expertise for portfolio companies.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-brown-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconSVG type="service-3" size={32} color="#FFFFFF" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Long-term Partners
                  </h3>
                  <p>
                    Committed to supporting companies through their entire
                    growth journey.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mb-12">
              <a
                href="/portfolio"
                className="inline-block px-8 py-3 bg-brown-500 text-white rounded-md font-medium hover:bg-brown-600 transition-colors"
              >
                View Our Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>

      <CtaOne />
    </>
  );
}
