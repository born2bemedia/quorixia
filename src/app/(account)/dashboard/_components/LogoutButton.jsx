"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useAuth } from "@/context/AuthContext";

function LogoutButton() {
  const { currentUser, setCurrentUser } = useAuth();
  const router = useRouter();

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("jwt"); // Clear JWT token
    setCurrentUser(null); // Clear current user data
    router.push("/log-in"); // Redirect to the sign-in page
  };
  return (
    <button
      className="rounded-md bg-red-100 w-full px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-white shadow flex items-center gap-2 hover:bg-red-600"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default LogoutButton;
