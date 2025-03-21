import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "intro-background": "url('/images/intro-background.webp')",
        "company-services-background": "url('/images/background1.webp')",
        "team-background": "url('/images/team-background.webp')",
        "gate-background": "url('/images/gate.jpg')",
      },
      boxShadow: {
        custom: "0px 4px 25px 0px rgba(0, 0, 0, 0.05)",
        offer: "0px 2px 6px 0px rgba(0, 0, 0, 0.04)",
      },
      colors: {
        primary: {
          DEFAULT: "#EE8724",
        },
        secondary: {
          DEFAULT: "#01D1D2",
        },
        background: {
          DEFAULT: "#1A1728",
          500: "#FAF4FF",
          600: "#151220",
        },
        black: {
          DEFAULT: "#0a0a0a",
          500: "#323232",
        },
        gray: {
          DEFAULT: "#EBEBEB",
          100: "#9D9D9D",
          150: "#E7F7F2",
          200: "#E5E5E5",
          300: "#C2C5CA",
          400: "#F3F4F6",
          500: "#E4E4E4",
          600: "#4D5562",
          700: "#8892A4",
          800: "#E5E7EB",
          900: "#6C727F",
        },
        white: {
          DEFAULT: "#FFFFFF",
        },
        green: {
          DEFAULT: "#087759",
        },
        blue: {
          DEFAULT: "#263FA9",
        },
        orange: {
          DEFAULT: '#EE8724'
        }
      },
    },
  },
  plugins: [],
};

export default config;
