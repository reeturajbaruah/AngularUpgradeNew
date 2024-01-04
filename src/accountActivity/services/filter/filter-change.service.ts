import { Injectable } from '@angular/core';
import { IFilterEvent, ISortFilterEvent } from 'accountActivity/transactions/transactions.interfaces';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class FilterChangeService {

    private eventInfo$ = new Subject<IFilterEvent | ISortFilterEvent>();

    notifyEvent(event: IFilterEvent | ISortFilterEvent) {
        this.eventInfo$.next(event);
    }

    listenToFilters(): Observable<IFilterEvent | ISortFilterEvent> {
        return this.eventInfo$.asObservable();
    }
}
