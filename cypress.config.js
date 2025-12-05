const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    supportFile: 'cypress/support/e2e.js',
    video: false
    // baseUrl non serve, perché usiamo solo cy.request()
  }
})
