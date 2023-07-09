/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#050E29",
        secondary: "#4E6677",
        white: "#FCF8F7",

        "brand-dark": "#A6280C",
        "brand-accent": "#D4330F",
        "brand-light": "#EFE9EB",

        background: "#F0F3F7",
        "card-bg": "#FCFEFF",
      },

      fontFamily: {
        base: "Plus Jakarta Sans, sans-serif",
      },

      fontSize: {
        "link-hovered": ["16px", { fontWeight: "bold" }],
        price: ["25px", { letterSpacing: "-0.625px", fontWeight: "800" }],
        tags: [
          "13px",
          {
            letterSpacing: "0.13px",
            fontWeight: "800",
          },
        ],

        body: ["16px", { lineHeight: "145%", fontWeight: "500" }],
        link: "16px",

        title: "25px",
        "headings-a": ["39px", { lineHeight: "110%" }],
        "headings-b": ["31px", { lineHeight: "110%" }],
      },
    },
  },
  plugins: [],
};
