const { getMatchedFiles } = require('./angularjsBuild.plugin');
const html2Js = require('karma-ng-html2js-preprocessor/lib/html2js');

const fs = require('fs');
const path = require('path');

const processHtml2Js = html2Js({
    create: () => ({
        info: () => { },//supress info logging
        log: () => { },//supress info logging
        debug: () => { },//supress debug logging
        warn: console.warn,
        error: console.error
    })
}, '', { moduleName: 'HCTRATemplates' });

const angularjsTemplates = '../app/**/*.html';
const allAngularJsTemplatePaths = getMatchedFiles(angularjsTemplates);

const hctraTemplateModule = allAngularJsTemplatePaths.map(f => {
    const buffer = fs.readFileSync(f);
    const content = buffer.toString('utf8');
    let processed;

    const originalPath = f.replace(path.dirname(process.cwd()) + '\\', '/').replace(/\\/g, '/');
    processHtml2Js(content, { path: originalPath, originalPath }, x => processed = x);

    return processed;
}).join('\n\n');

if (!fs.existsSync('../legacy')) {
    fs.mkdirSync('../legacy');
}

fs.writeFileSync('../legacy/appBundle.html2js.js', hctraTemplateModule);

