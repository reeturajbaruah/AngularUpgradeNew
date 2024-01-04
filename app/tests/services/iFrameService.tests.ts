// declare var hctraMocks: any;

// (() => {
//     'use strict';

//     describe('IFrameService', () => {

//         beforeEach(angular.mock.module('HCTRAModule'));

//         beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {
//             $provide.value('genericRepo', {});
//             $provide.value('responseErrorService', jasmine.createSpyObj('responseErrorService', ['displayToast']));
//         }));

//         let service: HCTRA.Service.IFrameService;

//         describe('getConfiguration', () => {
//             let mockEprotectIframeClientService;
//             let mockEnvironmentConfigService;

//             beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {

//                 mockEprotectIframeClientService = hctraMocks.eprotectIframeClientService();
//                 mockEnvironmentConfigService = hctraMocks.environmentConfig();

//                 $provide.value('eprotectIframeClientService', mockEprotectIframeClientService);
//                 $provide.constant('environmentConfig', mockEnvironmentConfigService);
//             }));

//             beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {

//                 service = $injector.get<HCTRA.Service.IFrameService>('iFrameService');
//             }));

//             it('should return correct configuration object', () => {
//                 const getPaypageRegistrationIdCallback = () => { };
//                 const inputsEmptyCallback = () => { };

//                 expect(service.getConfiguration('myStyle', '1000', 'theDiv', 'cardNumber', getPaypageRegistrationIdCallback, inputsEmptyCallback)).toEqual({
//                     paypageId: mockEnvironmentConfigService.vantivConfig.PayPageID,
//                     style: 'myStyle',
//                     height: '1000',
//                     reportGroup: mockEnvironmentConfigService.vantivConfig.ReportGroup,
//                     timeout: mockEnvironmentConfigService.vantivConfig.TimeoutMilliSeconds,
//                     div: 'theDiv',
//                     callback: getPaypageRegistrationIdCallback,
//                     inputsEmptyCallback: inputsEmptyCallback,
//                     showCvv: false,
//                     htmlTimeout: mockEnvironmentConfigService.vantivConfig.TimeoutMilliSeconds,
//                     placeholderText: {
//                         accountNumber: 'cardNumber'
//                     },
//                     enhancedUxFeatures: {
//                         inlineFieldValidations: true,
//                         numericInputsOnly: true
//                     }
//                 });
//             });
//         });

//         describe('generatePseudoRandomNumber', () => {

//             let mockEprotectIframeClientService;
//             let mockEnvironmentConfigService;

//             beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {

//                 mockEprotectIframeClientService = hctraMocks.eprotectIframeClientService();
//                 mockEnvironmentConfigService = hctraMocks.environmentConfig();

//                 $provide.value('eprotectIframeClientService', mockEprotectIframeClientService);
//                 $provide.constant('environmentConfig', mockEnvironmentConfigService);
//             }));

//             beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {

//                 service = $injector.get<HCTRA.Service.IFrameService>('iFrameService');
//             }));

//             it('should return a pseduoRandom number', () => {

//                 const now = new Date();
//                 const expectedResult = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getMilliseconds());

//                 expect(service.generatePseudoRandomNumber(now)).toEqual(expectedResult);
//             });
//         });

//         describe('getMessage', () => {

//             let mockEprotectIframeClientService;
//             let mockEnvironmentConfigService;

//             beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {

//                 mockEprotectIframeClientService = hctraMocks.eprotectIframeClientService();
//                 mockEnvironmentConfigService = hctraMocks.environmentConfig();

//                 $provide.value('eprotectIframeClientService', mockEprotectIframeClientService);
//                 $provide.constant('environmentConfig', mockEnvironmentConfigService);
//             }));

//             beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {

//                 service = $injector.get<HCTRA.Service.IFrameService>('iFrameService');
//             }));

//             [
//                 [1, { id: 'T1', orderId: 1 }],
//                 [2, { id: 'T2', orderId: 2 }],
//                 [3, { id: 'T3', orderId: 3 }],
//                 [4, { id: 'T4', orderId: 4 }]
//             ].forEach((input: [number, { id: string, orderId: number }]) => {

//                 const randomNumber = input[0] as number;
//                 const message = input[1];

//                 it(`should return ${message} when ${randomNumber} supplied`, () => {
//                     expect(service.getMessage(randomNumber)).toEqual(message);
//                 });
//             });
//         });

//         describe('logRequest', () => {

