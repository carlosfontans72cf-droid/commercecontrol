export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F7F8FA",
        surface: "#FFFFFF",
        ink: "#1A2130",
        muted: "#64748B",
        accent: "#0F6B62",
        border: "#E2E5EA",
        success: "#2F855A",
        warning: "#B7791F",
        danger: "#C53030",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
};