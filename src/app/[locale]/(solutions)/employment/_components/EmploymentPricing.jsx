import ButtonArrow from "@/icons/ButtonArrow";
import Image from "next/image";
import { Link } from "@/navigation";
import React from "react";
import { useTranslations } from "next-intl";

const EmploymentPricing = () => {
  const t = useTranslations("employment");
  return (
    <section className="employment-pricing">
      <div className="_container">
        <div className="employment-pricing__body">
          <div className="fadeInUp">
            <h2
              dangerouslySetInnerHTML={{ __html: t("EmploymentPricing.title") }}
            />
            <p
              dangerouslySetInnerHTML={{ __html: t("EmploymentPricing.text") }}
            />
            <div className="buttons-wrap">
              <Link href="/pricing" className="main-button">
                <span>{t("EmploymentPricing.button")}</span>
                <ButtonArrow />
              </Link>
            </div>
          </div>
          <Image
            className="fadeInUp"
            src={"/images/employment/pricing.png"}
            width={475}
            height={270}
          />
        </div>
      </div>
    </section>
  );
};

export default EmploymentPricing;
