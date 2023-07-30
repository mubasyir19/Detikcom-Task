/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        secondary: '#007CBD',
        light: '#3EB7DD ',
        icon: 'linear-gradient(319deg, #007CBD 0%, #3EB7DD 100%)',
        back: '#F4FBFF',
        gray: '#7A7B7E',
      },
      fontFamily: {
        sans: ['Montserrat'],
      },
      backgroundImage: {
        background: "url('/public/background.png')",
      },
    },
  },
  plugins: [],
};
