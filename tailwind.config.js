/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "mottai-red": "#CD2424",
        "mottai-tan": "#F8EEDB",
        "mottai-white": "#FFFFFF",
        "mottai-accent": "#dbb060",
      },
      fontFamily: {
        body: ["Nunito"],
        special: ["Gloria Hallelujah"],
      },
    },
  },
  plugins: [],
};
