"use client";
import { useEffect, useState } from "react";
import Success from "@/components/success";
import SupplierForm from "@/components/supplierform";

export default function SignUp() {
  const [token, setToken] = useState(null);
  const [isCheckingToken, setIsCheckingToken] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("merchant_token");
    setToken(storedToken);
    setIsCheckingToken(false);
  }, []);

  if (isCheckingToken) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-mottai-red">
      <main className="flex flex-grow justify-center items-center py-12">
        <div className="w-screen px-6 sm:px-12">
          {token && token !== "undefined" ? <Success /> : <SupplierForm />}
        </div>
      </main>
    </div>
  );
}
