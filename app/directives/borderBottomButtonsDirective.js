(function () {
    'use strict';

    angular.module('HCTRAModule').directive("borderBottomButtons", [
        function () {

            return {
                transclude: true,
                restrict: "E",
                templateUrl: "/app/directives/borderBottomButtonsTemplate.html",
                scope: {
                    previousText: '@',
                    onContinueSave: '&',
                    onCancel: '&',
                    onPrevious: '&',
                    cancelText: '@',
                    isDisabled: '=',
                    excludeGlobalDisable: '=',
                    formComplete: '=?',
                    form: '=' // pass in the form if the directive is outside the form tag
                },
                link: function ($scope, elem, attrs) {
                    $scope.hideContinueSave = 'hideContinueSave' in attrs;
                    $scope.preserveWorkItem = 'preserveWorkItem' in attrs;
                    $scope.showCancel = 'showCancel' in attrs;
                    $scope.showPrevious = 'showPrevious' in attrs;

                    //this attr can be used to determine of user is at an exit point of the current 'wizard'
                    if (angular.isDefined(attrs['formComplete']) && attrs['formComplete'] === '') {
                        $scope.formComplete = true;   
                    } else if (angular.isUndefined(attrs['formComplete'])) {
                        $scope.formComplete = false;
                    }

                    if (angular.isDefined(attrs['storefrontOnly']) && attrs['storefrontOnly'] === '') {
                        $scope.storefrontOnly = true;
                    }

                    if (!('cancelText' in attrs) || angular.isUndefined(attrs.cancelText)) {
                        $scope.cancelText = 'Cancel';
                    }

                    $scope.continueSaveInvoked = function() {
                        var returnValue = $scope.onContinueSave();//TODO: needto redirect for suspended accounts
                        $scope.setSubmitted();
                        if ($scope.onClick)
                            $scope.onClick();
                        return returnValue;
                    };

                    // sets submitted property for validation purposes
                    $scope.setSubmitted = function () {
                        if ($scope.form) {
                            $scope.form.$setSubmitted();
                        }
                    };

                    //$scope.onClick = function () {
                    //    $scope.permanentDisable = true;
                    //};

                    // Extracts the transcluded button text
                    // TODO: Need to fix commented code for /NewAccount/AddEZTAG
                    //$transclude(function (buttonText) {
                    //    if (buttonText.text().trim().length > 0) {
                    //        $scope.buttonText = buttonText.text();
                    //    }
                    //});
                }
            };
        }]);

}());