(function (): void {
    "use strict";

    describe("directive: bank-account-entry", () => {

        beforeEach(angular.mock.module("HCTRATemplates"));
        beforeEach(angular.mock.module("HCTRAModule"));

        let scope,
            directiveScope,

            cmsLink: { value: string };


        beforeEach(angular.mock.module(() => {
            cmsLink = {
                value: ""
            };
        }));

        beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {
            $provide.value("validationService", (): Object => { return {}; });
            $provide.value("linkLookupService", hctraMocks.linkLookupService(cmsLink));
        }));

        beforeEach(angular.mock.inject(($rootScope: angular.IRootScopeService,
            $templateCache: angular.ITemplateCacheService,
            $compile: angular.ICompileService) => {

            scope = $rootScope.$new();
            scope.eft = {};
            scope.form = {};

            $templateCache.put("/app/directives/billingEntry/bankAccountEntryTemplate.html",
                $templateCache.get("app/directives/billingEntry/bankAccountEntryTemplate.html"));
            let el: angular.IAugmentedJQuery = angular.element("<form name=\"form\">" +
                "<bank-account-entry bank-details=\"eft\" paymentsform=\"form\" validate=\"true\" show-name>" +
                "</bank-account-entry>" +
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

        it("should accept valid name on bank account", () => {
            scope.eft.name = "Abi Normal";
            scope.$digest();

            expect(scope.form.eftName.$valid).toBeTruthy();
            expect(scope.form.eftName.$invalid).toBeFalsy();
        });

        it("should reject name on bank account with special characters", () => {
            scope.eft.name = "@bi Normal";
            scope.$digest();

            expect(scope.form.eftName.$valid).toBeFalsy();
            expect(scope.form.eftName.$invalid).toBeTruthy();
        });

        it("should reject name on bank account with only numbers", () => {
            scope.eft.name = "123456";
            scope.$digest();

            expect(scope.form.eftName.$valid).toBeFalsy();
            expect(scope.form.eftName.$invalid).toBeTruthy();
        });

        it("should accept valid routing number", () => {
            scope.eft.routingNumber = 123456789;
            scope.$digest();

            expect(scope.form.routing.$valid).toBeTruthy();
            expect(scope.form.routing.$invalid).toBeFalsy();
        });

        it("should reject blank routing number", () => {
            scope.eft.routingNumber = "";
            scope.$digest();
            expect(scope.form.routing.$valid).toBeFalsy();
            expect(scope.form.routing.$invalid).toBeTruthy();
        });

        it("should reject routing number if not 9 digits long", () => {
            scope.eft.routingNumber = 12345678;
            scope.$digest();
            expect(scope.form.routing.$valid).toBeFalsy();
            expect(scope.form.routing.$invalid).toBeTruthy();

            scope.eft.routingNumber = 1234567890;
            scope.$digest();
            expect(scope.form.routing.$valid).toBeFalsy();
            expect(scope.form.routing.$invalid).toBeTruthy();
        });

        it("should accept valid account number", () => {
            scope.eft.accountNumber = 12345678901234567;
            scope.$digest();
            expect(scope.form.account.$valid).toBeTruthy();
            expect(scope.form.account.$invalid).toBeFalsy();

            scope.eft.accountNumber = 1;
            scope.$digest();
            expect(scope.form.account.$valid).toBeTruthy();
            expect(scope.form.account.$invalid).toBeFalsy();
        });

        it("should reject blank account number", () => {
            scope.eft.accountNumber = "";
            scope.$digest();
            expect(scope.form.account.$valid).toBeFalsy();
            expect(scope.form.account.$invalid).toBeTruthy();
        });

        it("should reject account number with non-numeric characters", () => {
            scope.eft.accountNumber = "!@#$%^&*";
            scope.$digest();
            expect(scope.form.account.$valid).toBeFalsy();
            expect(scope.form.account.$invalid).toBeTruthy();

            scope.eft.accountNumber = "asdiojs5151";
            scope.$digest();
            expect(scope.form.account.$valid).toBeFalsy();
            expect(scope.form.account.$invalid).toBeTruthy();
        });

        it("should reject account number longer than 17 digits", () => {
            scope.eft.accountNumber = 123456789012345678;
            scope.$digest();
            expect(scope.form.account.$valid).toBeFalsy();
            expect(scope.form.account.$invalid).toBeTruthy();
        });

        it("should be invalid if confirm account number does not match account number", () => {
            scope.eft.accountNumber = 1234567;
            scope.eft.account2 = 123456789;
            scope.$digest();
            expect(scope.form.account2.$valid).toBeFalsy();
            expect(scope.form.account2.$invalid).toBeTruthy();
        });

        it("should be valid if confirm account number matches account number", () => {
            scope.eft.accountNumber = 1234567;
            scope.eft.account2 = 1234567;
            scope.$digest();
            expect(scope.form.account2.$valid).toBeTruthy();
            expect(scope.form.account2.$invalid).toBeFalsy();
        });
    });
} ());