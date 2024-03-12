/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#171717",
          "200": "#060606",
          "300": "rgba(0, 0, 0, 0.2)",
        },
        darkgray: {
          "100": "#979797",
          "200": "rgba(170, 170, 170, 0.15)",
        },
        black: "#000",
        cornflowerblue: {
          "100": "#3797ef",
          "200": "#408dd6",
        },
      },
      spacing: {},
      fontFamily: {
        "segoe-ui": "'Segoe UI'",
        "sf-pro-text": "'SF Pro Text'",
      },
      borderRadius: {
        "81xl": "100px",
        "8xs": "5px",
        "3xs": "10px",
      },
    },
    fontSize: {
      xs: "12px",
      base: "16px",
      mini: "15px",
      sm: "14px",
      "2xs": "11px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