//             let mockEprotectIframeClientService;
//             let mockEnvironmentConfigService;
//             let mockGenericRepo;
//             let genericRepoSpy;

//             beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {

//                 mockEprotectIframeClientService = hctraMocks.eprotectIframeClientService();
//                 mockEnvironmentConfigService = hctraMocks.environmentConfig();
//                 mockGenericRepo = hctraMocks.genericRepo();

//                 $provide.value('eprotectIframeClientService', mockEprotectIframeClientService);
//                 $provide.constant('environmentConfig', mockEnvironmentConfigService);
//                 $provide.value('genericRepo', mockGenericRepo);
//             }));

//             beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {

//                 service = $injector.get<HCTRA.Service.IFrameService>('iFrameService');

//                 genericRepoSpy = spyOn(mockGenericRepo.dataFactory, 'LogVantivRequest');
//             }));

//             it('should log the request when this.environmentConfig.vantivConfig.InfoToggle true', () => {

//                 mockEnvironmentConfigService.vantivConfig.InfoToggle = true;

//                 service.logRequest({ id: 'id', orderId: 'orderId' });

//                 expect(genericRepoSpy).toHaveBeenCalledWith({
//                     'paypageId': mockEnvironmentConfigService.vantivConfig.PayPageID,
//                     'reportGroup': mockEnvironmentConfigService.vantivConfig.ReportGroup,
//                     'requestId': 'id',
//                     'orderId': 'orderId',
//                     'url': mockEnvironmentConfigService.vantivConfig.IFrameUrl
//                 });
//             });

//             it('should not log the request when this.environmentConfig.vantivConfig.InfoToggle false', () => {

//                 mockEnvironmentConfigService.vantivConfig.InfoToggle = false;

//                 service.logRequest({ id: 'id', orderId: 'orderId' });

//                 expect(genericRepoSpy).not.toHaveBeenCalled();
//             });
//         });

//         describe('getPaypageRegistrationId', () => {

//             let mockEprotectIframeClientService;
//             let mockEnvironmentConfigService;
//             let getMessageSpy;
//             let generatePseudoRandomNumberSpy;
//             let generateSeedDateSpy;
//             let logRequestSpy;
//             let $scope;
//             let serviceInstance;

//             beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {

//                 mockEprotectIframeClientService = hctraMocks.eprotectIframeClientService();
//                 mockEnvironmentConfigService = hctraMocks.environmentConfig();

//                 $provide.value('eprotectIframeClientService', mockEprotectIframeClientService);
//                 $provide.constant('environmentConfig', mockEnvironmentConfigService);
//             }));

//             beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService, _$rootScope_) => {

//                 service = $injector.get<HCTRA.Service.IFrameService>('iFrameService');
//                 serviceInstance = service.getIFrameServiceInstance();

//                 $scope = _$rootScope_.$new();
//                 getMessageSpy = spyOn(service, 'getMessage');
//                 generatePseudoRandomNumberSpy = spyOn(service, 'generatePseudoRandomNumber');
//                 generateSeedDateSpy = spyOn(service, 'generateSeedDate');
//                 logRequestSpy = spyOn(service, 'logRequest');
//             }));

//             it('should call functions with correct arguments when not isBlocked ', (done) => {

//                 generateSeedDateSpy.and.returnValue('seedDate');
//                 generatePseudoRandomNumberSpy.and.returnValue('randomNumber');
//                 getMessageSpy.and.returnValue('message');

//                 serviceInstance.isBlocked = false;

//                 serviceInstance.payframeClient = {
//                     getPaypageRegistrationId: (message) => {
//                         expect(serviceInstance.isBlocked).toBe(true);
//                         expect(serviceInstance.message).toEqual('message');
//                         expect(generateSeedDateSpy).toHaveBeenCalledWith();
//                         expect(generatePseudoRandomNumberSpy).toHaveBeenCalledWith('seedDate');
//                         expect(getMessageSpy).toHaveBeenCalledWith('randomNumber');
//                         expect(logRequestSpy).toHaveBeenCalledWith('message');
//                         expect(message).toEqual('message');
//                         done();
//                     }
//                 }

//                 serviceInstance.getPaypageRegistrationId();
//             }, 100);

//             it('should set the serviceInstance.deferGetPaypageRegistrationId and return the promise on the serviceInstance.deferGetPaypageRegistrationId property when not isBlocked ', (done) => {

