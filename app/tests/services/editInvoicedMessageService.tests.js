(function () {
    'use strict';

    // describe('editInvoicedMessageService', function () {

    //     //module() is registered on window and is a shortcut to angular.mock.module()
    //     //use it to mock the main app module
    //     //Note: DO NOT include the real app.js file on the testRunner HTML file. This will 
    //     // cause a cascade of dependencies that you will have a hard time catching-up to. testApp.js 
    //     // contains a simple module definition that isolates out the complexities. Unit test piece-by-piece
    //     beforeEach(angular.mock.module('HCTRAModule'));

    //     var service,
    //         inModal = {},
    //         modalOptions = {};

    //     beforeEach(angular.mock.module(function () {
    //         inModal = {};
    //         modalOptions = {};
    //     }));

    //     //$provide is a module-level object, and thus must get its own 
    //     //injection through the module() function
    //     beforeEach(angular.mock.module(function ($provide) {
    //         $provide.value('modalService', hctraMocks.modalService(inModal, modalOptions));
    //     }));

    //     beforeEach(angular.mock.inject(function ($injector) {
    //         service = $injector.get('editInvoicedMessageService');
    //     }));

    //     it('should store inModal value', function () {
    //         service('555-555-5555').invoicedMessage();
    //         expect(inModal.value).toBeDefined();
    //         expect(inModal.value).toEqual('called');
    //     });

    //     it('should store modalOptions optionA', function () {
    //         service('555-555-5555').invoicedMessage();
    //         expect(modalOptions.A).toBeDefined();
    //         expect(modalOptions.A.backdrop).toEqual(true);
    //         expect(modalOptions.A.keyboard).toEqual(true);
    //         expect(modalOptions.A.modalFade).toEqual(true);
    //         expect(modalOptions.A.templateUrl).toEqual('/app/templates/common/modalAlert.html');
    //     });
    //     it('should store modalOptions optionB', function () {
    //         service('555-555-5555').invoicedMessage();
    //         expect(modalOptions.B).toBeDefined();
    //         expect(modalOptions.B.closeButtonText).toEqual('Close');
    //         expect(modalOptions.B.headerText).toEqual('Invoiced Account');
    //         expect(modalOptions.B.bodyText).toEqual('Billing related information cannot be modified because the account is invoiced, please call ' + '555-555-5555' + ' for further assistance.');
    //     });
    // });
}());