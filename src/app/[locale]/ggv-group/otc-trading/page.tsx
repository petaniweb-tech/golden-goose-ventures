import React from "react";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CtaOne from "@/components/Section/CTA/CtaOne";
import IconSVG from "@/components/IconSVG";
import Image from "next/image";

export default function OTCTradingPage() {
  return (
    <>
      <BreadcrumbItem
        link="OTC Trading"
        img="/images/banner/about1.png"
        title="OTC Trading"
        desc="Golden Gate Ventures' over-the-counter trading desk providing high-touch service for institutional cryptocurrency transactions."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">
              GGV OTC Trading Services
            </h2>
            <p className="text-lg mb-8">
              Our OTC (Over-The-Counter) trading desk provides institutional
              clients, high-net-worth individuals, and corporate treasuries with
              a private, secure, and efficient way to execute large
              cryptocurrency transactions outside of traditional exchanges,
              minimizing price impact and market risk.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <div>
                <Image
                  src="/images/blog/930x593.png"
                  alt="OTC Trading Services"
                  className="rounded-lg shadow-lg w-full"
                  width={930}
                  height={593}
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Why Trade OTC?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-brown-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">1</span>
                    </div>
                    <div>
                      <span className="font-medium">Price Efficiency</span>
                      <p className="mt-1">
                        Minimize slippage and price impact for large
                        transactions.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-brown-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">2</span>
                    </div>
                    <div>
                      <span className="font-medium">Privacy</span>
                      <p className="mt-1">
                        Execute large trades without revealing your strategy to
                        the market.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-brown-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">3</span>
                    </div>
                    <div>
                      <span className="font-medium">Personalized Service</span>
                      <p className="mt-1">
                        Receive dedicated attention from experienced trading
                        professionals.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-brown-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">4</span>
                    </div>
                    <div>
                      <span className="font-medium">
                        Settlement Flexibility
                      </span>
                      <p className="mt-1">
                        Customize settlement terms to meet your specific needs.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Our Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-brown-500 rounded-full flex items-center justify-center mb-4">
                  <IconSVG type="service-1" size={24} color="#FFFFFF" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Block Trades</h3>
                <p>
                  Execute large cryptocurrency trades with minimal market impact
                  and competitive pricing.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-brown-500 rounded-full flex items-center justify-center mb-4">
                  <IconSVG type="service-2" size={24} color="#FFFFFF" />
                </div>
                <h3 className="text-lg font-semibold mb-3">RFQ Trading</h3>
                <p>
                  Request firm quotes for specific trading pairs with guaranteed
                  execution prices.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-brown-500 rounded-full flex items-center justify-center mb-4">
                  <IconSVG type="service-3" size={24} color="#FFFFFF" />
                </div>
                <h3 className="text-lg font-semibold mb-3">
                  Treasury Management
                </h3>
                <p>
                  Comprehensive solutions for corporate treasury departments
                  looking to allocate to digital assets.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-brown-500 text-white rounded-md font-medium hover:bg-brown-600 transition-colors"
            >
              Contact Our Trading Desk
            </a>
          </div>
        </div>
      </div>

      <CtaOne />
    </>
  );
}
