import { Inject, Injectable } from '@angular/core';
import { WindowRef } from 'common/providers';

@Injectable()
export class MetaPixelService {

    constructor(
        @Inject(WindowRef) private window: Window
    ) { }

    async trackPageView(completeReg?: boolean) {
        if ('fbq' in this.window) {
            const fbq = this.window['fbq'];
            if (!completeReg) {
                fbq('track', 'PageView');
            }
            else {
                fbq('track', 'PageView');
                fbq('track', 'CompleteRegistration');
            }
        }
    }
}
