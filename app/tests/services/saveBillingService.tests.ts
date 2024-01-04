(function () {
    "use strict";

    describe("saveBillingService", () => {

        beforeEach(angular.mock.module("HCTRAModule"));

        let service: HCTRA.Service.SaveBillingService,
            inData = {
                value: "testData"
            },
            genericRepo = hctraMocks.genericRepo(inData),
            modalService = hctraMocks.modalService(),
            state = hctraMocks.$state({}),
            responseErrorService = hctraMocks.responseErrorService(),
            obj: {
                billingInfo: { cards: Array<any> },
                billingType: string,
            };


        beforeEach(angular.mock.module(() => {
            obj = {
                billingType: "",
                billingInfo: {
                    cards: [{}, {}]
                }
            };
        }));

        beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {
            $provide.value("genericRepo", genericRepo);
            $provide.value("responseErrorService", responseErrorService);
            $provide.value("modalService", modalService);
            $provide.value("$state", state);
        }));

        beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {
            service = $injector.get<HCTRA.Service.SaveBillingService>("saveBillingService");
        }));

        describe("createSaveRequest", () => {

            it("should set first card in objectPassed.billingInfo.cards to primary when object passed has billingType Credit", () => {

                spyOn(service, "createCreditCardSaveRequest").and.returnValue("sampleCCRequest" as any);

                obj.billingType = "CREDIT";
                service.createSaveRequest(obj);
                
                expect(obj.billingInfo.cards[0].primary).toBe(true);
            });

            it("should not set first card in objectPassed.billingInfo.cards to primary when object passed has billingType not Credit", () => {

                spyOn(service, "createCreditCardSaveRequest").and.returnValue("sampleCCRequest" as any);

                obj.billingType = "";
                service.createSaveRequest(obj);

                expect(obj.billingInfo.cards[0].primary).toBeFalsy();
            });

            it("should return response from createCreditCardSaveRequest when object passed has billingType Credit", () => {

                spyOn(service, "createCreditCardSaveRequest").and.returnValue({
                    billingInfo: "",
                    cards: []
                } as any);

                obj.billingType = "CREDIT";
                let originalBillingInfo = angular.copy(obj.billingInfo);
                let request = service.createSaveRequest(obj);

                expect(service.createCreditCardSaveRequest).toHaveBeenCalledTimes(1);
                expect(service.createCreditCardSaveRequest).toHaveBeenCalledWith(originalBillingInfo);

                expect(request).toEqual({
                    billingInfo: "",
                    cards: []
                });                
            });

            it("should return response from createEftSaveRequest when object passed has billingType not equal to CREDIT", () => {

                spyOn(service, "createEftSaveRequest").and.returnValue({
                    billingInfo: "",
                    cards: null
                });

                obj.billingType = "EFT";
                let request = service.createSaveRequest(obj);

                expect(service.createEftSaveRequest).toHaveBeenCalledTimes(1);
                expect(service.createEftSaveRequest).toHaveBeenCalledWith(obj.billingInfo);

                expect(request).toEqual({
                    billingInfo: "",
                    cards: null
                });
            });
        });

        describe("createEftSaveRequest", () => {

            it("should return object with cards set to null and billingInfo with cards set to null, billingTypeCode E and billing typeDisplay EFT", () => {
                let expectedResult = {
                    cards: null,
                    billingInfo: {
                        existingField: 1,
                        cards: null,
                        billingTypeCode: "E",
                        billingTypeDisplay: "EFT"
                    }
                };

                expect(service.createEftSaveRequest({ existingField: 1 })).toEqual(expectedResult);
            });
        });

        describe("createCreditCardSaveRequest", () => {

            it("should return object with eft set to null cards to billingInfo.cards", () => {

                let answer = service.createCreditCardSaveRequest({ existingField: 1, cards: [{}] });

                expect(answer.cards).toBe(answer.billingInfo.cards);
                expect(answer.eft).toBe(null);              
            });

            it("should return object with billingInfo properties card[0] set to primary, eft set to null, billingTypeCode set to C and billingTypeDisplay set to CREDIT", () => {

                let billingInfo = service.createCreditCardSaveRequest({ existingField: 1, cards: [{}] }).billingInfo;

                expect(billingInfo.eft).toBe(null);
                expect(billingInfo.billingTypeCode).toBe("C");
                expect(billingInfo.billingTypeDisplay).toBe("CREDIT");
                expect(billingInfo.existingField).toBe(1);
            });

            it("should return object with billingInfo cards zip copied to zipCode", () => {

                let billingInfo = service.createCreditCardSaveRequest({ existingField: 1, cards: [{zip: 1}, {zip: 2}] }).billingInfo;

                expect(billingInfo.cards[0].zip).toBe(1);
                expect(billingInfo.cards[0].zipCode).toBe(1);
                expect(billingInfo.cards[1].zip).toBe(2);
                expect(billingInfo.cards[1].zipCode).toBe(2);
            });


            it("should return object with billingInfo cards country set to USA if not international", () => {

                let billingInfo = service.createCreditCardSaveRequest({
                    existingField: 1, cards: [
                        {
                            country: "a", international: false
                        }, {
                            country: "b", international: true
                        }]
                }).billingInfo;
                
                expect(billingInfo.cards[0].country).toBe("USA");
                expect(billingInfo.cards[1].country).toBe("b");
            });
            
            it("should return object with billingInfo cards cardExpiresDate even when incoming cardExpiresDate blank or null", () => {


                spyOn(service, "getDate").and.returnValues("1", "2");

                let billingInfo = service.createCreditCardSaveRequest({
                    existingField: 1, cards: [
                        {
                            cardExpiresDate: 1, selectedYear: "1992", expMonth: "1"
                        }, {
                            cardExpiresDate: "", selectedYear: "1993", expMonth: "2"
                        }, {
                            cardExpiresDate: "someDate", selectedYear: "1994", expMonth: "3"
                        }]
                }).billingInfo;

                expect(billingInfo.cards[0].cardExpiresDate).toBe("1");
                expect(billingInfo.cards[1].cardExpiresDate).toBe("2");
                expect(billingInfo.cards[2].cardExpiresDate).toBe("someDate");

                expect(service.getDate).toHaveBeenCalledTimes(2);
                expect(service.getDate).toHaveBeenCalledWith("1992", "1");
                expect(service.getDate).toHaveBeenCalledWith("1993", "2");
            });
        });

        describe("getDate", () => {
            [
                { year: 1992, month: 2, result: "1992-03-01T06:00:00.000Z" },
                { year: 1993, month: 4, result: "1993-05-01T05:00:00.000Z" },
                { year: 1994, month: 6, result: "1994-07-01T05:00:00.000Z" },
                { year: 1995, month: 7, result: "1995-08-01T05:00:00.000Z" },
                { year: 1996, month: 9, result: "1996-10-01T05:00:00.000Z" },
                { year: 1997, month: 11, result: "1997-12-01T06:00:00.000Z" }
            ].forEach(({ year, month, result }) =>
                it(`should return ${result} when called like getDate(${year}, ${month})`, () => {
                    expect(service.getDate(year, month)).toEqual(result);
                }));

        });

        describe("saveCardOrEft", () => {

            it(`should equal saveCreditCard and saveEft)`, () => {
                expect(service.saveCardOrEft).toEqual(service.saveEFT);
                expect(service.saveCardOrEft).toEqual(service.saveCreditCard);
            });

            it("should call genericRepo.dataFactory.saveBillingInformation", () => {
                spyOn(genericRepo.dataFactory, "saveBillingInformation").and.callThrough();
                spyOn(service, "processSaveResponse");

                service.saveCardOrEft("request", "nextState");

                expect(genericRepo.dataFactory.saveBillingInformation).toHaveBeenCalledTimes(1);
                expect(genericRepo.dataFactory.saveBillingInformation).toHaveBeenCalledWith("request");
                expect(service.processSaveResponse).toHaveBeenCalledTimes(1);
                expect(service.processSaveResponse).toHaveBeenCalledWith(inData.value, "nextState");
            });
        });

        describe("processSaveResponse", () => {

            it(`should display alert and show update successful modal then go to next state when response has no errors`, () => {

                spyOn(service, "isErrorFree").and.returnValue(true);
                spyOn(responseErrorService, "displayAlertsFromResponse");
                spyOn(modalService, "showUpdateSuccessModal");
                spyOn(state, "go");

                service.processSaveResponse(<HCTRA.Model.IBaseResponse>{ accountStatus: "response" } , "nextState");

                expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(1);
                expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledWith({ accountStatus: "response" }, true);
                expect(modalService.showUpdateSuccessModal).toHaveBeenCalledTimes(1);
                expect(modalService.showUpdateSuccessModal).toHaveBeenCalledWith("Billing Information Update", "billing information");
                expect(state.go).toHaveBeenCalledTimes(1);
                expect(state.go).toHaveBeenCalledWith("nextState", {}, { reload: true });

            });
        });

       
        
    });
}());