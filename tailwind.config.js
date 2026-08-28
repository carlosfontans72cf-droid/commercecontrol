/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./client/src/**/*.{js,ts,jsx,tsx}",
    "./client/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Puedes añadir colores corporativos aquí más adelante
        primary: "#2563EB",
        secondary: "#64748B",
      },
    },
  },
  plugins: [],
}