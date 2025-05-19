import React from "react";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CtaOne from "@/components/Section/CTA/CtaOne";
import IconSVG from "@/components/IconSVG";
import Link from "next/link";

export default function CorporateGovernancePage() {
  return (
    <>
      <BreadcrumbItem
        link="Corporate Governance"
        img="/images/irs/Corporate Governance.webp"
        title="Corporate Governance"
        desc="Operational transparency and accountability at every level."
        bgBlack="bg-black/50"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Operational Transparency
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brown-500 rounded-full flex items-center justify-center mt-1">
                    <IconSVG type="service-1" size={24} color="#FFFFFF" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">
                      Board of Directors
                    </h4>
                    <ul className="list-disc list-inside text-sm ml-4">
                      <li>
                        <strong>Jane Lee</strong> – Chairwoman, ex-Morgan
                        Stanley, 20+ years in fintech
                      </li>
                      <li>
                        <strong>Dr. Amir Patel</strong> – Blockchain researcher,
                        ETH Zurich
                      </li>
                      <li>
                        <strong>Linda Tan</strong> – Legal & Compliance, former
                        MAS advisor
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brown-500 rounded-full flex items-center justify-center mt-1">
                    <IconSVG type="service-2" size={24} color="#FFFFFF" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Compliance</h4>
                    <p className="text-sm">
                      Regular third-party audits by <strong>Deloitte</strong>{" "}
                      and <strong>ChainSecurity</strong> ensure robust risk
                      management and regulatory adherence.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brown-500 rounded-full flex items-center justify-center mt-1">
                    <IconSVG type="service-3" size={24} color="#FFFFFF" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Ethics</h4>
                    <p className="text-sm">
                      Proud signatory of the{" "}
                      <Link
                        href="https://web3governancecharter.org"
                        target="_blank"
                        className="text-brown-500 underline"
                      >
                        Web3 Governance Charter
                      </Link>
                      , upholding the highest standards of integrity and ethical
                      conduct in the industry.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="text-center mb-8">
              <a
                href="/downloads/governance-framework.pdf"
                className="inline-block px-8 py-3 bg-brown-500 text-white rounded-md font-medium hover:bg-brown-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download our Governance Framework PDF
              </a>
            </div>
            <div className="text-center text-gray-600 text-sm">
              <p>
                Golden Goose Ventures is committed to operational transparency,
                independent oversight, and continuous improvement. Our
                governance framework is designed to protect stakeholders, foster
                trust, and ensure long-term sustainability in the evolving Web3
                landscape.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CtaOne />
    </>
  );
}
