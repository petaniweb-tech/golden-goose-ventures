import React from "react";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CtaOne from "@/components/Section/CTA/CtaOne";
import IconSVG from "@/components/IconSVG";

export default function CompetitiveStrengthPage() {
  return (
    <>
      <BreadcrumbItem
        link="Competitive Strength"
        img="/images/banner/about1.png"
        title="Competitive Strengths"
        desc="Why choose Golden Goose Ventures? Discover our unique advantages in the Web3 and blockchain ecosystem."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Why Choose Us?
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brown-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconSVG type="service-1" size={32} color="#FFFFFF" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">
                    Full-Stack Expertise
                  </h4>
                  <p>
                    From smart contract audits to tokenomics design – all under
                    one roof.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brown-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconSVG type="service-2" size={32} color="#FFFFFF" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">
                    Regulatory-First Approach
                  </h4>
                  <p>
                    Pre-vetted compliance frameworks for SEC, MiCA, and VARA.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brown-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconSVG type="service-3" size={32} color="#FFFFFF" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">
                    Liquidity Infrastructure
                  </h4>
                  <p>$50M+ dedicated liquidity pool for portfolio projects.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brown-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconSVG type="service-4" size={32} color="#FFFFFF" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">
                    Builder Network
                  </h4>
                  <p>100+ vetted developers, economists, and growth hackers.</p>
                </div>
              </div>
            </div>
            <div className="text-center text-gray-600 text-sm">
              <p>
                Golden Goose Ventures stands apart through a holistic approach
                to blockchain innovation, regulatory compliance, and ecosystem
                growth. Our clients benefit from deep technical expertise,
                robust legal frameworks, and a global network of builders and
                partners dedicated to their success.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CtaOne />
    </>
  );
}
