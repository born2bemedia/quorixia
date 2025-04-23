"use client";
import React, { useEffect, useState } from "react";
import "@/styles/header.scss";
import { Link } from "@/navigation";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { usePathname } from "next/navigation";
import MenuIcon from "@/icons/MenuIcon";
import MenuIconClose from "@/icons/MenuIconClose";
import LanguageChanger from "@/app/[locale]/_global/LanguageChanger";
import { useTranslations } from "next-intl";
import LangSwitcher from "./LangSwitcher";

const Header = () => {
  const t = useTranslations("header");
  const { cart, cartQuantity } = useCart();
  const { currentUser } = useAuth();
  const [menuOpened, setMenuOpened] = useState(false);
  const pathname = usePathname();

  const menuOpen = () => {
    setMenuOpened(!menuOpened);
    document.body.classList.toggle("no-scroll", !menuOpened);
  };

  useEffect(() => {
    setMenuOpened(false);
    document.body.classList.remove("no-scroll");
  }, [pathname]);

  return (
    <>
      <header className={`${menuOpened && "menu-opened"}`}>
        <div className="_container">
          <div className="header-row">
            <Link href="/" className="logo">
              {!menuOpened ? (
                <img src="/images/logo.svg" alt="logo" />
              ) : (
                <img src="/images/logo_white.svg" alt="logo" />
              )}
            </Link>

            <div className="header-right">
              <div className="head-account">
                {currentUser ? (
                  <Link className="white-button" href="/dashboard">
                    {t("account")}
                  </Link>
                ) : (
                  <>
                    <Link className="white-button" href="/log-in">
                      {t("login")}
                    </Link>
                    <span></span>
                    <Link className="white-button" href="/sign-up">
                      {t("signup")}
                    </Link>
                  </>
                )}
              </div>
              <LanguageChanger />
              <div>
                <Link
                  href="/cart"
                  className={`cart-icon ${cartQuantity > 0 && "not-empty"}`}
                >
                  {!menuOpened ? (
                    <img src="/images/cart-icon.svg" alt="cart-icon" />
                  ) : (
                    <img src="/images/cart-icon-white.svg" alt="cart-icon" />
                  )}
                </Link>
                <span onClick={() => menuOpen()} className="menu-btn">
                  {!menuOpened ? <MenuIcon /> : <MenuIconClose />}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={`menu-wrap ${menuOpened ? "opened" : ""}`}>
        <div className="_container">
          <nav>
            <div className="left-col">
              <Link href="/hr">{t("hr")}</Link>
              <Link href="/employment">{t("employment")}</Link>
              <Link href="/pricing">{t("pricing")}</Link>
              <Link href="/about-us">{t("aboutUs")}</Link>
              <Link href="/why-quorixia">{t("whyQuorixia")}</Link>
            </div>
            <div className="right-col">
              <Link href="/careers">{t("careers")}</Link>
              <Link href="/blog">{t("blog")}</Link>
              <Link href="/case-studies">{t("caseStudies")}</Link>
              <Link href="/glossary">{t("glossary")}</Link>
              <Link href="/contact-us">{t("contactUs")}</Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
