"use client";
import "@/styles/account.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import CheckboxIcon from "@/icons/CheckboxIcon";
import ButtonArrow from "@/icons/ButtonArrow";

export default function SignUp() {
  const [thanksPopupShow, setThanksPopupShow] = useState(false);
  const router = useRouter();
  const { fetchCurrentUser } = useAuth();

  const initialValues = {
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
    privacy: false,
    age: false,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    phone: Yup.string()
      .matches(/^\d+$/, "Please provide a valid phone number")
      .required("Phone number is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
    terms: Yup.bool().oneOf([true], "You must accept the terms and conditions"),
    privacy: Yup.bool().oneOf([true], "You must accept the privacy policy"),
    age: Yup.bool().oneOf([true], "You must accept age"),
  });

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const response = await axios.post("/api/auth/sign-up", values, {
        headers: { "Content-Type": "application/json" },
      });

      if (!response.data.jwt) {
        throw new Error("JWT not found");
      }

      setThanksPopupShow(true);
      setTimeout(() => {
        setThanksPopupShow(false);
        localStorage.setItem("jwt", response.data.jwt);
        fetchCurrentUser();
        router.push("/dashboard");
      }, 3000);
    } catch (error) {
      console.error("Registration failed", error.response.data);
      setFieldError("email", "An account with this email already exists");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="log-in">
        <div className="_container">
          <h1>Join Quorixia today</h1>
          <h2></h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, touched, errors }) => (
              <Form className="sign-up">
                <div>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Name"
                    className={touched.name && errors.name ? "invalid" : ""}
                  />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>
                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
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
                    type="text"
                    name="phone"
                    placeholder="Phone number"
                    className={touched.phone && errors.phone ? "invalid" : ""}
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="error"
                  />
                </div>

                <div>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
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
                    placeholder="Confirm password"
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
                      I agree to the{" "}
                      <Link href="/terms-and-conditions">
                        Terms and Conditions
                      </Link>
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
                      I agree to the{" "}
                      <Link href="/privacy-policy">Privacy Policy</Link>.
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
                    <span>
                      I am over 18 years old, and I have read and accepted all
                      of the above
                    </span>
                  </label>
                  <ErrorMessage name="age" component="div" className="error" />
                </div>
                <div className="button-wrap">
                  <button
                    className="main-button"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    <span>Join Quorixia</span>
                    <ButtonArrow />
                  </button>
                </div>
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
                  <h3>Congratulations!</h3>
                  <p>
                    Your account has been successfully created. A confirmation
                    email has been sent to your inbox.
                    <br />
                    Welcome aboard!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
