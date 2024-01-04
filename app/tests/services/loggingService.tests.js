(function () {
    'use strict';

    //describe() begins a unit testing fixture
    describe('loggingService', function () {

        //module() is registered on window and is a shortcut to angular.mock.module()
        //use it to mock the main app module
        //Note: DO NOT include the real app.js file on the testRunner HTML file. This will 
        // cause a cascade of dependencies that you will have a hard time catching-up to. testApp.js 
        // contains a simple module definition that isolates out the complexities. Unit test piece-by-piece
        beforeEach(angular.mock.module('HCTRAModule'));

        var service,

            inState = {
                value: ""
            };

        //$provide is a module-level object, and thus must get its own 
        //injection through the module() function
        beforeEach(angular.mock.module(function ($provide) {
            $provide.value('stateStackMemoryService', hctraMocks.stateStackMemoryService());
            $provide.value('$window', hctraMocks.$window(inState));
        }));

        beforeEach(angular.mock.inject(function ($injector) {

            var ssms = $injector.get("stateStackMemoryService");
            var w = $injector.get("$window");
            var s = $injector.get("sniffrjs");
            var sc = $injector.get("serverConstants");
            
            service = new HCTRA.Service.LoggingService(ssms, w, s, sc);// $injector.get('loggingService');
        }));

        it('errorMessage.length > 500 should be trimmed', function () {
            var testObject = {
                errorMessage: // string with 502 characters
                    "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
            };

            service.checkStringLengthsAndEraseIfNeeded(testObject);

            expect(testObject.errorMessage.length).toBe(500);
        });

        it('stateStack.length > 500 should be trimmed', function () {
            var testObject = {
                stateStack: // string with 502 characters
                    "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
            };

            service.checkStringLengthsAndEraseIfNeeded(testObject);

            expect(testObject.stateStack.length).toBe(500);
        });

        it('cause.length > 500 should be trimmed', function () {
            var testObject = {
                cause: // string with 502 characters
                    "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
            };

            service.checkStringLengthsAndEraseIfNeeded(testObject);

            expect(testObject.cause.length).toBe(500);
        });

       
    });

}());