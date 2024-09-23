"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
//import ButtonCartIcon from "@/icons/ButtonCartIcon";
import ButtonArrow from "@/icons/ButtonArrow";

function AddToCartButton({ product }) {
  const router = useRouter();
  const { addToCart, cart } = useCart();
  const existingIndex = cart.findIndex((item) => item.id === product.id);
  const handleAddToCart = (product) => {
    addToCart({
      ...product,
      quantity: 1, // You can adjust this as needed
    });
    router.push("/cart");
  };
  return (
    <>
      {existingIndex > -1 ? (
        <button disabled className="main-button">
          <span>In cart</span>
          <ButtonArrow />
        </button>
      ) : (
        <button
          className="main-button"
          onClick={() => handleAddToCart(product)}
        >
          <span>Buy</span>
          <ButtonArrow />
        </button>
      )}
    </>
  );
}

export default AddToCartButton;
