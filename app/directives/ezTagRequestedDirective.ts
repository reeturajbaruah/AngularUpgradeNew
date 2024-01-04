module HCTRA.Directive {

    export class EzTagRequestedDirective implements angular.IDirective {
        transclude = true;
        restrict = "E";
        templateUrl = "/app/directives/ezTagRequestedTemplate.html";

        constructor() { }

        scope = {
            vehicleList: "=data",
            onEdit: "&"//TODO: Optional Attribute
        };

        // for logic
        controller = EzTagRequestedDirectiveController;

        static factory(): ng.IDirectiveFactory {
            const directive = () => new EzTagRequestedDirective();
            directive.$inject = [];
            return directive
        }

        // for DOM manipulation
        link = ($scope: any, elem: any, attrs: any) => {
            $scope.showEdit = !!attrs.onEdit;
            $scope.hideClassCode = "hideClassCode" in attrs;
        };
    }

    class EzTagRequestedDirectiveController {
        static $inject = ["$scope", "localDataRepo"];

        constructor(private $scope, private localDataRepo: Service.ILocalDataRepoService) {
            $scope.classIdToLabel = (id) => {
                let label;

                localDataRepo.getClasses().forEach((elem) => {
                    if (elem && parseInt(elem.value, 10) === parseInt(id, 10)) {
                        label = elem.label;
                        return;
                    }
                });

                return label;
            };

            const unwatch = $scope.$watch("vehicleList", (vehicleList) => {
                if (angular.isArray(vehicleList) && vehicleList.length > 0) {
                    vehicleList.forEach((elem) => {
                        if (elem && elem.nickname === (elem.licState + "-" + elem.licPlate)) {
                            elem.nickname = null;
                        }
                    });

                    unwatch();
                }
            });
        }
    }

}

(() => {
    "use strict";
    angular.module("HCTRAModule").directive("ezTagRequested", HCTRA.Directive.EzTagRequestedDirective.factory());
})();