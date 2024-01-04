angular.module('HCTRAModule').service('stringCheckService', [
    function () {

        this.isFloat = function (numberString) {
            if (numberString && !isNaN(parseFloat(numberString)) && isFinite(numberString)) {
                return true;
            } else {
                return false;
            }
        };

    }]);