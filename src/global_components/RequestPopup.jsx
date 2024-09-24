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

function RequestPopup() {
  const { requestPopupDisplay, setRequestPopupDisplay, serviceValue } =
    usePopup();

  const hrServices = [
    {
      value: "Contract Negotiation & Review",
      label: "Contract Negotiation & Review",
    },
    { value: "Performance Management", label: "Performance Management" },
    { value: "Legal HR Consultation", label: "Legal HR Consultation" },
    {
      value: "Workplace Conflict Resolution",
      label: "Workplace Conflict Resolution",
    },
    { value: "Leadership Coaching", label: "Leadership Coaching" },
    {
      value: "Compensation & Benefits Consultation",
      label: "Compensation & Benefits Consultation",
    },
    {
      value: "Exit Strategy & Career Transition Support",
      label: "Exit Strategy & Career Transition Support",
    },
    {
      value: "Work-Life Balance Strategies",
      label: "Work-Life Balance Strategies",
    },
    { value: "Onboarding Support", label: "Onboarding Support" },
    {
      value: "Talent Development & Skills Assessment",
      label: "Talent Development & Skills Assessment",
    },
    {
      value: "Diversity & Inclusion Consultation",
      label: "Diversity & Inclusion Consultation",
    },
    {
      value: "Remote Work & Flexibility Planning",
      label: "Remote Work & Flexibility Planning",
    },
    { value: "Career Path Planning", label: "Career Path Planning" },
    { value: "HR Policy Review", label: "HR Policy Review" },
    {
      value: "Personal Development Plans",
      label: "Personal Development Plans",
    },
    { value: "Conflict Mediation", label: "Conflict Mediation" },
    {
      value: "Job Role Analysis & Clarification",
      label: "Job Role Analysis & Clarification",
    },
    { value: "Employee Rights Advocacy", label: "Employee Rights Advocacy" },
    {
      value: "Workplace Culture & Adaptation",
      label: "Workplace Culture & Adaptation",
    },
    { value: "Mentorship Matching", label: "Mentorship Matching" },
    {
      value: "Workplace Wellness & Mental Health Support",
      label: "Workplace Wellness & Mental Health Support",
    },
  ];

  const employmentService = [
    { value: "Resume & CV Building", label: "Resume & CV Building" },
    { value: "Interview Preparation", label: "Interview Preparation" },
    { value: "Job Search Strategy", label: "Job Search Strategy" },
    {
      value: "LinkedIn Profile Optimization",
      label: "LinkedIn Profile Optimization",
    },
    { value: "Networking Strategy", label: "Networking Strategy" },
    { value: "Cover Letter Writing", label: "Cover Letter Writing" },
    {
      value: "Job Market Trends & Insights",
      label: "Job Market Trends & Insights",
    },
    {
      value: "Salary Negotiation Coaching",
      label: "Salary Negotiation Coaching",
    },
    { value: "Career Transition Support", label: "Career Transition Support" },
    {
      value: "Personal Branding Consultation",
      label: "Personal Branding Consultation",
    },
    {
      value: "Job Application Assistance",
      label: "Job Application Assistance",
    },
    {
      value: "Professional Portfolio Development",
      label: "Professional Portfolio Development",
    },
    {
      value: "Freelance & Contract Job Strategies",
      label: "Freelance & Contract Job Strategies",
    },
    {
      value: "Virtual Interview Coaching",
      label: "Virtual Interview Coaching",
    },
    {
      value: "Workplace Culture Fit Analysis",
      label: "Workplace Culture Fit Analysis",
    },
    {
      value: "Internship & Apprenticeship Search",
      label: "Internship & Apprenticeship Search",
    },
    { value: "Second Career Planning", label: "Second Career Planning" },
    {
      value: "Interview Follow-Up Strategy",
      label: "Interview Follow-Up Strategy",
    },
    {
      value: "Freelancer Profile Optimization",
      label: "Freelancer Profile Optimization",
    },
    { value: "Employment Law Advice", label: "Employment Law Advice" },
    { value: "Job Offer Evaluation", label: "Job Offer Evaluation" },
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
    fullName: Yup.string().required("This field is required."),
    email: Yup.string()
      .email("Please provide a correct email address.")
      .required("This field is required."),
    phone: Yup.string().required("This field is required."),
    service: Yup.string().required("This field is required."),
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
                        <h2>Ready to Transform Your Professional Journey?</h2>
                        <p>
                          Get started with our tailored {serviceValue} today.
                          Schedule a consultation and take the first step toward
                          achieving your career goals.
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
                            placeholder="Choose Service"
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

export default RequestPopup;
