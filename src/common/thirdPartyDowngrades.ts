import { Injectable } from '@angular/core';

import * as moment from 'moment-timezone';
import * as bowser from 'bowser';
import vimeoPlayer from '@vimeo/player';
import * as sniffr from 'sniffr';

class LegacyBowser {
        
    name: string;
    version: number;

    mobile: boolean;
    ios: boolean;
    android: boolean;
    chromeBook: boolean;

    constructor() {

        const parser = bowser.getParser(window.navigator.userAgent);
        const result = parser.getResult();

        this.name = result.browser.name;
        this.version = parseInt(result.browser.version || '0', 10);

        this.mobile = result.platform.type === 'mobile';
        this.ios = (result.os.name || '').toLowerCase() === 'ios';
        this.android = (result.os.name || '').toLowerCase() === 'android';
        this.chromeBook = (result.os.name || '').toLowerCase() === 'chrome os';
    }

}

@Injectable()
export class ThirdPartyDowngrades {

    Sniffr: any;
    Bowser: any;
    Moment: any;
    Vimeo: any;

    constructor() {
        this.Sniffr = (new sniffr()).sniff();
        this.Bowser = new LegacyBowser();
        this.Moment = moment;
        this.Vimeo = {
            Player: vimeoPlayer
        };
    }
}
