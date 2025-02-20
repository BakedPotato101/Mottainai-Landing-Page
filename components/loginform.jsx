"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [error, setError] = useState(null);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push("/dashboard"); // Redirect on success
    } else {
      const data = await res.json();
      setError(data.message || "Login failed");
    }
  }

  return (
    <div className="w-full max-w-md bg-mottai-tan shadow-lg rounded-lg px-8 py-10">
      <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">
        Login
      </h2>
      <form className="space-y-6 text-left" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-mottai-red"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-mottai-red"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full bg-mottai-red text-white font-medium py-2 px-6 rounded-md hover:bg-mottai-accent focus:ring-2 focus:ring-offset-2 focus:ring-mottai-red"
          >
            Login
          </button>
        </div>
        {error && (
          <div className="text-red-500 text-sm text-center bg-red-100 p-2 rounded-md">
            {error}
          </div>
        )}
      </form>
    </div>
  );
}
