import React from "react";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CaseStudyOne from "@/components/CaseStudy/CaseStudyOne";
import portfolioData from "@/data/portfolio.json";
import CtaOne from "@/components/Section/CTA/CtaOne";

export default function PortfolioPage() {
  return (
    <>
      <BreadcrumbItem
        link="Portfolio"
        img="/images/banner/about1.png"
        title="Our Portfolio"
        desc="Discover our strategic investments in blockchain, cryptocurrency, DeFi, and Web3 companies driving innovation in the digital economy."
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Investment Portfolio</h2>
          <p className="text-lg">
            Golden Goose Ventures invests in visionary teams building the future
            of blockchain and digital assets. Our portfolio spans
            infrastructure, exchanges, DeFi protocols, and Web3 applications.
          </p>
        </div>
      </div>

      <CaseStudyOne data={portfolioData} />

      <div className="container mx-auto px-4 py-12 mb-8">
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Investment Philosophy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            <div>
              <h4 className="text-xl font-semibold mb-3">Long-term Value</h4>
              <p>
                We invest in projects with strong fundamentals and sustainable
                growth potential rather than short-term speculation.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">
                Technological Innovation
              </h4>
              <p>
                We seek companies developing novel solutions to complex problems
                in the blockchain ecosystem.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">
                Strategic Partnerships
              </h4>
              <p>
                We leverage our extensive network to create valuable connections
                for our portfolio companies.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CtaOne />
    </>
  );
}