//                 generateSeedDateSpy.and.returnValue('seedDate');
//                 generatePseudoRandomNumberSpy.and.returnValue('randomNumber');
//                 getMessageSpy.and.returnValue('message');

//                 serviceInstance.isBlocked = false;

//                 serviceInstance.payframeClient = { getPaypageRegistrationId: () => { } }

//                 const promise = serviceInstance.getPaypageRegistrationId();

//                 promise.then(
//                     () => done(),
//                     () => fail('serviceInstance.deferGetPaypageRegistrationId was rejected unexpectedly'));

//                 serviceInstance.deferGetPaypageRegistrationId.resolve();
//                 $scope.$apply();
//             }, 100);

//             it('should return a rejected promise without doing anything when isBlocked', (done) => {

//                 generateSeedDateSpy.and.callFake(() => fail('generateSeedDate was called when blocked'));
//                 generatePseudoRandomNumberSpy.and.callFake(() => fail('generatePseudoRandomNumber was called when blocked'));
//                 getMessageSpy.and.callFake(() => fail('getMessage was called when blocked'));
//                 logRequestSpy.and.callFake(() => fail('logRequest was called when blocked'));

//                 serviceInstance.isBlocked = true;

//                 serviceInstance.payframeClient = {
//                     getPaypageRegistrationId: () => {
//                         fail('Called payframeClient.getPaypageRegistrationId when blocked');
//                     }
//                 }

//                 const promise = serviceInstance.getPaypageRegistrationId();

//                 promise.then(
//                     () => fail('returned promise was resolved when it should have been rejected'),
//                     () => done());

//                 $scope.$apply();
//             }, 100);

//             it('should throw an exception when service.payframeClient not defined', () => {

//                 generateSeedDateSpy.and.returnValue('seedDate');
//                 generatePseudoRandomNumberSpy.and.returnValue('randomNumber');
//                 getMessageSpy.and.returnValue('message');

//                 serviceInstance.isBlocked = false;

//                 expect(() => serviceInstance.getPaypageRegistrationId()).toThrowError();
//             });
//         });

//         describe('isTimeoutError', () => {

//             let mockEprotectIframeClientService;
//             let mockEnvironmentConfigService;

//             beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {

//                 mockEprotectIframeClientService = hctraMocks.eprotectIframeClientService();
//                 mockEnvironmentConfigService = hctraMocks.environmentConfig();

//                 $provide.value('eprotectIframeClientService', mockEprotectIframeClientService);
//                 $provide.constant('environmentConfig', mockEnvironmentConfigService);
//             }));

//             beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {

//                 service = $injector.get<HCTRA.Service.IFrameService>('iFrameService');
//             }));

//             [
//                 { response: '884', timeout: true },
//                 { response: '1', timeout: true },
//                 { response: '884', timeout: false },
//                 { timeout: true },
//                 { response: '884' }
//             ].forEach((response: any) => {

//                 it(`should return true when response.response === '${response.response}' and response.timeout'${response.timeout}' `, () => {
//                     expect(service.isTimeoutError(response)).toBe(true);
//                 });
//             });

//             [
//                 { response: '885', timeout: false },
//                 { response: '1' },
//                 { timeout: false },
//                 {}
//             ].forEach((response: any) => {

//                 it(`should return false when response.response === '${response.response}' and response.timeout'${response.timeout}' `, () => {
//                     expect(service.isTimeoutError(response)).toBe(false);
//                 });
//             });
//         });

//         describe('isSuccess', () => {

//             let mockEprotectIframeClientService;
//             let mockEnvironmentConfigService;

//             beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {

//                 mockEprotectIframeClientService = hctraMocks.eprotectIframeClientService();
//                 mockEnvironmentConfigService = hctraMocks.environmentConfig();

//                 $provide.value('eprotectIframeClientService', mockEprotectIframeClientService);
//                 $provide.constant('environmentConfig', mockEnvironmentConfigService);
//             }));

//             beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {

//                 service = $injector.get<HCTRA.Service.IFrameService>('iFrameService');
//             }));

//             it(`should return true when response.response === '870'`, () => {
//                 expect(service.isSuccess({ response: '870' } as HCTRA.Model.VantivResponse)).toBe(true);
//             });

//             [
//                 { response: '884' },
//                 { response: '1' },
//                 { response: '871' },
//                 { response: '814' },
//                 {}
//             ].forEach((response: any) => {

