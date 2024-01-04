// (function (): void {
//     "use strict";
//     describe("service: creditCardInputService", () => {
//         beforeEach(angular.mock.module("HCTRAModule"));

//         let scope;
//         let rootScope;

//         let storefrontUtilityService;

//         let service;
//         let dataFactoryMock;
//         let vantivPaymentServiceMock;
//         let responseErrorServiceMock;
//         let modalServiceMock;
//         let envConfig;
//         let q;
        
//         function flush() {
//             if (rootScope)
//                 rootScope.$apply();
//             if (scope)
//                 scope.$apply();

//         }
        
//         function buildScope(creditCard = null) {
//             scope = rootScope.$new();
//             scope.creditCardTypes = ["VISA", "DISCOVER", "MASTERCARD", "AMEX"];
//             scope.creditCard = creditCard || {};
//             scope.form = {};
//             scope.suffix = 'theCreditCardDirective';

//             scope.useExistingCard = true;

//             return service.setup(scope);
//             //flush();
//         }


//         beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {

//             storefrontUtilityService = {
//                 isRunningAsKiosk: false,
//                 isSecureCardInputAvailable: false,
//                 storefrontLocation: HCTRA.Model.StoreLocations.UKN,
//                 machineName: null,
//                 webStoreData: null,
//                 defaultMachineName: "Default",
//                 delay: {
//                     short: 100,
//                     long: 1000
//                 }
//             };

//             dataFactoryMock = jasmine.createSpyObj("dataFactory", ["TriPosConfiguration", "TriPosStatus"]);
//             vantivPaymentServiceMock = jasmine.createSpyObj("vativPayment", ["getTokenizedCreditCardData"]);
//             responseErrorServiceMock = jasmine.createSpyObj("responseErrorService", ["displayAlertsFromResponse", "displayToast"]);
//             modalServiceMock = jasmine.createSpyObj("modalService", ["creditCardPromptModal", "closeByName", "newModalScope", "isModalOpen"]);

//             modalServiceMock.modalNames = {
//                 CreditCardPrompt: "CreditCardPrompt"
//             };

//             $provide.factory("$q", ["replacementQService", function (replacementQService) {            
//                 return replacementQService;
//             }]);

//             $provide.value("StorefrontUtilityService", storefrontUtilityService);

//             envConfig = hctraMocks.environmentConfig();

//             envConfig.storefrontConfigs = { KioskConfigs : {} };
//             envConfig.storefrontConfigs.KioskConfigs[storefrontUtilityService.defaultMachineName] = {};

//             $provide.constant("environmentConfig", envConfig);

//             $provide.value("modalService", modalServiceMock);
//             $provide.value("responseErrorService", responseErrorServiceMock);
//             $provide.value("genericRepo", { dataFactory: dataFactoryMock });

//             $provide.value("validationService", {});

//             $provide.value("iFrameService", {
//                 getIFrameServiceInstance: () => {
//                     return {
//                         loadIFrame: () => { },
//                         getPaypageRegistrationId: () => { }
//                     }
//                 }
//             });

//             $provide.value("creditCardConversionService", {
//                 convertCodeToString: (cardCode) => { return cardCode; }
//             });

//             $provide.value("pciInfoService", {
//                 isMasked: () => { return true; }
//             });
//             $provide.value("vantivPaymentService", vantivPaymentServiceMock);
//         }));

//         beforeEach(angular.mock.inject(($injector, $rootScope: angular.IRootScopeService) => {
//             rootScope = $rootScope;
//             service = $injector.get('creditCardInputService');
//             q = $injector.get('$q');
//         }));

//         beforeEach(() => {
//             modalServiceMock.creditCardPromptModal.and.returnValue(q.resolve(true));
//             modalServiceMock.newModalScope.and.returnValue(rootScope.$new());
//             modalServiceMock.isModalOpen.and.returnValue(true);
//         });

//         describe("Non-kiosk configuration", () => {
            
//             it("should use iframe", () => {
//                 storefrontUtilityService.isRunningAsKiosk = false;
//                 envConfig.vantivConfig.IFrameEnabled = true;

