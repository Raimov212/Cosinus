/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: { min: "320px", max: "426px" },
        md: { min: "426px", max: "768px" },
        lg: { min: "768px", max: "1023px" },
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
    },
  },
  plugins: [],
};