//                 it(`should return false when response.response === '${response.response}'`, () => {
//                     expect(service.isSuccess(response)).toBe(false);
//                 });
//             });
//         });

//         describe('isResponseToBeLogged', () => {

//             let mockEprotectIframeClientService;
//             let mockEnvironmentConfigService;
//             let isSuccessSpy;

//             beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {

//                 mockEprotectIframeClientService = hctraMocks.eprotectIframeClientService();
//                 mockEnvironmentConfigService = hctraMocks.environmentConfig();

//                 $provide.value('eprotectIframeClientService', mockEprotectIframeClientService);
//                 $provide.constant('environmentConfig', mockEnvironmentConfigService);
//             }));

//             beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {

//                 service = $injector.get<HCTRA.Service.IFrameService>('iFrameService');

//                 isSuccessSpy = spyOn(service, 'isSuccess');
//             }));

//             [
//                 { infoToggle: false, errorToggle: true, isSuccess: false },
//                 { infoToggle: true, errorToggle: false, isSuccess: true },
//                 { infoToggle: true, errorToggle: false, isSuccess: false },
//                 { infoToggle: true, errorToggle: true, isSuccess: true },
//                 { infoToggle: true, errorToggle: true, isSuccess: false }
//             ].forEach((input) => {

//                 it(`should return true when vantivConfig.InfoToggle === ${input.infoToggle}, vantivConfig.ErrorToggle ${input.errorToggle} and isTimeoutError return ${input.isSuccess}`, () => {
//                     mockEnvironmentConfigService.vantivConfig.InfoToggle = input.infoToggle;
//                     mockEnvironmentConfigService.vantivConfig.ErrorToggle = input.errorToggle;
//                     isSuccessSpy.and.returnValue(input.isSuccess);

//                     expect(service.isResponseToBeLogged({} as HCTRA.Model.VantivResponse)).toBe(true);
//                 });
//             });

//             [
//                 { infoToggle: false, errorToggle: false, isSuccess: true },
//                 { infoToggle: false, errorToggle: false, isSuccess: false },
//                 { infoToggle: false, errorToggle: true, isSuccess: true }
//             ].forEach((input) => {

//                 it(`should return true when vantivConfig.InfoToggle === ${input.infoToggle}, vantivConfig.ErrorToggle ${input.errorToggle} and isTimeoutError return ${input.isSuccess}`, () => {
//                     mockEnvironmentConfigService.vantivConfig.InfoToggle = input.infoToggle;
//                     mockEnvironmentConfigService.vantivConfig.ErrorToggle = input.errorToggle;
//                     isSuccessSpy.and.returnValue(input.isSuccess);

//                     expect(service.isResponseToBeLogged({} as HCTRA.Model.VantivResponse)).toBe(false);
//                 });
//             });
//         });

//         describe('logResponse', () => {

//             let mockEprotectIframeClientService;
//             let mockEnvironmentConfigService;
//             let mockGenericRepo;
//             let genericRepoSpy;
//             let isResponseToBeLoggedSpy;
//             let isSuccessSpy;

//             beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {

//                 mockEprotectIframeClientService = hctraMocks.eprotectIframeClientService();
//                 mockEnvironmentConfigService = hctraMocks.environmentConfig();
//                 mockGenericRepo = hctraMocks.genericRepo();

//                 $provide.value('eprotectIframeClientService', mockEprotectIframeClientService);
//                 $provide.constant('environmentConfig', mockEnvironmentConfigService);
//                 $provide.value('genericRepo', mockGenericRepo);
//             }));

//             beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {

//                 service = $injector.get<HCTRA.Service.IFrameService>('iFrameService');

//                 genericRepoSpy = spyOn(mockGenericRepo.dataFactory, 'LogVantivResponse');
//                 isResponseToBeLoggedSpy = spyOn(service, 'isResponseToBeLogged');
//                 isSuccessSpy = spyOn(service, 'isSuccess');
//             }));

//             it('should not log the response when isResponseToBeLogged returns false', () => {

//                 isResponseToBeLoggedSpy.and.returnValue(false);

//                 service.logResponse({ id: 'id', orderId: 'orderId' } as HCTRA.Model.VantivResponse, {});

//                 expect(genericRepoSpy).not.toHaveBeenCalled();
//             });

//             it('should log message as \'Request for Paypage Registration Id Timed Out\' when response.timeout is true', (done) => {

