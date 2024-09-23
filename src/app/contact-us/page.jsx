import React from "react";
import "@/styles/contact.scss";
import ContactHero from "./_components/ContactHero";
import ContactRequest from "./_components/ContactRequest";
import ContactDetails from "./_components/ContactDetails";

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
