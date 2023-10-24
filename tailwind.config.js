/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'border': 'inset 0 0 0 2px',
      }  
    },
  },
  plugins: [],
}