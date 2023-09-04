import withMT from "@material-tailwind/html/utils/withMT";
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A937FF",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
});
