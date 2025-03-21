import React from "react";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import AboutTwo from "@/components/Section/About/AboutTwo";
import CounterTwo from "@/components/Section/Counter/CounterTwo";
import CtaOne from "@/components/Section/CTA/CtaOne";

export default function MissionValues() {
  return (
    <>
      <BreadcrumbItem
        link="Mission & Values"
        img="/images/banner/about1.png"
        title="Our Mission & Values"
        desc="We're committed to fostering innovation in blockchain technology and creating long-term value for our investors and portfolio companies."
      />
      <AboutTwo />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
          <p className="text-lg">
            At Golden Gate Ventures, we operate with a set of principles that
            guide our decision-making and relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Integrity</h3>
            <p>
              We operate with honesty and transparency in all our dealings,
              maintaining the highest ethical standards.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Innovation</h3>
            <p>
              We constantly seek new ideas and approaches to create value in the
              evolving blockchain ecosystem.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Partnership</h3>
            <p>
              We work closely with our portfolio companies, providing not just
              capital but strategic guidance and support.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Excellence</h3>
            <p>
              We strive for excellence in everything we do, setting high
              standards for ourselves and our investments.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Long-term Focus</h3>
            <p>
              We make decisions with a view to sustainable, long-term growth
              rather than short-term gains.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Adaptability</h3>
            <p>
              We embrace change and adapt quickly to the rapidly evolving
              blockchain and cryptocurrency landscape.
            </p>
          </div>
        </div>
      </div>
      <CounterTwo classname="lg:pb-[100px] sm:pb-16 pb-10" />
      <CtaOne />
    </>
  );
}
