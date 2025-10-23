/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       // İsteğe bağlı: Neon Mavi
       colors: {
         'neon-blue': '#00FFFF', // Cyan
       }
    },
  },
  plugins: [],
}