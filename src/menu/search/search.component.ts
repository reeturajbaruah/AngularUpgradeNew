import {
    ChangeDetectionStrategy,
    Component, ElementRef, Inject, OnInit, ViewChild
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UrlService } from '@uirouter/core';
import { Observable, timer } from 'rxjs';
import { urlPaths as menuRoutes } from '../constants';
import { WindowRef } from 'common/providers';
import { filter, map, merge, take, takeUntil, mapTo, tap, mergeMap, startWith } from 'rxjs/operators';
import { showTrigger } from '../animations/show';

export interface InjectionValues {
    scrollY: number;
    right: number;
}

export interface GoogleSearchConfig {
    div: string;
    tag: string;
    gname: string;
    attributes: {
        queryParameterName: string;
        resultsUrl: string;
        autoCompleteMatchType: string;
        autoCompleteMaxCompletions: number;
        filter: string;
    };
}

interface GoogleSearchElement {
    getElement: (name: string) => { prefillQuery: (query: string) => void };
    render: (config: GoogleSearchConfig) => void;
}

export interface Google {
    search: {
        cse: {
            element: GoogleSearchElement;
        };
    };
}

@Component({
    selector: 'menu-search-component',
    templateUrl: './search.html',
    styleUrls: ['./search.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [showTrigger]
})
export class SearchComponent implements OnInit {

    constructor(
        private urlService: UrlService,
        private dialogRef: MatDialogRef<SearchComponent>,
        @Inject(WindowRef) private window: Window,
        @Inject(MAT_DIALOG_DATA) private injectedValues: InjectionValues) { }

    public scrollY: number;
    public right: number;
    public show$: Observable<boolean>;
    @ViewChild('SearchParent') private searchParent: ElementRef;

    ngOnInit(): void {
        this.right = this.injectedValues.right;
        this.scrollY = this.injectedValues.scrollY;


        const config = {
            div: 'global-search-parent',
            tag: 'searchbox-only',
            gname: 'globalSearchBox',
            attributes: {
                queryParameterName: 'searchQuery',
                resultsUrl: this.urlService.url().split(this.urlService.path())[0] + menuRoutes.Search,
                autoCompleteMatchType: 'any',
                autoCompleteMaxCompletions: 10,
                filter: '1'
            }
        };

        this.show$ = timer(50, 500)
            .pipe(
                map(() => this.window['google'] as Google),
                filter(ref => !!ref),
                merge(timer(10000).pipe(mapTo(null as Google))),
                take(1),
                map(ref => ref.search.cse.element),
                tap({ error: () => this.dialogRef.close() }),
                tap(element => element.render(config)),
                mergeMap(element => timer(0, 500).pipe(
                    map(() => this.searchParent?.nativeElement?.querySelector('.gsc-input input') as HTMLInputElement),
                    filter(input => !!input),
                    takeUntil(timer(10000)),
                    take(1),
                    tap(() => element.getElement(config.gname)?.prefillQuery('')),
                    tap(input => input.setAttribute('placeholder', 'Search')),
                    tap(input => input.setAttribute('inputmode', 'search')),
                    mapTo(true)
                )),
                startWith(false)
            );
        
    }
}
