import 'zone.js';  // Included with Angular CLI.

import 'angularjs';

import { enableProdMode, NgModuleRef, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';

import { processDowngrades } from 'hybrid/module';
import { AppModule } from 'app/app.module';

import { commonDowngrades, platformInit, xsrfInit } from 'common.main';

declare global {
// eslint-disable-next-line no-var
    var hctraEnvironmentConfiguration: any;
}

if (environment.production) {
    enableProdMode();
}

commonDowngrades(globalThis);
    
xsrfInit()
    .then(() => {
        processDowngrades();
        return platformBrowserDynamic().bootstrapModule(AppModule);
    })
    .then((platformRef: NgModuleRef<AppModule>) => platformInit(platformRef))
    .catch(err => console.error(err));
