"use client";
import "@/styles/account.scss";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import countryList from "react-select-country-list";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import ChangePassword from "./ChangePassword";
import ButtonArrow from "@/icons/ButtonArrow";
import { useTranslations } from "next-intl";
import { excludedCountries } from "@/utils/excludedCountries";

const getCountryOptionByCode = (code) => {
  const countries = countryList().getData();
  return countries.find((country) => country.value === code);
};

const getFilteredCountries = () => {
  const countries = countryList().getData();
  return countries.filter(
    (country) => !excludedCountries.includes(country.value)
  );
};

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    width: "100%",
    color: "#1E1E1E",
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

const PersonalData = () => {
  const t = useTranslations("dashboard");
  const { currentUser, setCurrentUser, getToken } = useAuth();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [billingError, setBillingError] = useState("");
  const [billingSuccess, setBillingSuccess] = useState("");

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
    country: getCountryOptionByCode(currentUser?.country) || "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(
      t("PersonalData.validationSchema.required")
    ),
    lastName: Yup.string().required(
      t("PersonalData.validationSchema.required")
    ),
    email: Yup.string()
      .email(t("PersonalData.validationSchema.email"))
      .required(t("PersonalData.validationSchema.required")),
    phone: Yup.string().required(t("PersonalData.validationSchema.required")),
    street: Yup.string().required(t("PersonalData.validationSchema.required")),
    address: Yup.string(),
    city: Yup.string().required(t("PersonalData.validationSchema.required")),
    state: Yup.string(),
    zip: Yup.string().required(t("PersonalData.validationSchema.required")),
    country: Yup.object().required(t("PersonalData.validationSchema.required")),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const token = getToken(); // Get the JWT token for authentication

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
        country: values.country.value,
        userId: currentUser?.id,
      };

      const response = await fetch("/api/auth/user-update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include JWT in request
        },
        body: JSON.stringify(updateData), // Include userId
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setCurrentUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setBillingSuccess(t("PersonalData.success"));
        window.location.reload();
      } else {
        const errorData = await response.json();
        setBillingError(errorData.message);
      }
    } catch (error) {
      console.error("Failed to update user data", error);
      setBillingError(t("PersonalData.error"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="personal-data">
        <div className="_container">
          <h2>{t("PersonalData.title")}</h2>
          {isMounted && (
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, setFieldValue, touched, errors, values }) => (
                <Form>
                  <div className="billing-data">
                    <div>
                      <label>
                        <Field
                          placeholder={t("PersonalData.form.firstName")}
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
                          placeholder={t("PersonalData.form.lastName")}
                          type="text"
                          name="lastName"
                          className={
                            touched.lastName && errors.lastName ? "invalid" : ""
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
                          placeholder={t("PersonalData.form.email")}
                          type="email"
                          name="email"
                          className={
                            touched.email && errors.email ? "invalid" : ""
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
                          placeholder={t("PersonalData.form.phone")}
                          type="text"
                          name="phone"
                          className={
                            touched.phone && errors.phone ? "invalid" : ""
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
                          placeholder={t("PersonalData.form.street")}
                          type="text"
                          name="street"
                          className={
                            touched.street && errors.street ? "invalid" : ""
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
                          placeholder={t("PersonalData.form.address")}
                          type="text"
                          name="address"
                          className={
                            touched.address && errors.address ? "invalid" : ""
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
                          placeholder={t("PersonalData.form.city")}
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
                          placeholder={t("PersonalData.form.state")}
                          type="text"
                          name="state"
                          className={
                            touched.state && errors.state ? "invalid" : ""
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
                          placeholder={t("PersonalData.form.zip")}
                          type="text"
                          name="zip"
                          className={touched.zip && errors.zip ? "invalid" : ""}
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
                            placeholder={t("PersonalData.form.country")}
                            options={getFilteredCountries()}
                            styles={customStyles}
                            className={`form-field ${
                              touched.country && errors.country ? "invalid" : ""
                            }`}
                            value={countryList()
                              .getData()
                              .find(
                                (option) =>
                                  option.value === values.country.value
                              )}
                            onChange={(option) =>
                              setFieldValue("country", option)
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
                  </div>
                  <button
                    type="submit"
                    className="main-button"
                    disabled={isSubmitting}
                  >
                    <span>{t("PersonalData.form.button")}</span>
                    <ButtonArrow />
                  </button>
                </Form>
              )}
            </Formik>
          )}
        </div>
        {billingError && <div className="billing-error">{billingError}</div>}
        {billingSuccess && (
          <div className="billing-success">{billingSuccess}</div>
        )}
      </section>

      <ChangePassword />
    </>
  );
};

export default PersonalData;
