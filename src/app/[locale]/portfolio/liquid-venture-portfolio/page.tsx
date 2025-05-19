import React from 'react';
import BreadcrumbItem from '@/components/Breadcrumb/BreadcrumbItem';
import portfolioData from '@/data/portfolio.json';
import CaseStudyItem from '@/components/CaseStudy/CaseStudyItem';
import CtaOne from '@/components/Section/CTA/CtaOne';

export default function LiquidVenturePortfolio() {
  return (
    <>
      <BreadcrumbItem
        link="Liquid Venture Portfolio"
        img="/images/portfolio/Liquid Venture - Fluid Capital for the Future.webp"
        title="Liquid Venture – Fluid Capital for the Future"
        desc="We pioneer Liquid Venture – a hybrid model merging venture capital with market liquidity. Unlike traditional VC, we provide flexible, on-demand funding paired with deep liquidity solutions for Web3 startups and high-growth crypto projects."
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          <p className="text-lg">
            Dynamic Funding: Invest at any stage (pre-seed to Series) with
            structured token/equity deals.
          </p>
          <p className="text-lg">
            Liquidity Backstop: Integrated market-making and OTC services reduce
            volatility for portfolio projects.
          </p>
          <p className="text-lg">
            Accelerated Exits: Secondary markets and DAO-driven buyouts unlock
            early investor returns.
          </p>
        </div>

        <div className="grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-8 gap-y-10 mb-16">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">For Founders</h3>
            <p>Raise faster without sacrificing long-term stability.</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">For Investors</h3>
            <p>Access venture-scale upside with tradable exposure.</p>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">
            Where illiquid meets infinite possibility.
          </h3>
        </div>
      </div>

      <CtaOne />
    </>
  );
}
