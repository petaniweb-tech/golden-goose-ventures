import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import AboutTwo from "@/components/Section/About/AboutTwo"
import CounterTwo from "@/components/Section/Counter/CounterTwo"
import ServiceAboutOne from "@/components/Section/Service/ServiceAboutOne"
import serviceData from '@/data/service.json'
import OurTeam from "@/components/Section/OurTeam/OurTeam"
import PartnerAbout from "@/components/Section/Partner/PartnerAbout"
import CtaOne from "@/components/Section/CTA/CtaOne"
import Footer from "@/components/Footer/Footer"
import Link from "next/link";

export default function OurCompanyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <nav className="mb-4 text-sm">
        <Link href="/about" className="text-blue-600 hover:underline">
          About Us
        </Link>{" "}
        &gt; Our Company
      </nav>
      <h1 className="text-3xl font-bold mb-6">Our Company</h1>
      <p>Information about our company will be added here.</p>
    </div>
  );
}