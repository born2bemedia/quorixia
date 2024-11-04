import React from "react";
import { useTranslations } from "next-intl";

const CareersWhy = () => {
  const t = useTranslations("careers");
  return (
    <section className="careers-why">
      <div className="_container">
        <h2 className="fadeInUp">{t("CareersWhy.title")}</h2>
        <div className="careers-why__body">
          <div className="fadeInUp">
            <h3>{t("CareersWhy.subtitle1")}</h3>
            <p>{t("CareersWhy.text1")}</p>
          </div>
          <div className="fadeInUp">
            <h3>{t("CareersWhy.subtitle2")}</h3>
            <p>{t("CareersWhy.text2")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersWhy;
