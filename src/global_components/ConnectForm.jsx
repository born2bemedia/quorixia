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
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

const ConnectForm = () => {
  const t = useTranslations("connect_form");
  const { setThanksPopupDisplay } = usePopup();

  const jobRoles = [
    { value: "Finance", label: t("jobRole.label1") },
    { value: "AdminSupport", label: t("jobRole.label2") },
    { value: "Marketing", label: t("jobRole.label3") },
    { value: "Engineering", label: t("jobRole.label4") },
    { value: "FoodBeverage", label: t("jobRole.label5") },
    { value: "Healthcare", label: t("jobRole.label6") },
    { value: "Hospitality", label: t("jobRole.label7") },
    { value: "HumanResources", label: t("jobRole.label8") },
    { value: "ITSoftware", label: t("jobRole.label9") },
    { value: "Sales", label: t("jobRole.label10") },
  ];

  const expertiseLevels = [
    { value: "EntryLevel", label: t("expertiseLevel.label1") },
    { value: "MidLevel", label: t("expertiseLevel.label2") },
    { value: "SeniorLevel", label: t("expertiseLevel.label3") },
  ];

  const validationSchema = Yup.object({
    firstName: Yup.string().required(t("validationSchema.firstName")),
    lastName: Yup.string().required(t("validationSchema.lastName")),
    email: Yup.string()
      .email(t("validationSchema.invalidEmail"))
      .required(t("validationSchema.requiredEmail")),
    phone: Yup.string(),
    desiredRole: Yup.string(),
    sector: Yup.string(),
    coreCompetencies: Yup.string(),
    expertiseLevel: Yup.string(),
    salaryRange: Yup.string(),
    startDate: Yup.string(),
    workLocation: Yup.string(),
    linkedInProfile: Yup.string().url(t("validationSchema.invalidURL")),
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

    setThanksPopupDisplay(true);
    setSubmitting(false);
    resetForm();
    setStatus({ success: true });

    try {
      const response = await fetch("/api/emails/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        setTimeout(() => {
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
                  placeholder={t("formFields.firstName")}
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
                  placeholder={t("formFields.lastName")}
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
                  placeholder={t("formFields.email")}
                  className={touched.email && errors.email ? "invalid" : ""}
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div>
                <PhoneInput
                  country={"gb"}
                  value=""
                  placeholder={t("formFields.phone")}
                  onChange={(phone) => setFieldValue("phone", phone)}
                  className={touched.phone && errors.phone ? "invalid" : ""}
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
                <ErrorMessage name="phone" component="div" className="error" />
              </div>

              <div className="full">
                <Field
                  name="desiredRole"
                  type="text"
                  placeholder={t("formFields.desiredRole")}
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
                  placeholder={t("formFields.sector")}
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
                  placeholder={t("formFields.expertiseLevel")}
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
                  placeholder={t("formFields.coreCompetencies")}
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
                  placeholder={t("formFields.salaryRange")}
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
                  placeholder={t("formFields.startDate")}
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
                  placeholder={t("formFields.workLocation")}
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
                  placeholder={t("formFields.linkedInProfile")}
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
                      {values.resume
                        ? values.resume.name
                        : t("formFields.resume")}
                    </span>
                    <img src="/images/upload.svg" alt="upload" />
                  </span>
                  <input
                    id="resume"
                    name="resume"
                    type="file"
                    onChange={(event) => {
                      setFieldValue("resume", event.currentTarget.files[0]);
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
                        : t("formFields.coverLetter")}
                    </span>
                    <img src="/images/upload.svg" alt="upload" />
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
                  placeholder={t("formFields.additionalInfo")}
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
                    {t("formFields.terms1")}{" "}
                    <Link href="#">{t("formFields.terms2")}</Link>{" "}
                    {t("formFields.terms3")}{" "}
                    <Link href="#">{t("formFields.terms4")}</Link>.
                  </span>
                </label>
                <ErrorMessage name="terms" component="div" className="error" />
              </div>

              <button
                type="submit"
                className="main-button"
                disabled={isSubmitting}
              >
                {t("formFields.submit")}
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
