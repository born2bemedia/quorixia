import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { usePopup } from "@/context/PopupsContext";
import ButtonArrow from "@/icons/ButtonArrow";
import Select from "react-select";
import ThanksPopup from "./ThanksPopup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ConnectForm = () => {
  const { setThanksPopupDisplay } = usePopup();

  const contactMethods = [
    { value: "Email", label: "Email" },
    { value: "Phone", label: "Phone" },
    { value: "Other", label: "Other" },
  ];

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

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    company: Yup.string(),
    description: Yup.string(),
    goals: Yup.string(),
    time: Yup.string().required("Preferred Contact Time is required"),
    timeline: Yup.string().required("Project Timeline is required"),
    budget: Yup.string().required("Budget Range is required"),
    additional: Yup.string(),
    method: Yup.string().required("Contact Method is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    company: "",
    description: "",
    goals: "",
    time: "",
    timeline: "",
    budget: "",
    additional: "",
    method: "",
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    try {
      console.log("Submitting form with values:", values); // Added logging
      const response = await fetch("/api/emails/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = await response.json(); // Await response.json() to log it

      console.log("Response from server:", result); // Log server response

      if (response.ok) {
        setTimeout(() => {
          console.log("Form submitted successfully:", values); // Added logging
          setThanksPopupDisplay(true);
          setSubmitting(false);
          resetForm();
          setStatus({ success: true });
        }, 400);
      } else {
        console.error("Error submitting form:", response.statusText); // Added logging
        setStatus({ success: false });
      }
    } catch (error) {
      console.error("Error submitting form:", error); // Added logging
      setStatus({ success: false });
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="request-form">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue, touched, errors }) => (
            <Form>
              <div>
                <Field
                  name="name"
                  type="text"
                  placeholder="Name"
                  className={touched.name && errors.name ? "invalid" : ""}
                />
                <ErrorMessage name="name" component="div" className="error" />
              </div>

              <div>
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  className={touched.email && errors.email ? "invalid" : ""}
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div>
                <Field
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  className={touched.phone && errors.phone ? "invalid" : ""}
                />
                <ErrorMessage name="phone" component="div" className="error" />
              </div>

              <div>
                <Field
                  name="company"
                  type="text"
                  placeholder="Company Name"
                  className={touched.company && errors.company ? "invalid" : ""}
                />
                <ErrorMessage
                  name="company"
                  component="div"
                  className="error"
                />
              </div>

              <div className="full">
                <Field
                  name="description"
                  as="textarea"
                  placeholder="Project/Business Description"
                  className={
                    touched.description && errors.description ? "invalid" : ""
                  }
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="error"
                />
              </div>

              <div className="full">
                <Field
                  name="goals"
                  as="textarea"
                  placeholder="Goals and Objectives"
                  className={touched.goals && errors.goals ? "invalid" : ""}
                />
                <ErrorMessage name="goals" component="div" className="error" />
              </div>

              <div className="full">
                <Select
                  name="method"
                  options={contactMethods}
                  styles={customStyles}
                  className={`form-field ${
                    touched.method && errors.method ? "invalid" : ""
                  }`}
                  onChange={(option) => setFieldValue("method", option.value)}
                  placeholder="Preferred Contact Method"
                />
                <ErrorMessage name="method" component="div" className="error" />
              </div>

              <div>
                <Field
                  name="time"
                  type="text"
                  placeholder="Preferred Contact Time"
                  className={touched.time && errors.time ? "invalid" : ""}
                />
                <ErrorMessage name="time" component="div" className="error" />
              </div>

              <div>
                <Field
                  name="timeline"
                  type="text"
                  placeholder="Project Timeline"
                  className={
                    touched.timeline && errors.timeline ? "invalid" : ""
                  }
                />
                <ErrorMessage
                  name="timeline"
                  component="div"
                  className="error"
                />
              </div>

              <div>
                <Field
                  name="budget"
                  type="text"
                  placeholder="Budget Range"
                  className={touched.budget && errors.budget ? "invalid" : ""}
                />
                <ErrorMessage name="budget" component="div" className="error" />
              </div>

              <div>
                <Field
                  name="additional"
                  type="text"
                  placeholder="Additional Information"
                  className={
                    touched.additional && errors.additional ? "invalid" : ""
                  }
                />
                <ErrorMessage
                  name="additional"
                  component="div"
                  className="error"
                />
              </div>

              <button
                type="submit"
                className="main-button"
                disabled={isSubmitting}
              >
                <span>Submit inquiry</span>
                <ButtonArrow />
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <ThanksPopup />
    </>
  );
};

export default ConnectForm;
