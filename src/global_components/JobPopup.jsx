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
import { excludedCountries } from "@/utils/countries";

function JobPopup() {
  const t = useTranslations("careers");
  const { jobPopupDisplay, setJobPopupDisplay, jobValue } = usePopup();

  const validationSchema = Yup.object({
    fullName: Yup.string().required(t("JobPopup.validationSchema.required")),
    email: Yup.string()
      .email(t("JobPopup.validationSchema.email"))
      .required(t("JobPopup.validationSchema.required")),
    phone: Yup.string().required(t("JobPopup.validationSchema.required")),
    position: Yup.string().required(t("JobPopup.validationSchema.required")),
    message: Yup.string().optional(),
  });

  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    resume: null,
    portfolio: null,
  };

  const closePopup = (resetForm) => {
    setJobPopupDisplay(false);
    if (resetForm) {
      resetForm();
    }
  };

  const desiredPositions = [
    {
      value: t("JobPopup.desiredPositions.label1"),
      label: t("JobPopup.desiredPositions.label1"),
    },
    {
      value: t("JobPopup.desiredPositions.label2"),
      label: t("JobPopup.desiredPositions.label2"),
    },
    {
      value: t("JobPopup.desiredPositions.label3"),
      label: t("JobPopup.desiredPositions.label3"),
    },
    {
      value: t("JobPopup.desiredPositions.label4"),
      label: t("JobPopup.desiredPositions.label4"),
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

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    try {
      console.log("sending");
      let resumeData = null;
      if (values.resume) {
        resumeData = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            const base64EncodedData = reader.result;
            resolve({
              base64: base64EncodedData.split(";base64,").pop(), // Get only the base64 part
              filename: values.resume.name, // Get the filename
              mimetype: values.resume.type, // Get the MIME type
            });
          };
          reader.onerror = (error) => reject(error);
          reader.readAsDataURL(values.resume);
        });
      }

      let portfolioData = null;
      if (values.portfolio) {
        portfolioData = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            const base64EncodedData = reader.result;
            resolve({
              base64: base64EncodedData.split(";base64,").pop(), // Get only the base64 part
              filename: values.portfolio.name, // Get the filename
              mimetype: values.portfolio.type, // Get the MIME type
            });
          };
          reader.onerror = (error) => reject(error);
          reader.readAsDataURL(values.portfolio);
        });
      }

      const payload = {
        ...values,
        resume: resumeData,
        portfolio: portfolioData,
      };

      const response = await fetch("/api/emails/job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
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
    <div className={`order-popup-wrap ${jobPopupDisplay ? "opened" : ""}`}>
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
          values,
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
                      <div className="form-inner job">
                        <h2>{t("JobPopup.title")}</h2>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: t("JobPopup.subtitle"),
                          }}
                        />

                        <div>
                          <Field
                            name="fullName"
                            type="text"
                            placeholder={t("JobPopup.form.fullName")}
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
                          <Field
                            name="email"
                            type="email"
                            placeholder={t("JobPopup.form.email")}
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
                          <PhoneInput
                            country={"gb"}
                            value=""
                            placeholder={t("JobPopup.form.phone")}
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
                          <Select
                            name="position"
                            options={desiredPositions}
                            styles={customSelectStyles}
                            onChange={(option) =>
                              setFieldValue("position", option.value)
                            }
                            placeholder={t("JobPopup.form.position")}
                          />
                          <ErrorMessage
                            name="position"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div className="form-block">
                          <div className="input-wrap file-wrap">
                            <span
                              className="upload-custom"
                              onClick={() =>
                                document.getElementById("resume").click()
                              }
                            >
                              <span>
                                {values.resume
                                  ? values.resume.name
                                  : t("JobPopup.form.resume")}
                              </span>
                              <img src="/images/upload.svg" />
                            </span>
                            <input
                              id="resume"
                              name="resume"
                              type="file"
                              onChange={(event) => {
                                setFieldValue(
                                  "resume",
                                  event.currentTarget.files[0]
                                );
                              }}
                              style={{ display: "none" }}
                            />
                            <ErrorMessage name="resume" component="span" />
                          </div>
                        </div>

                        <div className="form-block">
                          <div className="input-wrap file-wrap">
                            <span
                              className="upload-custom"
                              onClick={() =>
                                document.getElementById("portfolio").click()
                              }
                            >
                              <span>
                                {values.portfolio
                                  ? values.portfolio.name
                                  : t("JobPopup.form.portfolio")}
                              </span>
                              <img src="/images/upload.svg" />
                            </span>
                            <input
                              id="portfolio"
                              name="portfolio"
                              type="file"
                              onChange={(event) => {
                                setFieldValue(
                                  "portfolio",
                                  event.currentTarget.files[0]
                                );
                              }}
                              style={{ display: "none" }}
                            />
                            <ErrorMessage name="portfolio" component="span" />
                          </div>
                        </div>

                        <div className="full">
                          <Field
                            name="message"
                            type="text"
                            placeholder={t("JobPopup.form.message")}
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
                          <span>{t("JobPopup.form.send")}</span>
                          <ButtonArrow />
                        </button>
                      </div>
                    )}
                    {status && status.success && (
                      <div className="success">
                        <h3>{t("JobPopup.thanks.title")}</h3>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: t("JobPopup.thanks.text"),
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

export default JobPopup;
