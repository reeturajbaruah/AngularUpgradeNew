import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GlobalEventService {

    constructor() {
    }

    on(name, listener) { 
        window.addEventListener(name, listener);

        return () => {
            window.removeEventListener(name, listener);
        };
    }

    broadcast(name, args) {
        dispatchEvent(new CustomEvent(name, { detail: args }));
    }
}
