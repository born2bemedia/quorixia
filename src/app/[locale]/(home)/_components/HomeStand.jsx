import ButtonArrow from "@/icons/ButtonArrow";
import { Link } from "@/navigation";
import React from "react";
import { useTranslations } from "next-intl";

const HomeStand = () => {
  const t = useTranslations("home");
  return (
    <section className="home-stand">
      <div className="_container">
        <h2 className="fadeInUp">{t("HomeStand.title")}</h2>
        <div className="home-stand__body">
          <div>
            <div className="fadeInUp">
              <img src="/images/home/dots.svg" alt="dot" />
              <h3>{t("HomeStand.block1.title")}</h3>
              <p>{t("HomeStand.block1.text")}</p>
            </div>
            <div className="fadeInUp">
              <img src="/images/home/dots.svg" alt="dot" />
              <h3>{t("HomeStand.block2.title")}</h3>
              <p>{t("HomeStand.block2.text")}</p>
            </div>
            <div className="fadeInUp">
              <img src="/images/home/dots.svg" alt="dot" />
              <h3>{t("HomeStand.block3.title")}</h3>
              <p>{t("HomeStand.block3.text")}</p>
            </div>
          </div>
        </div>
        <Link href="/why-quorixia" className="main-button">
          <span>{t("HomeStand.button")}</span>
          <ButtonArrow />
        </Link>
      </div>
    </section>
  );
};

export default HomeStand;
