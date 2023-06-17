/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    maxHeight: {
      imgPop:
        "calc((var(--1300px) - 80px - 260px - (var(--30px) * var(--5))) / var(--5) * 1.5)",
    },
    backgroundPosition: {
      customLeft: "left calc((50vw - 170px) - 340px) top",
      landing: "50% 200px",
    },
    backgroundImage: {
      customprimary:
        "linear-gradient(to right, rgba(31.5, 10.5, 52.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 10.5, 52.5, 0.84) 50%, rgba(31.5, 10.5, 52.5, 0.84) 100%)",
      bar: "src/assets/svg/bar.svg",
      trailers:
        "linear-gradient(to right, rgba(var(--3,37,65), 0.75) 0%, rgba(var(--3,37,65), 0.75) 100%)",
    },
    backgroundSize: {
      maxPrimaryPageWidth: "1300px",
    },
    maxWidth: {
      maxPrimaryPageWidth: "1300px",
    },
    extend: {
      spacing: {
        30: "30px",
        34: "34px",
      },
      fontSize: {
        10: "10px",
      },
      colors: {
        blue: "#05B4E4",
        darkBlue: "#042541",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwindcss-gradients"),
    // require("prettier-plugin-tailwindcss"),
  ],
};
