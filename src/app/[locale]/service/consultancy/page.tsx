'use client';

import React from 'react';
import BreadcrumbItem from '@/components/Breadcrumb/BreadcrumbItem';
import CtaOne from '@/components/Section/CTA/CtaOne';
import Link from 'next/link';
import Image from 'next/image';

export default function StrategicAdvisoryPage() {
  return (
    <>
      <BreadcrumbItem
        link="Strategic Advisory"
        img="/images/banner/about1.png"
        title="Strategic Advisory Services"
        desc="Expert guidance for blockchain projects, from tokenomics to regulatory compliance."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Transforming Blockchain Ideas into Scalable Businesses
                </h2>
                <p className="mb-6">
                  Our strategic advisory services are tailored to help
                  blockchain founders navigate the complexities of the industry.
                  From designing sustainable tokenomics to crafting effective
                  go-to-market strategies, we provide the expertise needed to
                  turn innovative ideas into successful, compliant businesses.
                </p>
                <p>
                  Whether you're launching a new project or scaling an existing
                  one, our team of experts is here to guide you every step of
                  the way.
                </p>
              </div>
              <div>
                <Image
                  src="/images/blog/930x593.png"
                  alt="Strategic Advisory Services"
                  className="rounded-lg shadow-lg w-full"
                  width={930}
                  height={593}
                />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Our Core Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">
                  Tokenomics Design
                </h3>
                <p className="text-sm">
                  Develop sustainable token economic models that drive ecosystem
                  growth and long-term value.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">
                  Go-to-Market Strategy
                </h3>
                <p className="text-sm">
                  Craft effective market entry plans, build communities, and
                  execute successful product launches.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">
                  Regulatory Navigation
                </h3>
                <p className="text-sm">
                  Navigate complex regulatory landscapes to ensure compliance
                  across jurisdictions.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Why Choose Us?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <ul className="space-y-4">
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
                      Proven track record of successful blockchain projects
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
                    <span>
                      Deep expertise in blockchain technology and tokenomics
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
                    <span>
                      Comprehensive understanding of global regulatory
                      frameworks
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  src="/images/component/assessment.png"
                  alt="Why Choose Us"
                  className="rounded-lg shadow-lg w-full"
                  width={472}
                  height={354}
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Elevate Your Blockchain Project?
            </h2>
            <p className="mb-6">
              Partner with us to transform your blockchain vision into a
              scalable, compliant, and successful business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-tan-dark text-white rounded-md font-medium hover:bg-brown transition-colors"
              >
                Get Started
              </Link>

              <Link
                href="/contact"
                className="inline-block px-6 py-3 border border-brown-500 text-brown-500 rounded-md font-medium hover:bg-brown hover:text-white transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CtaOne />
    </>
  );
}
