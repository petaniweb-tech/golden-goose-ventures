import React from "react";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import OurTeam from "@/components/Section/OurTeam/OurTeam";
import CtaOne from "@/components/Section/CTA/CtaOne";
import Link from "next/link";
import ImageFallback from "@/components/ImageFallback";
import IconSVG from "@/components/IconSVG";

export default function VentureCapitalPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-4">
        <nav className="mb-4 text-sm">
          <Link href="/about" className="text-blue-600 hover:underline">
            About Us
          </Link>{" "}
          &gt; Venture Capital
        </nav>
      </div>
      <BreadcrumbItem
        link="Venture Capital"
        img="/images/banner/about1.png"
        title="Venture Capital"
        desc="We invest in high-potential blockchain startups and digital assets across various stages."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Venture Capital
          </h2>
          <p className="text-lg mb-8 text-center">
            We invest in high-potential blockchain startups and digital assets
            across various stages:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">Seed & Early-Stage</h3>
              <ul className="list-disc list-inside text-sm">
                <li>
                  Supporting visionary founders with funding, mentorship, and
                  ecosystem access.
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">
                Growth-Stage & Expansion
              </h3>
              <ul className="list-disc list-inside text-sm">
                <li>
                  Scaling promising projects with liquidity, exchange listings,
                  and institutional adoption.
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">
                Token Investment & Market Participation
              </h3>
              <ul className="list-disc list-inside text-sm">
                <li>
                  Providing liquidity and advisory support for tokenized
                  economies.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <CtaOne />
    </>
  );
}
