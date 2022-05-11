var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html'
});


exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities : {
     //   browserName : 'internet explorer'
    // browserName : 'firefox'
      browserName : 'chrome'
    },
    specs: ['development.js'],
    
    beforeLaunch: function() {
        return new Promise(function(resolve){
          reporter.beforeLaunch(resolve);
        });
      },
    
      // Assign the test reporter to each running instance
      onPrepare: function() {
        jasmine.getEnv().addReporter(reporter);
      },
    
      // Close the report after all tests finish
      afterLaunch: function(exitCode) {
        return new Promise(function(resolve){
          reporter.afterLaunch(resolve.bind(this, exitCode));
        });
      }
  };