import React from "react";
import "@/styles/footer.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="foot-top">
        <div className="_container">
          <div className="info">
            <Link href="/">
              <img src="/images/logo_white.svg" alt="logo" />
            </Link>
            <p>
              Personalised HR and employment solutions designed to <br />
              help you confidently navigate your career journey.
            </p>
          </div>
          <div className="soc">
            <Link href="#">
              <img src="/images/facebook.svg" />
            </Link>
            <Link href="#">
              <img src="/images/instagram.svg" />
            </Link>
            <Link href="#">
              <img src="/images/x.svg" />
            </Link>
          </div>
          <div className="description">
            Personalised HR and employment solutions designed to help you
            confidently navigate your career journey.
          </div>
        </div>
      </div>
      <div className="foot-bottom">
        <div className="_container">
          <div>
            <h3>Solutions</h3>
            <div>
              <Link href="/hr">HR</Link>
              <Link href="#">Employment</Link>
              <Link href="#">Pricing</Link>
            </div>
          </div>
          <div>
            <h3>Platform</h3>
            <div>
              <Link href="#">About Us</Link>
              <Link href="#">Why Quorixia</Link>
              <Link href="#">Careers</Link>
            </div>
          </div>
          <div>
            <h3>Resources</h3>
            <div>
              <Link href="#">Blog</Link>
              <Link href="#">Case Studies</Link>
              <Link href="#">Glossary</Link>
            </div>
          </div>
          <div>
            <h3>Support</h3>
            <div>
              <Link href="#">Contact Us</Link>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of Use</Link>
              <Link href="#">Refund Policy</Link>
              <Link href="#">Cookies & Tracking</Link>
            </div>
          </div>
          <div>
            <h3>Stay Connected</h3>
            <div>
              <Link href="#">EMAIL</Link>
              <Link href="#">NUMBER</Link>
              <Link href="#">ADDRESS</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
