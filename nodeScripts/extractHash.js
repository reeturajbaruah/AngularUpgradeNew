const fs = require("fs");
const path = require('path');

class ExtractHashPlugin {

    apply(compiler) {
        
        compiler.hooks.afterEmit.tap('ExtractHashPlugin', (compilation) => {

            const matcher = /(.+)\.([a-fA-F0-9]+)\.(js|js.map|css|css.map)$/;
            const map = Object.keys(compilation.assets)
                .map(x => matcher.exec(x))
                .filter(x => x)
                .reduce((acc, [file, bundle, , ext]) => ({
                    [bundle + '.' + ext]: file, ...acc
                }), {});

            console.log(map);

            const filePath = path.join(compiler.outputPath, 'extractedHash.json');
            fs.writeFileSync(filePath, JSON.stringify(map));
        });
    }
}

module.exports = ExtractHashPlugin;