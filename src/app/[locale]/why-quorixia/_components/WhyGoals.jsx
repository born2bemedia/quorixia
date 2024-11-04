import ButtonArrow from "@/icons/ButtonArrow";
import Image from "next/image";
import { Link } from "@/navigation";
import React from "react";
import { useTranslations } from "next-intl";

const WhyGoals = () => {
  const t = useTranslations("why");
  return (
    <section className="why-goals">
      <div className="_container">
        <div className="why-goals__body">
          <div className="fadeInUp">
            <h2 dangerouslySetInnerHTML={{ __html: t("WhyGoals.title") }} />
            <p
              dangerouslySetInnerHTML={{
                __html: t.rich("WhyGoals.text", {
                  br: () => "<br />",
                }),
              }}
            />
          </div>
          <Image
            className="fadeInUp"
            src={"/images/why/goals.png"}
            width={475}
            height={270}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyGoals;
