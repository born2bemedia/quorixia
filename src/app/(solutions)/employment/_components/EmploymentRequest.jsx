"use client";
import ConnectForm from "@/global_components/ConnectForm";
import React from "react";

const EmploymentRequest = () => {
  return (
    <section className="employment-request">
      <div className="_container">
        <div className="employment-request__body">
          <h2 className="fadeInUp">Let’s Start Your Career Journey Together</h2>
          <p className="fadeInUp">
            We’re here to provide the personalised support you need to elevate
            your professional path. Use the form below to reach out, and one of
            our expert consultants will get back to you promptly. Together,
            we’ll tailor a strategy that aligns with your aspirations.
          </p>
          <ConnectForm />
        </div>
      </div>
    </section>
  );
};

export default EmploymentRequest;
