import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    // Punta al mock server di Mockoon
    baseUrl: 'http://localhost:3000',

    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.js',

    // Performance & compatibilità
    video: false,
    screenshotOnRunFailure: true,
    chromeWebSecurity: false,
  },
});
