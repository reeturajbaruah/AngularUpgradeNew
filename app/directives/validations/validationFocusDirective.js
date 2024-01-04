(function () {
    'use strict';
    //TODO: duplicated in Angular. remove this when migration complete
    angular.module('HCTRAModule').directive("validationFocus", [
        function () {

            return {
                restrict: "A",
                link: function ($scope, elem) {
                    // set up event handler on the form element
                    elem.on('submit', function () {

                        // find the first invalid element
                        var firstInvalid = elem[0].querySelector('.ng-invalid');

                        // if we find one, set focus
                        if (firstInvalid) {
                            firstInvalid.focus();
                        }
                    });
                }
            };
        }]);

}());