const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Practices Test Report ',
    embeddeScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,

  },
  projectId: 'rxa9hd',
  // These settings apply everywhere unless overridden
  defaultCommandTimeout: 8000,
  viewportWidth: 1000,
  viewportHeight: 600,
  // Viewport settings overridden for component tests
  component: {
    viewportWidth: 500,
    viewportHeight: 500,
  },
  e2e: {
    setupNodeEvents(on, config) {
  require('cypress-mochawesome-reporter/plugin')(on);



    },
    baseUrl: 'https://blogdoagi.com.br/'
  },
});
