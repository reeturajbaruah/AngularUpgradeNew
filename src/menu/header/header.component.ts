import {
    ChangeDetectionStrategy,
    Component, Inject, OnDestroy, OnInit
} from '@angular/core';
import { TransitionService, UIRouterGlobals } from '@uirouter/core';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { CmsReplacementService, CmsResolverService } from 'cms/services';
import { CurrentUserService, MatIconAvailabilityService } from 'common/services';
import { MaintenanceFeature, stateNames as commonStateNames } from 'constants/module';
import { stateNames as loginStateNames } from 'login/constants';
import { cmsIds } from 'menu/constants';
import { FrameComponent } from 'menu/frame/frame.component';
import { InjectionValues as ParentInjection, ParentModalComponent } from 'menu/hamburger/parent/parentModal.component';
import { CmsMenuLink, LinkInfo, MenuLinkMapperService, MenuNavigationService } from 'menu/services';
import { combineLatest, EMPTY, from, fromEventPattern, Observable, of, Subject } from 'rxjs';
import { catchError, debounceTime, delay, exhaustMap, filter, map, mapTo, merge, shareReplay, startWith, take, takeUntil } from 'rxjs/operators';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { ResponseErrorService } from 'common/services';
import { MaintenanceConfigService } from 'common/services/maintenanceService/maintenanceConfig.service';
import { stateNames } from '../constants';


