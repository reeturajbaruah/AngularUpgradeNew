(function () {
    'use strict';

    //describe() begins a unit testing fixture
    describe('spaceReplaceFilter', function () {

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

        it('should result in no change in a string without spaces', function () {

            var filteredString = filter('spaceReplace')("no-change");
            expect(filteredString).toBeDefined();
            expect(filteredString).toBe("no-change");

            filteredString = filter('spaceReplace')("no-change", "!");
            expect(filteredString).toBeDefined();
            expect(filteredString).toBe("no-change");

        });

        it('should remove spaces if no second argument', function () {

            var filteredString = filter('spaceReplace')("space removed");
            expect(filteredString).toBeDefined();
            expect(filteredString).toBe("spaceremoved");
            expect(filteredString).not.toBe("space removed");

        });

        it('should replace spaces with second argument', function () {

            var filteredString = filter('spaceReplace')("space replaced", "!");
            expect(filteredString).toBeDefined();
            expect(filteredString).toBe("space!replaced");
            expect(filteredString).not.toBe("space replaced");

        });

    });

}());