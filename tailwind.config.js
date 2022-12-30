/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#111111",
        secondary: "#1D1D1D",
        btnColor: "#9BFF00",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
 
  },
  plugins: [],
};
