(function () {
    'use strict';

    describe('removeDoubleCharService', function () {

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
        //    $provide.value('DEPENDENCY', hctraMocks.DEPENDENCY);
        //}));

        beforeEach(angular.mock.inject(function ($injector) {
            service = $injector.get('removeDoubleCharService');
        }));

        it('should remove a double "@"', function () {
            expect(service.removeDoubleChar('test@@test@@')).toEqual('test@test@');
        });

        it('should remove any length of whitespace with a single whitespace', function () {
            expect(service.removeDoubleChar('test      test     ')).toEqual('test test ');
        });

        it('should remove any length of periods with a single period', function () {
            expect(service.removeDoubleChar('test.....test.....')).toEqual('test.test.');
        });

        it('should remove any length of dashes with a single dash', function () {
            expect(service.removeDoubleChar('test------test-----')).toEqual('test-test-');
        });

        it('should remove any length of underscores with a single underscore', function () {
            expect(service.removeDoubleChar('test_____test______')).toEqual('test_test_');
        });

        it('should remove any length of whitespace with a single whitespace', function () {
            expect(service.removeDoubleChar('test      test     ')).toEqual('test test ');
        });

        it('should remove any of the following characters: <, >, single and double quote', function () {
            expect(service.removeDoubleChar('t<es>t"test<')).toEqual('testtest');
        });
    });
}());