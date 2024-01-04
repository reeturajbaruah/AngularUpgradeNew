(function () {
    'use strict';

    // describe('isInvoicedService', function () {

    //     //module() is registered on window and is a shortcut to angular.mock.module()
    //     //use it to mock the main app module
    //     //Note: DO NOT include the real app.js file on the testRunner HTML file. This will 
    //     // cause a cascade of dependencies that you will have a hard time catching-up to. testApp.js 
    //     // contains a simple module definition that isolates out the complexities. Unit test piece-by-piece
    //     beforeEach(angular.mock.module('HCTRAModule'));

    //     var service,
    //         inStorage = {};

    //     beforeEach(angular.mock.module(function () {
    //         inStorage = {};
    //     }));

    //     //$provide is a module-level object, and thus must get its own 
    //     //injection through the module() function
    //     beforeEach(angular.mock.module(function ($provide) {
    //         $provide.value('webStorage', hctraMocks.webStorage(inStorage));
    //     }));

    //     beforeEach(angular.mock.inject(function ($injector) {
    //         service = $injector.get('isInvoicedService');
    //     }));

    //     it('should return false if the invoice is empty', function () {
    //         inStorage.inv = '';
    //         expect(inStorage.inv).toBeDefined();
    //         expect(service.isAccountInvoiced()).toBeFalsy();
    //     });

    //     it('should return false if the invoice is undefined', function () {
    //         expect(inStorage.inv).toBeUndefined();
    //         expect(service.isAccountInvoiced()).toBeFalsy();
    //     });

    //     it('should return false if the invoice is "noninvoiced"', function () {
    //         inStorage.inv = 'noninvoiced';
    //         expect(inStorage.inv).toBeDefined();
    //         expect(service.isAccountInvoiced()).toBeFalsy();
    //     });

    //     it('should return true if the invoice is "invoiced"', function () {
    //         inStorage.inv = 'invoiced';
    //         expect(inStorage.inv).toBeDefined();
    //         expect(service.isAccountInvoiced()).toBeTruthy();
    //     });

    //     it('should set inStorage.inv to invoiced', function () {
    //         service.setAccountInvoiced(true);
    //         expect(inStorage.inv).toBeDefined();
    //         expect(inStorage.inv).toEqual('invoiced');
    //     });

    //     it('should set inStorage.inv to noninvoiced', function () {
    //         service.setAccountInvoiced(false);
    //         expect(inStorage.inv).toBeDefined();
    //         expect(inStorage.inv).toEqual('noninvoiced');
    //     });

    //     it('should remove inStorage.inv', function () {
    //         service.removeAccountInvoiced();
    //         expect(inStorage.inv).toBeUndefined();
    //     });
    // });
}());