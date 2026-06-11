import type { Config } from "tailwindcss";

/**
 * Design tokens extracted from the visual audit of the reference homepage.
 *
 * Palette      – brand yellow, deep ink text, orange stats band, cream
 *                surfaces and a playful kindergarten accent set.
 * Typography   – rounded display face for headings, humanist sans for body.
 * Radius       – pill buttons, 24–40px cards, blob-masked imagery.
 * Shadows      – soft, large-blur, low-opacity "floating card" shadows.
 */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#FFFBEB",
          100: "#FFF3C4",
          200: "#FFE787",
          300: "#FFDA4A",
          400: "#FFD021",
          DEFAULT: "#FFC907",
          600: "#E0A800",
          700: "#B98300",
        },
        sun: "#FFC907",
        tangerine: {
          DEFAULT: "#FF7A1A",
          dark: "#F25C05",
          deep: "#D94F00",
        },
        ink: {
          DEFAULT: "#243044",
          soft: "#41506B",
          mute: "#6B7A93",
        },
        cream: {
          DEFAULT: "#FFFBF2",
          dark: "#FFF4DD",
        },
        teal: { pop: "#00B5A5" },
        berry: { pop: "#FF5E8A" },
        sky: { pop: "#4FB7E8" },
        grape: { pop: "#8E6FD8" },
        leaf: { pop: "#7AC143" },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 6vw, 5.25rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 3.75rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(1.35rem, 2vw, 1.75rem)", { lineHeight: "1.25" }],
      },
      borderRadius: {
        blob: "62% 38% 46% 54% / 60% 46% 54% 40%",
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
      boxShadow: {
        card: "0 24px 48px -24px rgba(36, 48, 68, 0.22)",
        "card-hover": "0 32px 64px -24px rgba(36, 48, 68, 0.32)",
        header: "0 8px 32px -16px rgba(36, 48, 68, 0.18)",
        cta: "0 12px 28px -10px rgba(255, 122, 26, 0.55)",
        play: "0 0 0 12px rgba(255, 255, 255, 0.25)",
      },
      spacing: {
        section: "clamp(4rem, 8vw, 7.5rem)",
        gutter: "clamp(1.25rem, 4vw, 4rem)",
      },
      maxWidth: {
        shell: "82.5rem",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(4deg)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(255, 255, 255, 0.45)" },
          "100%": { boxShadow: "0 0 0 22px rgba(255, 255, 255, 0)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        float: "float 5s ease-in-out infinite",
        "float-delay": "float 6.5s ease-in-out 0.8s infinite",
        "spin-slow": "spin-slow 18s linear infinite",
        "pulse-ring": "pulse-ring 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
