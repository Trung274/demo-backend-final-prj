/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }

      },
      boxShadow: {
        'neon': ' 0 0 10px #06d6a1, 0 0 20px #06d6a1, 0 0 40px #06d6a1, 0 0 80px #06d6a1',
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out'
      },

    },
  },
  plugins: [],

}