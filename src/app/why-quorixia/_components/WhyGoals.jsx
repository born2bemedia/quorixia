import ButtonArrow from "@/icons/ButtonArrow";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhyGoals = () => {
  return (
    <section className="why-goals">
      <div className="_container">
        <div className="why-goals__body">
          <div className="fadeInUp">
            <h2>Your Goals Come First — Always</h2>
            <p>
              At Quorixia, the foundation of our success is our client-centric
              approach. We focus entirely on you — your ambitions, challenges,
              and growth. From the moment we start working together, we make
              your goals our mission. We take the time to truly understand your
              unique career trajectory and create tailored strategies aligned
              with your objectives.
              <br />
              <br />
              Our process is collaborative and designed to evolve with you. We
              don’t believe in generic solutions or automated methods. Each
              interaction is personalised and deliberate, ensuring we work
              alongside you, not just for you. Your input is at the heart of
              every solution we develop, and we adapt as your career progresses,
              offering continuous support that evolves as your goals do.
            </p>
          </div>
          <Image
            className="fadeInUp"
            src={"/images/why/goals.png"}
            width={475}
            height={270}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyGoals;
