import { } from 'jasmine';

import { StateService } from '../services';
import { PaymentPlansStateNames } from '../constants';
import { StateService as UiStateService } from '@uirouter/angular';

import { StateNames } from 'constants/module';

describe('paymentPlanStateService', () => {

    let service: StateService;
    let webStorage;
    let stateNames: PaymentPlansStateNames;
    let coreStateNames: StateNames;
    let $state: UiStateService;
    
    beforeEach(() => {
        webStorage = jasmine.createSpyObj('webStorage', ['setKeyValue', 'removeEntry', 'getValue']);
        stateNames = new PaymentPlansStateNames();
        coreStateNames = new StateNames();
        $state = jasmine.createSpyObj('$state', ['go']);

        service = new StateService(
            webStorage,
            stateNames,
            $state,
            coreStateNames
        );
    });

    it('can create a service', () => {
        expect(service).toBeDefined();
    });

    describe('init', () => {
        it('init able to populate authDictionary', () => {
            service.init();
            expect(service.authDictionary).toBeDefined();
            expect(service.authDictionary[stateNames.Landing])
                .toEqual({ validBeforePayment: ['PaymentPlans.Landing', 'PaymentPlans.Grid'] });

            expect(service.authDictionary[stateNames.Grid])
                .toEqual({ validBeforePayment: ['PaymentPlans.Landing', 'PaymentPlans.Grid', 'PaymentPlans.MakePayment'] });

            expect(service.authDictionary[stateNames.MakePayment])
                .toEqual({ validBeforePayment: ['PaymentPlans.Landing', 'PaymentPlans.Grid', 'PaymentPlans.MakePayment', 'PaymentPlans.Confirm'] });

            expect(service.authDictionary[stateNames.Confirm])
                .toEqual({
                    validBeforePayment: ['PaymentPlans.Grid', 'PaymentPlans.MakePayment', 'PaymentPlans.Confirm', 'PaymentPlans.Receipt']
                });

            expect(service.authDictionary[stateNames.Receipt]).toEqual(
                {
                    validBeforePayment: [],
                    validAfterPayment:
                        [
                            'PaymentPlans.Grid',
                            'PaymentPlans.Receipt'
                        ]
                });
        });
    });

    describe('saveStep', () => {
        it('webStorage should be call to store value for violations', () => {
            service.saveStep('fakeCurrentState', false);
            expect(webStorage.setKeyValue).toHaveBeenCalledWith('PAYMENTPLANS_CURRENT_STEP', 'fakeCurrentState');
        });

        it('webStorage should be call to store value for ez tag', () => {
            service.saveStep('fakeCurrentState', true);
            expect(webStorage.setKeyValue).toHaveBeenCalledWith('ACCOUNTOVERVIEW_PAYMENTPLANS_CURRENT_STEP', 'fakeCurrentState');
        });
    });

    describe('eftCache', () => {

        it('should store cache', () => {

            const cache = {};
            service.setCachedEftAddressInfo(cache);

            expect(webStorage.setKeyValue).toHaveBeenCalledWith(service['EFT_CACHED_ADDRESS_INFO'], cache);
        });


        it('should get cache', () => {

            service.getCachedEftAddressInfo();

            expect(webStorage.getValue).toHaveBeenCalledWith(service['EFT_CACHED_ADDRESS_INFO']);
        });


        it('should clear cache', () => {

            service.clearCachedEftAddressInfo();

            expect(webStorage.removeEntry).toHaveBeenCalledWith(service['EFT_CACHED_ADDRESS_INFO']);
        });

    });

    describe('setPaymentComplete', () => {

        it('should clear eft cache', () => {

            spyOn(service, 'clearCachedEftAddressInfo');
            service.setPaymentComplete(false);

            expect(service.clearCachedEftAddressInfo).toHaveBeenCalled();
        });
    });

    describe('destroyPaymentPlansCurrentStep', () => {
        it('webStorage should be call to destroy for paymentplans', () => {
            spyOn(service, 'clearCachedEftAddressInfo');
            service.destroyPaymentPlansCurrentStep(false);
            expect(webStorage.removeEntry).toHaveBeenCalledWith('PAYMENTPLANS_CURRENT_STEP');
            expect(service.clearCachedEftAddressInfo).toHaveBeenCalled();
        });

        it('webStorage should be call to destroy for ez tag', () => {
            spyOn(service, 'clearCachedEftAddressInfo');
            service.destroyPaymentPlansCurrentStep(true);
            expect(webStorage.removeEntry).toHaveBeenCalledWith('ACCOUNTOVERVIEW_PAYMENTPLANS_CURRENT_STEP');
            expect(service.clearCachedEftAddressInfo).toHaveBeenCalled();
        });
    });

    describe('isAcceptableState', () => {
        it('can test for non acceptable state - non ez tag', () => {

            spyOn(service, 'isPaymentComplete').and.returnValue(false);

            const value = service.isAcceptableState(
                stateNames.Landing, stateNames.MakePayment, false);
            
            expect(value).toBe(false);
        });

        it('can test for non acceptable state - ez tag', () => {
            spyOn(service, 'isPaymentComplete').and.returnValue(false);

            const value = service.isAcceptableState(
                stateNames.AccountOverviewSummary, stateNames.AccountOverviewConfirm, true);

            expect(value).toBe(false);
        });

        it('can test for acceptable state - non ez tag', () => {
            spyOn(service, 'isPaymentComplete').and.returnValue(false);

            const value = service.isAcceptableState(
                stateNames.Landing, stateNames.Grid, false);

            expect(value).toBe(true);
        });

        it('return true if access from wrong flow state for ez tag', () => {
            spyOn(service, 'isPaymentComplete').and.returnValue(false);

            const value = service.isAcceptableState(
                stateNames.AccountOverviewSummary, stateNames.AccountOverviewSelectPayment, true);

            expect(value).toBe(true);
        });        
    });

});
