/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "pale-blue": "#EBF1FF",
        "violet-blue": "#4E21CA",
        "dark-gray-blue": "#303B5A",
        "orangey-yellow": "#FFB01F",
        "green-teal": "#00BD94",
        "coblat-blue": "#1125D4",
        "light-red": "#FF5757",
        "slate-blue": {
          light: "#7857FF",
          dark: "#2E2BE9",
        },
      },
    },
  },
  plugins: [],
};
