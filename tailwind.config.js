/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors :{
      pertama:'#062C30',
      netral:'#F5F5F5',
      hov:'#E2D784',
      Text: '#A0A0A0'
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'] 
    },},
  },
  plugins: [],
}
