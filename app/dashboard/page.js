import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Dashboard() {
  const token = cookies().get("merchant_token");

  if (!token) {
    redirect("/login");
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-900">Dashboard</h2>
      <p className="mt-4 text-gray-700">Welcome to your dashboard!</p>
    </div>
  );
}
