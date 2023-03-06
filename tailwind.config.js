/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'cor60': '#0D1B2A',
      'cor30': '#4F6D7A',
      'cor10': '#DBE9EE',
      transparent: 'transparent',
    },
  },
  plugins: [],
}
