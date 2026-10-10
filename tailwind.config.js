/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/SalonLocations.jsx'],
  prefix: 'tw-',
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: { cream: '#fcf8f0', champagne: '#dfc9a4', plum: '#422238', muted: '#75676c' },
    },
  },
  plugins: [],
};
