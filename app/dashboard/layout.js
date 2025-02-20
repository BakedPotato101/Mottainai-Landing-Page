import "../globals.css";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import DashboardHeader from "@/components/Dashboard/DashboardHeader";
import Footer from "@/components/footer";

export default function DashboardLayout({ children }) {
  const cookieStore = cookies();
  const token = cookieStore.get("merchant_token"); 

  if (!token) {
    redirect("/login"); 
  }

  return (
    <html lang="en">
      <body className="bg-gray-100 font-body w-full min-h-screen flex flex-col">
        <DashboardHeader />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
