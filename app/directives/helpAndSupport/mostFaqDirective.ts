module HCTRA.Directive {

    export class MostFaqDirective implements angular.IDirective {
        restrict = "E";
        templateUrl = "/app/directives/helpAndSupport/mostFaqTemplate.html";

        constructor(private routes,
            private genericRepo: Service.IGenericRepo,
            private $location: angular.ILocationService,
            private linkLookupService) { }

        scope = {};

        link = ($scope: HCTRA.Model.IMostFaqDirectiveScope) => {

            let requestTopFaq = {
                itemId: this.routes.faqTopFaqCms,
                fields: "Query"
            };
            this.genericRepo.dataFactory.getCmsPageById(requestTopFaq).then((res) => {
                let parsedRes = angular.fromJson(res.cmsResponse);
                $scope.mostFaq = parsedRes.Query.Results.slice(0, 5);
            });


            $scope.searchMostFaq = (article) => {
                if (angular.isObject(article)) {
                    this.$location.url(this.linkLookupService.articleLookupById(article.ItemID));
                }
            };
        };


        static factory(): ng.IDirectiveFactory {
            const directive = (routes,
                genericRepo: Service.IGenericRepo,
                $location: angular.ILocationService,
                linkLookupService) => new MostFaqDirective(routes, genericRepo, $location, linkLookupService);
            directive.$inject = ["routes", "genericRepo", "$location", "linkLookupService"];
            return directive
        }
    }

}

(function () {
    "use strict";
    angular.module("HCTRAModule").directive("mostFaq", HCTRA.Directive.MostFaqDirective.factory());
}());