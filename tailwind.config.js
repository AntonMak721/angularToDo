/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        background: 'rgba(63, 238, 207, 0.1)',
        borderColor: 'rgb(132, 132, 132)',
        logout: 'rgba(255, 94, 72, 0.95)',
        button: '#3feecf',
        ButtonHoverOrFocus: '#76a39b',
        ButtonActive: '#207566',
      },
      height: {
        avatar: '102px',
        loginHeight: '450px',
      },
      width: {
        avatar: '102px',
        loginWidth: '430px',
      },
    },

  },
  plugins: [],
};
