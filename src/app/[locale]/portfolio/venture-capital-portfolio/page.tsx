import React from 'react';
import BreadcrumbItem from '@/components/Breadcrumb/BreadcrumbItem';
import CtaOne from '@/components/Section/CTA/CtaOne';
import IconSVG from '@/components/IconSVG';

export default function VentureCapitalPage() {
  return (
    <>
      <BreadcrumbItem
        link="Venture Capital & Token Investments"
        img="/images/portfolio/Venture Capital.webp"
        title="Venture Capital"
        desc="Golden Goose Ventures' flagship investment arm focused on blockchain and cryptocurrency opportunities."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Venture Capital & Token Investments
            </h2>
            <p className="text-lg mb-8">
              We invest in high-potential blockchain startups and digital assets
              across various stages.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">
                  Seed & Early-Stage
                </h3>
                <p>
                  Supporting visionary founders with funding, mentorship, and
                  ecosystem access.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">
                  Growth-Stage & Expansion
                </h3>
                <p>
                  Scaling promising projects with liquidity, exchange listings,
                  and institutional adoption.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">
                  Token Investment & Market Participation
                </h3>
                <p>
                  Providing liquidity and advisory support for tokenized
                  economies.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Our Portfolio & Governance
            </h2>

            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <p className="text-lg mb-8">
                Our portfolio includes [mention successful investments if
                applicable], and we actively participate in governance through
                DAO voting and network staking.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brown-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconSVG type="service-1" size={32} color="#FFFFFF" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">DAO Voting</h3>
                  <p>
                    Actively participating in decentralized governance to shape
                    the future of blockchain networks.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-brown-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconSVG type="service-2" size={32} color="#FFFFFF" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Network Staking
                  </h3>
                  <p>
                    Supporting blockchain security and earning rewards through
                    strategic staking initiatives.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-brown-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconSVG type="service-3" size={32} color="#FFFFFF" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Advisory Support
                  </h3>
                  <p>
                    Providing expert guidance to help projects navigate
                    tokenized economies.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mb-12">
              <a
                href="/portfolio"
                className="inline-block px-8 py-3 bg-brown-500 text-white rounded-md font-medium hover:bg-brown-600 transition-colors"
              >
                View Our Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>

      <CtaOne />
    </>
  );
}
