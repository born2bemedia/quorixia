"use client";
import "@/styles/account.scss";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";

export default function SignIn() {
  const router = useRouter();
  const { setCurrentUser, currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      //router.push("/dashboard");
    }
  }, [currentUser]);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const response = await axios.post("/api/auth/log-in", {
        email: values.email,
        password: values.password,
      });
      if (response.status === 200) {
        const { token, user_email, user_nicename, user_display_name, billing } =
          response.data;
        const user = {
          email: user_email,
          nicename: user_nicename,
          displayName: user_display_name,
          billing, // Include billing data
        };
        console.log(user);
        localStorage.setItem("jwt", token);
        localStorage.setItem("user", JSON.stringify(user));
        setCurrentUser(user);
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Login failed", error.response.data);
      setFieldError("email", "Invalid email or password");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="log-in">
      <div className="_container">
        <h1>Welcome to Spectrum Consults!</h1>
        <h2>Please enter your username and password to access your account.</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, touched, errors }) => (
            <Form>
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={touched.email && errors.email ? "invalid" : ""}
                />
                <ErrorMessage name="email" component="div" className="error" />
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
              <button
                className="main-button"
                type="submit"
                disabled={isSubmitting}
              >
                <span>Log in</span>
                <ButtonArrow />
              </button>
              <Link className="reset" href="/reset-password">
                Forgot password?
              </Link>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
