/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Make sure all your source files are included
  ],
  darkMode: "class", // <--- THIS ENABLES CLASS-BASED DARK MODE
  theme: {
    extend: {},
  },
  plugins: [],
};

