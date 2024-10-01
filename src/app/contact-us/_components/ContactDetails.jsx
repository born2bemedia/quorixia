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
          <div className="address fadeInUp">
            <div>
              <h2>Office Address</h2>
              <p>
                1st floor, office number 8, Georgiou Averof, 3-5, Larnaka 6052
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.030892689567!2d33.617867775600274!3d34.930762172838804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de2806d60cb429%3A0xb84ae309413a7842!2sGeorgiou%20Averof%203%2C%20Larnaca%206052%2C%20Cyprus!5e0!3m2!1sen!2sua!4v1727799544390!5m2!1sen!2sua"
              width="600"
              height="450"
              allowfullscreen=""
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
