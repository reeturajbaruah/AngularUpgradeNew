import 'zone.js';  // Included with Angular CLI.

import 'angularjs';

import { enableProdMode, NgModuleRef, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';

import { processDowngrades } from 'hybrid/module';
import { KioskAppModule } from 'app/app.module';

import { commonDowngrades, platformInit, xsrfInit } from 'common.main';

declare global {
    // eslint-disable-next-line no-var
    var hctraEnvironmentConfiguration: any;
}
console.log('storefront');
if (environment.production) {
    enableProdMode();
}

commonDowngrades(globalThis);

const saveOpen = window.open;
window.open = (url?: string | URL, target?: string, features?: string): Window => {
    const beforeEvent = new CustomEvent('beforeWindowOpen', {
        detail: { url, target, features, newWindow: undefined },
        cancelable: true
    });

    const openWindow = window.dispatchEvent(beforeEvent);
    let newWin: Window;

    if (openWindow) {
        newWin = saveOpen(url, target, features);
    } else {
        newWin = beforeEvent.detail.newWindow;
    }

    const afterEvent = new CustomEvent('afterWindowOpen', { detail: newWin });
    window.dispatchEvent(afterEvent);
    return newWin;
};

xsrfInit()
    .then(() => {
        processDowngrades();
        return platformBrowserDynamic().bootstrapModule(KioskAppModule);
    })
    .then((platformRef: NgModuleRef<KioskAppModule>) => platformInit(platformRef))
    .catch(err => console.error(err));
