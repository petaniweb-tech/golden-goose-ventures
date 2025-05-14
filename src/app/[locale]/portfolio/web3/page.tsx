import React from "react";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import portfolioData from "@/data/portfolio.json";
import CaseStudyItem from "@/components/CaseStudy/CaseStudyItem";
import CtaOne from "@/components/Section/CTA/CtaOne";

export default function Web3Portfolio() {
  // Filter portfolio data to get only web3 category items
  const web3Portfolio = portfolioData.filter(
    (item) => item.category === "web3"
  );

  return (
    <>
      <BreadcrumbItem
        link="Web3 Portfolio"
        img="/images/banner/about1.png"
        title="Web3 Portfolio"
        desc="Our investments in the next generation of decentralized applications, metaverse platforms, and creator economy technologies."
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Web3 Investments</h2>
          <p className="text-lg">
            Golden Goose Ventures is backing pioneering Web3 startups that are
            building decentralized applications, metaverse experiences, and
            digital ownership solutions.
          </p>
        </div>

        <div className="grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-8 gap-y-10 mb-16">
          {web3Portfolio.map((item, index) => (
            <CaseStudyItem data={item} style="style-one" key={index} />
          ))}
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h3 className="text-2xl font-bold mb-4">Why We Invest in Web3</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div>
              <h4 className="text-xl font-semibold mb-3">User Ownership</h4>
              <p>
                Web3 reimagines the internet by giving users ownership and
                control over their data and digital assets.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">Creator Economy</h4>
              <p>
                New models for content creation and monetization are emerging,
                allowing creators to connect directly with their audiences.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">
                Immersive Experiences
              </h4>
              <p>
                The metaverse represents the next frontier in how humans
                interact with digital environments and each other.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">Digital Identity</h4>
              <p>
                Web3 enables new approaches to identity and reputation that
                preserve privacy while establishing trust.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CtaOne />
    </>
  );
}
