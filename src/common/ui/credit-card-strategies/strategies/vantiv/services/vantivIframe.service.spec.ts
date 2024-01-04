import { ToasterService } from 'common/services';
import { ToggleButtonsService } from '../../../../../services/toggleButtons/toggleButtons.service';
import { VantivIFrameService } from './vantivIframe.service';


describe('vantive IFrameService', () => {

    let toasterService: jasmine.SpyObj<ToasterService>;
    let environmentConfig: jasmine.SpyObj<any>;
    let genericRepo: any;
    let siteVerbiage: jasmine.SpyObj<any>;
    let toggleButtonsService: jasmine.SpyObj<ToggleButtonsService>;
    let vantiveEprotectClientFactory: jasmine.SpyObj<any>;

    let payframeClient: jasmine.SpyObj<any>;
    const stubResponse = {
        response: null,
        timeout: null
    };
    const allEmptyResponse = { allInputsEmpty: null };

    let service: VantivIFrameService;

    beforeEach(() => {
        toasterService = jasmine.createSpyObj('toasterService', ['show']);
        environmentConfig = {
            vantivConfig: {
                ErrorToggle: true
            }
        };
        genericRepo = {
            dataFactory: {
                LogVantivRequest: jasmine.createSpy('LogVantivRequest'),
                LogVantivResponse: jasmine.createSpy('LogVantivResponse'),
            }
        };
        siteVerbiage = {
            genericErrorMsg: 'test'
        };
        toggleButtonsService = jasmine.createSpyObj('toggleButtonsService', ['disableUntilResolved']);
        payframeClient = jasmine.createSpyObj('payframeClient', ['getPaypageRegistrationId', 'allInputsEmpty']);


        vantiveEprotectClientFactory = (config: { callback: any; inputsEmptyCallback: any }) => {

            payframeClient.getPaypageRegistrationId.and.callFake(() => {
                config.callback(stubResponse);
            });

            payframeClient.allInputsEmpty.and.callFake(() => {
                config.inputsEmptyCallback(allEmptyResponse);
            });

            return payframeClient;
        };

        service = new VantivIFrameService(
            environmentConfig,
            genericRepo,
            siteVerbiage,
            toggleButtonsService,
            vantiveEprotectClientFactory,
            toasterService
        );
    });

    describe('getConfiguration', () => {

        it('should return correct configuration object', () => {
            const getPaypageRegistrationIdCallback = () => { };
            const inputsEmptyCallback = () => { };

            const config = service
                .getConfiguration('myStyle', '1000', 'theDiv', 'cardNumber', getPaypageRegistrationIdCallback, inputsEmptyCallback);

            expect(config).toEqual({
                paypageId: environmentConfig.vantivConfig.PayPageID,
                style: 'myStyle',
                height: '1000',
                reportGroup: environmentConfig.vantivConfig.ReportGroup,
                timeout: environmentConfig.vantivConfig.TimeoutMilliSeconds,
                div: 'theDiv',
                callback: getPaypageRegistrationIdCallback,
                inputsEmptyCallback,
                showCvv: false,
                htmlTimeout: environmentConfig.vantivConfig.TimeoutMilliSeconds,
                placeholderText: {
                    accountNumber: 'cardNumber'
                },
                enhancedUxFeatures: {
                    inlineFieldValidations: true,
                    numericInputsOnly: true
                }
            });
        });
    });

    describe('getMessage', () => {

        [
            { rand: 1, id: 'T1', orderId: 1 },
            { rand: 2, id: 'T2', orderId: 2 },
            { rand: 3, id: 'T3', orderId: 3 },
            { rand: 4, id: 'T4', orderId: 4 }
        ].forEach(input => {

            const { rand, ...message } = input;

            it(`should return ${message} when ${rand} supplied`, () => {
                expect(service['getMessage'](rand)).toEqual(message);
            });
        });
    });

    describe('logRequest', () => {

        it('should log the request when this.environmentConfig.vantivConfig.InfoToggle true', () => {

            environmentConfig.vantivConfig.InfoToggle = true;

            service['logRequest']({ id: 'id', orderId: 'orderId' });

            expect(genericRepo.dataFactory.LogVantivRequest).toHaveBeenCalledWith({
                paypageId: environmentConfig.vantivConfig.PayPageID,
                reportGroup: environmentConfig.vantivConfig.ReportGroup,
                requestId: 'id',
                orderId: 'orderId',
                url: environmentConfig.vantivConfig.IFrameUrl,
                violationsData: null
            });
        });

        it('should not log the request when this.environmentConfig.vantivConfig.InfoToggle false', () => {

            environmentConfig.vantivConfig.InfoToggle = false;

            service['logRequest']({ id: 'id', orderId: 'orderId' });

            expect(genericRepo.dataFactory.LogVantivRequest).not.toHaveBeenCalled();
        });
    });

    describe('prepCallback', () => {

        it('updates the deferred object', async () => {

            const action = jasmine.createSpy('action', () => { });

            const defered = {} as any;

            const promise = service['prepCallback'](action, defered, { message: 'message' });

            expect(action).toHaveBeenCalled();

            expect(defered.resolve).toBeDefined();
            expect(defered.reject).toBeDefined();
            expect(defered.message).toEqual({ message: 'message' });

            defered.resolve({});

            await promise;
        });

    });

    describe('isTimeoutError', () => {

        [
            { response: '884', timeout: true },
            { response: '1', timeout: true },
            { response: '884', timeout: false },
            { timeout: true },
            { response: '884' }
        ].forEach((response: any) => {

            it(`should return true when response.response === '${response.response}' and response.timeout'${response.timeout}' `, () => {
                expect(service['isTimeoutError'](response)).toBe(true);
            });
        });

        [
            { response: '885', timeout: false },
            { response: '1' },
            { timeout: false },
            {}
        ].forEach((response: any) => {

            it(`should return false when response.response === '${response.response}' and response.timeout'${response.timeout}' `, () => {
                expect(service['isTimeoutError'](response)).toBe(false);
            });
        });
    });

    describe('isSuccess', () => {

        it(`should return true when response.response === '870'`, () => {
            expect(service['isSuccess']({
                response: '870',
                bin: null,
                firstSix: null,
                id: null,
                lastFour: null,
                litleTxnId: null,
                message: null,
                orderId: null,
                paypageRegistrationId: '',
                reportGroup: null,
                responseTime: '',
                targetServer: '',
                timeout: false,
                type: '',
                vantivTxnId: null
            })).toBe(true);
        });

        [
            { response: '884' },
            { response: '1' },
            { response: '871' },
            { response: '814' },
            {}
        ].forEach((response: any) => {

            it(`should return false when response.response === '${response.response}'`, () => {
                expect(service['isSuccess']({
                    response: response.response,
                    bin: null,
                    firstSix: null,
                    id: null,
                    lastFour: null,
                    litleTxnId: null,
                    message: null,
                    orderId: null,
                    paypageRegistrationId: '',
                    reportGroup: null,
                    responseTime: '',
                    targetServer: '',
                    timeout: false,
                    type: '',
                    vantivTxnId: null
                })).toBe(false);
            });
        });
    });

    describe('isResponseToBeLogged', () => {

        [
            { infoToggle: false, errorToggle: true, isSuccess: false },
            { infoToggle: true, errorToggle: false, isSuccess: true },
            { infoToggle: true, errorToggle: false, isSuccess: false },
            { infoToggle: true, errorToggle: true, isSuccess: true },
            { infoToggle: true, errorToggle: true, isSuccess: false }
        ].forEach((d) => {

            it(`should return true when info is ${d.infoToggle}, error ${d.errorToggle} and isTimeoutError is ${d.isSuccess}`, () => {
                environmentConfig.vantivConfig.InfoToggle = d.infoToggle;
                environmentConfig.vantivConfig.ErrorToggle = d.errorToggle;

                expect(service['isResponseToBeLogged']({
                    response: d.isSuccess ? '870' : '999',
                    bin: null,
                    firstSix: null,
                    id: null,
                    lastFour: null,
                    litleTxnId: null,
                    message: null,
                    orderId: null,
                    paypageRegistrationId: '',
                    reportGroup: null,
                    responseTime: '',
                    targetServer: '',
                    timeout: false,
                    type: '',
                    vantivTxnId: null
                })).toBe(true);
            });
        });

        [
            { infoToggle: false, errorToggle: false, isSuccess: true },
            { infoToggle: false, errorToggle: false, isSuccess: false },
            { infoToggle: false, errorToggle: true, isSuccess: true }
        ].forEach((d) => {

            it(`returns true: InfoToggle ${d.infoToggle}, ErrorToggle ${d.errorToggle}, isTimeoutError ${d.isSuccess}`, () => {
                environmentConfig.vantivConfig.InfoToggle = d.infoToggle;
                environmentConfig.vantivConfig.ErrorToggle = d.errorToggle;

                expect(service['isResponseToBeLogged']({
                    response: '870',
                    bin: null,
                    firstSix: null,
                    id: null,
                    lastFour: null,
                    litleTxnId: null,
                    message: null,
                    orderId: null,
                    paypageRegistrationId: '',
                    reportGroup: null,
                    responseTime: '',
                    targetServer: '',
                    timeout: d.isSuccess,
                    type: '',
                    vantivTxnId: null
                })).toBe(false);
            });
        });
    });

    describe('logResponse', () => {

        it(`should log message as 'Request for Paypage Registration Id Timed Out' when response.timeout is true`, () => {

            service['logResponse']({
                response: '999',
                bin: null,
                firstSix: null,
                id: null,
                lastFour: null,
                litleTxnId: null,
                message: null,
                orderId: null,
                paypageRegistrationId: '',
                reportGroup: null,
                responseTime: '',
                targetServer: '',
                timeout: true,
                type: '',
                vantivTxnId: null
            }, {});

            expect(genericRepo.dataFactory.LogVantivResponse).toHaveBeenCalled();
            const response = genericRepo.dataFactory.LogVantivResponse.calls.argsFor(0)[0];
            expect(response.message).toBe('Request for Paypage Registration Id Timed Out');
        });

        it('should log data when available', () => {

            const response = {
                reportGroup: 'responsereportGroup',
                response: '999',
                message: 'message',
                responseTime: 'responseTime',
                vantivTxnId: 'vantivTxnId',
                paypageRegistrationId: 'paypageRegistrationId',
                targetServer: 'targetServer',
                type: 'type'
            };

            const message = {
                id: 'responseid',
                orderId: 'responseorderId'
            };

            service['logResponse'](response, message);

            expect(genericRepo.dataFactory.LogVantivResponse).toHaveBeenCalledWith({
                id: message.id,
                orderId: message.orderId,
                reportGroup: environmentConfig.vantivConfig.ReportGroup,
                response: response.response,
                message: response.message,
                responseTime: response.responseTime,
                vantivTxnId: response.vantivTxnId,
                paypageRegistrationId: response.paypageRegistrationId,
                targetServer: response.targetServer,
                type: response.type,
                isError: true,
                violationsData: null
            });
        });
    });

    describe('callbackWithLogger', () => {

        beforeEach(() => {
            service.loadIFrame('', '', '', '');
        });

        it('should call logResponse with response ', async () => {

            environmentConfig.vantivConfig.InfoToggle = true;

            stubResponse.response = '870';

            await service.getPaypageRegistrationId();

            expect(genericRepo.dataFactory.LogVantivResponse).toHaveBeenCalled();
        });

        it('should call displayToast when isTimeout returns true ', async () => {

            stubResponse.response = '884';
            stubResponse.timeout = true;
            try {
                await service.getPaypageRegistrationId();
            } catch (e) {

            } finally {
                expect(toasterService.show).toHaveBeenCalledWith('Error', siteVerbiage.genericErrorMsg);
            }
        });

        it('should not call displayToast when isTimeout returns false ', async () => {

            stubResponse.response = '870';
            stubResponse.timeout = false;

            await service.getPaypageRegistrationId();

            expect(toasterService.show).not.toHaveBeenCalled();
        });

        it('should resolve when isSuccess returns true ', async () => {

            try {
                stubResponse.response = '870';
                const result = await service.getPaypageRegistrationId();
                expect(result).toBeDefined();
            } catch (e) {
                fail(e);
            }

        });

        it(`should reject when isSuccess returns false`, async () => {

            try {
                stubResponse.response = '999';
                await service.getPaypageRegistrationId();
                fail('promise was resolved when it should have been rejected');
            } catch (e) {
                expect(e).toBeDefined();
                //ok!
            }
        });
    });

    describe('inputsEmptyCallback', () => {

        beforeEach(() => {
            service.loadIFrame('', '', '', '');
        });

        it('should resolve with allInputsEmpty property from the passed argument', async () => {

            try {
                allEmptyResponse.allInputsEmpty = true;
                const isEmpty = await service.isAllEmpty();
                expect(isEmpty).toBe(true);
            } catch (e) {
                fail(e);
            }
        });
    });

    describe('getPaypageRegistrationId', () => {

        let generateSeedDateSpy;
        let generatePseudoRandomNumberSpy;
        let getMessageSpy;
        let logRequestSpy;
        let prepCallbackSpy: jasmine.Spy;

        beforeEach(() => {

            generateSeedDateSpy = spyOn(service as any, 'generateSeedDate').and.returnValue('fake seed');
            generatePseudoRandomNumberSpy = spyOn(service as any, 'generatePseudoRandomNumber').and.returnValue('fake random number');
            getMessageSpy = spyOn(service as any, 'getMessage').and.returnValue('fake message');
            logRequestSpy = spyOn(service as any, 'logRequest').and.returnValue('fake log request');
            prepCallbackSpy = spyOn(service as any, 'prepCallback').and.returnValue('fake promise');

            service['getPaypageRegistrationIdDefered'] = 'fake getPaypageRegistrationIdDefered' as any;
        });

        it('should call generateSeedDate', async () => {

            service.getPaypageRegistrationId();

            expect(generateSeedDateSpy).toHaveBeenCalledTimes(1);
        });

        it('should call generatePseudoRandomNumber with seed', async () => {

            service.getPaypageRegistrationId();

            expect(generatePseudoRandomNumberSpy).toHaveBeenCalledTimes(1);
            expect(generatePseudoRandomNumberSpy).toHaveBeenCalledWith('fake seed');
        });

        it('should call getMessage with fake random number', async () => {

            service.getPaypageRegistrationId();

            expect(getMessageSpy).toHaveBeenCalledTimes(1);
            expect(getMessageSpy).toHaveBeenCalledWith('fake random number');
        });

        it('should call prepCallback', async () => {

            service.getPaypageRegistrationId();
            service['payframeClient'] = jasmine.createSpyObj('payframeClient', ['getPaypageRegistrationId']);

            expect(prepCallbackSpy).toHaveBeenCalledTimes(1);
            expect(prepCallbackSpy).toHaveBeenCalledWith(
                jasmine.any(Function), 'fake getPaypageRegistrationIdDefered', 'fake message');

            expect(service['payframeClient'].getPaypageRegistrationId).toHaveBeenCalledTimes(0);

            prepCallbackSpy.calls.mostRecent().args[0]();

            expect(service['payframeClient'].getPaypageRegistrationId).toHaveBeenCalledTimes(1);
            expect(service['payframeClient'].getPaypageRegistrationId).toHaveBeenCalledWith('fake message');
        });

        it('should call toggleButtonsService.disableUntilResolved with fake promise', async () => {

            service.getPaypageRegistrationId();

            expect(toggleButtonsService.disableUntilResolved).toHaveBeenCalledTimes(1);
            expect(toggleButtonsService.disableUntilResolved).toHaveBeenCalledWith('fake promise' as any);
        });

        it('should return promise returned by prepCallback', async () => {

            expect(service.getPaypageRegistrationId()).toBe('fake promise' as any);
        });
    });

    describe('loadIFrame', () => {

        let getConfigurationSpy;
        let vantiveEprotectClientFactorySpy;

        beforeEach(() => {

            getConfigurationSpy = spyOn(service as any, 'getConfiguration').and.returnValue('fake configuration');
            vantiveEprotectClientFactorySpy = spyOn(service as any, 'vantiveEprotectClientFactory')
                .and.returnValue('fake payframe client');
        });

        it('should call getConfiguration with arguments passed', async () => {

            service['loadIFrame']('fake style', 'fake height', 'fake container id', 'fake existing card number');

            expect(getConfigurationSpy).toHaveBeenCalledTimes(1);
            expect(getConfigurationSpy).toHaveBeenCalledWith(
                'fake style', 'fake height', 'fake container id', 'fake existing card number',
                service['payframeClientCallback'], service['inputEmptyCallback']);
        });

        it('should call vantiveEprotectClientFactory with configurations', async () => {

            service['loadIFrame']('fake style', 'fake height', 'fake container id', 'fake existing card number');

            expect(vantiveEprotectClientFactorySpy).toHaveBeenCalledTimes(1);
            expect(vantiveEprotectClientFactorySpy).toHaveBeenCalledWith('fake configuration');
        });

    });

    describe('inputEmptyCallback', () => {

        let getConfigurationSpy;
        let vantiveEprotectClientFactorySpy;

        beforeEach(() => {

            getConfigurationSpy = spyOn(service as any, 'getConfiguration').and.returnValue('fake configuration');
            vantiveEprotectClientFactorySpy = spyOn(service as any, 'vantiveEprotectClientFactory')
                .and.returnValue('fake payframe client');
        });

        it('should set allInputsEmptyDefered to empty object', async () => {

            service['allInputsEmptyDefered'] = { bla: 'fake' } as any;

            service['inputEmptyCallback']({ allInputsEmpty: 'something' } as any);

            expect(service['allInputsEmptyDefered']).toEqual({} as any);
        });

        it('should call allInputsEmptyDefered.resolve with allInputsEmpty', async () => {

            service['allInputsEmptyDefered'] = jasmine.createSpyObj('allInputsEmptyDefered', ['resolve']);
            const originalDefered = service['allInputsEmptyDefered'];

            service['inputEmptyCallback']({ allInputsEmpty: true } as any);

            expect(originalDefered.resolve).toHaveBeenCalledTimes(1);
            expect(originalDefered.resolve).toHaveBeenCalledWith(true);
        });
    });

    describe('payframeClientCallback', () => {

        beforeEach(() => {

            service['getPaypageRegistrationIdDefered'] = {} as any;
        });

        it('should call logResponse with message when it is present', async () => {

            spyOn(service as any, 'logResponse').and.returnValue(null);
            service['getPaypageRegistrationIdDefered'].message = 'fake message';

            service['payframeClientCallback']({ response: 'fake' } as any);

            expect(service['logResponse']).toHaveBeenCalledWith({ response: 'fake' }, 'fake message');
            expect(service['logResponse']).toHaveBeenCalledTimes(1);
        });

        [
            { response: '884' },
            { response: '875' },
            { response: '889' },
            { timeout: true }
        ].forEach(response => {

            it('should call toaster display when error', async () => {

                siteVerbiage.genericErrorMsg = 'fake error message';

                service['payframeClientCallback'](response as any);

                expect(toasterService.show).toHaveBeenCalledWith('Error', 'fake error message');
                expect(toasterService.show).toHaveBeenCalledTimes(1);
            });
        });

        [
            { response: '885' },
            { response: '876' },
            { response: '887' },
            { timeout: false }
        ].forEach(response => {

            it('should not call toaster display when no error', async () => {

                siteVerbiage.genericErrorMsg = 'fake error message';

                service['payframeClientCallback'](response as any);

                expect(toasterService.show).toHaveBeenCalledTimes(0);
            });
        });

        it('should set getPaypageRegistrationIdDefered to empty object', async () => {

            (service['getPaypageRegistrationIdDefered'] as any).someProp = 'fake prop';

            service['payframeClientCallback']({ response: 'fake' } as any);

            expect(service['getPaypageRegistrationIdDefered']).toEqual({} as any);
        });

        it('should call resolve when isSuccess', async () => {

            (service['getPaypageRegistrationIdDefered'] as any) =
                jasmine.createSpyObj('getPaypageRegistrationIdDefered', ['resolve', 'reject']);
            const originalDefered: any = service['getPaypageRegistrationIdDefered'];
            originalDefered.resolve.and.returnValue(null);
            originalDefered.reject.and.callFake(() => fail('Reject was called'));

            service['payframeClientCallback']({ response: '870' } as any);

            expect(originalDefered.reject).toHaveBeenCalledTimes(0);
            expect(originalDefered.resolve).toHaveBeenCalledTimes(1);
            expect(originalDefered.resolve).toHaveBeenCalledWith({ response: '870' } as any);
        });

        it('should call reject when isSuccess false', async () => {

            (service['getPaypageRegistrationIdDefered'] as any) =
                jasmine.createSpyObj('getPaypageRegistrationIdDefered', ['resolve', 'reject']);
            const originalDefered: any = service['getPaypageRegistrationIdDefered'];
            originalDefered.reject.and.returnValue(null);
            originalDefered.resolve.and.callFake(() => fail('Resolve was called'));

            service['payframeClientCallback']({ response: '871' } as any);

            expect(originalDefered.resolve).toHaveBeenCalledTimes(0);
            expect(originalDefered.reject).toHaveBeenCalledTimes(1);
            expect(originalDefered.reject).toHaveBeenCalledWith({ response: '871' } as any);
        });
    });
});
