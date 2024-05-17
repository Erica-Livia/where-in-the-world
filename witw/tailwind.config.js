/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors:{
      'light-blue':'#0079FF',
      'c-gray':'#697c9A',
      'c-light-gray': '#4B6A9B',
      'c-dark':'#2B3442',
       'c-white':'#FFFFFF',
       'm-dark':'#1E2A47',
       'd-dark':'#141D2F',
       'light-bg':'#F6F8FF',

    },
    extend: {},
    fontFamily:{
      spacemono:['Space Mono','monospace']
    }
  },
  plugins: [],
}

