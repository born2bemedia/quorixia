"use client";
import ConnectForm from "@/global_components/ConnectForm";
import React from "react";

const HomeRequest = () => {
  return (
    <section className="home-request">
      <div className="_container">
        <div className="home-request__body">
          <h3 className="fadeInUp">Ready to Take the Next Step?</h3>
          <h2 className="fadeInUp">Your Journey Starts Here</h2>
          <p className="fadeInUp">
            Whether you’re looking for HR advice or ready to explore new
            employment opportunities, Quorixia is here to support you at every
            stage of your career. Let’s work together to achieve your goals.
          </p>
          <ConnectForm />
        </div>
      </div>
    </section>
  );
};

export default HomeRequest;