//                 return buildScope().then(() => {

//                     expect(scope.strategyUsed).toBe(HCTRA.Model.CreditCardInputStrategyEnum.Iframe);
//                     expect(scope.creditCardNameDisabled).toBeFalsy();
//                     expect(scope.creditCardNumberDisabled).toBeFalsy();
//                     expect(scope.creditCardExpYearDisabled).toBeFalsy();
//                     expect(scope.creditCardExpMothDisabled).toBeFalsy();
//                 }).catch(e => {
//                     fail(e);
//                 });
//             });

//             it("should use litel", () => {
//                 storefrontUtilityService.isRunningAsKiosk = false;
//                 envConfig.vantivConfig.IFrameEnabled = false;

//                 return buildScope().then(() => {

//                     expect(scope.strategyUsed).toBe(HCTRA.Model.CreditCardInputStrategyEnum.Litel);
//                     expect(scope.creditCardNameDisabled).toBeFalsy();
//                     expect(scope.creditCardNumberDisabled).toBeFalsy();
//                     expect(scope.creditCardExpYearDisabled).toBeFalsy();
//                     expect(scope.creditCardExpMothDisabled).toBeFalsy();
//                 }).catch(e => {
//                     fail(e);
//                 });
//             });

//         });

//         describe("Kiosk configuration", () => {

//             const triPosConfig: HCTRA.Model.VantivTriPosConfiguration = {
//                 acceptorId: null,
//                 accountId: null,
//                 errors: null,
//                 laneId: 9999,
//                 url: "https://localhost:789",
//                 accountStatus: null,
//                 applicationId: null,
//                 accountToken: null,
//                 applicationName: "name",
//                 applicationVersion: "version",
//                 authorization: null,
//                 alerts: null,
//                 exception: null,
//                 requestId: null,
//                 sessionTimedOut: null,
//                 vaultId: null
//             };

//             const triPosStatus: HCTRA.Model.VantivTriPosStatus = {
//                 errors: null,
//                 alerts: null,
//                 exception: null,
//                 active: null,
//                 allowCreditCardInputWhenDeviceDisabled: false,
//                 sessionTimedOut: null,
//                 accountStatus: null,
//                 getCardNameFromTriPos: true
//             };

//             let vantivPaymentServiceResponse: HCTRA.Model.VantivTriPosCreateOmniTokenResponse;

//             beforeEach(() => {
//                 triPosStatus.getCardNameFromTriPos = true;
//                 triPosStatus.allowCreditCardInputWhenDeviceDisabled = false;

//                 vantivPaymentServiceResponse = {
//                     accountNumber: null,
//                     binValue: null,
//                     cardHolderName: null,
//                     cardLogo: "",
//                     entryMode: null,
//                     expirationMonth: "1",
//                     expirationYear: "20",
//                     isOffline: null,
//                     merchantId: null,
//                     transactionDateTime: null,
//                     tokenId: null,
//                     tokenProvider: null
//                 };

//                 dataFactoryMock.TriPosConfiguration.and.callFake(() => {
//                     return q.resolve(triPosConfig);
//                 });
//                 dataFactoryMock.TriPosStatus.and.callFake(() => {
//                     return q.resolve(triPosStatus);
//                 });
//                 vantivPaymentServiceMock.getTokenizedCreditCardData.and.callFake(() => {
//                     return q.resolve(vantivPaymentServiceResponse);
//                 });
//             });

//             it("should disable all CC info fields", () => {

//                 storefrontUtilityService.isRunningAsKiosk = true;
//                 storefrontUtilityService.isSecureCardInputAvailable = true;
//                 storefrontUtilityService.storefrontLocation = HCTRA.Model.StoreLocations.TNO;
//                 storefrontUtilityService.machineName = "TestKiosk";
//                 storefrontUtilityService.webStoreData = {
//                     sessionId: 0,
//                     selectedItemIds: [],
//                     currentItemName: "name",
//                     currentItemId: 1,
//                     fullSiteMode: false,
//                     completedItemIds: [],
//                     shellUserInitialized: true
//                 } as HCTRA.Storefront.Service.IStorefrontWebStorage;

