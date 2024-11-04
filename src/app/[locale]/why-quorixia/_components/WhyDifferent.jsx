import ButtonArrow from "@/icons/ButtonArrow";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import React from "react";

const WhyDifferent = () => {
  const t = useTranslations("why");
  return (
    <section className="why-different">
      <div className="_container">
        <h2
          className="fadeInUp"
          dangerouslySetInnerHTML={{ __html: t("WhyDifferent.title") }}
        />
        <div className="why-different__body">
          <div>
            <div className="fadeInUp">
              <img src="/images/home/dots.svg" />
              <h3
                dangerouslySetInnerHTML={{
                  __html: t("WhyDifferent.block1.title"),
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t("WhyDifferent.block1.text"),
                }}
              />
            </div>
            <div className="fadeInUp">
              <img src="/images/home/dots.svg" />
              <h3
                dangerouslySetInnerHTML={{
                  __html: t("WhyDifferent.block2.title"),
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t("WhyDifferent.block2.text"),
                }}
              />
            </div>
            <div className="fadeInUp">
              <img src="/images/home/dots.svg" />
              <h3
                dangerouslySetInnerHTML={{
                  __html: t("WhyDifferent.block3.title"),
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t("WhyDifferent.block3.text"),
                }}
              />
            </div>
          </div>
        </div>
        <div className="buttons-wrap fadeInUp">
          <Link href="/hr" className="main-button">
            <span>{t("WhyDifferent.button1")}</span>
            <ButtonArrow />
          </Link>
          <Link href="/employment" className="main-button">
            <span>{t("WhyDifferent.button2")}</span>
            <ButtonArrow />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
