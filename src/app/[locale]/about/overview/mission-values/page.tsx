import React from "react";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CounterTwo from "@/components/Section/Counter/CounterTwo";
import CtaOne from "@/components/Section/CTA/CtaOne";

export default function MissionValues() {
  return (
    <>
      <BreadcrumbItem
        link="Mission & Values"
        img="/images/banner/about1.png"
        title="Our Mission & Values"
        desc="We're committed to accelerating the growth of the next wave of blockchain and cryptocurrency innovation."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            About Golden Goose Ventures
          </h2>
          <p className="text-lg mb-6">
            At Golden Gooes Ventures, we are committed to accelerating the
            growth of the next wave of blockchain and cryptocurrency innovation.
            As a leading venture capital firm in the crypto space, we invest in
            visionary entrepreneurs, groundbreaking protocols, and disruptive
            technologies that redefine the future of finance and digital
            ownership.
          </p>
          <p className="text-lg mb-6">
            Founded in [Year], our firm brings together industry veterans,
            financial strategists, and crypto-native builders with a shared
            passion for decentralization, security, and scalability. With deep
            expertise in blockchain infrastructure, DeFi, Web3 applications, and
            digital asset markets, we provide more than just capital—we offer
            strategic guidance, technical support, and unparalleled access to an
            exclusive network of partners, developers, and industry leaders.
          </p>
          <p className="text-lg">
            We believe in long-term value creation and sustainable growth,
            investing in projects that align with our vision of a decentralized
            and trustless future. Our portfolio companies benefit from our
            extensive experience in liquidity provisioning, regulatory strategy,
            and global market expansion.
          </p>
        </div>
      </div>
      <CounterTwo classname="lg:pb-[100px] sm:pb-16 pb-10" />
      <CtaOne />
    </>
  );
}
