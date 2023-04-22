/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      '1' : "#E4FBFF",
      '2' : "#B8B5FF",
      '3' : "#7868E6",
      '4' : "#EDEEF7",
    },
    boxShadow: {
      "1" : "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
    },
    extend: {},
  },
  plugins: [],
}
