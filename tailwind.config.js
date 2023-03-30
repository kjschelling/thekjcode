const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      gray: colors.slate,
      pink: colors.pink,
      green: colors.emerald,
      purple: colors.purple,
      red: colors.red,
      black: colors.black,
      white: colors.white,
      beige: "#efe4de",
    },
    screens: {
      xxs: "270px",
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      xxl: "1980px",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      source: ["Source Sans Pro", "sans-serif"],
    },
    extend: {
      scale: {
        115: "1.15",
      },
    },
  },
  plugins: [],
};
