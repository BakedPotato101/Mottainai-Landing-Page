"use client";

import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function DashboardHeader() {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("merchant_token"); // Clear auth token
    router.push("/login"); // Redirect to login
  };

  return (
    <header className="bg-mottai-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/dashboard" className="-m-1.5 p-1.5">
            <span className="sr-only">Mottainai Dashboard</span>
            <img alt="Mottainai Logo" src="/2.png" className="h-12 w-auto" />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a
            href="/dashboard/storefront"
            className="text-lg font-semibold text-gray-900"
          >
            Storefront
          </a>
          <a
            href="/dashboard/store-settings"
            className="text-lg font-semibold text-gray-900"
          >
            Store Settings
          </a>
          <a
            href="/dashboard/account"
            className="text-lg font-semibold text-gray-900"
          >
            Account
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            onClick={handleLogout}
            className="text-lg font-semibold text-red-500 hover:underline"
          >
            Sign Out
          </button>
        </div>
      </nav>
    </header>
  );
}
