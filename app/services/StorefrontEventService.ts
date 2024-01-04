module HCTRA.Storefront.Service {

    type TransitionObj = { from: () => angular.ui.IState, to: () => angular.ui.IState };

    //defines contract for handling various events the store front service will encounter
    export interface IStorefrontEventsHandler {
        //invoked when store from is attempting complete it's workflow but incomplete tasks remain
        onIncompleteWorkItem: (workItem: Model.WorkItem) => angular.IPromise<Model.WorkItem>;

        //invoked when current task has completed and the next task is ready. nextWorkItem may be null if workflow is complete
        onCompletedWorkItem: (completedWorkItem: Model.WorkItem, nextWorkItem: Model.WorkItem) => angular.IPromise<any>;

        //invoked when storefront is resetting it's interal settings
        onResetting: () => angular.IPromise<any>;

        //invoked when resetting has completed
        onResetComplete: (hard: boolean) => angular.IPromise<any>;

        //starting state transition
        onStartTransition: (fromState: angular.ui.IState, toState: angular.ui.IState) => angular.IPromise<any>;

        //ending state transition
        onEndTransition: () => void;
    }

    export interface IStorefrontEventService {
        startListening(storefrontEvents: IStorefrontEventsHandler);
        addMutationObserver(element: any);
        stopListening();
        resetState();


    }

    export class StorefrontEventService implements IStorefrontEventService {
        //namespace used for tracking UI events
        static eventNamespace = ".StoreFrontEvents";

        // namespaces user events to track for inactivity
        static userInactivityEvents =
            'click dblclick keydown keypress keyup mousedown mousemove scroll tap swipe touchstart touchmove touchend'
                .replace(/(\S+)/g, "$1" + StorefrontEventService.eventNamespace);

        static gotoLinkEvents =
            'click dblclick keyup tap'
                .replace(/(\S+)/g, "$1" + StorefrontEventService.eventNamespace);

        deregisterWindowOpener: () => void;
        deregisterStateWatcher: () => void;
        deregisterHrefWatcher: () => void;
        deregisterStateSuccessWatcher: () => void;
        deregisterStateErrorWatcher: () => void;

        intervalToken: angular.IPromise<any>;
        maintenanceModeIntervalToken: angular.IPromise<any>;

        registeredEventHandler: IStorefrontEventsHandler;
        observer: MutationObserver;

        windows: Window[] = [];

        isInMainenanceMode = false;

        //tracks timestamp since last user interaction
        activityTimestamp: number = StorefrontEventService.newTimestamp();

        //flag for defering activity checks. used when the inactivity modal has opened and count down should start.
        disableActivityCheck = false;

        readonly prtMsg = `
<style>
@media screen {
    .prntMsg {
        display: block;
        width: 400px;
        height: 400px;
        background-color: white;
        position: absolute;
        top: 0px;
        left: 0px;
    }
}
@media print {
    .prntMsg {
        display: none;
    }
}
</style>
<div class='prntMsg'>Document sent to printer.</div>
`;

        //generates a new timestamp
        static newTimestamp = (): number => Date.now();

        //creates ui event name
        static eventName = (eventName): string => eventName + StorefrontEventService.eventNamespace;

        static factory() {
            const service = (angularElementFunction, $window, $interval, documentLocationService, $q, $location, $timeout, storefrontService, storefrontModalService, $state, stateNames, $rootScope, errorDisplayService, genericRepo, maintenanceService, environmentConfig, $transitions) => new StorefrontEventService(angularElementFunction, $window, $interval, documentLocationService, $q, $location, $timeout, storefrontService, storefrontModalService, $state, stateNames, $rootScope, errorDisplayService, genericRepo, maintenanceService, environmentConfig, $transitions);
            service.$inject = ["InjectableAngularElementFunction", "$window", "$interval", "documentLocationService", "$q", "$location", "$timeout", "StorefrontService", "StorefrontModalService", "$state", "stateNames", "$rootScope", "errorDisplayService", "genericRepo", "maintenanceService", "environmentConfig", "$transitions"];
            return service;
        }

        constructor(
            private angularElementFunction: (selector: any) => angular.IAugmentedJQuery,
            private $window: angular.IWindowService,
            private $interval: angular.IIntervalService,
            private documentLocationService: HCTRA.Service.IDocumentLocationService,
            private $q: angular.IQService,
            private $location: angular.ILocationService,
            private $timeout: angular.ITimeoutService,
            private storefrontService: Service.IStorefrontService,
            private storefrontModalService: HCTRA.Service.IStorefrontModalService,
            private $state: angular.ui.IStateService,
            private stateNames: Constant.IStateNames,
            private $rootScope: angular.IRootScopeService,
            private errorDisplayService: HCTRA.Service.IErrorDisplayService,
            private genericRepo: HCTRA.Service.IGenericRepo,
            private maintenanceService: HCTRA.Service.IMaintenanceService,
            private environmentConfig: HCTRA.Constant.IEnvironmentConfig,
            private $transitions: any //doh!
        ) { }

        public startListening(storefrontEvents: IStorefrontEventsHandler) {
            if (!this.storefrontService.isEnabled())
                return;

            this.registeredEventHandler = storefrontEvents;

            //ui events
            this.angularElementFunction(this.$window.document)
                //wire tracked user events
                .on(StorefrontEventService.userInactivityEvents, this.updateActivity)
                //disables the HTML and body tag from scrolling
                .on(StorefrontEventService.eventName('scroll'), this.disableWindowScroll);

            //ui events
            this.angularElementFunction(this.$window.document.body)
                //hijack links forcing page reload or 'new tab' calls
                .on(StorefrontEventService.gotoLinkEvents, "a[href]", (evt) => { this.nonUiRouterLinkClickIntercepter(evt); });

            //interval to check inactivity time
            this.intervalToken = this.$interval(this.checkForUserTimeout, this.environmentConfig.storefrontConfigs.StorefrontInactivityIntervalDelay, 0, false);

            //registers events to the storefront service
            this.storefrontService.registerEventHandlers(storefrontEvents);

            //intercept state changes
            this.deregisterStateSuccessWatcher = this.$transitions.onSuccess({}, this.onStateChangeSuccess);
            this.deregisterStateErrorWatcher = this.$transitions.onError({}, this.onStateChangeError);
            this.deregisterStateWatcher = this.$transitions.onStart({}, this.onStateChange);

            //intercept window.open calls
            this.deregisterWindowOpener = this.$window.open["listen"](this.windowDotOpenInterceptor);

            //intercept href changes
            this.deregisterHrefWatcher = this.documentLocationService.goToHref["listen"](this.locationHrefChanged);
        }

        public addMutationObserver(element) {
            if (this.observer) {
                this.observer.disconnect();
                this.observer = null;
            }

            if ("MutationObserver" in this.$window) {
                this.observer = new this.$window["MutationObserver"](() => this.stripLinks(element));
                this.observer.observe(element,
                    {
                        childList: true,
                        subtree: true
                    });
            }
        }

        public stopListening() {
            /* tslint:disable */
            this.deregisterStateWatcher && this.deregisterStateWatcher();
            this.deregisterWindowOpener && this.deregisterWindowOpener();
            this.deregisterHrefWatcher && this.deregisterHrefWatcher();
            this.deregisterStateSuccessWatcher && this.deregisterStateSuccessWatcher();
            this.deregisterStateErrorWatcher && this.deregisterStateErrorWatcher();
            /* tslint:enable */

            //turn off event listeners
            this.angularElementFunction(this.$window.document).off(StorefrontEventService.eventNamespace);
            //turn off inactivity interval
            this.$interval.cancel(this.intervalToken);
            //deregister storefront events
            if (this.maintenanceModeIntervalToken) {
                this.$interval.cancel(this.maintenanceModeIntervalToken);
            }

            if (this.observer) {
                this.observer.disconnect();
                this.observer = null;
            }
        }

        public resetState() {
            this.disableActivityCheck = false;
            this.updateActivity();
            this.clearWindows();
        }

        private clearWindows() {
            while (this.windows[0]) {
                const w = this.windows.pop();
                try {
                    if (w && !w.closed) {
                        w.close();
                    }
                } catch (e) {
                    continue;
                }
            }
        }

        private stripLinks = (element) => {
            if (!this.storefrontService.isEnabled()) {
                return;
            }

            const elms = this.angularElementFunction(element).find(":not(eft-ach-disclaimer *)>a[href]:not([href^='#']):not([href='']),a[ng-click].disable-for-storefront");

            //stop listening for dom changes for a moment
            this.observer.disconnect();

            /* tslint:disable-next-line */
            for (var i = 0; i < elms.length; i++) {
                const elm: any = this.angularElementFunction(elms[i]);
                elm.removeAttr('target');

                if (!this.possiblePdf(elm.attr('href')) && !this.storefrontService.fullSiteMode) {
                    //strip anchors
                    elm.replaceWith(elm.contents());
                }
            }

            //ok, start listening again
            this.observer.observe(element,
                {
                    childList: true,
                    subtree: true
                });

        }

        //disables scrolling of main window
        private disableWindowScroll = (evt) => {
            this.angularElementFunction(evt.target).scrollTop(0);
        };

        //intercepts anchor(links, 'a') clicks and handles them
        private nonUiRouterLinkClickIntercepter = (evt): boolean => {
            const elm = this.angularElementFunction(evt.currentTarget);
            var href = elm.attr('href');
            const baseURI = (new this.$window.URL(this.$location.absUrl())).origin;
            elm.removeAttr('target');

            if (angular.isUndefined(href)) {
                return true;
            }
            else if (this.isExternalLink(href)) {
                evt.preventDefault();
                evt.stopPropagation();
                evt.stopImmediatePropagation();
                return false;
            }
            else if (href !== "") {
                //pdf first
                href = href.toLowerCase();
                if (this.possiblePdf(href) && !elm.attr('not-pdf')) {
                    this.storefrontModalService
                        .showPdf(baseURI + '/' + href).then(() => { }).catch(() => {
                            elm.attr('not-pdf', '1');
                            this.$location.url(href);
                        });
                    evt.preventDefault();
                    evt.stopPropagation();
                    evt.stopImmediatePropagation();
                    return false;
                }
            }
            return true;
        };


        //intercepts window.open calls and handles them
        private windowDotOpenInterceptor = (evt, args) => {
            //opening a window to write content into
            if (args.href === '') {
                //evt.preventDefault();

                const win = this.angularElementFunction(this.$window);
                const height = win.height();
                const width = win.width();
                //define the type of window storefront will allow
                args.options = `status=no, toolbar=no, menubar=no, location=no, resizable=no, titlebar=no, directories=no, width=${width}, height=${height}`;
                const s = this;
                const onOpen = (newWin) => {
                    s.windows.push(newWin);
                };
                args.onOpen = onOpen;

            } else if (this.isExternalLink(args.href)) {
                evt.preventDefault();
            } else {
                evt.preventDefault();

                //check if content might be a pdf
                if (this.possiblePdf(args.href)) {
                    //try to show pdf
                    this.storefrontModalService
                        .showPdf(args.href)
                        .then(() => { })
                        //if failed, then it wasn't a pdf, then just redirect to it
                        .catch(() => this.$location.url(args.href));
                } else {
                    //just redirect to it.
                    this.$location.url(args.href);
                }
            }
        };

        //try to determine if url is possibly a pdf by the url
        private possiblePdf(url) {
            return (/^(-\/media|sitecore|content|api\/sessions\/pdf|\/api\/sessions\/pdf)\/.*/i.test(url));
        }

        //determine if url is outside orgin
        private isExternalLink(url) {
            //TODO: this needs to update to include api services once they are hosted outside of web project
            if (/^(http|https):\/\/.*/i.test(url)) {
                return !url.startsWith(this.$window.location.origin);
            } else {
                return false;
            }
        }

        //intercepts document.location.href changes and handles them
        private locationHrefChanged = (evt, arg) => {
            //stop rss links from opening
            if (/^(\/rss)\/.*/i.test(arg.url)) {
                evt.preventDefault();
            }
        };

        //update the last time the user interacted with storefront
        private updateActivity = (): void => {
            //only update activity timestamp if inactivity modal is not open
            if (!this.disableActivityCheck) {
                this.activityTimestamp = StorefrontEventService.newTimestamp();
            }


            //fix for elements appearing transparent
            //            var doc = this.$window.document;
            //                var textNode = doc.createTextNode(' ');
            //                doc.body.appendChild(textNode);
            //                this.$timeout(() => {
            //                    textNode.parentNode.removeChild(textNode);
            //                }, 15);//less then 1 frame at 60hz  
            this.angularElementFunction(this.$window).trigger('resize');
        };

        //interval method called to determine if store has timed out
        private checkForUserTimeout = (): angular.IPromise<any> => {
            if (this.$state.current.name === this.stateNames.storefrontHome) return this.$q.reject();

            const timeSpan = StorefrontEventService.newTimestamp() - this.activityTimestamp;

            //test for warning timelapse
            if (timeSpan >= this.environmentConfig.storefrontConfigs.StorefrontInactivityWarning && !this.disableActivityCheck) {
                this.disableActivityCheck = true;
                //open inactivity modal

                return this.storefrontModalService
                    .showInactivity()
                    .then(() => {
                        this.disableActivityCheck = false;
                        this.updateActivity();
                    });
            }

            return this.$q.resolve();
        };

        //state change handler
        private onStateChange = (transition: TransitionObj) => {

            const toState: angular.ui.IState = transition.to();
            const fromState: angular.ui.IState = transition.from();
            const transAny: any = transition;

            //redirect to store from home if not already there
            if (!this.storefrontService.isEnabled()) {
                return this.$q.reject();
            }

            return this.storefrontService
                .checkState(toState)
                .then((result: ICheckStateResult) => {
                    const externalState = result.isExternal;
                    return this.registeredEventHandler.onStartTransition(fromState, toState)
                        .then(() => {
                            if (externalState && !this.storefrontModalService.isExternalTaskModalOpen()) {
                                return this.storefrontModalService
                                    .showExternalTask()
                                    .then(() => transAny.router.stateService.target(fromState.name));
                                //.then(() => this.registeredEventHandler.onEndTransition());
                            }
                        });
                })
                .then(() => this.storefrontService.fullSiteMode
                    ? this.$q.resolve()
                    : this.$timeout(this.environmentConfig.storefrontConfigs.StorefrontShortDelay))
                .catch(this.handleCheckStateError);

        };

        public handleCheckStateError = (error: ICheckStateError) => {

            if (error.hasWorkItemRedirect && Model.SelectedOptions[error.workItemRedirect]) {

                const isQueued = this.storefrontService.isQueued(error.workItemRedirect);
                if (isQueued) {
                    //we need to go back to this redirect state for some reason!
                    const redirectItem = this.storefrontService.getWorkItemById(error.workItemRedirect);
                    redirectItem.isCompleted = false;
                } else {
                    this.storefrontService.insertWorkItem(error.workItemRedirect);
                }
                return this.storefrontService
                    .skip(error.workItemRedirect, false, false)
                    .then((stateName) => this.$state.go(stateName as string));

            }

            if (error.restrictedAbort) {
                return this.$q.reject({ storefrontTransitionBlocked: true, storefrontTransitionBlockedStateName: error.restrictedStateName });
            }

            return this.$q.reject(error);

        };

        public onStateChangeSuccess = (transition: TransitionObj) => {
            const fromState: angular.ui.IState = transition.from();
            const toState: angular.ui.IState = transition.to();

            if (!this.storefrontService.isEnabled()) {
                return;
            }

            if (this.storefrontService.fullSiteMode || !this.storefrontModalService.isExternalTaskModalOpen()) {
                this.registeredEventHandler.onEndTransition();
            }

            if (!this.storefrontService.fullSiteMode && this.storefrontService.isCmsContent(toState)) {
                this.storefrontModalService.showCmsContent(toState, fromState.name);
            }

            this.handleIfSiteEnteredMaintenanceMode();
        }


        private onStateChangeError = () => {
            this.registeredEventHandler.onEndTransition();
            this.handleIfSiteEnteredMaintenanceMode();
        }


        private handleIfSiteEnteredMaintenanceMode = () => {

            this.storefrontService
                .isInMaintenanceMode()
                .then(() => {
                    if (this.isInMainenanceMode) {
                        return;
                    }

                    this.isInMainenanceMode = true;
                    this.disableActivityCheck = true;
                    this.$timeout(() => {
                        this.storefrontService
                            .reset()
                            .finally(() => {
                                this.storefrontModalService.showStorefrontMaintenanceMode();
                                this.errorDisplayService.clearToasts();
                                if (this.maintenanceModeIntervalToken) {
                                    this.$interval.cancel(this.maintenanceModeIntervalToken);
                                }
                                this.maintenanceModeIntervalToken = this.$interval(this.checkForMaintenanceMode,
                                    this.environmentConfig.storefrontConfigs.StorefrontMaintenanceModeIntervalDelay,
                                    0,
                                    false);
                            });
                    }, 1000);
                })
                //ignore
                .catch(() => { });
        };


        private checkForMaintenanceMode = () => {
            this.storefrontService
                .isInMaintenanceMode()
                .then(() => { })//ignore
                .catch(() => {
                    this.$interval.cancel(this.maintenanceModeIntervalToken);
                    this.maintenanceModeIntervalToken = null;
                    this.disableActivityCheck = false;
                    this.isInMainenanceMode = false;
                    return this.storefrontService.reset();
                })
                .finally(() => this.errorDisplayService.clearToasts());
        }
    }
}

(() => {
    'use strict';
    angular.module('HCTRAModule')
        .value("InjectableAngularElementFunction", angular.element)
        .factory("StorefrontEventService", HCTRA.Storefront.Service.StorefrontEventService.factory());
})();