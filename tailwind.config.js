/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-text": "#1f1409", // Text color - remains dark and neutral for readability
        background: "#f8f7f4", // Light background for cleanliness
        primary: "#ed1c24", // Logo red as the primary color
        secondary: "#00a651", // Logo green as the secondary color
        accent: "#fbb034", // Bright orange for highlights
        neutral: "#2b2d42", // Deep gray for neutral elements
        "light-accent": "#f4e1d2", // Subtle beige for soft contrasts
        "muted-green": "#80c785", // Softer green for backgrounds or borders
        "muted-red": "#f28b8b", // Softer red for alerts or emphasis
      },
    },
  },
  plugins: [require("daisyui")],
};
