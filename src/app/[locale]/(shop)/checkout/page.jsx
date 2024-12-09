"use client";
import "@/styles/cart.scss";
import React, { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DeleteIcon from "@/icons/DeleteIcon";
import { Link } from "@/navigation";
import CheckboxIcon from "@/icons/CheckboxIcon";
import Select from "react-select";
import countryList from "react-select-country-list";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import ButtonArrow from "@/icons/ButtonArrow";
import axiosClient from "@/utils/GlobalApi";
import { createOrder } from "@/app/[locale]/api/orders";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useTranslations } from "next-intl";

const getCountryOptionByCode = (code) => {
  const countries = countryList().getData();
  return countries.find((country) => country.value === code);
};

const excludeCountries = [
  "IL", // Israel
  "US", // United States of America
  "AL", // Albania
  "BB", // Barbados
  "BA", // Bosnia and Herzegovina
  "GY", // Guyana
  "JM", // Jamaica
  "LA", // Laos (Lao)
  "MU", // Mauritius
  "MM", // Myanmar
  "NI", // Nicaragua
  "UG", // Uganda
  "VU", // Vanuatu
  "AF", // Afghanistan
  "BS", // Bahamas
  "BW", // Botswana
  "KH", // Cambodia
  "ET", // Ethiopia
  "GH", // Ghana
  "IS", // Iceland
  "IQ", // Iraq
  "MN", // Mongolia
  "PK", // Pakistan
  "PA", // Panama
  "LK", // Sri Lanka
  "TT", // Trinidad and Tobago
  "TN", // Tunisia
  "VI", // U.S. Virgin Islands
  "YE", // Yemen
  "ZW", // Zimbabwe
  "RU", // Russia
  "BY", // Belarus
  "CU", // Cuba
  "KP", // North Korea
  "SD", // Sudan
  "SY", // Syria
  "DZ", // Algeria
  "BD", // Bangladesh
  "BO", // Bolivia
  "CN", // China
  "KG", // Kyrgyzstan
  "MK", // North Macedonia
  "NP", // Nepal
  "NG", // Nigeria
  "TH", // Thailand
  "KR", // South Korea
  "SO", // Somalia
  "VN", // Vietnam
  "CO", // Colombia
  "EC", // Ecuador
  "ID", // Indonesia
  "JO", // Jordan
  "MA", // Morocco
  "SA", // Saudi Arabia
  "TW", // Taiwan
];

const allCountries = countryList().getData();
const filteredCountries = allCountries.filter(
  (country) => !excludeCountries.includes(country.value)
);


