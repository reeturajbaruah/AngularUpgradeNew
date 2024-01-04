(function () {
    'use strict';

    describe('inputCcDetectionService', function () {

        //module() is registered on window and is a shortcut to angular.mock.module()
        //use it to mock the main app module
        //Note: DO NOT include the real app.js file on the testRunner HTML file. This will 
        // cause a cascade of dependencies that you will have a hard time catching-up to. testApp.js 
        // contains a simple module definition that isolates out the complexities. Unit test piece-by-piece
        beforeEach(angular.mock.module('HCTRAModule'));

        var name,
            zip,
            service;

        //$provide is a module-level object, and thus must get its own 
        //injection through the module() function
        //beforeEach(angular.mock.module(function ($provide) {
        //}));

        beforeEach(angular.mock.inject(function ($injector) {
            service = $injector.get('inputCcDetectionService');
            name = null;
            zip = null;
        }));

        describe('nameIsCc', function () {
            it('should be true if name equals 6 consecutive digits', function () {
                name = 123456;
                var cc = service.nameIsCc(name);
                expect(cc).toBeDefined();
                expect(cc).toBeTruthy();
            });

            it('should be true if name is more then 6 consecutive digits', function () {
                name = 1234567;
                var cc = service.nameIsCc(name);
                expect(cc).toBeDefined();
                expect(cc).toBeTruthy();
            });

            it('should be false if name is less then 6 consecutive digits', function () {
                name = 12345;
                var cc = service.nameIsCc(name);
                expect(cc).toBeDefined();
                expect(cc).toBeFalsy();
            });

        });

        describe('zipIsCc', function () {
            it('should be true if name equals 10 consecutive digits', function () {
                zip = 1234567890;
                var cc = service.zipIsCc(zip);
                expect(cc).toBeDefined();
                expect(cc).toBeTruthy();
            });

            it('should be true if name is more then 10 consecutive digits', function () {
                zip = 12345678901;
                var cc = service.zipIsCc(zip);
                expect(cc).toBeDefined();
                expect(cc).toBeTruthy();
            });

            it('should be false if name is less then 10 consecutive digits', function () {
                zip = 123456789;
                var cc = service.zipIsCc(zip);
                expect(cc).toBeDefined();
                expect(cc).toBeFalsy();
            });
        });
    });
}());