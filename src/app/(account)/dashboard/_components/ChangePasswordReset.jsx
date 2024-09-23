"use client";
import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import axios from "axios";
import ButtonArrow from "@/icons/ButtonArrow";

const ChangePasswordReset = ({ token }) => {
  const [changePasswordError, setChangePasswordError] = useState("");
  const [passwordChanged, setPasswordChanged] = useState(false);
  const router = useRouter();
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUserToken(token);
    }
  }, [token]);

  const initialValues = {
    newPassword: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    newPassword: Yup.string().required("New password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    if (!userToken) {
      setChangePasswordError("Invalid or expired token.");
      setSubmitting(false);
      return;
    }

    const { newPassword, confirmPassword } = values;

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_REST_API_URL}auth/reset-password`,
        {
          code: userToken, // token received in the reset link
          password: newPassword,
          passwordConfirmation: confirmPassword,
        }
      );

      if (response.status === 200) {
        setPasswordChanged(true);
        setChangePasswordError("");
        setTimeout(() => {
          setPasswordChanged(false);
          localStorage.removeItem("resetToken");
          router.push("/log-in");
        }, 3000);
      } else {
        setChangePasswordError("Failed to change password.");
      }
    } catch (error) {
      console.error("Failed to change password", error);
      setChangePasswordError(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="change-password">
      <div className="_container">
        <h2>Change Password</h2>
        <p>Update your password to keep your account secure.</p>
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
                      placeholder="New password"
                      type="password"
                      name="newPassword"
                      className={
                        touched.newPassword && errors.newPassword
                          ? "invalid"
                          : ""
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
                      placeholder="Confirm password"
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
                <span>Set new password</span>
                <ButtonArrow />
              </button>
              {passwordChanged && (
                <div className="success">Password changed successfully!</div>
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

export default ChangePasswordReset;