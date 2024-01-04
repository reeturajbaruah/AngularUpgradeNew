(function (): void {
    "use strict";

    describe("directive: checkbox", () => {

        beforeEach(angular.mock.module("HCTRATemplates"));
        beforeEach(angular.mock.module("HCTRAModule"));

        let scope,
            directiveScope;


        beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {
            $provide.value("validationService", (): Object => { return {}; });
        }));

        beforeEach(angular.mock.inject(($rootScope: angular.IRootScopeService,
            $templateCache: angular.ITemplateCacheService,
            $compile: angular.ICompileService) => {

            scope = $rootScope.$new();
            scope.activateEzTag = {};
            scope.activateEzTag.userHasConfirmed = false;
            scope.form = {};

            $templateCache.put("/app/directives/checkboxTemplate.html",
                $templateCache.get("app/directives/checkboxTemplate.html"));
            let el: angular.IAugmentedJQuery = angular.element("<form name=\"form\">" +
                "<checkbox checkbox-is-truthy=\"activateEzTag.userHasConfirmed\" parent-form=\"form\" " +
                "error-message=\"\"Please confirm EZ TAG Activation\"\">Confirm EZ TAGs Activation</checkbox>" +
                "</form>");
            $compile(el)(scope);
            scope.$digest();

            directiveScope = (<angular.IAugmentedJQuery>el.children()).isolateScope();
        }));


        it("should have a defined scope", () => {
            expect(scope).toBeDefined();
            expect(directiveScope).toBeDefined();
        });

        it("form should be invalid first", () => {
            expect(scope.form.$invalid).toBeTruthy();
        });

        it("checking confirm box should validate form", () => {
            scope.activateEzTag.userHasConfirmed = true;
            scope.$digest();
            expect(scope.form.$invalid).toBeFalsy();
        });
    });
} ());