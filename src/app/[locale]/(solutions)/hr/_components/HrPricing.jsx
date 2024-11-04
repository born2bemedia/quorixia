import ButtonArrow from "@/icons/ButtonArrow";
import Image from "next/image";
import { Link } from "@/navigation";
import React from "react";
import { useTranslations } from "next-intl";

const HrPricing = () => {
  const t = useTranslations("hr");
  return (
    <section className="hr-pricing">
      <div className="_container">
        <div className="hr-pricing__body">
          <div className="fadeInUp">
            <h2 dangerouslySetInnerHTML={{ __html: t("HrPricing.title") }} />
            <p dangerouslySetInnerHTML={{ __html: t("HrPricing.text") }} />
            <div className="buttons-wrap">
              <Link href="/pricing" className="main-button">
                <span>{t("HrPricing.button")}</span>
                <ButtonArrow />
              </Link>
            </div>
          </div>
          <Image
            className="fadeInUp"
            src={"/images/hr/pricing.png"}
            width={475}
            height={270}
          />
        </div>
      </div>
    </section>
  );
};

export default HrPricing;
