import React from "react";
import "@/styles/glossary.scss";
import GlossaryHero from "./_components/GlossaryHero";
import GlossaryWrap from "./_components/GlossaryWrap";

export const metadata = {
  title: "Quorixia HR & Employment Glossary: Essential Career Terms",
  description:
    "Find clear, concise definitions of key HR and employment terms in Quorixia’s comprehensive glossary, designed to help you navigate your career.",
  openGraph: {
    title: "Quorixia HR & Employment Glossary: Essential Career Terms",
    description:
      "Find clear, concise definitions of key HR and employment terms in Quorixia’s comprehensive glossary, designed to help you navigate your career.",
    images: "https://quorixia.com/images/meta.png",
  },
};

const Glossary = () => {
  return (
    <>
      <GlossaryHero />
      <GlossaryWrap />
    </>
  );
};

export default Glossary;
