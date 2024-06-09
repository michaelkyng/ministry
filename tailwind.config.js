/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app.vue", "./pages/**/*.{vue,js}", "./components/**/*.{vue,js}"
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      fontFamily: {
        lato: ["lato","arial", "nunito", "sans-serif"],
      },
      colors:{
        primaryColor:'#065416',
        borderColor:'#0CAD2C',
      }
    },
  },
  plugins: [],
}

