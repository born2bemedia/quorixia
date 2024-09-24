"use client";
import React, { useState, useEffect, createContext, useContext } from "react";

const PopupsContext = createContext();

export const PopupsProvider = ({ children }) => {
  const [orderPopupDisplay, setOrderPopupDisplay] = useState(false);
  const [requestPopupDisplay, setRequestPopupDisplay] = useState(false);
  const [jobPopupDisplay, setJobPopupDisplay] = useState(false);
  const [thanksPopupDisplay, setThanksPopupDisplay] = useState(false);
  const [serviceValue, setServiceValue] = useState(false);
  const [jobValue, setJobValue] = useState(false);

  return (
    <PopupsContext.Provider
      value={{
        orderPopupDisplay,
        setOrderPopupDisplay,
        thanksPopupDisplay,
        setThanksPopupDisplay,
        serviceValue,
        setServiceValue,
        requestPopupDisplay,
        setRequestPopupDisplay,
        jobValue,
        setJobValue,
        jobPopupDisplay,
        setJobPopupDisplay,
      }}
    >
      {children}
    </PopupsContext.Provider>
  );
};

export const usePopup = () => useContext(PopupsContext);
