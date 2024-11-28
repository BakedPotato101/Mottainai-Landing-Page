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
        We will review your application and get back to you shortly.
      </p>
    </div>
  );
}
