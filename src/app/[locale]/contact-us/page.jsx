import React from "react";
import "@/styles/contact.scss";
import ContactHero from "./_components/ContactHero";
import ContactRequest from "./_components/ContactRequest";
import ContactDetails from "./_components/ContactDetails";

export const metadata = {
    title: "Contact Quorixia: Get in Touch for Career Support",
    description:
      "Have questions or need career guidance? Contact Quorixia today to explore personalised HR and employment services tailored to your needs.",
    openGraph: {
      title: "Contact Quorixia: Get in Touch for Career Support",
      description:
        "Have questions or need career guidance? Contact Quorixia today to explore personalised HR and employment services tailored to your needs.",
      images: "https://quorixia.com/images/meta.png",
    },
  };

const ContactUs = () => {
  return (
    <>
      <ContactHero />
      <ContactDetails />
      <ContactRequest />
    </>
  );
};

export default ContactUs;
