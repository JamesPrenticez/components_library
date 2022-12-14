/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['.75rem', '1rem'], //font size, line height
      sm: ['.875rem', '2rem'],
      base: ['1rem', '1rem'],
      normal: ['1rem', '1rem'],
      lg: ['1.125rem', '1.125rem'],
      xl: ['1.25rem', '1.50rem'],
      "2xl": ['2rem', '5.5rem'],
      "3xl": ['3rem', '6.5rem'],
      "4xl": ['4rem', '7.5rem'],
      "5xl": ['5rem', '7.5rem'],
      "6xl": ['6rem', '8.5rem'],
      "7xl": ['7rem', '9.5rem'],
    },
  },
  plugins: [],
}