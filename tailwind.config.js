const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      blue: colors.sky,
      green: colors.green,
      gray: {
        '50': '#f4f4f4',
        '100': '#e9e9e9',
        '200': '#c7c7c8',
        '300': '#a5a6a7',
        '400': '#626364',
        '500': '#1f2022',
        '600': '#1c1d1f',
        '700': '#17181a',
        '800': '#131314',
        '900': '#0f1011'
      }
    },
    fontFamily: {
      'mono': ['ui-monospace', 'SFMono-Regular', 'monospace'],
      'sans': ['Open Sans', 'ui-sans-serif', 'system-ui']
    },
    extend: {
      fontFamily: {
        'display': ['Quicksand', 'Open Sans', 'ui-sans-serif', 'system-ui']
      },
      fontSize: {
        tiny: ".5rem"
      },
      animation: {
        "vibrate-1": "vibrate-1 0.3s linear  infinite both"
      },
      keyframes: {
        "vibrate-1": {
          "0%,to": {
            transform: "translate(0)"
          },
          "20%": {
            transform: "translate(-2px, 2px)"
          },
          "40%": {
            transform: "translate(-2px, -2px)"
          },
          "60%": {
            transform: "translate(2px, 2px)"
          },
          "80%": {
            transform: "translate(2px, -2px)"
          }
        }
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    }
  },
  plugins: [],
}
