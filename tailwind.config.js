/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js,php}"],
  theme: {
    extend: {},
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
     }
  },
  plugins: [],
}


