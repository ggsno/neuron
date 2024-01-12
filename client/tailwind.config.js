/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      point: "#73060F",
      "snow-white": "#EBEFF2",
      charcoal: "#36454F",
    },
  },
  plugins: [],
};
