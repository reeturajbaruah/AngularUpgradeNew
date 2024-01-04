(function () {
    'use strict';

    //describe() begins a unit testing fixture
    describe('charReplaceFilter', function () {

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

        it('should replace first occurrence of second argument with third argument', function () {

            var filteredWord = filter('charReplace')("racecar","r","h");
            expect(filteredWord).toBe("hacecar");
            expect(filteredWord).not.toBe("hacecah");
            expect(filteredWord).not.toBe("racecar");

            filteredWord = filter('charReplace')("\"test\"", '"', "!");
            expect(filteredWord).toBe("!test\"");
            expect(filteredWord).not.toBe("!test!");
            expect(filteredWord).not.toBe("\"test\"");
        });

    });

}());