@Component({
    selector: 'menu-header-component',
    templateUrl: './header.html',
    styleUrls: ['./header.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, OnDestroy {

    constructor(
        private replacementService: CmsReplacementService,
        private currentUser: CurrentUserService,
        private menuNavigationService: MenuNavigationService,
        private parent: FrameComponent,
        private authService: AuthenticationService,
        private menuLinkMapper: MenuLinkMapperService,
        private cmsResolverService: CmsResolverService,
        private uiRouterGlobals: UIRouterGlobals,
        private transitionService: TransitionService,
        private matIcon: MatIconAvailabilityService,
        private maintenanceConfigService: MaintenanceConfigService,
        private responseErrorService: ResponseErrorService,
        @Inject(ENVIRON_CONFIG) public environmentConfig
    ) { }

    public facebook$: Observable<string>;
    public twitter$: Observable<string>;
    public instagram$: Observable<string>;
    public linkedin$: Observable<string>;
    public youtube$: Observable<string>;
    public isNotLoginPage$: Observable<boolean>;
    public isAuthenticated$: Observable<boolean>;
    public currentCallToAction$: Observable<LinkInfo[]>;
    public showSearchIcon$: Observable<boolean>;
    public showHamburgerIcon$: Observable<boolean>;
    public showHctraLogo$: Observable<boolean>;
    public showAccountIcon$: Observable<boolean>;
    public showDownArrow$: Observable<boolean>;
    public user$: Observable<string>;
    public accountDropdownDescripion$: Observable<string>;
    public isNotSearchPage$: Observable<boolean>;
    public events$: Observable<never>;
    private openHamburgerMenuSubject = new Subject<undefined>();
    private showAccountDropdownSubject = new Subject<DOMRect>();
    private showSearchSubject = new Subject<DOMRect>();
    private onDestroySubject = new Subject<void>();
    public greeting$: Observable<string>;

    ngOnDestroy(): void {
        this.onDestroySubject.next();
    }


    ngOnInit() {

        //all the observables created below are cold
        //we would probably pipe publish and refCount to the observables if they were used in multiple places
        this.currentCallToAction$ = this.menuLinkMapper.getMapFilterObservable(
            from(this.cmsResolverService.resolve({ ItemId: cmsIds.HeaderCallToActions }) as Promise<CmsMenuLink>)
                .pipe(
                    map(link => link.Children.filter(l => {
                        if (this.environmentConfig.isMergeMATandVioOn) {
                            return !(l.Url === '/MissedAToll' || l.Url === '/Violations');
                        }
                        else {
                            return l.Url !== '/Violation/Search';
                        }
                    })))
        );

        this.isAuthenticated$ = this.authService.isAuthenticated$;

        //megamenu used url === login
        //I thought doing a comparision every digest cycle was probably wastefull
        //I'm hoping onsuccess hook is less wasteful??
        //This hook could also be used for charms highlighting (side menu)

        const stateObservable$ = of('now')
            .pipe(
                delay(2000),
                merge(fromEventPattern(handler => this.transitionService.onSuccess({}, handler), (_, remove) => remove())),
                debounceTime(50),
                map(() => this.uiRouterGlobals.current.name),
                filter(stateName => !!stateName),
                shareReplay({ bufferSize: 1, refCount: true })
            );

        this.isNotLoginPage$ = stateObservable$
            .pipe(
                map(stateName => stateName !== loginStateNames.Login)
            );

        this.isNotSearchPage$ = stateObservable$
            .pipe(
                map(stateName => stateName !== stateNames.Search)
            );

        const accountDropdownContent$ = from(this.cmsResolverService.resolve({ ItemId: cmsIds.AccountDropdown }) as Promise<{
            Children: CmsMenuLink[];
            ShortDescription: string;
            LongDescription: string;
        }>);

        this.accountDropdownDescripion$ = accountDropdownContent$.pipe(map(content => content.LongDescription));

        this.greeting$ = accountDropdownContent$.pipe(map(content => content.ShortDescription));

        this.user$ = this.currentUser.authorizationChange$.pipe(
            startWith('now'),
            map(() => this.currentUser.getCurrentUser()),
            map(user => user && user.firstName),
            map(firstName => firstName || 'New User')
        );

        this.showHamburgerIcon$ = this.matIcon.whenAvailable('hamburger-menu').pipe(mapTo(true));
        this.showHctraLogo$ = this.matIcon.whenAvailable('hctra-logo').pipe(mapTo(true));
        this.showSearchIcon$ = this.matIcon.whenAvailable('search-icon').pipe(mapTo(true));
        this.showAccountIcon$ = this.matIcon.whenAvailable('account-icon').pipe(mapTo(true));
        this.showDownArrow$ = this.matIcon.whenAvailable('home-down-arrow').pipe(mapTo(true));

        this.facebook$ = this.matIcon.whenAvailable('facebook-icon')
            .pipe(
                available$ => combineLatest(available$, this.parent.commonCmsContent),
                map(([, res]) => res.facebook)
            );

        this.twitter$ = this.matIcon.whenAvailable('twitter-icon')
            .pipe(
                available$ => combineLatest(available$, this.parent.commonCmsContent),
                map(([, res]) => res.twitter)
            );

        this.instagram$ = this.matIcon.whenAvailable('instagram-icon')
            .pipe(
                available$ => combineLatest(available$, this.parent.commonCmsContent),
                map(([, res]) => res.instagram)
            );

        this.linkedin$ = this.matIcon.whenAvailable('linkedin-icon')
            .pipe(
                available$ => combineLatest(available$, this.parent.commonCmsContent),
                map(([, res]) => res.linkedin)
            );

        this.youtube$ = this.matIcon.whenAvailable('youtube-icon')
            .pipe(
                available$ => combineLatest(available$, this.parent.commonCmsContent),
                map(([, res]) => res.youtube)
            );

        //load this here so it is not loaded every time the menu is opened
        //we could specify a refresh strategy here if we want (no such requirement yet)
        const hamburgerCmsContent$ = from(this.cmsResolverService.resolve({ ItemId: cmsIds.HamburgerMenuLinks }) as Promise<CmsMenuLink>)
            .pipe(map(link => link.Children.map(childLink => {
                if (childLink.Label === 'CALL TO ACTION') {
                    childLink.Children = childLink.Children.filter(l => {
                        if (this.environmentConfig.isMergeMATandVioOn) {
                            return !(l.Url === '/MissedAToll' || l.Url === '/Violations');
                        }
                        else {
                            return l.Url !== '/Violation/Search';
                        }
                    });
                    return childLink;
                }
                else {
                    return childLink;
                }
            })
            ));

        const openHamburgerMenu = this.openHamburgerMenuSubject.pipe(
            //exhaust map ignores all events until the beforeClosed$ below completes
            //prevent multiple modals due to multiple clicks
            exhaustMap(() => this.menuNavigationService.openMenuModal<ParentInjection>(ParentModalComponent, {
                cmsContent: hamburgerCmsContent$
            }).componentInstance.beforeClosed$.pipe(take(1), catchError(() => EMPTY)))
        );

        const showSearch$ = this.showSearchSubject.pipe(
            exhaustMap(rect => this.menuNavigationService.showSearchModal(rect)
                .afterClosed().pipe(catchError(() => EMPTY))));

        const showAccountDrop$ = this.showAccountDropdownSubject.pipe(
            exhaustMap(rect => this.menuNavigationService.showDropdownModal(
                accountDropdownContent$.pipe(map(content => content.Children)),
                rect
            ).afterClosed().pipe(catchError(() => EMPTY)))
        );

        EMPTY.pipe(
            merge(openHamburgerMenu),
            merge(showAccountDrop$),
            merge(showSearch$),
            takeUntil(this.onDestroySubject)
        ).subscribe();
    }

    showAccountDropdown(element: HTMLElement) {
        this.maintenanceConfigService.getMaintenanceDetails().subscribe((res) => {
            const isMaintenanceArray = this.checkWebMaintenanceMode(res?.featureStates);
            if (isMaintenanceArray?.length > 0) {
                this.responseErrorService.displayToast(isMaintenanceArray[0].message, 'Error');
            } else {
                this.showAccountDropdownSubject.next(element.getBoundingClientRect());
            }
        });
    }

    private checkWebMaintenanceMode(featureStates) {
        const webMaintainenceList = featureStates?.filter(featureState => ((featureState.feature !== MaintenanceFeature.MobileApp) &&
            (featureState.feature !== MaintenanceFeature.MobileAppEzTag)));

        return webMaintainenceList.filter(featureState => featureState.inMaintenance);

    }

    showHamburgerMenu() {
        this.openHamburgerMenuSubject.next(undefined);
    }

    showSearch(element: HTMLElement) {
        this.showSearchSubject.next(element.getBoundingClientRect());
    }
}
