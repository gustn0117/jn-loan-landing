import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#06080F",
          900: "#0A1020",
          800: "#111827",
          700: "#1F2937",
          600: "#374151",
        },
        gold: {
          50: "#FBF7EC",
          100: "#F5ECCF",
          200: "#E8D69A",
          300: "#D9BB6B",
          400: "#C9A24A",
          500: "#B58A33",
          600: "#8E6A22",
        },
      },
      fontFamily: {
        sans: [
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Roboto",
          "sans-serif",
        ],
        serif: ["'Noto Serif KR'", "serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(10,16,32,0.04), 0 8px 24px rgba(10,16,32,0.06)",
        card: "0 1px 3px rgba(10,16,32,0.06), 0 20px 40px -16px rgba(10,16,32,0.12)",
        glow: "0 0 0 1px rgba(201,162,74,0.25), 0 20px 60px -20px rgba(201,162,74,0.45)",
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(10,16,32,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,16,32,0.04) 1px, transparent 1px)",
        "noise":
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.06 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out both",
        "fade-in": "fadeIn 1s ease-out both",
        "shimmer": "shimmer 3s linear infinite",
        "marquee": "marquee 38s linear infinite",
        "float-slow": "floatSlow 8s ease-in-out infinite",
        "draw": "draw 2s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floatSlow: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        draw: {
          "0%": { strokeDashoffset: "200" },
          "100%": { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
