import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-mottai-tan font-body text-4xl w-full h-full">{children}</body>
    </html>
  );
}
