import { useTranslations } from "next-intl";
import React from "react";

const AboutPrinciples = () => {
  const t = useTranslations("about");
  return (
    <section className="about-principles">
      <div className="_container">
        <div className="about-principles__top">
          <h2
            className="fadeInUp"
            dangerouslySetInnerHTML={{ __html: t("AboutPrinciples.title") }}
          />
          <p
            className="fadeInUp"
            dangerouslySetInnerHTML={{ __html: t("AboutPrinciples.subtitle") }}
          />
        </div>
        <div className="about-principles__body">
          <div className="fadeInUp">
            <span>01</span>
            <h3
              dangerouslySetInnerHTML={{
                __html: t("AboutPrinciples.block1.title"),
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: t("AboutPrinciples.block1.text"),
              }}
            />
          </div>
          <div className="clear"></div>
          <div className="fadeInUp black">
            <span>02</span>
            <h3
              dangerouslySetInnerHTML={{
                __html: t("AboutPrinciples.block2.title"),
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: t("AboutPrinciples.block2.text"),
              }}
            />
          </div>
          <div className="clear"></div>
          <div className="clear"></div>
          <div className="fadeInUp">
            <span>03</span>
            <h3
              dangerouslySetInnerHTML={{
                __html: t("AboutPrinciples.block3.title"),
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: t("AboutPrinciples.block3.text"),
              }}
            />
          </div>
          <div className="clear"></div>
          <div className="fadeInUp">
            <span>04</span>
            <h3
              dangerouslySetInnerHTML={{
                __html: t("AboutPrinciples.block4.title"),
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: t("AboutPrinciples.block4.text"),
              }}
            />
          </div>
          <div className="clear"></div>
          <div className="clear"></div>
          <div className="fadeInUp black">
            <span>05</span>
            <h3
              dangerouslySetInnerHTML={{
                __html: t("AboutPrinciples.block5.title"),
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: t("AboutPrinciples.block5.text"),
              }}
            />
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutPrinciples;
