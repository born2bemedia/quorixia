import React from "react";
import "@/styles/cases.scss";
import CasesHero from "./_components/CasesHero";
import CasesWrap from "./_components/CasesWrap";

export const metadata = {
  title: "Real Career Success Stories: Quorixia Case Studies",
  description:
    "Explore detailed case studies from Quorixia to see how our tailored HR and employment services have transformed careers across industries.",
  openGraph: {
    title: "Real Career Success Stories: Quorixia Case Studies",
    description:
      "Explore detailed case studies from Quorixia to see how our tailored HR and employment services have transformed careers across industries.",
    images: "https://quorixia.com/images/meta.png",
  },
};

const CasesPage = () => {
  return (
    <>
      <CasesHero />
      <CasesWrap />
    </>
  );
};

export default CasesPage;
