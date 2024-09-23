import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { usePopup } from "@/context/PopupsContext";
import Select from "react-select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ThanksPopup from "./ThanksPopup";
import ButtonArrow from "@/icons/ButtonArrow";
import CheckboxIcon from "@/icons/CheckboxIcon";
import Link from "next/link";

const ConnectForm = () => {
  const { setThanksPopupDisplay } = usePopup();

  const jobRoles = [
    { value: "Finance", label: "Finance & Accounting" },
    { value: "AdminSupport", label: "Administrative Support" },
    { value: "Marketing", label: "Marketing & Communications" },
    { value: "Engineering", label: "Engineering & Construction" },
    { value: "FoodBeverage", label: "Food & Beverage" },
    { value: "Healthcare", label: "Healthcare & Biotechnology" },
    { value: "Hospitality", label: "Hospitality & Tourism" },
    { value: "HumanResources", label: "Human Resources & Talent Management" },
    { value: "ITSoftware", label: "Information Technology & Software" },
    { value: "Sales", label: "Sales & Business Development" },
  ];

  const expertiseLevels = [
    { value: "EntryLevel", label: "Entry-Level" },
    { value: "MidLevel", label: "Mid-Level" },
    { value: "SeniorLevel", label: "Senior-Level" },
  ];

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string(),
    desiredRole: Yup.string(),
    sector: Yup.string(),
    coreCompetencies: Yup.string(),
    expertiseLevel: Yup.string(),
    salaryRange: Yup.string(),
    startDate: Yup.string(),
    workLocation: Yup.string(),
    linkedInProfile: Yup.string().url("Invalid URL"),
    additionalInfo: Yup.string(),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    desiredRole: "",
    sector: "",
    coreCompetencies: "",
    expertiseLevel: "",
    salaryRange: "",
    startDate: "",
    workLocation: "",
    linkedInProfile: "",
    resume: null,
    coverLetter: null,
    additionalInfo: "",
    terms: false,
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
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

    let coverLetterData = null;
    if (values.coverLetter) {
      coverLetterData = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const base64EncodedData = reader.result;
          resolve({
            base64: base64EncodedData.split(";base64,").pop(), // Get only the base64 part
            filename: values.coverLetter.name, // Get the filename
            mimetype: values.coverLetter.type, // Get the MIME type
          });
        };
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(values.coverLetter);
      });
    }

    const payload = {
      ...values,
      resume: resumeData,
      coverLetter: coverLetterData,
    };

    console.log("Form submitted successfully:", payload);
    setThanksPopupDisplay(true);
    setSubmitting(false);
    resetForm();
    setStatus({ success: true });

    try {
      console.log("Submitting form with values:", values);
      const response = await fetch("/api/emails/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      console.log("Response from server:", result);

      if (response.ok) {
        setTimeout(() => {
          console.log("Form submitted successfully:", payload);
          setThanksPopupDisplay(true);
          setSubmitting(false);
          resetForm();
          setStatus({ success: true });
        }, 400);
      } else {
        console.error("Error submitting form:", response.statusText);
        setStatus({ success: false });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({ success: false });
      setSubmitting(false);
    }
  };

  const customSelectStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      color: "#ffffff4d",
      height: "50px",
      borderRadius: "0",
      background: "#FFFFFF0D",
      border: state.isFocused ? "1px solid #FFFFFF1A" : "1px solid #FFFFFF1A",
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
      padding: "0px",
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

  return (
    <>
      <div className="request-form">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue, touched, errors, values }) => (
            <Form>
              <div>
                <Field
                  name="firstName"
                  type="text"
                  placeholder="First Name "
                  className={
                    touched.firstName && errors.firstName ? "invalid" : ""
                  }
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="error"
                />
              </div>

              <div>
                <Field
                  name="lastName"
                  type="text"
                  placeholder="Last Name "
                  className={
                    touched.lastName && errors.lastName ? "invalid" : ""
                  }
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="error"
                />
              </div>

              <div>
                <Field
                  name="email"
                  type="email"
                  placeholder="Email "
                  className={touched.email && errors.email ? "invalid" : ""}
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div>
                <PhoneInput
                  country={"us"}
                  value=""
                  placeholder="Phone Number "
                  onChange={(phone) => setFieldValue("phone", phone)}
                  className={touched.phone && errors.phone ? "invalid" : ""}
                />
                <ErrorMessage name="phone" component="div" className="error" />
              </div>

              <div className="full">
                <Field
                  name="desiredRole"
                  type="text"
                  placeholder="Desired Job Role "
                  className={
                    touched.desiredRole && errors.desiredRole ? "invalid" : ""
                  }
                />
                <ErrorMessage
                  name="desiredRole"
                  component="div"
                  className="error"
                />
              </div>

              <div>
                <Select
                  name="sector"
                  options={jobRoles}
                  styles={customSelectStyles}
                  onChange={(option) => setFieldValue("sector", option.value)}
                  placeholder="Sector of Interest"
                />
                <ErrorMessage name="sector" component="div" className="error" />
              </div>

              <div>
                <Select
                  name="expertiseLevel"
                  options={expertiseLevels}
                  styles={customSelectStyles}
                  onChange={(option) =>
                    setFieldValue("expertiseLevel", option.value)
                  }
                  placeholder="Level of Expertise"
                />
                <ErrorMessage
                  name="expertiseLevel"
                  component="div"
                  className="error"
                />
              </div>

              <div className="full">
                <Field
                  name="coreCompetencies"
                  type="text"
                  placeholder="Core Competencies "
                  className={
                    touched.coreCompetencies && errors.coreCompetencies
                      ? "invalid"
                      : ""
                  }
                />
                <ErrorMessage
                  name="coreCompetencies"
                  component="div"
                  className="error"
                />
              </div>

              <div>
                <Field
                  name="salaryRange"
                  type="text"
                  placeholder="Expected Salary Range "
                  className={
                    touched.salaryRange && errors.salaryRange ? "invalid" : ""
                  }
                />
                <ErrorMessage
                  name="salaryRange"
                  component="div"
                  className="error"
                />
              </div>

              <div>
                <Field
                  name="startDate"
                  type="text"
                  placeholder="Earliest Start Date "
                  className={
                    touched.startDate && errors.startDate ? "invalid" : ""
                  }
                />
                <ErrorMessage
                  name="startDate"
                  component="div"
                  className="error"
                />
              </div>

              <div>
                <Field
                  name="workLocation"
                  type="text"
                  placeholder="Preferred Work Location "
                  className={
                    touched.workLocation && errors.workLocation ? "invalid" : ""
                  }
                />
                <ErrorMessage
                  name="workLocation"
                  component="div"
                  className="error"
                />
              </div>

              <div>
                <Field
                  name="linkedInProfile"
                  type="url"
                  placeholder="LinkedIn Profile Link "
                  className={
                    touched.linkedInProfile && errors.linkedInProfile
                      ? "invalid"
                      : ""
                  }
                />
                <ErrorMessage
                  name="linkedInProfile"
                  component="div"
                  className="error"
                />
              </div>

              <div className="form-block">
                <div className="input-wrap file-wrap">
                  <span
                    className="upload-custom"
                    onClick={() => document.getElementById("resume").click()}
                  >
                    <span>
                      {values.resume ? values.resume.name : "Attach Resume"}
                    </span>
                    <img src="/images/upload.svg" />
                  </span>
                  <input
                    id="resume"
                    name="resume"
                    type="file"
                    onChange={(event) => {
                      setFieldValue("resume", event.currentTarget.files[0]);
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
                      document.getElementById("coverLetter").click()
                    }
                  >
                    <span>
                      {values.coverLetter
                        ? values.coverLetter.name
                        : "Cover Letter"}
                    </span>
                    <img src="/images/upload.svg" />
                  </span>
                  <input
                    id="coverLetter"
                    name="coverLetter"
                    type="file"
                    onChange={(event) => {
                      setFieldValue(
                        "coverLetter",
                        event.currentTarget.files[0]
                      );
                      console.log(event.currentTarget.files[0]);
                    }}
                    style={{ display: "none" }}
                  />
                  <ErrorMessage name="coverLetter" component="span" />
                </div>
              </div>

              <div className="full">
                <Field
                  name="additionalInfo"
                  as="textarea"
                  placeholder="Additional Information "
                  className={
                    touched.additionalInfo && errors.additionalInfo
                      ? "invalid"
                      : ""
                  }
                />
                <ErrorMessage
                  name="additionalInfo"
                  component="div"
                  className="error"
                />
              </div>

              <div className="checkbox">
                <Field
                  type="checkbox"
                  name="terms"
                  className={touched.terms && errors.terms ? "invalid" : ""}
                  id="terms"
                />
                <label htmlFor="terms">
                  <CheckboxIcon />
                  <span>
                    I have read and agree to the{" "}
                    <Link href="#">Terms of Use</Link> and{" "}
                    <Link href="#">Privacy Policy</Link>.
                  </span>
                </label>
                <ErrorMessage name="terms" component="div" className="error" />
              </div>

              <button
                type="submit"
                className="main-button"
                disabled={isSubmitting}
              >
                Submit
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
