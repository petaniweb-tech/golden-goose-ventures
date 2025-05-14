import React from "react";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import portfolioData from "@/data/portfolio.json";
import CaseStudyItem from "@/components/CaseStudy/CaseStudyItem";
import CtaOne from "@/components/Section/CTA/CtaOne";

export default function BlockchainPortfolio() {
  // Filter portfolio data to get only blockchain category items
  const blockchainPortfolio = portfolioData.filter(
    (item) => item.category === "blockchain"
  );

  return (
    <>
      <BreadcrumbItem
        link="Blockchain Portfolio"
        img="/images/banner/about1.png"
        title="Blockchain Portfolio"
        desc="Our investments in leading blockchain infrastructure and enterprise solutions building the foundation of the decentralized economy."
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Blockchain Investments</h2>
          <p className="text-lg">
            Golden Goose Ventures invests in cutting-edge blockchain
            infrastructure companies that are building the foundation for the
            next generation of decentralized applications.
          </p>
        </div>

        <div className="grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-8 gap-y-10 mb-16">
          {blockchainPortfolio.map((item, index) => (
            <CaseStudyItem data={item} style="style-one" key={index} />
          ))}
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h3 className="text-2xl font-bold mb-4">
            Why We Invest in Blockchain
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div>
              <h4 className="text-xl font-semibold mb-3">
                Foundation Technology
              </h4>
              <p>
                Blockchain provides the foundational infrastructure for a more
                transparent, efficient, and decentralized global economy.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">
                Enterprise Adoption
              </h4>
              <p>
                We see growing enterprise adoption of blockchain technology
                across industries from finance to supply chain management.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">Interoperability</h4>
              <p>
                We focus on solutions that bridge different blockchain
                ecosystems, enabling greater connectivity and value exchange.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">
                Scalability Solutions
              </h4>
              <p>
                We invest in technologies that address fundamental blockchain
                scalability challenges to enable mass adoption.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CtaOne />
    </>
  );
}
