import React from "react";
import { useTranslations } from "next-intl";

const HomeWhy = () => {
  const t = useTranslations("home");
  return (
    <section className="home-why">
      <div className="_container">
        <div className="home-why__body">
          <div className="left fadeInUp">
            <span></span>
            <h2 dangerouslySetInnerHTML={{ __html: t("HomeWhy.title") }}
        />
          </div>
          <div className="right fadeInUp">
            <h3>{t("HomeWhy.subtitle")}</h3>
            <p>
              {t("HomeWhy.text")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWhy;
