(function () {
    'use strict';

    angular.module('HCTRAModule').directive('spinnerRemote', function () {
        return {
            scope: {
                remot: '='
            },
            link: function (scope) {

                angular.element('#spinnerBlock').show();
                var showing = false;

                if (scope.remot) {
                    scope.remot.openSpinnerBlock = function () {
                        // console.log("Spinner start called with " + showing + "!");
                        angular.element('#spinnerBlock').hide();
                        showing = true;
                    };

                    scope.remot.closeSpinnerBlock = function () {
                        // console.log("Spinner stop called with " + showing + "!");
                        if (showing) {
                            // console.log("Actually called the jQuery hide()");
                            angular.element('#spinnerBlock').show();
                        }
                    };
                }
            }
        };
    });
}());