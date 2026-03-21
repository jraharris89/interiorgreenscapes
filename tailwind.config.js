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
          50: '#f3f7ec',
          100: '#e5efd5',
          200: '#d3e5b5',
          300: '#b8ca92',
          400: '#9daf6f',
          500: '#738754',
          600: '#5f7440',
          700: '#4a5b32',
          800: '#3e4e27',
          900: '#33401c',
        },
        'forest': {
          50: '#f3f6f0',
          100: '#e3eadd',
          200: '#c5d4b8',
          300: '#9db58e',
          400: '#738754',
          500: '#5f7440',
          600: '#4a5b32',
          700: '#3e4e27',
          800: '#33401c',
          900: '#263012',
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
        'display': ['Raleway', 'sans-serif'],
        'body': ['Lora', 'Georgia', 'serif'],
        'script': ['"Alex Brush"', 'cursive'],
        'copperplate': ['Copperplate', '"Copperplate Gothic Light"', '"small-caps"', 'serif'],
        'subtitle': ['"Book Antiqua"', 'Palatino', '"Palatino Linotype"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
