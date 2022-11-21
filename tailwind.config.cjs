/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        orange: " #FF4D00",
        black: "#000000",
        gradientBlue: "#2549D3",
        bgFooter: "rgba(255, 77, 0, 0.6)",
        white: "#FFFFFF",
        navBackground: "#FFE9E0",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        serif: ["Roboto", "sans-serif"],
        mono: ["Oleo Script", " cursive"],
      },
    },
  },
  plugins: [],
};
