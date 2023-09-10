/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        'nunito' : ['Nunito', 'sans'],
        'poppin' : ['Poppins', 'sans'],
        'heebo' : ['Heebo', 'sans']
      },
      colors : {
        'primary' : '#30e3ca',
        'secondary' : '#46c3db',
      }
    },
  },
  plugins: [],
}

