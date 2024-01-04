(function () {
    'use strict';

    describe('toggleFullWebsiteService', function () {

        //module() is registered on window and is a shortcut to angular.mock.module()
        //use it to mock the main app module
        //Note: DO NOT include the real app.js file on the testRunner HTML file. This will 
        // cause a cascade of dependencies that you will have a hard time catching-up to. testApp.js 
        // contains a simple module definition that isolates out the complexities. Unit test piece-by-piece
        beforeEach(angular.mock.module('HCTRAModule'));

        var service,
            setUrl = {},
            inDoc = {},
            inStorage = {};

        beforeEach(angular.mock.module(function () {
        }));

        //$provide is a module-level object, and thus must get its own 
        //injection through the module() function
        beforeEach(angular.mock.module(function ($provide) {
            $provide.value('$window', hctraMocks.$window(setUrl));
            $provide.value('$document', hctraMocks.$document(inDoc));
            $provide.value('webStorage', hctraMocks.webStorage(inStorage));
        }));

        beforeEach(angular.mock.inject(function ($injector) {
            service = $injector.get('toggleFullWebsiteService');
        }));

        it('should set FOOTER_FORCE_DESKTOP_VIEW to true', function () {
            service.onMobileClick();
            expect(inStorage['FOOTER_FORCE_DESKTOP_VIEW']).toBeDefined();
            expect(inStorage['FOOTER_FORCE_DESKTOP_VIEW']).toBeTruthy();
        });

        it('should set FOOTER_FORCE_DESKTOP_VIEW to false', function () {
            service.onDesktopClick();
            expect(inStorage['FOOTER_FORCE_DESKTOP_VIEW']).toBeDefined();
            expect(inStorage['FOOTER_FORCE_DESKTOP_VIEW']).toBeFalsy();
        });
    });
}());