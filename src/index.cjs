const frameworkSteps = require('./stepDefinitions/playwright.steps.ts');
const setCustomWorld = require('./support/custom-world.ts');
const setCommonHooks = require('./support/common-hooks.ts');

module.exports = {
    frameworkSteps,
};
