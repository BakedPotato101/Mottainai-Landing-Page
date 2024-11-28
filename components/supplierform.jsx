"use client";
import { useState } from "react";
import MerchantInfo from "@/components/FormPages/merchantinfo";
import ShopDetails from "@/components/FormPages/shopdetails";
import AddressDetails from "@/components/FormPages/addressdetails";
import PickupTimes from "@/components/FormPages/pickuptimes";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function MerchantOnboardingForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    description: "",
    shop_name: "",
    shop_logo_url: "",
    shop_banner_url: "",
    address_1: "",
    address_2: "",
    city: "",
    state: "",
    zipcode: "",
    pickup_start_time: "",
    pickup_end_time: "",
  });

  const steps = ["Merchant Info", "Shop Details", "Address", "Pickup Times"];

  const handleNext = () => setStep((prev) => Math.min(prev + 1, steps.length));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

  const updateFormData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Exclude confirm_password from the form data
    const { confirm_password, ...dataToSend } = formData;

    console.log("Form data being sent:", dataToSend);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/merchants/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );

      const result = await response.json();
      console.log("Server response:", result);
      localStorage.setItem("merchant_token", result.token);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="w-full bg-mottai-tan pb-10 md:rounded-xl my-10 mx-0 md:mx-4 lg:mx-8 xl:mx-64 xl:mb-auto">
      {/* Status Bar */}
      <div className="flex flex-wrap justify-center gap-4 py-4">
        {steps.map((stepName, index) => (
          <div
            key={index}
            className="flex items-center gap-x-2 text-sm sm:text-base"
          >
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                step > index
                  ? "bg-mottai-red border-mottai-red text-white"
                  : step === index + 1
                  ? "border-mottai-red text-mottai-red"
                  : "border-gray-300 text-gray-300"
              }`}
            >
              {step > index ? (
                <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                index + 1
              )}
            </div>
            {index < steps.length - 1 && (
              <ChevronRightIcon
                className={`w-5 h-5 sm:w-6 sm:h-6 ${
                  step > index ? "text-mottai-red" : "text-gray-300"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Form */}
      <form
        className="w-full max-w-5xl mx-auto px-4 sm:px-6 pt-4"
        onSubmit={step === 4 ? handleSubmit : (e) => e.preventDefault()}
      >
        <div className="relative h-[750px] sm:h-[600px] md:h-[600px] lg:h-[600px] transition-all duration-500">
          {step === 1 && (
            <div className="absolute inset-0">
              <MerchantInfo
                formData={formData}
                updateFormData={updateFormData}
              />
            </div>
          )}
          {step === 2 && (
            <div className="absolute inset-0">
              <ShopDetails
                formData={formData}
                updateFormData={updateFormData}
              />
            </div>
          )}
          {step === 3 && (
            <div className="absolute inset-0">
              <AddressDetails
                formData={formData}
                updateFormData={updateFormData}
              />
            </div>
          )}
          {step === 4 && (
            <div className="absolute inset-0">
              <PickupTimes
                formData={formData}
                updateFormData={updateFormData}
              />
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center sm:justify-between gap-4">
          {step > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              className="text-sm sm:text-base font-medium text-gray-700 bg-white border border-gray-300 py-2 px-4 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-mottai-red focus:ring-offset-2"
            >
              Previous
            </button>
          )}
          {step < steps.length ? (
            <button
              type="button"
              onClick={handleNext}
              className="text-sm sm:text-base font-medium bg-mottai-red text-white py-2 px-4 rounded-md shadow-sm hover:bg-mottai-accent focus:outline-none focus:ring-2 focus:ring-mottai-red focus:ring-offset-2"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="text-sm sm:text-base font-medium bg-mottai-red text-white py-2 px-4 rounded-md shadow-sm hover:bg-mottai-accent focus:outline-none focus:ring-2 focus:ring-mottai-red focus:ring-offset-2"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
