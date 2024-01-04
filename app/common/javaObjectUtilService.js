(function () {

    'use strict';

    angular.module('HCTRAModule').service('javaObjectUtilService', [
        function () {

            this.isEmpty = function (obj) {
                for (var key in obj) {
                    // eslint-disable-next-line no-prototype-builtins
                    if (obj.hasOwnProperty(key))
                        return false; // object is not empty
                }
                return true; // object is empty
            };
        }]);
}());