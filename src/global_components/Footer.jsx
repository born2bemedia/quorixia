import React from "react";
import "@/styles/footer.scss";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");
  return (
    <footer>
      <div className="foot-top">
        <div className="_container">
          <div className="info">
            <Link href="/">
              <img src="/images/logo_white.svg" alt="logo" />
            </Link>
            <p dangerouslySetInnerHTML={{ __html: t("description") }} />
          </div>
          <div className="soc">
            <Link href="https://www.facebook.com/quorixia" target="_blank">
              <img alt="facebook" src="/images/facebook.svg" />
            </Link>
            {/*<Link href="#">
              <img alt="instagram" src="/images/instagram.svg" />
            </Link>*/}
            <Link href="https://x.com/quorixia" target="_blank">
              <img alt="x" src="/images/x.svg" />
            </Link>
          </div>
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: t("description") }}
          />
        </div>
      </div>
      <div className="foot-bottom">
        <div className="_container">
          <div>
            <h3>{t("solutions")}</h3>
            <div>
              <Link href="/hr">{t("hr")}</Link>
              <Link href="/employment">{t("employment")}</Link>
              <Link href="/pricing">{t("pricing")}</Link>
            </div>
          </div>
          <div>
            <h3>{t("platform")}</h3>
            <div>
              <Link href="/about-us">{t("aboutUs")}</Link>
              <Link href="/why-quorixia">{t("whyQuorixia")}</Link>
              <Link href="/careers">{t("careers")}</Link>
            </div>
          </div>
          <div>
            <h3>{t("resources")}</h3>
            <div>
              <Link href="/blog">{t("blog")}</Link>
              <Link href="/case-studies">{t("caseStudies")}</Link>
              <Link href="/glossary">{t("glossary")}</Link>
            </div>
          </div>
          <div>
            <h3>{t("support")}</h3>
            <div>
              <Link href="/contact-us">{t("contactUs")}</Link>
              <Link href="/privacy-policy">{t("privacy")}</Link>
              <Link href="/terms-of-use">{t("terms")}</Link>
              <Link href="/refund-policy">{t("refund")}</Link>
              <Link href="/cookies-and-tracking">{t("cookies")}</Link>
            </div>
          </div>
          <div>
            <h3>{t("stayConnected")}</h3>
            <div>
              <Link href="mailto:info@quorixia.com">info@quorixia.com</Link>
              <Link href="tel:+35723030297">+35723030297</Link>
              <Link href="#">
                {t("registered")}: Nissi, 68 Agia Napa, 5330, Famagusta, Cyprus
              </Link>
              <Link href="#">
                {t("office")}: 3rd floor, office number 48, Victory House,
                Archbishop <br />
                Makarios Avenue 205, Limassol 3030, Cyprus
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
