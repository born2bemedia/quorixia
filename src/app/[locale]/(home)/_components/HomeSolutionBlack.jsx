import ButtonArrow from "@/icons/ButtonArrow";
import { Link } from "@/navigation";
import React from "react";
import { useTranslations } from "next-intl";

const HomeSolutionBlack = () => {
  const t = useTranslations("home");
  return (
    <section className="home-solution">
      <div className="_container">
        <div className="home-stand__body">
          {t.rich("HomeSolutionBlack.content", {
            h3: (children) => <h3 >{children}</h3>,
            h2: (children) => <h2 >{children}</h2>,
            p: (children) => <p >{children}</p>,
            h4: (children) => <h4 >{children}</h4>,
            ul: (children) => <ul >{children}</ul>,
            li: (children) => <li>{children}</li>,
            b: (children) => <b>{children}</b>,
          })}



          <Link href="/hr" className="main-button">
            <span>{t("HomeSolutionBlack.button")}</span>
            <ButtonArrow />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeSolutionBlack;
