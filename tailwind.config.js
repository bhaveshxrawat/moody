/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      'md': {'max': '675px'},
    }
  },
  plugins: [],
}
