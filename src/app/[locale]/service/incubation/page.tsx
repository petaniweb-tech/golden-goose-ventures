"use client";

import React from "react";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CtaOne from "@/components/Section/CTA/CtaOne";
import Link from "next/link";
import { useTranslation } from "@/i18n/TranslationContext";

export default function IncubationAdvisoryPage() {
  const { t, locale } = useTranslation();
  // Mock data for advisory services
  const advisoryServices = [
    {
      id: 1,
      title: "Strategic Planning",
      description:
        "Comprehensive strategy development for blockchain startups and enterprises entering the crypto space.",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      id: 2,
      title: "Technology Architecture",
      description:
        "Technical guidance on blockchain architecture, protocol design, and smart contract development.",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    },
    {
      id: 3,
      title: "Tokenomics Design",
      description:
        "Comprehensive token economic model design and optimization for sustainable ecosystem growth.",
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      id: 4,
      title: "Regulatory Compliance",
      description:
        "Guidance on navigating complex regulatory frameworks across different jurisdictions.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    },
    {
      id: 5,
      title: "Go-to-Market Strategy",
      description:
        "Market entry planning, community building, and product launch strategies.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
      id: 6,
      title: "Fundraising Support",
      description:
        "Strategic guidance and support for capital raising from seed to Series A and beyond.",
      icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z",
    },
  ];

  // Mock data for incubation program metrics
  const incubationMetrics = [
    {
      metric: "30+",
      description: "Projects Incubated",
    },
    {
      metric: "$250M+",
      description: "Raised by Incubated Projects",
    },
    {
      metric: "85%",
      description: "Success Rate",
    },
    {
      metric: "18",
      description: "Countries Represented",
    },
  ];

  // Mock data for incubation benefits
  const incubationBenefits = [
    {
      id: 1,
      title: "Seed Funding",
      description:
        "Access to initial capital to accelerate development and reach key milestones.",
    },
    {
      id: 2,
      title: "Technical Mentorship",
      description:
        "Guidance from experienced blockchain developers and architects.",
    },
    {
      id: 3,
      title: "Business Development",
      description:
        "Connections to potential clients, partners, and enterprise adopters.",
    },
    {
      id: 4,
      title: "Legal & Compliance",
      description: "Support in navigating complex regulatory environments.",
    },
    {
      id: 5,
      title: "Investor Network",
      description:
        "Introductions to our extensive network of crypto-focused investors.",
    },
    {
      id: 6,
      title: "Marketing & PR",
      description:
        "Assistance with brand building, community growth, and market positioning.",
    },
  ];

  return (
    <>
      <BreadcrumbItem
        link="Incubation & Advisory"
        img="/images/banner/about1.png"
        title="Incubation & Advisory Services"
        desc="Comprehensive support for blockchain startups from ideation to market leadership through our specialized incubation program and advisory services."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Building Blockchain Success Stories
                </h2>
                <p className="mb-6">
                  Golden Gate Ventures offers comprehensive incubation and
                  advisory services designed specifically for blockchain
                  startups and projects. Our team of industry experts provides
                  hands-on support across every aspect of building a successful
                  blockchain business, from technical architecture to
                  tokenomics, regulatory compliance, and go-to-market strategy.
                </p>
                <p>
                  Whether you're at the concept stage or looking to scale an
                  established project, our tailored advisory services and
                  incubation program can help you navigate the complexities of
                  the blockchain ecosystem and accelerate your path to success.
                </p>
              </div>
              <div>
                <img
                  src="/images/blog/930x593.png"
                  alt="Incubation & Advisory Services"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Our Incubation Program
            </h2>

            <div className="bg-white p-8 rounded-lg shadow-md mb-10">
              <p className="mb-6">
                The GGV Incubation Program is a comprehensive 12-week
                accelerated growth initiative designed for early-stage
                blockchain and cryptocurrency startups. We provide the
                resources, mentorship, and connections needed to transform
                promising ideas into market-ready products and investment-ready
                businesses.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Program Phases</h3>
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="w-10 h-10 bg-brown-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-brown-600 font-medium">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">
                          Foundation (Weeks 1-4)
                        </h4>
                        <p className="text-sm">
                          Refining core value proposition, technical
                          architecture, and tokenomics.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="w-10 h-10 bg-brown-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-brown-600 font-medium">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">
                          Development (Weeks 5-8)
                        </h4>
                        <p className="text-sm">
                          Building MVP, legal structuring, and initial community
                          development.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="w-10 h-10 bg-brown-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-brown-600 font-medium">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">
                          Growth (Weeks 9-12)
                        </h4>
                        <p className="text-sm">
                          Go-to-market strategy, investor preparation, and
                          launch planning.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    What You Receive
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-brown-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Initial seed investment (up to $250K)</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-brown-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Dedicated advisory team with weekly sessions</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-brown-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Access to GGV's partner and investor network</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-brown-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>
                        Co-working space in our Singapore or Hong Kong office
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-brown-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Legal and compliance advisory services</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-brown-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Marketing, PR, and community building support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {incubationMetrics.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-5 rounded-lg shadow-md"
                  >
                    <div className="text-3xl font-bold text-brown-500 mb-2">
                      {item.metric}
                    </div>
                    <p className="text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/service/incubation-advisory/apply"
                className="inline-block px-6 py-3 bg-brown-500 text-white rounded-md font-medium hover:bg-brown-600 transition-colors"
              >
                Apply to Incubation Program
              </Link>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Advisory Services
            </h2>

            <p className="text-center max-w-3xl mx-auto mb-10">
              Beyond our incubation program, we offer specialized advisory
              services for blockchain projects and traditional enterprises
              entering the cryptocurrency space. Our consultancy services can be
              engaged individually or as a comprehensive package.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {advisoryServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="w-12 h-12 bg-brown-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-brown-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={service.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-center">
                Our Advisory Process
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-brown-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    <span>1</span>
                  </div>
                  <h4 className="font-medium mb-2">Discovery</h4>
                  <p className="text-sm">
                    Initial assessment of your project, goals, and challenges
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-brown-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    <span>2</span>
                  </div>
                  <h4 className="font-medium mb-2">Strategy</h4>
                  <p className="text-sm">
                    Developing a customized roadmap and advisory plan
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-brown-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    <span>3</span>
                  </div>
                  <h4 className="font-medium mb-2">Implementation</h4>
                  <p className="text-sm">
                    Hands-on guidance and support during execution
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-brown-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    <span>4</span>
                  </div>
                  <h4 className="font-medium mb-2">Optimization</h4>
                  <p className="text-sm">
                    Continuous refinement and adaptation to market conditions
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <img
                  src="/images/blog/930x593.png"
                  alt="Success Stories"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6">Success Stories</h2>
                <p className="mb-6">
                  Our incubation and advisory services have helped numerous
                  blockchain projects achieve significant milestones, from
                  successful token launches to securing major partnerships and
                  investment rounds.
                </p>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-semibold">DeFi Protocol</h3>
                    <p className="text-sm">
                      Helped a DeFi lending protocol optimize tokenomics and
                      secure $12M in funding.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-semibold">NFT Marketplace</h3>
                    <p className="text-sm">
                      Guided a digital art platform through regulatory
                      compliance and successful launch.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-semibold">Enterprise Blockchain</h3>
                    <p className="text-sm">
                      Advised a supply chain solution on technical architecture
                      and enterprise adoption.
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    href={`/${locale}/portfolio`}
                    className="text-brown-500 font-medium hover:underline flex items-center"
                  >
                    View our portfolio
                    <svg
                      className="h-5 w-5 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Accelerate Your Blockchain Project?
            </h2>
            <p className="mb-6">
              Whether you're looking to join our incubation program or need
              specialized advisory services, our team is ready to help you
              navigate the complexities of building in the blockchain space.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-block px-6 py-3 bg-tan-dark text-white rounded-md font-medium hover:bg-brown transition-colors"
              >
                Apply to Incubation Program
              </Link>

              <Link
                href={`/${locale}/contact`}
                className="inline-block px-6 py-3 border border-brown-500 text-brown-500 rounded-md font-medium hover:bg-brown hover:text-white transition-colors"
              >
                Schedule a Consultation
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
                  What types of projects are eligible for your incubation
                  program?
                </h3>
                <p>
                  We focus on early-stage blockchain projects with innovative
                  solutions in DeFi, NFTs, Web3, infrastructure, enterprise
                  blockchain, and related sectors. We look for strong founding
                  teams with technical expertise and a clear vision for solving
                  real-world problems.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-3">
                  How selective is the incubation program?
                </h3>
                <p>
                  Our program is highly selective, accepting only 5-8 projects
                  per cohort from hundreds of applications. This allows us to
                  provide intensive, hands-on support to each participating
                  project.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-3">
                  Do you offer advisory services without incubation?
                </h3>
                <p>
                  Yes, our advisory services are available independently of the
                  incubation program. We work with projects at various stages,
                  from early concepts to established protocols looking to scale
                  or pivot. Advisory engagements can be structured as one-time
                  consultations or ongoing relationships.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-3">
                  What is your typical investment size for incubated projects?
                </h3>
                <p>
                  Incubated projects typically receive an initial investment of
                  $100,000 to $250,000, with the potential for follow-on
                  investment from our venture fund. The exact amount depends on
                  the project's stage, needs, and valuation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-3">
                  Do you provide support for token launches?
                </h3>
                <p>
                  Yes, we provide comprehensive support for token launches,
                  including tokenomics design, distribution strategy, legal
                  compliance, exchange listings, and marketing. Our team has
                  experience supporting successful token launches across
                  multiple jurisdictions.
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
