import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ceylon: "#082B49",
        amber: "#D98928",
        ivory: "#F5F1E8",
        ink: "#111820",
        tea: "#2F5D50",
        lagoon: "#1E7C8A",
        cinnamon: "#A65E35",
        sunset: "#F2B24D",
        marine: "#082B49",
        aqua: "#1E7C8A",
        saffron: "#D98928",
        coral: "#A65E35",
        emerald: "#2F5D50",
        luxury: {
          DEFAULT: "#111820",
        },
        gold: {
          DEFAULT: "#D98928",
          light: "#F2B24D"
        }
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "Avenir Next", "Manrope", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        glow: "0 24px 80px rgba(30, 124, 138, 0.2)",
        premium: "0 28px 80px rgba(8, 43, 73, 0.14)",
        "luxury-deep": "0 36px 110px rgba(17, 24, 32, 0.32)"
      },
      backgroundImage: {
        "soft-grid":
          "linear-gradient(rgba(8, 43, 73, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(8, 43, 73, 0.07) 1px, transparent 1px)",
        "luxury-noise": "url('/images/reference-frames/noise-1.png')"
      },
      spacing: {
        '18': '4.5rem',
        '28': '7rem'
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['5.5rem', { lineHeight: '1' }]
      }
    }
  },
  plugins: []
};

export default config;
