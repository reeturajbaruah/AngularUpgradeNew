(function () {
    'use strict';

    describe('directive: email-valid', function () {

        beforeEach(angular.mock.module('HCTRAModule'));

        var scope,
			el;

        beforeEach(angular.mock.inject(function ($rootScope, $compile) {
            el = angular.element('<input type="email" ng-model="model" email-valid></input>');
            scope = $rootScope.$new();
            scope.model = "";
            $compile(el)(scope);
            scope.$digest();
        }));

        it('should begin as valid', function () {
            // If used on a field that is not required, you don't want it to fail validation
            scope.model = "";
            scope.$digest();
            expect(el.hasClass("ng-valid")).toBeTruthy();
            expect(el.hasClass("ng-invalid")).toBeFalsy();
        });

        it('should begin as valid', function () {
            // If used on a field that is not required, you don't want it to fail validation
            scope.model = "";
            scope.$digest();
            expect(el.hasClass("ng-valid")).toBeTruthy();
            expect(el.hasClass("ng-invalid")).toBeFalsy();
        });

        it('should pass validation if given a valid email address', function () {
            // If used on a field that is not required, you don't want it to fail validation
            scope.model = "email@test.com";
            scope.$digest();
            expect(el.hasClass("ng-valid")).toBeTruthy();
            expect(el.hasClass("ng-invalid")).toBeFalsy();
        });

        it('should fail validation if given an invalid email address', function () {
            // If used on a field that is not required, you don't want it to fail validation
            scope.model = "!#$%^&*()";
            scope.$digest();
            expect(el.hasClass("ng-valid")).toBeFalsy();
            expect(el.hasClass("ng-invalid")).toBeTruthy();

            scope.model = "email@test";
            scope.$digest();
            expect(el.hasClass("ng-valid")).toBeFalsy();
            expect(el.hasClass("ng-invalid")).toBeTruthy();

            scope.model = "@test.com";
            scope.$digest();
            expect(el.hasClass("ng-valid")).toBeFalsy();
            expect(el.hasClass("ng-invalid")).toBeTruthy();
        });
    });

}());