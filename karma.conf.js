// Karma configuration
// Generated on Sun Jun 12 2016 20:01:34 GMT+0000 (UTC)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],
        //        plugins:['karma-ng-html2js-preprocessor'],
        plugins: [
            'karma-ng-html2js-preprocessor', 
            'karma-chrome-launcher', 
            // 'karma-phantomjs-launcher', 
            // 'karma-firefox-launcher', 
            'karma-jasmine', 
            'karma-mocha-reporter'
            ], //, 'karma-chai-spies', 'karma-sinon-chai'],



        // list of files / patterns to load in the browser
        files: [



            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'views/mdd.html',
            'mdd.js',
            'services/type-utils.js',
            'test/test.js'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor

        preprocessors: {
            'views/mdd.html': ['ng-html2js']
        },

        ngHtml2JsPreprocessor: {
            // setting this option will create only a single module that contains templates
            // from all the files, so you can load them all with module('foo')
            moduleName: 'templates'
        },



        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 8080,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG, //config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,
        // autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: [
            'Chrome',
            // 'Firefox',
            // 'PhantomJS'
        ],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        // singleRun: false,
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,
        browserDisconnectTolerance: 10,
        // browserNoActivityTimeout: 30000
    })
}