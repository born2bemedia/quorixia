"use client";
import "@/styles/cart.scss";
import React, { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import DeleteIcon from "@/icons/DeleteIcon";
import { Link } from "@/navigation";
import { useRouter } from "next/navigation";
import ButtonArrow from "@/icons/ButtonArrow";
import { useTranslations } from "next-intl";

const CartPage = () => {
  const t = useTranslations("cart");
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
                  <h1>{t("title")}</h1>

                  <div className="cart">
                    <div className="cart-head">
                      <div>{t("serviceName")}</div>
                      <div>{t("price")}</div>
                      <div>{t("quantity")}</div>

                      <div>{t("subtotal")}</div>
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
                  <div className="total">{t("total")}: €{totalAmount}</div>
                  <div className="button-wrap">
                    <Link className="main-button" href="/checkout">
                      <span>{t("proceed")}</span>
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
                  <h1>{t("empty.title")}</h1>
                  <h2 dangerouslySetInnerHTML={{ __html: t("empty.text") }} />
                  <Link href="/" className="main-button">
                    <span>{t("empty.button")}</span>
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
