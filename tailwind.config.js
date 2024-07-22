/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'background' :'rgba(63, 238, 207, 0.1)',
        'borderColor':'rgb(132, 132, 132)',
        'logout': 'rgba(255, 94, 72, 0.95)',
        'button': '#3feecf',
      },
      height: {
        'avatar': '102px',
        'loginHeight': '450px',
      },
      width:{
        'avatar': '102px',
        'loginWidth': '430px',
      }

    },
  },
  plugins: [],
}

