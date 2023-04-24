/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      '1': "#E4FBFF",
      '2': "#B8B5FF",
      '3': "#7868E6",
      '4': "#EDEEF7",
    },
    extend: {
      boxShadow: {
        'first': 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        'second': '0 20px 50px rgba(240, 46, 170, 0.7)',
      }
    },
  },
  plugins: [],
}
