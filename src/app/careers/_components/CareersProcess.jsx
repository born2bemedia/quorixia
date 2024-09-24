import React from "react";

const CareersProcess = () => {
  return (
    <section className="careers-process">
      <div className="_container">
        <h2 className="fadeInUp">Our Hiring Process</h2>
        <p className="fadeInUp">
          At Quorixia, we believe in a hiring process that is as personalised as
          our services. Here’s what you can expect:
        </p>
        <div className="careers-process__body">
          <div className="item fadeInUp">
            <div className="number">01</div>
            <div className="details">
              <h3>Initial Application Review</h3>
              <p>
                Our HR team carefully reviews every application to ensure the
                best fit.
              </p>
            </div>
          </div>
          <div className="item fadeInUp">
            <div className="number">02</div>
            <div className="details">
              <h3>Phone Interview</h3>
              <p>
                If selected, you’ll be invited to an introductory phone
                interview to discuss your experience and career goals.
              </p>
            </div>
          </div>
          <div className="item fadeInUp">
            <div className="number">03</div>
            <div className="details">
              <h3>Skills Assessment</h3>
              <p>
                Depending on the role, we may ask you to complete a short skills
                assessment to showcase your expertise.
              </p>
            </div>
          </div>
          <div className="item fadeInUp">
            <div className="number">04</div>
            <div className="details">
              <h3>Final Interview</h3>
              <p>
                Successful candidates will have a final interview with the team
                to assess cultural fit and discuss how they can contribute to
                our mission.
              </p>
            </div>
          </div>
          <div className="item fadeInUp">
            <div className="number">05</div>
            <div className="details">
              <h3>Offer & Onboarding</h3>
              <p>
                Once we find the right fit, we’ll extend an offer and start the
                onboarding process to welcome you to the team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersProcess;
