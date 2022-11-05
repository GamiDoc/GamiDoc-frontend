module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'yellow-gamy': '#FFB900',
        "gray-gamy": "#374151",
      },
      screens: {
        'xs': { 'max': '1200px' },

      },

    },

  },
  plugins: [],
}
