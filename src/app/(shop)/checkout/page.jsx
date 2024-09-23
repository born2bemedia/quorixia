"use client";
import "@/styles/cart.scss";
import React, { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DeleteIcon from "@/icons/DeleteIcon";
import Link from "next/link";
import CheckboxIcon from "@/icons/CheckboxIcon";
import Select from "react-select";
import countryList from "react-select-country-list";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import ButtonArrow from "@/icons/ButtonArrow";

const getCountryOptionByCode = (code) => {
  const countries = countryList().getData();
  return countries.find((country) => country.value === code);
};

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    width: "100%",
    color: "#ffffff4d",
    height: "50px",
    borderRadius: "25px",
    background: "#ffffff0d",
    border: state.isFocused ? "1px solid #ffffff26" : "1px solid #ffffff26",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "1.2",
    textAlign: "left",
    padding: "0 20px",
    boxShadow: "unset",
    "&:hover": {
      borderColor: "#ffffff26",
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: "50px",
    margin: "0",
    padding: "0",
    border: "none",
  }),
  input: (provided) => ({
    ...provided,
    height: "50px",
    margin: "0",
    padding: "0",
    border: "none",
    color: "#ffffff",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#ffffff",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    "> span": {
      display: "none",
    },
  }),
  indicatorContainer: (provided) => ({
    ...provided,
    padding: "0",
  }),
  menu: (provided) => ({
    ...provided,
    background: "#ffffff0d",
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isSelected ? "#222222" : "#222222",
    color: "#ffffff",
    "&:hover": {
      background: "#161616",
    },
  }),
};

