(function () {
    'use strict';
    angular.module('HCTRAModule').filter('creditCard', [
        function () {
            return function (creditCardInput, creditCardType) {
                if (!creditCardInput) { return ''; }

                var value = creditCardInput.toString().trim().replace(/\D/g, '');
                value = value.substring(value.length - 4, value.length);

                var maskedCard;
                switch (creditCardType.toLowerCase().replace(' ', '')) {
                    case 'visa': // ****-****-****-####
                    case 'v':
                    case 'mastercard':
                    case 'm':
                    case 'discover':
                    case 'd':
                        maskedCard = '****-****-****-' + value;
                        break;

                    case 'americanexpress': //****-******-*####
                    case 'a':
                        maskedCard = '****-******-*' + value;
                        break;

                    default:
                        break;
                }

                return maskedCard;
            };
        }
    ]);

    angular.module('HCTRAModule').filter('creditCardCode', [
        function () {
            return function (creditCardInput, creditCardCode) {
                if (!creditCardInput) { return ''; }

                var value = creditCardInput.toString().trim().replace(/\D/g, '');
                value = value.substring(value.length - 4, value.length);

                var maskedCard;
                switch (creditCardCode.toLowerCase()) {
                    case 'v': // ****-****-****-####
                    case 'm':
                    case 'd':
                        maskedCard = '****-****-****-' + value;
                        break;

                    case 'a': //****-******-*####
                        maskedCard = '****-******-*' + value;
                        break;

                    default:
                        break;
                }

                return maskedCard;
            };
        }
    ]);
    //CreditCardType is convereted to enum in Angular
    angular.module('HCTRAModule').filter('creditCardCodeToName', [ "creditCardTypes",
        function (creditCardTypes) {
            return function (code) {
                switch (code) {
                    case "V":
                        return creditCardTypes.visa;
                    case "M":
                        return creditCardTypes.mastercard;
                    case "D":
                        return creditCardTypes.discover;
                    case "A":
                        return creditCardTypes.amex;
                }
            };
        }
    ]);

}());