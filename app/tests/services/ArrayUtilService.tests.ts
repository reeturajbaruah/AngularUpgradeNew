declare var hctraMocks: any;

(function () {
    "use strict";

    describe("ArrayUtilService", function () {

        beforeEach(angular.mock.module("HCTRAModule"));

        var _responseErrorService,
            service: HCTRA.Service.ArrayUtilService,
            equal = (u, v) => u === v;

        beforeEach(angular.mock.inject(function ($injector: angular.auto.IInjectorService) {
            service = $injector.get<HCTRA.Service.ArrayUtilService>("arrayUtilService");
        }));

        describe("intersect", () => {

            it("should return correct intersect of primitive types", function () {

                // Sets are identical
                var result = service.intersect([1, 2, 3, 4, 5], [1, 2, 3, 4, 5], equal);
                expect(result).toEqual([1, 2, 3, 4, 5]);

                // Second set is subset of first set
                result = service.intersect([1, 2, 3, 4, 5], [1, 2, 3, 4], equal);
                expect(result).toEqual([1, 2, 3, 4]);

                // First set is subset of second set
                result = service.intersect([1, 2, 3, 4], [1, 2, 3, 4, 5], equal);
                expect(result).toEqual([1, 2, 3, 4]);

                // Second set is empty
                result = service.intersect([1, 2, 3, 4, 5], [], equal);
                expect(result).toEqual([]);

                // First set is empty
                result = service.intersect([], [1, 2, 3, 4, 5], equal);
                expect(result).toEqual([]);

                // Both sets are empty
                result = service.intersect([], [], equal);
                expect(result).toEqual([]);

            });

            it("should return correct intersect of identical object types", function () {

                // Arrays of same object type
                var result = service.intersect(
                    [
                        new TestObj(1, "test1"),
                        new TestObj(2, "test2")
                    ],
                    [
                        new TestObj(1, "test1"),
                        new TestObj(3, "test3")
                    ],
                    TestObj.areEqual);

                expect(result.length).toBe(1);
                expect(result[0].prop1).toBe(1);
                expect(result[0].prop2).toBe("test1");
            });

            it("should return correct intersect of different object types where 'equality' is defined", function () {

                // Arrays of different object types
                var result = service.intersect<TestObj, TestObj2>(
                    [
                        new TestObj(1, "test1"),
                        new TestObj(2, "test2")
                    ],
                    [
                        new TestObj2("test1", 1),
                        new TestObj2("test3", 3)
                    ],
                    (u, v) => u.prop1 === v.prop2 && u.prop2 === v.prop1); // Function must define "equality"

                expect(result.length).toBe(1);
                expect(result[0].prop1).toBe(1);
                expect(result[0].prop2).toBe("test1");
            });
        });

        // Tests needed for difference - none exists because difference is not being used at the moment
        xdescribe("difference", () => { });

        describe("find", () => {

            it("should return the first primitive to match the predicate function", () => {

                let result1 = service.find([1, 2, 3], u => u === 3);
                expect(result1).toBe(3);

                let result2 = service.find([1, 2, 2, 2, 2], u => u === 2);
                expect(result2).toBe(2);
            });

            it("should return the first object for which the predicate function is true", () => {

                let result1 = service.find([new TestObj(6, "test1"), new TestObj(8, "test2")], u => u.prop1 === 8);
                expect(result1.prop1).toBe(8);
                expect(result1.prop2).toBe("test2");

                let result2 = service.find([new TestObj(6, "test1"), new TestObj(8, "test2"), new TestObj(8, "test3")], u => u.prop1 === 8);
                expect(result2.prop1).toBe(8);
                expect(result2.prop2).toBe("test2");
            });

            it("should return undefined if the predicate function returns false for every element", () => {

                let result1 = service.find([1, 2, 3], u => u === 10);
                expect(result1).not.toBeDefined();

                let result2 = service.find([1, 2, 2, 2, 2], u => u === 10);
                expect(result2).not.toBeDefined();
            });
        });

        describe("toDictionary", () => {

            it("should correctly map the simple array of objects to a dictionary", () => {

                const testArr = [
                    { prop1: 'val1' },
                    { prop1: 'val2' },
                    { prop1: 'val3' }
                ];

                const testDict = service.toDictionary(testArr, u => u.prop1);

                expect(testDict.val1.prop1).toBe('val1');
                expect(testDict.val2.prop1).toBe('val2');
                expect(testDict.val3.prop1).toBe('val3');
            });

            it("should correctly map the simple array of numbers to a dictionary", () => {

                const testArr = [
                    5,
                    8,
                    10
                ];

                const testDict = service.toDictionary(testArr, u => u);

                expect(testDict[5]).toBe(5);
                expect(testDict[8]).toBe(8);
                expect(testDict[10]).toBe(10);
            });

            it("should correctly map the simple array of strings to a dictionary", () => {

                const testArr = [
                    "one",
                    "two",
                    "three"
                ];

                const testDict = service.toDictionary(testArr, u => u);

                expect(testDict.one).toBe("one");
                expect(testDict.two).toBe("two");
                expect(testDict.three).toBe("three");
            });

            it("should overwrite duplicate keys with last value encountered", () => {

                const testArr = [
                    { prop1: 'val1', prop2: 'one' },
                    { prop1: 'val1', prop2: 'two' },
                    { prop1: 'val3', prop2: 'three' }
                ];

                const testDict = service.toDictionary(testArr, u => u.prop1);

                expect(testDict.val1.prop1).toBe('val1');
                expect(testDict.val1.prop2).toBe('two');
                expect(testDict.val3.prop1).toBe('val3');
                expect(testDict.val3.prop2).toBe('three');
            });

            it("should be able to modify key used by dictionary", () => {

                const testArr = [
                    { prop1: 'val1' },
                    { prop1: 'val2' },
                    { prop1: 'val3' }
                ];

                const testDict = service.toDictionary(testArr, u => u.prop1 + '90');

                expect(testDict.val190.prop1).toBe('val1');
                expect(testDict.val290.prop1).toBe('val2');
                expect(testDict.val390.prop1).toBe('val3');
            });
        });

        class TestObj {
            constructor(public prop1?: number, public prop2?: string) { }
            static areEqual = (u: TestObj, v: TestObj) => {
                return u.prop1 === v.prop1 && u.prop2 === v.prop2;
            };
        }

        class TestObj2 {
            constructor(public prop1?: string, public prop2?: number) { }
            static areEqual = (u: TestObj2, v: TestObj2) => {
                return u.prop1 === v.prop1 && u.prop2 === v.prop2;
            };
        }

    });
}());