"use client";
import React, { useState, useEffect, createContext, useContext } from "react";

const PopupsContext = createContext();

export const PopupsProvider = ({ children }) => {
  const [orderPopupDisplay, setOrderPopupDisplay] = useState(false);
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
        jobPopupDisplay,
        setJobPopupDisplay,
        jobValue,
        setJobValue,
      }}
    >
      {children}
    </PopupsContext.Provider>
  );
};

export const usePopup = () => useContext(PopupsContext);
