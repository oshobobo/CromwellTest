const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'kwdk6h',
  viewportWidth: 1440,
  env: {
    url: 'https://www.cromwell.co.uk/shop/abrasives/cutting/c/090901',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
