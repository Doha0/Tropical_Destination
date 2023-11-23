/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sansSerif1": ["Inter","sans-serif", "sans"],
        "sansSerif2": ["Poppins","sans-serif", "sans"],
      },
    },
  },
  plugins: [],
}