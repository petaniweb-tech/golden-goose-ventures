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
      <div className="container mx-auto px-4 py-4">
        <nav className="mb-4 text-sm">
          <Link href="/about" className="text-blue-600 hover:underline">
            About Us
          </Link>{" "}
          &gt; OTC / Market Making
        </nav>
      </div>
      <BreadcrumbItem
        link="OTC / Market Making"
        img="/images/banner/about1.png"
        title="OTC / Market Making"
        desc="Professional liquidity solutions and market support for digital assets."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            OTC Trading & Liquidity Solutions
          </h2>
          <p className="text-lg mb-8 text-center">
            We provide over-the-counter (OTC) trading services for
            high-net-worth individuals, funds, and institutional clients.
          </p>
          <ul className="list-disc list-inside mb-8 text-md">
            <li>
              <strong>Deep Liquidity</strong> – Access to global liquidity pools
              for seamless execution of large trades.
            </li>
            <li>
              <strong>Competitive Pricing</strong> – Tight spreads and minimal
              slippage for optimal trade execution.
            </li>
            <li>
              <strong>Privacy &amp; Compliance</strong> – Secure, discreet, and
              regulatory-compliant trading solutions.
            </li>
          </ul>

          <h2 className="text-3xl font-bold mb-6 text-center mt-12">
            Market Making & Exchange Partnerships
          </h2>
          <p className="text-lg mb-8 text-center">
            We enhance liquidity and price stability for digital assets through:
          </p>
          <ul className="list-disc list-inside mb-8 text-md">
            <li>
              <strong>Order Book Management</strong> – Maintaining deep order
              books for healthier market dynamics.
            </li>
            <li>
              <strong>Algorithmic Trading</strong> – Providing AI-driven
              strategies for efficient execution and risk management.
            </li>
            <li>
              <strong>Exchange Market Support</strong> – Partnering with
              exchanges to optimize liquidity and listing strategies.
            </li>
          </ul>
        </div>
      </div>

      <CtaOne />
    </>
  );
}
