(() => {
    'use strict';

    angular.module('HCTRAModule').directive('validateDriverLicense', [() => {
        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                driverLicenseState: '=validateDriverLicense'
            },
            link: (scope: any, elem, attrs, ngModel) => {                
                scope.$watch('driverLicenseState', () => {
                    ngModel.$validate();
                });

                ngModel.$validators.alphaNumeric = (value) => {
                    return /^[a-zA-Z0-9]*$/.test(value || '');
                };

                ngModel.$validators.numericTexasDl = (value) => {
                    return scope.driverLicenseState !== 'TX' || /^[0-9]*$/.test(value || '');
                };

                ngModel.$validators.firstDigitLessThanFiveTexasDl = (value) => {
                    return scope.driverLicenseState !== 'TX' || /^$|^[0-4]/.test(value || '');
                };

                ngModel.$validators.eightDigitTexasDl = (value) => {
                    return scope.driverLicenseState !== 'TX' || /^$|^[0-9]{8}$/.test(value || '');
                };
            }
        };
    }]);
})();