export default function AddressDetails({ formData, updateFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900">Address Details</h2>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label
            htmlFor="address_1"
            className="block text-sm font-medium text-gray-900"
          >
            Address Line 1
          </label>
          <input
            id="address_1"
            name="address_1"
            type="text"
            value={formData.address_1}
            onChange={handleChange}
            required
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-mottai-red focus:ring-mottai-red sm:text-sm"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="address_2"
            className="block text-sm font-medium text-gray-900"
          >
            Address Line 2 (Optional)
          </label>
          <input
            id="address_2"
            name="address_2"
            type="text"
            value={formData.address_2}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-mottai-red focus:ring-mottai-red sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-900"
          >
            City
          </label>
          <input
            id="city"
            name="city"
            type="text"
            value={formData.city}
            onChange={handleChange}
            required
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-mottai-red focus:ring-mottai-red sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-900"
          >
            State
          </label>
          <input
            id="state"
            name="state"
            type="text"
            value={formData.state}
            onChange={handleChange}
            required
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-mottai-red focus:ring-mottai-red sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="zipcode"
            className="block text-sm font-medium text-gray-900"
          >
            ZIP Code
          </label>
          <input
            id="zipcode"
            name="zipcode"
            type="text"
            value={formData.zipcode}
            onChange={handleChange}
            required
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-mottai-red focus:ring-mottai-red sm:text-sm"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-900"
          >
            Country
          </label>
          <input
            id="country"
            name="country"
            type="text"
            value={formData.country}
            onChange={handleChange}
            required
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-mottai-red focus:ring-mottai-red sm:text-sm"
          />
        </div>
      </div>
    </div>
  );
}
