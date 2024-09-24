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
import RequestPopup from "@/global_components/RequestPopup";

export const metadata = {
  title: "Expert HR Solutions for Career Success | Quorixia",
  description:
    "From contract negotiation to leadership coaching, Quorixia’s HR services provide the expert guidance you need to navigate and excel in your career.",
  openGraph: {
    title: "Expert HR Solutions for Career Success | Quorixia",
    description:
      "From contract negotiation to leadership coaching, Quorixia’s HR services provide the expert guidance you need to navigate and excel in your career.",
    images: "https://quorixia.com/images/meta.png",
  },
};

const HrPage = () => {
  const reviews = [
    {
      name: "Sarah J.",
      title: "Marketing Manager",
      quote:
        "“Quorixia helped me navigate a challenging contract negotiation and secure better terms. I’m more confident in my career decisions now!”",
      link: "#",
    },
    {
      name: "Daniel R.",
      title: "Engineering Lead",
      quote:
        "“The leadership coaching I received was exceptional. It helped me step into a new management role with confidence.”",
      link: "#",
    },
    {
      name: "Laura M.",
      title: "Project Coordinator",
      quote:
        "“I was struggling with workplace conflict, and Quorixia’s mediation service helped me resolve it quickly and professionally.”",
      link: "#",
    },
    {
      name: "Mike T.",
      title: "IT Specialist",
      quote:
        "“Their exit strategy support was invaluable. Quorixia helped me transition out of a toxic work environment and into a new opportunity.”",
      link: "#",
    },
  ];

  return (
    <>
      <HrHero />
      <HrExpertise />
      <HrPricing />
      <HomeReviews reviews={reviews} />
      <HrPersonalisedApproach />
      <HrRequest />
      <RequestPopup />
      <ThanksPopup />
    </>
  );
};

export default HrPage;