//                 isResponseToBeLoggedSpy.and.returnValue(true);
//                 genericRepoSpy.and.callFake((response) => {
//                     expect(response.message).toEqual('Request for Paypage Registration Id Timed Out');
//                     done();
//                 })

//                 service.logResponse({ timeout: true } as HCTRA.Model.VantivResponse, {});
//             }, 100);

//             it('should log isError false when isSuccess returns false', (done) => {

//                 isResponseToBeLoggedSpy.and.returnValue(true);
//                 isSuccessSpy.and.returnValue(false);

//                 genericRepoSpy.and.callFake((response) => {
//                     expect(response.isError).toEqual(true);
//                     done();
//                 })

//                 service.logResponse({} as HCTRA.Model.VantivResponse, {});
//             }, 100);

//             it('should log isError false when isSuccess returns true', (done) => {

//                 isResponseToBeLoggedSpy.and.returnValue(true);
//                 isSuccessSpy.and.returnValue(true);

//                 genericRepoSpy.and.callFake((response) => {
//                     expect(response.isError).toEqual(false);
//                     done();
//                 })

//                 service.logResponse({} as HCTRA.Model.VantivResponse, {});
//             }, 100);

//             it('should log data when available', () => {

//                 isResponseToBeLoggedSpy.and.returnValue(true);
//                 isSuccessSpy.and.returnValue(false);

//                 const response = {
//                     'reportGroup': 'responsereportGroup',
//                     'response': 'response',
//                     'message': 'message',
//                     'responseTime': 'responseTime',
//                     'vantivTxnId': 'vantivTxnId',
//                     'paypageRegistrationId': 'paypageRegistrationId',
//                     'targetServer': 'targetServer',
//                     'type': 'type'
//                 } as HCTRA.Model.VantivResponse;

//                 const message = {
//                     'id': 'responseid',
//                     'orderId': 'responseorderId'
//                 }

//                 service.logResponse(response, message);

//                 expect(genericRepoSpy).toHaveBeenCalledWith({
//                     'id': message.id,
//                     'orderId': message.orderId,
//                     'reportGroup': mockEnvironmentConfigService.vantivConfig.ReportGroup,
//                     'response': response.response,
//                     'message': response.message,
//                     'responseTime': response.responseTime,
//                     'vantivTxnId': response.vantivTxnId,
//                     'paypageRegistrationId': response.paypageRegistrationId,
//                     'targetServer': response.targetServer,
//                     'type': response.type,
//                     'isError': true,
//                     'violationsData': null
//                 });
//             });
//         });

//         describe('callbackWithLogger', () => {

//             let mockEprotectIframeClientService;
//             let mockEnvironmentConfigService;
//             let mockSiteVerbiage;
//             let mockResponseErrorService;
//             let logResponseSpy;
//             let isSuccessSpy;
//             let isTimeoutErrorSpy;
//             let displayToastSpy;
//             let $scope;
//             let $q;
//             let serviceInstance;

//             beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {

//                 mockEprotectIframeClientService = hctraMocks.eprotectIframeClientService();
//                 mockEnvironmentConfigService = hctraMocks.environmentConfig();
//                 mockResponseErrorService = hctraMocks.responseErrorService();
//                 mockSiteVerbiage = hctraMocks.siteVerbiage();

//                 $provide.value('eprotectIframeClientService', mockEprotectIframeClientService);
//                 $provide.constant('environmentConfig', mockEnvironmentConfigService);
//                 $provide.value('responseErrorService', mockResponseErrorService);
//                 $provide.constant('siteVerbiage', mockSiteVerbiage);
//             }));

//             beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService, _$rootScope_, _$q_) => {

//                 service = $injector.get<HCTRA.Service.IFrameService>('iFrameService');
//                 serviceInstance = service.getIFrameServiceInstance();

//                 $scope = _$rootScope_.$new();
//                 $q = _$q_
//                 logResponseSpy = spyOn(service, 'logResponse');
//                 isSuccessSpy = spyOn(service, 'isSuccess');
//                 isTimeoutErrorSpy = spyOn(service, 'isTimeoutError');
//                 displayToastSpy = spyOn(mockResponseErrorService, 'displayToast')
//             }));

//             it('should call logResponse with response and reset isBlocked ', () => {

//                 serviceInstance.isBlocked = true;
//                 serviceInstance.message = {};

//                 serviceInstance.callbackWithLogger('response');

//                 expect(logResponseSpy).toHaveBeenCalledWith('response', {});
//                 expect(serviceInstance.isBlocked).toBe(false);
//             });

