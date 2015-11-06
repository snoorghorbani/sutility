// Karma configuration
// Generated on Thu Jul 02 2015 10:33:43 GMT+0430 (Iran Daylight Time)

module.exports = function (config) {
    config.set({
        
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',
        
        
        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha'],
        
        // list of files / patterns to load in the browser
        files: [
            'public/lib/chai/chai.js',
            'dist/sutility.browser.js',
            'test/installSutilityForKarmaTest.js',
            'test/modules/*.js',
        ],
        
        // list of files to exclude
        exclude: [
        ],
        
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'dist/*.js': ['coverage']
        },
        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        },
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],
        
        
        // web server port
        port: 9876,
        
        
        // enable / disable colors in the output (reporters and logs)
        colors: true,
        
        
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
        
        
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,
        
        
        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        //browsers: ['Chrome', 'Firefox', 'IE', 'PhantomJS', 'ChromeCanary'],
        browsers: ['Chrome', 'Firefox', 'PhantomJS'],
        //'client' : {
        //    'mocha' : {
        //        'ui' : 'tdd'
        //    }
        //},
        'plugins' : [
            'karma-mocha',
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-opera-launcher',
            'karma-ie-launcher',
            'karma-jasmine',
            'karma-coverage'
        ],
                
        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    })
}
