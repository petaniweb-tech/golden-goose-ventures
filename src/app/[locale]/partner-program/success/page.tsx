import React from "react";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CtaOne from "@/components/Section/CTA/CtaOne";
import Link from "next/link";

export default function PartnerProgramSuccessPage() {
  return (
    <>
      <BreadcrumbItem
        link="Application Submitted"
        img="/images/banner/about1.png"
        title="Application Submitted"
        desc="Thank you for your interest in the Golden Gate Ventures Partner Program."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-green-600"
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
            </div>

            <h2 className="text-3xl font-bold mb-4">Application Received!</h2>
            <p className="text-lg mb-8">
              Thank you for your interest in joining the Golden Gate Ventures
              Partner Network. We've successfully received your application and
              our team will review it shortly.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-medium mb-4">What happens next?</h3>
              <ol className="space-y-4 text-left">
                <li className="flex">
                  <span className="bg-brown-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                    1
                  </span>
                  <span>
                    Our team will review your application within 5-7 business
                    days.
                  </span>
                </li>
                <li className="flex">
                  <span className="bg-brown-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                    2
                  </span>
                  <span>
                    You'll receive an email confirmation with further details
                    about the review process.
                  </span>
                </li>
                <li className="flex">
                  <span className="bg-brown-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                    3
                  </span>
                  <span>
                    If your application aligns with our partner criteria, we'll
                    schedule a discussion to explore collaboration
                    opportunities.
                  </span>
                </li>
              </ol>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                href="/partner-program"
                className="inline-block px-6 py-3 bg-brown-500 text-white rounded-md font-medium hover:bg-brown-600 transition-colors"
              >
                Return to Partner Program
              </Link>

              <Link
                href="/contact"
                className="inline-block px-6 py-3 border border-brown-500 text-brown-500 rounded-md font-medium hover:bg-brown-500 hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CtaOne />
    </>
  );
}
