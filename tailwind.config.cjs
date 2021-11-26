module.exports = {
  mode: 'jit', // ⚠ Make sure to have this
  purge: ["./src/**/*.svelte"],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Source Sans Pro', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        kindblue: {
          light: '#48426D',
          DEFAULT: '#49426E',
          dark: '#353257'
        },
        gold: {
          DEFAULT: '#EEC08C'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
