import { SuspendedAccountService } from './suspendedAccount.service';
import { stateNames } from '../constants';
import { stateNames as homeStates } from 'home/constants';
import { webStorageConst } from 'constants/module';
import { SuspendedAccountUserStatusKey, SuspendedAccountPaymentInfoKey } from '../constants';
import { CurrentUserService, ResponseErrorService, WebStorageService } from 'common/services';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { WebApiService } from './webapi.service';

describe('suspendedAccountService', () => {
    let service: SuspendedAccountService;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
    let webApiService: jasmine.SpyObj<WebApiService>;
    let webStorageService: jasmine.SpyObj<WebStorageService>;
    let currentUserService: jasmine.SpyObj<CurrentUserService>;

    beforeEach(() => {
        webStorageService = jasmine.createSpyObj('WebStorageService', ['setKeyValue', 'getValue', 'removeEntry']);
        webApiService = jasmine.createSpyObj('WebApiService', ['getPdfURL', 'getSuspendedAccountStatus']);
        responseErrorService = jasmine.createSpyObj('ResponseErrorService', ['displayErrorsFromResponse', 'displayAlertsFromResponse', 'isErrorFree']);
        currentUserService = jasmine.createSpyObj('CurrentUserService', ['getCurrentUser']);

        responseErrorService.displayAlertsFromResponse.and.resolveTo([]);
        responseErrorService.displayErrorsFromResponse.and.resolveTo([]);

        TestBed.configureTestingModule({
            providers: [
                SuspendedAccountService,
                { provide: ResponseErrorService, useValue: responseErrorService },
                { provide: WebApiService, useValue: webApiService },
                { provide: WebStorageService, useValue: webStorageService },
                { provide: CurrentUserService, useValue: currentUserService }
            ]
        });

        service = TestBed.inject(SuspendedAccountService);
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(service).toBeDefined();
        });
    });


    describe('destroySuspendedWizardInformation', () => {

        it('should remove entries in webStorage for current step, billing amount, frp charges, charges', async () => {

            service.destroySuspendedWizardInformation();

            expect(webStorageService.removeEntry).toHaveBeenCalledTimes(6);
            expect(webStorageService.removeEntry).toHaveBeenCalledWith(webStorageConst.suspendedStepKey);
            expect(webStorageService.removeEntry).toHaveBeenCalledWith(webStorageConst.suspendedBillingAmountKey);
            expect(webStorageService.removeEntry).toHaveBeenCalledWith(webStorageConst.suspendedFrpChargesByPlateListKey);
            expect(webStorageService.removeEntry).toHaveBeenCalledWith(webStorageConst.suspendedChargesByPlateListKey);

            expect(webStorageService.removeEntry).toHaveBeenCalledWith(SuspendedAccountUserStatusKey);
            expect(webStorageService.removeEntry).toHaveBeenCalledWith(SuspendedAccountPaymentInfoKey);
        });
    });


    describe('getSuspendedAccountStatus', () => {

        it('caches status', async () => {
            const status = { test: 'test' } as any;

            (webStorageService.getValue as jasmine.Spy).and.returnValue(null);
            (webApiService.getSuspendedAccountStatus as jasmine.Spy).and.resolveTo(status);
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);

            const result = await service.getSuspendedAccountStatus();

            expect(webApiService.getSuspendedAccountStatus).toHaveBeenCalled();
            expect(webStorageService.setKeyValue).toHaveBeenCalledWith(SuspendedAccountUserStatusKey, status);
            expect(result).toEqual(status);
        });

        it('gets cache', async () => {
            const status = { test: 'test' } as any;

            (webStorageService.getValue as jasmine.Spy).and.returnValue(status);

            const result = await service.getSuspendedAccountStatus();

            expect(webApiService.getSuspendedAccountStatus).not.toHaveBeenCalled();
            expect(webStorageService.setKeyValue).not.toHaveBeenCalled();
            expect(result).toEqual(status);
        });

        it('returns null when api errors', async () => {
            const status = { test: 'test' } as any;

            (webStorageService.getValue as jasmine.Spy).and.returnValue(null);
            (webApiService.getSuspendedAccountStatus as jasmine.Spy).and.resolveTo({});
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(false);

            const result = await service.getSuspendedAccountStatus();

            expect(webApiService.getSuspendedAccountStatus).toHaveBeenCalled();
            expect(webStorageService.setKeyValue).not.toHaveBeenCalled();
            expect(result).toEqual(null);

        });

    });

    describe('getFirstSuspendedAccountState', () => {

        it('handles web api errors', async () => {

            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(false);
            const response: any = {};
            (webApiService.getSuspendedAccountStatus as jasmine.Spy).and.resolveTo(response);

            const state = await service.getFirstSuspendedAccountState();

            expect(responseErrorService.isErrorFree).toHaveBeenCalledWith(response);
            expect(state).toBe(homeStates.Frame);
        });

        [
            { acctActivity: 'X', suspensionFlag: false, violationFlag: false, result: homeStates.Frame },
            { acctActivity: 'X', suspensionFlag: false, violationFlag: true, result: homeStates.Frame },
            { acctActivity: 'X', suspensionFlag: true, violationFlag: false, result: homeStates.Frame },
            { acctActivity: 'X', suspensionFlag: true, violationFlag: true, result: homeStates.Frame },
            { acctActivity: 'S', suspensionFlag: false, violationFlag: false, result: stateNames.Landing },
            { acctActivity: 'S', suspensionFlag: false, violationFlag: true, result: stateNames.ViolationsLanding },
            { acctActivity: 'S', suspensionFlag: true, violationFlag: false, result: stateNames.Landing },
            { acctActivity: 'S', suspensionFlag: true, violationFlag: true, result: stateNames.ViolationsLanding }
        ].forEach(({ acctActivity, suspensionFlag, violationFlag, result }) => {
            it(`redirects to ${result} when acctActivity=${acctActivity}, suspensionFlag=${suspensionFlag}, and violationFlag=${violationFlag}`, async () => {
                (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);

                (webApiService.getSuspendedAccountStatus as jasmine.Spy).and.resolveTo({
                    acctActivity, suspensionFlag, violationFlag
                });

                const state = await service.getFirstSuspendedAccountState();

                expect(state).toBe(result);
            });
        });

    });

    describe('getFirstSuspendedAccountState', () => {
        it('getSuspendedAccountTypeInformation should call displayAlertsFromResponse', waitForAsync(() => {
            responseErrorService.isErrorFree.and.returnValue(true);
            webApiService.getSuspendedAccountStatus.and.resolveTo({} as any);

            service.getSuspendedAccountTypeInformation().then(res => {
                expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalled();
                expect(res).toEqual({} as any);
            });
        }));

        it('getSuspendedAccountTypeInformation should call displayErrorsFromResponse', waitForAsync(() => {
            responseErrorService.isErrorFree.and.returnValue(false);
            webApiService.getSuspendedAccountStatus.and.resolveTo({ errors: [] } as any);

            service.getSuspendedAccountTypeInformation().then(res => {
                expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalled();
                expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalled();
                expect(res).toEqual({ errors: [] } as any);
            });
        }));
    });

    describe('getInvoicePdfUrl', () => {
        it('getInvoicePdfUrl should call getPdfURL', () => {
            webApiService.getPdfURL.and.returnValue('test');

            const url = service.getInvoicePdfUrl('', '', '', '', false);

            expect(url).toEqual('test');
            expect(webApiService.getPdfURL).toHaveBeenCalled();
        });
    });

    describe('getReplenishmentAmtText', () => {
        it('getReplenishmentAmtText should return optIn', () => {
            currentUserService.getCurrentUser.and.returnValue({rebillOptIn: true});

            const txt = service.getReplenishmentAmtText('optIn', 'optOut');

            expect(txt).toEqual('optIn');
            expect(currentUserService.getCurrentUser).toHaveBeenCalled();
        });

        it('getReplenishmentAmtText should return optOut', () => {
            currentUserService.getCurrentUser.and.returnValue({rebillOptIn: false});

            const txt = service.getReplenishmentAmtText('optIn', 'optOut');

            expect(txt).toEqual('optOut');
            expect(currentUserService.getCurrentUser).toHaveBeenCalled();
        });
    });

    describe('get/set paymentInfo', () => {
        it('paymentInfo should set and get', () => {
            service.paymentInfo = {} as any;

            expect(service.paymentInfo).toEqual({} as any);
        });
    });
});
