import { Injectable } from '@angular/core';
import { CloseOptions } from 'menu/hamburger/container/container.component';
import { CmsMenuLink, LinkInfo, MenuLinkMapperService, MenuNavigationService } from 'menu/services';
import { EMPTY, Observable, Subject } from 'rxjs';
import { concatMap, exhaustMap, shareReplay, takeUntil, tap } from 'rxjs/operators';

export interface InjectionValues {
    cmsContent: Observable<CmsMenuLink[]>;
}

@Injectable()
export class MenuLinkHelper {

    private goToEvent$ = new Subject<[LinkInfo, string, MouseEvent]>();
    onDestroySubject = new Subject<void>();
    private closeSubject$ = new Subject<CloseOptions>();
    public data = {} as InjectionValues;

    constructor(private menuNavigationService: MenuNavigationService,
        private menuLinkMapper: MenuLinkMapperService,
    ) {

    }

    getCloseSubject() {
        return this.closeSubject$;
    }

    goToEvent() {
        return this.goToEvent$;
    }

    setCmsContent(data: InjectionValues) {
        this.data = data;
    }

    getCurrentMenu() {
        return this.menuLinkMapper.getMapFilterObservable(this.data.cmsContent)
            .pipe(shareReplay({ bufferSize: 1, refCount: true }));
    }

    listentoMenuEvent() {

        const currentMenu$ = this.getCurrentMenu();

        this.goToEvent$.pipe(
            //exhaustMap will ignore all new goToEvents until the observable returned by goToLinkFromHamburger completes
            exhaustMap(([link, parentLabel, event]) =>
                this.menuNavigationService.goToLinkFromHamburger(link, currentMenu$, [parentLabel], event)),

            //this side effect is what we are interested in
            tap(emit => this.closeSubject$.next(emit)),
            //the template does not care for values emitted by this observable
            concatMap(() => EMPTY),
            takeUntil(this.onDestroySubject)
        ).subscribe();

    }
}