//                 triPosStatus.active = true;
//                 vantivPaymentServiceResponse.cardLogo = "VISA";
//                 return buildScope().then(() => {
//                     expect(scope.creditCardNumberDisabled).toBeTruthy();
//                     expect(scope.creditCardExpYearDisabled).toBeTruthy();
//                     expect(scope.creditCardExpMothDisabled).toBeTruthy();
//                 }).catch(e => {
//                     fail(e);
//                 });
//             });

//             it("should get tokenized data on update", () => {

//                 storefrontUtilityService.isRunningAsKiosk = true;
//                 storefrontUtilityService.isSecureCardInputAvailable = true;
//                 storefrontUtilityService.storefrontLocation = HCTRA.Model.StoreLocations.TNO;
//                 storefrontUtilityService.machineName = "TestKiosk";
//                 storefrontUtilityService.webStoreData = {
//                     sessionId: 0,
//                     selectedItemIds: [],
//                     currentItemName: "name",
//                     currentItemId: 1,
//                     fullSiteMode: false,
//                     completedItemIds: [],
//                     shellUserInitialized: true
//                 } as HCTRA.Storefront.Service.IStorefrontWebStorage;

//                 triPosStatus.active = true;
//                 vantivPaymentServiceResponse.cardLogo = "VISA";

//                 vantivPaymentServiceResponse.cardHolderName = "TESTER";
//                 vantivPaymentServiceResponse.binValue = "314159";
//                 vantivPaymentServiceResponse.accountNumber = "************-3141";
//                 vantivPaymentServiceResponse.expirationMonth = "3";
//                 vantivPaymentServiceResponse.expirationYear = "2025";

//                 return buildScope().then(() => {

//                     return service.update(scope)
//                 }).then(() => {

//                     expect(vantivPaymentServiceMock.getTokenizedCreditCardData).toHaveBeenCalled();

//                     expect(scope.creditCard.omniToken).toBe(vantivPaymentServiceResponse.tokenId);
//                     expect(scope.creditCard.cardNbr).toBe(vantivPaymentServiceResponse.accountNumber);

//                     expect(scope.creditCard.cardCode).toBe('V');
//                     expect(scope.creditCard.cardTypeDisplay).toBe('V');

//                     expect(scope.creditCard.isNewCard).toBe(true);
//                     expect(scope.creditCard.nameOnCard).toBe(vantivPaymentServiceResponse.cardHolderName);
//                     expect(scope.creditCard.expMonth).toBe(+vantivPaymentServiceResponse.expirationMonth);
//                     expect(scope.creditCard.selectedYear).toBe(vantivPaymentServiceResponse.expirationYear);
//                     }).catch(e => {
//                         fail(e);
//                     });
//             });

//             it("should use empty string for card name when status demands it", () => {

//                 storefrontUtilityService.isRunningAsKiosk = true;
//                 storefrontUtilityService.isSecureCardInputAvailable = true;
//                 storefrontUtilityService.storefrontLocation = HCTRA.Model.StoreLocations.TNO;
//                 storefrontUtilityService.machineName = "TestKiosk";
//                 storefrontUtilityService.webStoreData = {
//                     sessionId: 0,
//                     selectedItemIds: [],
//                     currentItemName: "name",
//                     currentItemId: 1,
//                     fullSiteMode: false,
//                     completedItemIds: [],
//                     shellUserInitialized: true
//                 } as HCTRA.Storefront.Service.IStorefrontWebStorage;

//                 triPosStatus.active = true;
//                 triPosStatus.getCardNameFromTriPos = false;

//                 vantivPaymentServiceResponse.cardHolderName = "TESTER";

//                 return buildScope().then(() => {
//                     return service.update(scope);
//                 }).then(() => {
//                     scope.$apply();
//                     expect(scope.creditCard.nameOnCard).toBe("");
//                 });
//             });


