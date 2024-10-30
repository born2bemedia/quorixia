import ButtonArrow from "@/icons/ButtonArrow";
import Image from "next/image";
import { Link } from "@/navigation";
import React from "react";

const AboutSecond = () => {
  return (
    <section className="about-second">
      <div className="_container">
        <div className="about-second__body">
          <div className="fadeInUp">
            <h2>Our Promise:</h2>
            <p>
              Your success is more than a destination — it’s the sum of every
              decision and action along the way. At Quorixia, we prioritise a
              long-term partnership that empowers you to make informed,
              confident choices throughout your professional journey.
            </p>
          </div>
          <Image
            className="fadeInUp"
            src={"/images/about/aboutSecond.png"}
            width={540}
            height={320}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSecond;
