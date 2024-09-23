import React from "react";
import "@/styles/pricing.scss";
import PricingHero from "./_components/PricingHero";
import PricingSecond from "./_components/PricingSecond";
import AdditionalSolution from "./_components/AdditionalSolution";
import CareerSolution from "./_components/CareerSolution";
import OrderPopup from "@/global_components/OrderPopup";

const Pricing = () => {
  return (
    <>
      <PricingHero />
      <PricingSecond />
      <AdditionalSolution />
      <CareerSolution />
      <OrderPopup />
    </>
  );
};

export default Pricing;