//             it("should rotate lastname/firstname I", () => {

//                 storefrontUtilityService.isRunningAsKiosk = true;
//                 storefrontUtilityService.isSecureCardInputAvailable = true;
//                 storefrontUtilityService.storefrontLocation = HCTRA.Model.StoreLocations.TNO;
//                 storefrontUtilityService.machineName = "TestKiosk";
//                 storefrontUtilityService.webStoreData = {
//                     sessionId: 0,
//                     selectedItemIds: [],
//                     currentItemName: "name",
//                     currentItemId: 1,
//                     fullSiteMode: false,
//                     completedItemIds: [],
//                     shellUserInitialized: true
//                 } as HCTRA.Storefront.Service.IStorefrontWebStorage;

//                 triPosStatus.active = true;

//                 vantivPaymentServiceResponse.cardHolderName = "Lastname/Firstname I";

//                 return buildScope().then(() => {
//                     scope.$apply();
//                     return service.update(scope);
//                 }).then(() => {
//                     scope.$apply();
//                     expect(scope.creditCard.nameOnCard).toBe("Firstname I Lastname");
//                     });
//             });

//             it("should block CC input if device is down", () => {

//                 storefrontUtilityService.isRunningAsKiosk = true;
//                 storefrontUtilityService.isSecureCardInputAvailable = true;
//                 storefrontUtilityService.storefrontLocation = HCTRA.Model.StoreLocations.TNO;
//                 storefrontUtilityService.machineName = "TestKiosk";
//                 storefrontUtilityService.webStoreData = {
//                     sessionId: 0,
//                     selectedItemIds: [],
//                     currentItemName: "name",
//                     currentItemId: 1,
//                     fullSiteMode: false,
//                     completedItemIds: [],
//                     shellUserInitialized: true
//                 } as HCTRA.Storefront.Service.IStorefrontWebStorage;

//                 triPosStatus.active = false;
//                 vantivPaymentServiceResponse.cardLogo = "VISA";

//                 return buildScope().then(() => {

//                     return service.update(scope)
//                         .then(() => {
//                             fail("update should have failed");
//                         })
//                         .catch(() => {
//                             expect(vantivPaymentServiceMock.getTokenizedCreditCardData).not.toHaveBeenCalled();
//                         })
//                         .finally(() => {

//                             expect(scope.creditCardNumberDisabled).toBeTruthy();
//                             expect(scope.creditCardExpYearDisabled).toBeTruthy();
//                             expect(scope.creditCardExpMothDisabled).toBeTruthy();
//                         });
//                 }).catch(e => {
//                     fail(e);
//                 });
//             });

//             it("should allow CC input if device is down but configured to accept", () => {

//                 envConfig.vantivConfig.IFrameEnabled = true;
//                 storefrontUtilityService.isRunningAsKiosk = true;
//                 storefrontUtilityService.isSecureCardInputAvailable = true;
//                 storefrontUtilityService.storefrontLocation = HCTRA.Model.StoreLocations.TNO;
//                 storefrontUtilityService.machineName = "TestKiosk";
//                 storefrontUtilityService.webStoreData = {
//                     sessionId: 0,
//                     selectedItemIds: [],
//                     currentItemName: "name",
//                     currentItemId: 1,
//                     fullSiteMode: false,
//                     completedItemIds: [],
//                     shellUserInitialized: true
//                 } as HCTRA.Storefront.Service.IStorefrontWebStorage;

//                 triPosStatus.active = false;
//                 triPosStatus.allowCreditCardInputWhenDeviceDisabled = true;
//                 vantivPaymentServiceResponse.cardLogo = "VISA";

//                 return buildScope().then(() => {

//                     expect(scope.strategyUsed).toBe(HCTRA.Model.CreditCardInputStrategyEnum.Iframe);
//                     expect(scope.creditCardNumberDisabled).toBeFalsy();
//                     expect(scope.creditCardExpYearDisabled).toBeFalsy();
//                     expect(scope.creditCardExpMothDisabled).toBeFalsy();
//                 }).catch(e => {
//                     fail(e);
//                 });

