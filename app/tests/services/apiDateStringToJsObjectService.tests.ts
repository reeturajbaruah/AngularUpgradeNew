declare var hctraMocks: any;

(() => {
    "use strict";

    describe("apiDateStringToJsObjectService", () => {

        let mockDateWithTimeZone;
        beforeEach(angular.mock.module("HCTRAModule"));
        
        let service: HCTRA.Service.ApiDateStringToJsObjectService;
            //getDate = ({ year, month, day, hour, minute, second }) => new Date(year, (month - 1), day, hour, minute, second);

        beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {
            mockDateWithTimeZone = jasmine.createSpy("dateWithTimeZoneFilter");
            $provide.value("dateWithTimeZoneFilter", mockDateWithTimeZone);
        }));

        beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {
            
            service = $injector.get<HCTRA.Service.ApiDateStringToJsObjectService>("apiDateStringToJsObjectService");
        }));

        describe("canary", () => {

            it("canary", () => {

                expect(true).toBe(true);
            });
        });

        describe("convertApiDateToJsObject", () => {

            it("should call convertStringToDate with the property named in propIn for each record in passed array", () => {

                mockDateWithTimeZone.and.returnValue("test");

                service.convertApiDateToJsObject([{ in: "1" }, { in: "2" }, { in: "3" }], "in", "out");

                expect(mockDateWithTimeZone).toHaveBeenCalledTimes(3);
                expect(mockDateWithTimeZone).toHaveBeenCalledWith("1", "dateTimeFull");
                expect(mockDateWithTimeZone).toHaveBeenCalledWith("2", "dateTimeFull");
                expect(mockDateWithTimeZone).toHaveBeenCalledWith("3", "dateTimeFull");
            });

            it("should assign value returned by convertStringToDate to property named in propOut for each record in passed array", () => {

                mockDateWithTimeZone.and.returnValues("first", "second", "third");

                let obj = [{ in: "1" }, { in: "2" }, { in: "3" }];

                expect(service.convertApiDateToJsObject(obj, "in", "out")).toEqual([
                    { in: "1", out: "first" },
                    { in: "2", out: "second" },
                    { in: "3", out: "third" }
                ]);                            
            });
        });
    });
})();