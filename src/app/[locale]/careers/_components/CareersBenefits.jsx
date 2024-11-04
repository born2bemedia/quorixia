import React from "react";
import { useTranslations } from "next-intl";

const CareersBenefits = () => {
  const t = useTranslations("careers");
  return (
    <section className="careers-benefits">
      <div className="_container">
        <h2 className="fadeInUp">{t("CareersBenefits.title")}</h2>
        <div className="careers-benefits__body">
          <div className="fadeInUp">
            <h3>01</h3>
            <h3
              dangerouslySetInnerHTML={{
                __html: t("CareersBenefits.subtitle1"),
              }}
            />
            <p>{t("CareersBenefits.text1")}</p>
          </div>
          <div className="fadeInUp">
            <h3>02</h3>
            <h3
              dangerouslySetInnerHTML={{
                __html: t("CareersBenefits.subtitle2"),
              }}
            />
            <p>{t("CareersBenefits.text2")}</p>
          </div>
          <div className="fadeInUp">
            <h3>03</h3>
            <h3
              dangerouslySetInnerHTML={{
                __html: t("CareersBenefits.subtitle3"),
              }}
            />
            <p>{t("CareersBenefits.text3")}</p>
          </div>
          <div className="fadeInUp">
            <h3>04</h3>
            <h3
              dangerouslySetInnerHTML={{
                __html: t("CareersBenefits.subtitle4"),
              }}
            />
            <p>{t("CareersBenefits.text4")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersBenefits;
