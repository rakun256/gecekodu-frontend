/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: '#D9D9D9', 
        dark: '#222125', 
      },
      fontFamily: {
        sans: ['Urbanist', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

