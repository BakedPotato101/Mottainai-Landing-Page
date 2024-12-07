"use client";
import { useEffect, useState } from "react";
import Success from "@/components/success";
import SupplierForm from "@/components/supplierform";

export default function SignUp() {
  const [token, setToken] = useState(null); // State to hold the token
  const [isCheckingToken, setIsCheckingToken] = useState(true); // Loading state for token check

  useEffect(() => {
    // Check for the token on mount
    const storedToken = localStorage.getItem("merchant_token");
    setToken(storedToken);
    setIsCheckingToken(false); // Token check is complete
  }, []);

  if (isCheckingToken) {
    // Show a loading state until token check is complete
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex justify-center items-start">
        {token && token !== "undefined" ? <Success /> : <SupplierForm />}
      </main>
    </div>
  );
}
