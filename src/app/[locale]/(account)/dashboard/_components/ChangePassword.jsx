"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAuth } from "@/context/AuthContext";
import ButtonArrow from "@/icons/ButtonArrow";
import axios from "axios";
import { useTranslations } from "next-intl";

const ChangePassword = () => {
  const t = useTranslations("login");
  const { currentUser, getToken } = useAuth(); // Assuming getToken retrieves the JWT token
  const [changePasswordError, setChangePasswordError] = useState("");
  const [passwordChanged, setPasswordChanged] = useState(false);

  const initialValues = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    currentPassword: Yup.string().required(t("reset.validationSchema.currentPassword")),
    newPassword: Yup.string().required(t("reset.validationSchema.newPassword")),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], t("reset.validationSchema.oneOf"))
      .required(t("reset.validationSchema.confirmPassword")),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const { currentPassword, newPassword, confirmPassword } = values;

    try {
      const token = await getToken(); // Get the JWT token for authentication

      // Sending the change password request using axios
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_REST_API_URL}auth/change-password`,
        {
          currentPassword,
          password: newPassword,
          passwordConfirmation: confirmPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Use the JWT token in the header
          },
        }
      );

      if (response.status === 200) {
        setPasswordChanged(true);
        setChangePasswordError("");
        setTimeout(() => {
          setPasswordChanged(false);
        }, 3000);
      } else {
        setChangePasswordError("Failed to change password.");
      }
    } catch (error) {
      console.error("Failed to change password", error);
      setChangePasswordError(
        error.response?.data?.message ||
          "An error occurred while changing the password."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="change-password">
      <div className="_container">
        <h2>{t("reset.title")}</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, touched, errors }) => (
            <Form>
              <div className="password-data">
                <div>
                  <label>
                    <Field
                      placeholder={t("reset.currentPassword")}
                      type="password"
                      name="currentPassword"
                      className={
                        touched.currentPassword && errors.currentPassword
                          ? "invalid"
                          : ""
                      }
                    />
                  </label>
                  <ErrorMessage
                    className="error"
                    name="currentPassword"
                    component="div"
                  />
                </div>
                <div>
                  <label>
                    <Field
                      placeholder={t("reset.newPassword")}
                      type="password"
                      name="newPassword"
                      className={
                        touched.newPassword && errors.newPassword ? "invalid" : ""
                      }
                    />
                  </label>
                  <ErrorMessage
                    className="error"
                    name="newPassword"
                    component="div"
                  />
                </div>
                <div>
                  <label>
                    <Field
                      placeholder={t("reset.confirmPassword")}
                      type="password"
                      name="confirmPassword"
                      className={
                        touched.confirmPassword && errors.confirmPassword
                          ? "invalid"
                          : ""
                      }
                    />
                  </label>
                  <ErrorMessage
                    className="error"
                    name="confirmPassword"
                    component="div"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="main-button"
                disabled={isSubmitting}
              >
                <span>{t("reset.button")}</span>
                <ButtonArrow />
              </button>
              {passwordChanged && (
                <div className="success">{t("reset.success")}</div>
              )}
              {changePasswordError && (
                <div className="error">{changePasswordError}</div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default ChangePassword;
