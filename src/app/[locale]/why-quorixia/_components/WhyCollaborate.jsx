import ButtonArrow from "@/icons/ButtonArrow";
import { Link } from "@/navigation";
import React from "react";

const WhyCollaborate = () => {
  return (
    <section className="why-collaborate">
      <div className="_container">
        <h2 className="fadeInUp">How We Collaborate</h2>
        <div className="why-collaborate__body">
          <div>
            <div className="fadeInUp">
              <img src="/images/home/dots.svg" />
              <h3>Deep Listening</h3>
              <p>
                We listen first and strategize second, ensuring we fully
                understand your needs.
              </p>
            </div>
            <div className="fadeInUp">
              <img src="/images/home/dots.svg" />
              <h3>Genuine Partnership</h3>
              <p>
                We work with you at every step, creating solutions that reflect
                your vision.
              </p>
            </div>
            <div className="fadeInUp">
              <img src="/images/home/dots.svg" />
              <h3>Continuous Support</h3>
              <p>
                Our commitment doesn’t end with one solution — we’re here to
                adapt and guide you as your career grows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCollaborate;