//             it('should call displayToast when isTimeout returns true ', () => {

//                 isTimeoutErrorSpy.and.returnValue(true);
//                 serviceInstance.message = {};

//                 serviceInstance.callbackWithLogger('response', {});

//                 expect(isTimeoutErrorSpy).toHaveBeenCalledWith('response');
//                 expect(displayToastSpy).toHaveBeenCalledWith(mockSiteVerbiage.genericErrorMsg, 'error', false);
//             });

//             it('should not call displayToast when isTimeout returns false ', () => {

//                 isTimeoutErrorSpy.and.returnValue(false);
//                 serviceInstance.message = {};

//                 serviceInstance.callbackWithLogger('response');

//                 expect(isTimeoutErrorSpy).toHaveBeenCalledWith('response');
//                 expect(displayToastSpy).not.toHaveBeenCalled();
//             });

//             it('should call resolve on serviceInstance.deferGetPaypageRegistrationId when isSuccess returns true ', (done) => {

//                 isSuccessSpy.and.returnValue(true);
//                 serviceInstance.message = {};
//                 serviceInstance.deferGetPaypageRegistrationId = $q.defer();

//                 serviceInstance.callbackWithLogger({ response: '870' });

//                 serviceInstance.deferGetPaypageRegistrationId.promise.then(
//                     () => done(),
//                     () => fail('serviceInstance.deferGetPaypageRegistrationId was rejected unexpectedly'));

//                 $scope.$apply();
//             }, 100);

//             it(`should call reject when isSuccess returns false`, (done) => {

//                 isSuccessSpy.and.returnValue(false);
//                 serviceInstance.message = {};
//                 serviceInstance.deferGetPaypageRegistrationId = $q.defer();

//                 serviceInstance.callbackWithLogger('response');

//                 serviceInstance.deferGetPaypageRegistrationId.promise.then(
//                     () => fail('promise was resolved when it should have been rejected'),
//                     () => done());

//                 $scope.$apply();
//             }, 100);
//         });

//         describe('inputsEmptyCallback', () => {

//             let $scope;
//             let $q;
//             let mockEprotectIframeClientService;
//             let mockEnvironmentConfigService;
//             let serviceInstance;

//             beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {

//                 mockEprotectIframeClientService = hctraMocks.eprotectIframeClientService();
//                 mockEnvironmentConfigService = hctraMocks.environmentConfig();

//                 $provide.value('eprotectIframeClientService', mockEprotectIframeClientService);
//                 $provide.constant('environmentConfig', mockEnvironmentConfigService);
//             }));

//             beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService, _$rootScope_, _$q_) => {

//                 $scope = _$rootScope_.$new();
//                 $q = _$q_;

//                 service = $injector.get<HCTRA.Service.IFrameService>('iFrameService');
//                 serviceInstance = service.getIFrameServiceInstance();
//             }));

//             it('should resolve deferInputsEmpty with allInputsEmpty property from the passed argument', (done) => {

//                 serviceInstance.deferInputsEmpty = $q.defer();

//                 serviceInstance.deferInputsEmpty.promise.then(
//                     (response) => {
//                         expect(response).toBe(true);
//                         done()
//                     },
//                     () => fail('should never reject'));

//                 serviceInstance.inputsEmptyCallback({ allInputsEmpty: true });

//                 $scope.$apply();
//             }, 100);
//         });

//         describe('creditCardFieldEmpty', () => {

//             let $scope;
//             let mockEprotectIframeClientService;
//             let mockEnvironmentConfigService;
//             let serviceInstance;

//             beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {

//                 mockEprotectIframeClientService = hctraMocks.eprotectIframeClientService();
//                 mockEnvironmentConfigService = hctraMocks.environmentConfig();

//                 $provide.value('eprotectIframeClientService', mockEprotectIframeClientService);
//                 $provide.constant('environmentConfig', mockEnvironmentConfigService);
//             }));

//             beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService, _$rootScope_) => {

//                 $scope = _$rootScope_.$new();
//                 service = $injector.get<HCTRA.Service.IFrameService>('iFrameService');
//                 serviceInstance = service.getIFrameServiceInstance();
//             }));

//             it('should return a promise if iFrameServiceInstance isBlocked ', () => {

//                 serviceInstance.isBlocked = true;
//                 serviceInstance.payframeClient = {
//                     allInputsEmpty: () => { }
//                 }

