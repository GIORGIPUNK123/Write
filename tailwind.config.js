/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primaryDark: {
          DEFAULT: '#191923',
          50: '#f7f7f8',
          100: '#eaebeb',
          200: '#c5c5c6',
          300: '#a0a0a2',
          400: '#5a5a5d',
          500: '#141417',
          600: '#121214',
          700: '#0f0f11',
          800: '#0c0c0e',
          900: '#09090a',
        },
        orange: {
          DEFAULT: '#f77f00',
          50: '#fff7e6',
          100: '#ffe8bf',
          200: '#ffd499',
          300: '#ffc170',
          400: '#EB4600',
          500: '#f77f00',
          600: '#dc7200',
          700: '#b85900',
          800: '#944200',
          900: '#7a3300',
        },
        buttonDark: '#0e79b2',
      },
    },
  },
  plugins: [],
};
