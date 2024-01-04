(function () {
    'use strict';

    describe('directive: capitalize-all', function () {

        beforeEach(angular.mock.module('HCTRAModule'));

        var scope,
			compile,
			el;


        beforeEach(angular.mock.inject(function ($rootScope, $compile) {
            compile = $compile;

            el = angular.element('<input type="text" ng-model="model" capitalize-all></input>');
            scope = $rootScope.$new();
            scope.model = "";
            $compile(el)(scope);
            scope.$digest();
        }));


        it('should capitalize lowercase input', function () {
            scope.model = 'abcdef';
            compile(el)(scope);
            scope.$digest();
            expect(el.val()).toBe('ABCDEF');
        });

        it('should maintain uppercase input', function () {
            scope.model = 'ABCDEF';
            compile(el)(scope);
            scope.$digest();
            expect(scope.model).toBe('ABCDEF');
        });
    });

}());