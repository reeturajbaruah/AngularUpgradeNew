(function () {
    'use strict';

    describe('stringCheckService', function () {

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
            service = $injector.get('stringCheckService');
        }));

        it('should return true if the number is a float', function () {
            expect(service.isFloat('3.14')).toBeTruthy();
        });

        it('should return false if the number is not a float', function () {
            expect(service.isFloat('test')).toBeFalsy();
        });
    });
}());