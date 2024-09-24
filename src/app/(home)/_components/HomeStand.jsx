import ButtonArrow from "@/icons/ButtonArrow";
import Link from "next/link";
import React from "react";

const HomeStand = () => {
  return (
    <section className="home-stand">
      <div className="_container">
        <h2 className="fadeInUp">What Makes Us Stand Out:</h2>
        <div className="home-stand__body">
          <div>
            <div className="fadeInUp">
              <img src="/images/home/dots.svg" alt="dot"/>
              <h3>Years of Expertise, Fresh Perspective</h3>
              <p>
                While Quorixia is a young, forward-thinking company, our team of
                seasoned HR experts carries decades of rich, diverse experience
                across various industries. We combine a powerful blend of
                insight, creativity, and real-world expertise.
              </p>
            </div>
            <div className="fadeInUp">
              <img src="/images/home/dots.svg" alt="dot" />
              <h3>Precision-Crafted Solutions, Tailored to You</h3>
              <p>
                At Quorixia, we don’t believe in one-size-fits-all approaches.
                Your career is a story in progress, full of potential and unique
                challenges. That’s why we take the time to listen carefully and
                understand the depth of your professional aspirations.
              </p>
            </div>
            <div className="fadeInUp">
              <img src="/images/home/dots.svg" alt="dot" />
              <h3>Empathy and Empowerment at the Core</h3>
              <p>
                Our approach goes beyond standard consulting. It’s about
                building a deep partnership rooted in trust, compassion, and
                mutual growth. The Quorixia team sees every interaction as an
                opportunity to inspire confidence, unlock potential, and drive
                transformation.
              </p>
            </div>
          </div>
        </div>
        <Link href="/why-quorixia" className="main-button">
          <span>See Why Clients Trust Quorixia</span>
          <ButtonArrow />
        </Link>
      </div>
    </section>
  );
};

export default HomeStand;
