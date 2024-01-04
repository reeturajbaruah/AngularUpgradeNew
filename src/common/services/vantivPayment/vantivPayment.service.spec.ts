import { TestBed } from '@angular/core/testing';

import { VantivPaymentService } from './vantivPayment.service';
import { ToasterService } from '../toasterService/toaster.service';
import { ENVIRON_CONFIG } from 'common/upgrades';
import * as lodash from 'lodash';
import { DOCUMENT } from '@angular/common';
import { GenericRepoService } from 'common/services';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { StorefrontUtilityService } from '../../../storefront/services/storefrontUtility.service';
import { SiteVerbiage } from '../../../constants/siteVerbiage.constants';


describe('VantivPaymentService', () => {
    let service: VantivPaymentService;
    let toasterService: jasmine.SpyObj<ToasterService>;
    let genericRepo: any;
    let environmentConfig: jasmine.SpyObj<any>;
    let siteVerbiage: jasmine.SpyObj<any>;
    let httpClient: jasmine.SpyObj<any>;
    let storefrontUtilityService: jasmine.SpyObj<any>;
    const config = {
        applicationId: 'app',
        applicationName: 'appName',
        applicationVersion: 'v0.0.0',
        authorization: 'authorization',
        acceptorId: 'acceptorId',
        accountId: 'accountId',
        accountToken: 'TOKEN',
        requestId: '3141',
        laneId: 9999,
        url: 'http://www.test.test/',
        vaultId: 'vaultId'
    };
    let documentSpy: jasmine.SpyObj<any>;
    const elementMock: HTMLElement = document.createElement('input');

    beforeEach(() => {
        toasterService = jasmine.createSpyObj('ToasterService', ['show']);
        genericRepo = {
            dataFactory: {
                LogVantivRequest: jasmine.createSpy('LogVantivRequest'),
                LogVantivResponse: jasmine.createSpy('LogVantivResponse'),
                TriPosLog: jasmine.createSpy('TriPosLog')
            }
        };
        environmentConfig = jasmine.createSpyObj('environmentConfig', null, {
            vantivConfig: {
                ErrorToggle: null,
                InfoToggle: {},
                PayPageID: null,
                ReportGroup: null,
                PayPageUrl: '',
                TimeoutMilliSeconds: 500
            }
        });
        siteVerbiage = jasmine.createSpyObj('siteVerbiage', null, { genericErrorMsg: 'test error' });
        httpClient = jasmine.createSpyObj('httpClient', ['post']);
        storefrontUtilityService = jasmine.createSpyObj('storefrontUtilityService', [], { machineName: 'machineName' });

        documentSpy = jasmine.createSpyObj('Document', ['querySelector', 'getElementById', 'append']);

        documentSpy.getElementById.and.returnValue(elementMock);
        documentSpy.querySelector.and.callFake(() => documentSpy);
        documentSpy.append.and.callFake(() => { });

        toasterService.show.and.returnValue({} as any);
        genericRepo.dataFactory.LogVantivRequest.and.resolveTo({});
        genericRepo.dataFactory.LogVantivResponse.and.resolveTo({});
        genericRepo.dataFactory.TriPosLog.and.resolveTo({});

        TestBed.configureTestingModule({
            providers: [
                VantivPaymentService,
                { provide: ToasterService, useFactory: () => toasterService },
                { provide: GenericRepoService, useFactory: () => genericRepo },
                { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig },
                { provide: SiteVerbiage, useFactory: () => siteVerbiage },
                { provide: HttpClient, useFactory: () => httpClient },
                { provide: StorefrontUtilityService, useFactory: () => storefrontUtilityService },
                { provide: DOCUMENT, useFactory: () => documentSpy }
            ]
        });
        service = TestBed.inject(VantivPaymentService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get configuration then call vantiv', async () => {
        //arrange
        const response: any = {};
        const postResult = {
            body: response,
            status: 200,
            statusText: 'ok',
            ok: true
        };

        const configCopy: any = Object.assign({}, config);

        httpClient.post.and.returnValue(from([postResult]));
        //assert
        expect(configCopy.url).toBeDefined();
        expect(configCopy.laneId).toBeDefined();
        expect(configCopy.vaultId).toBeDefined();
        expect(configCopy.applicationId).toBeDefined();
        expect(configCopy.applicationName).toBeDefined();
        expect(configCopy.applicationVersion).toBeDefined();
        expect(configCopy.authorization).toBeDefined();
        expect(configCopy.acceptorId).toBeDefined();
        expect(configCopy.accountId).toBeDefined();
        expect(configCopy.accountToken).toBeDefined();
        expect(configCopy.requestId).toBeDefined();

        await service.getTokenizedCreditCardData(configCopy, false).then((result) => {

            expect(httpClient.post).toHaveBeenCalled();
            const args = httpClient.post.calls.argsFor(0);
            expect(args[0]).toBe(config.url + 'token/omni');
            expect(args[1].laneId).toBe(config.laneId);
            expect(args[1].vaultId).toBe(config.vaultId);

            const headers = args[2].headers;
            expect(headers['tp-application-id']).toBe(config.applicationId);
            expect(headers['tp-application-name']).toBe(config.applicationName);
            expect(headers['tp-application-version']).toBe(config.applicationVersion);
            expect(headers['tp-authorization']).toBe(config.authorization);
            expect(headers['tp-express-acceptor-id']).toBe(config.acceptorId);
            expect(headers['tp-express-account-id']).toBe(config.accountId);
            expect(headers['tp-express-account-token']).toBe(config.accountToken);
            expect(headers['tp-request-id']).toBe(config.requestId);
            expect(result).toBe(response);
            expect(result.cancelledByUser).toBeFalsy();

            expect(genericRepo.dataFactory.TriPosLog).toHaveBeenCalled();

            expect(configCopy.url).toBeUndefined();
            expect(configCopy.laneId).toBeUndefined();
            expect(configCopy.vaultId).toBeUndefined();
            expect(configCopy.applicationId).toBeUndefined();
            expect(configCopy.applicationName).toBeUndefined();
            expect(configCopy.applicationVersion).toBeUndefined();
            expect(configCopy.authorization).toBeUndefined();
            expect(configCopy.acceptorId).toBeUndefined();
            expect(configCopy.accountId).toBeUndefined();
            expect(configCopy.accountToken).toBeUndefined();

            expect(configCopy.requestId).toBeDefined();

        }).catch(() => {
            fail('should have not rejected');
        });
    });

    it('should handle cancelled events from vantiv', async () => {
        //arrange
        const response = {
            _hasErrors: true,
            _errors: [{ exceptionMessage: 'sometext and cancelled response' }]
        };

        const postResult = {
            body: response,
            status: 200,
            statusText: 'ok',
            ok: true
        };

        httpClient.post.and.returnValue(from([postResult]));

        const configCopy: any = Object.assign({}, config);
        //assert
        await service.getTokenizedCreditCardData(configCopy, false).then((result) => {
            expect(result.cancelledByUser).toBeTruthy();
            expect(genericRepo.dataFactory.TriPosLog).toHaveBeenCalled();
        }).catch(() => {
            fail('should not have rejected');
        });
    });

    it('should reject on an error from vantiv', async () => {
        //arrange
        const response = {
            _hasErrors: true,
            _errors: [{ exceptionMessage: 'any error' }]
        };

        const postResult = {
            body: response,
            status: 200,
            statusText: 'ok',
            ok: true
        };

        const configCopy: any = Object.assign({}, config);

        httpClient.post.and.returnValue(Promise.resolve(postResult));
        //assert
        await service.getTokenizedCreditCardData(configCopy, false).then(() => {
            fail('should not have resolved');
        }).catch((val) => {
            expect(genericRepo.dataFactory.TriPosLog).toHaveBeenCalled();
        });
    });

    describe('vantivPay LitlePayPage calls successCallback', () => {
        class Mock {
            constructor() { }
            sendToLitle(litleRequest, litleFormFields, successCallback, errorCallback, timeoutCallback, timeout) {
                setTimeout(() => {
                    successCallback({ lastFour: '1111', paypageRegistrationId: '1234' });
                });
            }
        }

        beforeEach(() => {
            Object.defineProperty(window, 'LitlePayPage', { value: Mock, configurable: true });
            spyOn(lodash, 'cloneDeep').and.returnValue({ requestId: 'test' });
        });

        it('should return response', done => {
            service.vantivPay('4111').then(obj => {
                expect(obj).toBeDefined();
                done();
            }).catch(err => {
                done.fail(err);
            });
        });
    });

    describe('vantivPay LitlePayPage calls errorCallback', () => {
        const errorRes = { response: '' };
        class Mock {
            constructor() { }
            sendToLitle(litleRequest, litleFormFields, successCallback, errorCallback, timeoutCallback, timeout) {
                setTimeout(() => {
                    errorCallback(errorRes);
                });
            }
        }

        beforeEach(() => {
            Object.defineProperty(window, 'LitlePayPage', { value: Mock, configurable: true });
            spyOn(lodash, 'cloneDeep').and.returnValue({});
            (Object.getOwnPropertyDescriptor(environmentConfig, 'vantivConfig').get as jasmine.Spy).and.returnValue({
                ErrorToggle: {},
                InfoToggle: {},
                PayPageID: null,
                ReportGroup: null,
                PayPageUrl: '',
                TimeoutMilliSeconds: 500
            });
        });

        it('should error with Not Mod10', done => {
            errorRes.response = '871';

            service.vantivPay('4111').then(obj => {
                done.fail(obj);
            }).catch(err => {

                expect(err).toEqual('Invalid card number. Check and retry. (Not Mod10)');
                done();
            });
        });

        it('should error with Too short', done => {
            errorRes.response = '872';

            service.vantivPay('4111').then(obj => {
                done.fail(obj);
            }).catch(err => {

                expect(err).toEqual('Invalid card number. Check and retry. (Too short)');
                done();
            });
        });

        it('should error with Too long', done => {
            errorRes.response = '873';

            service.vantivPay('4111').then(obj => {
                done.fail(obj);
            }).catch(err => {

                expect(err).toEqual('Invalid card number. Check and retry. (Too long)');
                done();
            });
        });

        it('should error with Failure from Server', done => {
            errorRes.response = '876';

            service.vantivPay('4111').then(obj => {
                done.fail(obj);
            }).catch(err => {

                expect(err).toEqual('Invalid card number. Check and retry. (Failure from Server)');
                done();
            });
        });
    });

    describe('vantivPay LitlePayPage calls timeoutCallback', () => {
        class Mock {
            constructor() { }
            sendToLitle(litleRequest, litleFormFields, successCallback, errorCallback, timeoutCallback, timeout) {
                setTimeout(() => {
                    timeoutCallback();
                });
            }
        }

        beforeEach(() => {
            Object.defineProperty(window, 'LitlePayPage', { value: Mock, configurable: true });
            spyOn(lodash, 'cloneDeep').and.returnValue({ customLogMessage: null });
            (Object.getOwnPropertyDescriptor(environmentConfig, 'vantivConfig').get as jasmine.Spy).and.returnValue({
                ErrorToggle: {},
                InfoToggle: null,
                PayPageID: null,
                ReportGroup: null,
                PayPageUrl: '',
                TimeoutMilliSeconds: 500
            });
        });

        it('should timeout with', done => {
            service.vantivPay('4111').then(obj => {
                done.fail(obj);
            }).catch(err => {

                expect(err).toEqual(siteVerbiage.genericErrorMsg);
                done();
            });
        });
    });
});
