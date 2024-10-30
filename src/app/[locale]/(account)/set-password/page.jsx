"use client";
import React, { useEffect } from "react";
import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import "@/styles/account.scss";
import ChangePasswordReset from "../dashboard/_components/ChangePasswordReset";
import { useAuth } from "@/context/AuthContext";

function SetPasswordContent() {
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
    return <div>Invalid or expired link.</div>;
  }

  return <ChangePasswordReset token={token} />;
}

export default function SetPassword() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SetPasswordContent />
    </Suspense>
  );
}
