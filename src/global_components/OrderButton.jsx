"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { usePopup } from "@/context/PopupsContext";
import ButtonArrow from "@/icons/ButtonArrow";

function OrderButton({ packageItem, text }) {
  const {
    orderPopupDisplay,
    setOrderPopupDisplay,
    serviceValue,
    setServiceValue,
  } = usePopup();

  const orderPopupOpen = () => {
    console.log("popup");
    setServiceValue(packageItem);
    setOrderPopupDisplay(true);
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

export default OrderButton;
