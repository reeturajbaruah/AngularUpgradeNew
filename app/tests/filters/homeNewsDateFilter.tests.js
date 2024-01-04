/// <reference path="../../directives/home/homeNewsDirective.js" />
(function () {
    'use strict';

    describe('homeNewsDateFilter', function () {

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
        //    $provide.value('momentDate', hctraMocks.momentDate(dateInput, outFormat, inFormat));
        //}));

        beforeEach(angular.mock.inject(function ($injector) {
            service = $injector.get('homeNewsDateFilter');
        }));

        // dateInput is in local time for testing purposes
        // in production it is using 'Z' for UTC standard
        it('should return the date in the correct format for HH 00', function () {
            expect(service('20160714T000000')).toEqual('July 14, 2016');
        });
        it('should return the date in the correct format for HH 06', function () {
            expect(service('20160714T060000')).toEqual('July 14, 2016');
        });
        it('should return the date in the correct format for HH 12', function () {
            expect(service('20160714T120000')).toEqual('July 14, 2016');
        });
        it('should return the date in the correct format for HH 18', function () {
            expect(service('20160714T180000')).toEqual('July 14, 2016');
        });
        it('should return the date in the correct format for HH 24', function () {
            expect(service('20160714T240000')).toEqual('July 15, 2016');
        });
    });
}());