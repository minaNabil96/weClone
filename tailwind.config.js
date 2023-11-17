/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // container: {
    //   center: true,
    //   padding: {
    //     DEFAULT: "0.1rem",
    //     sm: "0.1rem",
    //     md: "0.1rem",
    //     lg: "0.1rem",
    //     xl: "0.1rem",
    //   },
    // },
    extend: {
      animation: {
        loading: "loading 0.7s infinite",
      },
      colors: {
        mainColor: "#5c2d91",
        secondaryColor: "#92278f",
      },
      keyframes: {
        loading: {
          "0%": { transform: "rotate(0)" },
          "15%": { transform: "rotate(60deg)" },
          "25%": { transform: "rotate(90deg)" },
          "50%": { transform: "rotate(180deg)" },
          "65%": { transform: "rotate(210deg)" },
          "75%": { transform: "rotate(270deg)" },
          "85%": { transform: "rotate(310deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
