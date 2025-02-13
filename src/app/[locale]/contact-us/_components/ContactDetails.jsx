import { Link } from "@/navigation";
import React from "react";
import { useTranslations } from "next-intl";

const ContactDetails = () => {
  const t = useTranslations("contact");
  return (
    <section className="contact-details">
      <div className="_container">
        <div className="contact-details__top">
          <h2 className="fadeInUp">{t("ContactDetails.title")}</h2>
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
              <h2>{t("ContactDetails.registered")}</h2>
              <p>Nissi, 68 Agia Napa, 5330, Famagusta, Cyprus</p>
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
              <h2>{t("ContactDetails.office")}</h2>
              <p>
                3rd floor, office number 48, Victory House, Archbishop Makarios
                Avenue 205, Limassol 3030, Cyprus
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.717802458108!2d33.04923767558909!3d34.68707107292447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e7331495119c07%3A0x8e12971fec6fcada!2sRegus%20-%20Limassol%2C%20Victory%20House!5e0!3m2!1sen!2sua!4v1732629260214!5m2!1sen!2sua"
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
