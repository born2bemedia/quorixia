"use client";
import React, { useEffect } from "react";
import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import "@/styles/account.scss";
import ChangePasswordReset from "../(account)/dashboard/_components/ChangePasswordReset";

function SetPasswordContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");
  const router = useRouter();

  useEffect(() => {
    if (email && token) {
      localStorage.setItem("resetToken", token);
      localStorage.setItem("resetEmail", email);
    }
  }, [email, token]);

  if (!email || !token) {
    return <div>Invalid or expired link.</div>;
  }

  return <ChangePasswordReset email={email} token={token} />;
}

export default function SetPassword() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SetPasswordContent />
    </Suspense>
  );
}
