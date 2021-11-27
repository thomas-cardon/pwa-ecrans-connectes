const withPWA = require('next-pwa')

module.exports = withPWA({
  env: {
    title: 'Dpt. Info',
    brand: null, // optional, URL to logo image
    ecranConnectesAddress: 'http://localhost/tv/wp-json/amu-ecran-connectee', // Adresse du serveur de l'écran connecté, communiquant avec la PWA
  },
  pwa: {
    dest: 'public',
  },
})
