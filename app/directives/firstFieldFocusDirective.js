(function () {
    'use strict';

    angular.module('HCTRAModule').directive("firstFieldFocus", ['$timeout',
        function ($timeout) {

            return {
                restrict: "E",
                scope: {
                    remote: '='
                },
                link: function ($scope) {

                    $scope.remote.focusFirstField = function () {

                        $timeout(function () {
                            var jqFields = angular.element('input[required], input[required="required"], select[required], select[required="required"], textarea[required], textarea[required="required"]');
                            if (jqFields.length > 0) {
                                var jqFirst = jqFields.eq(0);
                                if (jqFirst.attr('id') === 'inputSearch') {
                                    jqFirst = jqFields.eq(1);
                                }
                                if (jqFirst.focus) {
                                    angular.element(jqFirst).focus();
                                }
                            }
                        }, 300);
                    };
                }
            };
        }]);

}());