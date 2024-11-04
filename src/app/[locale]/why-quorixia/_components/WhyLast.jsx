import ButtonArrow from "@/icons/ButtonArrow";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import React from "react";

const WhyLast = () => {
  const t = useTranslations("why");
  return (
    <section className="why-last">
      <div className="_container">
        <div className="why-last__body fadeInUp">
          <div className="left">
            <h2 dangerouslySetInnerHTML={{ __html: t("WhyLast.title") }} />
            <p dangerouslySetInnerHTML={{ __html: t("WhyLast.text") }} />
            <Link href="/about-us" className="main-button">
              <span>{t("WhyLast.button")}</span>
              <ButtonArrow />
            </Link>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyLast;
