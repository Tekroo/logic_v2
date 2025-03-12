/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite/plugin'; // Importe Flowbite avec ES6

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './node_modules/flowbite/**/*.js', // Ajoute cette ligne pour Flowbite
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
    flowbite, // Utilise le plugin Flowbite
  ],
}