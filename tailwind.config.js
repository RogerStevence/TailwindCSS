/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/imgaes/Ellipse_1.svg')",
        'footer-texture': "url('/imgaes/Ellipse_1.svg')",
      }
    },
  },
  plugins: [],
}

