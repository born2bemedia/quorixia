import React from "react";
import "@/styles/why.scss";
import WhyHero from "./_components/WhyHero";
import WhyDifferent from "./_components/WhyDifferent";
import WhyGoals from "./_components/WhyGoals";
import WhyCollaborate from "./_components/WhyCollaborate";
import WhyFocused from "./_components/WhyFocused";
import WhyResult from "./_components/WhyResult";
import WhyLast from "./_components/WhyLast";

export const metadata = {
  title: "Why Choose Quorixia? Personalised HR & Employment Solutions",
  description:
    "Discover what makes Quorixia different and how our customised HR and employment services help you achieve your career goals.",
  openGraph: {
    title: "Why Choose Quorixia? Personalised HR & Employment Solutions",
    description:
      "Discover what makes Quorixia different and how our customised HR and employment services help you achieve your career goals.",
    images: "https://quorixia.com/images/meta.png",
  },
};

const WhyQuorixia = () => {
  return (
    <>
      <WhyHero />
      <WhyDifferent />
      <WhyGoals />
      <WhyCollaborate />
      <WhyFocused />
      <WhyResult />
      <WhyLast />
    </>
  );
};

export default WhyQuorixia;
