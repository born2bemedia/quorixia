
import RequestFormContacts from "@/components/RequestFormContacts";
import Link from "next/link";
import React from "react";

const GetAssistance = () => {
  return (
    <div className="get-assistance">
      <h2>Get assistance</h2>
      <p>
        We are here to help you with any questions or issues you may have.
        <br />
        Please choose the type of assistance you need from the options below:
      </p>

      <div className="contacts">
        <Link href="mailto:info@modellistdigital.com">
          Email us:
          <br />
          info@modellistdigital.com
        </Link>
        <Link href="tel:+442070433795">
          Call us:
          <br />
          +442070433795
        </Link>
      </div>

      <h2>SEND A REQUEST</h2>
      <p>
        Please fill out the form below for any inquiries, requests, or feedback.
        <br />
        We'll get back to you as soon as possible.
      </p>

      <RequestFormContacts />
    </div>
  );
};

export default GetAssistance;
