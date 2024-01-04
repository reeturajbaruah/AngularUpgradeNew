import { AfterViewInit, Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { StateRegistry, StateService, TransitionService } from '@uirouter/core';
import { StorefrontModalService } from 'storefront/services/modal.service';
import { IStorefrontSession, LogOffType, StorefrontService, WorkflowStateId, WorkItem } from 'storefront/services/storefront.service';
import { cmsIds } from 'storefront/constants';
import { CmsUtilService } from '../../cms/services';
import { fadeAnimation, simpleFadeAnimation } from 'common/ui/animations/animations';
import { ENVIRON_CONFIG, SERVER_CONSTANTS } from 'common/upgrades';
import { Subject } from 'rxjs';
import { stateNames } from 'storefront/constants';
import { stateNames as loginStateNames } from 'login/constants';
import { TranslationService } from '../../translation/services';
import { compare } from '../../common/utilities';
import { stateNames as homeStates } from 'home/constants';
import { isArray } from 'lodash';
import { KioskStates as createAccountStateNames } from 'account/create/states';
import { AuthenticationService } from '../../authentication/authenticationService/authentication.service';
import { CurrentUserService, GlobalVariableService } from '../../common/services';

@Component({
    selector: 'kiosk-app-component',
    templateUrl: './kiosk-app.component.html',
    styleUrls: ['./kiosk-app.component.less'],
    animations: [simpleFadeAnimation, fadeAnimation]
})
export class KioskAppComponent implements OnInit, AfterViewInit {
    public canUseBackgroundImage = false;
    public backgroundImage: any;
    public translateIcon: any;
    public userActivity: any;
    public userInactive: Subject<any> = new Subject();
    public intervalFlag: boolean;
    public showCurtain = false;
    public showRouterView = true;
    public transitionSuccess = true;
    private translateIconPos = 0;
    public show = false;
    @ViewChild('core') input;
    @ViewChild('taskView') taskView;

    constructor(
        private storefrontService: StorefrontService,
        private window: Window,
        private stateService: StateService,
        private modalService: StorefrontModalService,
        private elementRef: ElementRef<HTMLElement>,
        private cmsUtilService: CmsUtilService,
        @Inject(ENVIRON_CONFIG) private environmentConfig,
        private storefrontModalService: StorefrontModalService,
        private transitionService: TransitionService,
        private translation: TranslationService,
        private authenticationService: AuthenticationService,
        private currentUserService: CurrentUserService,
        @Inject(SERVER_CONSTANTS) private serverConstants,
        private globalVariableService: GlobalVariableService

    ) {
        window.addEventListener('beforeWindowOpen', (e: CustomEvent) => {
            e.detail.newWindow = this.modalService.showExternalPage(e.detail.url);
            e.preventDefault();
        });

        window.addEventListener('click', this.handleAnchorClicks);
        window.addEventListener('dblclick', this.handleAnchorClicks);

        ['mousemove', 'keypress', 'click', 'scroll'].forEach((event) => {
            window.addEventListener(event, () => {
                this.refreshUserActivity(this);
            });
        });

        this.intervalFlag = true;
        this.setTimeout();
        this.userInactive.subscribe(() => this.handleInactivity());

        this.transitionService.onBefore({}, async (transition) => {
            const currentWorkItem = this.storefrontService.currentWorkItem;
            if (currentWorkItem && currentWorkItem.id !== WorkflowStateId.WEBST) {
                const toName = transition.to().name;
                if (transition.from().name === loginStateNames.Login && toName !== createAccountStateNames.Login) {
                    const currentUser = this.currentUserService.getCurrentUser();
                    if (currentUser.newAccountStep && !currentUser.newAccountStep.accountComplete) {
                        await this.storefrontModalService.finishAccountSetup();
                        return false;
                    }
                }
                const handled = await this.handleExternalUrl(transition.to().url, currentWorkItem);
                if (handled) {
                    return false;
                }
                await this.onBefore(toName);
            }
        });

        this.transitionService.onSuccess({}, async (transition) => {
            const currentWorkItem = this.storefrontService.currentWorkItem;
            if (currentWorkItem && currentWorkItem.id !== WorkflowStateId.WEBST) {
                await this.onSuccess(transition.to().name);
            }

            const isMaintenanceMode = await this.storefrontService.isMaintenanceMode();
            if (isMaintenanceMode) {
                await this.storefrontModalService.showStorefrontMaintenanceMode();
            }

            this.stripLinks();
        });
    }

    setTimeout() {
        this.userActivity = setTimeout(() => this.userInactive.next(undefined), this.environmentConfig.storefrontConfigs.StorefrontInactivityReset);
    }

    public async handleInactivity() {
        if (this.storefrontService.currentWorkItem.id !== WorkflowStateId.START) {
            await this.storefrontModalService.showInactivityMessage(this.environmentConfig.storefrontConfigs.StorefrontInactivityWarning);
            this.refreshUserActivity(this);
        }
    }

    public refreshUserActivity(self: KioskAppComponent) {
        //check for x minutes of inacitivity every x seconds 
        if (self.intervalFlag) {
            clearTimeout(this.userActivity);
            self.setTimeout();
            self.intervalFlag = false;
            setTimeout(() => {
                self.intervalFlag = true;
            }, self.environmentConfig.storefrontConfigs.StorefrontInactivityIntervalDelay);
        }
    }

    private stripLinks() {
        if (this.taskView) {
            //directly copied from AngularJS version
            const elements = this.taskView.nativeElement.querySelectorAll(':not(eft-ach-disclaimer *)>a[href]:not([href^=\'#\']):not([href=\'\']),a[ng-click].disable-for-storefront');
            for (const element of elements) {
                if (!(/^(-\/media|sitecore|content|api\/sessions\/pdf|\/api\/sessions\/pdf)\/.*/i.test(element.href))) {
                    element.replaceWith(element.text);
                }
            }
        }
    }

    //This can probably be deleted, as anchor links will be stripped and Kioware will block new tabs from opening
    private handleAnchorClicks = (e: Event) => {
        if (!e.target) {
            return;
        }

        const elm = e.target as HTMLAnchorElement;
        if (elm.tagName.toLowerCase() === 'a' && elm.href) {
            const currentWorkItem = this.storefrontService.currentWorkItem;
            if (currentWorkItem.id === WorkflowStateId.WEBST) {
                if (this.checkPath(elm.href) === 'external') {
                    e.preventDefault();
                }
            } else {
                e.preventDefault();
                this.handleExternalUrl(elm.href, currentWorkItem);
            }
        }
    };

    //Return true to cancel transition
    public async handleExternalUrl(url: string, currentWorkItem?: WorkItem): Promise<boolean> {
        const option = this.checkPath(url);
        switch (option) {
            case 'external':
                return true;
            case 'extWorkflow':
                //Block if toState requires login and the user is not currently logged in
                if (!this.authenticationService.isAuthenticated()) {
                    const urlObj = new URL(url);
                    const state = this.stateService.get(urlObj.pathname.substring(1));
                    if (state && isArray(state.resolve)) {
                        const resolveType = state.resolve.filter((item) => 'authorizedRoles' in item)[0] as any;
                        if (resolveType.authorizedRoles.includes('active')) {
                            return true;
                        }
                    }
                }
                await this.storefrontModalService.showExternalPage({ url, pdf: false });
                return true;
            default:
                //block create account 
                if (currentWorkItem && currentWorkItem.id !== WorkflowStateId.OACC) {
                    if (option.isCreateAccount) {
                        return true;
                    }
                }
                return false;
        }
    }

    public async onBefore(toName: string) {
        if (this.showCurtain) {
            if ([stateNames.Home, stateNames.Selection, stateNames.Survey].includes(toName)) {
                this.transitionSuccess = false;
                this.showCurtain = false;
                await this.storefrontService.delay(500);
            } else {
                if (loginStateNames.Login !== toName) {
                    this.showRouterView = false;
                    await this.storefrontService.delay(400);
                }
            }
        } else {
            if (![stateNames.Home, stateNames.Selection, stateNames.Survey, homeStates.Frame].includes(toName)) {
                this.showCurtain = true;
            }
        }
    }

    public async onSuccess(toName: string) {
        if (!this.transitionSuccess) {
            if ([stateNames.Home, stateNames.Selection, stateNames.Survey, homeStates.Frame].includes(toName)) {
                this.transitionSuccess = true;
            }
        }

        if (!this.showRouterView) {
            this.showRouterView = true;
        }
    }

    get fragmentView(): boolean {
        return this.window.self !== this.window.top;
    }

    get desktopMode(): boolean {
        const desktopMode = this.storefrontService.desktopMode;
        if (desktopMode) {
            this.showRouterView = false;
        }
        return desktopMode;
    }

    public checkPath(url: string): 'external' | { result: 'intWorkflow'; isCreateAccount: boolean } | 'extWorkflow' {
        const protocol = this.window.location.protocol;

        let urlObj: URL;

        if (url.substring(0, 1) === '/') {
            urlObj = new URL(url, this.window.location.origin);
        } else if (url.startsWith(this.window.location.origin)) {
            urlObj = new URL(url);
        } else if (/^(http|https):\/\/.*/i.test(url)) {
            return 'external';
        } else if ((protocol + '//' + url).startsWith(this.window.location.origin)) {
            urlObj = new URL(protocol + '//' + url);
        } else {
            return 'external';
        }

        const stateName = this.storefrontService.getStateNameFromUrl(urlObj.pathname);
        //must hard-code create account for now url will not match with state url, figure out fix for this?
        const isCreateAccount = urlObj.pathname === '/NewAccount/PersonalAccount';
        if (stateName || isCreateAccount) {
            return { result: 'intWorkflow', isCreateAccount };
        } else {
            return 'extWorkflow';
        }
    }

    public showBackgroundImage(): boolean {
        const item = this.storefrontService.currentWorkItem;
        return item ? [WorkflowStateId.START, WorkflowStateId.SELECT].includes(item.id) : false;
    }

    public get showTranslateIcon(): boolean {
        return !compare(this.translation.languagePreference, 'english');
    }

    public get translateIconPosition(): string {
        if (this.input && this.input.nativeElement.offsetHeight) {
            this.translateIconPos = this.input.nativeElement.offsetHeight + 90;
        }
        return this.translateIconPos + 'px';
    };

    public get isStartPage(): boolean {
        const currentWorkItem = this.storefrontService.currentWorkItem;
        return currentWorkItem && this.storefrontService.currentWorkItem.id === WorkflowStateId.START;
    }

    async ngOnInit() {
        const cmsContent = await this.storefrontService.getCmsItem(cmsIds.LandingPage);
        this.translateIcon = await this.storefrontService.getCmsItem(cmsIds.googleTranslationIconId);
        this.backgroundImage = this.cmsUtilService.parseAllImageAttributes(cmsContent.Image);

        if (this.fragmentView) {
            console.log('is fragment');
            return;
        }

        await this.storefrontService.init();
        const item = this.storefrontService.currentWorkItem;

        await this.stateService.go(item.startStateName);

        //
        this.show = true;
    }

    ngAfterViewInit() {
        let latestWebUiVersion;
        const currentlyDownloadedWebUiVersion = this.serverConstants.currentlyDownloadedWebUiVersion;

        this.globalVariableService.latestWebUiVersion.subscribe(async res => {

            if (latestWebUiVersion && currentlyDownloadedWebUiVersion
                && latestWebUiVersion !== currentlyDownloadedWebUiVersion) {

                latestWebUiVersion = res;
                await this.storefrontService.restart(true, LogOffType.Forced);
            }
        });
    }

}
