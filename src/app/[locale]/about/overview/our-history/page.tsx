import React from "react";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CounterTwo from "@/components/Section/Counter/CounterTwo";
import CtaOne from "@/components/Section/CTA/CtaOne";

export default function OurHistory() {
  return (
    <>
      <BreadcrumbItem
        link="Our History"
        img="/images/banner/about1.png"
        title="Our History"
        desc="A journey of innovation and impact in blockchain and crypto investment."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our History</h2>
          <p className="text-lg mb-6">
            Golden Goose Ventures was founded in 2017 by a group of blockchain
            enthusiasts, financial strategists, and technology visionaries who
            recognized the transformative potential of decentralized
            technologies. Our mission from the outset was clear: to empower the
            next generation of innovators and entrepreneurs shaping the future
            of finance and digital ownership.
          </p>
          <p className="text-lg mb-6">
            In our early years, we focused on building a robust network within
            the blockchain ecosystem, forging partnerships with pioneering
            projects and thought leaders. Our first investments were in
            foundational Layer 1 protocols and early DeFi platforms, many of
            which have since become industry leaders.
          </p>
          <p className="text-lg mb-6">
            As the industry evolved, so did we. We expanded our portfolio to
            include Web3 applications, NFT platforms, and metaverse projects,
            always staying ahead of the curve and anticipating the next wave of
            innovation. Our commitment to supporting visionary founders has led
            to a track record of successful exits, strategic partnerships, and
            global impact.
          </p>
          <p className="text-lg">
            Today, Golden Goose Ventures stands as a trusted partner for
            entrepreneurs and investors alike, with a reputation for integrity,
            expertise, and a relentless drive to shape the future of the digital
            economy.
          </p>
        </div>
      </div>
      <CounterTwo classname="lg:pb-[100px] sm:pb-16 pb-10" />
      <CtaOne />
    </>
  );
}
