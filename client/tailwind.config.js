/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        point: "#73060F",
        "snow-white": "#EBEFF2",
        charcoal: "#36454F",
      },
    },
  },
  plugins: [],
};
