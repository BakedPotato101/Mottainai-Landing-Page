export default function MerchantOnboardingForm() {
  return (
    <form
      className="flex flex-col items-center justify-center w-full bg-mottai-tan px-4 sm:px-6 md:px-8 lg:px-16"
      method="POST"
      encType="multipart/form-data"
      action="https://mottainai-backend-production.up.railway.app/api/merchants"
    >
      <div className="w-full max-w-4xl space-y-12 pt-10">
        {/* Section: Merchant Information */}
        <div className="border-b border-gray-300 pb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Merchant Information
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Fill in the required information to register your shop.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
            {/* Email */}
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  minLength={5}
                  maxLength={50}
                  className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:ring-mottai-red focus:border-mottai-red sm:text-sm"
                />
              </div>
            </div>

            {/* Password */}
            <div className="sm:col-span-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  minLength={8}
                  maxLength={255}
                  className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:ring-mottai-red focus:border-mottai-red sm:text-sm"
                />
              </div>
            </div>

            {/* Description */}
            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-900"
              >
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  required
                  minLength={1}
                  maxLength={255}
                  className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:ring-mottai-red focus:border-mottai-red sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section: Shop Details */}
        <div className="border-b border-gray-300 pb-8">
          <h2 className="text-lg font-semibold text-gray-900">Shop Details</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
            {/* Shop Name */}
            <div className="sm:col-span-2">
              <label
                htmlFor="shop_name"
                className="block text-sm font-medium text-gray-900"
              >
                Shop Name
              </label>
              <div className="mt-2">
                <input
                  id="shop_name"
                  name="shop_name"
                  type="text"
                  required
                  minLength={2}
                  maxLength={50}
                  className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:ring-mottai-red focus:border-mottai-red sm:text-sm"
                />
              </div>
            </div>

            {/* Shop Logo Upload */}
            <div className="sm:col-span-2">
              <label
                htmlFor="shop_logo"
                className="block text-sm font-medium text-gray-900"
              >
                Shop Logo
              </label>
              <div className="mt-2">
                <input
                  id="shop_logo"
                  name="shop_logo"
                  type="file"
                  accept="image/*"
                  required
                  className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:ring-mottai-red focus:border-mottai-red sm:text-sm"
                />
              </div>
            </div>

            {/* Shop Banner Upload */}
            <div className="sm:col-span-2">
              <label
                htmlFor="shop_banner"
                className="block text-sm font-medium text-gray-900"
              >
                Shop Banner
              </label>
              <div className="mt-2">
                <input
                  id="shop_banner"
                  name="shop_banner"
                  type="file"
                  accept="image/*"
                  required
                  className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:ring-mottai-red focus:border-mottai-red sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section: Address Details */}
        <div className="border-b border-gray-300 pb-8">
          <h2 className="text-lg font-semibold text-gray-900">
            Address Details
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
            {/* Address Line 1 */}
            <div className="sm:col-span-2">
              <label
                htmlFor="address_1"
                className="block text-sm font-medium text-gray-900"
              >
                Address Line 1
              </label>
              <div className="mt-2">
                <input
                  id="address_1"
                  name="address_1"
                  type="text"
                  required
                  minLength={5}
                  maxLength={100}
                  className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:ring-mottai-red focus:border-mottai-red sm:text-sm"
                />
              </div>
            </div>

            {/* Address Line 2 (Optional) */}
            <div className="sm:col-span-2">
              <label
                htmlFor="address_2"
                className="block text-sm font-medium text-gray-900"
              >
                Address Line 2 (Optional)
              </label>
              <div className="mt-2">
                <input
                  id="address_2"
                  name="address_2"
                  type="text"
                  minLength={5}
                  maxLength={100}
                  className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:ring-mottai-red focus:border-mottai-red sm:text-sm"
                />
              </div>
            </div>

            {/* City */}
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-900"
              >
                City
              </label>
              <div className="mt-2">
                <input
                  id="city"
                  name="city"
                  type="text"
                  required
                  minLength={2}
                  maxLength={50}
                  className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:ring-mottai-red focus:border-mottai-red sm:text-sm"
                />
              </div>
            </div>

            {/* State */}
            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-900"
              >
                State
              </label>
              <div className="mt-2">
                <input
                  id="state"
                  name="state"
                  type="text"
                  required
                  minLength={2}
                  maxLength={50}
                  className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:ring-mottai-red focus:border-mottai-red sm:text-sm"
                />
              </div>
            </div>

            {/* ZIP Code */}
            <div>
              <label
                htmlFor="zipcode"
                className="block text-sm font-medium text-gray-900"
              >
                ZIP Code
              </label>
              <div className="mt-2">
                <input
                  id="zipcode"
                  name="zipcode"
                  type="text"
                  required
                  minLength={5}
                  maxLength={10}
                  className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:ring-mottai-red focus:border-mottai-red sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section: Pickup Times */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Pickup Times</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
            {/* Pickup Start Time */}
            <div>
              <label
                htmlFor="pickup_start_time"
                className="block text-sm font-medium text-gray-900"
              >
                Pickup Start Time
              </label>
              <div className="mt-2">
                <input
                  id="pickup_start_time"
                  name="pickup_start_time"
                  type="time"
                  required
                  className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:ring-mottai-red focus:border-mottai-red sm:text-sm"
                />
              </div>
            </div>

            {/* Pickup End Time */}
            <div>
              <label
                htmlFor="pickup_end_time"
                className="block text-sm font-medium text-gray-900"
              >
                Pickup End Time
              </label>
              <div className="mt-2">
                <input
                  id="pickup_end_time"
                  name="pickup_end_time"
                  type="time"
                  required
                  className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:ring-mottai-red focus:border-mottai-red sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8 flex items-center justify-end gap-x-4">
        <button type="button" className="text-sm font-medium text-gray-700">
          Cancel
        </button>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-mottai-red py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-mottai-accent focus:outline-none focus:ring-2 focus:ring-mottai-red focus:ring-offset-2 transition-all"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
