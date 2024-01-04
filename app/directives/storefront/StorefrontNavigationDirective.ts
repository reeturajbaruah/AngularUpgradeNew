module HCTRA.Directive {

    //define navigation for storefront on storefront specific templates that require a custom navigation button
    export class StorefrontNavigationDirective implements angular.IDirective {

        restrict = "AE";
        transclude = true;
        templateUrl = "/app/directives/storefront/storefrontNavigationTemplate.html";
        scope = {
            onProceed: "&",
            preserveWorkItem: "=",
            onCancel: "&",
            onPrevious: "&",
            
            hideProceed: "=",
            showCancel: '=',
            showPrevious: '=',

            isProceedDisabled: '=',
            isFormCompletion: '=',
            excludeGlobalDisable: '='
        };

        static factory(): ng.IDirectiveFactory {
            const directive = (storefrontService, $q, $state, storefrontModalService, stateNames) => new StorefrontNavigationDirective(storefrontService, $q, $state, storefrontModalService, stateNames);
            directive.$inject = ["StorefrontService", "$q", "$state", "StorefrontModalService", "stateNames"];
            return directive;
        }

        //rejects on falsy defined values, calls 'when' on truthy values. resolved undefined values
        private should(value: any): angular.IPromise<any> {
            
            //is 'thenable'
            if (value && 'then' in value) {
                return this.$q.when(value);
            } else if (angular.isUndefined(value)){
                return this.$q.resolve();
            } else {
                return value ? this.$q.resolve(value) : this.$q.reject(value);
            }
        }

        private completeWorkItem(scope: angular.IScope | any) {
            return this.performAction(false, () => scope.onProceed(),() => this.storefrontService.completeWorkItem());
        }

        private cancelWorkItem(scope: angular.IScope | any) {
            const currentWorkItem = this.storefrontService.currentWorkItem();
            if (currentWorkItem) {
                const initialState = this.storefrontService.getWorkItemInitState(currentWorkItem);
                //if cancelling on the initial state, it should cancel the whole work item, so don't perform cancel logic in this case
                if (initialState && this.$state.current.name !== initialState) {
                    return this.performAction(false, () => scope.onCancel(), () => {
                        //check to see if the 'cancel' already redirected to the init state, if so, don't do it again.
                        if (this.$state.current.name !== initialState) {
                            return this.$state.go(initialState, {}, { reload: true });
                        } else {
                            return this.$q.resolve();
                        }
                    });
                }
            }
            return this.performAction(true, () => scope.onCancel(), () => this.storefrontService.completeWorkItem());
        }

        private performAction(warnLeavingTask: boolean, action: () => any, postAction: () => angular.IPromise<any>) {
            return this.$q
                .when(!warnLeavingTask || this.storefrontModalService.skipTaskMessage())
                .then(skip => {
                    if (skip) {
                        return this.storefrontService.lockStateChanging(() => {
                            var result;
                            try {
                                result = action();
                            } catch (e) {
                                result = this.$q.reject(e);
                            }
                            return this.should(result);
                        })
                        .catch((e) => (e && e.detail && e.detail.storefrontTransitionBlocked)
                            ? this.$q.resolve()
                            : this.$q.reject(e)
                        )
                        .then(postAction);
                    } 
                });
        }

        link = (scope: angular.IScope | any, element: angular.IAugmentedJQuery, attrs) => {
           // var proceedIncluded = angular.isDefined(attrs.onProceed);
          //  var cancelIncluded = angular.isDefined(attrs.onCancel);
            
            scope.showLoginHelp = angular.isDefined(attrs.showLoginHelp);
            let blockActions = false;
            const classes = attrs.transcludedClasses ? attrs.transcludedClasses.split(" ").filter(x => x) : [];
            if (scope.excludeGlobalDisable) {
                classes.push('exclude-global-disable');
            }
            scope.transcludedClasses = classes;
        
            const containingForm = element.parents("form");
            
            //only active if service is enabled and is not in full site mode
            if (this.storefrontService.isEnabled() && !this.storefrontService.fullSiteMode) {
                scope.showLoginHelpMessage = () => {
                    if (blockActions) return this.$q.reject();
                    blockActions = true;

                    return this.storefrontModalService
                        .showGotoCsr()
                        .then(imDone => !imDone || this.$state.go(this.stateNames.storefrontSurvey))
                        .finally(() => {
                            blockActions = false;
                        });
                };

                const currentItem = this.storefrontService.currentWorkItem();
                if (currentItem) {
                    scope.showCancel = scope.showCancel && currentItem.isSkippable;
                }

                scope.continueAction = () => {
                    if (containingForm.is(".ng-invalid")) {
                        blockActions = false;
                        return this.$q.reject();
                    }

                    if (blockActions) return this.$q.reject();
                    blockActions = true;

                    const action = scope.isFormCompletion
                        ? this.completeWorkItem(scope)
                        : this.should(scope.onProceed && scope.onProceed());

                    return action.finally(() => {
                        blockActions = false;
                    });
                };
                
                scope.cancelAction = () => {
                    if (blockActions) return this.$q.reject();
                    blockActions = true;

                    return (scope.preserveWorkItem
                        ? this.should(scope.onCancel && scope.onCancel())
                        : this.cancelWorkItem(scope)).finally(() => { blockActions = false; });
                };

                scope.gotoPrevious = () => {
                    if (blockActions) return this.$q.reject();
                    blockActions = true;

                    return this.should(scope.onPrevious && scope.onPrevious())
                        .finally(() => { blockActions = false; });
                };

            } else {
                //completely remove element if not needed
                angular.element(element).remove();
            }
        };

        constructor(
            private storefrontService: Storefront.Service.IStorefrontService,
            private $q: angular.IQService,
            private $state: ng.ui.IStateService,
            private storefrontModalService: Service.IStorefrontModalService,
            private stateNames: Constant.IStateNames
        ) {}
    }
}

(() => {
    'use strict';
    angular.module('HCTRAModule')
        .directive("storefrontNavigation", HCTRA.Directive.StorefrontNavigationDirective.factory());
})();
