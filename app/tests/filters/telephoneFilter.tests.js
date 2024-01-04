(function () {
    'use strict';

    //describe() begins a unit testing fixture
    describe('telephoneFilter', function () {

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

        it('should mask 10 digit phone numbers to (###) ###-####', function () {

            var filteredString = filter('telephone')("1234567890");
            expect(filteredString).toBeDefined();
            expect(filteredString).toBe("(123) 456-7890");

        });

        it('should mask 11 digit phone numbers to (###) ###-#### if country is 1', function () {

            var filteredString = filter('telephone')("11234567890");
            expect(filteredString).toBeDefined();
            expect(filteredString).toBe("(123) 456-7890");

        });

        it('should mask 11 digit phone numbers to # (###) ###-#### if country is not 1', function () {

            var filteredString = filter('telephone')("21234567890");
            expect(filteredString).toBeDefined();
            expect(filteredString).toBe("2 (123) 456-7890");

        });

        it('should mask 12 digit phone numbers to ### (##) ###-####', function () {

            var filteredString = filter('telephone')("121234567890");
            expect(filteredString).toBeDefined();
            expect(filteredString).toBe("121 (23) 456-7890");

        });

    });

}());