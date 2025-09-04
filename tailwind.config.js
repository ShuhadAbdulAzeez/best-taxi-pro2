/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'taxi-yellow': '#FFD700',
        'taxi-black': '#1a1a1a',
        'taxi-gray': '#f8f9fa',
        'taxi-dark': '#2d3748',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
