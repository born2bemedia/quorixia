import Link from "next/link";
import React from "react";

const ContactDetails = () => {
  return (
    <section className="contact-details">
      <div className="_container">
        <div className="contact-details__top">
          <h2 className="fadeInUp">Contact Information</h2>
          <Link href="tel:+35723030297">
            <img src="/images/contact/phone.svg" />
            <span>+35723030297</span>
          </Link>
          <Link href="mailto:info@quorixia.com">
            <img src="/images/contact/mail.svg" />
            <span>info@quorixia.com</span>
          </Link>
        </div>
        <div className="contact-details__body">
          <div className="address fadeInUp">
            <div>
              <h2>Registered Address</h2>
              <p>Nissi, 68m Agia Napa, 5330, Famagusta, Cyprus</p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.691187930367!2d33.97656757560283!3d34.98939917281858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dfc56097c1b91b%3A0x576954af8b887eff!2sNissi%2068%2C%20Ayia%20Napa%205330%2C%20Cyprus!5e0!3m2!1sen!2sua!4v1727339843268!5m2!1sen!2sua"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/*<div className="address fadeInUp">
            <div>
              <h2>Office Address</h2>
              <p>INFO</p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.58519602238!2d-0.2664050245106186!3d51.52852620113952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sua!4v1727123907996!5m2!1sen!2sua"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>*/}
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
