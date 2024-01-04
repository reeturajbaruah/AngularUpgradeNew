/* eslint-disable no-useless-escape */
(function () {
    'use strict';

    describe('objectUtilService', function () {

        //module() is registered on window and is a shortcut to angular.mock.module()
        //use it to mock the main app module
        //Note: DO NOT include the real app.js file on the testRunner HTML file. This will 
        // cause a cascade of dependencies that you will have a hard time catching-up to. testApp.js 
        // contains a simple module definition that isolates out the complexities. Unit test piece-by-piece
        beforeEach(angular.mock.module('HCTRAModule'));

        var service,
            inStorage = {};

        //$provide is a module-level object, and thus must get its own 
        //injection through the module() function
        //beforeEach(angular.mock.module(function ($provide) {
        //}));

        beforeEach(angular.mock.inject(function ($injector) {
            service = $injector.get('objectUtilService');

            // Clears all properties from inStorage before each test
            for (var prop in inStorage) {
                // eslint-disable-next-line no-prototype-builtins
                if (inStorage.hasOwnProperty(prop)) {
                    delete inStorage[prop];
                }
            }
        }));

        describe('areEqual', function () {

            describe('null and empty inputs', function () {

                it('should be true if both are empty objects', function () {

                    expect(service.areEqual({}, {})).toBeTruthy();
                });

                it('should be true if both inputs are null or undefined', function () {

                    expect(service.areEqual(null, null)).toBeTruthy();
                    expect(service.areEqual(null, undefined)).toBeTruthy();
                    expect(service.areEqual(undefined, null)).toBeTruthy();
                    expect(service.areEqual(undefined, undefined)).toBeTruthy();

                });

                it('should be false if one input is null or undefined', function () {

                    expect(service.areEqual({}, null)).toBeFalsy();
                    expect(service.areEqual(null, {})).toBeFalsy();

                });
            });

            describe('shallow objects', function () {

                it('should be true if objects are identical', function () {

                    expect(service.areEqual({ x: 1, y: 2 }, { x: 1, y: 2 })).toBeTruthy();
                    expect(service.areEqual({ x: "test", y: 1.23 }, { x: "test", y: 1.23 })).toBeTruthy();

                });

                it('should be \'order\' independent', function () {

                    expect(service.areEqual({ y: 1, x: 2 }, { x: 2, y: 1 })).toBeTruthy();
                    expect(service.areEqual({ x: 1, y: 2 }, { y: 2, x: 1 })).toBeTruthy();

                });

                it('should be false if one input has more properties', function () {

                    expect(service.areEqual({ x: 1 }, { x: 1, y: 2 })).toBeFalsy();
                    expect(service.areEqual({ x: 1, y: 2 }, { x: 1 })).toBeFalsy();

                });

                it('should be false if objects have same properties with different values', function () {

                    expect(service.areEqual({ x: 1, y: 2 }, { x: 3, y: 4 })).toBeFalsy();
                    expect(service.areEqual({ x: 1, y: 2 }, { x: "1", y: "2" })).toBeFalsy();
                    expect(service.areEqual({ x: true, y: 2 }, { x: false, y: 2 })).toBeFalsy();

                });

                it('should be false if objects have different property names', function () {

                    expect(service.areEqual({ x: 1, y: 2 }, { z: 1, w: 2 })).toBeFalsy();

                });
            });

            describe('deep objects', function () {

                it('should be true if objects are identical', function () {

                    expect(service.areEqual({ x: 1, y: 2, z: { prop1: "hello" } }, { x: 1, y: 2, z: { prop1: "hello" } })).toBeTruthy();
                    expect(service.areEqual({ x: "test", y: 1.23, q: ["this", 2, "test"] }, { x: "test", y: 1.23, q: ["this", 2, "test"] })).toBeTruthy();
                    expect(service.areEqual({ x: 1, y: 2, z: { prop1: { prop11: "ohyeah" } } }, { x: 1, y: 2, z: { prop1: { prop11: "ohyeah" } } })).toBeTruthy();
                    expect(service.areEqual({ x: 1, y: 2, z: {} }, { x: 1, y: 2, z: {} })).toBeTruthy();

                });

                it('should be false if nested objects are different', function () {

                    expect(service.areEqual({ x: 1, y: 2, z: { prop1: "hello" } }, { x: 1, y: 2, z: { prop1: "goodbye" } })).toBeFalsy();
                    expect(service.areEqual({ x: "test", y: 1.23, q: ["this", 2, "test"] }, { x: "test", y: 1.23, q: ["nope", 5, "rawr"] })).toBeFalsy();

                });
            });
        });

        describe('objectUtilService key changing', function () {

            it('should make all keys lowercase', function () {
                var obj = {
                    key1: 'value1',
                    KEY2: 'value2',
                    keY3: 'value3'
                };
                var objProcessed = service.toLowerCaseKeys(obj);

                expect(objProcessed.key1).toBeDefined();
                expect(objProcessed.KEY2).toBeUndefined();
                expect(objProcessed.keY1).toBeUndefined();

                expect(objProcessed.key1).toBe('value1');
                expect(objProcessed.key2).toBe('value2');
                expect(objProcessed.key3).toBe('value3');
            });

            it('should not affect the original object for lowercase', function () {
                var obj = {
                    key1: 'value1',
                    KEY2: 'value2',
                    keY3: 'value3'
                };
                service.toLowerCaseKeys(obj);

                expect(obj.key1).toBeDefined();
                expect(obj.key2).toBeUndefined();
                expect(obj.key3).toBeUndefined();

                expect(obj.key1).toBe('value1');
                expect(obj.KEY2).toBe('value2');
                expect(obj.keY3).toBe('value3');
            });

            it('should make all keys capitalized', function () {
                var obj = {
                    key1: 'value1',
                    KEY2: 'value2',
                    keY3: 'value3'
                };
                var objProcessed = service.toCapitalizedCaseKeys(obj);

                expect(objProcessed.key1).toBeUndefined();
                expect(objProcessed.KEY2).toBeDefined();
                expect(objProcessed.keY1).toBeUndefined();

                expect(objProcessed.Key1).toBe('value1');
                expect(objProcessed.KEY2).toBe('value2');
                expect(objProcessed.KeY3).toBe('value3');
            });

            it('should make all keys capitalized based on property array', function () {
                var obj = {
                    key1: 'value1',
                    KEY2: 'value2',
                    keY3: 'value3'
                };
                var objProcessed = service.toCapitalizedCaseKeys(obj, ['key1']);

                expect(objProcessed.key1).toBeUndefined();
                expect(objProcessed.KEY2).toBeDefined();
                expect(objProcessed.keY3).toBeDefined();

                expect(objProcessed.Key1).toBe('value1');
                expect(objProcessed.KEY2).toBe('value2');
                expect(objProcessed.keY3).toBe('value3');
            });

            it('should handle edge case key types', function () {
                var obj = {
                    '123': 'value1',
                    '\'\\\/|': 'value2'
                };
                var objProcessed = service.toCapitalizedCaseKeys(obj);

                expect(objProcessed['123']).toBe('value1');
                expect(objProcessed['\'\\\/|']).toBe('value2');
            });

            it('should not affect the original object for lowercase', function () {
                var obj = {
                    key1: 'value1',
                    KEY2: 'value2',
                    keY3: 'value3'
                };
                service.toLowerCaseKeys(obj);
                service.toLowerCaseKeys(obj, ['key1', 'KEY2', 'keY3']);

                expect(obj.Key1).toBeUndefined();
                expect(obj.KeY3).toBeUndefined();

                expect(obj.key1).toBe('value1');
                expect(obj.KEY2).toBe('value2');
                expect(obj.keY3).toBe('value3');
            });
        });
    });

}());