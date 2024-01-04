// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const process = require('process');

module.exports = function (config) {

    let browserNoActivityTimeout = 30000;
    if ('BROWSERNOACTIVITYTIMEOUT' in process.env) {
        browserNoActivityTimeout = parseInt((process.env['BROWSERNOACTIVITYTIMEOUT'] || '30000').trim());
    }

    const fail_focus = !!(+(process.env.failfocus || '0').trim());

    const fail_focus_includes = fail_focus
        ? ['../Scripts/FailFocus.js']
        : [];

    const fail_focus_excludes = fail_focus
        ? []
        : ['../Scripts/FailFocus.js'];

    config.set({
        browserNoActivityTimeout,
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage'),
            require('@angular-devkit/build-angular/plugins/karma')
        ],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        coverageReporter: {
            dir: 'coverage',
            reporters: [
                { type: 'html', subdir: 'ng-app' },
                { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' },
                { type: 'text-summary', subdir: '.', file: 'text-summary.txt' }
            ],
        },
        reporters: ['dots', 'coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['ChromeHeadless'],
        singleRun: false,
        restartOnFileChange: true,
        proxies: { '/Content/': '../Content/' },
        //note: this was needed for angularjs unit test integration, can be removed when angularjs is gone
        files: [...fail_focus_includes, '../node_modules/jquery/dist/jquery.js'],   
        exclude: [...fail_focus_excludes]    
    });
};
