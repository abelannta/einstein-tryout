/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "src/modules/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: "#001D3D",
        primary: "#003566",
        bold: "#FFC300",
        boldbtn: "#FFD60A",
        paper: "#FEF0BE",
        false: "#F79B9B",
        correct: "#9EE09D",
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#003566",
          secondary: "#FFD60A",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
