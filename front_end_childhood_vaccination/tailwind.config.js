/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'darkBlue':'#002333',
        'white':'#ffffff',
        'lightGreen':'#deefe7',
        'transparentBlue':'#e7f5f5',
        'greenDarkBlue':'#159a9c',
        'lightGrey':'#b4bec9',
        'darkGray':'#bababa',
        'transparentgray':'rgb(128 128 128 0.15)',
        'hoverGreen':"#abdfc7",
      },
      keyframes: {
        flotar: {
          "0%": {
            transform: "translateY(0px)",
          },
          "100%": {
            transform: "translateY(20px)",
          },
        },
      },

      dropShadow: {
        '2xl': '0 20px 10px #94a3e5',
      }
    },
  },
  plugins: [],
};
