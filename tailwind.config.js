/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkPrimary: "#2A254B",
        primary: "#4E4D93",
        lightGray: "#F9F9F9",
        borderGray: "#EBE8F4",
        borderDark: "#CAC6DA",
        text: "#726E8D",
        text2: "#505977",
      },
      screens: {
        'xxs':'400px',
        'xs': '480px', 
        'sm': '640px', 
        'md': '850px', 
        'mmd': '1000px',
        'lg': '1200px', 
        'xl': '1440px',
      },
      fontSize:{
        'nr': "16px"
      }
    },
  },
  plugins: [],
};