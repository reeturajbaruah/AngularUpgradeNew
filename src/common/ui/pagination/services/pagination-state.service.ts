import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { IPagingEvent, IPagingState, PagingAction } from '../models/pagination.interface';

@Injectable()
export class PaginationStateService {

    subscriptions: Subscription[] = [];
    private pagingState$: BehaviorSubject<IPagingState>;
    private event$: Subject<IPagingEvent>;

    constructor() {
        this.pagingState$ = new BehaviorSubject(null);
        this.event$ = new Subject();
    }

    dispatchPagingInfo(pagingState: IPagingState) {
        this.pagingState$.next(pagingState);
    }

    subscribe(callback: (pagingState: IPagingState) => void) {
        const sub = this.pagingState$.subscribe(callback);
        this.subscriptions.push(sub);
    }

    dispatchEvent(action: PagingAction, val?: any) {
        this.event$.next({
            action,
            val
        });
    }

    subcribeEvent(callback) {
        const sub = this.event$.subscribe(callback);
        this.subscriptions.push(sub);

    }

    unsubscribe() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}
