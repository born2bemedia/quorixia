import ButtonArrow from "@/icons/ButtonArrow";
import Link from "next/link";
import React from "react";

const HrExpertise = () => {
  return (
    <section className="hr-expertise">
      <div className="_container">
        <div className="hr-expertise__top">
          <h2 className="fadeInUp">Discover Our HR Expertise</h2>
          <p className="fadeInUp">
            No two career paths are alike. Our range of HR solutions is designed
            to address your issues, whether navigating a career transition,
            enhancing your leadership skills, or seeking personalised HR advice.
            Focusing on customised strategies and one-on-one support, we offer
            services that empower you to take control of your professional
            future.
          </p>
        </div>
        <div className="hr-expertise__body">
          <div className="fadeInUp">
            <h3>
              Contract Negotiation
              <br />& Review
            </h3>
            <p>
              Secure favourable terms in your employment agreements to protect
              your interests.
            </p>
          </div>
          <div className="fadeInUp">
            <h3>
              Performance
              <br />
              Management
            </h3>
            <p>
              Receive expert guidance to excel in your current role and achieve
              professional growth.
            </p>
          </div>
          <div className="fadeInUp">
            <h3>
              Legal <br />
              HR Consultation
            </h3>
            <p>
              Navigate complex employment laws and workplace rights with
              confidence.
            </p>
          </div>
          <div className="fadeInUp">
            <h3>
              Workplace
              <br />
              Conflict Resolution
            </h3>
            <p>
              Get professional advice on resolving disputes and creating a
              harmonious work environment.
            </p>
          </div>
          <div className="fadeInUp">
            <h3>
              Leadership <br /> Coaching
            </h3>
            <p>
              Unlock your leadership potential with personalised coaching to
              advance in your career.
            </p>
          </div>
          <div className="fadeInUp">
            <h3>
              Compensation &<br /> Benefits Consultation
            </h3>
            <p>
              Ensure you’re being compensated fairly and receiving the right
              benefits for your role.
            </p>
          </div>
          <div className="fadeInUp">
            <h3>
              Exit Strategy &<br /> Career Transition Support
            </h3>
            <p>
              Receive guidance on smoothly transitioning out of a current role
              and into new opportunities.
            </p>
          </div>
          <div className="fadeInUp">
            <h3>
              Work-Life Balance <br /> Strategies
            </h3>
            <p>
              Tailored strategies to help you maintain a healthy balance between
              work and personal life.
            </p>
          </div>
          <div className="fadeInUp">
            <h3>
              Onboarding <br /> Support
            </h3>
            <p>
              Make the transition into new roles easier with customised
              onboarding advice.
            </p>
          </div>
          <div className="fadeInUp">
            <h3>
              Talent Development &<br /> Skills Assessment
            </h3>
            <p>
              Identify your strengths and areas for growth with a tailored
              skills assessment.
            </p>
          </div>
          <div className="fadeInUp">
            <h3>
              Diversity &<br /> Inclusion Consultation
            </h3>
            <p>Get advice on navigating diverse and inclusive workplaces.</p>
          </div>
          <div className="fadeInUp">
            <h3>
              Remote Work &<br /> Flexibility Planning
            </h3>
            <p>
              Develop strategies to thrive in remote or flexible working
              environments.
            </p>
          </div>
          <div className="fadeInUp">
            <h3>
              Career Path <br /> Planning
            </h3>
            <p>Map out a clear, strategic path for your career progression.</p>
          </div>
          <div className="fadeInUp">
            <h3>
              HR Policy <br /> Review
            </h3>
            <p>
              Ensure your employment is aligned with fair and up-to-date HR
              policies.
            </p>
          </div>
          <div className="fadeInUp">
            <h3>
              Personal Development <br /> Plans
            </h3>
            <p>
              Create a long-term plan for personal and professional development.
            </p>
          </div>
          <div className="fadeInUp">
            <h3>
              Conflict <br /> Mediation
            </h3>
            <p>
              Receive expert mediation to help resolve internal workplace
              conflicts.
            </p>
          </div>
          <div className="fadeInUp">
            <h3>
              Job Role Analysis &<br /> Clarification
            </h3>
            <p>
              Get clear on your role expectations and how to maximise your
              performance.
            </p>
          </div>
          <div className="fadeInUp">
            <h3>
              Employee Rights <br /> Advocacy
            </h3>
            <p>
              Support in ensuring your employee rights are upheld in the
              workplace.
            </p>
          </div>
          <div className="fadeInUp">
            <h3>
              Workplace Culture &<br /> Adaptation
            </h3>
            <p>
              Receive guidance on how to fit into and thrive within a company’s
              culture.
            </p>
          </div>
          <div className="fadeInUp">
            <h3>
              Mentorship <br /> Matching
            </h3>
            <p>
              We help connect you with mentors in your industry for growth and
              development.
            </p>
          </div>
        </div>
        <div className="buttons-wrap">
          <Link href="#" className="main-button">
            <span>Order HR Service Now</span>
            <ButtonArrow />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HrExpertise;
