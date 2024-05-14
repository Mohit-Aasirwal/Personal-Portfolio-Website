/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Itim: ["Itim-Regular", "sans-serif"],
      },
      colors: {
        primary: "#262424",
        secondaryblack: "#0C0C0C",
        white: "#D9D9D9",
        darkblack: "#000000",
        greyish: "#A0A0A0",
        button: "#2A2A2A",
      },
    },
    plugins: [],
  },
  // class: "dark",
};
