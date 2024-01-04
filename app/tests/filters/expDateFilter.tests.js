(function () {
    'use strict';

    //describe() begins a unit testing fixture
    describe('expDateFilter', function () {

        //module() is registered on window and is a shortcut to angular.mock.module()
        //use it to mock the main app module
        //Note: DO NOT include the real app.js file on the testRunner HTML file. This will 
        // cause a cascade of dependencies that you will have a hard time catching-up to. testApp.js 
        // contains a simple module definition that isolates out the complexities. Unit test piece-by-piece
        beforeEach(angular.mock.module('HCTRAModule'));

        var filter;

        beforeEach(angular.mock.inject(function ($injector) {
            filter = $injector.get('$filter');
        }));

        it('should conditionally add "0" to beginning of card expiration date', function () {

            var filteredDate = filter('expDate')("9/2016");
            expect(filteredDate).toBeDefined();
            expect(filteredDate).toBe("09/2016");
            expect(filteredDate).not.toBe("9/2016");
            expect(filteredDate).not.toBe("009/2016");

            filteredDate = filter('expDate')("10/2016");
            expect(filteredDate).toBeDefined();
            expect(filteredDate).toBe("10/2016"); // unchanged
            expect(filteredDate).not.toBe("010/2016");
        });

    });

}());