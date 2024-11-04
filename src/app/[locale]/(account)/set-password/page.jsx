"use client";
import React, { useEffect } from "react";
import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import "@/styles/account.scss";
import ChangePasswordReset from "../dashboard/_components/ChangePasswordReset";
import { useAuth } from "@/context/AuthContext";
import { useTranslations } from "next-intl";

function SetPasswordContent() {
  const t = useTranslations("login");
  const { currentUser, fetchCurrentUser } = useAuth();
  const searchParams = useSearchParams();
  const token = searchParams.get("code");
  const router = useRouter();

  useEffect(() => {
    if (token) {
      localStorage.setItem("resetToken", token);
    }
  }, [token]);

  if (!token) {
    return (
      <section className="log-in ">
        <div className="_container">
          <h1>{t("reset.invalid")}</h1>
        </div>
      </section>
    );
  }

  return <ChangePasswordReset token={token} />;
}

export default function SetPassword() {
  return (
    <Suspense fallback={<div>...</div>}>
      <SetPasswordContent />
    </Suspense>
  );
}
