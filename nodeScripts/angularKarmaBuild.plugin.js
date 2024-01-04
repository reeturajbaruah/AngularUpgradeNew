const lessLoaderUpdate = require('./updateLessLoader');
const { compile: angularJsBuild } = require('./angularjsBuild.plugin');

const main = (config) => {
    const watch = !(process.argv || []).includes('--watch=false');

    const angularJsExclude = [
        "../app/config/config.httpinterceptor.ts",
        "../app/config/config.omniture.js",
        "../app/config/config.storefront.js",
        "../app/app.js",        
        "../app/config.route.js",
        "../app/indexOutdatedBrowsing.js",
        "../app/indexPrivateBrowsing.js",
        "../app/initialStylesheetLoader.js",
        "../app/main.ts",
    ];

    angularJsBuild({ 
        watch, 
        outputFilePath: '../legacy/appBundle.testing.js',
        rootFiles: [
            '../app/tests/testInit.js',
            '../app/tests/hctraMocks.js',
            '../app/tests/testApp.js'
        ], 
        fileGlob: '../app/**/*.{ts,js}', 
        exclude: angularJsExclude
    });

    return lessLoaderUpdate(config);
};

module.exports = main;