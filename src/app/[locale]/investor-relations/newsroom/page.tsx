import React from "react";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CtaOne from "@/components/Section/CTA/CtaOne";
import IconSVG from "@/components/IconSVG";

export default function NewsroomPage() {
  return (
    <>
      <BreadcrumbItem
        link="Newsroom"
        img="/images/banner/about1.png"
        title="Newsroom"
        desc="Headlines & Insights: Stay updated with our latest launches, research, and industry commentary."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Headlines & Insights
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brown-500 rounded-full flex items-center justify-center mt-1">
                    <IconSVG type="service-1" size={24} color="#FFFFFF" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">
                      Press Release
                    </h4>
                    <p className="text-sm font-medium">
                      &quot;XYZ Protocol Audited by Golden Goose Ventures&quot;
                    </p>
                    <span className="text-xs text-gray-500">April 2024</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brown-500 rounded-full flex items-center justify-center mt-1">
                    <IconSVG type="service-2" size={24} color="#FFFFFF" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Report</h4>
                    <p className="text-sm font-medium">
                      &quot;2024 Liquid Venture Trends&quot;
                    </p>
                    <a
                      href="/downloads/2024-liquid-venture-trends.pdf"
                      className="text-brown-500 underline text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download PDF
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brown-500 rounded-full flex items-center justify-center mt-1">
                    <IconSVG type="service-3" size={24} color="#FFFFFF" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Event</h4>
                    <p className="text-sm font-medium">
                      Keynote at Web3 Global Summit
                    </p>
                    <span className="text-xs text-gray-500">March 2024</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="text-center mb-8">
              <p className="text-base">
                Media inquiries? Contact{" "}
                <a
                  href="mailto:pr@goldengoose.vc"
                  className="text-brown-500 underline"
                >
                  pr@goldengoose.vc
                </a>
              </p>
            </div>
            <div className="text-center text-gray-600 text-sm">
              <p>
                Explore our newsroom for the latest updates, in-depth research,
                and expert commentary from Golden Goose Ventures. We are
                committed to keeping our stakeholders and the broader community
                informed about our progress and industry trends.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CtaOne />
    </>
  );
}
