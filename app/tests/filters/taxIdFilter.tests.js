(function () {
    'use strict';

    //describe() begins a unit testing fixture
    describe('taxIdFilter', function () {

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

        it('should mask all but last 3 digits of tax id', function () {

            var filteredString = filter('taxId')("123456789");
            expect(filteredString).toBeDefined();
            expect(filteredString).toBe("******789");

        });

    });

}());