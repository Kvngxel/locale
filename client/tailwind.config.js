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
      md: ['26px','22px'],
      lg: ['30px', '21.94px'],
      xl: ['40px', '24.38px'],
      '2xl': ['45px', '50px'],
      '3xl': ['82px', '50px'],
      // Nav Icon
      'nxl':['15px', '11px']
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'heroBg': "url('/src/assets/images/hero.png')",
      },
      colors: {
        'pry': "#ffffff",
        "sec": "#B8D3AB",
        "sec2": "#F4F4F4",
        "sec3": "#26520A",
        "interact": "#f8d476",
        "purple": "#e1dae4",
        "btn": "#122D05",
        "main": "#f8f7f4"
      },
      textColor: {
        'selection': 'blue', // Customize the color here
      },

    },
  },
  plugins: [],
}

