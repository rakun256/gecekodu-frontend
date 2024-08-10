/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#D9D9D9",
        dark: "#222125",
      },
      fontFamily: {
        sans: ["Urbanist", "sans-serif"],
      },
    },
  },
  plugins: [],
};

