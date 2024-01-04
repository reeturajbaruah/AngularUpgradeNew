((() => {
    "use strict";

    angular.module("HCTRAModule").directive("upDownEnterInterceptor", [
        () => ({
                restrict: "A",
                scope: {
                    actions: "=upDownEnterInterceptor"
                },
                link($scope: HCTRA.Model.IUpDownEnterInterceptorDirectiveScope,
                    element: angular.IAugmentedJQuery) {

                    const UP: number = 38;
                    const DOWN: number = 40;
                    const RETURN: number = 13;

                    element.bind("keydown keypress", function (event) {
                        switch (event.which) {
                            case UP: {
                                $scope.$apply($scope.actions.upAction);
                                break;
                            }
                            case DOWN: {
                                $scope.$apply($scope.actions.downAction);
                                break;
                            }
                            case RETURN: {
                                $scope.$apply(() => { $scope.actions.enterAction(event); });
                                break;
                            }
                            default: break;
                        }
                    });

                }
            })]);

})());