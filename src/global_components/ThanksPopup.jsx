"use client";
import React, { useState } from "react";
import { usePopup } from "@/context/PopupsContext";

function ThanksPopup() {
  const { thanksPopupDisplay, setThanksPopupDisplay } = usePopup();
  const [resetFormFunction, setResetFormFunction] = useState(() => () => {});

  const closePopup = () => {
    setThanksPopupDisplay(false);
    resetFormFunction();
  };

  return (
    <div className={`thanks-popup-wrap ${thanksPopupDisplay ? "opened" : ""}`}>
      <div className="overlay" onClick={() => closePopup()}></div>
      <div className="popup-inner">
        <svg
          className="popup-close"
          onClick={() => closePopup()}
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 18.5L2 2.5M18 2.5L2 18.5"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        <div>
          <div className="form-wrap">
            <div className="success">
              <h3>THANK YOU!</h3>
              <p>
                Your request has been received successfully!
                <br />
                One of our team members will get in touch with you shortly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThanksPopup;
