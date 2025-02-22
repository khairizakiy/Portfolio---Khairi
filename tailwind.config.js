/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#ffba00',
        dark: '#0f172b',
        secondary: '#62748e',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

