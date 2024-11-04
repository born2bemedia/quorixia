"use client";
import "@/styles/account.scss";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "@/navigation";
import ButtonArrow from "@/icons/ButtonArrow";
import { useTranslations } from "next-intl";

export default function SignIn() {
  const t = useTranslations("login");
  const router = useRouter();
  const { fetchCurrentUser, currentUser } = useAuth();

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
      .email(t("validationSchema.email"))
      .required(t("validationSchema.requiredEmail")),
    password: Yup.string().required(t("validationSchema.password")),
  });

  const handleSubmit = async (
    values,
    { setSubmitting, setFieldError, setErrors }
  ) => {
    try {
      const response = await fetch(`/api/auth/log-in`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      if (data.user.jwt) {
        localStorage.setItem("jwt", data.user.jwt);
        fetchCurrentUser();
        console.log("logged in");
        router.push("/dashboard");
      } else {
        throw new Error("JWT not found");
      }
    } catch (error) {
      console.log(error.message);
      setErrors({ submit: error.message || "An unexpected error occurred" });
    }
  };

  return (
    <section className="log-in">
      <div className="_container">
        <h1 dangerouslySetInnerHTML={{ __html: t("title") }} />
        <h2 dangerouslySetInnerHTML={{ __html: t("text") }} />
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
                  placeholder={t("form.email")}
                  className={touched.email && errors.email ? "invalid" : ""}
                />
                <ErrorMessage name="email" component="div" className="error" />
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
              <button
                className="main-button"
                type="submit"
                disabled={isSubmitting}
              >
                <span>{t("form.button")}</span>
                <ButtonArrow />
              </button>
              <Link className="reset" href="/reset-password">
                {t("form.forgot")}
              </Link>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
