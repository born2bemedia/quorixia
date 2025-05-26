"use client";
import "@/styles/account.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "@/navigation";
import CheckboxIcon from "@/icons/CheckboxIcon";
import ButtonArrow from "@/icons/ButtonArrow";
import { useTranslations } from "next-intl";
import { excludedCountries } from "@/utils/countries";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function SignUp() {
  const t = useTranslations("register");
  const [thanksPopupShow, setThanksPopupShow] = useState(false);
  const router = useRouter();
  const { fetchCurrentUser } = useAuth();
  const [globalError, setGlobalError] = useState("");

  const initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
    privacy: false,
    age: false,
    username: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(t("validationSchema.required")),
    lastName: Yup.string().required(t("validationSchema.required")),
    username: Yup.string().required(t("validationSchema.required")),
    phone: Yup.string().required(t("validationSchema.required")),
    email: Yup.string()
      .email(t("validationSchema.email"))
      .required(t("validationSchema.required")),
    password: Yup.string().required(t("validationSchema.required")),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], t("validationSchema.oneOf"))
      .required(t("validationSchema.required")),
    terms: Yup.bool().oneOf([true], t("validationSchema.terms")),
    privacy: Yup.bool().oneOf([true], t("validationSchema.privacy")),
    age: Yup.bool().oneOf([true], t("validationSchema.age")),
  });

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    setGlobalError("");
    try {
      const response = await axios.post("/api/auth/sign-up", values, {
        headers: { "Content-Type": "application/json" },
      });

      if (!response.data.jwt) {
        throw new Error("JWT not found");
      }

      setThanksPopupShow(true);

      try {
        const response = await fetch("/api/emails/sign-up", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        if (response.ok) {
          setTimeout(() => {}, 400);
        }
      } catch (error) {
        console.error(error);
      }

      setTimeout(() => {
        setThanksPopupShow(false);
        localStorage.setItem("jwt", response.data.jwt);
        fetchCurrentUser();

        router.push("/dashboard");
      }, 3000);
    } catch (error) {
      console.error("Registration failed", error.response.data);
      setGlobalError(error.response?.data?.message || t("form.genericError"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="log-in">
        <div className="_container">
          <h1>{t("title")}</h1>
          <h2 dangerouslySetInnerHTML={{ __html: t("subtitle") }} />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, touched, errors, setFieldValue }) => (
              <Form className="sign-up">
                <div>
                  <Field
                    type="text"
                    name="firstName"
                    placeholder={t("form.firstName")}
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
                    type="text"
                    name="lastName"
                    placeholder={t("form.lastName")}
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
                <div className="full">
                  <Field
                    type="text"
                    name="username"
                    placeholder={t("form.username")}
                    className={
                      touched.username && errors.username ? "invalid" : ""
                    }
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <PhoneInput
                    country={"gb"}
                    value=""
                    placeholder={t("form.phone")}
                    onChange={(phone) => setFieldValue("phone", phone)}
                    className="phone-container"
                    inputClass="phone-field"
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
                    type="email"
                    name="email"
                    placeholder={t("form.email")}
                    className={touched.email && errors.email ? "invalid" : ""}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>

                <div>
                  <Field
                    type="password"
                    name="password"
                    placeholder={t("form.password")}
                    className={
                      touched.password && errors.password ? "invalid" : ""
                    }
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <Field
                    type="password"
                    name="confirmPassword"
                    placeholder={t("form.confirmPassword")}
                    className={
                      touched.confirmPassword && errors.confirmPassword
                        ? "invalid"
                        : ""
                    }
                  />
                  <ErrorMessage
                    name="confirmPassword"
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
                      {t("form.agree")}{" "}
                      <Link href="/terms-of-use">{t("form.terms")}</Link>
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
                    name="privacy"
                    className={
                      touched.privacy && errors.privacy ? "invalid" : ""
                    }
                    id="privacy"
                  />
                  <label htmlFor="privacy">
                    <CheckboxIcon />
                    <span>
                      {t("form.agree")}{" "}
                      <Link href="/privacy-policy">{t("form.privacy")}</Link>.
                    </span>
                  </label>
                  <ErrorMessage
                    name="privacy"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="checkbox">
                  <Field
                    type="checkbox"
                    name="age"
                    className={touched.age && errors.age ? "invalid" : ""}
                    id="age"
                  />
                  <label htmlFor="age">
                    <CheckboxIcon />
                    <span>{t("form.age")}</span>
                  </label>
                  <ErrorMessage name="age" component="div" className="error" />
                </div>

                <div className="button-wrap">
                  <button
                    className="main-button"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    <span>{t("form.button")}</span>
                    <ButtonArrow />
                  </button>
                </div>
                {globalError && (
                  <div className="global-error">{globalError}</div>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </section>
      {thanksPopupShow && (
        <div className={`thanks-popup-wrap ${thanksPopupShow ? "opened" : ""}`}>
          <div className="overlay"></div>
          <div className="popup-inner">
            <div>
              <div className="form-wrap">
                <div className="success">
                  <h3
                    dangerouslySetInnerHTML={{ __html: t("success.title") }}
                  />
                  <p dangerouslySetInnerHTML={{ __html: t("success.text") }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
