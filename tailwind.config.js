/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "da-black": "#1A1917",
        "da-white": "#FCFAEE",
        "da-banana": "#EBC94C",
      },
      fontFamily: {
        sans: ["Noto Sans TC", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
