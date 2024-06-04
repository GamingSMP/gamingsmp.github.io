/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '-1px 0px 20px 20px #00000061;',
      }
    },
    fontFamily: {
      'sora': 'sora',
      'minecraft': 'Minecraft'
    }
  },
  plugins: [],
}

