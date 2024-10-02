/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        logo: "#3f8c00",
        primary: "#000000",
        secondary: "#377405",
        tertiary: "#153010",
        "black-100": "#115d25",
        "black-200": "#032c10",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 20px 160px -20px #032c10",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg22.png')",
      },
    },
  },
  plugins: [],
};
