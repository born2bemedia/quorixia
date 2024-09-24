import ButtonArrow from "@/icons/ButtonArrow";
import Link from "next/link";
import React from "react";

const AboutGuiding = () => {
  return (
    <section className="about-guiding">
      <div className="_container">
        <h2 className="fadeInUp">Guiding Careers with Precision and Passion</h2>
        <p className="fadeInUp">
          At Quorixia, we understand that no two career paths are alike. This is
          why we approach each client with a highly personalised strategy,
          ensuring our solutions align with your goals and needs. Our process is
          simple yet profound: we listen, we learn, and we create.
        </p>
        <div className="about-guiding__body">
          <div>
            <div className="fadeInUp">
              <img src="/images/home/dots.svg" />
              <h3>Consultation</h3>
              <p>
                The foundation of our partnership begins with an in-depth
                consultation. We take the time to explore your background, your
                aspirations, and the challenges you’re currently facing.
              </p>
            </div>
            <div className="fadeInUp">
              <img src="/images/home/dots.svg" />
              <h3>Strategy Development</h3>
              <p>
                Once we’ve gained a comprehensive understanding of your unique
                situation, we craft a personalised strategy designed to help you
                achieve your goals, whether it’s navigating a career transition,
                negotiating a job offer, or preparing for a leadership role.
              </p>
            </div>
            <div className="fadeInUp">
              <img src="/images/home/dots.svg" />
              <h3>Ongoing Support</h3>
              <p>
                Our work doesn’t stop with strategy creation. We provide
                continuous support, adjusting our approach to ensure you stay on
                track, empowered, and confident in every decision.
              </p>
            </div>
          </div>
        </div>
        <Link href="/case-studies" className="main-button">
          <span>Read Success Stories</span>
          <ButtonArrow />
        </Link>
      </div>
    </section>
  );
};

export default AboutGuiding;
