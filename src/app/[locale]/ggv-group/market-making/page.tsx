import React from "react";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CtaOne from "@/components/Section/CTA/CtaOne";
import IconSVG from "@/components/IconSVG";
import Link from "next/link";
import Image from "next/image";

export default function MarketMakingPage() {
  return (
    <>
      <BreadcrumbItem
        link="Market Making"
        img="/images/banner/about1.png"
        title="Market Making"
        desc="Golden Gate Ventures' specialized market making services providing liquidity for digital asset markets."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Market Making Services
            </h2>
            <p className="text-lg mb-8">
              Our institutional-grade market making services provide essential
              liquidity to digital asset markets, helping to create efficient
              price discovery, reduce slippage, and improve overall market
              health. We work with exchanges, token issuers, and projects to
              ensure their trading pairs maintain deep liquidity and tight
              spreads.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-xl font-semibold mb-4">
                  Why Choose GGV Market Making?
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-lg mb-2">
                      Advanced Technology
                    </h4>
                    <p>
                      Proprietary trading algorithms designed for efficiency and
                      reliability across market conditions.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-lg mb-2">
                      Global Connectivity
                    </h4>
                    <p>
                      Direct connections to all major exchanges and trading
                      venues for optimal execution.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-lg mb-2">
                      Risk Management
                    </h4>
                    <p>
                      Sophisticated risk controls and monitoring systems to
                      ensure consistent performance.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-lg mb-2">
                      Experienced Team
                    </h4>
                    <p>
                      Trading professionals with backgrounds in traditional
                      finance and cryptocurrency markets.
                    </p>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <Image
                  src="/images/about/about-3.png"
                  alt="Market Making"
                  className="rounded-lg shadow-md w-full"
                  width={930}
                  height={593}
                />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Our Market Making Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-brown-500 rounded-full flex items-center justify-center mb-4">
                  <IconSVG type="service-1" size={24} color="#FFFFFF" />
                </div>
                <h3 className="text-lg font-semibold mb-3">
                  Exchange Market Making
                </h3>
                <p className="mb-4">
                  We provide continuous two-sided markets on exchanges, ensuring
                  tight spreads and sufficient depth.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>24/7 continuous quoting</li>
                  <li>Customizable spread and depth parameters</li>
                  <li>Support for spot and derivative markets</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-brown-500 rounded-full flex items-center justify-center mb-4">
                  <IconSVG type="service-2" size={24} color="#FFFFFF" />
                </div>
                <h3 className="text-lg font-semibold mb-3">
                  Token Launch Support
                </h3>
                <p className="mb-4">
                  Specialized market making services for new token launches to
                  ensure a smooth and successful listing.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Pre-launch planning and strategy</li>
                  <li>Intensive liquidity during initial listing</li>
                  <li>Transition to sustainable long-term market making</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-brown-500 rounded-full flex items-center justify-center mb-4">
                  <IconSVG type="service-3" size={24} color="#FFFFFF" />
                </div>
                <h3 className="text-lg font-semibold mb-3">
                  Cross-Exchange Liquidity
                </h3>
                <p className="mb-4">
                  Efficient price alignment across multiple trading venues to
                  create a unified global market.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Price consistency across exchanges</li>
                  <li>Reduced fragmentation of liquidity</li>
                  <li>Better overall market efficiency</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-brown-500 rounded-full flex items-center justify-center mb-4">
                  <IconSVG type="service-4" size={24} color="#FFFFFF" />
                </div>
                <h3 className="text-lg font-semibold mb-3">
                  Customized Solutions
                </h3>
                <p className="mb-4">
                  Bespoke market making solutions tailored to your specific
                  token economics and market needs.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Detailed market structure analysis</li>
                  <li>Performance metrics and reporting</li>
                  <li>Continuous strategy optimization</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-brown-500 text-white rounded-md font-medium hover:bg-brown-600 transition-colors"
            >
              Contact Our Market Making Team
            </a>
          </div>
        </div>
      </div>

      <CtaOne />
    </>
  );
}
