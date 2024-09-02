import type { Config } from "tailwindcss";

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
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {},
      colors: {
        "primary-light": "#4496CC",
        "on-primary-light": "#FEFEFE",
        "background-light": "#EDF5F8",
        "on-color-light": "#010D1A",
        white: "#FEFEFE",
        "primary-dark": "#69B6D1",
        "on-primary-dark": "#043D79",
        "background-dark": "#022040",
        "on-color-dark": "#FEFEFE",
        black: "#010D1A",
      },
    },
  },
  plugins: [],
  darkMode: "class",
  safelist: [
    "bg-gray-200",
    "dark:bg-gray-700",
    "peer-checked:bg-blue-600",
    "peer-focus:ring-blue-300",
    "dark:peer-focus:ring-blue-800",
  ],
};
export default config;
