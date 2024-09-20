import React from "react";
import "@/styles/about.scss";
import AboutHero from "./_components/AboutHero";
import AboutSecond from "./_components/AboutSecond";
import AboutPrinciples from "./_components/AboutPrinciples";
import AboutGuiding from "./_components/AboutGuiding";
import AboutPeople from "./_components/AboutPeople";
import AboutLast from "./_components/AboutLast";

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
