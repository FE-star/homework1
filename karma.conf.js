// Karma configuration
// Generated on Tue Jan 30 2018 18:16:27 GMT+0800 (中国标准时间)

module.exports = function(config) {
  const cfg = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/should/should.js',
      'js/*.js',
      'quz/*.js',
      'test/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        "js/*.js": "coverage",
        "quz/*.js": "coverage",
        "test/*.js": "coverage"
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage', 'coveralls'],

    // web server port
    port: 9876,

    plugins: [
      'karma-mocha',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-coverage',
      'karma-coveralls'
    ],

    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox', 'Chrome'],

    // you can define custom flags
    customLaunchers: {
      ChromeHeadless: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      },
      FirefoxHeadless: { 
        base: "Firefox", 
        flags: ["-headless"]
      }
    },
    coverageReporter: {
        type: "lcov",
        dir: "coverage/"
    },
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: process.env.TRAVIS,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  }
  if (process.env.TRAVIS) {
    cfg.browsers = ["ChromeHeadless", 'FirefoxHeadless'];
  }
  config.set(cfg)
}
