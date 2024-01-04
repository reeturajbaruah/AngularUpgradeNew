(function () {
    'use strict';

    describe('directive: luhn', function () {

        beforeEach(angular.mock.module('HCTRAModule'));

        var scope,
			el;


        //beforeEach(angular.mock.module(function ($provide) {
        //    $provide.value('genericRepo', hctraMocks.genericRepo());
        //}));

        beforeEach(angular.mock.inject(function ($rootScope, $compile) {
            el = angular.element('<input type="text" ng-model="model" luhn></input>');
            scope = $rootScope.$new();
            scope.model = "";
            $compile(el)(scope);
            scope.$digest();
        }));

        it('should begin as valid', function () {
            // If used on a field that is not required, you don't want it to fail luhn
            scope.model = "";
            scope.$digest();
            expect(el.hasClass("ng-valid")).toBeTruthy();
            expect(el.hasClass("ng-invalid")).toBeFalsy();
        });

        it('should accept a valid credit card number', function () {
            scope.model = "4111111111111111";
            scope.$digest();
            expect(el.hasClass("ng-valid")).toBeTruthy();
            expect(el.hasClass("ng-invalid")).toBeFalsy();
        });

        it('should reject a credit card number that is off by one digit', function () {
            scope.model = "4111121111111111"; // The '2' should be a '1'
            scope.$digest();
            expect(el.hasClass("ng-valid")).toBeFalsy();
            expect(el.hasClass("ng-invalid")).toBeTruthy();

            scope.model = "411111111111111"; // Too short
            scope.$digest();
            expect(el.hasClass("ng-valid")).toBeFalsy();
            expect(el.hasClass("ng-invalid")).toBeTruthy();

            scope.model = "41111111111111111"; // Too long
            scope.$digest();
            expect(el.hasClass("ng-valid")).toBeFalsy();
            expect(el.hasClass("ng-invalid")).toBeTruthy();
        });
    });

}());