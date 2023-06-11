/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    maxHeight: {
      imgPop:
        "calc((var(--maxPrimaryPageWidth) - 80px - 260px - (var(--discoverColumnPadding) * var(--numberOfDiscoverColumns))) / var(--numberOfDiscoverColumns) * 1.5)",
    },
    backgroundPosition: {
      customLeft: "left calc((50vw - 170px) - 340px) top",
    },
    backgroundImage: {
      customprimary:
        "linear-gradient(to right, rgba(31.5, 10.5, 52.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 10.5, 52.5, 0.84) 50%, rgba(31.5, 10.5, 52.5, 0.84) 100%)",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
