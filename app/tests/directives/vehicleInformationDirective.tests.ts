(function (): void {
    "use strict";

    describe("directive: vehicle-information", () => {

        beforeEach(angular.mock.module("HCTRATemplates"));
        beforeEach(angular.mock.module("HCTRAModule"));
        
        let scope,
            directiveScope,

            displayedMessage: { value: string };


        beforeEach(angular.mock.module(() => {
            displayedMessage = {
                value: ""
            };
        }));

        beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {
            $provide.value("genericRepo", hctraMocks.genericRepo());
            $provide.value("responseErrorService", hctraMocks.responseErrorService(displayedMessage));
            $provide.value("validationService", () => { return {}; });
            $provide.value("localDataRepo",
                {
                    getClasses: () => { },
                    getModelYears: () => { }
                });
            $provide.value("manageVehiclesPaperPlateService", {});
            $provide.constant("environmentConfig", {});
        }));

        beforeEach(angular.mock.inject(($rootScope: angular.IRootScopeService,
            $templateCache: angular.ITemplateCacheService,
            $compile: angular.ICompileService) => {

            scope = $rootScope.$new();
            scope.vehicleInfo = {};
            scope.isEdit = false;
            scope.form = {};

            $templateCache.put("/app/directives/vehicleInformationTemplate.html",
                $templateCache.get("app/directives/vehicleInformationTemplate.html"));
            let el: angular.IAugmentedJQuery = angular.element("<form name=\"form\">" +
                "<vehicle-information is-edit=\"isEdit\" parent-form=\"form\" vehicle-info=\"vehicleInfo\">" +
                "</vehicle-information>" +
                "</form>");

            $compile(el)(scope);
            scope.$digest();

            directiveScope = (<angular.IAugmentedJQuery>el.children()).isolateScope();
        }));

        it("canary", () => {
            expect(true).toBe(true);
        });

        it("should have a defined scope", () => {
            expect(scope).toBeDefined();
            expect(directiveScope).toBeDefined();
        });

        it("should start with an invalid form", () => {
            expect(scope.form.$valid).toBeFalsy();
            expect(scope.form.$invalid).toBeTruthy();
        });

        it("should accept valid license plate numbers", () => {
            scope.vehicleInfo.licPlate = "aAa451234512345";
            scope.$digest();
            expect(scope.form.licPlate.$valid).toBeTruthy();
            expect(scope.form.licPlate.$invalid).toBeFalsy();
        });

        it("should reject invalid license plate numbers", () => {
            scope.vehicleInfo.licPlate = "";
            scope.$digest();
            expect(scope.form.licPlate.$valid).toBeFalsy();
            expect(scope.form.licPlate.$invalid).toBeTruthy();

            scope.vehicleInfo.licPlate = "!@#$%^&*";
            scope.$digest();
            expect(scope.form.licPlate.$valid).toBeFalsy();
            expect(scope.form.licPlate.$invalid).toBeTruthy();

            scope.vehicleInfo.licPlate = "1234512345123451";
            scope.$digest();
            expect(scope.form.licPlate.$valid).toBeFalsy();
            expect(scope.form.licPlate.$invalid).toBeTruthy();
        });
        
        it("should reject null value for paper plate question", () => {

            scope.vehicleInfo.temporaryLicPlate = null;
            scope.$digest();
            expect(scope.form.paperPlateOptions.$valid).toBeFalsy();
            expect(scope.form.paperPlateOptions.$invalid).toBeTruthy();
        });

        it("should set temporaryLicPlate to null when onBlur() is called and licPlate is changed", () => {

            scope.vehicleInfo.licPlate = "MYPLATE123";
            directiveScope.onBlur();
            scope.vehicleInfo.temporaryLicPlate = true;
            scope.$digest();
            expect(scope.form.paperPlateOptions.$valid).toBeTruthy();
            expect(scope.form.paperPlateOptions.$invalid).toBeFalsy();

            scope.vehicleInfo.licPlate = "MYPLATE123CHANGED";
            directiveScope.onBlur();
            scope.$digest(); 
            expect(scope.vehicleInfo.temporaryLicPlate).toBeNull();
            expect(scope.form.paperPlateOptions.$valid).toBeFalsy();
            expect(scope.form.paperPlateOptions.$invalid).toBeTruthy();
        });


        it("should accept 'Yes' for paper plate question", () => {

            scope.vehicleInfo.temporaryLicPlate = true;
            scope.$digest();
            expect(scope.form.paperPlateOptions.$valid).toBeTruthy();
            expect(scope.form.paperPlateOptions.$invalid).toBeFalsy();
        });

        it("should accept 'No' for paper plate question", () => {

            scope.vehicleInfo.temporaryLicPlate = false;
            scope.$digest();
            expect(scope.form.paperPlateOptions.$valid).toBeTruthy();
            expect(scope.form.paperPlateOptions.$invalid).toBeFalsy();
        });

        it("should accept valid vehicle model", () => {
            scope.vehicleInfo.vehicleModel = "Ranger 57-,.'";
            scope.$digest();
            expect(scope.form.vehicleModel.$valid).toBeTruthy();
            expect(scope.form.vehicleModel.$invalid).toBeFalsy();

            scope.vehicleInfo.vehicleModel = "123456789012345678901234567890";
            scope.$digest();
            expect(scope.form.vehicleModel.$valid).toBeTruthy();
            expect(scope.form.vehicleModel.$invalid).toBeFalsy();
        });

        it("should reject invalid vehicle model", () => {
            scope.vehicleInfo.vehicleModel = "";
            scope.$digest();
            expect(scope.form.vehicleModel.$valid).toBeFalsy();
            expect(scope.form.vehicleModel.$invalid).toBeTruthy();

            scope.vehicleInfo.vehicleModel = "!@#$%^&*";
            scope.$digest();
            expect(scope.form.vehicleModel.$valid).toBeFalsy();
            expect(scope.form.vehicleModel.$invalid).toBeTruthy();

            scope.vehicleInfo.vehicleModel = "1234567890123456789012345678901";
            scope.$digest();
            expect(scope.form.vehicleModel.$valid).toBeFalsy();
            expect(scope.form.vehicleModel.$invalid).toBeTruthy();
        });

        it("should accept valid vehicle color", () => {
            scope.vehicleInfo.vehicleColor = "Blue";
            scope.$digest();
            expect(scope.form.vehicleColor.$valid).toBeTruthy();
            expect(scope.form.vehicleColor.$invalid).toBeFalsy();

            scope.vehicleInfo.vehicleColor = "Blue42";
            scope.$digest();
            expect(scope.form.vehicleColor.$valid).toBeFalsy();
            expect(scope.form.vehicleColor.$invalid).toBeTruthy();

            scope.vehicleInfo.vehicleColor = "12345678901234567890";
            scope.$digest();
            expect(scope.form.vehicleColor.$valid).toBeFalsy();
            expect(scope.form.vehicleColor.$invalid).toBeTruthy();
        });

        it("should reject invalid vehicle color", () => {
            scope.vehicleInfo.vehicleColor = "";
            scope.$digest();
            expect(scope.form.vehicleColor.$valid).toBeFalsy();
            expect(scope.form.vehicleColor.$invalid).toBeTruthy();

            scope.vehicleInfo.vehicleColor = "123456789012345678901";
            scope.$digest();
            expect(scope.form.vehicleColor.$valid).toBeFalsy();
            expect(scope.form.vehicleColor.$invalid).toBeTruthy();
        });

        it("should accept valid vehicle nickname", () => {
            scope.vehicleInfo.nickname = "";
            scope.$digest();
            expect(scope.form.nickname.$valid).toBeTruthy();
            expect(scope.form.nickname.$invalid).toBeFalsy();

            scope.vehicleInfo.nickname = "Ranger 57-,.'";
            scope.$digest();
            expect(scope.form.nickname.$valid).toBeTruthy();
            expect(scope.form.nickname.$invalid).toBeFalsy();

            scope.vehicleInfo.nickname = "123456789012345678901234567890";
            scope.$digest();
            expect(scope.form.nickname.$valid).toBeTruthy();
            expect(scope.form.nickname.$invalid).toBeFalsy();
        });

        it("should reject invalid vehicle nickname", () => {
            scope.vehicleInfo.nickname = "!@#$%^&*";
            scope.$digest();
            expect(scope.form.nickname.$valid).toBeFalsy();
            expect(scope.form.nickname.$invalid).toBeTruthy();

            scope.vehicleInfo.nickname = "1234567890123456789012345678901";
            scope.$digest();
            expect(scope.form.nickname.$valid).toBeFalsy();
            expect(scope.form.nickname.$invalid).toBeTruthy();
        });
    });
}());