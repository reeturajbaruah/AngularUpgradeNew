import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { IEvent } from 'vehicles/common';

@Injectable()
export class ReviewOrderService {

    private event$ = new Subject<IEvent>();
    private subscriptions: Subscription[] = [];

    dispatchAction(event: IEvent) {
        this.event$.next(event);
    }

    subscribe(callback?) {
        const sub = this.event$.subscribe(callback);
        this.subscriptions.push(sub);
    }

    unsubscribe() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

}
