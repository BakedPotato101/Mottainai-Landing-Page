import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function PublicLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <title>Mottainai</title>
        <meta name="description" content="Mottainai" />
        <meta name="keywords" content="Mottainai" />
        <meta name="author" content="Mottainai" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-mottai-red font-body text-4xl w-full min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
