"use client";
import React from "react";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CtaOne from "@/components/Section/CTA/CtaOne";
import Link from "next/link";
import ImageFallback from "@/components/ImageFallback";
import IconSVG from "@/components/IconSVG";
import { useTranslation } from "@/i18n/TranslationContext";
export default function VentureCapitalPage() {
  const { t, locale } = useTranslation();
  // Mock data for portfolio investments
  const portfolioInvestments = [
    {
      id: 1,
      name: "BlockFi",
      category: "DeFi",
      logo: "/images/icon/service-1.png",
      description: "Crypto lending platform and interest-bearing accounts",
      year: 2019,
    },
    {
      id: 2,
      name: "ChainLink",
      category: "Infrastructure",
      logo: "/images/icon/service-2.png",
      description: "Decentralized oracle network connecting smart contracts",
      year: 2018,
    },
    {
      id: 3,
      name: "Polygon",
      category: "Layer-2",
      logo: "/images/icon/service-3.png",
      description:
        "Ethereum scaling solution for faster and cheaper transactions",
      year: 2020,
    },
    {
      id: 4,
      name: "Aave",
      category: "DeFi",
      logo: "/images/icon/service-4.png",
      description:
        "Open source liquidity protocol for earning interest and borrowing",
      year: 2020,
    },
  ];

  return (
    <>
      <BreadcrumbItem
        link="Venture Capital"
        img="/images/banner/about1.png"
        title="Venture Capital & Token Investments"
        desc="Strategic capital deployment into blockchain startups and digital assets with high growth potential."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Fueling Blockchain Innovation
                </h2>
                <p className="mb-6">
                  Golden Gate Ventures' Venture Capital arm strategically
                  invests in promising blockchain and cryptocurrency projects
                  across various development stages. We combine deep industry
                  expertise with a forward-looking investment approach to
                  identify and support the next generation of crypto innovators.
                </p>
                <p>
                  Our investment thesis is centered on backing exceptional teams
                  building transformative technology that addresses real market
                  needs in the rapidly evolving blockchain ecosystem.
                </p>
              </div>
              <div>
                <ImageFallback
                  src="/images/about/about-1.png"
                  alt="Venture Capital Services"
                  className="rounded-lg shadow-lg w-full"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Our Investment Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-brown-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-brown-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-3">Thesis-Driven</h3>
                <p className="text-sm">
                  Our investment decisions are guided by deep market research
                  and a clear thesis on blockchain sectors poised for
                  significant growth.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-brown-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-brown-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-3">Stage Agnostic</h3>
                <p className="text-sm">
                  We invest across the development spectrum, from early-stage
                  seed investments to later-stage growth capital and token
                  acquisitions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-brown-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-brown-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-3">Value-Added</h3>
                <p className="text-sm">
                  Beyond capital, we provide our portfolio companies with
                  strategic guidance, technical expertise, and access to our
                  extensive network.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl font-bold mb-6">
                  Investment Focus Areas
                </h2>
                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-lg shadow-md">
                    <h3 className="font-semibold mb-2">DeFi Protocols</h3>
                    <p className="text-sm">
                      Decentralized lending, borrowing, and trading platforms
                      that are creating the foundation for a new financial
                      system.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-md">
                    <h3 className="font-semibold mb-2">Web3 Infrastructure</h3>
                    <p className="text-sm">
                      Foundational technologies enabling the next generation of
                      decentralized applications and services.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-md">
                    <h3 className="font-semibold mb-2">NFT & Metaverse</h3>
                    <p className="text-sm">
                      Projects building at the intersection of digital
                      ownership, creativity, gaming, and virtual economies.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-md">
                    <h3 className="font-semibold mb-2">
                      Layer 1 & Layer 2 Solutions
                    </h3>
                    <p className="text-sm">
                      Next-generation blockchain protocols and scaling solutions
                      that enhance performance, security, and interoperability.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="/images/blog/930x593.png"
                  alt="Investment Focus Areas"
                  className="rounded-lg shadow-lg h-full"
                />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Select Portfolio Investments
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolioInvestments.map((investment) => (
                <div
                  key={investment.id}
                  className="bg-white p-5 rounded-lg shadow-md flex items-center"
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <IconSVG
                      type={
                        investment.logo
                          .replace("/images/icon/", "")
                          .replace(".png", "") as
                          | "service-1"
                          | "service-2"
                          | "service-3"
                          | "service-4"
                      }
                      size={32}
                      color="#925034"
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold">{investment.name}</h3>
                      <span className="text-xs bg-brown-100 text-brown-800 px-2 py-1 rounded">
                        {investment.category}
                      </span>
                    </div>
                    <p className="text-sm mb-1">{investment.description}</p>
                    <span className="text-xs text-gray-600">
                      Invested: {investment.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href={`/${locale}/portfolio`}
                className="inline-block px-5 py-2 bg-brown-500 text-white rounded-md font-medium hover:bg-brown-600 transition-colors"
              >
                View Full Portfolio
              </Link>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Investment Process
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-brown-300 transform md:-translate-x-1/2"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                <div className="relative">
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8 md:text-right">
                      <h3 className="font-semibold text-lg">
                        Initial Screening
                      </h3>
                      <p className="text-sm">
                        We evaluate all potential investments against our
                        investment thesis, market opportunity, and team
                        capabilities.
                      </p>
                    </div>
                    <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-brown-500 rounded-full transform md:-translate-x-1/2 flex items-center justify-center">
                      <span className="text-white text-xs">1</span>
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                      <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        <p className="text-xs italic">
                          "Our initial screening process focuses on finding
                          projects that demonstrate clear product-market fit and
                          a compelling value proposition."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8 md:text-right">
                      <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        <p className="text-xs italic">
                          "Our due diligence is rigorous, combining technical
                          evaluation, market analysis, team assessment, and
                          financial modeling."
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-brown-500 rounded-full transform md:-translate-x-1/2 flex items-center justify-center">
                      <span className="text-white text-xs">2</span>
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                      <h3 className="font-semibold text-lg">
                        Deep Due Diligence
                      </h3>
                      <p className="text-sm">
                        We conduct comprehensive analysis of technology, market
                        dynamics, token economics, competitive landscape, and
                        team background.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8 md:text-right">
                      <h3 className="font-semibold text-lg">
                        Investment Committee
                      </h3>
                      <p className="text-sm">
                        Final investment decisions are made by our investment
                        committee based on due diligence findings and alignment
                        with portfolio strategy.
                      </p>
                    </div>
                    <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-brown-500 rounded-full transform md:-translate-x-1/2 flex items-center justify-center">
                      <span className="text-white text-xs">3</span>
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                      <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        <p className="text-xs italic">
                          "Our committee brings diverse perspectives from
                          blockchain technology, finance, and entrepreneurship
                          to evaluate each opportunity."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8 md:text-right">
                      <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        <p className="text-xs italic">
                          "We remain actively engaged with our portfolio
                          companies, providing strategic guidance, technical
                          insights, and valuable introductions."
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-brown-500 rounded-full transform md:-translate-x-1/2 flex items-center justify-center">
                      <span className="text-white text-xs">4</span>
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                      <h3 className="font-semibold text-lg">
                        Post-Investment Support
                      </h3>
                      <p className="text-sm">
                        We provide ongoing strategic advice, technical
                        expertise, operational support, business development
                        assistance, and network connections.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="mb-6">
              If you're building the future of blockchain and cryptocurrency
              technology, we'd love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-block px-6 py-3 bg-tan-dark text-white rounded-md font-medium hover:bg-brown transition-colors"
              >
                Submit Your Project
              </Link>

              <Link
                href={`/${locale}/service/venture-capital#faq`}
                className="inline-block px-6 py-3 border border-brown-500 text-brown-500 rounded-md font-medium hover:bg-brown-500 hover:text-white transition-colors"
              >
                Investment FAQ
              </Link>
            </div>
          </div>

          <div id="faq" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-3">
                  What investment stages do you focus on?
                </h3>
                <p>
                  We invest across multiple stages, from seed and early-stage
                  investments to later-stage growth capital. Our flexible
                  approach allows us to support projects from inception through
                  significant growth phases.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-3">
                  What is your typical investment size?
                </h3>
                <p>
                  Our investment size varies based on stage, opportunity, and
                  strategic importance. We typically invest between $500,000 to
                  $5 million in early-stage projects and can deploy larger
                  amounts for later-stage investments.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-3">
                  Do you lead investment rounds?
                </h3>
                <p>
                  Yes, we frequently lead investment rounds where we see
                  exceptional potential. We also actively participate in rounds
                  led by other reputable investors with whom we have strong
                  relationships.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-3">
                  What regions do you invest in?
                </h3>
                <p>
                  While we have a strong presence in Asia, we invest globally in
                  promising blockchain and cryptocurrency projects. Our
                  portfolio includes companies from North America, Europe, Asia,
                  and other regions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-3">
                  How can I submit my project for consideration?
                </h3>
                <p>
                  You can submit your project for review through our contact
                  page. Please include a brief overview of your project, the
                  problem you're solving, your team background, current
                  traction, and funding needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CtaOne />
    </>
  );
}
