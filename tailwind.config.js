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
      keyframes: {
        dance: {
          "0%": { transform: "translate(5px,0)" },
          "25%": { transform: "translate(10px,10px)" },
          "50%": { transform: "translate(15px,0)" },
          "75%": { transform: "translate(10px,10px)" },
          "100%": { transform: "translate(5px,0)" },
        },
        updown: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },

      animation: {
        dance: "dance 1s ease-in-out infinite",
        updown: "updown 0.5s infinite",
      },

      animationDelay: {
        "1s": " 1s",
        "2s": "2s",
        "3s": "3s",
        "4s": "4s",
        "5s": "5s",
        "6s": "6s",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".delay-1s": {
          "animation-delay": "0.1s",
        },
        ".delay-2s": {
          "animation-delay": "0.2s",
        },
        ".delay-3s": {
          "animation-delay": "0.3s",
        },
        ".delay-4s": {
          "animation-delay": "0.4s",
        },
        ".delay-5s": {
          "animation-delay": "0.5s",
        },
        ".delay-6s": {
          "animation-delay": "0.6s",
        },
      });
    },
  ],
};

