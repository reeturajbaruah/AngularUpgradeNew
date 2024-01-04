﻿(function () {
    'use strict';

    angular.module('HCTRAModule').directive('selectOnClick', ['$window',
        function ($window) {
            return {
                restrict: 'A',
                link: function (scope, element) {
                    element.on('click', function () {
                        if (!$window.getSelection().toString()) {
                            this.setSelectionRange(0, this.value.length);
                        }
                    });
                }
            };
        }]);
}());