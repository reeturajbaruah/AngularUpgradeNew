import { Inject, Injectable } from '@angular/core';
import { HttpService } from '../../../common/services';

@Injectable()
export class TweetRetrievalService {
    static twitterWidgetScriptSelector = 'script[src="https://platform.twitter.com/widgets.js"]';
    static accountUrl = 'https://twitter.com/HCTRA/';

    constructor(private httpService: HttpService) { }

    getTweets(): Promise<any> {
        const url = `api/twitterAlt`;
        return this.httpService.get(url);
    }

    loadTwitterWidget(): void {
        if (!document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')) {
            const twitterWidget = document.createElement('script');
            twitterWidget.async = true;
            twitterWidget.src = 'https://platform.twitter.com/widgets.js';
            document.head.appendChild(twitterWidget);
        }
    }
}
