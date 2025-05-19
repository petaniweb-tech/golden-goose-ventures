'use client';

import React from 'react';
import BreadcrumbItem from '@/components/Breadcrumb/BreadcrumbItem';
import CtaOne from '@/components/Section/CTA/CtaOne';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/i18n/TranslationContext';

export default function EventHostingPage() {
  const { t, locale } = useTranslation();

  // Mock data for event hosting services
  const eventServices = [
    {
      id: 1,
      title: 'Hackathon Organization',
      description:
        'End-to-end planning and execution of hackathons to drive innovation and engagement in the blockchain space.',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      id: 2,
      title: 'AMA Sessions',
      description:
        'Interactive Ask-Me-Anything sessions to connect with your community and build trust.',
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    },
    {
      id: 3,
      title: 'Exclusive Industry Events',
      description:
        'Host private events to foster partnerships and increase visibility for your project.',
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    },
  ];

  // Mock data for event metrics
  const eventMetrics = [
    {
      metric: '50+',
      description: 'Hackathons Hosted',
    },
    {
      metric: '10K+',
      description: 'Participants Engaged',
    },
    {
      metric: '100+',
      description: 'Industry Partnerships Formed',
    },
    {
      metric: '25',
      description: 'Countries Represented',
    },
  ];

  return (
    <>
      <BreadcrumbItem
        link="Event Hosting"
        img="/images/services/Event Hosting Services.webp"
        title="Event Hosting Services"
        desc="Hosting hackathons, AMAs, and exclusive industry events to foster partnerships and visibility for your project."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Empowering Blockchain Projects Through Events
                </h2>
                <p className="mb-6">
                  Golden Goose Ventures offers comprehensive incubation and
                  advisory services designed specifically for blockchain
                  startups and projects. Our team of industry experts provides
                  hands-on support across every aspect of building a successful
                  blockchain business, from technical architecture to
                  tokenomics, regulatory compliance, and go-to-market strategy.
                </p>
                <p>
                  Whether you are launching a new product or looking to
                  strengthen your community, our event hosting services provide
                  the platform you need to succeed in the blockchain ecosystem.
                </p>
              </div>
              <div>
                <Image
                  src="/images/services/Empowering Blockchain Projects through Events.webp"
                  alt="Event Hosting Services"
                  className="rounded-lg shadow-lg w-full"
                  width={930}
                  height={593}
                />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Our Event Hosting Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {eventServices.map((service) => (
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
                {eventMetrics.map((item, index) => (
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
                href="/service/event-hosting/apply"
                className="inline-block px-6 py-3 bg-brown-500 text-white rounded-md font-medium hover:bg-brown-600 transition-colors"
              >
                Host an Event with Us
              </Link>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Elevate Your Blockchain Project?
            </h2>
            <p className="mb-6">
              Whether you&apos;re planning a hackathon, AMA, or exclusive
              industry event, our team is here to help you create impactful
              experiences that drive results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-block px-6 py-3 bg-tan-dark text-white rounded-md font-medium hover:bg-brown transition-colors"
              >
                Host an Event
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
