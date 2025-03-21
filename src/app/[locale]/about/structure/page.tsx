import React from "react";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CtaOne from "@/components/Section/CTA/CtaOne";

export default function CorporateStructure() {
  return (
    <>
      <BreadcrumbItem
        link="Corporate Structure"
        img="/images/banner/about1.png"
        title="Corporate Structure"
        desc="Golden Gate Ventures operates through a strategic corporate structure designed to maximize efficiency and value creation."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Our Corporate Structure
          </h2>
          <p className="text-lg mb-8">
            Golden Gate Ventures operates through a well-defined corporate
            structure, with specialized divisions that work together to provide
            comprehensive investment and advisory services in the blockchain and
            cryptocurrency space.
          </p>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h3 className="text-xl font-semibold mb-4">Organizational Chart</h3>
            <div className="w-full bg-white flex items-center justify-center mb-4">
              <img
                src="/images/banner/form-benefit-two.png"
                alt="Organization Chart"
                className="max-h-full object-contain"
              />
            </div>
            <p className="text-sm text-gray-600">
              Our organization is structured to ensure clear lines of
              communication and efficient decision-making processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                Investment Division
              </h3>
              <p>
                Responsible for portfolio management, deal sourcing, due
                diligence, and investment strategy implementation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Advisory Services</h3>
              <p>
                Provides strategic guidance, market insights, and operational
                support to portfolio companies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Market Making</h3>
              <p>
                Specialized division focused on providing liquidity and market
                making services in crypto markets.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">OTC Trading</h3>
              <p>
                Facilitates over-the-counter trading of cryptocurrencies for
                institutional clients and partners.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Global Presence</h3>
            <p className="mb-6">
              Golden Gate Ventures maintains offices in key strategic locations
              to serve our global client base:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="border rounded p-4">
                <h4 className="font-medium mb-2">Singapore</h4>
                <p className="text-sm">Global Headquarters</p>
              </div>

              <div className="border rounded p-4">
                <h4 className="font-medium mb-2">Hong Kong</h4>
                <p className="text-sm">Asian Operations</p>
              </div>

              <div className="border rounded p-4">
                <h4 className="font-medium mb-2">San Francisco</h4>
                <p className="text-sm">North American Office</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CtaOne />
    </>
  );
}
