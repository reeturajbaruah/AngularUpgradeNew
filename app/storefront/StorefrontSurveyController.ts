module HCTRA.Controller {

    //defines the survey controller
    export class StorefrontSurveyController {
        static $inject = ["$scope", "StorefrontService", "$state", "stateNames", "$q"];

        constructor(
            private $scope: angular.IScope | any,
            private storefrontService: Storefront.Service.IStorefrontService,
            private $state: angular.ui.IStateService,
            private stateNames: Constant.IStateNames,
            private $q: angular.IQService
        ) {
            if (this.storefrontService.isEnabled() && this.storefrontService.fullSiteMode) {
                this.storefrontService.fullSiteMode = false;
            }
            
            $scope.done = this.done;
            $scope.submit = this.submit;

            $scope.survey = {
                comments: null,
                selection: null
            };

            $scope.isSubmitted = false;
            $scope.isSubmitting = false;

            $scope.canSubmitt = (modelValue) => (modelValue !== null);

            this.getCmsContent("surveyId").then((res: Model.SitecoreItem) => {
                $scope.surveyContent = res;
                $scope.maxCommentsChars = res.maxCommentCharacters;
                $scope.options = [
                    {
                        name: res.goodRatingText,
                        color: "rating-good",
                        selectedImageUrl: res.goodRatingIconSelected.image,
                        unSelectedImageUrl: res.goodRatingIconUnselected.image,
                        value: 1
                    },
                    {
                        name: res.neutralRatingText,
                        color: "rating-neutral",
                        selectedImageUrl: res.neutralRatingIconSelected.image,
                        unSelectedImageUrl: res.neutralRatingIconUnselected.image,
                        value: 0
                    },
                    {
                        name: res.badRatingText,
                        color: "rating-bad",
                        selectedImageUrl: res.badRatingIconSelected.image,
                        unSelectedImageUrl: res.badRatingIconUnselected.image,
                        value: -1
                    }
                ];

                this.getCmsContent("surveyThankYouModalId").then((thankYouRes: Model.SitecoreItem) => {
                    $scope.thankYouMessage = thankYouRes.Title;
                    $scope.buttons = thankYouRes.buttons;
                });

                $scope.maxCharsReached = () => {
                    var chars = ($scope.survey.comments) ? ($scope.survey.comments.length >= ($scope.maxCommentsChars - 1)) : false;
                    return chars;
                }

                $scope.charRemaining = () => {
                    var remaining = ($scope.survey.comments) ? ($scope.maxCommentsChars - $scope.survey.comments.length) : $scope.maxCommentsChars;
                    return remaining;
                }
            });
        }

        private done = () => {
            this.storefrontService
                .reset()
                .finally(() => this.$state.go(this.stateNames.storefrontHome));
        }

        private submit = () => {
            //"submit" survey
            this.$scope.isSubmitting = true;
            this.storefrontService.saveSurveyResponse(this.$scope.survey.selection, this.$scope.survey.comments)
                .finally(() => {
                    this.$scope.isSubmitting = false;
                    this.$scope.isSubmitted = true;
                });

        }

        private getCmsContent = (id): angular.IPromise<any> => {
            return this.storefrontService.getCmsItemById(this.$state.current["cms"][id]);
        };
    }
}

(() => {
    'use strict';
    angular.module('HCTRAModule').controller("StorefrontSurveyController", HCTRA.Controller.StorefrontSurveyController);
})();