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
        img="/images/irs/Business Expansion Strategies.webp"
        title="Stakeholder Info"
        desc="Understanding our stakeholders and their interests is crucial for our success. We value transparency and collaboration with all our partners."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Transparency and Collaboration
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brown-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconSVG type="service-1" size={32} color="#FFFFFF" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Investors</h4>
                  <p>
                    We prioritize transparency and collaboration with all our
                    stakeholders, ensuring mutual trust and shared success.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brown-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconSVG type="service-2" size={32} color="#FFFFFF" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Partners</h4>
                  <p>
                    We collaborate with leading institutions and experts to
                    deliver innovative solutions and support to our partners.
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
            <div className="text-center text-gray-600 text-md">
              <p>
                We value transparency and collaboration with all our
                stakeholders, ensuring mutual trust and shared success.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CtaOne />
    </>
  );
}
