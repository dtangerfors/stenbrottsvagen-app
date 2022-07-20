const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Clash Grotesk', 'sans-serif'],
      title: ['Clash Grotesk', '-apple-system, sans-serif'],
      mono: ['Clash Grotesk', 'monospace']
    },
    fontSize: {
      '0': '0',
      'sm': '1.2rem',
      'base': '1.7rem',
      'headline': '1.4rem',
      'heading': '3.3rem',
      'title1': '2.8rem',
      'title2': '2.3rem',
      'default': '16px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
    },
    extend: {
      backgroundImage: theme => ({
        'hero-bg': "linear-gradient(to left bottom, rgba(0,0,0, .1), #2c564e), url('/src/images/hero-bg.jpg')",
        'cover-bg': "linear-gradient(to left bottom, rgba(43, 140, 121, .25), rgba(44, 86, 78, .8)), url('/src/images/cover-spring.jpg')",
        'portrait-cover-bg': "linear-gradient(to left bottom, rgba(43, 140, 121, .25), rgba(44, 86, 78, .8)), url('/src/images/cover-spring-portrait.jpg')",
        'info-bg': "linear-gradient(to left bottom, rgba(0,0,0, .1), #2c564e), url('/src/images/hero.jpg')",
        'menu-bg': "url(/src/images/menu-bg-filled.svg)",
        'menu-dark': "url(/src/images/menu-bg-filled-dark.svg)",
        'dot': "url(/src/images/dot.svg)",
       }),
       colors: {
        primary: '#5cdb95',
        primaryLight: '#e9f9e6',
        secondary: '#379683',
        black: '#222',
        ultraBlack: '#000',
        red: "#db605c"
       },
       scale: {
         '101': '1.01'
       },
       minWidth: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
       },
       padding: {
         safeBottom: 'max(2rem, env(safe-area-inset-bottom))',
         '100': '100%'
       },
       flex: {
        '30': '1 1 30rem'
       },
       zIndex: {
        '-1': '-1',
       },
       screens: {
        'portrait': {'raw': '(orientation: portrait)'},
      },
      backgroundSize: {
        'xs': '4px 2px',
      }
    },
  },
  variants: {
    extend: {
      borderWidth: ['last', 'first'],
      padding: ['last', 'first'],
      margin: ['last', 'first'],
      flexShrink: ['last'],
      backgroundImage: ['dark'],
      colors: ['disabled', 'checked'],
      backgroundColor: ['checked']
    },
  },
  plugins: [],
}
