'use client';

import React from 'react';
import BreadcrumbItem from '@/components/Breadcrumb/BreadcrumbItem';
import CtaOne from '@/components/Section/CTA/CtaOne';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/i18n/TranslationContext';

export default function SmartContractPage() {
  const { t, locale } = useTranslation();

  const smartContractServices = [
    {
      id: 1,
      title: 'DeFi Protocols',
      description:
        'Secure and gas-optimized smart contracts tailored for decentralized finance applications.',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      id: 2,
      title: 'NFT Marketplaces',
      description:
        'Battle-tested code for creating and managing non-fungible tokens across ecosystems.',
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    },
    {
      id: 3,
      title: 'EVM, Solana, and Cosmos',
      description:
        'Expertise in building robust smart contracts for Ethereum, Solana, and Cosmos ecosystems.',
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    },
  ];

  const metrics = [
    {
      metric: '50+',
      description: 'Smart Contracts Delivered',
    },
    {
      metric: '$500M+',
      description: 'Secured in DeFi Protocols',
    },
    {
      metric: '99.9%',
      description: 'Uptime Across Deployments',
    },
    {
      metric: '20+',
      description: 'Ecosystems Supported',
    },
  ];

  return (
    <>
      <BreadcrumbItem
        link="Smart Contracts"
        img="/images/services/secure-gas-optimized-smart-contracts.webp"
        title="Secure, Gas-Optimized Smart Contracts"
        desc="From DeFi to NFTs, we deliver battle-tested code for EVM, Solana, and Cosmos ecosystems."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Building Secure Blockchain Solutions
                </h2>
                <p className="mb-6">
                  Our team specializes in creating secure, gas-optimized smart
                  contracts for a variety of blockchain applications. Whether
                  you are building DeFi protocols, NFT marketplaces, or
                  enterprise solutions, we ensure your code is robust and
                  battle-tested.
                </p>
                <p>
                  With expertise across Ethereum, Solana, and Cosmos, we help
                  you navigate the complexities of blockchain development and
                  deliver solutions that scale.
                </p>
              </div>
              <div>
                <Image
                  src="/images/services/Building Secure Blockchain Solution.webp"
                  alt="Smart Contracts"
                  className="rounded-lg shadow-lg w-full"
                  width={930}
                  height={593}
                />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Our Expertise
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {smartContractServices.map((service) => (
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
                {metrics.map((item, index) => (
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
                href="/service/smart-contract/apply"
                className="inline-block px-6 py-3 bg-brown-500 text-white rounded-md font-medium hover:bg-brown-600 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Build Secure Smart Contracts?
            </h2>
            <p className="mb-6">
              Whether you need DeFi protocols, NFT solutions, or enterprise
              blockchain applications, our team is ready to deliver secure,
              gas-optimized smart contracts tailored to your needs.
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
