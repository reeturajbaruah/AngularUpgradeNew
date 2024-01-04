import { Injectable, Inject } from '@angular/core';
import { WindowRef } from 'common/providers';

@Injectable()
export class CookieService {

    constructor(
        @Inject(WindowRef) private window: Window,

    ) { }


    //does not handle expiration or any other options
    put(key: string, value: string | number): void {

        this.window.document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)};path=/`;
    }

    get(key: string): string {
        if (!this.window.document.cookie) {
            return '';
        }

        const pairs: string[] = this.window.document.cookie.split(/;\s*/);

        const prefix = `${encodeURIComponent(key)}=`;

        for (const pair of pairs) {
            if (pair.indexOf(prefix) === 0) {
                return decodeURIComponent(pair.substring(prefix.length));
            }
        }
        return '';
    }

}
