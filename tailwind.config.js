const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rbm: ["var(--font-rbm)", ...fontFamily.sans],
        pfd: ["var(--font-pfd)", ...fontFamily.sans],
        ocb: ["var(--font-ocb)", ...fontFamily.sans],
        ocl: ["var(--font-ocl)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
