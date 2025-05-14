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
    <div className="container mx-auto px-4 py-16 mb-72">
      <h1 className="text-3xl font-bold mb-6">Our Company</h1>
      <p>
        Empowering the Future of Blockchain & Crypto Innovation At Golden Goose
        Ventures, we are committed to accelerating the growth of the next wave
        of blockchain and cryptocurrency innovation. As a leading venture
        capital firm in the crypto space, we invest in visionary entrepreneurs,
        groundbreaking protocols, and disruptive technologies that redefine the
        future of finance and digital ownership.
      </p>
      <br />
      <p>
        Founded in [Year], our firm brings together industry veterans, financial
        strategists, and crypto-native builders with a shared passion for
        decentralization, security, and scalability. With deep expertise in
        blockchain infrastructure, DeFi, Web3 applications, and digital asset
        markets, we provide more than just capital—we offer strategic guidance,
        technical support, and unparalleled access to an exclusive network of
        partners, developers, and industry leaders. We believe in long-term
        value creation and sustainable growth, investing in projects that align
        with our vision of a decentralized and trustless future. Our portfolio
        companies benefit from our extensive experience in liquidity
        provisioning, regulatory strategy, and global market expansion.
      </p>
    </div>
  );
}