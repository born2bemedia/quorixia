"use client";
import ConnectForm from "@/global_components/ConnectForm";
import React from "react";

const HrRequest = () => {
  return (
    <section className="hr-request">
      <div className="_container">
        <div className="hr-request__body">
          <h2 className="fadeInUp">Unlock Your Personalised HR Strategy</h2>
          <p className="fadeInUp">
            Our experts bring decades of collective HR experience to guide you
            with empathy, precision, and care. You won’t just get advice –
            you’ll get a partner dedicated to your success.
          </p>
          <ConnectForm />
        </div>
      </div>
    </section>
  );
};

export default HrRequest;
