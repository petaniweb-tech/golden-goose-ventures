import React from "react";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CtaOne from "@/components/Section/CTA/CtaOne";
import Link from "next/link";
import Image from "next/image";

export default function PartnerTestimonialsPage() {
  // Mock testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      company: "Asia Blockchain Ventures",
      role: "Managing Partner",
      image: "/images/team/member1.png",
      quote:
        "Joining the GGV Partner Network has been transformative for our firm. We've gained access to high-quality deal flow and invaluable market insights that have directly contributed to our investment success.",
      partnerType: "Strategic Partner",
      year: "2021",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      company: "Quantum Secure",
      role: "Founder & CEO",
      image: "/images/team/member2.png",
      quote:
        "As a technology partner, we've been able to work with multiple GGV portfolio companies to implement our security solutions. The introductions and connections made through the partner network have accelerated our growth significantly.",
      partnerType: "Technology Partner",
      year: "2022",
    },
    {
      id: 3,
      name: "David Nakamoto",
      company: "Blockchain Capital Group",
      role: "Investment Director",
      image: "/images/team/member3.png",
      quote:
        "The co-investment opportunities we've accessed through GGV's partner network have been exceptional. Their team's due diligence and expertise in the blockchain space complements our investment strategy perfectly.",
      partnerType: "Capital Partner",
      year: "2020",
    },
    {
      id: 4,
      name: "Sophia Laurent",
      company: "DeFi Analytics",
      role: "Chief Strategy Officer",
      image: "/images/team/member4.png",
      quote:
        "Being part of the GGV Partner Network has opened doors to collaborative research and development opportunities. The ecosystem they've built brings together the brightest minds in blockchain innovation.",
      partnerType: "Technology Partner",
      year: "2021",
    },
    {
      id: 5,
      name: "Thomas Wu",
      company: "Eastern Pacific Investments",
      role: "Managing Director",
      image: "/images/team/member5.png",
      quote:
        "The industry insights and market research shared exclusively with GGV partners have given us a significant edge in identifying emerging trends and investment opportunities in the cryptocurrency space.",
      partnerType: "Capital Partner",
      year: "2022",
    },
    {
      id: 6,
      name: "Elena Petrova",
      company: "Fintech Innovations Ltd",
      role: "CEO",
      image: "/images/team/member6.png",
      quote:
        "Our strategic partnership with Golden Gate Ventures has been instrumental in our expansion into Asian markets. Their team's connections and regional expertise have helped us navigate complex regulatory environments.",
      partnerType: "Strategic Partner",
      year: "2021",
    },
  ];

  return (
    <>
      <BreadcrumbItem
        link="Partner Testimonials"
        img="/images/banner/about1.png"
        title="Partner Success Stories"
        desc="Hear from members of our partner network about their experiences and successes working with Golden Gate Ventures."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-6">What Our Partners Say</h2>
            <p className="text-lg">
              Our partners are at the heart of our ecosystem. Learn how joining
              the GGV Partner Network has created value for businesses and
              investors across the blockchain and cryptocurrency landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-start mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                    width={64}
                    height={64}
                  />
                  <div>
                    <h3 className="font-semibold text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm">
                      {testimonial.role}, {testimonial.company}
                    </p>
                    <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded mt-1">
                      {testimonial.partnerType} • Since {testimonial.year}
                    </span>
                  </div>
                </div>

                <blockquote className="italic text-gray-600 border-l-4 border-brown-300 pl-4 py-2 mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Partner Success Metrics
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-brown-500 mb-2">
                  45+
                </div>
                <p className="text-sm">Strategic Partnerships</p>
              </div>

              <div>
                <div className="text-3xl font-bold text-brown-500 mb-2">
                  $120M+
                </div>
                <p className="text-sm">Co-Investment Capital</p>
              </div>

              <div>
                <div className="text-3xl font-bold text-brown-500 mb-2">
                  30+
                </div>
                <p className="text-sm">Technology Integrations</p>
              </div>

              <div>
                <div className="text-3xl font-bold text-brown-500 mb-2">
                  85%
                </div>
                <p className="text-sm">Partner Renewal Rate</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-4">
              Become Our Next Success Story
            </h3>
            <p className="mb-6">
              Join our growing network of partners and discover how GGV can help
              your organization thrive in the blockchain ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/partner-program"
                className="inline-block px-6 py-3 bg-brown-500 text-white rounded-md font-medium hover:bg-brown-600 transition-colors"
              >
                Partner Program Overview
              </Link>

              <Link
                href="/partner-program#application-form"
                className="inline-block px-6 py-3 border border-brown-500 text-brown-500 rounded-md font-medium hover:bg-brown-500 hover:text-white transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CtaOne />
    </>
  );
}
