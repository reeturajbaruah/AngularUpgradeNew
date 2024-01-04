(function () {
    'use strict';

    //describe() begins a unit testing fixture
    describe('capitalizeFilter', function () {

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

        it('should transform "simple" into "Simple"', function () {

            var filteredWord = filter('capitalize')("simple");
            expect(filteredWord).toBe("Simple");
            expect(filteredWord).not.toBe("simple");
            expect(filteredWord).not.toBe("SIMPLE");
        });

        it('should transform "not as simple" into "Not As Simple"', function () {

        	var filteredWord = filter('capitalize')("not as simple");
            expect(filteredWord).toBe("Not As Simple");
            expect(filteredWord).not.toBe("not as simple");
            expect(filteredWord).not.toBe("NOT AS SIMPLE");
        });

        it('should return empty string if input is null or undefined', function () {

        	var filteredWord = filter('capitalize')(undefined);
            expect(filteredWord).toBe("");
            filteredWord = filter('capitalize')(null);
            expect(filteredWord).toBe("");
        });

    });

}());