const customStyles = {
  control: (provided, state) => ({
    ...provided,
    width: "100%",
    color: "#ffffff4d",
    height: "50px",
    borderRadius: "0",
    background: "#0000000D",
    border: state.isFocused ? "1px solid #00000033" : "1px solid #00000033",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "1.2",
    textAlign: "left",
    padding: "0 20px",
    boxShadow: "unset",
    "&:hover": {
      borderColor: "#00000033",
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
    color: "#1E1E1E",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#1E1E1E",
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
    background: state.isSelected ? "#F2F2F2" : "#F2F2F2",
    color: "#1E1E1E",
    "&:hover": {
      background: "#A225EE",
      color: "#ffffff",
    },
  }),
};

const CartPage = () => {
  const t = useTranslations("checkout");
  const tC = useTranslations("cart");
  const { cart, deleteFromCart, clearCart, totalAmount } = useCart();
  const [isMounted, setIsMounted] = useState(false);
  const { currentUser, setCurrentUser, getToken } = useAuth();
  const router = useRouter();

  console.log(getCountryOptionByCode(currentUser?.country));

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const initialValues = {
    firstName: currentUser?.firstName || "",
    lastName: currentUser?.lastName || "",
    email: currentUser?.email || "",
    phone: currentUser?.phone || "",
    street: currentUser?.street || "",
    address: currentUser?.address || "",
    city: currentUser?.city || "",
    state: currentUser?.state || "",
    zip: currentUser?.zip || "",
    country: getCountryOptionByCode(currentUser?.country) || null,
    terms: false,
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(t("validationSchema.required")),
    lastName: Yup.string().required(t("validationSchema.required")),
    email: Yup.string()
      .email(t("validationSchema.email"))
      .required(t("validationSchema.required")),
    phone: Yup.string().required(t("validationSchema.required")),
    street: Yup.string().required(t("validationSchema.required")),
    address: Yup.string().required(t("validationSchema.required")),
    city: Yup.string().required(t("validationSchema.required")),
    state: Yup.string().required(t("validationSchema.required")),
    zip: Yup.string().required(t("validationSchema.required")),
    country: Yup.string().required(t("validationSchema.required")),
    terms: Yup.bool().oneOf([true], t("validationSchema.terms")),
  });

  const generateRandomPassword = (length = 12) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    return password;
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      let userId = currentUser?.id;
      if (!userId) {
        // Register a new user if they do not exist
        const registerData = {
          email: values.email,
          password: generateRandomPassword(), // Use a default or generated password here
          firstName: values.firstName,
          lastName: values.lastName,
          username: values.email,
          phone: values.phone,
        };

        const registerResponse = await fetch("/api/auth/sign-up", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registerData),
        });

        if (registerResponse.ok) {
          const registerResult = await registerResponse.json();
          userId = registerResult.user.id;
          setCurrentUser(registerResult.user); // Update current user context
          localStorage.setItem("user", JSON.stringify(registerResult.user));
          newOrder(values, userId);
          try {
            const response = await fetch("/api/emails/sign-up", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(registerData),
            });
            if (response.ok) {
              setTimeout(() => {}, 400);
            }
          } catch (error) {
            console.error(error);
          }
        } else {
          throw new Error("User registration failed.");
        }
      } else {
        // Update existing user information
        const updateData = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phone: values.phone,
          street: values.street,
          address: values.address,
          city: values.city,
          state: values.state,
          zip: values.zip,
          country: values.country,
          userId,
        };

        const token = getToken();

        const updateResponse = await fetch("/api/auth/user-update", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updateData),
        });

        if (!updateResponse.ok) {
          throw new Error("Failed to update user data.");
        }

        const updatedUser = await updateResponse.json();
        setCurrentUser(updatedUser.user);
        localStorage.setItem("user", JSON.stringify(updatedUser.user));
        newOrder(values, currentUser.id);
      }

      const productTitles = cart.map((product) => product.attributes.title);
      // Prepare order data for email
      const emailOrderData = {
        fullName: `${values.firstName} ${values.lastName}`,
        email: values.email,
        phone: values.phone,
        service: "Order", // Assuming you want to pass a service type
        message: "Your order details",
        cart, // Pass the cart items to the email endpoint
        totalAmount, // Include total amount in the email
      };

      try {
        const response = await fetch("/api/emails/order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailOrderData),
        });
        if (response.ok) {
          setTimeout(() => {
            console.log(JSON.stringify(emailOrderData, null, 2));
          }, 400);
        } else {
          setStatus({ success: false });
        }
      } catch (error) {
        console.error(error);
        setStatus({ success: false });
        setSubmitting(false);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const newOrder = (values, id) => {
    const productIds = cart.map((product) => product.id); // Proper use of map to transform cart items into an array of IDs

    const orderData = {
      data: {
        email: values.email, // Include email
        users_permissions_user: id,
        products: productIds, // Use the transformed array
        amount: totalAmount,
        status: "completed",
      },
    };

    createOrder(orderData).then((response) => {
      if (response.status === 200) {
        router.push("/thankyou");
        setTimeout(() => {
          clearCart();
        }, 2000);
      } else {
        console.error("Order creation failed:", response);
      }
    });
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
                          <h2>{t("pageTitle")}</h2>
                          <div className="billing-data">
                            <div>
                              <label>
                                <Field
                                  placeholder={t("form.firstName")}
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
                                  placeholder={t("form.lastName")}
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
                                  placeholder={t("form.email")}
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
                              <PhoneInput
                                country={"gb"}
                                value={
                                  currentUser?.phone ? currentUser?.phone : ""
                                }
                                placeholder={t("form.phone")}
                                onChange={(phone) =>
                                  setFieldValue("phone", phone)
                                }
                                className={
                                  touched.phone && errors.phone ? "invalid" : ""
                                }
                                excludeCountries={[
                                  "il", // Israel
                                  "us", // United States of America
                                  "al", // Albania
                                  "bb", // Barbados
                                  "ba", // Bosnia and Herzegovina
                                  "gy", // Guyana
                                  "jm", // Jamaica
                                  "la", // Laos (Lao)
                                  "mu", // Mauritius
                                  "mm", // Myanmar
                                  "ni", // Nicaragua
                                  "ug", // Uganda
                                  "vu", // Vanuatu
                                  "af", // Afghanistan
                                  "bs", // Bahamas
                                  "bw", // Botswana
                                  "kh", // Cambodia
                                  "et", // Ethiopia
                                  "gh", // Ghana
                                  "is", // Iceland
                                  "iq", // Iraq
                                  "mn", // Mongolia
                                  "pk", // Pakistan
                                  "pa", // Panama
                                  "lk", // Sri Lanka
                                  "tt", // Trinidad and Tobago
                                  "tn", // Tunisia
                                  "vi", // U.S. Virgin Islands
                                  "ye", // Yemen
                                  "zw", // Zimbabwe
                                  "ru", // Russia
                                  "by", // Belarus
                                  "cu", // Cuba
                                  "kp", // North Korea
                                  "sd", // Sudan
                                  "sy", // Syria (Syrian Arab Republic)
                                  "dz", // Algeria
                                  "bd", // Bangladesh
                                  "bo", // Bolivia
                                  "cn", // China
                                  "kg", // Kyrgyzstan
                                  "mk", // North Macedonia (Macedonia)
                                  "np", // Nepal
                                  "ng", // Nigeria
                                  "th", // Thailand
                                  "kr", // South Korea (Republic of Korea)
                                  "so", // Somalia
                                  "vn", // Vietnam
                                  "co", // Colombia
                                  "ec", // Ecuador
                                  "id", // Indonesia
                                  "jo", // Jordan
                                  "ma", // Morocco
                                  "sa", // Saudi Arabia
                                  "tw", // Taiwan
                                ]}
                              />
                              <ErrorMessage
                                name="phone"
                                component="div"
                                className="error"
                              />
                            </div>
                            <div>
                              <label>
                                <Field
                                  placeholder={t("form.street")}
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
                                  placeholder={t("form.address")}
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
                                  placeholder={t("form.city")}
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
                                  placeholder={t("form.state")}
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
                                  placeholder={t("form.zip")}
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
                                    placeholder={t("form.country")}
                                    options={filteredCountries}
                                    styles={customStyles}
                                    className={`form-field ${
                                      touched.country && errors.country
                                        ? "invalid"
                                        : ""
                                    }`}
                                    value={values.country?.value}
                                    onChange={(option) =>
                                      setFieldValue("country", option.value)
                                    }
                                  />
                                )}
                              </Field>
                              <ErrorMessage
                                name="country"
                                component="div"
                                className="error"
                              />
                            </div>
                            <div className="full">
                              <p>{t("countryDescription")}</p>
                            </div>
                          </div>

                          <h2>{t("payment.title")}</h2>
                          <div className="payment">
                            <div>{t("payment.name")}</div>
                            <p>{t("payment.text")}</p>
                          </div>

                          <h2 className="total">
                            {t("total")}: €{totalAmount}
                          </h2>

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
                                  {t("terms.text")}{" "}
                                  <Link href="/terms-and-conditions">
                                    {t("terms.name")}
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
                                  {t("refund.text")}{" "}
                                  <Link href="/refund-policy">
                                    {t("refund.name")}
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
                              className="main-button"
                              type="submit"
                              disabled={isSubmitting}
                            >
                              <span>{t("submit")}</span>
                              <ButtonArrow />
                            </button>

                            <div className="privacy">
                              {t("privacy.text")}{" "}
                              <Link href="/privacy-policy">
                                {" "}
                                {t("privacy.name")}
                              </Link>
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
                  <h1>{tC("empty.title")}</h1>
                  <h2 dangerouslySetInnerHTML={{ __html: tC("empty.text") }} />
                  <Link href="/" className="main-button">
                    <span>{tC("empty.button")}</span>
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
