/** @type {import('tailwindcss').Config} */
module.exports = {
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
      gridTemplateRows: {
        '5/40px': 'repeat(7, minmax(0, 34px))',
      },
      fontSize: {
        base: ['15px', '24px'],
      },
      colors: {
        'denim': {
          DEFAULT: '#0f172a',
          50: '#f1f4fb',
          100: '#e3e9f7',
          200: '#c7d3ee',
          300: '#99a4bd',
          400: '#6b758c',
          500: '#3d465b',
          600: '#323b4f',
          700: '#262f43',
          800: '#1b2337',
          900: '#0f172a',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
