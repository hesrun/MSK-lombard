/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'brown': '#C28D3F',
      },
      boxShadow: {
        'section': '0px 4px 20px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'marque': 'marque 10s linear infinite',
      },
      keyframes: {
        marque: {
          '0%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}
