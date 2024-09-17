import ButtonArrow from "@/icons/ButtonArrow";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeResources = () => {
  return (
    <section className="home-resources">
      <div className="_container">
        <h3 className="fadeInUp">Career Resources</h3>
        <h2 className="fadeInUp">Empowering You With Knowledge</h2>
        <p className="fadeInUp">
          Your career doesn’t come with a manual, but Quorixia’s resources are
          the next best thing. Stay ahead of the curve with expert insights,
          guides, and practical advice crafted by HR professionals. Our blog,
          case studies, and glossary help you stay informed and inspired, giving
          you the tools to navigate your career confidently.
        </p>
        <div className="home-resources__body">
          <div>
            <div className="fadeInUp">
              <div className="thumb">
                <Image src={"/images/home/article1.png"} fill />
              </div>
              <div className="info">
                <h4>How to Master Your Next Job Interview</h4>
                <h5>01</h5>
              </div>
            </div>
            <div className="fadeInUp">
              <div className="thumb">
                <Image src={"/images/home/article2.png"} fill />
              </div>
              <div className="info">
                <h4>Top 10 Resume Tips You Can’t Afford to Miss</h4>
                <h5>02</h5>
              </div>
            </div>
            <div className="fadeInUp">
              <div className="thumb">
                <Image src={"/images/home/article3.png"} fill />
              </div>
              <div className="info">
                <h4>How to Stay Ahead in a Rapidly Changing Job Market</h4>
                <h5>03</h5>
              </div>
            </div>
          </div>
        </div>
        <Link href="#" className="main-button">
          <span>Visit Our Resources</span>
          <ButtonArrow />
        </Link>
      </div>
    </section>
  );
};

export default HomeResources;
