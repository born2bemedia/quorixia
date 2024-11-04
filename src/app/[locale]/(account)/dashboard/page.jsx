"use client";
import React, { useState, useRef, useEffect } from "react";

import LogoutButton from "./_components/LogoutButton";
import Orders from "./_components/Orders";
import { useAuth } from "@/context/AuthContext";
import PersonalData from "./_components/PersonalData";
import ThanksPopup from "@/global_components/ThanksPopup";
import AvailableFiles from "./_components/AvailableFiles";
import { useTranslations } from "next-intl";

export default function Account() {
  const t = useTranslations("dashboard");
  const { currentUser, fetchCurrentUser } = useAuth();

  const [openIndex, setOpenIndex] = useState(1);
  const contentRef = useRef([]);

  useEffect(() => {
    setOpenIndex(1);
  }, []);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!currentUser) {
    return (
      <section className="account-wrap">
        <div className="_container">
          <p dangerouslySetInnerHTML={{ __html: t("pleaseLogIn") }} />
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="account-wrap">
        <div className="_container">
          <h1>
            {t("welcome")},{" "}
            <span className="font-bold">
              {currentUser.name ? currentUser.name : currentUser.username}
            </span>
            !
          </h1>
          <div className="account-wrap__body">
            <ul className="account-nav">
              <li
                data-id={openIndex}
                aria-current="page"
                onClick={() => toggleItem(1)}
                className={`${openIndex === 1 && "active"}`}
              >
                <span>{t("recentOrders")}</span>
              </li>
              <li
                data-id={openIndex}
                aria-current="page"
                onClick={() => toggleItem(2)}
                className={`${openIndex === 2 && "active"}`}
              >
                <span>{t("availableFiles")}</span>
              </li>
              <li
                data-id={openIndex}
                aria-current="page"
                onClick={() => toggleItem(3)}
                className={`${openIndex === 3 && "active"}`}
              >
                <span>{t("personalData")}</span>
              </li>
              <LogoutButton />
            </ul>

            <div className="account-content">
              <div className={openIndex === 1 ? "block" : "hidden"}>
                <Orders />
              </div>
              <div className={openIndex === 2 ? "block" : "hidden"}>
                <AvailableFiles />
              </div>
              <div className={openIndex === 3 ? "block" : "hidden"}>
                <PersonalData />
              </div>
              <div className={openIndex === 4 ? "block" : "hidden"}></div>
            </div>
          </div>
        </div>
      </section>
      <ThanksPopup />
    </>
  );
}
