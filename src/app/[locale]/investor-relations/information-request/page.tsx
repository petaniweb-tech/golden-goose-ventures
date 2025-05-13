"use client";

import React, { useState } from "react";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CtaOne from "@/components/Section/CTA/CtaOne";
import IconSVG from "@/components/IconSVG";

export default function InformationRequestPage() {
  // For floating label effect
  const [focus, setFocus] = useState<{ [key: string]: boolean }>({});
  const [values, setValues] = useState<{ [key: string]: string }>({});
  const handleFocus = (field: string) =>
    setFocus((f) => ({ ...f, [field]: true }));
  const handleBlur = (
    field: string,
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFocus((f) => ({ ...f, [field]: !!e.target.value }));
  };
  const handleChange = (
    field: string,
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
  };

  const floatLabel = (field: string) =>
    focus[field] || values[field]
      ? "-top-2 left-2 text-xs text-brown-600 bg-white px-1"
      : "top-2 left-4 text-gray-500";

  return (
    <>
      <BreadcrumbItem
        link="Information Request"
        img="/images/banner/about1.png"
        title="Get in Touch"
        desc="Interested in our Liquid Venture model or specialized services? Let's align your project with the right solutions."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Get in Touch
            </h2>
            <p className="text-lg mb-6 text-center">
              Interested in our Liquid Venture model or specialized services?
              Let&apos;s align your project with the right solutions.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3">
                What You&apos;ll Receive:
              </h3>
              <ul className="list-disc list-inside text-base space-y-1">
                <li>✅ Tailored consultation within 24 hours</li>
                <li>✅ Service brochures (Audits, OTC, Compliance, etc.)</li>
                <li>✅ Custom quotes for your project&apos;s needs</li>
              </ul>
            </div>
            <form className="bg-white p-8 rounded-2xl shadow-xl space-y-8">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="peer w-full border border-black-300 rounded-lg px-4 py-3 focus:border-brown-500 focus:ring-2 focus:ring-brown-100 outline-none transition-all placeholder-transparent"
                  onFocus={() => handleFocus("name")}
                  onBlur={(e) => handleBlur("name", e)}
                  onChange={(e) => handleChange("name", e)}
                  value={values["name"] || ""}
                  required
                />
                <label
                  htmlFor="name"
                  className={`absolute pointer-events-none transition-all duration-200 bg-white ${floatLabel(
                    "name"
                  )}`}
                >
                  Name
                </label>
              </div>
              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="peer w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-brown-500 focus:ring-2 focus:ring-brown-100 outline-none transition-all placeholder-transparent"
                  onFocus={() => handleFocus("email")}
                  onBlur={(e) => handleBlur("email", e)}
                  onChange={(e) => handleChange("email", e)}
                  value={values["email"] || ""}
                  required
                />
                <label
                  htmlFor="email"
                  className={`absolute pointer-events-none transition-all duration-200 bg-white ${floatLabel(
                    "email"
                  )}`}
                >
                  Email
                </label>
              </div>
              {/* Project/Company Name */}
              <div className="relative">
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="peer w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-brown-500 focus:ring-2 focus:ring-brown-100 outline-none transition-all placeholder-transparent"
                  onFocus={() => handleFocus("company")}
                  onBlur={(e) => handleBlur("company", e)}
                  onChange={(e) => handleChange("company", e)}
                  value={values["company"] || ""}
                  required
                />
                <label
                  htmlFor="company"
                  className={`absolute pointer-events-none transition-all duration-200 bg-white ${floatLabel(
                    "company"
                  )}`}
                >
                  Project/Company Name
                </label>
              </div>
              {/* Select Service */}
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  className="peer w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-brown-500 focus:ring-2 focus:ring-brown-100 outline-none transition-all bg-white"
                  onFocus={() => handleFocus("service")}
                  onBlur={(e) => handleBlur("service", e)}
                  onChange={(e) => handleChange("service", e)}
                  value={values["service"] || ""}
                  required
                  defaultValue=""
                >
                  <option value="" disabled hidden>
                    Select Service
                  </option>
                  <option value="consultancy">Consultancy</option>
                  <option value="smart-contract-dev">Smart Contract Dev</option>
                  <option value="audits">Audits</option>
                  <option value="otc">OTC</option>
                  <option value="other">Other</option>
                </select>
                <label
                  htmlFor="service"
                  className={`absolute pointer-events-none transition-all duration-200 bg-white ${floatLabel(
                    "service"
                  )}`}
                >
                  Select Service
                </label>
              </div>
              {/* Brief Details */}
              <div className="relative">
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  className="peer w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-brown-500 focus:ring-2 focus:ring-brown-100 outline-none transition-all placeholder-transparent"
                  placeholder='e.g., "Seeking Series A liquidity support for L1 chain"'
                  onFocus={() => handleFocus("details")}
                  onBlur={(e) => handleBlur("details", e)}
                  onChange={(e) => handleChange("details", e)}
                  value={values["details"] || ""}
                  required
                />
                <label
                  htmlFor="details"
                  className={`absolute pointer-events-none transition-all duration-200 bg-white ${floatLabel(
                    "details"
                  )}`}
                >
                  Brief Details
                </label>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-brown-500 text-black rounded-lg font-semibold text-lg shadow-md hover:bg-brown-600 transition-colors"
              >
                Submit Your Request
              </button>
            </form>
            <div className="text-center text-gray-600 text-xs mt-4">
              <p>We prioritize founder privacy. No spam, ever.</p>
            </div>
          </div>
        </div>
      </div>

      <CtaOne />
    </>
  );
}
