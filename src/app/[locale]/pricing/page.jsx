import React from "react";
import "@/styles/pricing.scss";
import PricingHero from "./_components/PricingHero";
import PricingSecond from "./_components/PricingSecond";
import AdditionalSolution from "./_components/AdditionalSolution";
import CareerSolution from "./_components/CareerSolution";
import OrderPopup from "@/global_components/OrderPopup";
import PackagesWrap from "./_components/PackagesWrap";

export const metadata = {
  title: "Transparent Pricing for HR & Employment Services | Quorixia",
  description:
    "Explore Quorixia’s fixed-price services and flexible pricing packages designed to fit your unique career needs and goals.",
  openGraph: {
    title: "Transparent Pricing for HR & Employment Services | Quorixia",
    description:
      "Explore Quorixia’s fixed-price services and flexible pricing packages designed to fit your unique career needs and goals.",
    images: "https://quorixia.com/images/meta.png",
  },
};

const Pricing = () => {
  return (
    <>
      <PricingHero />
      <PricingSecond />
      <AdditionalSolution />
      <PackagesWrap />
      <OrderPopup />
    </>
  );
};

export default Pricing;
