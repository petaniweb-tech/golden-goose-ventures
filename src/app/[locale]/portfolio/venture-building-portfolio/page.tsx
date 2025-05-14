import React from 'react';
import BreadcrumbItem from '@/components/Breadcrumb/BreadcrumbItem';
import CtaOne from '@/components/Section/CTA/CtaOne';
import IconSVG from '@/components/IconSVG';

export default function VentureBuildingPage() {
  return (
    <>
      <BreadcrumbItem
        link="Venture Builder"
        img="/images/banner/about1.png"
        title="Venture Builder for Crypto & Web3 Incubator"
        desc="An active, hands-on incubator that does not just fund projects—it builds them from scratch."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Venture Builder for Crypto & Web3 Incubator
            </h2>
            <p className="text-lg mb-8">
              A venture builder (or &quot;startup studio&quot;) is an active,
              hands-on incubator that does not just fund projects—it builds them
              from scratch. Unlike traditional accelerators, a venture builder
              provides full-stack support: ideation, technical development,
              tokenomics, governance, and go-to-market strategy.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Core Structure</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>In-House Labs</strong> Internal team of blockchain
                    devs, economists, and growth hackers who prototype new
                    projects.
                  </li>
                  <li>
                    <strong>Portfolio Incubation</strong> Selected external
                    startups receive capital + operational support (legal,
                    marketing, smart contract audits).
                  </li>
                  <li>
                    <strong>Shared Resources</strong> Legal, token engineering,
                    and community growth teams support all ventures.
                  </li>
                  <li>
                    <strong>Tokenized Ownership</strong> Venture builder takes
                    equity + tokens in projects, aligning long-term incentives.
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Key Advantages</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    ✅ <strong>Faster Execution</strong> Pre-vetted talent and
                    resources reduce startup friction.
                  </li>
                  <li>
                    ✅ <strong>Diversified Risk</strong> Multiple projects in
                    parallel increase success odds.
                  </li>
                  <li>
                    ✅ <strong>Network Effects</strong> Cross-pollination
                    between incubated projects boosts growth.
                  </li>
                </ul>
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

      <CtaOne />
    </>
  );
}
