/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        blues: "#214D90",
        yellows: "#E6C120"
      } ,
      padding:{
        "p18" : "18%"
      },
    },
  },
  plugins: [],
}

