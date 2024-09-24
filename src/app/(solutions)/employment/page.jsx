import React from "react";
import "@/styles/employment.scss";
import HomeReviews from "@/app/(home)/_components/HomeReviews";
import OrderPopup from "@/global_components/OrderPopup";
import ThanksPopup from "@/global_components/ThanksPopup";
import EmploymentHero from "./_components/EmploymentHero";
import EmploymentExpertise from "./_components/EmploymentExpertise";
import EmploymentPricing from "./_components/EmploymentPricing";
import EmploymentPersonalisedApproach from "./_components/EmploymentPersonalisedApproach";
import EmploymentRequest from "./_components/EmploymentRequest";
import EmploymentHowWork from "./_components/EmploymentHowWork";
import RequestPopup from "@/global_components/RequestPopup";

export const metadata = {
  title: "Employment Services to Elevate Your Career | Quorixia",
  description:
    "Quorixia offers employment services, including resume building, interview prep, and job search strategies to help you find and secure the right opportunities.",
  openGraph: {
    title: "Employment Services to Elevate Your Career | Quorixia",
    description:
      "Quorixia offers employment services, including resume building, interview prep, and job search strategies to help you find and secure the right opportunities.",
    images: "https://quorixia.com/images/meta.png",
  },
};

const EmploymentPage = () => {
  const reviews = [
    {
      name: "Alex G.",
      title: "Software Developer",
      quote:
        "“Quorixia helped me optimise my resume and LinkedIn profile, and within weeks, I was getting interviews for positions I wanted.”",
      link: "#",
    },
    {
      name: "Maria L.",
      title: "Marketing Specialist",
      quote:
        "“Their interview coaching gave me the confidence to succeed in a highly competitive market. I secured a job in no time.”",
      link: "#",
    },
    {
      name: "John D.",
      title: "Project Manager",
      quote:
        "“The personalised job search strategy completely transformed how I approached finding new opportunities. Quorixia was instrumental in my career transition.”",
      link: "#",
    },
    {
      name: "Emma W.",
      title: "HR Specialist",
      quote:
        "“The support I received from Quorixia was invaluable. From refining my cover letter to negotiating my job offer, they guided me through every step. I landed a role that aligns perfectly with my career goals.”",
      link: "#",
    },
  ];

  return (
    <>
      <EmploymentHero />
      <EmploymentExpertise />
      <EmploymentPricing />
      <EmploymentHowWork />
      <HomeReviews reviews={reviews} />
      <EmploymentRequest />
      <RequestPopup />
      <ThanksPopup />
    </>
  );
};

export default EmploymentPage;
