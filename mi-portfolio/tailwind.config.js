/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // ESTA LÍNEA ES CLAVE:
    "./src/**/*.{js,ts,jsx,tsx}", // Esto le dice a Tailwind que busque clases en todos estos tipos de archivos dentro de 'src/'
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
