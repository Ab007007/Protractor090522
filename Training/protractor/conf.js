var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var AllureReporter = require('jasmine-allure-reporter');

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

    suites : {
        smoke : ['./AdditionDemo.js','./MyfirtsTest.js'],
        regression : ['./A*.js']
    },
    specs: ['test/POM.js'],
    
    beforeLaunch: function() {
        return new Promise(function(resolve){
          reporter.beforeLaunch(resolve);
        });
      },
    
      // Assign the test reporter to each running instance
      onPrepare: function() {
        jasmine.getEnv().addReporter(reporter);
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
          resultsDir: 'allure-results'
        }));

        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: './',
        filePrefix: 'xmlresults'
        }));

        var fs = require('fs-extra');
 
fs.emptyDir('target/screenshots/', function (err) {
        console.log(err);
    });
 
    jasmine.getEnv().addReporter({
        specDone: function(result) {
            if (result.status == 'failed') {
                browser.getCapabilities().then(function (caps) {
                    var browserName = caps.get('browserName');
 
                    browser.takeScreenshot().then(function (png) {
                        var stream = fs.createWriteStream('target/screenshots/' + browserName + '-' + result.fullName+ '.png');
                        stream.write(new Buffer(png, 'base64'));
                        stream.end();
                    });
                });
            }
        }
    });
      },
    
      // Close the report after all tests finish
      afterLaunch: function(exitCode) {
        return new Promise(function(resolve){
          reporter.afterLaunch(resolve.bind(this, exitCode));
        });
      },
      onComplete: function() {
        var browserName, browserVersion;
        var capsPromise = browser.getCapabilities();
    
        capsPromise.then(function (caps) {
           browserName = caps.get('browserName');
           browserVersion = caps.get('version');
           platform = caps.get('platform');
    
           var HTMLReport = require('protractor-html-reporter-2');
    
           testConfig = {
               reportTitle: 'Protractor Test Execution Report',
               outputPath: './',
               outputFilename: 'target/ProtractorTestReport',
               screenshotPath: 'target/screenshots',
               testBrowser: browserName,
               browserVersion: browserVersion,
               modifiedSuiteName: false,
               screenshotsOnlyOnFailure: true,
               testPlatform: platform
           };
           new HTMLReport().from('xmlresults.xml', testConfig);
       });
    }
  };