/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: { min: "320px", max: "767px" },
        375: "375px",
        425: "425px",
        lg: { min: "768px", max: "1024px" },
        xl: { min: "1024px" },
        "2xl": "768px",
        "3xl": { min: "1023px" },
        "4xl": "2559px",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
        "6xl": "3.552rem",
      },
      fontWeight: {
        thin: "100",
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        "extra-bold": "800",
        black: "900",
      },
      colors: {
        primary: "#0E0E37",
        secondary: "#3C4BDC",
        buttonColor: "#4CAF50",
      },
      borderColor: {
        one: "34B8A3",
      },
      textColor: {
        primary: "white",
        secondary: "rgb(212 212 212);",
      },

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-130%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-350%)" },
        },
        infinitescroll: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "spin-slow-30": "spin 30s linear infinite",
        "spin-slow-25": "spin 25s linear infinite",
        "spin-slow-10": "spin 10s linear infinite",
        "marquee-infinite": "marquee 25s linear infinite",
        "marquee2-infinite": "marquee2 ",
        "infinite-scroll": "infinitescroll ",
      },
    },
  },
  plugins: [],
};
