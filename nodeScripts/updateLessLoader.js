const breakpoints = require('../ng-app/src/styles/breakpoints.js');

function updateLessLoader(config) {

    const rules = config.module.rules;
    const lessRules = rules.find(x => x.test.test('.less'));

    const loader = lessRules.rules.find(x => x.use).use
        .filter(x => x.loader && x.options)
        .find(x => x.loader.indexOf('node_modules\\less-loader') >= 0);

    //adds global variables @breakpoint-[alias] to be used like:
    //@media @breakpoint-[alias] { ... }
    //and also
    //@media @breakpoint-[alias] and (hover: none) { ... }
    //visual studios intellisense may say there's an error,
    //but compilation will still work
    const breakPointVars = breakpoints.reduce((acc, v) => ({
        ...acc,
        //the breakpoint-[alias] variables are used directly in a media query
        //and should be a literal raw value, not a string or value node.
        //To make sure it replaces the variable with the proper value,
        //we use the ~"" to store the variable as a literal value.
        ['breakpoint-' + v.alias]: `~"${v.mediaQuery}"`
    }), {});

    loader.options.lessOptions.globalVars = {
        ...(loader.options.lessOptions.globalVars || {}),
        ...breakPointVars
    };

    return config;
}

module.exports = updateLessLoader;