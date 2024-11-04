import ButtonArrow from "@/icons/ButtonArrow";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import React from "react";

const AboutLast = () => {
  const t = useTranslations("about");
  return (
    <section className="about-last">
      <div className="_container">
        <div className="about-last__body fadeInUp">
          <div className="left">
            <h2 dangerouslySetInnerHTML={{ __html: t("AboutLast.title") }} />
            <p dangerouslySetInnerHTML={{ __html: t("AboutLast.text") }} />
            <Link href="/why-quorixia" className="main-button">
              <span>{t("AboutLast.button")}</span>
              <ButtonArrow />
            </Link>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutLast;
