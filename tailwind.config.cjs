/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#04044d",
        light: "#f5f5f5",
        primary: "#3e70b6", // 240,86,199
        primaryDark: "#5891e6", // 80,230,217
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      // gradient: {
      //   primaryGradient:
      //     "linear-gradient(83deg, rgba(62,112,182,1) 0%, rgba(4,4,77,1) 100%)"
      // },
      backgroundImage: {
        rightGradient:
          "linear-gradient(266deg, rgba(62,112,182,1) 0%, rgba(4,4,77,0.6867121848739496) 100%)",
        leftGradient:
          "linear-gradient(90deg, rgba(62,112,182,1) 0%, rgba(4,4,77,0.6867121848739496) 100%)",
        circularLight:
          "repeating-radial-gradient(rgba(0, 0, 0, 0.4) 2px, #F5F5F5 5px, #F5F5F5 100px);",
        circularDark:
          "repeating-radial-gradient(rgba(255, 255, 255, 0.5) 2px, #1b1b1b 8px, #1b1b1b 100px);",
        circularLightLg:
          "repeating-radial-gradient(rgba(0, 0, 0, 0.4) 2px, #F5F5F5 5px, #F5F5F5 80px);",
        circularDarkLg:
          "repeating-radial-gradient(rgba(255, 255, 255, 0.5) 2px, #1b1b1b 8px, #1b1b1b 80px);",
        circularLightMd:
          "repeating-radial-gradient(rgba(0, 0, 0, 0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)",
        circularDarkMd:
          "repeating-radial-gradient(rgba(255, 255, 255, 0.5) 2px,#1b1b1b 6px,#1b1b1b 60px)",
        circularLightSm:
          "repeating-radial-gradient(rgba(0, 0, 0, 0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)",
        circularDarkSm:
          "repeating-radial-gradient(rgba(255, 255, 255, 0.5) 2px,#1b1b1b 4px,#1b1b1b 40px)",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "479px" },
    },
  },
  plugins: [],
};
