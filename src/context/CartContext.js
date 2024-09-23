"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export const CartProvider = ({ children }) => {
  const [cartQuantity, setCartQuantity] = useState("");
  const [cart, setCart] = useState(() => {
    const initialCart =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("cart")) || []
        : [];
    return initialCart;
  });
  const [totalAmount, setTotalAmount] = useState(() => {
    const initialTotal =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("totalAmount")) || 0
        : 0;
    return initialTotal;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
    console.log("totalAmount: ", totalAmount);
    const cartQuantityValue = cart.reduce(
      (quantity, item) => quantity + item.quantity,
      0
    );
    setCartQuantity(cartQuantityValue);
  }, [cart, totalAmount]);

  const addToCart = (product) => {
    
    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === product.id);
      let newTotalAmount = totalAmount;

      if (existingIndex > -1) {
        // If product already exists in cart, do not add it again
        return prev;
      } else {
        console.log(product.attributes.price);
        newTotalAmount += product.attributes.price * product.quantity;
        setTotalAmount(newTotalAmount);
        return [...prev, product];
      }
    });
  };

  const deleteFromCart = (productId) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === productId);
      if (!existingItem) return prev;

      const newTotalAmount =
        totalAmount - existingItem.attributes.price * existingItem.quantity;
      if (newTotalAmount < 0) {
        setTotalAmount(0);
      } else {
        setTotalAmount(newTotalAmount);
      }

      return prev.filter((item) => item.id !== productId);
    });
  };

  const clearCart = () => {
    setCart([]);
    setTotalAmount(0);
    localStorage.removeItem("cart");
    localStorage.removeItem("totalAmount");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        deleteFromCart,
        clearCart,
        cartQuantity,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
