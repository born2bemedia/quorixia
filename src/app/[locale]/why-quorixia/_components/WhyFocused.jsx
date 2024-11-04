import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const WhyFocused = () => {
  const t = useTranslations("why");
  return (
    <section className="why-focused">
      <div className="_container">
        <div className="why-focused__body">
          <h2
            className="fadeInUp"
            dangerouslySetInnerHTML={{ __html: t("WhyFocused.title") }}
          />
          <div className="row">
            <p
              className="fadeInUp"
              dangerouslySetInnerHTML={{ __html: t("WhyFocused.text1") }}
            />
            <p
              className="fadeInUp"
              dangerouslySetInnerHTML={{ __html: t("WhyFocused.text2") }}
            />
          </div>
          <Image src={"/images/why/focused.png"} width={1110} height={350} />
        </div>
      </div>
    </section>
  );
};

export default WhyFocused;
