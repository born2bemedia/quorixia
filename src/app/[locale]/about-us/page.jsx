import React from "react";
import "@/styles/about.scss";
import AboutHero from "./_components/AboutHero";
import AboutSecond from "./_components/AboutSecond";
import AboutPrinciples from "./_components/AboutPrinciples";
import AboutGuiding from "./_components/AboutGuiding";
import AboutPeople from "./_components/AboutPeople";
import AboutLast from "./_components/AboutLast";

export const metadata = {
  title: "About Quorixia: Your Partner in Career Success",
  description:
    "Learn more about Quorixia’s mission and how we provide personalised HR and employment solutions to support your career goals.",
  openGraph: {
    title: "About Quorixia: Your Partner in Career Success",
    description:
      "Learn more about Quorixia’s mission and how we provide personalised HR and employment solutions to support your career goals.",
    images: "https://quorixia.com/images/meta.png",
  },
};

const AboutUs = () => {
  return (
    <>
      <AboutHero />
      <AboutSecond />
      <AboutPrinciples />
      <AboutGuiding />
      <AboutPeople />
      <AboutLast />
    </>
  );
};

export default AboutUs;
