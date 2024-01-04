import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy, Inject } from '@angular/core';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { StateNames as CoreStateNames } from 'constants/module';
import { stateNames as homeStates } from 'home/constants';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { TranslationService } from 'translation/services';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { Subscription } from 'rxjs';
import { FeaturesStates } from 'shared/states';
import { BrowserExtensionHandlerService } from '../../common/services/browserExtensionHandlerService/browserExtensionHandler.service';

@Component({
    selector: 'katy-managed-lanes-component',
    templateUrl: './katyManagedLanes.html',
    styleUrls: ['./katyManagedLanes.less']
})
export class KatyManagedLanesComponent implements AfterViewInit, OnDestroy {

    constructor(
        private stateService: StateService,
        private uiRouterGlobals: UIRouterGlobals,
        private coreStateNames: CoreStateNames,
        private authService: AuthenticationService,
        private translationService: TranslationService,
        private browserExtensionHandlerService: BrowserExtensionHandlerService,
        @Inject(ENVIRON_CONFIG) public environmentConfig

    ) { }

    @ViewChild('Iframe') iframe: ElementRef;

    private languageChangeSubscription: Subscription;
    private currentKatyPage = `index.html`;

    private get languagePreference() {

        return this.translationService.languagePreference || 'english';
    }

    private getIframeSrcFor(language: string) {
        return `/Content/hctra3rdPartyPages/katymanagedlanes/${language.toLowerCase()}/${this.currentKatyPage}`;
    }

    private get iframeSrc() {
        return this.getIframeSrcFor(this.languagePreference);
    }

    ngAfterViewInit(): void {

        this.iframe.nativeElement.src = this.iframeSrc;

        this.languageChangeSubscription = this.translationService
            .realTimeTranslationsEvent
            .subscribe(({ status }) => {

                if (status === 'starting') {
                    const src = this.iframeSrc;

                    if (!this.iframe.nativeElement.src.endsWith(src)) {
                        this.iframe.nativeElement.src = src;
                    }
                }
            });
    }

    onContentLoad(element: HTMLIFrameElement) {

        const currentPage = element
            .contentWindow
            .location
            .href
            .split('/')
            .pop();

        if (currentPage === 'blank.html') {
            //it appears (load) is not called for the blank.html. We probably change the src before blank.html is allowed to load.
            //However, the behavior could be different across browsers so keeping this here.
            return;
        } else if (!element
            .contentWindow
            .document
            .body
            .classList
            .contains('Katy-Managed-Lanes-section')) {

            element.src = this.getIframeSrcFor('english');
            return;
        }

        this.currentKatyPage = currentPage;

        (element.contentWindow as any).toHomePage = () => {
            this.stateService.go(this.authService.isAuthenticated()
                ? homeStates.Frame
                : (!this.environmentConfig.createAccountRefresh ? this.coreStateNames.createAccount :
                    FeaturesStates.Login));

        };

        (element.contentWindow as any).resizeContainer = () => {
            element.style.height = element.contentWindow.document.body.offsetHeight + 35 + 'px';
        };

        (element.contentWindow as any).resizeContainer();


        this.browserExtensionHandlerService.sendTag(
            this.uiRouterGlobals.current,
            `${currentPage.replace('.html', '')}-${this.languagePreference}`.toUpperCase());
    }

    ngOnDestroy(): void {
        if (this.languageChangeSubscription) {
            this.languageChangeSubscription.unsubscribe();
        }
    }
}
