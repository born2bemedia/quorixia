"use client";
import React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  useField,
  useFormikContext,
} from "formik";
import * as Yup from "yup";
import { usePopup } from "@/context/PopupsContext";
import ButtonArrow from "@/icons/ButtonArrow";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useTranslations } from "next-intl";
import { excludedCountries } from "@/utils/countries";

function OrderPopup() {
  const t = useTranslations("pricing");
  const { orderPopupDisplay, setOrderPopupDisplay, serviceValue } = usePopup();

  const validationSchema = Yup.object({
    fullName: Yup.string().required(t("OrderPopup.validationSchema.required")),
    email: Yup.string()
      .email(t("OrderPopup.validationSchema.email"))
      .required(t("OrderPopup.validationSchema.required")),
    phone: Yup.string().required(t("OrderPopup.validationSchema.required")),
    service: Yup.string().required(t("OrderPopup.validationSchema.required")),
  });

  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    service: serviceValue,
    message: "",
  };

  const closePopup = (resetForm) => {
    setOrderPopupDisplay(false);
    if (resetForm) {
      resetForm();
    }
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    try {
      const response = await fetch("/api/emails/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        setTimeout(() => {
          setSubmitting(false);
          resetForm();
          setStatus({ success: true });
        }, 400);
      } else {
        setStatus({ success: false });
      }
    } catch (error) {
      console.error(error);
      setStatus({ success: false });
      setSubmitting(false);
    }
  };

  return (
    <div className={`order-popup-wrap ${orderPopupDisplay ? "opened" : ""}`}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ isSubmitting, status, touched, errors, resetForm }) => (
          <div>
            <div
              className="overlay"
              onClick={() => closePopup(resetForm)}
            ></div>
            <div className="popup-inner">
              <svg
                className="popup-close"
                onClick={() => closePopup(resetForm)}
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 18.5L2 2.5M18 2.5L2 18.5"
                  stroke="#1E1E1E"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
              <div>
                <div className="form-wrap">
                  <Form>
                    {!status && (
                      <div className="form-inner">
                        <h2>{t("OrderPopup.title")}</h2>
                        <p>{t("OrderPopup.text")}</p>

                        <span className="service">{serviceValue}</span>

                        <Field type="hidden" name="service" />
                        <div>
                          <Field
                            name="fullName"
                            type="text"
                            placeholder={t("OrderPopup.form.fullName")}
                            className={
                              touched.fullName && errors.fullName
                                ? "invalid"
                                : ""
                            }
                          />
                          <ErrorMessage
                            name="fullName"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div>
                          <PhoneInput
                            country={"gb"}
                            value=""
                            placeholder={t("OrderPopup.form.phone")}
                            onChange={(phone) => setFieldValue("phone", phone)}
                            className={
                              touched.phone && errors.phone ? "invalid" : ""
                            }
                            excludeCountries={excludedCountries}
                          />
                          <ErrorMessage
                            name="phone"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div>
                          <Field
                            name="email"
                            type="email"
                            placeholder={t("OrderPopup.form.email")}
                            className={
                              touched.email && errors.email ? "invalid" : ""
                            }
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div>
                          <Field
                            name="message"
                            type="text"
                            placeholder={t("OrderPopup.form.message")}
                            className={
                              touched.message && errors.message ? "invalid" : ""
                            }
                          />
                          <ErrorMessage
                            name="message"
                            component="div"
                            className="error"
                          />
                        </div>

                        <button
                          type="submit"
                          className="main-button"
                          disabled={isSubmitting}
                        >
                          <span>{t("OrderPopup.form.send")}</span>
                          <ButtonArrow />
                        </button>
                      </div>
                    )}
                    {status && status.success && (
                      <div className="success">
                        <h3>{t("OrderPopup.thanks.title")}</h3>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: t("OrderPopup.thanks.text"),
                          }}
                        />
                      </div>
                    )}
                  </Form>
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default OrderPopup;
