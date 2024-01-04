(function () {
    "use strict";

    describe("validationService", () => {

        beforeEach(angular.mock.module("HCTRAModule"));

        let service: HCTRA.Service.IValidationService,
            formObj: angular.IFormController;


        beforeEach(angular.mock.module(() => {
            formObj = <angular.IFormController>{};
        }));

        beforeEach(angular.mock.inject((_validationService_: HCTRA.Service.IValidationService) => {
            service = _validationService_;
        }));


        it("should return true if an error is triggered on the form", () => {
            formObj.test = { $valid: false };
            formObj.$submitted = true;
            expect(service(formObj).isErrorTriggered("test")).toBeTruthy();
        });

        it("should return false if there isnt an error on the form", () => {
            formObj.test = { $valid: true };
            formObj.$submitted = true;
            expect(service(formObj).isErrorTriggered("test")).toBeFalsy();
        });

        it("should return \"has-error\" if form has an error", () => {
            formObj.test = { $valid: false };
            formObj.$submitted = true;
            expect(service(formObj).getErrorStatusClass("test")).toEqual("has-error");
        });

        it("should return empty string if form has an error", () => {
            formObj.test = { $valid: true };
            formObj.$submitted = true;
            expect(service(formObj).getErrorStatusClass("test")).toEqual("");
        });

        it("should return \"has-error\" if the form is invalid", () => {
            formObj.test = { $valid: false };
            expect(service(formObj).getErrorStatusClassForDateRange("test")).toEqual("has-error");
        });

        it("should return empty string if the form is valid", () => {
            formObj.test = { $valid: true };
            expect(service(formObj).getErrorStatusClassForDateRange("test")).toEqual("");
        });

        it("should be defined if form input is defined", () => {
            formObj.test = { $valid: true };
            expect(service(formObj).getErrorStatusClassFastWithNullCheck("test")).toBeDefined();
        });

        it("should return empty string if form input is null", () => {
            expect(service(formObj).getErrorStatusClassFastWithNullCheck("test")).toEqual("");
        });

        it("should be defined if form input is defined", () => {
            formObj.test = { $error: true };
            expect(service(formObj).getErrorListWithNullCheck("test")).toBeDefined();
        });

        it("should return empty array if form input is null", () => {
            expect(service(formObj).getErrorListWithNullCheck("test")).toEqual([]);
        });
    });
}());