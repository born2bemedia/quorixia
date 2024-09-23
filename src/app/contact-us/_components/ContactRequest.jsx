"use client";
import ConnectForm from "@/global_components/ConnectForm";
import React from "react";

const ContactRequest = () => {
  return (
    <section className="contact-request">
      <div className="_container">
        <div className="contact-request__body">
          <h2 className="fadeInUp">Let’s Start a Conversation</h2>
          <p className="fadeInUp">
            If you have any questions or inquiries, please use the form below to
            contact us. Whether you seek career advice, more information about
            our services, or want to collaborate, we’re here to listen and
            respond. Simply fill out the form, and one of our team members will
            reply shortly.
          </p>
          <ConnectForm />
        </div>
      </div>
    </section>
  );
};

export default ContactRequest;
