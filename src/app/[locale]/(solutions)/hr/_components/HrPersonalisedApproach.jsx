import { useTranslations } from "next-intl";
import React from "react";

const HrPersonalisedApproach = () => {
  const t = useTranslations("hr");
  return (
    <section className="hr-approach">
      <div className="_container">
        <div className="hr-approach__body fadeInUp">
          <div className="left">
            <h2
              dangerouslySetInnerHTML={{
                __html: t("HrPersonalisedApproach.title"),
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: t("HrPersonalisedApproach.text"),
              }}
            />
          </div>
          <div className="right"></div>
        </div>
      </div>
    </section>
  );
};

export default HrPersonalisedApproach;
