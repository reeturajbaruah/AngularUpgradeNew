(() => {
    "use strict";

    describe("directive: not-equal-to", () => {

        let scope,
            compile;

        beforeEach(() => {
            angular.mock.module("HCTRAModule");

            angular.mock.inject(($rootScope, $compile) => {
                scope = $rootScope.$new();
                compile = $compile;
            });

            compile(
                angular.element(
                    `<form name="testForm">
                    <input type="text" name="original" ng-model="pair.original">
                    <input type="text" name="shouldMatch" ng-model="pair.shouldMatch" not-equal-to="pair.original">
                    </form>`))(scope);
            scope.$digest();
        });

        it("canary", () => {
            expect(true).toBe(true);
        });

        [undefined, "", "a", "some val", "$1$5 val"].forEach((shouldMatch) => {
            it("should set validator notEqualTo to false when original undefined", () => {
                scope.testForm.original.$setViewValue(undefined);
                scope.testForm.shouldMatch.$setViewValue(shouldMatch);

                expect(scope.testForm.shouldMatch.$error["notEqualTo"]).toBeFalsy();
            })
        });

        [undefined, "", "a", "some val", "$1$5 val"].forEach((shouldMatch) => {
            it("should set validator notEqualTo to false when original  is empty string", () => {
                scope.testForm.original.$setViewValue("");
                scope.testForm.shouldMatch.$setViewValue(shouldMatch);

                expect(scope.testForm.shouldMatch.$error["notEqualTo"]).toBeFalsy();
            })
        });
        
        [undefined, "", "a", "some val", "$1$5 val"].forEach((shouldMatch) => {
            it("should set validator notEqualTo to false when shouldMatch does not equal orginal", () => {
                scope.testForm.original.$setViewValue("a value");
                scope.testForm.shouldMatch.$setViewValue(shouldMatch);

                expect(scope.testForm.shouldMatch.$error["notEqualTo"]).toBeFalsy();
            })
        });

        it("should set validator notEqualTo to true when shouldMatch equals orginal", () => {
            scope.testForm.original.$setViewValue("some value");
            scope.testForm.shouldMatch.$setViewValue("some value");

            expect(scope.testForm.shouldMatch.$error["notEqualTo"]).toBeTruthy();
        });
    });
})();