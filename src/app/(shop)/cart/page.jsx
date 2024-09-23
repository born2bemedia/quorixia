"use client";
import "@/styles/cart.scss";
import React, { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import DeleteIcon from "@/icons/DeleteIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ButtonArrow from "@/icons/ButtonArrow";

const CartPage = () => {
  const { cart, deleteFromCart, clearCart, totalAmount } = useCart();
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && (
        <>
          {cart.length > 0 ? (
            <div>
              <section className="cart-wrap">
                <div className="_container">
                  <h1>Cart</h1>

                  <div className="cart">
                    <div className="cart-head">
                      <div>Service Name</div>
                      <div>Price</div>
                      <div>Quantity</div>

                      <div>Subtotal</div>
                    </div>
                    <div className="cart-content">
                      {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                          <div>
                            <button onClick={() => deleteFromCart(item.id)}>
                              <DeleteIcon />
                            </button>
                            <span>{item.attributes.title}</span>
                          </div>
                          <div>€{item.attributes.price}</div>
                          <div>{item.quantity}</div>

                          <div>€{item.quantity * item.attributes.price}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="total">Total: €{totalAmount}</div>
                  <div className="button-wrap">
                    <Link className="main-button" href="/checkout">
                      <span>Proceed to checkout</span>
                      <ButtonArrow />
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          ) : (
            <div>
              <section className="cart-wrap empty">
                <div className="_container">
                  <h1>It seems your cart is currently empty</h1>
                  <h2>
                    Browse our selection of HR and employment services to help
                    boost <br />
                    your career growth and advance your professional
                    development.
                  </h2>
                  <Link href="/" className="main-button">
                    <span>Get started</span>
                    <ButtonArrow />
                  </Link>
                </div>
              </section>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default CartPage;
