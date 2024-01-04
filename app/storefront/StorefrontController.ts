module HCTRA.Controller {
    
    //defines root storefront controller that wires up service calls, state redirects, and other events  
    export class StorefrontController implements Storefront.Service.IStorefrontEventsHandler {
        
        static $inject = [
            "StorefrontService", "$scope", "$q",
            "$state", "stateNames", "router", "StorefrontModalService", "StorefrontEventService", "$window", "routes",
            "errorDisplayService", "loginStates", "storefrontCmsIds"
        ];
        
        //flag for tracking when the store front is ready for use
        readyToUse = false;
        backgroundImage: Model.ISitecoreMediaItem;
        
        //pomise that resolves when controller has completed initializing
        onInitialized: angular.IPromise<StorefrontController>;

        initialUrl: string;

        constructor(
            private storefrontService: Storefront.Service.IStorefrontService,
            private $scope: angular.IScope | any,
            private $q: angular.IQService,
            private $state: angular.ui.IStateService,
            private stateNames: Constant.IStateNames,
            private router: { name: string, config: angular.ui.IState }[],
            private storefrontModalService: Service.IStorefrontModalService,
            private storefrontEventService: Storefront.Service.IStorefrontEventService,
            private $window: angular.IWindowService,
            private routes: HCTRA.Constant.IRoutes,
            private errorDisplayService: HCTRA.Service.IErrorDisplayService,
            private loginStates,
            private storefrontCmsIds: any
        ) {
            //set up scope variables
            this.initialUrl = this.$window.location.origin + this.routes.storefrontHome;
            $scope.hasStarted = () => this.hasStarted();
            $scope.isWorkflowActive = () => this.storefrontService.isWorkflowActive();

            $scope.showWorkflowFunctions = () => (this.storefrontService.fullSiteMode || this.hasStarted()) &&
                this.$state.current.name !== this.stateNames.storefrontSurvey;

            $scope.showTranslationSelect = () => {
                return this.hasStarted() && !this.storefrontService.fullSiteMode;
            };

            $scope.finish = () => this.finish();
            $scope.isFullSiteViewActive = () => this.storefrontService.fullSiteMode;
            $scope.showMenu = () => this.storefrontService.showMenu(this.$state.current);
            $scope.showMainView = () => {

                const currentItem = this.storefrontService.currentWorkItem();
                const hasStates = currentItem && currentItem.states && currentItem.states.length > 0;

                return !this.isExternalTaskModalOpen() && (!currentItem || hasStates);
            }
            $scope.templateToUse = () => this.templateInUse();

            $scope.isCmsContentView = () => this.storefrontService.isCmsContent(this.$state.current) && !this.storefrontService.fullSiteMode;
            $scope.closeCmsContentView = () => this.storefrontModalService.closeCmsContent();

            $scope.isReadyToUse = () => this.readyToUse;
            $scope.externalModalOpen = () => this.storefrontModalService.isExternalTaskModalOpen();
            
            $scope.transitioningState = false;
            $scope.transitionSubView = false;

            $scope.machineName = this.storefrontService.machineName;
            $scope.host = this.$window.location.origin;

            $scope.resetTaps = 0;
            $scope.hardReset = () => {
                $scope.resetTaps++;
                if ($scope.resetTaps >= 10) {
                    $scope.resetTaps = 0;
                    this.storefrontService.reset(Model.StorefrontLogOffType.Forced);
                }
            };

            //initial modal settings
            storefrontModalService.setGlobalModalSettings();
            
            this.onInitialized =



                //when store front servcie is ready..
                storefrontService.onInitialized
                //init shell user
                .then(()=> this.initShellUser())
                //prefetch content
                .then(() => this.prefetchAllContent())
                .then(() => this.getBackgroundImage(this.$state.get(this.stateNames.storefrontHome)))
                .then(() => {
                    this.$scope.backgroundImage = this.backgroundImage;
                    $scope.showBackgroundImage = this.canShowBackgroundImage(this.$state.current);
                }) 
                .then(() => {
                    //logo
                    this.$scope.storefrontLogo = this.storefrontService.getStorefrontLogo();
                    //wire up events
                    this.storefrontEventService.startListening(this);
                    //clean up...
                    this.$scope.$on("$destroy", () => this.storefrontEventService.stopListening());
                })
                //flag ready to use
                .then(() => {
                    this.readyToUse = storefrontService.isEnabled();
                })
                .catch((e) => {
                    //in case something bad happened, so a failure to init message
                    this.$window.console.log(e);
                    return this.storefrontModalService
                        .failedToInitMessage().then(() => {
                            this.onResetComplete(true);
                        });
                })
                //regardless, resolves with instance of this controller
                .then(() => this);
        }

        /****************************Start IStorefrontEventHandlers*****************************************************************/
        onIncompleteWorkItem(workItem: Model.WorkItem): angular.IPromise<Model.WorkItem> {
            return this.storefrontModalService.skippedTasksMessage(workItem).then(this.goToWorkItem);
        }
        
        onCompletedWorkItem(completedWorkItem: Model.WorkItem, nextWorkItem: Model.WorkItem): angular.IPromise<any> {
            
            if (completedWorkItem) {
                return this.storefrontModalService
                    .showCompletionMessage(completedWorkItem)
                    .then(() => {
                        if (nextWorkItem && nextWorkItem.isSelected) {
                            return this.goToWorkItem(nextWorkItem).catch(() => this.$q.resolve());
                        }
                        else if (nextWorkItem && !nextWorkItem.isSelected) {
                            return this.$q.reject("no");
                        }
                        return this.$q.resolve();
                    });
            } else {
                //starting...
                return this.$q.resolve();
            }
        }

        onResetting(): angular.IPromise<any> {
            this.storefrontModalService.setGlobalModalSettings();
            this.storefrontModalService.closeAll(true);
            this.storefrontEventService.resetState();

            return this.$state.go(this.stateNames.storefrontHome);
        }

        onStartTransition(fromState: angular.ui.IState, toState: angular.ui.IState): angular.IPromise<any> {
            this.$scope.resetTaps = 0;
            if (!this.storefrontService.fullSiteMode) {
                this.$scope.transitionSubView =
                    this.storefrontService.showMenu(toState) &&
                    this.storefrontService.showMenu(fromState);
                this.$scope.transitioningState = true;
            }
            
            this.$scope.showBackgroundImage = this.canShowBackgroundImage(toState);
            if (this.$scope.showBackgroundImage) {
                this.$scope.backgroundImage = this.backgroundImage;
            }
            return this.$q.resolve();
        }

        onEndTransition(): void {
            this.$scope.transitioningState = false;
            if (!this.$scope.showBackgroundImage) {
                this.$scope.backgroundImage = null;
            }
        }

        onResetComplete(hard: boolean): angular.IPromise<any> {
            this.errorDisplayService.clearToasts();
            if (hard) {
                this.$window.location.href = this.initialUrl;
                return this.$q.resolve();
            }
            return this.$q.resolve();
        }
        /****************************End IStorefrontEventHandlers**********************************************************************/

        private initShellUser(): angular.IPromise<any> {
            if (this.storefrontService.isShellAccountInitialized) {
                return this.$q.resolve();
            }

            return this.storefrontService
                .authenticateShellAccount()
                .then(() => this.$window.location.reload());
        }

        private getBackgroundImage = (currentState: angular.ui.IState): angular.IPromise<any> => {
            const canStateUseBackground = this.canShowBackgroundImage(currentState);
            
            if (canStateUseBackground) {
                const id = this.storefrontCmsIds.LandingPage;
                
                if (id) {
                    return this.storefrontService
                        .getCmsItemById(id)
                        .then((response) => this.backgroundImage = response.ImageItem);
                }
            }
            return this.$q.resolve(null);
        };

        //builds a reverse lookup by statename from the routes
        private buildRouteLookup(routeConfigs: {name:string, config:angular.ui.IState}[]): { [key: string]: string[] } {
            return routeConfigs.reduce((acc, route) => {
                if (route.config && route.config.templateUrl) {
                    if (!angular.isFunction(route.config.templateUrl)) {
                        acc[route.name] = route.config.templateUrl;
                    }
                } else if (route.config && route.config.views) {
                    acc[route.name] = acc[route.name] || [];
                    
                    for (const viewName in route.config.views) {
                        if (route.config.views.hasOwnProperty(viewName)) {
                            const view = route.config.views[viewName];
                            if (view && view.templateUrl && !angular.isFunction(view.templateUrl)) {
                                acc[route.name].push(view.templateUrl);
                            }
                        }
                    }
                }
                return acc;
            }, {});
        }

        //builds list of urls to give to service to pre-cache
        private prefetchAllContent = () : angular.IPromise<any> => {
            //get all storefront templates used in workitems
            const urlsToPrefetch = [];

            //build a lookup for all available routes' template paths
            const routeMap = this.buildRouteLookup(this.router);

            //for each workitem
            this.storefrontService.workItems
                //get all states
                .map((item) => item.states)
                //smoosh them together
                .reduce((a: string[], b: string[]) => a.concat(b), [])
                //add a few extras
                .concat([this.stateNames.storefrontSelection, this.stateNames.storefrontSurvey, this.loginStates.Login, this.loginStates.AddMissingInformation])
                //then for all those states
                .forEach((state: string) => {
                    //lookup there template path and add to array
                    if (!angular.isArray(routeMap[state])) {
                        urlsToPrefetch.push(routeMap[state]);
                    } else {
                        urlsToPrefetch.push(...routeMap[state]);
                    }
                });

            //add workitem image content
            this.storefrontService.workItems
                .forEach((workItem: Model.WorkItem) => {
                    if (workItem.selectedIcon && workItem.unselectedIcon) {
                        urlsToPrefetch.push(workItem.selectedIcon.image);
                        urlsToPrefetch.push(workItem.unselectedIcon.image);
                    }
                });
            //send all defined urls to be prefetched!
            return this.storefrontService.prefetchContent(urlsToPrefetch.filter((url) => angular.isDefined(url)));
        }

        //determine if a ui-view directive should use the default '' view template or if a storefront view is available for display
        private templateInUse = () => {
            if (this.storefrontService.fullSiteMode || !this.$state.current.views || !this.$state.current.views["storefront"]) {
                return "";
            } else {
                return "storefront";
            }
        }
        
        //redirects to workitem's start state or if null, go to survey
        private goToWorkItem = (item: Model.WorkItem): angular.IPromise<any> => {
            //don't go to workitem if in fullsite mode!
            if (this.storefrontService.fullSiteMode)
                return this.$q.resolve();

            const initState = item ? this.storefrontService.getWorkItemInitState(item) : this.stateNames.storefrontSurvey;
            if (initState) {
                return this.$state.go(initState);
            }

            return this.$q.resolve();
        }
        
        private canShowBackgroundImage = (currentState: angular.ui.IState)=> {
            currentState = currentState || this.$state.current;

            return currentState &&
            (currentState.name === '' ||
             currentState.name === this.stateNames.storefrontHome ||
             currentState.name === this.stateNames.storefrontSelection);
        }
        
        //true if user not at home screen has started
        private hasStarted(): boolean {
            return this.$state.current.name !== this.stateNames.storefrontHome;
        }
        
        //true if a modal was opened to show an external task
        private isExternalTaskModalOpen(): boolean {
            return this.storefrontModalService.isExternalTaskModalOpen();
        }
        
        //exits everything
        private finish(): void {
            this.storefrontModalService.exit();
        }
        
    }
}

(() => {
    'use strict';
    angular.module('HCTRAModule').controller("StorefrontController", HCTRA.Controller.StorefrontController);
})();