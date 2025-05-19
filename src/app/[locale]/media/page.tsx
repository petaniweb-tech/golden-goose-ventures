import React from 'react';
import BreadcrumbItem from '@/components/Breadcrumb/BreadcrumbItem';
import CtaOne from '@/components/Section/CTA/CtaOne';
import blogData from '@/data/blog.json';
import Image from 'next/image';

export default function MediaPage() {
  // Filter first 6 blog posts for display
  const recentNews = blogData.slice(0, 6);

  return (
    <>
      <BreadcrumbItem
        link="Media"
        img="/images/media/Media & News.webp"
        title="Media & News"
        desc="Stay updated with the latest news, insights, and announcements from Golden Goose Ventures."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Latest News</h2>
            <p className="text-lg mb-12 text-center max-w-3xl mx-auto">
              Stay informed about Golden Goose Ventures&apos; latest
              investments, portfolio company developments, market insights, and
              thought leadership in the blockchain and cryptocurrency industry.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentNews.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      width={400}
                      height={300}
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-xs bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-xs text-gray-500 ml-3">
                        {item.date}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold mb-3">
                      <a
                        href={`/media/${item.id}`}
                        className="hover:text-brown-500 transition-colors"
                      >
                        {item.title}
                      </a>
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {item.desc}
                    </p>

                    <div className="flex items-center">
                      <Image
                        src={item.avatar}
                        alt={item.author}
                        className="w-8 h-8 rounded-full mr-3"
                        width={32}
                        height={32}
                      />
                      <span className="text-sm font-medium">{item.author}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="/media/all"
                className="inline-block px-8 py-3 bg-brown-500 text-white rounded-md font-medium hover:bg-brown-600 transition-colors"
              >
                View All News
              </a>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Press Releases
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Golden Goose Ventures Launches $300M Crypto Growth Fund
                    </h3>
                    <div className="text-sm text-gray-600 mb-4 md:mb-0">
                      <span className="mr-3">January 15, 2023</span> ·
                      <span className="mx-3">Press Release</span>
                    </div>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="inline-block px-5 py-2 bg-gray-100 text-gray-800 rounded-md font-medium hover:bg-gray-200 transition-colors text-sm"
                    >
                      Read Release
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Golden Goose Ventures Expands Asian Operations with Hong
                      Kong Office
                    </h3>
                    <div className="text-sm text-gray-600 mb-4 md:mb-0">
                      <span className="mr-3">October 5, 2022</span> ·
                      <span className="mx-3">Press Release</span>
                    </div>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="inline-block px-5 py-2 bg-gray-100 text-gray-800 rounded-md font-medium hover:bg-gray-200 transition-colors text-sm"
                    >
                      Read Release
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Golden Goose Ventures Completes Investment in Blockchain
                      Infrastructure Company
                    </h3>
                    <div className="text-sm text-gray-600 mb-4 md:mb-0">
                      <span className="mr-3">July 22, 2022</span> ·
                      <span className="mx-3">Press Release</span>
                    </div>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="inline-block px-5 py-2 bg-gray-100 text-gray-800 rounded-md font-medium hover:bg-gray-200 transition-colors text-sm"
                    >
                      Read Release
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <a
                href="/media/press-releases"
                className="inline-block px-8 py-3 border border-brown-500 text-brown-500 rounded-md font-medium hover:bg-brown-500 hover:text-white transition-colors"
              >
                View All Press Releases
              </a>
            </div>
          </div>

          <div className="mb-16 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Media Contacts
            </h2>
            <p className="text-center mb-8">
              For press inquiries and media opportunities, please contact our
              communications team.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-semibold mb-3">Press Inquiries</h3>
                <p className="text-sm mb-4">
                  For interview requests and general media inquiries
                </p>
                <a
                  href="mailto:press@goldengate.ventures"
                  className="text-brown-500 font-medium hover:underline"
                >
                  press@goldengate.ventures
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-semibold mb-3">
                  Speaking Engagements
                </h3>
                <p className="text-sm mb-4">
                  For event and speaking opportunities
                </p>
                <a
                  href="mailto:events@goldengate.ventures"
                  className="text-brown-500 font-medium hover:underline"
                >
                  events@goldengate.ventures
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CtaOne />
    </>
  );
}
