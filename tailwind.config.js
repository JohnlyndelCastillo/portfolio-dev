/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scrollBehavior: ['smooth'],
      colors: {
        'main-background': '#3E5879',
        'background-left': '#FFD2A0 ',
        'background-right': '#FFCCEA',
        'background-top': '#CDC1FF',
        'cv-button': '#FEEE91',
        'facebook': '#81BFDA',
        'github': '#F6C794',
        'gmail': '#FF8383',
        'about-bg': '#FFF9BF',

      },
      fontFamily: {
        Lexend: ["Lexend Exa, serif"],
        Poppins: ["Poppins, serif"],
      },
      container: {
        padding: "2rem",
        center: true,
      },
      
    },
  },
  plugins: [],
}

