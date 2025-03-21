import React from "react";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import AboutTwo from "@/components/Section/About/AboutTwo";
import CounterTwo from "@/components/Section/Counter/CounterTwo";
import ServiceAboutOne from "@/components/Section/Service/ServiceAboutOne";
import serviceData from "@/data/service.json";
import OurTeam from "@/components/Section/OurTeam/OurTeam";
import PartnerAbout from "@/components/Section/Partner/PartnerAbout";
import CtaOne from "@/components/Section/CTA/CtaOne";

export default function CompanyOverview() {
  return (
    <>
      <BreadcrumbItem
        link="Company Overview"
        img="/images/banner/about1.png"
        title="Company Overview"
        desc="Golden Gate Ventures is a leading blockchain and cryptocurrency investment firm focused on creating long-term value through strategic investments."
      />
      <AboutTwo />
      <CounterTwo classname="lg:pb-[100px] sm:pb-16 pb-10" />
      <ServiceAboutOne data={serviceData} />
      <OurTeam />
      <PartnerAbout />
      <CtaOne />
    </>
  );
}
