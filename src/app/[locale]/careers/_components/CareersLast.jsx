import ButtonArrow from "@/icons/ButtonArrow";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import React from "react";

const CareersLast = () => {
  const t = useTranslations("careers");
  return (
    <section className="careers-last">
      <div className="_container">
        <div className="careers-last__body fadeInUp">
          <div className="left">
            <h2 dangerouslySetInnerHTML={{ __html: t("CareersLast.title") }} />
            <p dangerouslySetInnerHTML={{ __html: t("CareersLast.text") }} />
          </div>
          <div className="right"></div>
        </div>
      </div>
    </section>
  );
};

export default CareersLast;
