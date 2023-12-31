/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
  "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    theme: {
      fontFamily: {
        // 'sans': [],
        'roboto': ['Roboto', 'sans-serif'],
      }
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}


