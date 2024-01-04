module HCTRA.Directive {

    //define the store front menu directive
    export class StorefrontMenuDirective implements angular.IDirective {
        restrict = "AE";
        templateUrl = "/app/directives/storefront/storefrontMenuTemplate.html";
        
        link = (scope: angular.IScope | any) => {            
            scope.skipToItem = (item: Model.WorkItem) => this.skipToItem(item);
            scope.currentItem = () => this.storefrontService.currentWorkItem(true);
            scope.workItems = this.storefrontService.workItems;
            scope.taskCompleteIcon = this.storefrontService.getTaskCompleteIcon();
            scope.taskNotCompleteIcon = this.storefrontService.getTaskNotCompleteIcon();
            scope.isItemCurrent = (item: Model.WorkItem) => this.isItemActive(item);
        };

        static factory(): ng.IDirectiveFactory {
            const directive = (storefrontService: Storefront.Service.IStorefrontService, storefrontModalService: Service.IStorefrontModalService, $q, $state, stateNames) =>
                new StorefrontMenuDirective(storefrontService, storefrontModalService, $q, $state, stateNames);
            directive.$inject = ["StorefrontService", "StorefrontModalService", "$q", "$state", "stateNames"];
            return directive;
        }

        constructor(
            private storefrontService: Storefront.Service.IStorefrontService,
            private storefrontModalService: Service.IStorefrontModalService,
            private $q: angular.IQService,
            private $state: angular.ui.IStateService,
            private stateNames: Constant.IStateNames
        ) { }

        //skips to the given workitem
        private skipToItem = (item: Model.WorkItem): void => {
            if (!this.storefrontService.isWorkflowActive())
                return;

            if (!this.storefrontService.currentWorkItem() || !this.storefrontService.currentWorkItem().isSkippable || !item)
                return;

            if (this.storefrontService.currentWorkItem().id === item.id || item.isCompleted)
                return;

            //show skip modal
            this.storefrontModalService
                .skipTaskMessage()
                .then((skip) => skip ? this.storefrontService.skip(item.id) : this.$q.reject(null))
                .then((nextState) => {
                    this.$state.go(nextState || this.stateNames.storefrontSurvey);
                });
        }

        //determines if given item is the current workitem
        private isItemActive(item: Model.WorkItem) {
            var current = this.storefrontService.currentWorkItem(true);
            if (!current) return false;

            return current.id === item.id;
        }
    }
}

(() => {
    'use strict';
    angular.module('HCTRAModule')
        .directive("storefrontMenu", HCTRA.Directive.StorefrontMenuDirective.factory());
})();
