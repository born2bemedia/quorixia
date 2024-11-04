import ButtonArrow from "@/icons/ButtonArrow";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import React from "react";

const WhyCollaborate = () => {
  const t = useTranslations("why");
  return (
    <section className="why-collaborate">
      <div className="_container">
        <h2
          className="fadeInUp"
          dangerouslySetInnerHTML={{ __html: t("WhyCollaborate.title") }}
        />
        <div className="why-collaborate__body">
          <div>
            <div className="fadeInUp">
              <img src="/images/home/dots.svg" />
              <h3
                dangerouslySetInnerHTML={{
                  __html: t("WhyCollaborate.block1.title"),
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t("WhyCollaborate.block1.text"),
                }}
              />
            </div>
            <div className="fadeInUp">
              <img src="/images/home/dots.svg" />
              <h3
                dangerouslySetInnerHTML={{
                  __html: t("WhyCollaborate.block2.title"),
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t("WhyCollaborate.block2.text"),
                }}
              />
            </div>
            <div className="fadeInUp">
              <img src="/images/home/dots.svg" />
              <h3
                dangerouslySetInnerHTML={{
                  __html: t("WhyCollaborate.block3.title"),
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t("WhyCollaborate.block3.text"),
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCollaborate;
