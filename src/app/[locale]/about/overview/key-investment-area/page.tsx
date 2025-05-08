import React from "react";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CounterTwo from "@/components/Section/Counter/CounterTwo";
import CtaOne from "@/components/Section/CTA/CtaOne";

export default function KeyInvestmentAreas() {
  return (
    <>
      <BreadcrumbItem
        link="Key Investment Areas"
        img="/images/banner/about1.png"
        title="Key Investment Areas"
        desc="Our focus areas in blockchain and crypto innovation."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Key Investment Areas</h2>
          <ul className="text-lg mb-6 text-left list-disc list-inside inline-block text-gray-800">
            <li className="mb-2">
              <b>Layer 1 & Layer 2 Protocols</b> – Next-gen blockchain networks
              driving scalability and interoperability.
            </li>
            <li className="mb-2">
              <b>Decentralized Finance (DeFi)</b> – Pioneering financial
              applications disrupting traditional finance.
            </li>
            <li className="mb-2">
              <b>Web3 & Metaverse</b> – Transforming digital ownership, gaming,
              and creator economies.
            </li>
            <li className="mb-2">
              <b>Infrastructure & Security</b> – Enhancing the safety,
              efficiency, and adoption of crypto technologies.
            </li>
            <li className="mb-2">
              <b>Tokenomics & Liquidity</b> – Supporting projects with
              sustainable economic models and liquidity solutions.
            </li>
          </ul>
          <p className="text-lg mt-8">
            With a forward-thinking approach, we stand at the forefront of a
            rapidly evolving digital economy, fueling the next unicorns of the
            blockchain revolution.
          </p>
        </div>
      </div>
      <CounterTwo classname="lg:pb-[100px] sm:pb-16 pb-10" />
      <CtaOne />
    </>
  );
}
