/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: "200px",
      labtop: "1024px",
      desktop: "1280px",
    },
    extend: {},
  },
  plugins: [],
};
