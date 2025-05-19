'use client';

import React from 'react';
import BreadcrumbItem from '@/components/Breadcrumb/BreadcrumbItem';
import CtaOne from '@/components/Section/CTA/CtaOne';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/i18n/TranslationContext';

export default function Web3MarketingPage() {
  const { t, locale } = useTranslation();

  // Mock data for marketing services
  const marketingServices = [
    {
      id: 1,
      title: 'Influencer Campaigns',
      description:
        'Leverage trusted voices in the Web3 space to amplify your brand and drive engagement.',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      id: 2,
      title: 'Community Management',
      description:
        'Build and nurture vibrant communities across platforms like Discord, Telegram, and Twitter.',
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    },
    {
      id: 3,
      title: 'Targeted Outreach',
      description:
        'Execute data-driven campaigns to reach your ideal audience and drive adoption.',
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    },
  ];

  // Mock data for marketing metrics
  const marketingMetrics = [
    {
      metric: '50+',
      description: 'Successful Campaigns',
    },
    {
      metric: '1M+',
      description: 'Community Members Engaged',
    },
    {
      metric: '95%',
      description: 'Client Satisfaction Rate',
    },
    {
      metric: '20+',
      description: 'Countries Reached',
    },
  ];

  return (
    <>
      <BreadcrumbItem
        link="Web3 Marketing"
        img="/images/services/End-to-End WEB3 Marketing.webp"
        title="End-to-end Web3 Marketing"
        desc="Influencer campaigns, community management, and targeted outreach. We drive adoption through data-driven strategies."
        bgBlack="bg-black/50"
        blur={true}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Driving Web3 Adoption
                </h2>
                <p className="mb-6">
                  Our Web3 marketing services are designed to help blockchain
                  projects and startups achieve their goals. From influencer
                  campaigns to community management and targeted outreach, we
                  provide end-to-end solutions tailored to your needs.
                </p>
                <p>
                  With a data-driven approach, we ensure your message reaches
                  the right audience, fostering growth and engagement in the
                  rapidly evolving Web3 ecosystem.
                </p>
              </div>
              <div>
                <Image
                  src="/images/services/Driving WEB3 Adoption.webp"
                  alt="Web3 Marketing"
                  className="rounded-lg shadow-lg w-full"
                  width={930}
                  height={593}
                />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Our Marketing Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {marketingServices.map((service) => (
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

            <div className="mb-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {marketingMetrics.map((item, index) => (
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
                href="/service/web3-marketing/apply"
                className="inline-block px-6 py-3 bg-brown-500 text-white rounded-md font-medium hover:bg-brown-600 transition-colors"
              >
                Get Started with Web3 Marketing
              </Link>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Elevate Your Web3 Project?
            </h2>
            <p className="mb-6">
              Whether you need influencer campaigns, community management, or
              targeted outreach, our team is here to help you succeed in the
              Web3 space.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-block px-6 py-3 bg-tan-dark text-white rounded-md font-medium hover:bg-brown transition-colors"
              >
                Contact Us
              </Link>

              <Link
                href={`/${locale}/contact`}
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
