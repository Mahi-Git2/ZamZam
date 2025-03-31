const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //watchForFileChanges:false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio	: true,
    baseUrl: 'https://web.ifb.chegebeya.com/auth/login', 
  },
});
