/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        container_background: '#fcfff3',
        input_background: '#f5f9eb',
        item_todo_background: '#f5f9f5'
      },
    },
  },
  plugins: [],
}

