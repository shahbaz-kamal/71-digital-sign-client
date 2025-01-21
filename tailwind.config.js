/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
       "color-text": "#1f1409",
        background: "#fdfaf8",
        primary: "#fd7e14",
        secondary: "#f2b98b",
        accent: "#d4d36c",
      },
    },
  },
  plugins: [require("daisyui")],
};
