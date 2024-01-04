import { Injectable } from '@angular/core';
import { StateDeclaration } from '@uirouter/core';
import { GoogleAnalyticsService } from '../googleAnalyticsService/googleAnalytics.service';

@Injectable({ providedIn: 'root' })
export class BrowserExtensionHandlerService {
    isOmnitureBlocked: boolean;

    constructor(
        private googleAnalyticsService: GoogleAnalyticsService,
    ) {
        this.isOmnitureBlocked = false;
    }

    sendTag(state: StateDeclaration, label: string): void {
        this.googleAnalyticsService.sendTag(label);
    }

    sendEvent(category: string, action: string, label?: string, value?: number): void {
        this.googleAnalyticsService.sendEvent(category, action, label, value);
    }
}
