/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playPen: ["Playpen Sans", "cursive"],
      },
      colors: {
        peach: "#EF798A",
      },
    },
  },
  plugins: [],
};
