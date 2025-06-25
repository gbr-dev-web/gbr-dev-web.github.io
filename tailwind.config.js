const aspectRatio = require('@tailwindcss/aspect-ratio')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: ["aspect-[16/9]"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [aspectRatio],
}
