(function () {
    'use strict';

    describe('accountSummaryAlertFilterService', function () {

        //module() is registered on window and is a shortcut to angular.mock.module()
        //use it to mock the main app module
        //Note: DO NOT include the real app.js file on the testRunner HTML file. This will 
        // cause a cascade of dependencies that you will have a hard time catching-up to. testApp.js 
        // contains a simple module definition that isolates out the complexities. Unit test piece-by-piece
        beforeEach(angular.mock.module('HCTRAModule'));

        var service;

        //$provide is a module-level object, and thus must get its own 
        //injection through the module() function
        beforeEach(angular.mock.module(function ($provide) {
            $provide.value('creditCardTypes', hctraMocks.creditCardTypes);
        }));

        beforeEach(angular.mock.inject(function ($injector) {
            service = $injector.get('creditCardConversionService');
        }));

        it('should convert "V" to "VISA"', function () {
            expect(service.convertCodeToString('V')).toEqual('VISA');
        });
        it('should convert "M" to "MASTERCARD"', function () {
            expect(service.convertCodeToString('M')).toEqual('MASTERCARD');
        });
        it('should convert "D" to "DISCOVER"', function () {
            expect(service.convertCodeToString('D')).toEqual('DISCOVER');
        });
        it('should convert "A" to "AMERICAN EXPRESS"', function () {
            expect(service.convertCodeToString('A')).toEqual('AMERICAN EXPRESS');
        });
    });
}());