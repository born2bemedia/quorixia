import ButtonArrow from "@/icons/ButtonArrow";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeSecond = () => {
  return (
    <section className="home-second">
      <div className="_container">
        <div className="home-second__body">
          <div className="fadeInUp">
            <h2>Take Charge of Your Future</h2>
            <p>
              We don’t just provide HR services — we empower you to take full
              control of your work life. Be it a career transition, progressing
              in your current field, or embarking on a new path, our solutions
              are crafted to fit your personal journey.
            </p>
            <div className="buttons-wrap">
              <Link href="#" className="main-button">
                <span>Explore Our HR Solutions</span>
                <ButtonArrow />
              </Link>
              <Link href="#" className="main-button">
                <span>Unlock Employment Opportunities</span>
                <ButtonArrow />
              </Link>
            </div>
          </div>
          <Image
            className="fadeInUp"
            src={"/images/home/homeSecond.png"}
            width={445}
            height={320}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSecond;
