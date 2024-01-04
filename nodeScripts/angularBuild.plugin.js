const addHashing = require('./addHashing');
const ExtractHashPlugin = require('./extractHash');
const lessLoaderUpdate = require('./updateLessLoader');

const MomentTimezoneDataPlugin = require('moment-timezone-data-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

const { compile: angularJsBuild } = require('./angularjsBuild.plugin');

const path = require('path');

const main = (config) => {
    const extractHash = new ExtractHashPlugin();
    config.plugins.unshift(extractHash);

    //strip unused locales and timezones from moment.js during bundling
    config.plugins.unshift(new MomentLocalesPlugin());
    config.plugins.unshift(new MomentTimezoneDataPlugin({
        matchZones: 'America/Chicago'
    }));

    //manually adds additional entry point for kiosk
    config.entry.kiosk = [path.join(config.context, 'src\\kiosk.main.ts')];

    const isLiveReload = config.devServer && config.devServer.liveReload;

    angularJsBuild({ watch: isLiveReload });

    return [addHashing, lessLoaderUpdate].reduce((x, func) => func(x), config);
};

module.exports = main;