(function () {
    'use strict';

    angular.module('HCTRAModule').directive("addMultipleVehicles", ['localDataRepo',
        function (localDataRepo) {

            return {
                restrict: "E",
                templateUrl: "/app/directives/addMultipleVehiclesTemplate.html",
                scope: {
                    vehicleList: '=',
                    editFunction: '&',
                    deleteFunction: '&',
                    hideDelete: '=?',
                    title: '=?'
                },
                link: function ($scope) {

                    if (!$scope.hideDelete) {
                        $scope.hideDelete = false;
                    }

                    if (!$scope.title) {
                        $scope.title = "EZ TAGs Requested";
                    }

                    $scope.onEdit = function (index) {
                        var functionFromParentController = $scope.editFunction();
                        functionFromParentController(index);
                    };

                    var classList = localDataRepo.getClasses(); // Axle classifications

                    $scope.classIdToLabel = function (id) {

                        var label;

                        classList.forEach(function (elem) {
                            if (elem.value == id) {

                                label = elem.label;
                                return;
                            }

                        });

                        return label;
                    };

                    $scope.onDelete = function (index) {
                        var functionFromParentController = $scope.deleteFunction();
                        functionFromParentController(index);
                    };

                }
            };
        }]);

}());