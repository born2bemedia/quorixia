import Link from "next/link";
import React from "react";

const ContactDetails = () => {
  return (
    <section className="contact-details">
      <div className="_container">
        <div className="contact-details__top">
          <h2 className="fadeInUp">Contact Information</h2>
          <Link href="#">
            <img src="/images/contact/phone.svg" />
            <span>Phone</span>
          </Link>
          <Link href="#">
            <img src="/images/contact/mail.svg" />
            <span>Email</span>
          </Link>
        </div>
        <div className="contact-details__body">
          <div className="address fadeInUp">
            <div>
              <h2>Registered Address</h2>
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
          </div>
          <div className="address fadeInUp">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
