"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "@/i18n/TranslationContext";

export default function OverviewPage() {
  const { locale } = useTranslation();
  return (
    <div className="container mx-auto px-4 py-16">
      <nav className="mb-4 text-sm">
        <Link
          href={`/${locale}/about`}
          className="text-blue-600 hover:underline"
        >
          About Us
        </Link>{" "}
        &gt; Overview
      </nav>
      <h1 className="text-3xl font-bold mb-6">Overview</h1>
      <p className="mb-8">
        Learn more about our vision, investment focus, and history.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <Link
          href={`/${locale}/about/overview/mission-values`}
          className="block p-6 bg-blue-50 rounded-lg shadow hover:bg-blue-100 transition"
        >
          <h2 className="text-xl font-semibold mb-2">
            Our Vision, Mission and Core Values
          </h2>
        </Link>
        <Link
          href={`/${locale}/about/overview/key-investment-area`}
          className="block p-6 bg-blue-50 rounded-lg shadow hover:bg-blue-100 transition"
        >
          <h2 className="text-xl font-semibold mb-2">Key Investment Area</h2>
        </Link>
        <Link
          href={`/${locale}/about/overview/our-history`}
          className="block p-6 bg-blue-50 rounded-lg shadow hover:bg-blue-100 transition"
        >
          <h2 className="text-xl font-semibold mb-2">Our History</h2>
        </Link>
      </div>
    </div>
  );
}
