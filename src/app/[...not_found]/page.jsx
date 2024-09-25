import Link from "next/link";
import React from "react";

const ThankyouPage = () => {
  return (
    <section className="thankyou-page">
      <div className="_container">
        <h1>Uh-oh! It looks like you've hit a roadblock.</h1>
        <h2>
          The page you’re looking for may have been moved or no longer exists.
          <br />
          Head back to our <Link href="/">Homepage</Link>, or reach out to our
          support team if you need <br />
          further assistance
        </h2>
      </div>
    </section>
  );
};

export default ThankyouPage;
