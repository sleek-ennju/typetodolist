/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-light' : "#8284FA",
        'purple-dark' : "#5E60CE",
        'blue-light' : "#4EA8DE",
        'blue-dark' : "#1E6F9F",
        'base-700' : "#0D0D0D",
        'base-600' : "#1A1A1A",
        'base-500' : "#262626",
        'base-400' : "#333333",
        'base-300' : "#808080",
        'base-200' : "#D9D9D9",
        'base-100' : "#F2F2F2",
        'danger' : "#E25858",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}