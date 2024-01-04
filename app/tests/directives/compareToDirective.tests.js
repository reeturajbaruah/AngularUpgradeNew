(function () {
    'use strict';

    describe('directive: compare-to', function () {

        beforeEach(angular.mock.module('HCTRAModule'));

        var scope,
			el;


        //beforeEach(angular.mock.module(function ($provide) {
        //    $provide.value('genericRepo', hctraMocks.genericRepo());
        //}));

        beforeEach(angular.mock.inject(function ($rootScope, $compile) {
            el = angular.element('<input type="text" ng-model="model" compare-to="otherModelValue"></input>');
            scope = $rootScope.$new();
            scope.model = "";
            scope.otherModelValue = "";
            $compile(el)(scope);
            scope.$digest();
        }));


        it('should begin as valid', function () {
            // If used on a field that is not required, you don't want it to fail luhn
            scope.model = "";
            scope.otherModelValue = "";
            scope.$digest();
            expect(el.hasClass("ng-valid")).toBeTruthy();
            expect(el.hasClass("ng-invalid")).toBeFalsy();
        });

        it('should be valid if models match', function () {
            // If used on a field that is not required, you don't want it to fail luhn
            scope.model = "testvalue";
            scope.otherModelValue = "testvalue";
            scope.$digest();
            expect(el.hasClass("ng-valid")).toBeTruthy();
            expect(el.hasClass("ng-invalid")).toBeFalsy();
        });

        it('should be invalid if models do not match', function () {
            // If used on a field that is not required, you don't want it to fail luhn
            scope.model = "test";
            scope.otherModelValue = "value";
            scope.$digest();
            expect(el.hasClass("ng-valid")).toBeFalsy();
            expect(el.hasClass("ng-invalid")).toBeTruthy();
        });
    });

}());