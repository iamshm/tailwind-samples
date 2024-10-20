/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        leftBall: {
          "0%": {
            transform: "translate(-20px, -20px)",
          },
          "25%": {
            transform: "translate(0px)",
          },
          "50%": {
            transform: "translate(0px)",
          },
          "75%": {
            transform: "translate(0px)",
          },
          "87.5%": {
            transform: "translate(-10px, -10px)",
          },
          "100%": {
            transform: "translate(-20px,-20px)",
          },
        },
        rightBall: {
          "0%": {
            transform: "translate(0px)",
          },
          "25%": {
            transform: "translate(0px)",
          },
          "37.5%": {
            transform: "translate(10px, -10px)",
          },
          "50%": {
            transform: "translate(20px,-20px)",
          },
          "62.5%": {
            transform: "translate(10px, -10px)",
          },
          "75%": {
            transform: "translate(0px)",
          },
          "100%": {
            transform: "translate(0px)",
          },
        },
      },
      animation: {
        leftAnimation: "leftBall 1s linear infinite",
        rightAnimation: "rightBall 1s linear infinite",
      },
      colors: {
        gray: {
          900: "#202225",
          800: "#2f3136",
          700: "#36393f",
          600: "#4f545c",
          400: "#d4d7dc",
          300: "#e3e5e8",
          200: "#ebedef",
          100: "#f2f3f5",
        },
      },
    },
  },
  plugins: [],
};
