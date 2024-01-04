import { Inject, Injectable } from '@angular/core';
import { WindowRef } from 'common/providers';

@Injectable()
export class StackAdaptPixelService {

    constructor(
        @Inject(WindowRef) private window: Window
    ) { }

    async trackSubmit(pageName: string) {
        if ('saq' in this.window) {
            const saq = this.window['saq'];
            const pageNameJson = JSON.stringify({
                page: pageName
            });
            saq('ts', 'Ba9eku4qmlG7XL5-_UpJYQ', pageNameJson);
        }
    }
}
