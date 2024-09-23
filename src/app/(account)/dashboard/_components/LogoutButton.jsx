"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import React from "react";

function LogoutButton() {
  const { setCurrentUser } = useAuth();
  const router = useRouter();

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("jwt");

    setCurrentUser(null);
    localStorage.removeItem("user");
    router.push("/log-in"); // Redirect to the log-in page
  };

  return (
    <li onClick={handleLogout}>
      <span>Log Out</span>
    </li>
  );
}

export default LogoutButton;
