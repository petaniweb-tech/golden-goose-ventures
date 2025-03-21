import React from "react";
import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import Footer from "@/components/Footer/Footer";

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-x-hidden">
      <header id="header">
        <TopNavOne />
        <MenuOne />
      </header>
      <main className="content">{children}</main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}
