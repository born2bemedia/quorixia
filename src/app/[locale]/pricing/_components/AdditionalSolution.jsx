import ButtonArrow from "@/icons/ButtonArrow";
import Image from "next/image";
import { Link } from "@/navigation";
import React from "react";
import { useTranslations } from "next-intl";

const AdditionalSolution = () => {
  const t = useTranslations("pricing");
  return (
    <section className="additional-solution">
      <div className="_container">
        <div className="additional-solution__body">
          <div className="fadeInUp">
            <h2
              dangerouslySetInnerHTML={{
                __html: t("AdditionalSolution.title"),
              }}
            />
            <p
              dangerouslySetInnerHTML={{ __html: t("AdditionalSolution.text") }}
            />
            <div className="buttons-wrap">
              <Link
                href="/Quorixia_Pricing.pdf"
                className="main-button"
                target="_blank"
              >
                <span>{t("AdditionalSolution.button")}</span>
                <ButtonArrow />
              </Link>
            </div>
          </div>
          <Image
            className="fadeInUp"
            src={"/images/pricing/additional.png"}
            width={475}
            height={270}
          />
        </div>
      </div>
    </section>
  );
};

export default AdditionalSolution;
