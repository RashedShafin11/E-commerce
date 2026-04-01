/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0A192F',
          800: '#112240',
          700: '#1d2d50',
        },
        orange: {
          500: '#FF8C00',
          600: '#E67E00',
        },
        grey: {
          50: '#F8F9FA',
          100: '#E9ECEF',
          200: '#DEE2E6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
