module.exports = (config) => {

    //adds hashing for styles
    config
        .plugins
        .filter(x => x.constructor.name === 'RemoveHashPlugin')
        .map(({ options }) => options.chunkNames)
        .forEach((chunkNames) => {
            while (chunkNames.length) {
                chunkNames.pop();
            }
        });

    //adds hashing for scripts
    const isLiveReload = config.devServer && config.devServer.liveReload;

    if (!isLiveReload) {
        config
            .plugins
            .filter(x => x.constructor.name === 'ScriptsWebpackPlugin')
            .filter(x => x.options.name !== 'scripts')
            .forEach(x => x.options.filename = `${x.options.name}.[contenthash:20].js`);
    }

    return config;
};