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
import Select from "react-select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useTranslations } from "next-intl";

function RequestPopup() {
  const t = useTranslations("request_popup");
  const { requestPopupDisplay, setRequestPopupDisplay, serviceValue } =
    usePopup();

  const hrServices = [
    { value: t("hrServices.label1"), label: t("hrServices.label1") },
    { value: t("hrServices.label2"), label: t("hrServices.label2") },
    { value: t("hrServices.label3"), label: t("hrServices.label3") },
    { value: t("hrServices.label4"), label: t("hrServices.label4") },
    { value: t("hrServices.label5"), label: t("hrServices.label5") },
    { value: t("hrServices.label6"), label: t("hrServices.label6") },
    { value: t("hrServices.label7"), label: t("hrServices.label7") },
    { value: t("hrServices.label8"), label: t("hrServices.label8") },
    { value: t("hrServices.label9"), label: t("hrServices.label9") },
    { value: t("hrServices.label10"), label: t("hrServices.label10") },
    { value: t("hrServices.label11"), label: t("hrServices.label11") },
    { value: t("hrServices.label12"), label: t("hrServices.label12") },
    { value: t("hrServices.label13"), label: t("hrServices.label13") },
    { value: t("hrServices.label14"), label: t("hrServices.label14") },
    { value: t("hrServices.label15"), label: t("hrServices.label15") },
    { value: t("hrServices.label16"), label: t("hrServices.label16") },
    { value: t("hrServices.label17"), label: t("hrServices.label17") },
    { value: t("hrServices.label18"), label: t("hrServices.label18") },
    { value: t("hrServices.label19"), label: t("hrServices.label19") },
    { value: t("hrServices.label20"), label: t("hrServices.label20") },
    { value: t("hrServices.label21"), label: t("hrServices.label21") },
  ];

  const employmentService = [
    {
      value: t("employmentService.label1"),
      label: t("employmentService.label1"),
    },
    {
      value: t("employmentService.label2"),
      label: t("employmentService.label2"),
    },
    {
      value: t("employmentService.label3"),
      label: t("employmentService.label3"),
    },
    {
      value: t("employmentService.label4"),
      label: t("employmentService.label4"),
    },
    {
      value: t("employmentService.label5"),
      label: t("employmentService.label5"),
    },
    {
      value: t("employmentService.label6"),
      label: t("employmentService.label6"),
    },
    {
      value: t("employmentService.label7"),
      label: t("employmentService.label7"),
    },
    {
      value: t("employmentService.label8"),
      label: t("employmentService.label8"),
    },
    {
      value: t("employmentService.label9"),
      label: t("employmentService.label9"),
    },
    {
      value: t("employmentService.label10"),
      label: t("employmentService.label10"),
    },
    {
      value: t("employmentService.label11"),
      label: t("employmentService.label11"),
    },
    {
      value: t("employmentService.label12"),
      label: t("employmentService.label12"),
    },
    {
      value: t("employmentService.label13"),
      label: t("employmentService.label13"),
    },
    {
      value: t("employmentService.label14"),
      label: t("employmentService.label14"),
    },
    {
      value: t("employmentService.label15"),
      label: t("employmentService.label15"),
    },
    {
      value: t("employmentService.label16"),
      label: t("employmentService.label16"),
    },
    {
      value: t("employmentService.label17"),
      label: t("employmentService.label17"),
    },
    {
      value: t("employmentService.label18"),
      label: t("employmentService.label18"),
    },
    {
      value: t("employmentService.label19"),
      label: t("employmentService.label19"),
    },
    {
      value: t("employmentService.label20"),
      label: t("employmentService.label20"),
    },
    {
      value: t("employmentService.label21"),
      label: t("employmentService.label21"),
    },
  ];

  const customSelectStyles = {
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
      padding: "0px",
    }),
    menu: (provided) => ({
      ...provided,
      background: "#F2F2F2",
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

  const validationSchema = Yup.object({
    fullName: Yup.string().required(t("validationSchema.required")),
    email: Yup.string()
      .email(t("validationSchema.email"))
      .required(t("validationSchema.required")),
    phone: Yup.string().required(t("validationSchema.required")),
    service: Yup.string().required(t("validationSchema.required")),
  });

  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  };

  const closePopup = (resetForm) => {
    setRequestPopupDisplay(false);
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
    <div className={`order-popup-wrap ${requestPopupDisplay ? "opened" : ""}`}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({
          isSubmitting,
          status,
          touched,
          errors,
          resetForm,
          setFieldValue,
        }) => (
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
                        <h2>{t("title")}</h2>
                        <p>
                          {t("text1")} {serviceValue} {t("text2")}
                        </p>

                        <span className="service">{serviceValue}</span>

                        <div className="full">
                          <Select
                            name="service"
                            options={
                              serviceValue == "HR Service"
                                ? hrServices
                                : employmentService
                            }
                            styles={customSelectStyles}
                            onChange={(option) =>
                              setFieldValue("service", option.value)
                            }
                            placeholder={t("form.service")}
                          />
                          <ErrorMessage
                            name="service"
                            component="div"
                            className="error"
                          />
                        </div>
                        <div>
                          <Field
                            name="fullName"
                            type="text"
                            placeholder={t("form.fullName")}
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
                            country={"us"}
                            value=""
                            placeholder={t("form.phone")}
                            onChange={(phone) => setFieldValue("phone", phone)}
                            className={
                              touched.phone && errors.phone ? "invalid" : ""
                            }
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
                            placeholder={t("form.email")}
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
                            placeholder={t("form.message")}
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
                          <span>{t("form.send")}</span>
                          <ButtonArrow />
                        </button>
                      </div>
                    )}
                    {status && status.success && (
                      <div className="success">
                        <h3>{t("thanks.title")}</h3>
                        <p
                          dangerouslySetInnerHTML={{ __html: t("thanks.text") }}
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

export default RequestPopup;
