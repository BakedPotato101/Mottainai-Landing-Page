"use client";
import { useState } from "react";

export default function LoginForm() {
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted");

    const email = e.target[0].value;
    const password = e.target[1].value;

    if (email === "test@test.com" && password === "password") {
      console.log("Login successful");
    } else {
      setError("Invalid email or password");
    }
  }

  return (
    <div className="w-full max-w-md bg-mottai-tan shadow-lg rounded-lg px-8 py-10">
      <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">
        Login
      </h2>

      <form className="space-y-6 text-left" onSubmit={handleSubmit}>
        {/* Email Input */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-mottai-red"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password Input */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-mottai-red"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full bg-mottai-red text-white font-medium py-2 px-6 rounded-md hover:bg-mottai-accent focus:ring-2 focus:ring-offset-2 focus:ring-mottai-red"
          >
            Login
          </button>
        </div>

        {/* Error message */}
        {/* Error Message */}
        {error && (
          <div className="text-red-500 text-sm text-center bg-red-100 p-2 rounded-md">
            {error}
          </div>
        )}
        {/* Forgot Password & Signup Links */}
        <div className="text-center text-sm text-gray-600 mt-4">
          <a href="#" className="text-mottai-red hover:underline">
            Forgot Password?
          </a>
          <span className="mx-2">|</span>
          <a href="#" className="text-mottai-red hover:underline">
            Create an Account
          </a>
        </div>
      </form>
    </div>
  );
}
