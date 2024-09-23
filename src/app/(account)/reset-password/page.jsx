"use client";
import "@/styles/account.scss";
import { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ButtonArrow from "@/icons/ButtonArrow";

export default function PasswordResetRequest() {
  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    try {
      const response = await fetch("/api/auth/password-reset-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSubmitting(false);
        resetForm();
        setStatus({ success: true });
      } else {
        setStatus({ success: false });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="log-in ">
      <div className="_container">
        <h1>Forgot Your Password?</h1>
        <h2>
          Please provide your username or email address.
          <br />
          We’ll send you a link to create a new password via email.
        </h2>
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
                  placeholder="Email"
                  className={touched.email && errors.email ? "invalid" : ""}
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <button
                className="main-button"
                type="submit"
                disabled={isSubmitting}
              >
                <span>Reset now</span>
                <ButtonArrow />
              </button>
              {status && status.success && (
                <div className="success">
                  <p>Reset link was sent to your email!</p>
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
