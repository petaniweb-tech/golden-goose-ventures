"use client";
import React, { useState } from "react";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CtaOne from "@/components/Section/CTA/CtaOne";
import IconSVG from "@/components/IconSVG";

export default function SubscriptionPage() {
  const [email, setEmail] = useState("");
  return (
    <>
      <BreadcrumbItem
        link="Subscription"
        img="/images/banner/about1.png"
        title="Stay Ahead in Web3 – Subscribe Now"
        desc="Never miss an update on crypto trends, exclusive insights, and early access to our Liquid Venture opportunities."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Stay Ahead in Web3 – Subscribe Now
            </h2>
            <p className="text-lg mb-6 text-center">
              Never miss an update on crypto trends, exclusive insights, and
              early access to our Liquid Venture opportunities.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3">Why Subscribe?</h3>
              <ul className="list-disc list-inside text-base space-y-1">
                <li>
                  🔹 Weekly Market Intelligence – Curated reports on DeFi, NFTs,
                  and institutional crypto moves.
                </li>
                <li>
                  🔹 Early Project Access – Be the first to review our incubated
                  startups and investment openings.
                </li>
                <li>
                  🔹 Event Invites – VIP access to webinars, AMAs, and
                  networking summits.
                </li>
              </ul>
            </div>
            <form className="bg-white p-8 rounded-2xl shadow-xl space-y-6 flex flex-col items-center max-w-lg mx-auto">
              <label
                htmlFor="email"
                className="w-full text-left text-sm font-medium mb-1"
              >
                Join Our Inner Circle
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-brown-500 focus:ring-2 focus:ring-brown-100 outline-none transition-all"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-brown-500 text-black rounded-lg font-semibold text-lg shadow-md hover:bg-brown-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <div className="text-center text-gray-600 text-xs mt-4">
              <p>
                Unsubscribe anytime. We respect your inbox – no clutter, just
                alpha.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CtaOne />
    </>
  );
}
