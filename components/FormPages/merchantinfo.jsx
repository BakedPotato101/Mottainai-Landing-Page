export default function MerchantInfo({
  formData,
  updateFormData,
  confirmPassword,
  setConfirmPassword,
  errors,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "confirm_password") {
      setConfirmPassword(value);
    } else {
      updateFormData({ [name]: value });
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900">
        Merchant Information
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
        {/* Email */}
        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className={`block text-sm font-medium ${
              errors.email ? "text-red-500" : "text-gray-900"
            }`}
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`mt-2 block w-full rounded-md border-gray-300 shadow-sm ${
              errors.email ? "border-red-500 focus:border-red-500" : ""
            } focus:ring-mottai-red sm:text-sm`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div className="sm:col-span-2">
          <label
            htmlFor="phone"
            className={`block text-sm font-medium ${
              errors.phone ? "text-red-500" : "text-gray-900"
            }`}
          >
            Phone Number
          </label>
          <input
            id="phone_number"
            name="phone_number"
            type="tel"
            value={formData.phone_number}
            onChange={handleChange}
            required
            className={`mt-2 block w-full rounded-md border-gray-300 shadow-sm ${
              errors.phone_number ? "border-red-500 focus:border-red-500" : ""
            } focus:ring-mottai-red sm:text-sm`}
          />
          {errors.phone_number && (
            <p className="text-red-500 text-sm mt-1">{errors.phone_number}</p>
          )}
        </div>

        {/* Password */}
        <div className="sm:col-span-2">
          <label
            htmlFor="password"
            className={`block text-sm font-medium ${
              errors.password ? "text-red-500" : "text-gray-900"
            }`}
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            className={`mt-2 block w-full rounded-md border-gray-300 shadow-sm ${
              errors.password ? "border-red-500 focus:border-red-500" : ""
            } focus:ring-mottai-red sm:text-sm`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="sm:col-span-2">
          <label
            htmlFor="confirm_password"
            className={`block text-sm font-medium ${
              errors.confirm_password ? "text-red-500" : "text-gray-900"
            }`}
          >
            Confirm Password
          </label>
          <input
            id="confirm_password"
            name="confirm_password"
            type="password"
            value={confirmPassword}
            onChange={handleChange}
            required
            className={`mt-2 block w-full rounded-md border-gray-300 shadow-sm ${
              errors.confirm_password
                ? "border-red-500 focus:border-red-500"
                : ""
            } focus:ring-mottai-red sm:text-sm`}
          />
          {errors.confirm_password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirm_password}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
