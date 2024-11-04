import JobButton from "@/global_components/JobButton";
import ButtonArrow from "@/icons/ButtonArrow";
import Image from "next/image";
import { Link } from "@/navigation";
import React from "react";
import { useTranslations } from "next-intl";

const CareersHow = () => {
  const t = useTranslations("careers");

  return (
    <section className="careers-how">
      <div className="_container">
        <div className="careers-how__body">
          <div className="fadeInUp">
            <h2>{t("CareersHow.title")}</h2>
            <p>{t("CareersHow.text")}</p>
            <JobButton text={t("CareersHow.button")} />
          </div>
          <Image
            className="fadeInUp"
            src={"/images/careers/apply.png"}
            width={475}
            height={270}
          />
        </div>
      </div>
    </section>
  );
};

export default CareersHow;
