import React from "react";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import OurTeam from "@/components/Section/OurTeam/OurTeam";
import CtaOne from "@/components/Section/CTA/CtaOne";
import Link from "next/link";
import ImageFallback from "@/components/ImageFallback";
import IconSVG from "@/components/IconSVG";

export default function VentureBuilderPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-4">
        <nav className="mb-4 text-sm">
          <Link href="/about" className="text-blue-600 hover:underline">
            About Us
          </Link>{" "}
          &gt; Venture Builder
        </nav>
      </div>

      <BreadcrumbItem
        link="Venture Builder"
        img="/images/banner/about1.png"
        title="Venture Builder for Crypto & Web3 Incubator"
        desc="A hands-on startup studio building and scaling blockchain projects from the ground up."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Venture Builder for Crypto &amp; Web3 Incubator
          </h2>
          <p className="text-lg mb-8 text-center">
            A venture builder (or &quot;startup studio&quot;) is an active,
            hands-on incubator that doesn&apos;t just fund projects—it builds
            them from scratch. Unlike traditional accelerators, a venture
            builder provides full-stack support: ideation, technical
            development, tokenomics, governance, and go-to-market strategy.
          </p>

          <h3 className="text-2xl font-semibold mb-4 mt-10">Core Structure</h3>
          <ul className="list-disc list-inside mb-6 text-md">
            <li>
              <strong>In-House Labs</strong> – Internal team of blockchain devs,
              economists, and growth hackers who prototype new projects.
            </li>
            <li>
              <strong>Portfolio Incubation</strong> – Selected external startups
              receive capital + operational support (legal, marketing, smart
              contract audits).
            </li>
            <li>
              <strong>Shared Resources</strong> – Legal, token engineering, and
              community growth teams support all ventures.
            </li>
            <li>
              <strong>Tokenized Ownership</strong> – Venture builder takes
              equity + tokens in projects, aligning long-term incentives.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 mt-10">Key Advantages</h3>
          <ul className="mb-8 text-md">
            <li className="flex items-center mb-2">
              <span className="text-green-600 mr-2">✅</span>Faster Execution –
              Pre-vetted talent and resources reduce startup friction.
            </li>
            <li className="flex items-center mb-2">
              <span className="text-green-600 mr-2">✅</span>Diversified Risk –
              Multiple projects in parallel increase success odds.
            </li>
            <li className="flex items-center mb-2">
              <span className="text-green-600 mr-2">✅</span>Network Effects –
              Cross-pollination between incubated projects boosts growth.
            </li>
          </ul>
        </div>
      </div>

      <CtaOne />
    </>
  );
}
