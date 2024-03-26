import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        ...colors,
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        "off-white": "#F9F9F9",
        "off-black": "#000000",
        primary: "#0098EA",
        "primary-dark": "#08343A",
        secondary: "#88EE86",
        "secondary-dark": "#041B1C",
        "secondary-sub": "#39D3C1",

        "dark-grey-2-30": "#B3B3B3",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        Fredoka: ['"Fredoka"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
