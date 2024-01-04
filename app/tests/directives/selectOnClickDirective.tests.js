(function () {
    'use strict';

    describe('directive: select-on-click', function () {

        beforeEach(angular.mock.module('HCTRAModule'));

        var scope,
			el;


        beforeEach(angular.mock.inject(function ($rootScope, $compile) {
            el = angular.element('<input type="text" select-on-click></input>');
            scope = $rootScope.$new();

            $compile(el)(scope);
            scope.$digest();
        }));

        beforeEach(function () {
            spyOn(el[0], 'setSelectionRange');
        });

        it('input should be selected when clicked', function () {
            el.val("$0.00");
            el.click();

            expect(el.val()).toBe("$0.00");

            //expect(el.constructor.name).toBe("jQuery");
            //expect(el[0].constructor.name).toBe("HTMLInputElement");
            expect(el[0].setSelectionRange).toHaveBeenCalledWith(0, el.val().length);
        });
        
    });

}());