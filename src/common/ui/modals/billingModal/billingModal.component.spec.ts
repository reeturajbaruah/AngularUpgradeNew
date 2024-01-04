import { billingModalCmsItemId } from 'cms/constants';
import { CmsResolverService } from 'cms/services';
import { BankAccountType, BillingType } from 'common/models';
import { AccountService, ResponseErrorService, ToasterService } from 'common/services';
import { DialogRef } from 'common/services/dialogService/dialog.service';
import { SessionService } from 'common/services/session/session.service';
import { BillingModalComponent, InjectionValues } from 'common/ui/modals/billingModal/billingModal.component';
import * as exp from 'constants';

describe('billingModalComponent', () => {
    let dialogRef: DialogRef<InjectionValues>;
    let genericRepo: any;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
    let cmsResolverService: CmsResolverService;
    let component: BillingModalComponent;
    let toasterService: jasmine.SpyObj<ToasterService>;
    let accountService: jasmine.SpyObj<AccountService>;
    let environmentConfig: any;
    let session: jasmine.SpyObj<SessionService>;

    beforeEach(() => {
        const mockBillingInfo = {
            eft: {
                accountType: BankAccountType.Business,
                routingNumber: '123123',
                accountNumber: '1111111',
                name: 'testName',
                address1: 'EFT Test 123',
                address2: 'EFT Test 123',
                address3: 'EFT Test 123',
                address4: 'EFT Test 123',
                city: 'EFT Test City',
                state: 'EFT Test State',
                zip: 'EFT 12345',
                plus4: 'EFT 1234',
                country: 'EFT USA',
                displayCountry: 'EFT USA',
                international: false
            },
            credit: {
                cardCode: '123',
                cardNbr: '1111',
                expMonth: 1,
                expYear: 1,
                nameOnCard: 'Test Name',
                address1: 'Test 123',
                address2: 'Test 123',
                address3: 'Test 123',
                address4: 'Test 123',
                city: 'Test City',
                state: 'Test State',
                zip: '12345',
                plus4: '1234',
                country: 'USA',
                displayCountry: 'USA',
                international: false
            },
            billingType: 'EFT'
        };
        dialogRef = jasmine.createSpyObj('dialogRef', ['close']);
        (dialogRef.data as any) = {
            billingInformation: mockBillingInfo, shouldForcePrimarySelection: false
        };

        genericRepo = {
            dataFactory: {
                eftValidateRouting: jasmine.createSpy('eftValidateRouting'),
                missedATollGetCreditCardDropDownInfo: jasmine.createSpy('missedATollGetCreditCardDropDownInfo')
            }
        };
        genericRepo.dataFactory.eftValidateRouting.and.resolveTo({
            alerts: [],
            errors: []
        });
        genericRepo.dataFactory.missedATollGetCreditCardDropDownInfo.and.resolveTo({
            alerts: [],
            errors: [],
            creditCardDropDownInfo: {
                creditCardTypes: [],
                states: [],
                countries: []
            }
        });

        responseErrorService = jasmine.createSpyObj('responseErrorService', ['displayAlertsFromResponse', 'isErrorFree']);
        responseErrorService.isErrorFree.and.returnValue(true);

        toasterService = jasmine.createSpyObj('toasterService', ['removeAll']);

        cmsResolverService = jasmine.createSpyObj('cmsResolverService', ['resolve']);
        (cmsResolverService.resolve as jasmine.Spy).and.resolveTo({
            addPaymentMethod: 'a', makePrimary: 'b', Children: [{ ShortDescription: 'c' }]
        });

        accountService = jasmine.createSpyObj('AccountService', ['getMailingInfo']);

        environmentConfig = {
            billingModalErrorPopUp: false
        };
        session = jasmine.createSpyObj('session', ['userRole']);

        component = new BillingModalComponent(dialogRef, genericRepo, responseErrorService, cmsResolverService, toasterService, accountService, environmentConfig, session);
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {

        it('should set popUpDelay to false at the beginning of ngOnInit()', async () => {
            component.ngOnInit();
            expect(component.popUpDelay).toBeFalse();
        });

        it('gets cms data', async () => {
            await component.ngOnInit();

            expect(cmsResolverService.resolve).toHaveBeenCalledWith({ ItemId: billingModalCmsItemId, mergeParams: true });

            expect(component.cmsContent.addPaymentMethod).toBe('a');
            expect(component.cmsContent.makePrimary).toBe('b');
            expect(component.cmsContent.manageBillingToolTip).toBe('c');

        });

        it('should assign data', async () => {
            await component.ngOnInit();
            expect(component.data).toEqual(dialogRef.data);
            expect(component.addPaymentMethod).toBeFalse();
            expect(component.setAsPrimary).toBeFalse();
        });

        it('should assign eft address', async () => {
            dialogRef.data.billingType = BillingType.Eft;
            await component.ngOnInit();
            expect(component.address).toEqual({
                address1: 'EFT Test 123',
                address2: 'EFT Test 123',
                address3: 'EFT Test 123',
                address4: 'EFT Test 123',
                city: 'EFT Test City',
                state: 'EFT Test State',
                zip: 'EFT 12345',
                plus4: 'EFT 1234',
                country: 'EFT USA',
                displayCountry: 'EFT USA',
                international: false
            });
        });

        it('should assign credit address', async () => {
            accountService.getMailingInfo.and.resolveTo({
                address1: 'Test 123',
                address2: 'Test 123',
                address3: 'Test 123',
                address4: 'Test 123',
                city: 'Test City',
                state: 'Test State',
                zip: '12345',
                plus4: '1234',
                country: 'USA',
                displayCountry: 'USA',
                international: false
            } as any);
            dialogRef.data.billingType = BillingType.Credit;
            await component.ngOnInit();
            expect(component.address).toEqual({
                address1: 'Test 123',
                address2: 'Test 123',
                address3: 'Test 123',
                address4: 'Test 123',
                city: 'Test City',
                state: 'Test State',
                zip: '12345',
                plus4: '1234',
                country: 'USA',
                displayCountry: 'USA',
                international: false
            });
        });

        it('input shouldForcePrimarySelection should default to false', async () => {
            await component.ngOnInit();
            expect(component.shouldForcePrimarySelection).toBeFalse();
        });

        it('should select and disable makePrimary checkbox when ', async () => {
            dialogRef.data.shouldForcePrimarySelection = true;
            await component.ngOnInit();
            expect(component.shouldForcePrimarySelection).withContext('component.shouldForcePrimarySelection').toBeTrue();
            expect(component.setAsPrimary).withContext('component.setAsPrimary').toBeTrue();
        });

        it('should set the popUpDelay to true after ngOnInit completes', async () => {
            await component.ngOnInit();
            expect(component.popUpDelay).toBeTrue();
        });

        it('should set the billingInformation to undefined if billingModalErrorPopUp is true', async () => {
            component.environmentConfig.billingModalErrorPopUp = true;
            await component.ngOnInit();
            if (component.environmentConfig.billingModalErrorPopUp) {
                expect(component.data.billingInformation).toBeUndefined();
            }
        });
    });

    describe('close', () => {
        it('should call dialogRef close', () => {
            component.close();
            expect(toasterService.removeAll).toHaveBeenCalledTimes(1);
            expect(dialogRef.close).toHaveBeenCalledTimes(1);
        });
    });


    describe('showMakePrimary', () => {

        it('can show make primary', () => {

            component.data = null;
            expect(component.showMakePrimary).toBeFalsy();
            component.data = { uiOptions: null } as any;
            expect(component.showMakePrimary).toBeFalsy();
            component.data = {
                uiOptions: {}
            } as any;
            expect(component.showMakePrimary).toBeFalsy();
            component.data = {
                uiOptions: { showMakePrimary: true }
            } as any;
            expect(component.showMakePrimary).toBeTruthy();
        });

    });


    describe('showAddToPaymentMethodList', () => {

        [
            [null, null, null, false],
            [null, BillingType.Credit, null, false],
            [null, BillingType.Eft, null, false],

            [{ openCardSlots: 1 }, BillingType.Credit, { isNew: true, showMakePrimary: false }, true],
            [{ openCardSlots: 0, openEftSlots: 1 }, BillingType.Credit, { isNew: true, showMakePrimary: false }, false],
            [{ openCardSlots: 1 }, BillingType.Credit, { isNew: false, showMakePrimary: false }, false],
            [{ openCardSlots: 1 }, BillingType.Credit, { isNew: true, showMakePrimary: true }, false],
            [{ openCardSlots: 1 }, BillingType.Credit, { isNew: false, showMakePrimary: true }, false],


            [{ openEftSlots: 1 }, BillingType.Eft, { isNew: true, showMakePrimary: false }, true],
            [{ openEftSlots: 0, openCardSlots: 1 }, BillingType.Eft, { isNew: true, showMakePrimary: false }, false],
            [{ openEftSlots: 1 }, BillingType.Eft, { isNew: false, showMakePrimary: false }, false],
            [{ openEftSlots: 1 }, BillingType.Eft, { isNew: true, showMakePrimary: true }, false],
            [{ openEftSlots: 1 }, BillingType.Eft, { isNew: false, showMakePrimary: true }, false],

        ].forEach(([paymentAvailablity, billingType, uiOptions, show]) => {

            it(
                `can ${show ? 'show' : 'not show'} addToPaymentMethodList option when
    paymentAvailabity is ${JSON.stringify(paymentAvailablity)},
    billingType is ${billingType},
    and uiOptions are ${JSON.stringify(uiOptions)}`, () => {

                component.data.paymentMethodAvailability = paymentAvailablity as any;
                component.data.billingType = billingType as any;
                component.data.uiOptions = uiOptions as any;

                expect(component.showAddToPaymentMethodList).toBe(show as any);

            });

        });


    });

    describe('submit', () => {
        it('should handle EFT', async () => {
            component.data = dialogRef.data;
            component.data.billingType = 'EFT';

            await component.submit();

            expect(genericRepo.dataFactory.eftValidateRouting).toHaveBeenCalledTimes(1);
            expect(genericRepo.dataFactory.eftValidateRouting).toHaveBeenCalledWith({
                AccountType: BankAccountType.Business,
                RoutingNumber: '123123',
                AccountNumber: '1111111'
            });

            expect(responseErrorService.displayAlertsFromResponse).not.toHaveBeenCalled();
            expect(dialogRef.close).toHaveBeenCalledTimes(1);
            expect(dialogRef.close).toHaveBeenCalledWith(component.data);

            expect(component.data.billingInformation.eft.primary).toBeFalsy();
            expect(component.data.uiResults.makePrimary).toBeFalsy();
        });

        it('should handle EFT make primary', async () => {
            component.data = {
                ...dialogRef.data, uiOptions: { showMakePrimary: true }
            };
            component.data.billingType = 'EFT';
            component.setAsPrimary = true;
            await component.submit();

            expect(component.data.billingInformation.eft.primary).toBeTruthy();
            expect(component.data.uiResults.makePrimary).toBeTruthy();
        });


        it('should call displayAlertsFromResponse', async () => {
            component.data = dialogRef.data;
            component.data.billingType = 'EFT';
            const fakeResponse = { alerts: ['random alert'] };
            genericRepo.dataFactory.eftValidateRouting.and.resolveTo(fakeResponse);

            await component.submit();

            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(1);
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledWith(fakeResponse as any);
            expect(dialogRef.close).toHaveBeenCalledTimes(1);
            expect(dialogRef.close).toHaveBeenCalledWith(component.data);
        });

        it('should handle Credit', async () => {
            component.data = dialogRef.data;
            component.creditEntry = jasmine.createSpyObj('creditEntry', ['submit']);
            (component.creditEntry.submit as jasmine.Spy).and.returnValue(true);
            component.data.billingType = 'Credit';

            await component.submit();

            expect(component.creditEntry.submit).toHaveBeenCalledTimes(1);

            expect(dialogRef.close).toHaveBeenCalledTimes(1);
            expect(dialogRef.close).toHaveBeenCalledWith(component.data);

            expect(component.data.billingInformation.credit.primary).toBeFalsy();
            expect(component.data.uiResults.makePrimary).toBeFalsy();
        });

        it('should handle Credit make primary', async () => {
            component.data = {
                ...dialogRef.data, uiOptions: { showMakePrimary: true }
            };
            component.data.billingType = 'Credit';
            component.setAsPrimary = true;
            await component.submit();

            expect(component.data.billingInformation.credit.primary).toBeTruthy();
            expect(component.data.uiResults.makePrimary).toBeTruthy();
        });

        it('should not continue if submit returns false', async () => {
            component.data = dialogRef.data;
            component.creditEntry = jasmine.createSpyObj('creditEntry', ['submit']);
            (component.creditEntry.submit as jasmine.Spy).and.returnValue(false);
            component.data.billingType = 'Credit';

            await component.submit();

            expect(dialogRef.close).not.toHaveBeenCalled();
        });

        it('should report if add to payment list', async () => {

            component.data = {
                ...dialogRef.data, uiOptions: { isNew: true }, paymentMethodAvailability: { openCardSlots: 1, openEftSlots: 1 }
            };
            component.data.billingType = 'Credit';
            component.addPaymentMethod = true;

            await component.submit();

            expect(component.data.uiResults.addToPaymentList).toBeTruthy();
        });


        it('should not report if add to payment list', async () => {

            component.data = {
                ...dialogRef.data, uiOptions: { isNew: false }
            };
            component.data.billingType = 'Credit';
            component.addPaymentMethod = false;

            await component.submit();

            expect(component.data.uiResults.addToPaymentList).toBeFalsy();
        });
    });
});
