import React from 'react';
import BreadcrumbItem from '@/components/Breadcrumb/BreadcrumbItem';
import CtaOne from '@/components/Section/CTA/CtaOne';
import Image from 'next/image';

export default function CareersPage() {
  // Mock job listings data
  const jobListings = [
    {
      id: 1,
      title: 'Investment Analyst',
      department: 'Investment Team',
      location: 'Singapore',
      type: 'Full-time',
    },
    {
      id: 2,
      title: 'Blockchain Developer',
      department: 'Technology',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      id: 3,
      title: 'Market Making Specialist',
      department: 'Trading',
      location: 'Hong Kong',
      type: 'Full-time',
    },
    {
      id: 4,
      title: 'Portfolio Operations Associate',
      department: 'Operations',
      location: 'Singapore',
      type: 'Full-time',
    },
    {
      id: 5,
      title: 'Legal Counsel',
      department: 'Legal & Compliance',
      location: 'Singapore',
      type: 'Full-time',
    },
  ];

  return (
    <>
      <BreadcrumbItem
        link="Careers"
        img="/images/careers/Join Our Team.webp"
        title="Join Our Team"
        desc="Explore career opportunities at Golden Goose Ventures and be part of the future of blockchain and cryptocurrency innovation."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Culture</h2>
            <p className="text-lg mb-8">
              At Golden Goose Ventures, we&apos;re building a global team of
              passionate individuals who are excited about the transformative
              potential of blockchain technology and digital assets. We foster a
              culture of innovation, collaboration, and continuous learning.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-center">
              <div>
                <Image
                  src="/images/careers/Our Values.webp"
                  alt="Team Culture"
                  className="rounded-lg shadow-md w-full"
                  width={930}
                  height={593}
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <span className="font-medium">Excellence</span> - We
                      strive for excellence in everything we do
                    </li>
                    <li>
                      <span className="font-medium">Integrity</span> - We
                      operate with honesty and transparency
                    </li>
                    <li>
                      <span className="font-medium">Innovation</span> - We
                      embrace new ideas and approaches
                    </li>
                    <li>
                      <span className="font-medium">Collaboration</span> - We
                      work together to achieve common goals
                    </li>
                    <li>
                      <span className="font-medium">Impact</span> - We focus on
                      creating meaningful results
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Why Join Us?</h3>
                  <p>
                    We offer competitive compensation, comprehensive benefits,
                    and the opportunity to work at the forefront of the
                    blockchain and cryptocurrency industry with some of the most
                    talented professionals in the field.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Open Positions
            </h2>

            <div className="space-y-6">
              {jobListings.map((job) => (
                <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {job.title}
                      </h3>
                      <div className="text-sm text-gray-600 mb-4 md:mb-0">
                        <span className="mr-3">{job.department}</span> ·
                        <span className="mx-3">{job.location}</span> ·
                        <span className="ml-3">{job.type}</span>
                      </div>
                    </div>

                    <div>
                      <a
                        href={`/careers/${job.id}`}
                        className="inline-block px-5 py-2 bg-brown-500 text-white rounded-md font-medium hover:bg-brown-600 transition-colors text-sm"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-gray-600 mb-6">
                Don&apos;t see a position that matches your skills? We&apos;re
                always looking for talented individuals.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-gray-100 text-gray-800 rounded-md font-medium hover:bg-gray-200 transition-colors"
              >
                Send Speculative Application
              </a>
            </div>
          </div>

          <div className="mb-16 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Our Hiring Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-brown-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Application</h3>
                <p className="text-sm">Submit your resume and cover letter</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-brown-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Initial Screen</h3>
                <p className="text-sm">Brief phone or video interview</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-brown-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Interviews</h3>
                <p className="text-sm">
                  In-depth discussions with team members
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-brown-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  4
                </div>
                <h3 className="font-semibold mb-2">Decision</h3>
                <p className="text-sm">Offer and onboarding</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CtaOne />
    </>
  );
}
