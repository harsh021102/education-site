/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        merri: ['Merriweather', 'serif'],
        lobster: ['Lobster', 'cursive']
      },
      colors: {
        purplish: '#742FF6',
        lightpurple: '#CFBDEC',
        blackish: '#252525', 
      },
      screens: {
        md1: '770px',
        md2: '890px'
      }
    },
  },
  plugins: [],
}
