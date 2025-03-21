"use client";

import React from "react";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CtaOne from "@/components/Section/CTA/CtaOne";
import Link from "next/link";
import IconSVG from "@/components/IconSVG";
import { useTranslation } from "@/i18n/TranslationContext";

export default function MarketMakingPage() {
  const { t, locale } = useTranslation();
  // Mock data for exchange partners
  const exchangePartners = [
    {
      id: 1,
      name: "Binance",
      logo: "/images/icon/service-1.png",
      tier: "Premium",
    },
    {
      id: 2,
      name: "Coinbase",
      logo: "/images/icon/service-2.png",
      tier: "Premium",
    },
    {
      id: 3,
      name: "Kraken",
      logo: "/images/icon/service-3.png",
      tier: "Premium",
    },
    {
      id: 4,
      name: "OKX",
      logo: "/images/icon/service-4.png",
      tier: "Premium",
    },
    {
      id: 5,
      name: "Bybit",
      logo: "/images/icon/service-5.png",
      tier: "Standard",
    },
    {
      id: 6,
      name: "KuCoin",
      logo: "/images/icon/service-6.png",
      tier: "Standard",
    },
  ];

  // Mock data for success metrics
  const successMetrics = [
    {
      metric: "20+",
      description: "Exchange Partnerships",
    },
    {
      metric: "45+",
      description: "Token Projects Supported",
    },
    {
      metric: "95%",
      description: "Average Uptime",
    },
    {
      metric: "$1.2B+",
      description: "Monthly Trading Volume",
    },
  ];

  return (
    <>
      <BreadcrumbItem
        link="Market Making"
        img="/images/banner/about1.png"
        title="Market Making & Exchange Services"
        desc="Professional liquidity provision and market making services to enhance the trading experience for digital assets."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Institutional Market Making
                </h2>
                <p className="mb-6">
                  Golden Gate Ventures provides professional market making
                  services to enhance liquidity and trading efficiency for
                  digital assets. Our algorithmic trading systems maintain tight
                  bid-ask spreads, minimize price slippage, and ensure market
                  depth across multiple exchanges and trading venues.
                </p>
                <p>
                  With our extensive experience in both traditional and digital
                  asset markets, we implement sophisticated market making
                  strategies that contribute to healthier, more efficient
                  markets for token issuers and exchange platforms.
                </p>
              </div>
              <div>
                <img
                  src="/images/blog/930x593.png"
                  alt="Market Making Services"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Why Choose Our Market Making Services
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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-3">
                  Advanced Technology
                </h3>
                <p className="text-sm">
                  Our proprietary algorithmic trading systems operate 24/7 with
                  ultra-low latency connections to major exchanges.
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
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-3">
                  Deep Capital Reserves
                </h3>
                <p className="text-sm">
                  Substantial liquidity pools allow us to maintain consistent
                  order book depth even during periods of market volatility.
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-3">Experienced Team</h3>
                <p className="text-sm">
                  Our market making specialists combine experience from
                  traditional finance, crypto markets, and quantitative trading.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl font-bold mb-6">
                  Our Market Making Solutions
                </h2>
                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-lg shadow-md">
                    <h3 className="font-semibold mb-2">
                      Token Issuer Services
                    </h3>
                    <p className="text-sm">
                      Comprehensive liquidity solutions for blockchain projects
                      seeking to enhance trading activity and price stability
                      for their tokens. We maintain active markets across all
                      exchanges where your token is listed.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-md">
                    <h3 className="font-semibold mb-2">
                      Exchange Partnerships
                    </h3>
                    <p className="text-sm">
                      Collaborative relationships with major exchanges to
                      provide liquidity for diverse asset pairs, enhancing the
                      trading experience for all participants on the platform.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-md">
                    <h3 className="font-semibold mb-2">
                      Multi-Exchange Market Making
                    </h3>
                    <p className="text-sm">
                      Unified liquidity provision across multiple trading
                      venues, creating a consistent trading experience
                      regardless of where your customers trade.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-md">
                    <h3 className="font-semibold mb-2">Custom Solutions</h3>
                    <p className="text-sm">
                      Tailor-made market making strategies designed to meet
                      specific objectives, such as reducing price volatility,
                      increasing trading volume, or supporting new market
                      listings.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="/images/blog/930x593.png"
                  alt="Market Making Solutions"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Key Performance Metrics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {successMetrics.map((item, index) => (
                <div key={index} className="bg-white p-5 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-brown-500 mb-2">
                    {item.metric}
                  </div>
                  <p className="text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Exchange Partners
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {exchangePartners.map((partner) => (
                <div
                  key={partner.id}
                  className="bg-white p-5 rounded-lg shadow-md flex items-center"
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <IconSVG
                      type={
                        partner.logo
                          .replace("/images/icon/", "")
                          .replace(".png", "") as
                          | "service-1"
                          | "service-2"
                          | "service-3"
                          | "service-4"
                          | "service-5"
                          | "service-6"
                      }
                      size={24}
                      color="#925034"
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{partner.name}</h3>
                      <span
                        className={`text-xs px-2 py-1 rounded ml-3 ${
                          partner.tier === "Premium"
                            ? "bg-brown-100 text-brown-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {partner.tier}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  Benefits of Our Market Making
                </h2>
                <div className="space-y-6">
                  <div className="bg-white p-5 rounded-lg shadow-md">
                    <div className="flex">
                      <div className="w-10 h-10 bg-brown-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-brown-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">
                          Enhanced Trading Volume
                        </h3>
                        <p className="text-sm">
                          Increased trading activity and volume, often leading
                          to higher visibility and interest from other market
                          participants.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-md">
                    <div className="flex">
                      <div className="w-10 h-10 bg-brown-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-brown-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Price Stability</h3>
                        <p className="text-sm">
                          Reduced price volatility and more orderly markets,
                          inspiring confidence among investors and traders.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-md">
                    <div className="flex">
                      <div className="w-10 h-10 bg-brown-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-brown-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Tighter Spreads</h3>
                        <p className="text-sm">
                          Narrower bid-ask spreads resulting in better pricing
                          for traders and reduced transaction costs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-md">
                    <div className="flex">
                      <div className="w-10 h-10 bg-brown-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-brown-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Market Feedback</h3>
                        <p className="text-sm">
                          Detailed reporting and insights on market behavior,
                          trading patterns, and liquidity metrics for your
                          token.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="/images/blog/930x593.png"
                  alt="Market Making Benefits"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Enhance Your Market Liquidity?
            </h2>
            <p className="mb-6">
              Whether you're a token issuer looking to improve trading
              conditions or an exchange seeking a reliable liquidity provider,
              our market making team is ready to develop a customized solution
              for your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-block px-6 py-3 bg-tan-dark text-white rounded-md font-medium hover:bg-brown transition-colors"
              >
                Request a Consultation
              </Link>

              <Link
                href={`/${locale}/contact`}
                className="inline-block px-6 py-3 border border-brown-500 text-brown-500 rounded-md font-medium hover:bg-brown hover:text-white transition-colors"
              >
                Get a Custom Proposal
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
                  What exactly is market making?
                </h3>
                <p>
                  Market making involves continuously providing buy and sell
                  orders (liquidity) in a trading market to facilitate smooth
                  trading. Market makers maintain an order book with both bid
                  and ask orders, enabling other market participants to execute
                  trades efficiently with minimal price impact.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-3">
                  How long are your market making contracts?
                </h3>
                <p>
                  We typically structure our market making agreements with an
                  initial term of 3-6 months, with options to extend. This
                  allows both parties to evaluate the effectiveness of the
                  service and make adjustments as needed. We can also
                  accommodate custom contract terms based on specific project
                  requirements.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-3">
                  Do you require tokens as payment?
                </h3>
                <p>
                  Our market making services can be structured with various fee
                  models including fixed monthly fees, token-based compensation,
                  or hybrid approaches. For token projects, we often design
                  arrangements that align our incentives with the long-term
                  success of the token.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-3">
                  Which exchanges do you support?
                </h3>
                <p>
                  We provide market making services across all major centralized
                  and decentralized exchanges including Binance, Coinbase,
                  Kraken, OKX, Bybit, KuCoin, and many others. We can also
                  support emerging exchanges and new listings as part of our
                  service.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-3">
                  How do you handle market volatility?
                </h3>
                <p>
                  Our algorithms are designed to adapt to changing market
                  conditions while maintaining liquidity through periods of
                  volatility. We implement sophisticated risk management
                  strategies to ensure continuous market presence while
                  protecting capital during extreme market movements.
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
