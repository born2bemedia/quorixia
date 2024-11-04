import ButtonArrow from "@/icons/ButtonArrow";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import React from "react";

const WhyResult = () => {
  const t = useTranslations("why");
  return (
    <section className="why-result">
      <div className="_container">
        <h2
          className="fadeInUp"
          dangerouslySetInnerHTML={{ __html: t("WhyResult.title") }}
        />
        <div className="why-result__body">
          <div>
            <div className="fadeInUp">
              <img src="/images/home/dots.svg" />
              <h3
                dangerouslySetInnerHTML={{
                  __html: t("WhyResult.block1.title"),
                }}
              />
              <p
                dangerouslySetInnerHTML={{ __html: t("WhyResult.block1.text") }}
              />
            </div>
            <div className="fadeInUp">
              <img src="/images/home/dots.svg" />
              <h3
                dangerouslySetInnerHTML={{
                  __html: t("WhyResult.block2.title"),
                }}
              />
              <p
                dangerouslySetInnerHTML={{ __html: t("WhyResult.block2.text") }}
              />
            </div>
            <div className="fadeInUp">
              <img src="/images/home/dots.svg" />
              <h3
                dangerouslySetInnerHTML={{
                  __html: t("WhyResult.block3.title"),
                }}
              />
              <p
                dangerouslySetInnerHTML={{ __html: t("WhyResult.block3.text") }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyResult;
