"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [jwt, setJwt] = useState(null);
  const pathname = usePathname();
  const router = useRouter();

  const fetchCurrentUser = async () => {
    if (typeof window !== "undefined") {
      const storedJwt = localStorage.getItem("jwt");
      const storedRefreshToken = localStorage.getItem("refreshToken");
      const user = localStorage.getItem("user");
      if (storedJwt && user) {
        try {
          const decodedUser = JSON.parse(user);
          setCurrentUser(decodedUser);
          setJwt(storedJwt);
        } catch (error) {
          console.error("Failed to fetch current user", error);
          localStorage.removeItem("jwt");
          localStorage.removeItem("refreshToken");
          localStorage.removeItem("user");
          setCurrentUser(null);
        }
      }
    }
  };

  const refreshToken = async () => {
    if (typeof window !== "undefined") {
      const storedRefreshToken = localStorage.getItem("refreshToken");
      if (!storedRefreshToken) {
        console.error("No refresh token available");
        return;
      }

      try {
        const response = await axios.post("/api/auth/refresh-token", {
          refreshToken: storedRefreshToken,
        });

        if (response.status === 200) {
          const { token, refreshToken } = response.data;
          localStorage.setItem("jwt", token);
          localStorage.setItem("refreshToken", refreshToken);
          setJwt(token);
          return token;
        } else {
          console.error("Failed to refresh token");
        }
      } catch (error) {
        console.error("Error refreshing token", error);
      }
    }
    return null;
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  useEffect(() => {
    console.log("Current route:", pathname);
    if (pathname === "/dashboard") {
      // Perform any action needed when navigating to the dashboard
    }
  }, [pathname]);

  useEffect(() => {
    // Set an interval to refresh the token periodically
    const interval = setInterval(() => {
      refreshToken();
    }, 15 * 60 * 1000); // Refresh every 15 minutes

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <AuthContext.Provider
      value={{ currentUser, fetchCurrentUser, setCurrentUser, refreshToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};