//             });


//             it("should block CC input if default and configured so", () => {

//                 storefrontUtilityService.isRunningAsKiosk = true;
//                 storefrontUtilityService.isSecureCardInputAvailable = true;
//                 storefrontUtilityService.storefrontLocation = HCTRA.Model.StoreLocations.TNO;
//                 storefrontUtilityService.machineName = storefrontUtilityService.defaultMachineName;

//                 envConfig.storefrontConfigs.KioskConfigs = {};
//                 envConfig.storefrontConfigs.KioskConfigs[storefrontUtilityService.defaultMachineName] = {}
//                 envConfig.storefrontConfigs.KioskConfigs[storefrontUtilityService.defaultMachineName].AllowCreditCardInputWhenDeviceDisabled = false;

//                 storefrontUtilityService.webStoreData = {
//                     sessionId: 0,
//                     selectedItemIds: [],
//                     currentItemName: "name",
//                     currentItemId: 1,
//                     fullSiteMode: false,
//                     completedItemIds: [],
//                     shellUserInitialized: true
//                 } as HCTRA.Storefront.Service.IStorefrontWebStorage;

//                 triPosStatus.active = false;
//                 vantivPaymentServiceResponse.cardLogo = "VISA";

//                 return buildScope().then(() => {

//                     return service.update(scope)
//                         .then(() => {
//                             fail("update should have failed");
//                         })
//                         .catch(() => {
//                             expect(vantivPaymentServiceMock.getTokenizedCreditCardData).not.toHaveBeenCalled();
//                         })
//                         .finally(() => {

//                             expect(scope.creditCardNumberDisabled).toBeTruthy();
//                             expect(scope.creditCardExpYearDisabled).toBeTruthy();
//                             expect(scope.creditCardExpMothDisabled).toBeTruthy();
//                         });
//                 }).catch(e => {
//                     fail(e);
//                 });
//             });


//             it("should allow CC input if default is configured so", () => {

//                 envConfig.vantivConfig.IFrameEnabled = true;
//                 storefrontUtilityService.isRunningAsKiosk = true;
//                 storefrontUtilityService.isSecureCardInputAvailable = true;
//                 storefrontUtilityService.storefrontLocation = HCTRA.Model.StoreLocations.TNO;
//                 storefrontUtilityService.machineName = storefrontUtilityService.defaultMachineName;

//                 envConfig.storefrontConfigs.KioskConfigs = {};
//                 envConfig.storefrontConfigs.KioskConfigs[storefrontUtilityService.defaultMachineName] = {}
//                 envConfig.storefrontConfigs.KioskConfigs[storefrontUtilityService.defaultMachineName].AllowCreditCardInputWhenDeviceDisabled = true;

//                 storefrontUtilityService.webStoreData = {
//                     sessionId: 0,
//                     selectedItemIds: [],
//                     currentItemName: "name",
//                     currentItemId: 1,
//                     fullSiteMode: false,
//                     completedItemIds: [],
//                     shellUserInitialized: true
//                 } as HCTRA.Storefront.Service.IStorefrontWebStorage;

//                 triPosStatus.active = false;
//                 triPosStatus.allowCreditCardInputWhenDeviceDisabled = true;
//                 vantivPaymentServiceResponse.cardLogo = "VISA";

//                 return buildScope().then(() => {
//                     expect(scope.strategyUsed).toBe(HCTRA.Model.CreditCardInputStrategyEnum.Iframe);
//                     expect(scope.creditCardNumberDisabled).toBeFalsy();
//                     expect(scope.creditCardExpYearDisabled).toBeFalsy();
//                     expect(scope.creditCardExpMothDisabled).toBeFalsy();
//                 }).catch(e => {
//                     fail(e);
//                 });

//             });

