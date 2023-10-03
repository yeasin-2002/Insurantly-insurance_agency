/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navyBlue: "#252B42",
        skyBlue: "#8EC2F2",
        heroGradient: {
          100: "",
        },
      },
    },
  },
  plugins: [],
};
