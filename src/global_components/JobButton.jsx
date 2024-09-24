"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { usePopup } from "@/context/PopupsContext";
import ButtonArrow from "@/icons/ButtonArrow";

function JobButton({ job, text }) {
  const { jobPopupDisplay, setJobPopupDisplay, jobValue, setJobValue } =
    usePopup();

  const orderPopupOpen = () => {
    setJobValue(job);
    setJobPopupDisplay(true);
  };
  return (
    <>
      <button className="main-button" onClick={() => orderPopupOpen()}>
        <span>{text}</span>
        <ButtonArrow />
      </button>
    </>
  );
}

export default JobButton;
