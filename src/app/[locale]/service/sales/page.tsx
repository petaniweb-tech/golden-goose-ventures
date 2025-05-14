'use client';

import React from 'react';
import BreadcrumbItem from '@/components/Breadcrumb/BreadcrumbItem';
import CtaOne from '@/components/Section/CTA/CtaOne';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/i18n/TranslationContext';

export default function B2BPartnershipsPage() {
  const { t, locale } = useTranslation();

  // Mock data for partnership services
  const partnershipServices = [
    {
      id: 1,
      title: 'Exchange Integration',
      description:
        'Seamless integration with leading cryptocurrency exchanges to enhance liquidity and market access.',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      id: 2,
      title: 'Custodian Partnerships',
      description:
        'Connecting projects with trusted custodians for secure asset storage and management.',
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    },
    {
      id: 3,
      title: 'Institutional Buyer Network',
      description:
        'Access to a network of institutional buyers to drive adoption and investment.',
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      id: 4,
      title: 'Enterprise Adoption Strategies',
      description:
        'Tailored strategies to help enterprises adopt blockchain solutions effectively.',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    },
  ];

  return (
    <>
      <BreadcrumbItem
        link="B2B Partnerships"
        img="/images/banner/about1.png"
        title="B2B Partnerships & Enterprise Adoption"
        desc="We connect projects with exchanges, custodians, and institutional buyers to drive enterprise adoption and market success."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Empowering Blockchain Enterprises
                </h2>
                <p className="mb-6">
                  Our B2B partnership services are designed to connect
                  blockchain projects with key players in the industry,
                  including exchanges, custodians, and institutional buyers. We
                  provide tailored strategies to ensure successful enterprise
                  adoption and long-term growth.
                </p>
                <p>
                  Whether you&apos;re launching a new project or scaling an
                  existing one, our expertise and network can help you achieve
                  your goals in the blockchain ecosystem.
                </p>
              </div>
              <div>
                <Image
                  src="/images/blog/930x593.png"
                  alt="B2B Partnerships"
                  className="rounded-lg shadow-lg w-full"
                  width={930}
                  height={593}
                />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Our Partnership Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {partnershipServices.map((service) => (
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

            <div className="text-center">
              <Link
                href="/service/b2b-partnerships/apply"
                className="inline-block px-6 py-3 bg-brown-500 text-white rounded-md font-medium hover:bg-brown-600 transition-colors"
              >
                Apply for Partnership Services
              </Link>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Drive Enterprise Adoption?
            </h2>
            <p className="mb-6">
              Let us help you connect with the right partners and implement
              strategies for successful enterprise adoption. Contact us today to
              get started.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-block px-6 py-3 bg-tan-dark text-white rounded-md font-medium hover:bg-brown transition-colors"
              >
                Apply for Partnership Services
              </Link>

              <Link
                href={`/${locale}/contact`}
                className="inline-block px-6 py-3 border border-brown-500 text-brown-500 rounded-md font-medium hover:bg-brown hover:text-white transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>

          <CtaOne />
        </div>
      </div>
    </>
  );
}