//             it("should not wipe credit card name if change was detected", () => {
//                 storefrontUtilityService.isRunningAsKiosk = true;
//                 storefrontUtilityService.isSecureCardInputAvailable = true;
//                 storefrontUtilityService.storefrontLocation = HCTRA.Model.StoreLocations.TNO;
//                 storefrontUtilityService.machineName = "TestKiosk";
//                 storefrontUtilityService.webStoreData = {
//                     sessionId: 0,
//                     selectedItemIds: [],
//                     currentItemName: "name",
//                     currentItemId: 1,
//                     fullSiteMode: false,
//                     completedItemIds: [],
//                     shellUserInitialized: true
//                 } as HCTRA.Storefront.Service.IStorefrontWebStorage;
                

//                 triPosStatus.active = true;

//                 vantivPaymentServiceResponse.cardHolderName = "Lastname/Firstname I";

//                 //set
//                 return buildScope({
//                     nameOnCard: "TEST TEST"
//                 }).then(() => {

//                     //change
//                     scope.$apply();
//                     expect(scope.detectedCreditCardNameChange).toBe(false);                    
//                     scope.creditCard.nameOnCard = "TEST2 TEST2";
//                     scope.$apply();
//                     expect(scope.detectedCreditCardNameChange).toBe(true);

//                     return service.update(scope);
//                     }).then(() => {
//                         scope.$apply();
//                         expect(scope.creditCard.nameOnCard).toBe("TEST2 TEST2");
//                     });
//             });

//             it("should wipe credit card name if no change was detected", () => {
//                 storefrontUtilityService.isRunningAsKiosk = true;
//                 storefrontUtilityService.isSecureCardInputAvailable = true;
//                 storefrontUtilityService.storefrontLocation = HCTRA.Model.StoreLocations.TNO;
//                 storefrontUtilityService.machineName = "TestKiosk";
//                 storefrontUtilityService.webStoreData = {
//                     sessionId: 0,
//                     selectedItemIds: [],
//                     currentItemName: "name",
//                     currentItemId: 1,
//                     fullSiteMode: false,
//                     completedItemIds: [],
//                     shellUserInitialized: true
//                 } as HCTRA.Storefront.Service.IStorefrontWebStorage;


//                 triPosStatus.active = true;

//                 vantivPaymentServiceResponse.cardHolderName = "Lastname/Firstname I";

//                 //set
//                 return buildScope({
//                     nameOnCard: "TEST TEST"
//                 }).then(() => {
//                     //no change!
//                     scope.$apply();
//                     return service.update(scope);
//                     }).then(() => {  
//                         scope.$apply();                  
//                     expect(scope.creditCard.nameOnCard).toBe("Firstname I Lastname");
//                     });
//             });

//             it("should flag use existing card as false if swipe changes card number", () => {
//                 storefrontUtilityService.isRunningAsKiosk = true;
//                 storefrontUtilityService.isSecureCardInputAvailable = true;
//                 storefrontUtilityService.storefrontLocation = HCTRA.Model.StoreLocations.TNO;
//                 storefrontUtilityService.machineName = "TestKiosk";
//                 storefrontUtilityService.webStoreData = {
//                     sessionId: 0,
//                     selectedItemIds: [],
//                     currentItemName: "name",
//                     currentItemId: 1,
//                     fullSiteMode: false,
//                     completedItemIds: [],
//                     shellUserInitialized: true
//                 } as HCTRA.Storefront.Service.IStorefrontWebStorage;


//                 triPosStatus.active = true;

//                 vantivPaymentServiceResponse.cardHolderName = "Lastname/Firstname I";
//                 vantivPaymentServiceResponse.accountNumber = "************-1234";

//                 //set
//                 return buildScope({
//                     nameOnCard: "TEST TEST",
//                     cardNbr: "************-5309"
//                 }).then(() => {
//                     scope.$apply();
//                     expect(scope.useExistingCard).toBe(true);
//                     expect(scope.creditCard.cardNbr).toBe("************-5309");
                    
//                     return service.update(scope);
//                     }).then(() => {
//                         scope.$apply();
//                         expect(scope.useExistingCard).toBe(false);
//                         expect(scope.creditCard.cardNbr).toBe("************-1234");
//                     });
//             });
//         });

//     });
// }());