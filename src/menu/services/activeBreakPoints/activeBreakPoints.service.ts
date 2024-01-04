import { Injectable } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { debounceTime, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface ActiveBreakPoints {
    [key: string]: boolean;
}

@Injectable()
export class ActiveBreakPointsService {

    constructor(private mediaObserver: MediaObserver) {}
/**
 * Observe changes to current activation break points
 */
    public asObservable(debounce = 500): Observable<ActiveBreakPoints> {

        return this.mediaObserver.asObservable()
            .pipe(
                debounceTime(debounce),
                map(changes => changes
                    .map(change => change.mqAlias)
                    .reduce((acc, alias) => ({ ...acc, [alias]: true }), {} as { [key: string]: boolean }))
            );
    }

}
