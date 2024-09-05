// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,vue,ts}", // Spécifiez les chemins vers vos fichiers
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2b2d42",
        secondary: "#8d99ae",
        accent: "#ef233c",
        "bg-light": "#edf2f4",
        "bg-dark": "#1a1c29",
        "text-dark": "#2b2d42",
        "text-light": "#ffffff",
        "border-light": "#d3d3d3",
        divider: "#bfbfbf",
        "primary-dark": "#1a1c29",
        "secondary-dark": "#30344a",
        "accent-dark": "#d90429",
      },
      fontFamily: {
        base: ["Inter", "sans-serif"],
      },
      fontSize: {
        base: "16px",
      },
      lineHeight: {
        base: "1.6",
      },
      spacing: {
        "section-gap": "160px",
        "container-padding": "2rem",
      },
    },
  },
  plugins: [],
};
