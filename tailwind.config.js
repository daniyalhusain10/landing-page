/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./*.{html,js}", "**/*.{png,jpg,svg}"],
  theme: {
    extend: {
      fontFamily :{
        "montserrat" : ["Montserrat", "sans-serif"],
        "favorit" : ["Favorit" ,"sans-serif"],
        "great-vibes" : ["Great Vibes", "sans-serif"],
      },
      
    },
  },
  plugins: [],
}

