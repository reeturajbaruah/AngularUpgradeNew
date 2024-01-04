module HCTRA.Directive {

    export class DesktopUiDirective implements angular.IDirective {
        constructor(
            private angularEnvironment,
            private $window: angular.IWindowService,
            private $timeout: angular.ITimeoutService,
            private $transitions
        ) {
            this.templateUrl = `/app/directives/desktopUi/DesktopUiTemplateAlpha.html`;
        }

        private readonly legacyMenuBreakpoint = 768;
        private readonly legacyMobileHeaderHeight = 54;
        private readonly eventThrottleDelay = 250;
        private prevScrollPos: number;


        restrict = 'AE';
        templateUrl: string;
        scope = false;

        static factory(): angular.IDirectiveFactory {
            const directive = (angularEnvironment, $window, $timeout, $transitions) =>
                new DesktopUiDirective(angularEnvironment, $window, $timeout, $transitions);
            directive.$inject = ['angularEnvironment', '$window', '$timeout', '$transitions'];
            return directive;
        }

        link = (scope: angular.IScope | any, element: angular.IAugmentedJQuery, attrs) => {

            const forceFullscreen = angular.isDefined(attrs.forceFullscreen);
            if (forceFullscreen) {
                angular.element(this.$window).resize(() => this.resize(element));
                this.resize(element);
            }


            const unregisterStateChangeSuccess = this.$transitions.onSuccess({}, (transition) => {
                const currentState = transition.to();
                this.modifyStateForRefresh(currentState);
            });
            this.modifySiteForRefresh();

            scope.$on('$destroy', () => {
                unregisterStateChangeSuccess();
                angular.element(this.$window).off('scroll', this.mobileTopHeaderOnScroll);
                angular.element(this.$window).off('resize', this.topHeaderOnResize);
            });
        }

        private modifySiteForRefresh = () => {
            // These elements exist in this directive's template so they will already be on the DOM
            const mainContainerElement = angular.element('#special-redesign');
            if (this.$window.outerWidth < this.legacyMenuBreakpoint) {
                mainContainerElement.css('margin-top', `${this.legacyMobileHeaderHeight}px`);
            }

            this.prevScrollPos = this.$window.pageYOffset;
            angular.element(this.$window).on('scroll', this.throttle(this.mobileTopHeaderOnScroll, this.eventThrottleDelay));
            angular.element(this.$window).on('resize', this.throttle(this.topHeaderOnResize, this.eventThrottleDelay));
        }

        private modifyStateForRefresh = (state: { settings: { isHybrid: boolean } }) => {
            // Refresh Hybrid view
            const bodyElement = angular.element('body');
            const topMenuContainerElement = angular.element('#top-menu-container');
            const footerContentContainerElement = angular.element('#footer-content-container > div');
            const desktopUiViewRootElement = angular.element('#desktopUiViewRoot');
            const footerCopyrightElement = angular.element('[device-type=\'desktop\'] .footerCopyright div p');

            if (state.settings && state.settings.isHybrid) {
                bodyElement.addClass('refresh-hybrid-background');
                topMenuContainerElement.css('background-color', '#ffffff');
                footerContentContainerElement.addClass('refresh-hybrid-container');
                footerContentContainerElement.css('padding-bottom', '4px');
                desktopUiViewRootElement.addClass('refresh-hybrid-container');
                footerCopyrightElement.css('color', '#ffffff');
            } else {
                bodyElement.removeClass('refresh-hybrid-background');
                topMenuContainerElement.css('background-color', '');
                footerContentContainerElement.removeClass('refresh-hybrid-container');
                footerContentContainerElement.css('padding-bottom', '');
                desktopUiViewRootElement.removeClass('refresh-hybrid-container');
                footerCopyrightElement.css('color', '');
            }

            
            bodyElement.css('margin-bottom', '0px');
            desktopUiViewRootElement.css('margin-top', '0px');
            desktopUiViewRootElement.css('background-color', '#ffffff');
            const storefrontFullSite = angular.element('.storefrontFullSite');
            if (storefrontFullSite) {
                storefrontFullSite.css('padding-bottom', '0px');
                storefrontFullSite.css('background-color', state.settings && state.settings.isHybrid ? '' : '#ffffff');
            }
            const exitButton = angular.element('.storefrontSmallButton.exit-button');
            if(exitButton) {
                exitButton.css('border', 'none');
                exitButton.css('float', 'unset');
                exitButton.css('margin-left', 'unset');
                //@purple-heart-purple
                exitButton.attr('style', exitButton.attr('style') + ';background-color: #611eb8 !important;');
            }
            
        }

        private mobileTopHeaderOnScroll = () => {
            const mobileHeaderElement = angular.element('#hctra-header.header');
            const hiddenClassName = 'header--hidden';

            const currentScrollPos = this.$window.pageYOffset;
            const scrollDiff = this.prevScrollPos - currentScrollPos;

            if (currentScrollPos <= 0) {
                // scrolled to the very top; element sticks to the top
                mobileHeaderElement.removeClass(hiddenClassName);
            } else if (scrollDiff > 0 && mobileHeaderElement.hasClass(hiddenClassName)) {
                // scrolled up; element slides in
                mobileHeaderElement.removeClass(hiddenClassName);
            } else if (scrollDiff < 0) {
                // scrolled down; element slides out
                mobileHeaderElement.addClass(hiddenClassName);
            }

            this.prevScrollPos = currentScrollPos;
        }

        private topHeaderOnResize = () => {
            const currentViewWidth = this.$window.outerWidth;

            // if we shrink the window, header must be displayed
            if (currentViewWidth < this.legacyMenuBreakpoint) {
                angular.element('#hctra-header').removeClass('header--hidden');
                angular.element('#special-redesign').css('margin-top', `${this.legacyMobileHeaderHeight}px`);
            }
            // if we grow the window, we want to drop any margin-top that might've been added during scrolling in mobile window
            if (currentViewWidth >= this.legacyMenuBreakpoint) {
                angular.element('#special-redesign').css('margin-top', '0');
            }
        }

        private resize = (element: angular.IAugmentedJQuery) => {
            const win = angular.element(this.$window);
            element.outerHeight(win.height());
            element.outerWidth(win.width());
        }

        // TODO: Replace with lodash throttle once this directive is migrated to Angular
        private throttle = (fn: () => void, delay: number) => {
            let last: number;
            let timerPromise: any;
            return () => {
                const now = +new Date();
                if (last && now < last + delay) {
                    this.$timeout.cancel(timerPromise);
                    timerPromise = this.$timeout(() => {
                        last = now;
                        fn();
                    }, delay);
                } else {
                    last = now;
                    fn();
                }
            };
        }
    }
}

(() => {
    'use strict';
    angular.module('HCTRAModule').directive('desktopUi', HCTRA.Directive.DesktopUiDirective.factory());
})();
