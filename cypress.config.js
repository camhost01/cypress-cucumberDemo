const {defineConfig} = require('cypress');
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsBuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
e2e: {
  defaultCommandTimeout: 7000,
  pageLoadTimeout: 20000,
  video:false,
  screenshotOnRunFailure:false,
  async setupNodeEvents(on, config) {
  // implement node event listeners here
    const bundler = createBundler({
      plugins: [createEsBuildPlugin(config)],
      });
    
      on('file:preprocessor', bundler);
      await addCucumberPreprocessorPlugin(on, config);
      return config;
      on('before:run', async (details) => {
      console.log('override before:run');
      await beforeRunHook(details);
      });

      on('after:run', async () => {
      console.log('override after:run');
      await afterRunHook();
      });
    },
    specPattern: 'cypress/e2e/features/*.feature'
  },
});
