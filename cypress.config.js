const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // hide  log
    hideXHRInCommandLog: true,
    // Set spec pattern
    specPattern: 'cypress/e2e/*.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
