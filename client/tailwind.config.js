/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      '2xs': ['12px', '16px'],
      xs: ['15px', '16px'],
      sm: ['18px', '20px'],
      base: ['22px', '19.5px'],
      lg: ['30px', '21.94px'],
      xl: ['40px', '24.38px'],
      '2xl': ['45px', '50px'],
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'pry': "#EEEEEE",
        "sec": "#B8D3AB",
        "sec2": "#F4F4F4",
        "sec3": "#26520A",
        "sec4": "#19530B",
        "btn": "#122D05",
      },

    },
  },
  plugins: [],
}

