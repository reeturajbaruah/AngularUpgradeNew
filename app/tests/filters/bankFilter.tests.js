(function () {
    'use strict';

    //describe() begins a unit testing fixture
    describe('bankFilter', function () {

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

        it('should mask all but two digits of bank accounts <= 6 digits long', function () {

            var filteredBank = filter('bankAccount')("123456");
            expect(filteredBank).toBeDefined();
            expect(filteredBank).toBe("****56");
            expect(filteredBank).not.toBe("***56");
            expect(filteredBank).not.toBe("*****56");
            expect(filteredBank).not.toBe("123456");
        });

        it('should mask all but four digits of bank accounts > 6 digits long', function () {

            var filteredBank = filter('bankAccount')("1234567");
            expect(filteredBank).toBeDefined();
            expect(filteredBank).toBe("***4567");
            expect(filteredBank).not.toBe("**4567");
            expect(filteredBank).not.toBe("****4567");
            expect(filteredBank).not.toBe("1234567");
        });

        it('should accept masked bank accounts', function () {

            var filteredBank = filter('bankAccount')("******1234567");
            expect(filteredBank).toBeDefined();
            expect(filteredBank).toBe("*********4567");
        });

    });

}());