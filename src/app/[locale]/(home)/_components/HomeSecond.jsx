import ButtonArrow from "@/icons/ButtonArrow";
import Image from "next/image";
import { Link } from "@/navigation";
import React from "react";
import { useTranslations } from "next-intl";

const HomeSecond = () => {
  const t = useTranslations("home");
  return (
    <section className="home-second">
      <div className="_container">
        <div className="home-second__body">
          <div className="fadeInUp">
            <h2>{t("HomeSecond.titl")}</h2>
            <p>{t("HomeSecond.text")}</p>
            <div className="buttons-wrap">
              <Link href="/hr" className="main-button">
                <span>{t("HomeSecond.button1")}</span>
                <ButtonArrow />
              </Link>
              <Link href="/employment" className="main-button">
                <span>{t("HomeSecond.button1")}</span>
                <ButtonArrow />
              </Link>
            </div>
          </div>
          <Image
            className="fadeInUp"
            src={"/images/home/homeSecond.png"}
            width={445}
            height={320}
            alt="homeSecond"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSecond;
