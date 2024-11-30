"use client";
import { useState } from "react";
import MerchantInfo from "@/components/FormPages/merchantinfo";
import ShopDetails from "@/components/FormPages/shopdetails";
import AddressDetails from "@/components/FormPages/addressdetails";
import PickupTimes from "@/components/FormPages/pickuptimes";
import { CheckCircleIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function MerchantOnboardingForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    phone_number: "",
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
  const [errors, setErrors] = useState({});
  const [confirmPassword, setConfirmPassword] = useState("");

  const steps = ["Merchant Info", "Shop Details", "Address", "Pickup Times"];

  const validatePasswords = () => {
    if (!formData.password) {
      return "Password is required.";
    }
    if (formData.password !== confirmPassword) {
      return "Passwords do not match.";
    }
    return null; // No password errors
  };

  const validateStep = () => {
    const newErrors = {};
    const phoneNumberPattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/; // Example: 123-456-7890

    if (step === 1) {
      if (!formData.email) newErrors.email = "Email is required.";
      if (!formData.phone_number) {
        newErrors.phone_number = "Phone number is required.";
      } else if (!phoneNumberPattern.test(formData.phone_number)) {
        newErrors.phone_number =
          "Phone number must be in the format 123-456-7890.";
      }
      const passwordError = validatePasswords();
      if (passwordError) newErrors.password = passwordError;
    } else if (step === 2) {
      if (!formData.shop_name) newErrors.shop_name = "Shop name is required.";
      if (!formData.shop_logo_url)
        newErrors.shop_logo_url = "Shop logo URL is required.";
      if (!formData.shop_banner_url)
        newErrors.shop_banner_url = "Shop banner URL is required.";
    } else if (step === 3) {
      if (!formData.address_1)
        newErrors.address_1 = "Address line 1 is required.";
      if (!formData.city) newErrors.city = "City is required.";
      if (!formData.state) newErrors.state = "State is required.";
      if (!formData.zipcode) newErrors.zipcode = "ZIP Code is required.";
    } else if (step === 4) {
      if (!formData.pickup_start_time)
        newErrors.pickup_start_time = "Pickup start time is required.";
      if (!formData.pickup_end_time)
        newErrors.pickup_end_time = "Pickup end time is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleNext = () => {
    if (validateStep()) {
      setErrors({});
      setStep((prev) => Math.min(prev + 1, steps.length));
    }
  };

  const handlePrev = () => {
    setErrors({});
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const updateFormData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep()) return;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/merchants/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "An error occurred.");
      }

      const result = await response.json();
      console.log("Server response:", result);
      localStorage.setItem("merchant_token", result.token);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({ server: error.message });
    }
  };

  return (
    <div className="w-full bg-mottai-tan pb-10 md:rounded-xl my-10 mx-4 lg:mx-8 xl:mx-64 xl:mb-auto">
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
        {errors.server && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
            {errors.server}
          </div>
        )}
        <div className="relative h-[750px] sm:h-[600px] transition-all duration-500">
          {step === 1 && (
            <MerchantInfo
              formData={formData}
              updateFormData={updateFormData}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
              errors={errors}
            />
          )}
          {step === 2 && (
            <ShopDetails
              formData={formData}
              updateFormData={updateFormData}
              errors={errors}
            />
          )}
          {step === 3 && (
            <AddressDetails
              formData={formData}
              updateFormData={updateFormData}
              errors={errors}
            />
          )}
          {step === 4 && (
            <PickupTimes
              formData={formData}
              updateFormData={updateFormData}
              errors={errors}
            />
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
