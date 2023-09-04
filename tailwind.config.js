/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'background-black': '#080808',
      'background-light-black': '#1B1B1B',
      'background-white': '#FFF',
      'btn-light-green': '#3F8E00',
      'btn-green': '#3F8E00',
      'btn-cian': '#2AB090',
      'btn-border-light-green': '#62BA1B',
      'btn-border-green': '#62BA1B',
      'btn-orange': '#FFA217',
      'btn-blue': '#000AFF'
    },
    fontFamily: {
      ibmPlexMono: ['IBM Plex Mono', 'monospace'],
      raleway: ['Raleway', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}