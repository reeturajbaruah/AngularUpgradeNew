(function () {
    'use strict';

    describe('monthListService', function () {

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
            service = $injector.get('monthListService');
        }));

        it('should contain an object within months', function () {
            expect(service.months).toBeDefined();
            expect(service.months).toContain({ value: 5, label: 'May' });
        });

        it('should return a correct month number from monthList', function () {
            expect(service.getMonthNumber('November')).toBeDefined();
            expect(service.getMonthNumber('November')).toEqual(11);
        });

        it('should be undefined if incorrect month is entered', function () {
            expect(service.getMonthNumber('Test')).toBeUndefined();
        });
    });
}());