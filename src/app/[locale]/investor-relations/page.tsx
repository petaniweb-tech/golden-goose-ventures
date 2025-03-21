import React from "react";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CtaOne from "@/components/Section/CTA/CtaOne";
import Link from "next/link";
import IconSVG from "@/components/IconSVG";

export default function InvestorRelationsPage() {
  return (
    <>
      <BreadcrumbItem
        link="Investor Relations"
        img="/images/banner/about1.png"
        title="Investor Relations"
        desc="Information for investors and stakeholders of Golden Gate Ventures, including performance metrics and financial reports."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Investor Information
            </h2>
            <p className="text-lg mb-8">
              Golden Gate Ventures is committed to transparency and excellence
              in managing investments for our limited partners. We provide
              comprehensive reporting, regular updates, and insights into our
              investment strategy and portfolio performance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-brown-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconSVG type="service-1" size={32} color="#FFFFFF" />
                </div>
                <h3 className="text-lg font-semibold mb-3">
                  Investment Strategy
                </h3>
                <p>
                  Learn about our approach to venture capital in the blockchain
                  and cryptocurrency sector.
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-brown-500 font-medium hover:underline"
                  >
                    View Strategy
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-brown-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconSVG type="service-2" size={32} color="#FFFFFF" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Fund Performance</h3>
                <p>
                  Track record information and key performance indicators for
                  our investment funds.
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-brown-500 font-medium hover:underline"
                  >
                    View Performance
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-brown-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconSVG type="service-3" size={32} color="#FFFFFF" />
                </div>
                <h3 className="text-lg font-semibold mb-3">
                  Financial Reports
                </h3>
                <p>
                  Access quarterly and annual financial reports and investor
                  communications.
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-brown-500 font-medium hover:underline"
                  >
                    View Reports
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Investment Funds
            </h2>

            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">
                  GGV Blockchain Fund I
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <span className="text-sm font-medium block">Fund Size</span>
                    <span className="text-lg">$150 Million</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium block">
                      Vintage Year
                    </span>
                    <span className="text-lg">2018</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium block">Focus</span>
                    <span className="text-lg">Early Stage Blockchain</span>
                  </div>
                </div>
                <p className="text-sm">
                  Our inaugural fund focused on early-stage investments in
                  blockchain infrastructure and cryptocurrency projects.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">
                  GGV Digital Assets Fund II
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <span className="text-sm font-medium block">Fund Size</span>
                    <span className="text-lg">$250 Million</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium block">
                      Vintage Year
                    </span>
                    <span className="text-lg">2021</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium block">Focus</span>
                    <span className="text-lg">DeFi and Web3</span>
                  </div>
                </div>
                <p className="text-sm">
                  Our second fund expanded into decentralized finance, NFTs, and
                  Web3 applications.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">
                  GGV Crypto Growth Fund
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <span className="text-sm font-medium block">Fund Size</span>
                    <span className="text-lg">$300 Million</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium block">
                      Vintage Year
                    </span>
                    <span className="text-lg">2023</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium block">Focus</span>
                    <span className="text-lg">Growth Stage</span>
                  </div>
                </div>
                <p className="text-sm">
                  Our growth-focused fund supports later-stage blockchain and
                  cryptocurrency companies as they scale globally.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Investor Portal Access</h2>
            <p className="mb-8">
              Current limited partners can access detailed performance reports,
              capital call notices, distribution information, and portfolio
              updates through our secure investor portal.
            </p>

            <div className="text-center">
              <a
                href="#"
                className="inline-block px-8 py-3 bg-brown-500 text-white rounded-md font-medium hover:bg-brown-600 transition-colors"
              >
                Investor Login
              </a>
            </div>
          </div>
        </div>
      </div>

      <CtaOne />
    </>
  );
}
