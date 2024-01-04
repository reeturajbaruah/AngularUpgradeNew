import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { EMPTY, Observable, Subject } from 'rxjs';
import { concatMap, exhaustMap, last, map, takeUntil, tap } from 'rxjs/operators';
import { MatIconAvailabilityService } from 'common/services';
import { LinkInfo, MenuNavigationService } from 'menu/services';

import { CloseOptions } from '../container/container.component';
import { of } from 'rxjs';

export interface InjectionValues {
    currentMenu$: Observable<LinkInfo[]>;
    menuPath: string[];
}

@Component({
    selector: 'hamburger-child-modal',
    templateUrl: './childModal.html',
    styleUrls: ['./childModal.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildModalComponent implements OnInit, OnDestroy {

    constructor(
        private matIcon: MatIconAvailabilityService,
        private menuNavigationService: MenuNavigationService) { }

    public data = {} as InjectionValues;
    private closeSubject = new Subject<CloseOptions>();
    public get close$() {
        return this.closeSubject.asObservable();
    };

    public title$: Observable<string>;
    public showCloseIcon$: Observable<boolean>;
    public showBackIcon$: Observable<boolean>;
    public currentViewLinks$: Observable<LinkInfo[]>;
    private goToSubject = new Subject<[LinkInfo, MouseEvent]>();
    private onDestroySubject = new Subject<void>();

    ngOnDestroy(): void {
        this.onDestroySubject.next();
    }

    ngOnInit(): void {
        this.title$ = of(...this.data.menuPath).pipe(last(), map(title => title.toUpperCase()));
        this.showCloseIcon$ = this.matIcon.whenAvailable('close-x').pipe(map(() => true));
        this.showBackIcon$ = this.matIcon.whenAvailable('previous-arrow').pipe(map(() => true));

        this.goToSubject.pipe(
            exhaustMap(([link, event]) => this.menuNavigationService.goToLinkFromHamburger(link, this.data.currentMenu$, this.data.menuPath, event)),
            tap(emit => this.closeSubject.next(emit)),
            concatMap(() => EMPTY),
            takeUntil(this.onDestroySubject)
        ).subscribe();

        this.currentViewLinks$ = this.data.currentMenu$.pipe(
            map(menu => this.getCurrentView(menu, this.data.menuPath)),
            tap(links => links.length < 1 && this.back() ));
    }

    private getCurrentView(menu: LinkInfo[], menuPath: string[]) {

        return menuPath.reduce((acc, curr) =>
            (acc.find(link => link.label === curr) || { authorizedChildren: [] as LinkInfo[] })
                .authorizedChildren, menu);
    }

    back() {
        this.closeSubject.next({ all: false });
    }
    
    closeAll() {
        this.closeSubject.next({ all: true });
    }

    async goTo(link: LinkInfo, event: MouseEvent) {
        this.goToSubject.next([link, event]);
    }
    
}
