import React from "react";
import "@/styles/hr.scss";
import HrHero from "./_components/HrHero";
import HomeReviews from "@/app/(home)/_components/HomeReviews";
import HrRequest from "./_components/HrRequest";
import HrPricing from "./_components/HrPricing";
import HrPersonalisedApproach from "./_components/HrPersonalisedApproach";
import HrExpertise from "./_components/HrExpertise";
import OrderPopup from "@/global_components/OrderPopup";
import ThanksPopup from "@/global_components/ThanksPopup";

const HrPage = () => {
  return (
    <>
      <HrHero />
      <HrExpertise />
      <HrPricing />
      <HomeReviews />
      <HrPersonalisedApproach />
      <HrRequest />
      <OrderPopup />
      <ThanksPopup />
    </>
  );
};

export default HrPage;
