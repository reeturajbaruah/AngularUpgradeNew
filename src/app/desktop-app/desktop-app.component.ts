import { Component, OnDestroy, OnInit, Inject, AfterViewInit } from '@angular/core';
import { TransitionService } from '@uirouter/core';
import { GlobalVariableService } from 'common/services';
import { SERVER_CONSTANTS } from 'common/upgrades';

import { of, throttleTime } from 'rxjs';

@Component({
    selector: 'desktop-app-component',
    templateUrl: './desktop-app.component.html',
    styleUrls: ['./desktop-app.component.less'],
})
export class DesktopAppComponent implements OnInit, AfterViewInit, OnDestroy {

    private readonly legacyMenuBreakpoint = 768;
    private readonly legacyMobileHeaderHeight = 54;
    private prevScrollPos: number;
    private readonly eventThrottleDelay = 250;

    /* eslint-disable-next-line */
    private unregisterStateChangeSuccess: Function;

    constructor(
        private window: Window,
        private transitionService: TransitionService,
        @Inject(SERVER_CONSTANTS) private serverConstants,
        private globalVariableService: GlobalVariableService
    ) {
    }

    ngOnInit() {
        this.unregisterStateChangeSuccess = this.transitionService.onSuccess({}, async (transition) => {
            const currentState: any = transition.to();
            this.modifyStateForRefresh(currentState);
        });;

        this.modifySiteForRefresh();

    }

    ngAfterViewInit() {
        let latestWebUiVersion;

        this.globalVariableService.latestWebUiVersion.subscribe(res => {

            if (latestWebUiVersion && this.serverConstants.currentlyDownloadedWebUiVersion
                && latestWebUiVersion !== this.serverConstants.currentlyDownloadedWebUiVersion) {

                latestWebUiVersion = res;
                this.window.location.reload();
            }
        });
    }


    private addClass(el: Element, className: string) {
        if (el) {
            el.classList.add(className);
        }
    }

    private removeClass(el: Element, className: string) {
        if (el) {
            el.classList.remove(className);
        }
    }

    private addStyle(el: HTMLElement, style: { name: string; value: string }) {

        if (el && el.style[style.name]) {
            el.style[style.name] = style.value;
        }

    }

    private modifyStateForRefresh = (state: { settings: { isHybrid: boolean } }) => {

        const document = this.window.document;
        const bodyElement = document.querySelector('body');
        const topMenuContainerElement: HTMLElement = document.querySelector('#top-menu-container');

        const footerContentContainerElement = document.querySelector('#footer-content-container > div');
        const desktopUiViewRootElement = document.querySelector('#desktopUiViewRoot');
        const footerCopyrightElement: HTMLElement = document.querySelector('[device-type=\'desktop\'] .footerCopyright div p');

        if (state.settings && state.settings.isHybrid) {
            this.addClass(bodyElement, 'refresh-hybrid-background');
            this.addStyle(topMenuContainerElement, { name: 'backgroundColor', value: '#ffffff' });

            this.addClass(footerContentContainerElement, 'refresh-hybrid-container');

            this.addStyle((footerContentContainerElement as HTMLElement), { name: 'paddingBottom', value: '4px' });

            this.addClass(desktopUiViewRootElement, 'refresh-hybrid-container');;

            this.addStyle(footerCopyrightElement, { name: 'color', value: '#ffffff' });


        } else {
            this.removeClass(bodyElement, 'refresh-hybrid-background');

            this.addStyle(topMenuContainerElement, { name: 'backgroundColor', value: '' });

            this.removeClass(footerContentContainerElement, 'refresh-hybrid-container');

            this.addStyle((footerContentContainerElement as HTMLElement), { name: 'paddingBottom', value: '' });

            this.removeClass(desktopUiViewRootElement, 'refresh-hybrid-container');

            this.addStyle(footerCopyrightElement, { name: 'color', value: '' });

        }

        this.addStyle((bodyElement as HTMLElement), { name: 'marginBottom', value: '0px' });

        this.addStyle((desktopUiViewRootElement as HTMLElement), { name: 'marginTop', value: '0px' });

        this.addStyle((desktopUiViewRootElement as HTMLElement), { name: 'backgroundColor', value: '#ffffff' });


        const storefrontFullSite: HTMLElement = document.querySelector('.storefrontFullSite');
        if (storefrontFullSite) {

            this.addStyle(storefrontFullSite, { name: 'paddingBottom', value: '0px' });

            this.addStyle(storefrontFullSite, { name: 'backgroundColor', value: (state.settings && state.settings.isHybrid ? '' : '#ffffff') });

        }

        const exitButton: HTMLElement = document.querySelector('.storefrontSmallButton.exit-button');

        if (exitButton) {
            this.addStyle(exitButton, { name: 'border', value: 'none' });

            this.addStyle(exitButton, { name: 'float', value: 'unset' });

            this.addStyle(exitButton, { name: 'marginLeft', value: 'unset' });

            this.addStyle(exitButton, { name: 'backgroundColor', value: '#611eb8 !important' });

        }

    };

