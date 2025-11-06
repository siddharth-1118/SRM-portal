/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1D4ED8',
          '50': '#EBF5FF',
          '100': '#D6EAF8',
          '200': '#AED6F1',
          '300': '#85C1E9',
          '400': '#5DADE2',
          '500': '#3498DB',
          '600': '#2E86C1',
          '700': '#2874A6',
          '800': '#21618C',
          '900': '#1B4F72',
        },
        srm: {
          blue: '#007bff',
        }
      }
    }
  },
  plugins: [],
};
