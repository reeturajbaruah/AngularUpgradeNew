import {
    AfterViewInit,
    Component, Input, ViewChild, ViewEncapsulation
} from '@angular/core';
import { Observable, combineLatest, Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { isEqual } from 'lodash';
import { AbstractControl } from '@angular/forms';

import { StatusTracking  } from '../errorCheck.directive';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'matches',
    templateUrl: './matches.component.html',
    styleUrls: ['./matches.component.less']
})
export class MatchesComponent<T> implements AfterViewInit, StatusTracking {
    
    @Input() value$: Observable<T>;
    @Input() compareTo$: Observable<T>;
    @Input() public name: string;
    @ViewChild('Validation') validation: AbstractControl;

    public itMatches$: Observable<boolean>;
    private statusSubject$ = new Subject<string>();

    public get status() {
        return this.validation?.status;
    }

    public get statusChanges(): Observable<string> {
        return this.statusSubject$.asObservable();
    }

    ngAfterViewInit(): void {
        
        this.validation.statusChanges
            .subscribe(value => this.statusSubject$.next(value));

        this.itMatches$ = 
            combineLatest([this.value$, this.compareTo$])
            .pipe(map(([value, compareTo])=> isEqual(value, compareTo)))
            .pipe(startWith(true));

    }

}