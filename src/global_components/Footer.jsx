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
            <Link href="https://www.facebook.com/quorixia" target="_blank">
              <img alt="facebook" src="/images/facebook.svg" />
            </Link>
            {/*<Link href="#">
              <img alt="instagram" src="/images/instagram.svg" />
            </Link>*/}
            <Link href="https://x.com/quorixia" target="_blank">
              <img alt="x" src="/images/x.svg" />
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
              <Link href="/employment">Employment</Link>
              <Link href="/pricing">Pricing</Link>
            </div>
          </div>
          <div>
            <h3>Platform</h3>
            <div>
              <Link href="/about-us">About Us</Link>
              <Link href="/why-quorixia">Why Quorixia</Link>
              <Link href="/careers">Careers</Link>
            </div>
          </div>
          <div>
            <h3>Resources</h3>
            <div>
              <Link href="/blog">Blog</Link>
              <Link href="/case-studies">Case Studies</Link>
              <Link href="/glossary">Glossary</Link>
            </div>
          </div>
          <div>
            <h3>Support</h3>
            <div>
              <Link href="/contact-us">Contact Us</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-of-use">Terms of Use</Link>
              <Link href="/refund-policy">Refund Policy</Link>
              <Link href="/cookies-and-tracking">Cookies & Tracking</Link>
            </div>
          </div>
          <div>
            <h3>Stay Connected</h3>
            <div>
              <Link href="mailto:info@quorixia.com">info@quorixia.com</Link>
              <Link href="tel:+35723030297">+35723030297</Link>
              <Link href="#">
                Registered address: Nissi, 68m Agia Napa, 5330, Famagusta,
                Cyprus
              </Link>
              <Link href="#">
                Office address: 1st floor, office number 8, Georgiou Averof,
                <br />
                3-5, Larnaka 6052
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
