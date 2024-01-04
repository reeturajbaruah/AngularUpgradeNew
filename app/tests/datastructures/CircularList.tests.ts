declare var hctraMocks: any;

(function () {
    "use strict";

    describe("CircularList", function () {

        beforeEach(angular.mock.module("HCTRAModule"));

        it("should navigate head properly", function () {

            let circularList: HCTRA.Datastructure.ICircularList<string> = new HCTRA.Datastructure.CircularList(["first", "second", "third"]);

            expect(circularList.moveHeadRight()).toBe("second");

            expect(circularList.moveHeadRight()).toBe("third");

            expect(circularList.moveHeadRight()).toBe("first");

            expect(circularList.moveHeadLeft()).toBe("third");
        });

        it("should peek properly", function () {

            let circularList: HCTRA.Datastructure.ICircularList<string> = new HCTRA.Datastructure.CircularList(["first", "second", "third"]);

            expect(circularList.peekCurrent()).toBe("first");

            expect(circularList.peekLeft()).toBe("third");

            expect(circularList.peekRight()).toBe("second");
        });

        it("should not reference the same array", function () {

            let inArr = ["first", "second", "third"];

            let circularList: HCTRA.Datastructure.ICircularList<string> = new HCTRA.Datastructure.CircularList(inArr);

            inArr.push("fourth");

            expect(circularList.peekLeft()).toBe("third");
        });

        it("should reference the same objects in the array", function () {

            let inArr = [{ prop: 3 }, { prop: 4 }, { prop: 5 }];

            let circularList: HCTRA.Datastructure.ICircularList<{ prop: number }> = new HCTRA.Datastructure.CircularList(inArr);

            inArr[0].prop = 10;

            expect(circularList.peekCurrent().prop).toBe(10);
        });
    });
} ());