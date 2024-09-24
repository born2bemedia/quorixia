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

function JobPopup() {
  const { jobPopupDisplay, setJobPopupDisplay, jobValue } = usePopup();

  const validationSchema = Yup.object({
    fullName: Yup.string().required("This field is required."),
    email: Yup.string()
      .email("Please provide a correct email address.")
      .required("This field is required."),
    phone: Yup.string().required("This field is required."),
    position: Yup.string().required("This field is required."),
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
    { value: "HR Consultant", label: "HR Consultant" },
    {
      value: "Digital Marketing Specialist",
      label: "Digital Marketing Specialist",
    },
    { value: "Career Coach", label: "Career Coach" },
    {
      value: "Client Relationship Manager",
      label: "Client Relationship Manager",
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
      console.log(JSON.stringify(payload));
      if (response.ok) {
        setTimeout(() => {
          console.log(JSON.stringify(payload, null, 2));
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
                        <h2>Application form</h2>
                        <p>
                          Ready to join the Quorixia crew?
                          <br />
                          Fill out the form below to submit your application!
                        </p>

                        <div>
                          <Field
                            name="fullName"
                            type="text"
                            placeholder={"Full Name "}
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
                            placeholder={"Email"}
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
                            country={"us"}
                            value=""
                            placeholder="Phone Number "
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
                          <Select
                            name="position"
                            options={desiredPositions}
                            styles={customSelectStyles}
                            onChange={(option) =>
                              setFieldValue("position", option.value)
                            }
                            placeholder="Choose Service"
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
                                  : "Attach Resume"}
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
                                console.log(event.currentTarget.files[0]);
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
                                  : "Cover Letter"}
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
                                console.log(event.currentTarget.files[0]);
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
                            placeholder="Your Message"
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
                          <span>Send</span>
                          <ButtonArrow />
                        </button>
                      </div>
                    )}
                    {status && status.success && (
                      <div className="success">
                        <h3>THANK YOU!</h3>
                        <p>
                          Your request has been received successfully!
                          <br />
                          One of our team members will get in touch with you
                          shortly.
                        </p>
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
