(function () {
    'use strict';

    describe('HCTRA.Math', function () {

        //module() is registered on window and is a shortcut to angular.mock.module()
        //use it to mock the main app module
        //Note: DO NOT include the real app.js file on the testRunner HTML file. This will 
        // cause a cascade of dependencies that you will have a hard time catching-up to. testApp.js 
        // contains a simple module definition that isolates out the complexities. Unit test piece-by-piece
        beforeEach(angular.mock.module('HCTRAModule'));


        it('should return undefined if either operand is non-integer', function () {

            expect(HCTRA.HctraMath.mod(1, <any>"5")).not.toBeDefined();
            expect(HCTRA.HctraMath.mod(<any>"2", 6)).not.toBeDefined();
            expect(HCTRA.HctraMath.mod(<any>"3", <any>"5")).not.toBeDefined();
            expect(HCTRA.HctraMath.mod(1, NaN)).not.toBeDefined();
            expect(HCTRA.HctraMath.mod(NaN, 5)).not.toBeDefined();
            expect(HCTRA.HctraMath.mod(1.1, 5)).not.toBeDefined();
            expect(HCTRA.HctraMath.mod(1, 5.5)).not.toBeDefined();
        });

        it('should return mod properly for non-negative left operand and positive right operand', function () {

            expect(HCTRA.HctraMath.mod(0, 5)).toBe(0);
            expect(HCTRA.HctraMath.mod(1, 5)).toBe(1);
            expect(HCTRA.HctraMath.mod(6, 5)).toBe(1);
            expect(HCTRA.HctraMath.mod(11, 5)).toBe(1);
            expect(HCTRA.HctraMath.mod(2, 5)).toBe(2);
            expect(HCTRA.HctraMath.mod(7, 5)).toBe(2);
            expect(HCTRA.HctraMath.mod(12, 5)).toBe(2);
        });

        it('should return mod properly if left operand is negative', function () {

            expect(HCTRA.HctraMath.mod(-1, 5)).toBe(4);
            expect(HCTRA.HctraMath.mod(-6, 5)).toBe(4);
            expect(HCTRA.HctraMath.mod(-11, 5)).toBe(4);
            expect(HCTRA.HctraMath.mod(-2, 5)).toBe(3);
            expect(HCTRA.HctraMath.mod(-7, 5)).toBe(3);
            expect(HCTRA.HctraMath.mod(-12, 5)).toBe(3);
        });

        it('should return mod properly if right operand is negative', function () {

            // TODO: Unsure if this is the correct behavior
            expect(HCTRA.HctraMath.mod(1, -5)).toBe(-4);
            expect(HCTRA.HctraMath.mod(6, -5)).toBe(-4);
            expect(HCTRA.HctraMath.mod(11, -5)).toBe(-4);
            expect(HCTRA.HctraMath.mod(2, -5)).toBe(-3);
            expect(HCTRA.HctraMath.mod(7, -5)).toBe(-3);
            expect(HCTRA.HctraMath.mod(12, -5)).toBe(-3);
        });

        it('should return mod properly if both are negative', function () {

            // TODO: Unsure if this is the correct behavior
            expect(HCTRA.HctraMath.mod(-1, -5)).toBe(-1);
            expect(HCTRA.HctraMath.mod(-6, -5)).toBe(-1);
            expect(HCTRA.HctraMath.mod(-11, -5)).toBe(-1);
            expect(HCTRA.HctraMath.mod(-2, -5)).toBe(-2);
            expect(HCTRA.HctraMath.mod(-7, -5)).toBe(-2);
            expect(HCTRA.HctraMath.mod(-12, -5)).toBe(-2);
        });
    });
} ());