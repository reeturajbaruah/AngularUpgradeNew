const path = require('path');
const fs = require('fs');

const glob = require('glob');

const tsc2_9_2 = require('ts2_9_2');
const compile = require('./TS_292_Compiler');

const inlineCompilerOptions = {
    module: tsc2_9_2.ModuleKind.None, target: tsc2_9_2.ScriptTarget.ES5,
    sourceMap: true,
    noEmitOnError: false,
    outFile: "..//legacy/appBundle.js",
    noImplicitAny: false,
    allowJs: true,
    strictFunctionTypes: false,
    suppressImplicitAnyIndexErrors: true,
    typeRoots: ["../typings", "../node_modules/@types"],
    types: ["@types/angular", "@types/angular-ui-router",
                "@types/angular-ui-bootstrap",
                "@types/angular-spinner",
                "@types/angular-mocks", "@types/ng-file-upload", "@types/jquery", "bootstrap", "moment", "jasmine"],
   lib: ["lib.dom.d.ts", "lib.es2015.d.ts", "lib.es2015.symbol.d.ts", "lib.scripthost.d.ts"]
};

function getMatchedFiles(pattern) {
    if(!pattern)return []
    
    const root = process.cwd();    
    const files = glob.sync(pattern);   
    
    const t = files.map(f=> path.join(root,f));
    return t;
}

const main = ({watch, fileGlob, rootFiles, outputFilePath, exclude }) => {

    fileGlob = fileGlob || '../app/{!(tests)/**/!(*.test|*.tests),*}.{ts,js}';
    rootFiles = rootFiles || ['../app/app.js'];
    outputFilePath = outputFilePath || '..//legacy/appBundle.js';


    exclude = (exclude || []).reduce((acc, f) => {
        return [...acc, ...getMatchedFiles(f)];
    }, []);

    //clean - removes any VS transpiled from directory
    //gets all js files; if a ts file exists with the same name, delete it!
    const filesToClean = getMatchedFiles('../app/**/*.js');
    filesToClean.forEach(jsFile => {
            const dirPath = path.dirname(jsFile);
            const baseName = path.basename(jsFile, ".js");
            const tsFile = path.join(dirPath, baseName) + ".ts";
            if (fs.existsSync(tsFile)) {
                fs.unlinkSync(jsFile);
                console.log(`deleted ${jsFile}`);
                const mapFile = jsFile + ".map";
                if (fs.existsSync(mapFile)) {
                    fs.unlinkSync(mapFile);
                    console.log(`deleted ${mapFile}`);
                }
            }
        });

    //build
    
    const roots = rootFiles.reduce((acc, rs) => {
        return [...acc, ...getMatchedFiles(rs)];
    }, []).filter(x=> x);

    const filesToBuild = getMatchedFiles(fileGlob)
        .filter(x=> !exclude.includes(x))
        .filter(f => !roots.includes(f));

    const baseFiles = [...roots, ...filesToBuild];

    compile({ tsConfigJson: {...inlineCompilerOptions, outFile: outputFilePath}, files: baseFiles, watch });
};

module.exports = { compile: main, getMatchedFiles };