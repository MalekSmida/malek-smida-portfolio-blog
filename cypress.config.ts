import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    video: false, // turn off video capture
    screenshotOnRunFailure: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

// config cypress ts with jest/react-testing ts
// https://github.com/cypress-io/cypress/issues/22059#issuecomment-1297135038
