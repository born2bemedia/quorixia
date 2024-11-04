"use client";
import "@/styles/account.scss";
import { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import ButtonArrow from "@/icons/ButtonArrow";
import { useTranslations } from "next-intl";

export default function PasswordResetRequest() {
  const t = useTranslations("login");
  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(t("validationSchema.email"))
      .required(t("validationSchema.requiredEmail")),
  });

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_REST_API_URL}auth/forgot-password`, {
        email: values.email,
      });

      if (response.status === 200) {
        setSubmitting(false);
        resetForm();
        setStatus({ success: true });
      } else {
        setStatus({ success: false });
      }
    } catch (error) {
      console.error("An error occurred:", error.response);
      setStatus({ success: false });
    }
  };

  return (
    <section className="log-in ">
      <div className="_container">
        <h1>{t("forgot.title")}</h1>
        <h2 dangerouslySetInnerHTML={{ __html: t("forgot.subtitle") }} />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, touched, errors, status }) => (
            <Form className="reset-form">
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder={t("form.email")}
                  className={touched.email && errors.email ? "invalid" : ""}
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <button
                className="main-button"
                type="submit"
                disabled={isSubmitting}
              >
                <span>{t("forgot.button")}</span>
                <ButtonArrow />
              </button>
              {status && status.success && (
                <div className="success">
                  <p>{t("forgot.success")}</p>
                </div>
              )}
              {status && status.success === false && (
                <div className="error">
                  <p>{t("forgot.error")}</p>
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
