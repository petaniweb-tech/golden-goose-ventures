import React from "react";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CtaOne from "@/components/Section/CTA/CtaOne";
import Image from "next/image";
import Link from "next/link";

export default function CorporateStructure() {
  return (
    <>
      <div className="container mx-auto px-4 py-4">
        <nav className="mb-4 text-sm">
          <Link href="/about" className="text-blue-600 hover:underline">
            About Us
          </Link>{" "}
          &gt; Corporate Structure
        </nav>
      </div>
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
            Our organization is structured to maximize efficiency, investor
            confidence, and regulatory clarity across jurisdictions. Each entity
            plays a specialized role in our overall strategy for blockchain and
            crypto investments.
          </p>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h3 className="text-xl font-semibold mb-4">Organizational Chart</h3>
            <div className="w-full bg-white flex items-center justify-center mb-4">
              <Image
                src="/images/banner/form-benefit-two.png"
                alt="Organization Chart"
                className="max-h-full object-contain"
                width={800}
                height={600}
              />
            </div>
            <p className="text-sm text-gray-600">
              The structure below ensures clear lines of responsibility, risk
              isolation, and global operational reach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* 1. Holding Company */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                1. Holding Company (Crypto Ventures Holdings Ltd.)
              </h3>
              <ul className="list-disc list-inside text-sm mb-2">
                <li>
                  <strong>Jurisdiction:</strong> Cayman Islands (tax-neutral,
                  investor-friendly).
                </li>
                <li>
                  <strong>Role:</strong> Owns subsidiaries, holds intellectual
                  property, and manages overall strategy.
                </li>
              </ul>
            </div>
            {/* 2. Investment Fund */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                2. Investment Fund (Crypto Alpha Fund LP)
              </h3>
              <ul className="list-disc list-inside text-sm mb-2">
                <li>
                  <strong>Structure:</strong> Limited Partnership (Cayman
                  exempted).
                </li>
                <li>
                  <strong>General Partner (GP):</strong> Crypto Ventures GP LLC
                  (Delaware for US investors).
                </li>
                <li>
                  <strong>Limited Partners (LPs):</strong> Institutional
                  investors, family offices, and accredited individuals.
                </li>
                <li>
                  <strong>Focus:</strong> Early-stage blockchain startups, token
                  investments, and DeFi projects.
                </li>
              </ul>
            </div>
            {/* 3. Management Company */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                3. Management Company (Crypto Ventures Management Pte. Ltd.)
              </h3>
              <ul className="list-disc list-inside text-sm mb-2">
                <li>
                  <strong>Jurisdiction:</strong> Singapore (regulatory clarity,
                  crypto-friendly).
                </li>
                <li>
                  <strong>Role:</strong>
                  <ul className="list-disc ml-5">
                    <li>
                      Deals sourcing, due diligence, and portfolio management.
                    </li>
                    <li>
                      Holds necessary licenses (e.g., MAS exemption for fund
                      management).
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* 4. Special Purpose Vehicles (SPVs) */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                4. Special Purpose Vehicles (SPVs) (Crypto Ventures SPV LLCs)
              </h3>
              <ul className="list-disc list-inside text-sm mb-2">
                <li>
                  <strong>Purpose:</strong> Isolate risk per investment (e.g.,
                  SAFTs, pre-seed rounds).
                </li>
                <li>
                  <strong>Jurisdiction:</strong> Delaware (flexibility, fast
                  setup).
                </li>
              </ul>
            </div>
            {/* 5. Compliance & Legal Entity */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                5. Compliance & Legal Entity (Crypto Compliance Ltd.)
              </h3>
              <ul className="list-disc list-inside text-sm mb-2">
                <li>
                  <strong>Jurisdiction:</strong> Switzerland (strong crypto
                  regulations).
                </li>
                <li>
                  <strong>Role:</strong>
                  <ul className="list-disc ml-5">
                    <li>Ensures AML/KYC adherence.</li>
                    <li>
                      Manages licensing (e.g., FINMA registration if required).
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* 6. Research & Advisory Arm */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                6. Research & Advisory Arm (Crypto Labs DAO LLC)
              </h3>
              <ul className="list-disc list-inside text-sm mb-2">
                <li>
                  <strong>Role:</strong>
                  <ul className="list-disc ml-5">
                    <li>
                      Tokenomics design, smart contract audits, and market
                      research.
                    </li>
                    <li>Operates as a decentralized advisory network.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="bg-white p-8 rounded-lg shadow-md">
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
          </div> */}
        </div>
      </div>

      <CtaOne />
    </>
  );
}
