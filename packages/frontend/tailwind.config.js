module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ["hover", "focus", "group-hover"],
    },
  },
  plugins: [require("tailwindcss-logical"), require("@tailwindcss/typography")],
};
