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

      // Flexbox content gaps
      gap: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
      },
    },
  },
  plugins: [],
};
