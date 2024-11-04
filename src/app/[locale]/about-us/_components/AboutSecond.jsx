import ButtonArrow from "@/icons/ButtonArrow";
import Image from "next/image";
import { Link } from "@/navigation";
import React from "react";
import { useTranslations } from "next-intl";

const AboutSecond = () => {
  const t = useTranslations("about");
  return (
    <section className="about-second">
      <div className="_container">
        <div className="about-second__body">
          <div className="fadeInUp">
            <h2 dangerouslySetInnerHTML={{ __html: t("AboutSecond.title") }} />
            <p dangerouslySetInnerHTML={{ __html: t("AboutSecond.text") }} />
          </div>
          <Image
            className="fadeInUp"
            src={"/images/about/aboutSecond.png"}
            width={540}
            height={320}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSecond;
