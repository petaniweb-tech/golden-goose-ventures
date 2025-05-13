import React from "react";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CtaOne from "@/components/Section/CTA/CtaOne";
import IconSVG from "@/components/IconSVG";
import Link from "next/link";

export default function CorporateProfilePage() {
  return (
    <>
      <BreadcrumbItem
        link="Corporate Profile"
        img="/images/banner/about1.png"
        title="Corporate Profile"
        desc="Discover Golden Goose Ventures' vision, mission, and core values as a leader in blockchain innovation."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Building the Future of Web3, Today
            </h2>
            <p className="text-lg mb-8 text-center">
              Golden Goose Ventures is a next-generation blockchain venture
              studio and advisory firm, specializing in smart contract
              development, liquidity solutions, and compliant growth strategies.
              Founded in 2021, we operate at the intersection of institutional
              expertise and decentralized innovation, with teams across
              Singapore, Zurich, and San Francisco.
            </p>
            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Core Pillars
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brown-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconSVG type="service-1" size={32} color="#FFFFFF" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Innovation</h4>
                  <p>
                    Incubating cutting-edge protocols and pioneering new
                    frontiers in decentralized technology.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brown-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconSVG type="service-2" size={32} color="#FFFFFF" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Trust</h4>
                  <p>
                    Audited by leading partners and certified for security and
                    compliance, ensuring peace of mind for our clients and
                    stakeholders.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brown-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconSVG type="service-3" size={32} color="#FFFFFF" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Global Reach</h4>
                  <p>
                    Serving clients in 30+ jurisdictions, empowering projects
                    and enterprises worldwide to scale securely and compliantly.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mb-8">
              <Link href="/about/mission-history" legacyBehavior>
                <a className="inline-block px-8 py-3 bg-brown-500 text-white rounded-md font-medium hover:bg-brown-600 transition-colors">
                  Learn more about our Mission &amp; History
                </a>
              </Link>
            </div>
            <div className="text-center text-gray-600 text-sm">
              <p>
                At Golden Goose Ventures, we believe in shaping the digital
                economy through responsible innovation, strategic partnerships,
                and a relentless pursuit of excellence. Our multidisciplinary
                teams bring together institutional rigor and entrepreneurial
                spirit to unlock the full potential of Web3 for our clients and
                the broader ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CtaOne />
    </>
  );
}
