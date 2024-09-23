"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ContactHero = () => {
  return (
    <section className="contact-hero">
      <div className="contact-hero__body">
        <div></div>
        <div>
          <div></div>
        </div>
        <div>
          <h1 className="fadeInUp">Get in Touch with Quorixia</h1>
          <p>
            We’re here to help you on your career journey. Don’t <br />
            hesitate to reach out if you have questions about our <br />
            services, want to learn more about how we can assist <br />
            you, or need personalised HR and employment <br />
            solutions. Our team is always ready to assist you. Get <br />
            in touch using the information below, or send us a <br />
            message through our contact form — we’ll respond as <br />
            soon as possible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
