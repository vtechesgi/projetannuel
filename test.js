// exports.config = {
//   seleniumAddress: 'http://localhost:4444/wd/hub',
//   specs: []
// };
const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/app/core/component/login/login.component.spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    /*browser.driver.get(browser.baseUrl);
    browser.driver.findElement(by.name('email')).sendKeys('jinw96@gmail.com');
    browser.driver.findElement(by.name('password')).sendKeys('azerty123');
    browser.driver.findElement(by.css('btn-lg')).click();*/

  }
};
