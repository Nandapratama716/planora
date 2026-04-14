import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f2f7f6",
          100: "#dceae7",
          200: "#b8d5cf",
          300: "#8cb8ad",
          400: "#63998d",
          500: "#497f74",
          600: "#37645c",
          700: "#2f504a",
          800: "#2a423d",
          900: "#253935"
        }
      }
    },
  },
  plugins: [],
};

export default config;