//                 serviceInstance.creditCardFieldEmpty().then(
//                     () => fail('promise was resolved when nothing should have happended'),
//                     () => fail('promise was rejected when nothing should have happended'));

//                 const tryResolve = () => serviceInstance.deferInputsEmpty && serviceInstance.deferInputsEmpty.resolve();
//                 tryResolve();
//                 $scope.$apply();
//             });

//             it('should set deferInputsEmpty and call allInputsEmpty method of payframeClient when not blocked', (done) => {

//                 let allInputsEmptyCalled = false;
//                 serviceInstance.isBlocked = false;
//                 serviceInstance.payframeClient = {
//                     allInputsEmpty: () => allInputsEmptyCalled = true
//                 }

//                 serviceInstance.creditCardFieldEmpty().then(
//                     () => {
//                         expect(allInputsEmptyCalled).toBe(true);
//                         done();
//                     },
//                     () => fail('promise was rejected when it should have been resolved'));

//                 serviceInstance.deferInputsEmpty.resolve();

//                 $scope.$apply();
//             }, 100);
//         });

//         describe('loadIFrame', () => {

//             let mockEprotectIframeClientService;
//             let mockEnvironmentConfigService;
//             let getConfigurationSpy;
//             let eprotectIframeClientServiceSpy;
//             let serviceInstance;

//             beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {

//                 mockEprotectIframeClientService = hctraMocks.eprotectIframeClientService();
//                 mockEnvironmentConfigService = hctraMocks.environmentConfig();

//                 $provide.value('eprotectIframeClientService', mockEprotectIframeClientService);
//                 $provide.constant('environmentConfig', mockEnvironmentConfigService);
//             }));

//             beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {

//                 service = $injector.get<HCTRA.Service.IFrameService>('iFrameService');
//                 serviceInstance = service.getIFrameServiceInstance();

//                 getConfigurationSpy = spyOn(service, 'getConfiguration');
//                 eprotectIframeClientServiceSpy = spyOn(mockEprotectIframeClientService, 'EprotectIframeClient');

//             }));

//             it('should call functions with correct arguments, reset isBlocked and set serviceInstance.payframeClient', () => {

//                 const payframeClient = {};

//                 getConfigurationSpy.and.returnValue('configuration');
//                 eprotectIframeClientServiceSpy.and.returnValue(payframeClient);

//                 expect(serviceInstance.loadIFrame('myStyle', '1000', 'theDiv', '')).toEqual(undefined);
//                 expect(serviceInstance.isBlocked).toBe(false);
//                 expect(getConfigurationSpy).toHaveBeenCalledWith('myStyle', '1000', 'theDiv', '', serviceInstance.callbackWithLogger, serviceInstance.inputsEmptyCallback);
//                 expect(serviceInstance.payframeClient).toEqual(payframeClient);
//             });
//         });

//         describe('getIFrameServiceInstance', () => {

//             let mockEprotectIframeClientService;
//             let mockEnvironmentConfigService;
//             let $scope;
//             let serviceInstance;

//             beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {

//                 mockEprotectIframeClientService = hctraMocks.eprotectIframeClientService();
//                 mockEnvironmentConfigService = hctraMocks.environmentConfig();

//                 $provide.value('eprotectIframeClientService', mockEprotectIframeClientService);
//                 $provide.constant('environmentConfig', mockEnvironmentConfigService);
//             }));

//             beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService, _$rootScope_) => {

//                 service = $injector.get<HCTRA.Service.IFrameService>('iFrameService');
//                 serviceInstance = service.getIFrameServiceInstance();
//                 $scope = _$rootScope_.$new();
//             }));

//             it('should be blocked when created', () => {

//                 expect(serviceInstance.isBlocked).toBe(true);
//             });

//             it('should set message to empty object', () => {

//                 expect(serviceInstance.message).toEqual({});
//             });

//             it('should set serviceInstance.deferGetPaypageRegistrationId to a deferred object', (done) => {
//                 const deferred = serviceInstance.deferGetPaypageRegistrationId;

//                 deferred.promise.then(
//                     () => fail('returned promise was resolved when it should have been rejected'),
//                     () => done());

//                 deferred.reject();
//                 $scope.$apply();
//             }, 100);

//             it('should set payframe client undefined', () => {

//                 expect(serviceInstance.payframeClient).toBe(undefined);
//             });
//         });

//     });
// })();