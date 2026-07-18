import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        base: {
          950: "#05070B",
          900: "#0A0E14",
          800: "#0F1420",
          700: "#12161F",
          600: "#1A2029",
          500: "#1E2530",
          400: "#2A3240",
        },
        ink: {
          100: "#F2F4F8",
          200: "#E6E9EF",
          300: "#C7CDD9",
          400: "#8B95A7",
          500: "#5B6578",
        },
        accent: {
          DEFAULT: "#4C7CF3",
          dim: "#2F5FD6",
          soft: "#8FB0FA",
          glow: "#3B82F6",
        },
        signal: {
          green: "#3DDC97",
          amber: "#F5B942",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        mono: ["IBM Plex Mono", "SFMono-Regular", "Menlo", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 8px 24px -12px rgba(0,0,0,0.6)",
        "accent-glow": "0 0 0 1px rgba(76,124,243,0.35), 0 8px 30px -8px rgba(76,124,243,0.35)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        blink: "blink 1.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
