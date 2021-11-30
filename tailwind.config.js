module.exports = {
  purge: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Open Sans', 'ui-sans-serif', 'system-ui']
    },
    extend: {
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
