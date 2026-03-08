/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink-main':  '#FFBEDA',
        'pink-dark':  '#FB6F92',
        'pink-deep':  '#e8547a',
        'pink-soft':  '#FFF0F5',
        'pink-light': '#FFE4EF',
        'charcoal':   '#1a1a2e',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
