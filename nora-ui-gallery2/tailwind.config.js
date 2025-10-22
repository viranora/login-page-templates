/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Yeni canlı renklerimizi ekleyelim
      colors: {
        'playful-pink': '#FF69B4', // Canlı Pembe
        'playful-yellow': '#FFD700', // Altın Sarısı
        'playful-cyan': '#00FFFF', // Camgöbeği
        'playful-lime': '#32CD32', // Limon Yeşili
      },
    },
  },
  plugins: [],
}