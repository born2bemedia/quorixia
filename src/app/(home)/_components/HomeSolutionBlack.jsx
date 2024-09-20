import ButtonArrow from "@/icons/ButtonArrow";
import Link from "next/link";
import React from "react";

const HomeSolutionBlack = () => {
  return (
    <section className="home-solution">
      <div className="_container">
        <div className="home-stand__body">
          <h3 className="fadeInUp">Our Solutions</h3>
          <h2 className="fadeInUp">What Makes Us Stand Out:</h2>
          <p className="fadeInUp">
            Navigating the complexities of HR can be overwhelming. That’s where
            Quorixia steps in with a full range of personalised HR services that
            go beyond the basics. Whether you’re negotiating contracts, seeking
            legal advice, or working on personal development, our solutions are
            crafted with your success in mind. Each service is tailored to meet
            the unique challenges you face.
          </p>
          <h4 className="fadeInUp">Featured HR Services</h4>
          <ul className="fadeInUp">
            <li>
              <b>Contract Negotiation:</b> We help you navigate and secure the
              best terms for your employment agreements.
            </li>
            <li>
              <b>Legal HR Consultation:</b> Expert advice on employment rights
              and workplace regulations.
            </li>
            <li>
              <b>Personalized Career Coaching:</b> One-on-one coaching to
              strategize your career growth.
            </li>
            <li>
              <b>Performance Review Support:</b> Guidance on how to excel in
              your performance evaluations.
            </li>
            <li>
              <b>Conflict Resolution:</b> Assistance in resolving workplace
              disputes effectively.
            </li>
            <li>
              <b>Work-Life Balance Strategies:</b> Tailored approaches to help
              you manage your professional and personal life.
            </li>
            <li>
              <b>Compensation Benchmarking:</b> Insights on how to ensure you’re
              compensated fairly within your industry.
            </li>
            <li>
              <b>Exit Strategy Planning:</b> Guidance on transitioning out of a
              role smoothly and on your own terms.
            </li>
            <li>
              <b>Leadership Development:</b> Support for individuals stepping
              into or aiming for leadership roles.
            </li>
            <li>
              <b>Employment Law Updates:</b> Stay informed about the latest
              regulations that affect your rights and opportunities.
            </li>
          </ul>
          <Link href="/hr" className="main-button">
            <span>Unlock Your Personalised HR Strategy</span>
            <ButtonArrow />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeSolutionBlack;
