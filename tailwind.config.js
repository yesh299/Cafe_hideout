/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: "#faf8f3",
          100: "#f5f1e8",
          200: "#e8dcc7",
          300: "#dbc7a6",
          400: "#c4a97f",
          500: "#a88d6e",
          600: "#8b6f4d",
          700: "#6b523a",
          800: "#4d3825",
          900: "#2f2416",
        },
        cream: "#f5f1e8",
        beige: "#e8dcc7",
        gold: "#d4a373",
      },
      fontFamily: {
        serif: ["Georgia", "serif"],
        sans: ["Segoe UI", "Tahoma", "sans-serif"],
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-in-out",
        slideUp: "slideUp 0.6s ease-out",
        slideDown: "slideDown 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
