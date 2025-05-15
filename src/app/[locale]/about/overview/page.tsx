"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "@/i18n/TranslationContext";

export default function OverviewPage() {
  const { locale } = useTranslation();
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Overview</h1>
      <p className="mb-8">
        Learn more about our vision, investment focus, and history.
      </p>
      <div className="flex flex-col gap-12 max-w-2xl">
        <Link
          href={`/${locale}/about/overview/mission-values`}
          className="p-6 bg-blue-50 rounded-lg shadow hover:bg-blue-100 transition"
        >
          <h2 className="text-xl font-semibold mb-2">
            Our Vision, Mission and Core Values
          </h2>
        </Link>
        <Link
          href={`/${locale}/about/overview/key-investment-area`}
          className="p-6 bg-blue-50 rounded-lg shadow hover:bg-blue-100 transition"
        >
          <h2 className="text-xl font-semibold mb-2">Key Investment Area</h2>
        </Link>
        <Link
          href={`/${locale}/about/overview/our-history`}
          className="p-6 bg-blue-50 rounded-lg shadow hover:bg-blue-100 transition"
        >
          <h2 className="text-xl font-semibold mb-2">Our History</h2>
        </Link>
      </div>
    </div>
  );
}
