import React from "react";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import OurTeam from "@/components/Section/OurTeam/OurTeam";
import CtaOne from "@/components/Section/CTA/CtaOne";
import Link from "next/link";
import ImageFallback from "@/components/ImageFallback";
import IconSVG from "@/components/IconSVG";

export default function TeamPage() {
  return (
    <>
      <BreadcrumbItem
        link="Our Team"
        img="/images/banner/about1.png"
        title="Our Team"
        desc="Meet the exceptional professionals behind Golden Gate Ventures' success. Our team brings together expertise in blockchain technology, venture capital, and strategic advisory."
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Leadership Team</h2>
          <p className="text-lg">
            Our leadership team brings decades of combined experience in venture
            capital, blockchain technology, and financial markets.
          </p>
        </div>
      </div>

      <OurTeam />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Expertise</h2>
          <p className="text-lg">
            Our team combines deep technical knowledge with financial expertise
            to identify and support the most promising blockchain and
            cryptocurrency ventures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <IconSVG type="service-1" size={32} color="#925034" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Investment Strategy</h3>
            <p className="text-sm">
              Expert portfolio management and strategic investment planning
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <IconSVG type="service-2" size={32} color="#925034" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Industry Expertise</h3>
            <p className="text-sm">
              Deep knowledge across blockchain, DeFi, and emerging technologies
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <IconSVG type="service-3" size={32} color="#925034" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Global Network</h3>
            <p className="text-sm">
              Extensive connections with industry leaders and strategic partners
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <IconSVG type="service-4" size={32} color="#925034" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Portfolio Growth</h3>
            <p className="text-sm">
              Hands-on support to accelerate your company&apos;s development
            </p>
          </div>
        </div>
      </div>

      <CtaOne />
    </>
  );
}
