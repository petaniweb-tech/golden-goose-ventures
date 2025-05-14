import React from "react";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import portfolioData from "@/data/portfolio.json";
import CaseStudyItem from "@/components/CaseStudy/CaseStudyItem";
import CtaOne from "@/components/Section/CTA/CtaOne";

export default function DefiPortfolio() {
  // Filter portfolio data to get only defi category items
  const defiPortfolio = portfolioData.filter(
    (item) => item.category === "defi"
  );

  return (
    <>
      <BreadcrumbItem
        link="DeFi Portfolio"
        img="/images/banner/about1.png"
        title="DeFi Portfolio"
        desc="Our investments in decentralized finance protocols and platforms reimagining lending, trading, and yield generation without intermediaries."
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">DeFi Investments</h2>
          <p className="text-lg">
            Golden Goose Ventures invests in innovative DeFi protocols that are
            democratizing access to financial services and creating new economic
            models for the digital age.
          </p>
        </div>

        <div className="grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-8 gap-y-10 mb-16">
          {defiPortfolio.map((item, index) => (
            <CaseStudyItem data={item} style="style-one" key={index} />
          ))}
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h3 className="text-2xl font-bold mb-4">Why We Invest in DeFi</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div>
              <h4 className="text-xl font-semibold mb-3">
                Financial Inclusion
              </h4>
              <p>
                DeFi protocols are expanding access to financial services for
                underserved populations globally.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">
                Programmable Finance
              </h4>
              <p>
                Smart contract-based finance enables automation and innovation
                impossible in traditional systems.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">Composability</h4>
              <p>
                The composable nature of DeFi protocols creates network effects
                and accelerates innovation.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">Market Efficiency</h4>
              <p>
                DeFi creates more efficient markets by reducing intermediaries
                and increasing transparency.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CtaOne />
    </>
  );
}
