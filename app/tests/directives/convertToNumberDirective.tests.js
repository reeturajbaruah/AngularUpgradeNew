(function () {
    'use strict';

    describe('directive: convert-to-number', function () {

        beforeEach(angular.mock.module('HCTRAModule'));

        var scope,
			compile,
			el;


        beforeEach(angular.mock.inject(function ($rootScope, $compile) {

            compile = $compile;

            el = angular.element('<input ng-model="data.pageSize" convert-to-number></input>');

            scope = $rootScope.$new();

            scope.data = {};
        }));


        it('model = null should make input empty string', function () {
            scope.data.pageSize = null;
            compile(el)(scope);
            scope.$digest();
            expect(el.val()).toEqual("");
        });

        it('model = undefined should make input empty string', function () {
            scope.data.pageSize = undefined;
            compile(el)(scope);
            scope.$digest();
            expect(el.val()).toEqual("");
        });

        it('model = 0 should make input empty string', function () {
            scope.data.pageSize = 0;
            compile(el)(scope);
            scope.$digest();
            expect(el.val()).toEqual("0");
        });

        it('model = not a number should make input empty string', function () {
            scope.data.pageSize = "whatup!";
            compile(el)(scope);
            scope.$digest();
            expect(el.val()).toEqual("");
        });

        it('model = integer > 0 should make input an integer', function () {
            scope.data.pageSize = 100;
            compile(el)(scope);
            scope.$digest();
            expect(el.val()).toEqual("100");
        });

        it('model = integer < 0 should make input an integer', function () {
            scope.data.pageSize = -100;
            compile(el)(scope);
            scope.$digest();
            expect(el.val()).toEqual("-100");
        });

        it('model = "" should make input an integer', function () {
            scope.data.pageSize = "";
            compile(el)(scope);
            scope.$digest();
            expect(el.val()).toEqual("");
        });

        it('input = null should make input empty string', function () {
            scope.data.pageSize = "";
            compile(el)(scope);
            scope.$digest();
            el.val(null);
            el.trigger('input');
            scope.$digest();
            expect(scope.data.pageSize).toEqual("");
        });

        it('input = undefined should make input empty string', function () {
            scope.data.pageSize = "";
            compile(el)(scope);
            scope.$digest();
            el.val(undefined);
            el.trigger('input');
            scope.$digest();
            expect(scope.data.pageSize).toEqual("");
        });

        it('input = "0" should make input empty string', function () {
            compile(el)(scope);
            scope.$digest();
            el.val("0");
            el.trigger('input');
            scope.$digest();
            expect(scope.data.pageSize).toEqual(0);
        });

        it('input = not a number should make input empty string', function () {
            compile(el)(scope);
            scope.$digest();
            el.val("whatup!");
            el.trigger('input');
            scope.$digest();
            expect(scope.data.pageSize).toEqual("");
        });

        it('input = integer > 0 should make input an integer', function () {
            compile(el)(scope);
            scope.$digest();
            el.val("100");
            el.trigger('input');
            scope.$digest();
            expect(scope.data.pageSize).toEqual(100);
        });

        it('input = integer < 0 should make input an integer', function () {
            compile(el)(scope);
            scope.$digest();
            el.val("-100");
            el.trigger('input');
            scope.$digest();
            expect(scope.data.pageSize).toEqual(-100);
        });

        it('input = "" should make input an integer', function () {
            scope.data.pageSize = "";
            compile(el)(scope);
            scope.$digest();
            el.val("");
            el.trigger('input');
            scope.$digest();
            expect(scope.data.pageSize).toEqual("");
        });

    });

}());