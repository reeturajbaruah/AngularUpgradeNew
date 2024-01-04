import { Component, Input, EventEmitter, Output, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

import { fromEvent, Subscription } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

@Component({
    selector: 'vehicles-search',
    templateUrl: './search.html',
    styleUrls: ['./search.less']
})
export class SearchComponent implements AfterViewInit, OnDestroy {

    @Output() search = new EventEmitter<string>();
    @Input() placeHolder: string;
    @Input() debounce: number;
    @ViewChild('searchInput') searchInput: ElementRef;

    private searchSubscription: Subscription;

    ngAfterViewInit(): void {
        
        const searchElement = this.searchInput.nativeElement as HTMLInputElement;
        const keyup$ = fromEvent(searchElement, 'keyup');

        this.searchSubscription = keyup$
            .pipe(
                map(() => searchElement.value),
                debounceTime(this.debounce || 500)
            )
            .subscribe((searchTerm: string) => this.search.emit(searchTerm));
    }

    ngOnDestroy(): void {
        if (this.searchSubscription) {
            this.searchSubscription.unsubscribe();
        }
    }

}
