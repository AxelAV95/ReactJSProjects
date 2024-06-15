/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  fontFamily: {
    custom: ['font-ezo', 'sans-serif'],
    // Puedes agregar más fuentes aquí si necesitas
  },
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
}