const CartPage = () => {
  const { cart, deleteFromCart, clearCart, totalAmount } = useCart();
  const [isMounted, setIsMounted] = useState(false);
  const { currentUser, setCurrentUser, refreshToken } = useAuth();
  const router = useRouter();
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const initialValues = {
    firstName: currentUser?.billing?.first_name || "",
    lastName: currentUser?.billing?.last_name || "",
    email: currentUser?.email || "",
    phone: currentUser?.billing?.phone || "",
    street: currentUser?.billing?.address_1 || "",
    address: currentUser?.billing?.address_2 || "",
    city: currentUser?.billing?.city || "",
    state: currentUser?.billing?.state || "",
    zip: currentUser?.billing?.postcode || "",
    country: getCountryOptionByCode(currentUser?.billing?.country) || "",
    terms: false,
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("This field is required."),
    lastName: Yup.string().required("This field is required."),
    email: Yup.string()
      .email("Please provide a valid email address.")
      .required("This field is required."),
    phone: Yup.string()
      .matches(/^\d+$/, "Please provide a valid phone number.")
      .required("This field is required."),
    street: Yup.string().required("This field is required."),
    address: Yup.string().required("This field is required."),
    city: Yup.string().required("This field is required."),
    //state: Yup.string().required("This field is required."),
    zip: Yup.string().required("This field is required."),
    country: Yup.string().required("This field is required."),
    terms: Yup.bool().oneOf(
      [true],
      "You must accept the terms and conditions."
    ),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const orderData = {
      payment_method: "bacs",
      payment_method_title: "Direct Bank Transfer",
      set_paid: false,
      status: "processing",
      billing: {
        first_name: values.firstName,
        last_name: values.lastName,
        address_1: values.street,
        address_2: values.address,
        city: values.city,
        state: values.state,
        postcode: values.zip,
        country: values.country.value,
        email: values.email,
        phone: values.phone,
      },
      line_items: cart.map((item) => ({
        product_id: item.id,
        quantity: item.quantity,
      })),
    };

    const updateData = {
      billing: {
        first_name: values.firstName,
        last_name: values.lastName,
        address_1: values.street,
        address_2: values.address,
        city: values.city,
        state: values.state,
        postcode: values.zip,
        country: values.country.value,
        email: values.email,
        phone: values.phone,
      },
    };

    try {
      if (currentUser) {
        const updateResponse = await fetch("/api/auth/update-user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateData),
        });

        if (!updateResponse.ok) {
          throw new Error("Failed to update user data");
        }

        const updatedUser = await updateResponse.json();
        setCurrentUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        //await refreshToken();
      }

      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        clearCart();
        router.push("/thankyou");
      } else {
        const errorData = await response.json();
        //alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      //alert("There was an error placing the order.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {isMounted && (
        <>
          {cart.length > 0 ? (
            <div>
              <section className="checkout-wrap">
                <div className="_container">
                  <div>
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={handleSubmit}
                    >
                      {({
                        isSubmitting,
                        setFieldValue,
                        status,
                        touched,
                        errors,
                        values,
                      }) => (
                        <Form>
                          <h2>Billing Information</h2>
                          <div className="billing-data">
                            <div>
                              <label>
                                <Field
                                  placeholder="First name"
                                  type="text"
                                  name="firstName"
                                  className={
                                    touched.firstName && errors.firstName
                                      ? "invalid"
                                      : ""
                                  }
                                />
                              </label>
                              <ErrorMessage
                                className="error"
                                name="firstName"
                                component="div"
                              />
                            </div>
                            <div>
                              <label>
                                <Field
                                  placeholder="Last name"
                                  type="text"
                                  name="lastName"
                                  className={
                                    touched.lastName && errors.lastName
                                      ? "invalid"
                                      : ""
                                  }
                                />
                              </label>
                              <ErrorMessage
                                className="error"
                                name="lastName"
                                component="div"
                              />
                            </div>
                            <div>
                              <label>
                                <Field
                                  placeholder="Email"
                                  type="email"
                                  name="email"
                                  className={
                                    touched.email && errors.email
                                      ? "invalid"
                                      : ""
                                  }
                                />
                              </label>
                              <ErrorMessage
                                className="error"
                                name="email"
                                component="div"
                              />
                            </div>
                            <div>
                              <label>
                                <Field
                                  placeholder="Phone"
                                  type="text"
                                  name="phone"
                                  className={
                                    touched.phone && errors.phone
                                      ? "invalid"
                                      : ""
                                  }
                                />
                              </label>
                              <ErrorMessage
                                className="error"
                                name="phone"
                                component="div"
                              />
                            </div>
                            <div>
                              <label>
                                <Field
                                  placeholder="Street"
                                  type="text"
                                  name="street"
                                  className={
                                    touched.street && errors.street
                                      ? "invalid"
                                      : ""
                                  }
                                />
                              </label>
                              <ErrorMessage
                                className="error"
                                name="street"
                                component="div"
                              />
                            </div>
                            <div>
                              <label>
                                <Field
                                  placeholder="Address"
                                  type="text"
                                  name="address"
                                  className={
                                    touched.address && errors.address
                                      ? "invalid"
                                      : ""
                                  }
                                />
                              </label>
                              <ErrorMessage
                                className="error"
                                name="address"
                                component="div"
                              />
                            </div>
                            <div>
                              <label>
                                <Field
                                  placeholder="City"
                                  type="text"
                                  name="city"
                                  className={
                                    touched.city && errors.city ? "invalid" : ""
                                  }
                                />
                              </label>
                              <ErrorMessage
                                className="error"
                                name="city"
                                component="div"
                              />
                            </div>
                            <div>
                              <label>
                                <Field
                                  placeholder="State/Province"
                                  type="text"
                                  name="state"
                                  className={
                                    touched.state && errors.state
                                      ? "invalid"
                                      : ""
                                  }
                                />
                              </label>
                              <ErrorMessage
                                className="error"
                                name="state"
                                component="div"
                              />
                            </div>
                            <div>
                              <label>
                                <Field
                                  placeholder="ZIP"
                                  type="text"
                                  name="zip"
                                  className={
                                    touched.zip && errors.zip ? "invalid" : ""
                                  }
                                />
                              </label>
                              <ErrorMessage
                                className="error"
                                name="zip"
                                component="div"
                              />
                            </div>
                            <div>
                              <Field name="country">
                                {({ field }) => (
                                  <Select
                                    {...field}
                                    options={countryList().getData()}
                                    styles={customStyles}
                                    className={`form-field ${
                                      touched.country && errors.country
                                        ? "invalid"
                                        : ""
                                    }`}
                                    value={countryList()
                                      .getData()
                                      .find(
                                        (option) =>
                                          option.value === values.country.value
                                      )}
                                    onChange={(option) => (
                                      console.log(option.value),
                                      setFieldValue("country", option.value)
                                    )}
                                  />
                                )}
                              </Field>
                              <ErrorMessage
                                name="country"
                                component="div"
                                className="error"
                              />
                            </div>
                          </div>

                          <h2>PAYMENT METHOD</h2>
                          <div className="payment">
                            <div>Bank Transfer*</div>
                            <p>
                              * You will soon receive an email with payment
                              instructions, including our bank details and a
                              summary of your order details.
                            </p>
                          </div>

                          <h2 className="total">Total: €{totalAmount}</h2>

                          <div className="place-order">
                            <div className="checkbox">
                              <Field
                                type="checkbox"
                                name="terms"
                                className={
                                  touched.terms && errors.terms ? "invalid" : ""
                                }
                                id="terms"
                              />
                              <label for="terms">
                                <CheckboxIcon />
                                <span>
                                  I have read and agree to the website's{" "}
                                  <Link href="/terms-and-conditions">
                                    Terms and Conditions
                                  </Link>
                                </span>
                              </label>
                              <ErrorMessage
                                name="terms"
                                component="div"
                                className="error"
                              />
                            </div>

                            <div className="checkbox">
                              <Field
                                type="checkbox"
                                name="refund"
                                className={
                                  touched.refund && errors.refund
                                    ? "invalid"
                                    : ""
                                }
                                id="refund"
                              />
                              <label for="refund">
                                <CheckboxIcon />
                                <span>
                                  I have read and agree to the{" "}
                                  <Link href="/refund-policy">
                                    Refund Policy
                                  </Link>
                                </span>
                              </label>
                              <ErrorMessage
                                name="refund"
                                component="div"
                                className="error"
                              />
                            </div>

                            <button
                              className="white-button"
                              type="submit"
                              disabled={isSubmitting}
                            >
                              Submit
                            </button>

                            <div className="privacy">
                              We will utilise your personal information to
                              process your order, improve your browsing
                              experience on our website, and perform other
                              purposes detailed in our{" "}
                              <Link href="/privacy-policy">Privacy Policy</Link>
                              .
                            </div>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </section>
            </div>
          ) : (
            <div>
              <section className="cart-wrap empty">
                <div className="_container">
                  <h1>Your cart is empty</h1>
                  <h2>
                    Discover our wide array of business and marketing consulting
                    services!
                  </h2>
                  <Link href="/" className="main-button">
                    <span>Go home</span>
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
