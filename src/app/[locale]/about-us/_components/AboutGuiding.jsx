import ButtonArrow from "@/icons/ButtonArrow";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import React from "react";

const AboutGuiding = () => {
  const t = useTranslations("about");
  return (
    <section className="about-guiding">
      <div className="_container">
        <h2
          className="fadeInUp"
          dangerouslySetInnerHTML={{ __html: t("AboutGuiding.title") }}
        />
        <p
          className="fadeInUp"
          dangerouslySetInnerHTML={{ __html: t("AboutGuiding.subtitle") }}
        />
        <div className="about-guiding__body">
          <div>
            <div className="fadeInUp">
              <img src="/images/home/dots.svg" />
              <h3
                dangerouslySetInnerHTML={{
                  __html: t("AboutGuiding.block1.title"),
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t("AboutGuiding.block1.text"),
                }}
              />
            </div>
            <div className="fadeInUp">
              <img src="/images/home/dots.svg" />
              <h3
                dangerouslySetInnerHTML={{
                  __html: t("AboutGuiding.block2.title"),
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t("AboutGuiding.block2.text"),
                }}
              />
            </div>
            <div className="fadeInUp">
              <img src="/images/home/dots.svg" />
              <h3
                dangerouslySetInnerHTML={{
                  __html: t("AboutGuiding.block3.title"),
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t("AboutGuiding.block3.text"),
                }}
              />
            </div>
          </div>
        </div>
        <Link href="/case-studies" className="main-button">
          <span>{t("AboutGuiding.button")}</span>
          <ButtonArrow />
        </Link>
      </div>
    </section>
  );
};

export default AboutGuiding;
