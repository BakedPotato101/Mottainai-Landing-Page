export default function MerchantInfo({ formData, updateFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900">
        Merchant Information
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-900"
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
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-mottai-red focus:ring-mottai-red sm:text-sm"
          />
        </div>

        {/* New Password */}
        <div className="sm:col-span-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-900"
          >
            New Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-mottai-red focus:ring-mottai-red sm:text-sm"
          />
        </div>

        {/* Confirm Password */}
        <div className="sm:col-span-2">
          <label
            htmlFor="confirm_password"
            className="block text-sm font-medium text-gray-900"
          >
            Confirm Password
          </label>
          <input
            id="confirm_password"
            name="confirm_password"
            type="password"
            value={formData.confirm_password}
            onChange={handleChange}
            required
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-mottai-red focus:ring-mottai-red sm:text-sm"
          />
        </div>

        {/* Description */}
        <div className="sm:col-span-2">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-900"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            required
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-mottai-red focus:ring-mottai-red sm:text-sm"
          />
        </div>
      </div>
    </div>
  );
}
