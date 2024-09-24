import React from "react";
import "@/styles/careers.scss";
import CareersHero from "./_components/CareersHero";
import CareersLast from "./_components/CareersLast";
import CareersHow from "./_components/CareersHow";
import CareersProcess from "./_components/CareersProcess";
import CareersWrap from "./_components/CareersWrap";
import CareersWhy from "./_components/CareersWhy";
import CareersBenefits from "./_components/CareersBenefits";

export const metadata = {
  title: "Careers at Quorixia: Join Our Growing Team",
  description:
    "Explore career opportunities at Quorixia and be part of a team dedicated to transforming career support and HR services.",
  openGraph: {
    title: "Careers at Quorixia: Join Our Growing Team",
    description:
      "Explore career opportunities at Quorixia and be part of a team dedicated to transforming career support and HR services.",
    images: "https://quorixia.com/images/meta.png",
  },
};

const Careers = () => {
  return (
    <>
      <CareersHero />
      <CareersWhy />
      <CareersBenefits />
      <CareersWrap />
      <CareersHow />
      <CareersProcess />
      <CareersLast />
    </>
  );
};

export default Careers;
