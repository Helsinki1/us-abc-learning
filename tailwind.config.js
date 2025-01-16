/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit', // just in time mode
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


