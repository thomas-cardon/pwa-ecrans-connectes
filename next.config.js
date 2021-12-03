const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  env: {
    title: 'Dpt. Info',
    brand: null, // optional, URL to logo image
    ecranConnectesAddress: 'http://localhost/tv/wp-json/amu-ecran-connectee', // Adresse du serveur de l'écran connecté, communiquant avec la PWA
    NOTIFICATIONS_API_KEY: 'a054e57e-15bd-48c0-b9ec-858210066e27'
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
})
