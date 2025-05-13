import React from "react";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CtaOne from "@/components/Section/CTA/CtaOne";
import IconSVG from "@/components/IconSVG";
import Link from "next/link";

export default function StakeholderInfoPage() {
  return (
    <>
      <BreadcrumbItem
        link="Stakeholder Info"
        img="/images/banner/about1.png"
        title="Business Expansion Strategies"
        desc="Scaling with precision—discover how Golden Goose Ventures drives growth and innovation across markets and verticals."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Scaling with Precision
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brown-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconSVG type="service-1" size={32} color="#FFFFFF" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">
                    Geographic Growth
                  </h4>
                  <p>
                    Targeting emerging markets (UAE, SE Asia) via local joint
                    ventures and strategic partnerships to unlock new
                    opportunities.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brown-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconSVG type="service-2" size={32} color="#FFFFFF" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">
                    Vertical Integration
                  </h4>
                  <p>
                    Acquiring analytics tools and infrastructure to enhance due
                    diligence, portfolio monitoring, and operational efficiency.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brown-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconSVG type="service-3" size={32} color="#FFFFFF" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">
                    Tokenized Ventures
                  </h4>
                  <p>
                    Spin-out projects with shared equity and token incentives,
                    aligning interests and accelerating ecosystem growth.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brown-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconSVG type="service-4" size={32} color="#FFFFFF" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">
                    Strategic Alliances
                  </h4>
                  <p>
                    Partnering with Tier-1 exchanges and institutional players
                    for liquidity access and market expansion.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mb-8">
              <Link href="/contact/partnership" legacyBehavior>
                <a className="inline-block px-8 py-3 bg-brown-500 text-white rounded-md font-medium hover:bg-brown-600 transition-colors">
                  Propose a Partnership
                </a>
              </Link>
            </div>
            <div className="text-center text-gray-600 text-sm">
              <p>
                Golden Goose Ventures leverages a data-driven, collaborative
                approach to business expansion—combining local market expertise,
                vertical integration, and innovative token models. Our strategic
                alliances and commitment to operational excellence ensure
                sustainable growth for our partners and portfolio companies.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CtaOne />
    </>
  );
}
