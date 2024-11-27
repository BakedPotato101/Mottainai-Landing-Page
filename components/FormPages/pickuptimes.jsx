export default function PickupTimes({ formData, updateFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900">Pickup Times</h2>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
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
              value={formData.pickup_start_time}
              onChange={handleChange}
              required
              className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:ring-mottai-red focus:border-mottai-red sm:text-sm"
            />
          </div>
        </div>

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
              value={formData.pickup_end_time}
              onChange={handleChange}
              required
              className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:ring-mottai-red focus:border-mottai-red sm:text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
