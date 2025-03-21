'use client'

import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation";
import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useTranslation } from "@/i18n/TranslationContext";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";

const MenuOne = () => {
  const { t, locale } = useTranslation();
  const pathname = usePathname();
  const [fixedHeader, setFixedHeader] = useState(false);
  // const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const [openSubNavMobile, setOpenSubNavMobile] = useState<number | null>(null);

  const handleOpenSubNavMobile = (index: number) => {
    setOpenSubNavMobile(openSubNavMobile === index ? null : index);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setOpenMenuMobile(!openMenuMobile);
    // Close any open submenus when closing the main menu
    if (openMenuMobile) {
      setOpenSubNavMobile(null);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setFixedHeader(scrollPosition > 400);
      // setLastScrollPosition(scrollPosition);
    };

    // Gắn sự kiện cuộn khi component được mount
    window.addEventListener("scroll", handleScroll);

    // Hủy sự kiện khi component bị unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpenMenuMobile(false);
    setOpenSubNavMobile(null);
  }, [pathname]);

  return (
    <>
      <div
        className={`header-menu style-one bg-white ${
          fixedHeader ? "fixed" : ""
        }`}
      >
        <div className="container flex items-center justify-between h-20">
          <Link className="menu-left-block" href={`/${locale}`}>
            <Image
              src={"/images/Logo.png"}
              width={2000}
              height={1000}
              alt="Golden Gate Ventures"
              priority={true}
              className="w-[200px] max-sm:w-[132px]"
            />
          </Link>
          <div className="menu-center-block h-full max-xl:hidden">
            <ul className="menu-nav flex items-center xl:gap-2 h-full">
              <li
                className={`nav-item h-full flex items-center justify-center ${
                  pathname === `/${locale}` ||
                  pathname.includes(`/${locale}/ggv-group/`)
                    ? "active"
                    : ""
                }`}
              >
                <Link
                  className="nav-link text-title flex items-center gap-1"
                  href="#!"
                >
                  <span>{t("HEADER.MENU.GGV_GROUP")}</span>
                  <span>
                    <Icon.CaretDown className="text-sm" />
                  </span>
                </Link>
                <ul className="sub-nav">
                  <li
                    className={`sub-nav-item ${
                      pathname === `/${locale}` ? "active" : ""
                    }`}
                  >
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}`}
                    >
                      {t("HEADER.MENU.GROUP_OVERVIEW")}
                    </Link>
                  </li>
                  <li className={`sub-nav-item`}>
                    {" "}
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/ggv-group/venture-capital`}
                    >
                      {t("HEADER.MENU.VENTURE_CAPITAL")}
                    </Link>
                  </li>
                  <li className={`sub-nav-item`}>
                    {" "}
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/ggv-group/otc-trading`}
                    >
                      {t("HEADER.MENU.OTC_TRADING")}
                    </Link>
                  </li>
                  <li className={`sub-nav-item`}>
                    {" "}
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/ggv-group/market-making`}
                    >
                      {t("HEADER.MENU.MARKET_MAKING")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={`nav-item h-full flex items-center justify-center ${
                  pathname.includes(`/${locale}/about/`) ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link text-title flex items-center gap-1"
                  href="#!"
                >
                  <span>{t("HEADER.MENU.ABOUT_US")}</span>
                  <span>
                    <Icon.CaretDown className="text-sm" />
                  </span>
                </Link>
                <ul className="sub-nav">
                  <li
                    className={`sub-nav-item ${
                      pathname === `/${locale}/about/overview` ? "active" : ""
                    }`}
                  >
                    {" "}
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/about/overview`}
                    >
                      {t("HEADER.MENU.COMPANY_OVERVIEW")}
                    </Link>
                  </li>
                  <li
                    className={`sub-nav-item ${
                      pathname === `/${locale}/about/mission-values`
                        ? "active"
                        : ""
                    }`}
                  >
                    {" "}
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/about/mission-values`}
                    >
                      {t("HEADER.MENU.MISSION_VALUES")}
                    </Link>
                  </li>
                  <li
                    className={`sub-nav-item ${
                      pathname === `/${locale}/about/structure` ? "active" : ""
                    }`}
                  >
                    {" "}
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/about/structure`}
                    >
                      {t("HEADER.MENU.CORPORATE_STRUCTURE")}
                    </Link>
                  </li>
                  <li
                    className={`sub-nav-item ${
                      pathname === `/${locale}/about/team` ? "active" : ""
                    }`}
                  >
                    {" "}
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/about/team`}
                    >
                      {t("HEADER.MENU.TEAM")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={`nav-item h-full flex items-center justify-center ${
                  pathname.includes(`/${locale}/service`) ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link text-title flex items-center gap-1"
                  href="#!"
                >
                  <span>{t("HEADER.MENU.SERVICES")}</span>
                  <span>
                    <Icon.CaretDown className="text-sm" />
                  </span>
                </Link>
                <ul className="sub-nav">
                  <li
                    className={`sub-nav-item ${
                      pathname === `/${locale}/service/venture-capital`
                        ? "active"
                        : ""
                    }`}
                  >
                    {" "}
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/service/venture-capital`}
                    >
                      {t("HEADER.MENU.VENTURE_CAPITAL")}
                    </Link>
                  </li>
                  <li
                    className={`sub-nav-item ${
                      pathname === `/${locale}/service/otc-trading`
                        ? "active"
                        : ""
                    }`}
                  >
                    {" "}
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/service/otc-trading`}
                    >
                      {t("HEADER.MENU.OTC_TRADING")}
                    </Link>
                  </li>
                  <li
                    className={`sub-nav-item ${
                      pathname === `/${locale}/service/market-making`
                        ? "active"
                        : ""
                    }`}
                  >
                    {" "}
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/service/market-making`}
                    >
                      {t("HEADER.MENU.MARKET_MAKING")}
                    </Link>
                  </li>
                  <li
                    className={`sub-nav-item ${
                      pathname === `/${locale}/service/incubation`
                        ? "active"
                        : ""
                    }`}
                  >
                    {" "}
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/service/incubation`}
                    >
                      {t("HEADER.MENU.INCUBATION_ADVISORY")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={`nav-item h-full flex items-center justify-center ${
                  pathname.includes(`/${locale}/portfolio`) ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link text-title flex items-center gap-1"
                  href="#!"
                >
                  <span>{t("HEADER.MENU.PORTFOLIO")}</span>
                  <span>
                    <Icon.CaretDown className="text-sm" />
                  </span>
                </Link>
                <ul className="sub-nav">
                  <li
                    className={`sub-nav-item ${
                      pathname === `/${locale}/portfolio/blockchain`
                        ? "active"
                        : ""
                    }`}
                  >
                    {" "}
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/portfolio/blockchain`}
                    >
                      {t("HEADER.MENU.BLOCKCHAIN")}
                    </Link>
                  </li>
                  <li
                    className={`sub-nav-item ${
                      pathname === `/${locale}/portfolio/cryptocurrency`
                        ? "active"
                        : ""
                    }`}
                  >
                    {" "}
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/portfolio/cryptocurrency`}
                    >
                      {t("HEADER.MENU.CRYPTOCURRENCY")}
                    </Link>
                  </li>
                  <li
                    className={`sub-nav-item ${
                      pathname === `/${locale}/portfolio/defi` ? "active" : ""
                    }`}
                  >
                    {" "}
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/portfolio/defi`}
                    >
                      {t("HEADER.MENU.DEFI")}
                    </Link>
                  </li>
                  <li
                    className={`sub-nav-item ${
                      pathname === `/${locale}/portfolio/web3` ? "active" : ""
                    }`}
                  >
                    {" "}
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/portfolio/web3`}
                    >
                      {t("HEADER.MENU.WEB3")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={`nav-item h-full flex items-center justify-center ${
                  pathname.includes(`/${locale}/investor-relations`)
                    ? "active"
                    : ""
                }`}
              >
                <Link
                  className="nav-link text-title"
                  href={`/${locale}/investor-relations`}
                >
                  {t("HEADER.MENU.INVESTOR_RELATIONS")}
                </Link>
              </li>
              <li
                className={`nav-item h-full flex items-center justify-center ${
                  pathname.includes(`/${locale}/careers`) ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link text-title"
                  href={`/${locale}/careers`}
                >
                  {t("HEADER.MENU.CAREERS")}
                </Link>
              </li>
              <li
                className={`nav-item h-full flex items-center justify-center ${
                  pathname.includes(`/${locale}/media`) ? "active" : ""
                }`}
              >
                <Link className="nav-link text-title" href={`/${locale}/media`}>
                  {t("HEADER.MENU.MEDIA")}
                </Link>
              </li>
              <li
                className={`nav-item h-full flex items-center justify-center ${
                  pathname.includes(`/${locale}/partner-program`)
                    ? "active"
                    : ""
                }`}
              >
                <Link
                  className="nav-link text-title"
                  href={`/${locale}/partner-program`}
                >
                  {t("HEADER.MENU.PARTNER_PROGRAM")}
                </Link>
              </li>
              <li className="nav-item h-full flex items-center justify-center">
                <Link
                  className="nav-link text-title"
                  href={`/${locale}/contact`}
                >
                  {t("HEADER.MENU.CONTACT")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="menu-right-block flex items-center gap-4">
            {/* Language Switcher - Only visible on mobile */}
            <div className="hidden max-xl:flex items-center mr-1">
              <LanguageSwitcher className="lang-switcher-mobile" />
            </div>
            {/* Mobile Menu Icon */}
            <div
              className="menu-mobile-icon xl:hidden cursor-pointer"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <Icon.List className="text-black text-2xl" />
            </div>
          </div>
        </div>
        <div
          id="menu-mobile-block"
          className={`${openMenuMobile ? "open" : ""}`}
        >
          <div className="menu-mobile-main">
            <div className="container">
              <div className="flex items-center justify-end py-4 mt-2">
                <div
                  className="mobile-close-btn cursor-pointer"
                  onClick={toggleMobileMenu}
                >
                  <Icon.X className="text-black text-2xl" />
                </div>
              </div>

              <ul className="menu-nav-mobile h-full pt-3 pb-6 mb-4">
                <li
                  className={`nav-item-mobile h-full flex-column gap-2 pt-2 pb-2 pl-3 pr-3 pointer ${
                    openSubNavMobile === 1 ? "active" : ""
                  }`}
                  onClick={() => handleOpenSubNavMobile(1)}
                >
                  <a
                    className="nav-link-mobile flex items-center justify-between py-3"
                    href="#!"
                  >
                    <span className="body2 font-semibold">
                      {t("HEADER.MENU.GGV_GROUP")}{" "}
                    </span>
                    <Icon.CaretRight className="text-base" />
                  </a>
                  <ul
                    className={`sub-nav-mobile ${
                      openSubNavMobile === 1 ? "open" : ""
                    }`}
                  >
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}`}
                      >
                        {t("HEADER.MENU.GROUP_OVERVIEW")}
                      </Link>
                    </li>
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      {" "}
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/ggv-group/venture-capital`}
                      >
                        {t("HEADER.MENU.VENTURE_CAPITAL")}
                      </Link>
                    </li>
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      {" "}
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/ggv-group/otc-trading`}
                      >
                        {t("HEADER.MENU.OTC_TRADING")}
                      </Link>
                    </li>
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      {" "}
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/ggv-group/market-making`}
                      >
                        {t("HEADER.MENU.MARKET_MAKING")}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer ${
                    openSubNavMobile === 2 ? "active" : ""
                  }`}
                  onClick={() => handleOpenSubNavMobile(2)}
                >
                  <a
                    className="nav-link-mobile flex items-center justify-between py-3"
                    href="#!"
                  >
                    <span className="body2 font-semibold">
                      {t("HEADER.MENU.ABOUT_US")}{" "}
                    </span>
                    <Icon.CaretRight className="text-base" />
                  </a>
                  <ul
                    className={`sub-nav-mobile ${
                      openSubNavMobile === 2 ? "open" : ""
                    }`}
                  >
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/about/overview`}
                      >
                        {t("HEADER.MENU.COMPANY_OVERVIEW")}
                      </Link>
                    </li>
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      {" "}
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/about/mission-values`}
                      >
                        {t("HEADER.MENU.MISSION_VALUES")}
                      </Link>
                    </li>
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      {" "}
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/about/structure`}
                      >
                        {t("HEADER.MENU.CORPORATE_STRUCTURE")}
                      </Link>
                    </li>
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      {" "}
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/about/team`}
                      >
                        {t("HEADER.MENU.TEAM")}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer ${
                    openSubNavMobile === 3 ? "active" : ""
                  }`}
                  onClick={() => handleOpenSubNavMobile(3)}
                >
                  <a
                    className="nav-link-mobile flex items-center justify-between py-3"
                    href="#!"
                  >
                    <span className="body2 font-semibold">
                      {t("HEADER.MENU.SERVICES")}{" "}
                    </span>
                    <Icon.CaretRight className="text-base" />
                  </a>
                  <ul
                    className={`sub-nav-mobile ${
                      openSubNavMobile === 3 ? "open" : ""
                    }`}
                  >
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/service/venture-capital`}
                      >
                        {t("HEADER.MENU.VENTURE_CAPITAL")}
                      </Link>
                    </li>
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      {" "}
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/service/otc-trading`}
                      >
                        {t("HEADER.MENU.OTC_TRADING")}
                      </Link>
                    </li>
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      {" "}
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/service/market-making`}
                      >
                        {t("HEADER.MENU.MARKET_MAKING")}
                      </Link>
                    </li>
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      {" "}
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/service/incubation`}
                      >
                        {t("HEADER.MENU.INCUBATION_ADVISORY")}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer ${
                    openSubNavMobile === 4 ? "active" : ""
                  }`}
                  onClick={() => handleOpenSubNavMobile(4)}
                >
                  <a
                    className="nav-link-mobile flex items-center justify-between py-3"
                    href="#!"
                  >
                    <span className="body2 font-semibold">
                      {t("HEADER.MENU.PORTFOLIO")}{" "}
                    </span>
                    <Icon.CaretRight className="text-base" />
                  </a>
                  <ul
                    className={`sub-nav-mobile ${
                      openSubNavMobile === 4 ? "open" : ""
                    }`}
                  >
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      {" "}
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/portfolio/blockchain`}
                      >
                        {t("HEADER.MENU.BLOCKCHAIN")}
                      </Link>
                    </li>
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      {" "}
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/portfolio/cryptocurrency`}
                      >
                        {t("HEADER.MENU.CRYPTOCURRENCY")}
                      </Link>
                    </li>
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      {" "}
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/portfolio/defi`}
                      >
                        {t("HEADER.MENU.DEFI")}
                      </Link>
                    </li>
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      {" "}
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/portfolio/web3`}
                      >
                        {t("HEADER.MENU.WEB3")}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3">
                  <Link
                    className="nav-link-mobile flex items-center justify-between py-3"
                    href={`/${locale}/investor-relations`}
                  >
                    <span className="body2 font-semibold">
                      {t("HEADER.MENU.INVESTOR_RELATIONS")}
                    </span>
                    <Icon.ArrowRight className="text-gray-500 text-sm" />
                  </Link>
                </li>
                <li className="nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3">
                  <Link
                    className="nav-link-mobile flex items-center justify-between py-3"
                    href={`/${locale}/careers`}
                  >
                    <span className="body2 font-semibold">
                      {t("HEADER.MENU.CAREERS")}
                    </span>
                    <Icon.ArrowRight className="text-gray-500 text-sm" />
                  </Link>
                </li>
                <li className="nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3">
                  <Link
                    className="nav-link-mobile flex items-center justify-between py-3"
                    href={`/${locale}/media`}
                  >
                    <span className="body2 font-semibold">
                      {t("HEADER.MENU.MEDIA")}
                    </span>
                    <Icon.ArrowRight className="text-gray-500 text-sm" />
                  </Link>
                </li>
                <li className="nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3">
                  <Link
                    className="nav-link-mobile flex items-center justify-between py-3"
                    href={`/${locale}/partner-program`}
                  >
                    <span className="body2 font-semibold">
                      {t("HEADER.MENU.PARTNER_PROGRAM")}
                    </span>
                    <Icon.ArrowRight className="text-gray-500 text-sm" />
                  </Link>
                </li>
                <li className="nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3">
                  <Link
                    className="nav-link-mobile flex items-center justify-between py-3 font-medium"
                    href={`/${locale}/contact`}
                  >
                    <span className="body2 font-semibold text-blue">
                      {t("HEADER.MENU.CONTACT")}
                    </span>
                    <Icon.ArrowRight className="text-blue text-base" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MenuOne