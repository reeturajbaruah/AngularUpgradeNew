//const crypto = require('crypto');
const fs = require('fs');

fs.writeFileSync('../ng-app/src/buildId.actual.ts', `export const BuildId = '${(new Date()).getTime()}';`);