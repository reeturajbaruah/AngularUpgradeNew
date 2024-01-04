(function (): void {
    "use strict";

    describe("directive: current-password-isolated", () => {

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
            scope.form = {};
            scope.password = "";
            scope.confirmPassword = "";
            scope.inObj = {};

            $templateCache.put("/app/directives/currentPasswordIsolatedTemplate.html",
                $templateCache.get("app/directives/currentPasswordIsolatedTemplate.html"));
            let el: angular.IAugmentedJQuery = angular.element("<form name=\"form\">" +
                "<current-password-isolated show-current-password=\"true\" parent-form=\"form\" current-password=\"inObj\" " +
                "confirm-password=\"confirmPassword\" password=\"password\" tabindex=\"-1\">" +
                "</current-password>" +
                "</form>");
            $compile(el)(scope);
            scope.$digest();

            directiveScope = (<angular.IAugmentedJQuery>el.children()).isolateScope();
        }));


        it("should have a defined scope", () => {
            expect(scope).toBeDefined();
            expect(directiveScope).toBeDefined();
        });

        it("should start with an invalid form", () => {
            expect(scope.form.$valid).toBeFalsy();
            expect(scope.form.$invalid).toBeTruthy();
        });

        it("should accept valid password", () => {
            scope.inObj.currentPassword = "password-_@.";
            scope.$digest();
            expect(scope.form.currentPassword.$valid).toBeTruthy();
            expect(scope.form.currentPassword.$invalid).toBeFalsy();

            scope.inObj.currentPassword = "12345678";
            scope.$digest();
            expect(scope.form.currentPassword.$valid).toBeTruthy();
            expect(scope.form.currentPassword.$invalid).toBeFalsy();

            scope.inObj.currentPassword = "1234567890123456";
            scope.$digest();
            expect(scope.form.currentPassword.$valid).toBeTruthy();
            expect(scope.form.currentPassword.$invalid).toBeFalsy();
        });

        it("should reject invalid password", () => {
            scope.inObj.currentPassword = "";
            scope.$digest();
            expect(scope.form.currentPassword.$valid).toBeFalsy();
            expect(scope.form.currentPassword.$invalid).toBeTruthy();
        });
    });
}());