"use client";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

export default function Success() {
  return (
    <div className="bg-mottai-tan h-auto p-8 sm:p-10 md:p-12 rounded-xl m-4 sm:m-10 md:m-20 flex flex-col items-center justify-center">
      <div className="flex justify-center items-center">
        <CheckCircleIcon className="h-12 w-12 sm:h-16 sm:w-16 text-mottai-red" />
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 text-center mt-4">
        Thank you for signing up!
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-500 text-center mt-2">
        Your account has been created successfully.
      </p>
      <a
        href="#"
        className="mt-4 mx-auto rounded-full bg-mottai-red px-8 py-2 text-lg font-semibold text-white shadow-sm hover:bg-mottai-accent transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Download the app
      </a>
      {/* sign out button */}
      <button
        type="button"
        onClick={() => {
          localStorage.removeItem("merchant_token");
          window.location.href = "/";
        }}

        className="mt-4 text-sm sm:text-base font-medium bg-mottai-red text-white py-2 px-4 rounded-md shadow-sm hover:bg-mottai-accent focus:outline-none focus:ring-2 focus:ring-mottai-red focus:ring-offset-2"
      >
        Sign Out
      </button>
    </div>
  );
}
