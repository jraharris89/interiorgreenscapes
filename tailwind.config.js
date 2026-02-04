/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sage': {
          50: '#f6f7f2',
          100: '#e9ece0',
          200: '#d4dbc3',
          300: '#b8c49d',
          400: '#a2af72',
          500: '#879359',
          600: '#697445',
          700: '#525a38',
          800: '#434930',
          900: '#3a3f2b',
        },
        'forest': {
          50: '#f3f6f3',
          100: '#e3e9e3',
          200: '#c8d4c8',
          300: '#a1b5a1',
          400: '#759075',
          500: '#567356',
          600: '#435c43',
          700: '#374a37',
          800: '#2e3d2e',
          900: '#273327',
        },
        'earth': {
          50: '#f9f7f4',
          100: '#f0ebe3',
          200: '#e0d5c6',
          300: '#cdb9a2',
          400: '#b89a7d',
          500: '#a98264',
          600: '#9c7157',
          700: '#825c49',
          800: '#6a4d3f',
          900: '#574035',
        },
      },
      fontFamily: {
        'display': ['"Cormorant Garamond"', 'Georgia', 'serif'],
        'body': ['Lora', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
