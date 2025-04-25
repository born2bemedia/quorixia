"use client";
import { useState, useEffect } from "react";
import styles from "./CookiePopup.module.scss";
import classNames from "classnames";
import ButtonArrow from "@/icons/ButtonArrow";
import { useTranslations } from "next-intl";

const CookiePopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations("cookie");
  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={classNames(styles.cookiePopup, {
        [styles.visible]: isVisible,
      })}
    >
      <div className="_container">
        <div className={styles.body}>
          <div className={styles.content}>
            <h2>{t("title")}</h2>
            <p>{t.rich("text", {
              link: (chunks) => <a href="/cookies-and-tracking">{chunks}</a>
            })}</p>
          </div>
          <div className={styles.buttons}>
            <button
              onClick={handleDecline}
              className={classNames(styles.decline)}
            >
              {t("decline")}
            </button>
            <button
              onClick={handleAccept}
              className={classNames(styles.accept)}
            >
              <span>{t("accept")}</span>
              <ButtonArrow />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePopup;
