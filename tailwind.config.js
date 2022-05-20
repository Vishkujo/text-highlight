module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        zoominandout: {
          '0%, 100%': {
            transform: 'scale(1, 1)'
          },
          '50%': {
            transform: 'scale(1.05, 1.05)'
          },
        }
      },
      animation: {
        zoominandout: 'zoominandout 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
