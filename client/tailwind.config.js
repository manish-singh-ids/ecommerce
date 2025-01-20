/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kaushan: ['Kaushan Script', 'serif'],
      },
      backgroundImage: {
        'hero': "url('./src/assets/hero.jpg')",
      },
    },
  },
  plugins: [],
}
