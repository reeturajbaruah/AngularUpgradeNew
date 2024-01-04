import { Inject, Injectable } from '@angular/core';
import { WindowRef } from '../../providers';
import { ENVIRON_CONFIG } from '../../upgrades';
import { Location } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class GoogleAnalyticsService {
    isOmnitureBlocked: boolean;

    constructor(
        @Inject(ENVIRON_CONFIG) private environmentConfig,
        @Inject(WindowRef) private $window,
        private location: Location
    ) {
        if (this.environmentConfig.googleAnalyticsID) {
            this.addGa4Script(this.environmentConfig.googleAnalyticsID);
        }
    }

    public sendEvent(category: string, action: string, label?: string, value?: number): void {
        const { gtag } = this.$window;
        if (gtag) {
            gtag('event', `${category}/${action}/${label}`, { value });
        }
    }

    public sendTag(suffix?: string): void {
        const { gtag } = this.$window;
        if (this.environmentConfig.googleAnalyticsID && gtag) {
            const endText = suffix ? `[${suffix}]` : '';
            gtag('event', 'page_view', { path_location: this.location.path() + endText });
        }
    }

    addGa4Script(googleAnalyticsID: string) {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsID}`;
        document.head.appendChild(script);

        const globalObject = this.$window;
        globalObject.dataLayer = globalObject.dataLayer || [];
        // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
        globalObject.gtag = function() {
            globalObject.dataLayer.push(arguments);
        };
        globalObject.gtag('js', new Date());
        globalObject.gtag('config', googleAnalyticsID);
    }
}
