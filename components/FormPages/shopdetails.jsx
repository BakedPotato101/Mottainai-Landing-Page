export default function ShopDetails({ formData, updateFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900">Shop Details</h2>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label
            htmlFor="shop_name"
            className="block text-sm font-medium text-gray-900"
          >
            Shop Name
          </label>
          <input
            id="shop_name"
            name="shop_name"
            type="text"
            value={formData.shop_name}
            onChange={handleChange}
            required
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-mottai-red focus:ring-mottai-red sm:text-sm"
          />
        </div>

        {/* Shop Logo URL */}
        <div className="sm:col-span-2">
          <label
            htmlFor="shop_logo_url"
            className="block text-sm font-medium text-gray-900"
          >
            Shop Logo URL
          </label>
          <input
            id="shop_logo_url"
            name="shop_logo_url"
            type="url"
            value={formData.shop_logo_url}
            onChange={handleChange}
            required
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-mottai-red focus:ring-mottai-red sm:text-sm"
          />
        </div>

        {/* Shop Banner URL */}
        <div className="sm:col-span-2">
          <label
            htmlFor="shop_banner_url"
            className="block text-sm font-medium text-gray-900"
          >
            Shop Banner URL
          </label>
          <input
            id="shop_banner_url"
            name="shop_banner_url"
            type="url"
            value={formData.shop_banner_url}
            onChange={handleChange}
            required
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-mottai-red focus:ring-mottai-red sm:text-sm"
          />
        </div>
      </div>
    </div>
  );
}
