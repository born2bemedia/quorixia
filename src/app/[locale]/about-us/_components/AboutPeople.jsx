import ButtonArrow from "@/icons/ButtonArrow";
import Image from "next/image";
import { Link } from "@/navigation";
import React from "react";
import { useTranslations } from "next-intl";

const AboutPeople = () => {
  const t = useTranslations("about");
  return (
    <section className="about-people">
      <div className="_container">
        <div className="about-people__body">
          <Image
            className="fadeInUp"
            src={"/images/about/people.png"}
            width={445}
            height={360}
          />
          <div className="fadeInUp">
            <h2 dangerouslySetInnerHTML={{ __html: t("AboutPeople.title") }} />
            <p
              dangerouslySetInnerHTML={{
                __html: t.rich("AboutPeople.text", {
                  br: () => "<br />",
                }),
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPeople;
