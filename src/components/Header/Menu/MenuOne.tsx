'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import * as Icon from '@phosphor-icons/react/dist/ssr';
import { useTranslation } from '@/i18n/TranslationContext';
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher';

const MenuOne = () => {
  const { t, locale } = useTranslation();
  const pathname = usePathname();
  const [fixedHeader, setFixedHeader] = useState(false);
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

    window.addEventListener("scroll", handleScroll);

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
              alt="Golden Goose Ventures"
              priority={true}
              className="w-[200px] max-sm:w-[132px]"
            />
          </Link>
          <div className="menu-center-block h-full max-xl:hidden">
            <ul className="menu-nav flex items-center xl:gap-2 h-full">
              {/* GGV Menu */}
              <li
                className={`hidden nav-item h-full flex items-center justify-center ${
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

              {/* About Us Menu */}
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
                      pathname === `/${locale}/about/about-one` ? "active" : ""
                    }`}
                  >
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/about/about-one`}
                    >
                      Our Company
                    </Link>
                  </li>
                  <li
                    className={`sub-nav-item ${
                      pathname === `/${locale}/about/team` ? "active" : ""
                    }`}
                  >
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/about/team`}
                    >
                      Our Team
                    </Link>
                  </li>
                  <li
                    className={`sub-nav-item ${
                      pathname === `/${locale}/about/structure` ? "active" : ""
                    }`}
                  >
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/about/structure`}
                    >
                      Corporate Structure
                    </Link>
                    <ul className="sub-nav-item">
                      <li
                        className={`sub-sub-nav-item ${
                          pathname === `/${locale}/about/venture-capital`
                            ? "active"
                            : ""
                        }`}
                      >
                        <Link
                          className="sub-sub-nav-link font-medium"
                          href={`/${locale}/about/venture-capital`}
                        >
                          Venture Capital
                        </Link>
                      </li>
                      <li
                        className={`sub-sub-nav-item ${
                          pathname === `/${locale}/about/venture-builder`
                            ? "active"
                            : ""
                        }`}
                      >
                        <Link
                          className="sub-sub-nav-link font-medium"
                          href={`/${locale}/about/venture-builder`}
                        >
                          Venture Builder
                        </Link>
                      </li>
                      <li
                        className={`sub-sub-nav-item ${
                          pathname === `/${locale}/about/market-making`
                            ? "active"
                            : ""
                        }`}
                      >
                        <Link
                          className="sub-sub-nav-link font-medium"
                          href={`/${locale}/about/market-making`}
                        >
                          OTC / Market Making
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={`sub-nav-item ${
                      pathname === `/${locale}/about/overview` ? "active" : ""
                    }`}
                  >
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/about/overview`}
                    >
                      Overview
                    </Link>
                    <ul className="sub-nav-item">
                      <li
                        className={`sub-sub-nav-item ${
                          pathname ===
                          `/${locale}/about/overview/mission-values`
                            ? "active"
                            : ""
                        }`}
                      >
                        <Link
                          className="sub-sub-nav-link font-medium"
                          href={`/${locale}/about/overview/mission-values`}
                        >
                          Our Vision, Mission and Core Values
                        </Link>
                      </li>
                      <li
                        className={`sub-sub-nav-item ${
                          pathname ===
                          `/${locale}/about/overview/key-investment-area`
                            ? "active"
                            : ""
                        }`}
                      >
                        <Link
                          className="sub-sub-nav-link font-medium"
                          href={`/${locale}/about/overview/key-investment-area`}
                        >
                          Key Investment Area
                        </Link>
                      </li>
                      <li
                        className={`sub-sub-nav-item ${
                          pathname === `/${locale}/about/overview/our-history`
                            ? "active"
                            : ""
                        }`}
                      >
                        <Link
                          className="sub-sub-nav-link font-medium"
                          href={`/${locale}/about/overview/our-history`}
                        >
                          Our History
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              {/* Service Menu */}
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
                {/* <ul className="sub-nav">
                  <li
                    className={`hidden sub-nav-item ${
                      pathname === `/${locale}/service/venture-capital`
                        ? 'active'
                        : ''
                    }`}
                  >
                    {' '}
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/service/venture-capital`}
                    >
                      {t('HEADER.MENU.VENTURE_CAPITAL')}
                    </Link>
                  </li>
                  <li
                    className={`sub-nav-item ${
                      pathname === `/${locale}/service/otc-trading`
                        ? 'active'
                        : ''
                    }`}
                  >
                    {' '}
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/service/otc-trading`}
                    >
                      {t('HEADER.MENU.OTC_TRADING')}
                    </Link>
                  </li>
                  <li
                    className={`sub-nav-item ${
                      pathname === `/${locale}/service/market-making`
                        ? 'active'
                        : ''
                    }`}
                  >
                    {' '}
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/service/market-making`}
                    >
                      {t('HEADER.MENU.MARKET_MAKING')}
                    </Link>
                  </li>
                  <li
                    className={`sub-nav-item ${
                      pathname === `/${locale}/service/incubation`
                        ? 'active'
                        : ''
                    }`}
                  >
                    {' '}
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/service/incubation`}
                    >
                      {t('HEADER.MENU.INCUBATION_ADVISORY')}
                    </Link>
                  </li>
                </ul> */}
                <ul className="sub-nav">
                  <li
                    className={`sub-nav-item ${
                      pathname === `/${locale}/service/consultancy`
                        ? "active"
                        : ""
                    }`}
                  >
                    {" "}
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/service/consultancy`}
                    >
                      {t("HEADER.MENU.CONSULTANCY")}
                    </Link>
                  </li>

                  <li
                    className={`sub-nav-item ${
                      pathname === `/${locale}/service/marketing`
                        ? "active"
                        : ""
                    }`}
                  >
                    {" "}
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/service/marketing`}
                    >
                      {t("HEADER.MENU.MARKETING")}
                    </Link>
                  </li>

                  <li
                    className={`sub-nav-item ${
                      pathname === `/${locale}/service/sales` ? "active" : ""
                    }`}
                  >
                    {" "}
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/service/sales`}
                    >
                      {t("HEADER.MENU.SALES")}
                    </Link>
                  </li>

                  <li
                    className={`sub-nav-item ${
                      pathname === `/${locale}/service/smart-contract`
                        ? "active"
                        : ""
                    }`}
                  >
                    {" "}
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/service/smart-contract`}
                    >
                      {t("HEADER.MENU.SMART_CONTRACT")}
                    </Link>
                  </li>

                  <li
                    className={`sub-nav-item ${
                      pathname === `/${locale}/service/audit` ? "active" : ""
                    }`}
                  >
                    {" "}
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/service/audit`}
                    >
                      {t("HEADER.MENU.AUDIT")}
                    </Link>
                  </li>

                  <li
                    className={`sub-nav-item ${
                      pathname === `/${locale}/service/compliance`
                        ? "active"
                        : ""
                    }`}
                  >
                    {" "}
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/service/compliance`}
                    >
                      {t("HEADER.MENU.COMPLIANCE")}
                    </Link>
                  </li>

                  <li
                    className={`sub-nav-item ${
                      pathname === `/${locale}/service/otc-mm` ? "active" : ""
                    }`}
                  >
                    {" "}
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/service/otc-mm`}
                    >
                      {t("HEADER.MENU.OTC_MM")}
                    </Link>
                  </li>

                  <li
                    className={`sub-nav-item ${
                      pathname === `/${locale}/service/eventss` ? "active" : ""
                    }`}
                  >
                    {" "}
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/service/eventss`}
                    >
                      {t("HEADER.MENU.EVENTS")}
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Portfolio Menu */}
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
                {/* <ul className="sub-nav">
                  <li
                    className={`sub-nav-item ${
                      pathname === `/${locale}/portfolio/blockchain`
                        ? 'active'
                        : ''
                    }`}
                  >
                    {' '}
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/portfolio/blockchain`}
                    >
                      {t('HEADER.MENU.BLOCKCHAIN')}
                    </Link>
                  </li>
                  <li
                    className={`sub-nav-item ${
                      pathname === `/${locale}/portfolio/cryptocurrency`
                        ? 'active'
                        : ''
                    }`}
                  >
                    {' '}
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/portfolio/cryptocurrency`}
                    >
                      {t('HEADER.MENU.CRYPTOCURRENCY')}
                    </Link>
                  </li>
                  <li
                    className={`sub-nav-item ${
                      pathname === `/${locale}/portfolio/defi` ? 'active' : ''
                    }`}
                  >
                    {' '}
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/portfolio/defi`}
                    >
                      {t('HEADER.MENU.DEFI')}
                    </Link>
                  </li>
                  <li
                    className={`sub-nav-item ${
                      pathname === `/${locale}/portfolio/web3` ? 'active' : ''
                    }`}
                  >
                    {' '}
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/portfolio/web3`}
                    >
                      {t('HEADER.MENU.WEB3')}
                    </Link>
                  </li>
                </ul> */}

                <ul className="sub-nav">
                  <li
                    className={`sub-nav-item ${
                      pathname ===
                      `/${locale}/portfolio/venture-capital-portfolio`
                        ? "active"
                        : ""
                    }`}
                  >
                    {" "}
                    <Link className="sub-nav-link font-medium" href="#!">
                      {t("HEADER.MENU.VENTURE_CAPITAL_PORTFOLIO")}
                    </Link>
                    <ul className="sub-nav-item">
                      <li
                        className={`sub-nav-item ${
                          pathname === `/${locale}/portfolio/saft`
                            ? "active"
                            : ""
                        }`}
                      >
                        {" "}
                        <Link
                          className="sub-nav-link font-medium"
                          href={`/${locale}/portfolio/saft`}
                        >
                          {t("HEADER.MENU.SAFT")}
                        </Link>
                      </li>

                      <li
                        className={`sub-nav-item ${
                          pathname === `/${locale}/portfolio/token-warrants`
                            ? "active"
                            : ""
                        }`}
                      >
                        {" "}
                        <Link
                          className="sub-nav-link font-medium"
                          href={`/${locale}/portfolio/token-warrants`}
                        >
                          {t("HEADER.MENU.TOKEN_WARRANTS")}
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li
                    className={`sub-nav-item ${
                      pathname ===
                      `/${locale}/portfolio/liquid-venture-portfolio`
                        ? "active"
                        : ""
                    }`}
                  >
                    {" "}
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/portfolio/liquid-venture-portfolio`}
                    >
                      {t("HEADER.MENU.LIQUID_VENTURE_PORTFOLIO")}
                    </Link>
                    <ul className="sub-nav-item">
                      <li
                        className={`sub-nav-item ${
                          pathname === `/${locale}/portfolio/web2`
                            ? "active"
                            : ""
                        }`}
                      >
                        {" "}
                        <Link
                          className="sub-nav-link font-medium"
                          href={`/${locale}/portfolio/web2`}
                        >
                          {t("HEADER.MENU.WEB2")}
                        </Link>
                      </li>

                      <li
                        className={`sub-nav-item ${
                          pathname === `/${locale}/portfolio/web2-5`
                            ? "active"
                            : ""
                        }`}
                      >
                        {" "}
                        <Link
                          className="sub-nav-link font-medium"
                          href={`/${locale}/portfolio/web2-5`}
                        >
                          {t("HEADER.MENU.WEB2_5")}
                        </Link>
                      </li>

                      <li
                        className={`sub-nav-item ${
                          pathname === `/${locale}/portfolio/web3`
                            ? "active"
                            : ""
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
                    className={`sub-nav-item ${
                      pathname ===
                      `/${locale}/portfolio/venture-building-portfolio`
                        ? "active"
                        : ""
                    }`}
                  >
                    {" "}
                    <Link className="sub-nav-link font-medium" href="#!">
                      {t("HEADER.MENU.VENTURE_BUILDING_PORTFOLIO")}
                    </Link>
                    <ul className="sub-nav-item">
                      <li
                        className={`sub-nav-item ${
                          pathname === `/${locale}/portfolio/web2`
                            ? "active"
                            : ""
                        }`}
                      >
                        {" "}
                        <Link
                          className="sub-nav-link font-medium"
                          href={`/${locale}/portfolio/web2`}
                        >
                          {t("HEADER.MENU.WEB2")}
                        </Link>
                      </li>

                      <li
                        className={`sub-nav-item ${
                          pathname === `/${locale}/portfolio/web2-5`
                            ? "active"
                            : ""
                        }`}
                      >
                        {" "}
                        <Link
                          className="sub-nav-link font-medium"
                          href={`/${locale}/portfolio/web2-5`}
                        >
                          {t("HEADER.MENU.WEB2_5")}
                        </Link>
                      </li>

                      <li
                        className={`sub-nav-item ${
                          pathname === `/${locale}/portfolio/web3`
                            ? "active"
                            : ""
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
                </ul>
              </li>

              {/* Investor Relations Menu */}
              <li
                className={`nav-item h-full flex items-center justify-center ${
                  pathname.includes(`/${locale}/investor-relations`)
                    ? "active"
                    : ""
                }`}
              >
                <Link
                  className="nav-link text-title flex items-center gap-1"
                  href="#!"
                >
                  <span>{t("HEADER.MENU.INVESTOR_RELATIONS")}</span>
                  <span>
                    <Icon.CaretDown className="text-sm" />
                  </span>
                </Link>

                <ul className="sub-nav">
                  <li
                    className={`sub-nav-item ${
                      pathname ===
                      `/${locale}/investor-relations/corporate-info`
                        ? "active"
                        : ""
                    }`}
                  >
                    {" "}
                    <Link className="sub-nav-link font-medium" href="#!">
                      {t("HEADER.MENU.CORPORATE_INFO_IR")}
                    </Link>
                    <ul className="sub-nav-item">
                      <li
                        className={`sub-nav-item ${
                          pathname ===
                          `/${locale}/investor-relations/corporate-profile`
                            ? "active"
                            : ""
                        }`}
                      >
                        {" "}
                        <Link
                          className="sub-nav-link font-medium"
                          href={`/${locale}/investor-relations/corporate-profile`}
                        >
                          {t("HEADER.MENU.CORPORATE_PROFILE")}
                        </Link>
                      </li>

                      <li
                        className={`sub-nav-item ${
                          pathname ===
                          `/${locale}/investor-relations/competitive-strength`
                            ? "active"
                            : ""
                        }`}
                      >
                        {" "}
                        <Link
                          className="sub-nav-link font-medium"
                          href={`/${locale}/investor-relations/competitive-strength`}
                        >
                          {t("HEADER.MENU.COMPETITIVE_STRENGTH")}
                        </Link>
                      </li>

                      <li
                        className={`sub-nav-item ${
                          pathname ===
                          `/${locale}/investor-relations/business-expansion`
                            ? "active"
                            : ""
                        }`}
                      >
                        {" "}
                        <Link
                          className="sub-nav-link font-medium"
                          href={`/${locale}/investor-relations/business-expansion`}
                        >
                          {t("HEADER.MENU.BUSINESS_EXPANSION_STRATEGY")}
                        </Link>
                      </li>

                      <li
                        className={`sub-nav-item ${
                          pathname ===
                          `/${locale}/investor-relations/corporate-governance`
                            ? "active"
                            : ""
                        }`}
                      >
                        {" "}
                        <Link
                          className="sub-nav-link font-medium"
                          href={`/${locale}/investor-relations/corporate-governance`}
                        >
                          {t("HEADER.MENU.CORPORATE_GOVERNANCE")}
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li
                    className={`sub-nav-item ${
                      pathname ===
                      `/${locale}/investor-relations/stakeholder-info`
                        ? "active"
                        : ""
                    }`}
                  >
                    {" "}
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/investor-relations/stakeholder-info`}
                    >
                      {t("HEADER.MENU.STAKEHOLDER_INFO_IR")}
                    </Link>
                    <ul className="sub-nav-item">
                      <li
                        className={`sub-nav-item ${
                          pathname === `/${locale}/investor-relations/newsroom`
                            ? "active"
                            : ""
                        }`}
                      >
                        {" "}
                        <Link
                          className="sub-sub-nav-link font-medium"
                          href={`/${locale}/investor-relations/newsroom`}
                        >
                          {t("HEADER.MENU.NEWSROOM")}
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li
                    className={`sub-nav-item ${
                      pathname ===
                      `/${locale}/investor-relations/information-request`
                        ? "active"
                        : ""
                    }`}
                  >
                    {" "}
                    <Link
                      className="sub-nav-link font-medium"
                      href={`/${locale}/investor-relations/information-request`}
                    >
                      {t("HEADER.MENU.INFORMATION_REQUEST_IR")}
                    </Link>
                    <ul className="sub-nav-item">
                      <li
                        className={`sub-nav-item ${
                          pathname ===
                          `/${locale}/investor-relations/subscription`
                            ? "active"
                            : ""
                        }`}
                      >
                        {" "}
                        <Link
                          className="sub-nav-link font-medium"
                          href={`/${locale}/investor-relations/subscription`}
                        >
                          {t("HEADER.MENU.SUBSCRIPTION")}
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              {/* Careers Menu */}
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

              {/* Media Menu */}
              <li
                className={`nav-item h-full flex items-center justify-center ${
                  pathname.includes(`/${locale}/media`) ? "active" : ""
                }`}
              >
                <Link className="nav-link text-title" href={`/${locale}/media`}>
                  {t("HEADER.MENU.MEDIA")}
                </Link>
              </li>

              {/* Partner Program */}
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

              {/* Contact Menu */}
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

              {/* GGV Menu */}
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
                    <span className="hidden body2 font-semibold">
                      {t("HEADER.MENU.GGV_GROUP")}{" "}
                    </span>
                    {/* <Icon.CaretRight className="text-base" /> */}
                  </a>
                  <ul
                    className={`hidden sub-nav-mobile ${
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

                {/* About us Menu Mobile*/}
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
                        href={`/${locale}/about/about-one`}
                      >
                        Our Company
                      </Link>
                    </li>
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/about/team`}
                      >
                        Our Team
                      </Link>
                    </li>
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/about/structure`}
                      >
                        Corporate Structure
                      </Link>
                      <ul className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                        <li
                          className={`sub-nav-item ${
                            pathname === `/${locale}/about/venture-capital`
                              ? "active"
                              : ""
                          }`}
                        >
                          <Link
                            className="sub-nav-link font-medium"
                            href={`/${locale}/about/venture-capital`}
                          >
                            Venture Capital
                          </Link>
                        </li>
                        <li
                          className={`sub-nav-item ${
                            pathname === `/${locale}/about/venture-builder`
                              ? "active"
                              : ""
                          }`}
                        >
                          <Link
                            className="sub-nav-link font-medium"
                            href={`/${locale}/about/venture-builder`}
                          >
                            Venture Builder
                          </Link>
                        </li>
                        <li
                          className={`sub-nav-item ${
                            pathname === `/${locale}/about/market-making`
                              ? "active"
                              : ""
                          }`}
                        >
                          <Link
                            className="sub-nav-link font-medium"
                            href={`/${locale}/about/market-making`}
                          >
                            OTC / Market Making
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/about/overview`}
                      >
                        Overview
                      </Link>
                      <ul className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                        <li
                          className={`sub-nav-item ${
                            pathname ===
                            `/${locale}/about/overview/mission-values`
                              ? "active"
                              : ""
                          }`}
                        >
                          <Link
                            className="sub-nav-link font-medium"
                            href={`/${locale}/about/overview/mission-values`}
                          >
                            Our Vision, Mission and Core Values
                          </Link>
                        </li>
                        <li
                          className={`sub-nav-item ${
                            pathname ===
                            `/${locale}/about/overview/key-investment-area`
                              ? "active"
                              : ""
                          }`}
                        >
                          <Link
                            className="sub-nav-link font-medium"
                            href={`/${locale}/about/overview/key-investment-area`}
                          >
                            Key Investment Area
                          </Link>
                        </li>
                        <li
                          className={`sub-nav-item ${
                            pathname === `/${locale}/about/overview/our-history`
                              ? "active"
                              : ""
                          }`}
                        >
                          <Link
                            className="sub-nav-link font-medium"
                            href={`/${locale}/about/overview/our-history`}
                          >
                            Our History
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                {/* Service Menu Mobile */}
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
                    {/* <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/service/venture-capital`}
                      >
                        {t('HEADER.MENU.VENTURE_CAPITAL')}
                      </Link>
                    </li>
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      {' '}
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/service/otc-trading`}
                      >
                        {t('HEADER.MENU.OTC_TRADING')}
                      </Link>
                    </li>
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      {' '}
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/service/market-making`}
                      >
                        {t('HEADER.MENU.MARKET_MAKING')}
                      </Link>
                    </li>
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      {' '}
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/service/incubation`}
                      >
                        {t('HEADER.MENU.INCUBATION_ADVISORY')}
                      </Link>
                    </li> */}
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/service/consultancy`}
                      >
                        {t("HEADER.MENU.CONSULTANCY")}
                      </Link>
                    </li>
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/service/marketing`}
                      >
                        {t("HEADER.MENU.MARKETING")}
                      </Link>
                    </li>
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/service/SALES`}
                      >
                        {t("HEADER.MENU.SALES")}
                      </Link>
                    </li>
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/service/smart-contract`}
                      >
                        {t("HEADER.MENU.SMART_CONTRACT")}
                      </Link>
                    </li>
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/service/audit`}
                      >
                        {t("HEADER.MENU.AUDIT")}
                      </Link>
                    </li>
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/service/compliance`}
                      >
                        {t("HEADER.MENU.COMPLIANCE")}
                      </Link>
                    </li>
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/service/otc-mm`}
                      >
                        {t("HEADER.MENU.OTC_MM")}
                      </Link>
                    </li>
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/service/eventss`}
                      >
                        {t("HEADER.MENU.EVENTS")}
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Portfolio Menu Mobile */}
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
                    {/* <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      {' '}
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/portfolio/blockchain`}
                      >
                        {t('HEADER.MENU.BLOCKCHAIN')}
                      </Link>
                    </li>
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      {' '}
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/portfolio/cryptocurrency`}
                      >
                        {t('HEADER.MENU.CRYPTOCURRENCY')}
                      </Link>
                    </li>
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      {' '}
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/portfolio/defi`}
                      >
                        {t('HEADER.MENU.DEFI')}
                      </Link>
                    </li>
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      {' '}
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/portfolio/web3`}
                      >
                        {t('HEADER.MENU.WEB3')}
                      </Link>
                    </li> */}
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      {" "}
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/portfolio/venture-capital-portfolio`}
                      >
                        {t("HEADER.MENU.VENTURE_CAPITAL_PORTFOLIO")}
                      </Link>
                      {/* sub menu venture portfolio */}
                      <ul className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                        <li
                          className={`sub-nav-item ${
                            pathname === `/${locale}/portfolio/saft`
                              ? "active"
                              : ""
                          }`}
                        >
                          {" "}
                          <Link
                            className="sub-nav-link font-medium"
                            href={`/${locale}/portfolio/saft`}
                          >
                            {t("HEADER.MENU.SAFT")}
                          </Link>
                        </li>

                        <li
                          className={`sub-nav-item ${
                            pathname === `/${locale}/portfolio/token-warrants`
                              ? "active"
                              : ""
                          }`}
                        >
                          {" "}
                          <Link
                            className="sub-nav-link font-medium"
                            href={`/${locale}/portfolio/token-warrants`}
                          >
                            {t("HEADER.MENU.TOKEN_WARRANTS")}
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      {" "}
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/portfolio/liquid-venture-portfolio`}
                      >
                        {t("HEADER.MENU.LIQUID_VENTURE_PORTFOLIO")}
                      </Link>
                      {/* sub menu liquid venture portfolio */}
                      <ul className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                        <li
                          className={`sub-nav-item ${
                            pathname === `/${locale}/portfolio/web2`
                              ? "active"
                              : ""
                          }`}
                        >
                          {" "}
                          <Link
                            className="sub-nav-link font-medium"
                            href={`/${locale}/portfolio/web2`}
                          >
                            {t("HEADER.MENU.WEB2")}
                          </Link>
                        </li>
                        <li
                          className={`sub-nav-item ${
                            pathname === `/${locale}/portfolio/web2-5`
                              ? "active"
                              : ""
                          }`}
                        >
                          {" "}
                          <Link
                            className="sub-nav-link font-medium"
                            href={`/${locale}/portfolio/web2-5`}
                          >
                            {t("HEADER.MENU.WEB2_5")}
                          </Link>
                        </li>
                        <li
                          className={`sub-nav-item ${
                            pathname === `/${locale}/portfolio/web3`
                              ? "active"
                              : ""
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
                      <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                        {" "}
                        <Link className="sub-nav-link text-base" href="#!">
                          {t("HEADER.MENU.VENTURE_BUILDING_PORTFOLIO")}
                        </Link>
                        {/* sub menu venture building */}
                        <ul className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                          <li
                            className={`sub-nav-item ${
                              pathname === `/${locale}/portfolio/web2`
                                ? "active"
                                : ""
                            }`}
                          >
                            {" "}
                            <Link
                              className="sub-nav-link font-medium"
                              href={`/${locale}/portfolio/web2`}
                            >
                              {t("HEADER.MENU.WEB2")}
                            </Link>
                          </li>
                          <li
                            className={`sub-nav-item ${
                              pathname === `/${locale}/portfolio/web2-5`
                                ? "active"
                                : ""
                            }`}
                          >
                            {" "}
                            <Link
                              className="sub-nav-link font-medium"
                              href={`/${locale}/portfolio/web2-5`}
                            >
                              {t("HEADER.MENU.WEB2_5")}
                            </Link>
                          </li>
                          <li
                            className={`sub-nav-item ${
                              pathname === `/${locale}/portfolio/web3`
                                ? "active"
                                : ""
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
                    </li>
                  </ul>
                </li>

                {/* Investor Relation Mobile Menu */}
                <li
                  className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer ${
                    openSubNavMobile === 5 ? "active" : ""
                  }`}
                  onClick={() => handleOpenSubNavMobile(5)}
                >
                  <a
                    className="nav-link-mobile flex items-center justify-between py-3"
                    href="#!"
                  >
                    <span className="body2 font-semibold">
                      {t("HEADER.MENU.INVESTOR_RELATIONS")}{" "}
                    </span>
                    <Icon.CaretRight className="text-base" />
                  </a>
                  <ul
                    className={`sub-nav-mobile ${
                      openSubNavMobile === 5 ? "open" : ""
                    }`}
                  >
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      {" "}
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/investor-relations/corporate-info`}
                      >
                        {t("HEADER.MENU.CORPORATE_INFO_IR")}
                      </Link>
                      {/* sub menu corporate info */}
                      <ul className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                        <li
                          className={`sub-nav-item ${
                            pathname ===
                            `/${locale}/investor-relations/corporate-profile`
                              ? "active"
                              : ""
                          }`}
                        >
                          {" "}
                          <Link
                            className="sub-nav-link font-medium"
                            href={`/${locale}/investor-relations/corporate-profile`}
                          >
                            {t("HEADER.MENU.CORPORATE_PROFILE")}
                          </Link>
                        </li>

                        <li
                          className={`sub-nav-item ${
                            pathname ===
                            `/${locale}/investor-relations/competitive-strength`
                              ? "active"
                              : ""
                          }`}
                        >
                          {" "}
                          <Link
                            className="sub-nav-link font-medium"
                            href={`/${locale}/investor-relations/competitive-strength`}
                          >
                            {t("HEADER.MENU.COMPETITIVE_STRENGTH")}
                          </Link>
                        </li>

                        <li
                          className={`sub-nav-item ${
                            pathname ===
                            `/${locale}/investor-relations/business-expansion`
                              ? "active"
                              : ""
                          }`}
                        >
                          {" "}
                          <Link
                            className="sub-nav-link font-medium"
                            href={`/${locale}/investor-relations/business-expansion`}
                          >
                            {t("HEADER.MENU.BUSINESS_EXPANSION_STRATEGY")}
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      {" "}
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/investor-relations/stakeholder-info`}
                      >
                        {t("HEADER.MENU.STAKEHOLDER_INFO_IR")}
                      </Link>
                      <ul className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                        <li
                          className={`sub-nav-item ${
                            pathname ===
                            `/${locale}/investor-relations/newsroom`
                              ? "active"
                              : ""
                          }`}
                        >
                          {" "}
                          <Link
                            className="sub-sub-nav-link font-medium"
                            href={`/${locale}/investor-relations/newsroom`}
                          >
                            {t("HEADER.MENU.NEWSROOM")}
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      {" "}
                      <Link
                        className="sub-nav-link text-base"
                        href={`/${locale}/investor-relations/information-request`}
                      >
                        {t("HEADER.MENU.INFORMATION_REQUEST_IR")}
                      </Link>
                      <ul className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                        <li
                          className={`sub-nav-item ${
                            pathname ===
                            `/${locale}/investor-relations/subscription`
                              ? "active"
                              : ""
                          }`}
                        >
                          {" "}
                          <Link
                            className="sub-nav-link font-medium"
                            href={`/${locale}/investor-relations/subscription`}
                          >
                            {t("HEADER.MENU.SUBSCRIPTION")}
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                {/* Carrers Mobile Menu */}
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
export default MenuOne;
