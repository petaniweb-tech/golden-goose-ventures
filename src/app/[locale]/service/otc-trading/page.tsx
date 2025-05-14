import React from "react";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CtaOne from "@/components/Section/CTA/CtaOne";
import Link from "next/link";
import Image from "next/image";

export default function OTCTradingPage() {
  // Mock data for trading pairs
  const tradingPairs = [
    {
      id: 1,
      baseAsset: "BTC",
      baseAssetName: "Bitcoin",
      quoteAsset: "USD",
      quoteAssetName: "US Dollar",
      minTradeSize: "$50,000",
      liquidityRating: "High",
    },
    {
      id: 2,
      baseAsset: "ETH",
      baseAssetName: "Ethereum",
      quoteAsset: "USD",
      quoteAssetName: "US Dollar",
      minTradeSize: "$25,000",
      liquidityRating: "High",
    },
    {
      id: 3,
      baseAsset: "BTC",
      baseAssetName: "Bitcoin",
      quoteAsset: "USDT",
      quoteAssetName: "Tether",
      minTradeSize: "$50,000",
      liquidityRating: "High",
    },
    {
      id: 4,
      baseAsset: "ETH",
      baseAssetName: "Ethereum",
      quoteAsset: "USDT",
      quoteAssetName: "Tether",
      minTradeSize: "$25,000",
      liquidityRating: "High",
    },
    {
      id: 5,
      baseAsset: "SOL",
      baseAssetName: "Solana",
      quoteAsset: "USD",
      quoteAssetName: "US Dollar",
      minTradeSize: "$10,000",
      liquidityRating: "Medium",
    },
    {
      id: 6,
      baseAsset: "AVAX",
      baseAssetName: "Avalanche",
      quoteAsset: "USD",
      quoteAssetName: "US Dollar",
      minTradeSize: "$10,000",
      liquidityRating: "Medium",
    },
  ];

  return (
    <>
      <BreadcrumbItem
        link="OTC Trading"
        img="/images/banner/about1.png"
        title="OTC Trading & Liquidity Solutions"
        desc="Professional over-the-counter trading services for institutional and high-net-worth clients in the digital asset market."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Professional OTC Trading Services
                </h2>
                <p className="mb-6">
                  Golden Goose Ventures provides institutional-grade
                  over-the-counter (OTC) trading services for large volume
                  digital asset transactions. Our OTC desk caters to
                  high-net-worth individuals, funds, corporations, and
                  institutional clients seeking to execute substantial trades
                  with minimal market impact.
                </p>
                <p>
                  Through our extensive network of liquidity providers and
                  proprietary trading systems, we offer deep liquidity,
                  competitive pricing, and seamless execution for a wide range
                  of digital assets.
                </p>
              </div>
              <div>
                <Image
                  src="/images/blog/930x593.png"
                  alt="OTC Trading Services"
                  className="rounded-lg shadow-lg w-full"
                  width={930}
                  height={593}
                />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Why Trade OTC With Us
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
                <h3 className="font-semibold text-lg mb-3">Minimal Slippage</h3>
                <p className="text-sm">
                  Execute large trades without the price slippage typically
                  experienced on exchanges, ensuring optimal execution pricing.
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
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-3">
                  Privacy & Security
                </h3>
                <p className="text-sm">
                  Trade with complete confidentiality outside of public order
                  books, with institutional-grade security for all transactions.
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
                <h3 className="font-semibold text-lg mb-3">Execution Speed</h3>
                <p className="text-sm">
                  Complete large block trades quickly and efficiently, saving
                  time compared to gradually executing on exchanges.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="order-1 md:order-2">
                <h2 className="text-2xl font-bold mb-6">Our OTC Services</h2>
                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-lg shadow-md">
                    <h3 className="font-semibold mb-2">Large Block Trading</h3>
                    <p className="text-sm">
                      Execute significant cryptocurrency transactions with
                      minimal market impact and competitive pricing through our
                      deep liquidity pools.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-md">
                    <h3 className="font-semibold mb-2">Principal Trading</h3>
                    <p className="text-sm">
                      Trade directly with our principal desk for immediate
                      execution and settlement of large digital asset positions.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-md">
                    <h3 className="font-semibold mb-2">
                      Customized Trading Solutions
                    </h3>
                    <p className="text-sm">
                      Tailored trading strategies and execution plans designed
                      to meet specific client requirements and investment
                      objectives.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-md">
                    <h3 className="font-semibold mb-2">
                      Settlement Flexibility
                    </h3>
                    <p className="text-sm">
                      Multiple settlement options including same-day settlement
                      and flexible payment methods to accommodate your
                      operational needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-2 md:order-1">
                <Image
                  src="/images/blog/930x593.png"
                  alt="OTC Services"
                  className="rounded-lg shadow-lg w-full"
                  width={930}
                  height={593}
                />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Supported Trading Pairs
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                      Base Asset
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                      Quote Asset
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                      Min Trade Size
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                      Liquidity
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {tradingPairs.map((pair) => (
                    <tr key={pair.id}>
                      <td className="px-4 py-3 text-sm">
                        <div className="flex items-center">
                          <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-2 text-xs font-bold">
                            {pair.baseAsset}
                          </span>
                          <span>{pair.baseAssetName}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <div className="flex items-center">
                          <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-2 text-xs font-bold">
                            {pair.quoteAsset}
                          </span>
                          <span>{pair.quoteAssetName}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">{pair.minTradeSize}</td>
                      <td className="px-4 py-3 text-sm">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            pair.liquidityRating === "High"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {pair.liquidityRating}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center">
              The above list is not exhaustive. Contact us for additional pairs
              and custom requirements.
            </p>
          </div>

          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-6">OTC Trading Process</h2>
                <div className="space-y-6">
                  <div className="bg-white p-5 rounded-lg shadow-md">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-brown-500 rounded-full flex items-center justify-center mr-3 text-white text-sm flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Account Setup</h3>
                        <p className="text-sm">
                          Complete our streamlined onboarding process with
                          KYC/AML verification to establish your trading account
                          with appropriate trading limits.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-md">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-brown-500 rounded-full flex items-center justify-center mr-3 text-white text-sm flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Trade Inquiry</h3>
                        <p className="text-sm">
                          Contact our trading desk via your preferred
                          communication channel (phone, email, messaging) with
                          your trade requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-md">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-brown-500 rounded-full flex items-center justify-center mr-3 text-white text-sm flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">
                          Quote & Confirmation
                        </h3>
                        <p className="text-sm">
                          Receive a competitive pricing quote for your
                          transaction, review the terms, and confirm your
                          acceptance to proceed with the trade.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-md">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-brown-500 rounded-full flex items-center justify-center mr-3 text-white text-sm flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Settlement</h3>
                        <p className="text-sm">
                          Execute the transaction through our secure settlement
                          process, with funds transferred according to agreed
                          terms and timeline.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/images/blog/930x593.png"
                  alt="OTC Trading Process"
                  className="rounded-lg shadow-lg w-full"
                  width={930}
                  height={593}
                />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Client Types We Serve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-md text-center">
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  Institutional Investors
                </h3>
                <p className="text-sm">
                  Investment firms, hedge funds, and asset managers seeking
                  efficient exposure to digital assets.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-md text-center">
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  Corporate Treasuries
                </h3>
                <p className="text-sm">
                  Companies diversifying treasury holdings with large-scale
                  cryptocurrency acquisitions.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-md text-center">
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  HNWI & Family Offices
                </h3>
                <p className="text-sm">
                  High-net-worth individuals and family offices making strategic
                  digital asset investments.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-md text-center">
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
                <h3 className="font-semibold text-lg mb-2">
                  Blockchain Projects
                </h3>
                <p className="text-sm">
                  Cryptocurrency projects managing treasury operations and large
                  token transactions.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Ready to Trade?</h2>
            <p className="mb-6">
              Contact our OTC desk to discuss your trading requirements and
              start accessing our deep liquidity pools and professional
              execution services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-tan-dark text-white rounded-md font-medium hover:bg-brown transition-colors"
              >
                Contact Our OTC Desk
              </Link>

              <Link
                href="/service/otc-trading/kyc"
                className="inline-block px-6 py-3 border border-brown-500 text-brown-500 rounded-md font-medium hover:bg-brown-500 hover:text-white transition-colors"
              >
                Start KYC Process
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
                  What is OTC trading and why use it?
                </h3>
                <p>
                  OTC (over-the-counter) trading involves direct trading between
                  two parties without using a public exchange. It&apos;s ideal
                  for large transactions that would cause significant price
                  slippage on exchanges, offering better execution pricing,
                  privacy, and efficiency.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-3">
                  What are your minimum transaction sizes?
                </h3>
                <p>
                  Our minimum transaction size varies by asset pair but
                  generally starts at $25,000 USD equivalent for major
                  cryptocurrencies and $10,000 USD for selected altcoins. For
                  specific requirements, please contact our trading desk.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-3">
                  How long does the KYC process take?
                </h3>
                <p>
                  For individual clients, our KYC process typically takes 1-2
                  business days once all required documents are submitted. For
                  institutional clients, the process may take 3-5 business days
                  depending on the complexity of the entity structure.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-3">
                  What settlement options are available?
                </h3>
                <p>
                  We offer flexible settlement options including same-day
                  settlement for trades executed before specified cut-off times,
                  T+1 settlement, and customized settlement schedules for
                  institutional clients. We support bank transfers, stablecoin
                  settlements, and multi-signature wallet solutions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-3">
                  Do you offer credit lines or post-trade settlement?
                </h3>
                <p>
                  Yes, we offer credit lines and post-trade settlement options
                  for qualified institutional clients after completing our
                  credit assessment process. These facilities require additional
                  documentation and are subject to approval.
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
