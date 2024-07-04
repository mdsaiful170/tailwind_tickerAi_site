/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["*"],
  theme: {
    extend: {
    
      fontFamily: {
        league: ["League Spartan", "sans-serif"],
      },
      colors: {
        blue: "#5677AC",
        grayDark: "#333333",
        whiteColor: "#fff",
        DarkbodyColor: "#000814",
        borderColor: "#DDE2E5",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
