import { animate, state, style, transition, trigger } from '@angular/animations';
import {
    ChangeDetectionStrategy,
    Component, Inject, OnDestroy, OnInit
} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { TransitionService, UrlService } from '@uirouter/core';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { CmsResolverService, CmsUtilService } from 'cms/services';
import { ENVIRON_CONFIG, WindowRef } from 'common/module';
import { isEqual } from 'lodash';
import { CharmsCmsIds, cmsIds } from 'menu/constants';
import { from, fromEventPattern, Observable, of, ReplaySubject, Subject, timer } from 'rxjs';
import { combineLatest, debounceTime, distinctUntilChanged, filter, map, startWith, switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { ActiveBreakPoints, ActiveBreakPointsService, CmsMenuLink, MenuLinkMapperService } from '../services';


export interface CharmsInfo {
    active: boolean;
    url: string;
    shortLabel: string;
    fullLabel: string;
    svgIconName: string;
}

const mobileCharmsHeight = 50;
const mcAfeeDefaultBottom = 0;//-13 when we switch to the new trustmark

@Component({
    selector: 'menu-frame-component',
    templateUrl: './frame.html',
    styleUrls: ['./frame.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        ['sideBarTrigger', 'width', '80'],
        ['bottomBarTrigger', 'height', `${mobileCharmsHeight}`]
    ]
        .map(([name, styleProperty, valueWhenTrue]) =>
            trigger(name, [
                state('false', style({ [styleProperty]: '0px', opacity: 0 })),
                state('true', style({ [styleProperty]: `${valueWhenTrue}px`, opacity: 1 })),
                transition('false => true', [
                    animate('0.25s ease-out')
                ]),
                transition('true => false', [
                    animate('0.25s ease-in',)
                ]),
            ])
        )
})
export class FrameComponent implements OnInit, OnDestroy {
    isAuthenticated: boolean;
    isPendingFunds: boolean;

    constructor(
        @Inject(WindowRef) private window: Window,
        @Inject(ENVIRON_CONFIG) private environmentConfig,
        private menuLinkMapper: MenuLinkMapperService,
        private matIconRegistry: MatIconRegistry,
        private cmsUtilService: CmsUtilService,
        private domSanitizer: DomSanitizer,
        private cmsResolverService: CmsResolverService,
        private transitionService: TransitionService,
        private urlService: UrlService,
        public authService: AuthenticationService,
        private activeBreakPoints: ActiveBreakPointsService,
    ) { }

    private commonCmsContentSubject = new ReplaySubject<{ facebook: string; twitter: string; instagram: string; linkedin: string; youtube: string }>();
    public activeBreakPoints$: Observable<ActiveBreakPoints>;
    public dashBarInfo$: Observable<{ show: boolean; charms: CharmsInfo[] }>;
    private smallDeviceCharmsSubject = new Subject<boolean>();
    private onDestroySubject = new Subject<void>();

    ngOnDestroy(): void {
        this.commonCmsContentSubject.complete();
        this.onDestroySubject.next();
    }

    public get commonCmsContent() {
        //only one value needed as this is not being updated
        return this.commonCmsContentSubject
            .pipe(take(1));
    }

    private get mcAfeeIcon(): HTMLElement {
        return this.window.document.querySelector(this.environmentConfig.mcAfeeIconQuerySelector);
    }

    private createMutationObserver() {
        return new MutationObserver(mutations => this.onMutations(mutations));
    }

    private onMutations(mutations: MutationRecord[]) {
        mutations.forEach(mutation => {
            //https://support.trustedsite.com/hc/en-us/articles/206269923-How-do-I-change-the-position-of-my-trustmark-
            //the trust mark moves up on mouse in and moves back down after mouse out
            //this not desirable when bottom charms are visible
            //we can override this behavior using this mutation observer
            if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                this.moveMcafeeIcon(mutation.target as HTMLElement, mobileCharmsHeight);
            }
        });
    }

    async ngOnInit() {

        const mcafeeIconMutationObserver = this.createMutationObserver();

        this.smallDeviceCharmsSubject
            .pipe(
                switchMap(appeared =>
                    appeared
                        ? timer(0, 500)
                            .pipe(
                                map(() => this.mcAfeeIcon),
                                filter(icon => !!icon),
                                takeUntil(timer(300000)), //wait for 5 minutes
                                take(1),
                                map(icon => ({ icon, appeared })))
                        : of({ icon: this.mcAfeeIcon, appeared })),
                tap(() => mcafeeIconMutationObserver.disconnect()),
                filter(({ icon }) => !!icon),
                tap(({ icon, appeared }) => this.moveMcafeeIcon(icon, appeared ? mobileCharmsHeight : mcAfeeDefaultBottom)),
                filter(({ appeared }) => appeared),
                tap(({ icon }) => mcafeeIconMutationObserver.observe(icon, { attributes: true, subtree: false })),
                takeUntil(this.onDestroySubject),
                tap({ complete: () => mcafeeIconMutationObserver.disconnect() })
            ).subscribe();

        this.activeBreakPoints$ = this.activeBreakPoints.asObservable().pipe(startWith({}));

        this.refreshCharms();

        const { facebook, twitter, instagram, linkedin, youtube } = await this.cmsResolverService.resolve({ ItemId: cmsIds.CommonCmsContent, mergeParams: true });
        this.commonCmsContentSubject.next({ facebook, twitter, instagram, linkedin, youtube });
        this.isAuthenticated = this.authService.isAuthenticated();
        this.authService.isAuthenticated$.subscribe(res => this.isAuthenticated = res);
        this.isPendingFunds = this.authService.isPendingFunds();
        this.authService.isPendingFunds$.subscribe(res => this.isPendingFunds = res);
        this.authService.isSuspended$.subscribe(() => { this.refreshCharms(); });
    }

    private refreshCharms() {
        this.dashBarInfo$ = this.authorizedCharmsObservable()
            .pipe(
                combineLatest(this.currentUrlPathObservable()),
                map(([currentCharms, currentUrlPath]) => {

                    const activeCharm = currentCharms
                        .find(charm => charm.authorizedChildren.some(child => child.url.toLowerCase() === currentUrlPath.toLowerCase()));

                    return activeCharm
                        ? {
                            show: true,
                            charms: currentCharms.map(charm => ({
                                active: activeCharm === charm,
                                shortLabel: charm.ShortDescription,
                                fullLabel: charm.LongDescription,
                                svgIconName: charm.svgIconName,
                                url: charm.authorizedChildren[0].url
                            }))
                        }
                        : {
                            show: false,
                            charms: []
                        };
                }),
                startWith({
                    show: false,
                    charms: []
                }),
                distinctUntilChanged(isEqual)
            );
    }

    private authorizedCharmsObservable() {
        return from(this.cmsResolverService.resolve({ ItemId: cmsIds.Charms }) as Promise<{
            Children: {
                ShortDescription: string;
                LongDescription: string;
                Image: string;
                Children: CmsMenuLink[];
            }[];
        }>)
            .pipe(
                map(({ Children: charms }, streamIndex) =>
                    charms
                        .filter(charm => charm.Children.length > 0)
                        .map((charm, charmsIndex) => ({
                            ...charm,
                            Url: '',
                            Label: `charm-${charmsIndex}`,
                            svgIconName: `runtime-svg-charm-${streamIndex}-${charmsIndex}`,
                            svgUrl: this.cmsUtilService.generateFileSrc(charm.Image)
                        }))
                ),
                tap(charms => charms.forEach(charm =>
                    this.matIconRegistry.addSvgIcon(
                        charm.svgIconName,
                        this.domSanitizer.bypassSecurityTrustResourceUrl(charm.svgUrl)))),
                switchMap(allCharms => {

                    const allCharmsDictionary = allCharms
                        .reduce((acc, { ShortDescription, LongDescription, svgIconName, Label }) => ({
                            ...acc,
                            [Label]: { ShortDescription, LongDescription, svgIconName }
                        }), {} as { [k: string]: { ShortDescription; LongDescription; svgIconName } });

                    allCharms = this.charmsFilter(allCharms);

                    return this.menuLinkMapper.getMapFilterObservable(of(allCharms))
                        .pipe(map(authorizedCharms =>
                            authorizedCharms.map(({ label, authorizedChildren }) => ({

                                authorizedChildren,
                                ...allCharmsDictionary[label]
                            }))));
                }),
                distinctUntilChanged(isEqual)
            );
    }

    private charmsFilter(charms) {
        const removeId = [];

        if (this.authService.isSuspended()) {
            removeId.push(CharmsCmsIds.Vehicles, CharmsCmsIds.Profile);
        }

        return charms.filter(charm => !removeId.includes(charm.ItemID));
    }

    private currentUrlPathObservable() {
        return fromEventPattern(handler => this.transitionService.onSuccess({}, handler), (_, remove) => remove())
            .pipe(
                debounceTime(50),
                startWith('first'),
                map(() => this.urlService.path()),
                map(path => path.endsWith('/') ? path.slice(0, -1) : path),
                distinctUntilChanged()
            );
    }

    public smallDeviceCharmsAppeared(appeared: boolean) {
        this.smallDeviceCharmsSubject.next(appeared);
    }

    private moveMcafeeIcon(icon: HTMLElement, bottom: number) {

        icon.style.transition = 'all 0.25s ease 0s';
        icon.style.bottom = `${bottom}px`;
    }
}
