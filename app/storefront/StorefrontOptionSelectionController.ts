module HCTRA.Controller {
    import WorkItem = Model.WorkItem;

    //define work item selection logic
    export class StorefrontOptionSelectionController {
        static $inject = ["StorefrontService", "$scope", "$state", "homeStates", "StorefrontModalService", "$q"];

        defaultIcon: Model.ISitecoreMediaItem;
        hoverIcon: Model.ISitecoreMediaItem;
        selectedIcon: Model.ISitecoreMediaItem;

        isProceeding: boolean;

        constructor(
            private storefrontService: Storefront.Service.IStorefrontService,
            private $scope: angular.IScope | any,
            private $state: angular.ui.IStateService,
            private homeStates: any,
            private storefrontModalService: Service.IStorefrontModalService,
            private $q: angular.IQService
        ) {
            //go home is store front not enabled
            if (!storefrontService.isEnabled()) {
                $state.go(this.homeStates.Frame);
                return;
            }

            this.isProceeding = false;

            //opens storefront in full site mode
            $scope.dontSeeWantIneed = () => {
                this.storefrontModalService.iDontSeeWhatINeedMessage(null);
            }

            $scope.getSelectionIcon = this.getSelectionIcon;


            this.setUnavailbleSettings();
            this.setCanProceed();
           
            const contentIds =
                ["selectedIconId", "hoverIconId", "defaultIconId", "taskSelectionPageId"]
                .reduce((acc, key) => (acc[key] = this.getContentFromState(key),acc),{});

            this.$q.all(contentIds).then((content : any) => {
                this.$scope.cmsContent = content.taskSelectionPageId;
                this.defaultIcon = content.defaultIconId;
                this.hoverIcon = content.hoverIconId;
                this.selectedIcon = content.selectedIconId;
            
                this.$scope.uiSortedWorkItems = this.storefrontService.workItems.filter((item) => !item.isShadowItem);
                this.$scope.startWorkItems = this.startWorkItems;
                this.$scope.toggleWorkItem = this.toggleWorkItem;
                this.$scope.keyPressed = this.keyPressed;
            });

        }

        private startWorkItems = () => {
            if (!this.isProceeding) {
                this.isProceeding = true;
                this.storefrontService.startWorkItems()
                    .then((initState) => {
                        if (initState) {
                            this.$state.go(initState);
                        }
                    })
                    .catch(() => {
                       this.isProceeding = false;
                    });
            }
            
        };

        private keyPressed = (event) => {
            if (!this.$scope.noTasksSelected && event.keyCode === 13) {
                event.preventDefault();
                event.stopPropagation();
                this.startWorkItems();
            }
        }

        private setUnavailbleSettings() {
            const set = {};
            this.foreachWorkItem(item => {
                if (item.isSelected && item.unavailableWhenSelected) {
                    for (const id of item.unavailableWhenSelected) {
                        set[id] = true;
                    }
                }
            });

            if (this.storefrontService.isAuthenticated()) {
                set[Model.SelectedOptions.OACC] = true;
            }

            this.foreachWorkItem(item => {
                item.isUnavailable = set[item.id];
                if (set[item.id]) {
                    item.isSelected = false;
                }
            });
        }

        private toggleWorkItem = (workItem: WorkItem) => {
            if (workItem.isUnavailable || !workItem.states || workItem.states.length === 0) return;

            workItem.isSelected = !workItem.isSelected;

            this.setUnavailbleSettings();
            this.setCanProceed();
        };

        private setCanProceed = () => {
            this.$scope.noTasksSelected = this.storefrontService.workItems.reduce((acc: boolean, item: Model.WorkItem) => !item.isSelected && acc, true);
        }

        private foreachWorkItem = (func: (item: WorkItem) => void) => this.storefrontService.workItems.forEach(func);

        private getSelectionIcon = (item: Model.WorkItem, isHovering: boolean) => {
            const imageData = {
                alt: null,
                url: null
            };

            if (item.isUnavailable) {
                imageData.url = this.defaultIcon.ItemMedialUrl;
                imageData.alt = "unavailable";
            } else if (item.isSelected) {
                imageData.url = this.selectedIcon.ItemMedialUrl;
                imageData.alt = "selected";
            } else if (isHovering) {
                imageData.url = this.hoverIcon.ItemMedialUrl;
                imageData.alt = "hover";
            } else {
                imageData.url = this.defaultIcon.ItemMedialUrl;
                imageData.alt = "none";
            }
            return imageData;
        }

        private getContentFromState = (name: string): angular.IPromise<Model.ISitecoreMediaItem> => {
            return this.storefrontService.getCmsItemById(this.$state.current["cms"][name]);
        }
    }
}

(() => {
    'use strict';
    angular.module('HCTRAModule').controller("StorefrontOptionSelectionController", HCTRA.Controller.StorefrontOptionSelectionController);
})();
