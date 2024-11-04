import { useTranslations } from "next-intl";
import React from "react";

const CareersProcess = () => {
  const t = useTranslations("careers");
  return (
    <section className="careers-process">
      <div className="_container">
        <h2 className="fadeInUp">{t("CareersProcess.title")}</h2>
        <p className="fadeInUp">{t("CareersProcess.subtitle")}</p>
        <div className="careers-process__body">
          <div className="item fadeInUp">
            <div className="number">01</div>
            <div className="details">
              <h3>{t("CareersProcess.block1.title")}</h3>
              <p>{t("CareersProcess.block1.text")}</p>
            </div>
          </div>
          <div className="item fadeInUp">
            <div className="number">02</div>
            <div className="details">
              <h3>{t("CareersProcess.block2.title")}</h3>
              <p>{t("CareersProcess.block2.text")}</p>
            </div>
          </div>
          <div className="item fadeInUp">
            <div className="number">03</div>
            <div className="details">
              <h3>{t("CareersProcess.block3.title")}</h3>
              <p>{t("CareersProcess.block3.text")}</p>
            </div>
          </div>
          <div className="item fadeInUp">
            <div className="number">04</div>
            <div className="details">
              <h3>{t("CareersProcess.block4.title")}</h3>
              <p>{t("CareersProcess.block4.text")}</p>
            </div>
          </div>
          <div className="item fadeInUp">
            <div className="number">05</div>
            <div className="details">
              <h3>{t("CareersProcess.block4.title")}</h3>
              <p>{t("CareersProcess.block4.text")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersProcess;
