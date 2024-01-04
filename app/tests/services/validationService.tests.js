(function () {
    'use strict';

    describe('validationService', function () {

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
            service = $injector.get('validationService');
        }));

        it('should allow for 2 different validators to exists at a time.', function () {
            //arrange
            var form1 = {
                field1: { $valid: true },
                field2: { $valid: 'iShouldnotBeHere'}
            };

            var form2 = {
                field2: {$valid:false},
                field1: { $valid: 'iShouldnotBeHere'}
            };

            //act
            var validator1 = service(form1);
            var validator2 = service(form2);

            var isField1Valid = validator1.isValid('field1');
            var isField2Valid = validator2.isValid('field2');

            //assert
            expect(isField1Valid).toEqual(form1.field1.$valid);
            expect(isField2Valid).toEqual(form2.field2.$valid);
        });
    });
}());