    private modifySiteForRefresh = () => {
        const mainContainerElement: HTMLElement = this.window.document.querySelector('#special-redesign');

        if (this.window.outerWidth < this.legacyMenuBreakpoint) {

            this.addStyle(mainContainerElement, { name: 'marginTop', value: `${this.legacyMobileHeaderHeight}px` });

        }

        this.prevScrollPos = this.window.scrollY;

        this.window.addEventListener('scroll', (ev: CustomEvent) => {
            of(ev).pipe(throttleTime(this.eventThrottleDelay))
                .subscribe(e =>
                    this.mobileTopHeaderOnScroll()
                );
        });

        this.window.addEventListener('resize', (e: CustomEvent) => {
            of(e).pipe(throttleTime(this.eventThrottleDelay))
                .subscribe(res => this.topHeaderOnResize());
        });
    };


    private mobileTopHeaderOnScroll = () => {

        const mobileHeaderElement = this.window.document.querySelector('#hctra-header.header');

        const hiddenClassName = 'header--hidden';

        const currentScrollPos = this.window.scrollY;
        const scrollDiff = this.prevScrollPos - currentScrollPos;

        if (currentScrollPos <= 0) {
            // scrolled to the very top; element sticks to the top
            this.removeClass(mobileHeaderElement, hiddenClassName);
        } else if (scrollDiff > 0 && mobileHeaderElement && mobileHeaderElement.classList.contains[hiddenClassName]) {
            // scrolled up; element slides in
            this.removeClass(mobileHeaderElement, hiddenClassName);

        } else if (scrollDiff < 0) {
            // scrolled down; element slides out
            this.addClass(mobileHeaderElement, hiddenClassName);

        }

        this.prevScrollPos = currentScrollPos;

    };

    private topHeaderOnResize = () => {
        const currentViewWidth = this.window.outerWidth;
        const document = this.window.document;

        const el: HTMLElement = document.querySelector('#special-redesign');
        // if we shrink the window, header must be displayed
        if (currentViewWidth < this.legacyMenuBreakpoint) {

            this.removeClass(document.querySelector('#hctra-header'), 'header--hidden');

            this.addStyle(el, { name: 'marginTop', value: `${this.legacyMobileHeaderHeight}px` });

        }
        // if we grow the window, we want to drop any margin-top that might've been added during scrolling in mobile window
        if (currentViewWidth >= this.legacyMenuBreakpoint) {
            this.addStyle(el, { name: 'marginTop', value: '0' });

        }
    };

    ngOnDestroy() {
        this.unregisterStateChangeSuccess();
        this.window.removeEventListener('scroll', this.mobileTopHeaderOnScroll);
        this.window.removeEventListener('resize', this.topHeaderOnResize);

    }
}
