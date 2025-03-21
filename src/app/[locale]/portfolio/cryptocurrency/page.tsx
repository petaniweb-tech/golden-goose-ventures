import React from "react";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import portfolioData from "@/data/portfolio.json";
import CaseStudyItem from "@/components/CaseStudy/CaseStudyItem";
import CtaOne from "@/components/Section/CTA/CtaOne";

export default function CryptocurrencyPortfolio() {
  // Filter portfolio data to get only cryptocurrency category items
  const cryptoPortfolio = portfolioData.filter(
    (item) => item.category === "cryptocurrency"
  );

  return (
    <>
      <BreadcrumbItem
        link="Cryptocurrency Portfolio"
        img="/images/banner/about1.png"
        title="Cryptocurrency Portfolio"
        desc="Our investments in innovative cryptocurrency exchanges, custody solutions, and digital asset platforms transforming the financial landscape."
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Cryptocurrency Investments
          </h2>
          <p className="text-lg">
            Golden Gate Ventures supports leading cryptocurrency platforms and
            infrastructure that are building secure, compliant, and accessible
            digital asset solutions.
          </p>
        </div>

        <div className="grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-8 gap-y-10 mb-16">
          {cryptoPortfolio.map((item, index) => (
            <CaseStudyItem data={item} style="style-one" key={index} />
          ))}
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h3 className="text-2xl font-bold mb-4">
            Why We Invest in Cryptocurrency
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div>
              <h4 className="text-xl font-semibold mb-3">
                Financial Revolution
              </h4>
              <p>
                Cryptocurrencies are fundamentally changing how value is
                transferred and stored in the digital economy.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">
                Institutional Adoption
              </h4>
              <p>
                We're witnessing accelerating institutional adoption of digital
                assets as a new asset class.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">
                Regulatory Evolution
              </h4>
              <p>
                We focus on compliant solutions that will thrive as regulatory
                frameworks mature globally.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">
                Infrastructure Development
              </h4>
              <p>
                We invest in the infrastructure needed to support the growing
                cryptocurrency ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CtaOne />
    </>
  );
}
