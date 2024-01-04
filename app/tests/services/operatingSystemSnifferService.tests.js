/*
(function () {
    'use strict';

    describe('operatingSystemSnifferService', function () {

        //module() is registered on window and is a shortcut to angular.mock.module()
        //use it to mock the main app module
        //Note: DO NOT include the real app.js file on the testRunner HTML file. This will 
        // cause a cascade of dependencies that you will have a hard time catching-up to. testApp.js 
        // contains a simple module definition that isolates out the complexities. Unit test piece-by-piece
        beforeEach(angular.mock.module('HCTRAModule'));

        var service,
            inStorage = {};

        beforeEach(angular.mock.module(function () {
        }));

        //$provide is a module-level object, and thus must get its own 
        //injection through the module() function
        beforeEach(angular.mock.module(function ($provide) {
            $provide.value('webStorage', hctraMocks.webStorage(inStorage));
        }));

        beforeEach(angular.mock.inject(function ($injector) {
            service = $injector.get('operatingSystemSnifferService');
        }));

        it('should recognized that this is a desktop', function () {
            expect(service.getOS()).toBeDefined();
            expect(service.getOS()).toEqual('desktop');
        });

        it('should return true if using desktop', function () {
            service.getOS();
            expect(service.isDesktopOs()).toBeTruthy();
        });
    });
}());
*/