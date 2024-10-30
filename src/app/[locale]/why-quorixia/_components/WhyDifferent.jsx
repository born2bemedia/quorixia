import ButtonArrow from "@/icons/ButtonArrow";
import { Link } from "@/navigation";
import React from "react";

const WhyDifferent = () => {
  return (
    <section className="why-different">
      <div className="_container">
        <h2 className="fadeInUp">Why We’re Different</h2>
        <div className="why-different__body">
          <div>
            <div className="fadeInUp">
              <img src="/images/home/dots.svg" />
              <h3>
                Customization <br />
                at Every Turn
              </h3>
              <p>
                Every strategy is as unique as your career path. We reject the
                idea of one-size-fits-all approaches.
              </p>
            </div>
            <div className="fadeInUp">
              <img src="/images/home/dots.svg" />
              <h3>
                Industry-Spanning <br />
                Expertise
              </h3>
              <p>
                We cover multiple industries, ensuring you get advice that’s
                relevant and actionable.
              </p>
            </div>
            <div className="fadeInUp">
              <img src="/images/home/dots.svg" />
              <h3>
                Proactive Problem <br />
                Solving
              </h3>
              <p>
                We don’t just react to challenges — we anticipate and plan for
                them, so you’re always ahead.
              </p>
            </div>
          </div>
        </div>
        <div className="buttons-wrap fadeInUp">
          <Link href="/hr" className="main-button">
            <span>Explore Our HR Solutions</span>
            <ButtonArrow />
          </Link>
          <Link href="/employment" className="main-button">
            <span>Unlock Employment Opportunities</span>
            <ButtonArrow />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
