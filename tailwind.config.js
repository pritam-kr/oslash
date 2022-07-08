/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '18rem',
        'shit-card': '28rem',
        'billing-card': '32rem'
      }
    }
  },
  plugins: [],
}
