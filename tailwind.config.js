/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    "./posts/**/*.mdx",
    "./util/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        gray: colors.trueGray,
      },
      gridTemplateRows: {
        '5/40px': 'repeat(7, minmax(0, 34px))',
      },
      transitionProperty: {
        'width': 'width',
        'bg': 'background'
      },
      fontSize: {
        base: ['15px', '24px'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
