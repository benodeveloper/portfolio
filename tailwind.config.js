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
    colors: {
      jet: {
        black: '#1b1b1b',
      },
    },
    extend: {
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
