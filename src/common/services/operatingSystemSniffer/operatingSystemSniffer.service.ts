import { Inject, Injectable } from '@angular/core';
import { WindowRef } from '../../providers';
import * as bowser from 'bowser';

@Injectable()
export class OperatingSystemSnifferService {

    storedOS = '';

    constructor(
        @Inject(WindowRef) private $window: Window
    ) { }

    public getOS() {
        const bowserEnv = bowser.getParser(this.$window.navigator.userAgent);

        const operatingSystem = bowserEnv.getOSName().toLowerCase();
        let device = bowserEnv.getPlatform().model;
        if (typeof device === 'string') {
            device = device.toLowerCase();
        }

        if (operatingSystem === 'windows' || operatingSystem === 'macos' || operatingSystem === 'linux' || operatingSystem === 'chrome os' || device === 'ipad') {
            this.storedOS = 'desktop';
            return this.storedOS;
        } else {
            this.storedOS = 'mobile';
            return this.storedOS;
        }
    }

    public isDesktopOs() {
        return (this.storedOS === 'desktop' || sessionStorage.getItem('FOOTER_FORCE_DESKTOP_VIEW') === 'true');
    };

    getOsFull() {
        return bowser.getParser(this.$window.navigator.userAgent).getOSName().toLowerCase();
    };

    getDeviceFull() {
        return bowser.getParser(this.$window.navigator.userAgent).getPlatform().model;
    };
}
