import ButtonArrow from "@/icons/ButtonArrow";
import Link from "next/link";
import React from "react";

const HomeSolutionWhite = () => {
  return (
    <section className="home-solution white">
      <div className="_container">
        <div className="home-stand__body">
          <h3 className="fadeInUp">Our Solutions</h3>
          <h2 className="fadeInUp">
            Employment Services to Elevate Your Career
          </h2>
          <p className="fadeInUp">
            Standing out in today’s competitive job market requires more than
            just qualifications. Quorixia offers employment services that help
            you highlight your strengths and align your career aspirations with
            real-world opportunities. From resumes to interview coaching, we
            provide everything you need to stay one step ahead.
          </p>
          <h4 className="fadeInUp">Featured Employment Services</h4>
          <ul>
            <li>
              <b>CV Building:</b> Custom resumes designed to showcase your
              skills and achievements.
            </li>
            <li>
              <b>Interview Coaching:</b> Expert guidance on mastering interviews
              with confidence.
            </li>
            <li>
              <b>Job Market Navigation:</b> We help you identify and pursue the
              best opportunities for your career.
            </li>
            <li>
              <b>LinkedIn Profile Optimization:</b> Make a digital solid first
              impression with a standout profile.
            </li>
            <li>
              <b>Job Application Assistance:</b> Tailored support for completing
              job applications that get noticed.
            </li>
            <li>
              <b>Networking Strategy:</b> Learn how to build and expand your
              professional network.
            </li>
            <li>
              <b>Portfolio Development:</b> Showcase your work with a
              professionally curated portfolio.
            </li>
            <li>
              <b>Cover Letter Crafting:</b> Write compelling cover letters that
              resonate with employers.
            </li>
            <li>
              <b>Career Transition Support:</b> Smoothly switch industries or
              roles with expert advice.
            </li>
            <li>
              <b>Salary Negotiation:</b> Maximise your compensation by
              negotiating from a position of strength.
            </li>
          </ul>
          <Link href="#" className="main-button">
            <span>Take the Next Step with Confidence</span>
            <ButtonArrow />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeSolutionWhite;
