import React from "react";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CtaOne from "@/components/Section/CTA/CtaOne";
import Link from "next/link";
import Image from "next/image";

export default function PartnerEventsPage() {
  // Mock event data
  const events = [
    {
      id: 1,
      title: "Annual Partner Summit 2023",
      date: "November 15-16, 2023",
      location: "Marina Bay Sands, Singapore",
      description:
        "Our flagship event bringing together all partners for two days of insights, networking, and collaboration.",
      image: "/images/banner/about1.png",
      status: "upcoming",
      type: "In-person",
    },
    {
      id: 2,
      title: "Blockchain Technology Showcase",
      date: "December 5, 2023",
      location: "Virtual Event",
      description:
        "Technology partners present their latest solutions and innovations to the GGV network.",
      image: "/images/blog/930x593.png",
      status: "upcoming",
      type: "Virtual",
    },
    {
      id: 3,
      title: "DeFi Investment Opportunities Roundtable",
      date: "January 20, 2024",
      location: "Hong Kong",
      description:
        "An exclusive discussion for capital partners exploring emerging DeFi investment trends and opportunities.",
      image: "/images/banner/about1.png",
      status: "upcoming",
      type: "In-person",
    },
    {
      id: 4,
      title: "Web3 Strategic Planning Workshop",
      date: "March 8, 2024",
      location: "Virtual Event",
      description:
        "Interactive workshop for strategic partners focusing on Web3 growth strategies and market positioning.",
      image: "/images/blog/930x593.png",
      status: "upcoming",
      type: "Virtual",
    },
    {
      id: 5,
      title: "Crypto Regulation Symposium",
      date: "September 12, 2023",
      location: "Singapore",
      description:
        "Expert panel discussing regulatory developments across key markets and implications for crypto businesses.",
      image: "/images/banner/about1.png",
      status: "past",
      type: "In-person",
    },
    {
      id: 6,
      title: "Portfolio Showcase Series",
      date: "August 25, 2023",
      location: "Virtual Event",
      description:
        "Featured presentations from high-performing portfolio companies with partnership opportunities.",
      image: "/images/blog/930x593.png",
      status: "past",
      type: "Virtual",
    },
  ];

  // Filter events by status
  const upcomingEvents = events.filter((event) => event.status === "upcoming");
  const pastEvents = events.filter((event) => event.status === "past");

  return (
    <>
      <BreadcrumbItem
        link="Partner Events"
        img="/images/banner/about1.png"
        title="Partner Network Events"
        desc="Exclusive events for members of the Golden Goose Ventures Partner Network to connect, collaborate, and gain valuable insights."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Upcoming Events
            </h2>
            <p className="text-lg mb-10 text-center max-w-3xl mx-auto">
              Our partner events provide valuable opportunities for networking,
              learning, and collaboration among members of the GGV ecosystem.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                      width={930}
                      height={930}
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-gray-600">
                        {event.date}
                      </span>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        {event.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{event.location}</p>
                    <p className="text-gray-700 mb-4">{event.description}</p>

                    <div className="mt-4">
                      <Link
                        href={`/partner-program/events/${event.id}`}
                        className="inline-block px-4 py-2 bg-brown-500 text-white rounded-md text-sm font-medium hover:bg-brown-600 transition-colors"
                      >
                        Event Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Past Events</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pastEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center p-4 bg-white rounded-lg shadow-md"
                >
                  <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md mr-4">
                    <Image
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                      width={96}
                      height={96}
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">
                        {event.date}
                      </span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                        {event.type}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold mb-1">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {event.location}
                    </p>

                    <div className="mt-2">
                      <Link
                        href={`/partner-program/events/${event.id}`}
                        className="text-brown-500 text-sm font-medium hover:underline"
                      >
                        View Recap & Materials
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Partner Event Benefits
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-brown-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-brown-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Exclusive Networking</h3>
                <p className="text-sm">
                  Connect with fellow partners, GGV team members, and portfolio
                  companies.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brown-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-brown-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Industry Insights</h3>
                <p className="text-sm">
                  Gain access to exclusive research, market analysis, and expert
                  presentations.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brown-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-brown-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Business Development</h3>
                <p className="text-sm">
                  Explore collaboration and co-investment opportunities with
                  other partners.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Partner-Only Access</h3>
            <p className="mb-6">
              Partner events are exclusively available to members of our Partner
              Network. Join today to gain access to these valuable networking
              and learning opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/partner-program"
                className="inline-block px-6 py-3 bg-brown-500 text-white rounded-md font-medium hover:bg-brown-600 transition-colors"
              >
                Learn About Partnership
              </Link>

              <Link
                href="/partner-program#application-form"
                className="inline-block px-6 py-3 border border-brown-500 text-brown-500 rounded-md font-medium hover:bg-brown-500 hover:text-white transition-colors"
              >
                Apply to Partner Network
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CtaOne />
    </>
  );
}
