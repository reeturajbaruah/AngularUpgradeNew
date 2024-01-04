(function () {
    'use strict';

    describe('conditionalStylesService', function () {

        //module() is registered on window and is a shortcut to angular.mock.module()
        //use it to mock the main app module
        //Note: DO NOT include the real app.js file on the testRunner HTML file. This will 
        // cause a cascade of dependencies that you will have a hard time catching-up to. testApp.js 
        // contains a simple module definition that isolates out the complexities. Unit test piece-by-piece
        beforeEach(angular.mock.module('HCTRAModule'));

        var service;


        //$provide is a module-level object, and thus must get its own 
        //injection through the module() function
        //beforeEach(angular.mock.module(function ($provide) {
        //}));

        beforeEach(angular.mock.inject(function ($injector) {
            service = $injector.get('conditionalStylesService');
        }));

        it('should return empty if isHidden is true', function () {
            expect(service.formWidth(true)).toEqual('');
        });

        it('should return form-entry-width if isHidden is false', function () {
            expect(service.formWidth(false)).toEqual('form-entry-width');
        });
    });
}());