import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef3fc",
          100: "#d8e3f8",
          200: "#b3c7f0",
          300: "#8aa8e6",
          400: "#6a8fde",
          500: "#537dd8",
          600: "#3d63bd",
          700: "#314e96",
          800: "#283f78",
          900: "#1f3160",
        },
        ink: {
          DEFAULT: "#0f1623",
          soft: "#1a2536",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(15, 22, 35, 0.18)",
        glow: "0 20px 60px -15px rgba(83, 125, 216, 0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease forwards",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
