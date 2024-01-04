import { G } from '@angular/cdk/keycodes';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { FrameComponent } from 'cavve/frame/frame.component';
import { StateConfig } from 'common/interfaces';
import { BankAccountType, BillingType } from 'common/models';
import { DialogService, GenericRepoService, ResponseErrorService } from 'common/services';
import { CreditCardEntryComponent, IAddressCheckBoxFlag, INewAddressFlag } from 'common/ui';
import { } from 'jasmine';
import { BillingComponent } from './billing.component';


describe('CAVVE BillingComponent', () => {

    let fixture: ComponentFixture<BillingComponent>;
    let component: BillingComponent;
    let parent: FrameComponent;
    let state: StateService;
    let dialogService: DialogService;
    let genericRepo: any;
    let responseErrorService: ResponseErrorService;
    let uiRouterGlobals: UIRouterGlobals;
    let form: NgForm;

    beforeEach(async () => {
        parent = jasmine.createSpyObj('parent', ['setFrameTitle']);
        parent.usStates = [{ stateCode: 'TX' }];
        parent.countries = [{ countryCode: 'USA', displayName: 'United States' }];
        state = jasmine.createSpyObj('state', ['go']);
        dialogService = jasmine.createSpyObj('dialogService', ['open', 'openGenericModal']);
        genericRepo = {
            dataFactory: {
                GetMailingAddressCreateAccountViolation: jasmine.createSpy('GetMailingAddressCreateAccountViolation'),
                SetBillingInfoCreateAccountViolation: jasmine.createSpy('SetBillingInfoCreateAccountViolation')
            }
        };
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree', 'displayAlertsFromResponse']);
        (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);
        uiRouterGlobals = {
            params: {}
        } as UIRouterGlobals;
        await TestBed
            .configureTestingModule({
                declarations: [BillingComponent],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [FormsModule],
                providers: [
                    { provide: FrameComponent, useFactory: () => parent },
                    { provide: StateService, useFactory: () => state },
                    { provide: DialogService, useFactory: () => dialogService },
                    { provide: GenericRepoService, useFactory: () => genericRepo },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(BillingComponent);
        component = fixture.debugElement.componentInstance;
        form = fixture.debugElement.query(By.directive(NgForm)).references.Form as NgForm;

        component.cmsContent = {
            Title: 'test title',
            ItemName: 'test name',
            LongDescription: 'test long description',
            ShortDescription: 'test short description',
            paymentMethodHeader: '',
            billingAddressHeader: '',
            newBillingSliderHeader: ''
        };
        component.cancelMessageContent = {
            cancelQuestion: 'Title',
            cancelResolve: 'Resolve',
            cancelReject: 'Reject'

        } as any;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('onInit', () => {
        it('should call all onInit functions', () => {
            spyOn(component as any, 'setDefaultAddress');

            component.ngOnInit();

            expect(component.checkBoxFlag).toBe('Default');
            expect(component.newAddressFlag).toBe(0);

            expect(parent.stepNum).toBe(2);

            expect(parent.setFrameTitle).toHaveBeenCalledWith('test title');
            expect(parent.setFrameTitle).toHaveBeenCalledTimes(1);

            expect(component.statesList).toEqual([{ stateCode: 'TX' }]);
            expect(component.countriesList).toEqual([{ countryCode: 'USA', displayName: 'United States' }]);

            expect((component as any).setDefaultAddress).toHaveBeenCalledTimes(1);
        });

    });

    describe('setDefaultAddress', () => {
        it('should call getMailingAddressCreateAccountViolation and set defaultAddress', async () => {
            genericRepo.dataFactory.GetMailingAddressCreateAccountViolation.and.resolveTo({
                address1: 'test address1',
                address2: 'test address2',
                city: 'test city',
                state: 'test state',
                zip: 'test zip',
                plus4: 'test plus4',
                country: 'test country'
            });

            await (component as any).setDefaultAddress();

            expect(genericRepo.dataFactory.GetMailingAddressCreateAccountViolation).toHaveBeenCalledTimes(1);
            expect(component.defaultAddress).toEqual({
                firstName: null,
                lastName: null,
                internationalAddress: null,
                address1: 'test address1',
                address2: 'test address2',
                city: 'test city',
                state: 'test state',
                zip: 'test zip',
                plus4: 'test plus4',
                country: 'test country'
            });
        });

        it('should call getMailingAddressCreateAccountViolation and not set defaultAddress if there are errors', async () => {
            genericRepo.dataFactory.GetMailingAddressCreateAccountViolation.and.resolveTo({
                address1: 'test address1',
                address2: 'test address2',
                city: 'test city',
                state: 'test state',
                zip: 'test zip',
                plus4: 'test plus4',
                country: 'test country'
            });
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(false);

            await (component as any).setDefaultAddress();

            expect(genericRepo.dataFactory.GetMailingAddressCreateAccountViolation).toHaveBeenCalledTimes(1);
            expect(component.defaultAddress).toBeUndefined();
        });
        it('should call setBillingInfoFromStateParams if there are no errors', async () => {
            (genericRepo.dataFactory.GetMailingAddressCreateAccountViolation as jasmine.Spy).and.resolveTo({
                address1: 'test address1',
                address2: 'test address2',
                city: 'test city',
                state: 'test state',
                zip: 'test zip',
                plus4: 'test plus4',
                country: 'test country'
            });
            spyOn(component as any, 'setBillingInfoFromStateParams');
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);

            await (component as any).setDefaultAddress();

            expect((component as any).setBillingInfoFromStateParams).toHaveBeenCalledTimes(1);
        });
    });

    describe('setBillingInfoFromStateParams', () => {
        beforeEach(() => {
            component.defaultAddress = {
                firstName: null,
                lastName: null,
                internationalAddress: null,
                address1: 'test address1',
                address2: 'test address2',
                city: 'test city',
                state: 'test state',
                zip: 'test zip',
                plus4: 'test plus4',
                country: 'test country'
            };

            uiRouterGlobals.params.billingInfo = {};

            uiRouterGlobals.params.billingInfo.eft = {
                accountType: BankAccountType.Personal,
                name: 'test name',
                routingNumber: '1111111111',
                accountNumber: '1234',
                address1: 'addy fake',
                address2: null,
                city: 'city fake',
                state: 'state fake',
                zip: 'fake zip',
                plus4: 'asdf',
                country: 'USA',
                displayCountry: 'USA',
                international: false
            };
            uiRouterGlobals.params.billingInfo.credit = {
                cardCode: 'V',
                cardNbr: '123123',
                expMonth: 1,
                expYear: 9999,
                nameOnCard: 'test name',
                address1: 'addy fake',
                city: 'city fake',
                state: 'state fake',
                zip: 'fake zip',
                plus4: 'asdf',
                country: 'USA',
                displayCountry: 'USA',
                international: false
            };

        });

        it('should set credit', () => {
            uiRouterGlobals.params.billingInfo.billingType = BillingType.Credit;

            component['setBillingInfoFromStateParams']();

            expect(component.billingInfo.credit).toEqual(uiRouterGlobals.params.billingInfo.credit);
            expect(component.billingInfo.billingType).toEqual(BillingType.Credit);

        });
        it('should set eft', () => {
            uiRouterGlobals.params.billingInfo.billingType = BillingType.Eft;
            const expected = {
                accountType: BankAccountType.Personal,
                name: 'test name',
                routingNumber: '1111111111',
                accountNumber: '1234',
                address1: 'addy fake',
                address2: null,
                city: 'city fake',
                state: 'state fake',
                zip: 'fake zip',
                plus4: 'asdf',
                country: 'USA',
                displayCountry: 'USA',
                international: false,
                account2: '1234'
            };

            component['setBillingInfoFromStateParams']();

            expect(component.billingInfo.eft).toEqual(expected);
            expect(component.billingInfo.billingType).toEqual(BillingType.Eft);

        });
        it('should not change address if compareAddress returns false', () => {
            uiRouterGlobals.params.billingInfo.billingType = BillingType.Credit;
            uiRouterGlobals.params.billingInfo.credit = undefined;
            uiRouterGlobals.params.billingInfo.eft = undefined;

            component.newAddress =
            {
                firstName: null,
                lastName: null,
                internationalAddress: null,
                address1: null,
                address2: null,
                city: null,
                state: null,
                zip: null,
                plus4: null,
                country: null
            };

            component['setBillingInfoFromStateParams']();

            expect(component.billingInfo.credit).toEqual(uiRouterGlobals.params.billingInfo.credit);
            expect(component.newAddressFlag).not.toEqual(INewAddressFlag.Updated);
            expect(component.checkBoxFlag).not.toEqual(IAddressCheckBoxFlag.New);

        });
        it('should change address if compareAddress returns false and enters if block to normalize empty strings in address to be null',
            () => {
                uiRouterGlobals.params.billingInfo.billingType = BillingType.Credit;
                uiRouterGlobals.params.billingInfo.credit = {
                    cardCode: '',
                    cardNbr: '',
                    expMonth: null,
                    expYear: null,
                    nameOnCard: '',
                    address1: '',
                    city: '',
                    state: '',
                    zip: '',
                    plus4: '',
                    country: '',
                    displayCountry: '',
                    international: null
                };

                component.newAddress =
                {
                    firstName: null,
                    lastName: null,
                    internationalAddress: null,
                    address1: null,
                    address2: null,
                    city: null,
                    state: null,
                    zip: null,
                    plus4: null,
                    country: null
                };

                component['setBillingInfoFromStateParams']();

                expect(component.billingInfo.credit).toEqual(uiRouterGlobals.params.billingInfo.credit);
                expect(component.newAddressFlag).toEqual(INewAddressFlag.Updated);
                expect(component.checkBoxFlag).toEqual(IAddressCheckBoxFlag.New);
            });

        it('should not call compareAddress if uiRouterGlobals.params.billingInfo does not exist', () => {
            uiRouterGlobals.params.billingInfo = undefined;
            spyOn(component as any, 'compareAddress');

            component['setBillingInfoFromStateParams']();

            expect(component['compareAddress']).toHaveBeenCalledTimes(0);
        });
        it('should not change newAddressFlag, checkBoxFlag, newAddress if address is the same', () => {

            component.checkBoxFlag = IAddressCheckBoxFlag.Default;
            component.defaultAddress = {
                firstName: null,
                lastName: null,
                internationalAddress: null,
                address1: 'addy fake',
                address2: null,
                city: 'city fake',
                state: 'state fake',
                zip: 'fake zip',
                plus4: 'asdf',
                country: 'USA'
            };

            uiRouterGlobals.params.billingInfo.billingType = BillingType.Eft;

            component['setBillingInfoFromStateParams']();

            expect(component.checkBoxFlag).toEqual(IAddressCheckBoxFlag.Default);

        });
        it('should change newAddressFlag, checkBoxFlag, newAddress if address is different eft', () => {
            component.checkBoxFlag = IAddressCheckBoxFlag.Default;
            component.defaultAddress = {
                firstName: null,
                lastName: null,
                internationalAddress: null,
                address1: 'addy fake222',
                address2: null,
                city: 'city fake222',
                state: 'state fake222',
                zip: 'fake zip222',
                plus4: 'asdf222',
                country: 'USA'
            };

            const expectedNewAddress = {
                accountType: BankAccountType.Personal,
                name: 'test name',
                routingNumber: '1111111111',
                accountNumber: '1234',
                address1: 'addy fake',
                address2: null,
                city: 'city fake',
                state: 'state fake',
                zip: 'fake zip',
                plus4: 'asdf',
                country: 'USA',
                displayCountry: 'USA',
                international: false,
                internationalAddress: false
            };

            uiRouterGlobals.params.billingInfo.billingType = BillingType.Eft;

            component['setBillingInfoFromStateParams']();

            expect(component.checkBoxFlag).toEqual(IAddressCheckBoxFlag.New);
            expect(component.newAddressFlag).toEqual(INewAddressFlag.Updated);
            expect(component.newAddress).toEqual({ ...expectedNewAddress } as any);
            expect(component.newAddress.internationalAddress).toEqual(uiRouterGlobals.params.billingInfo.eft.international);

        });
        it('should change newAddressFlag, checkBoxFlag, newAddress if address is different credit', () => {
            component.checkBoxFlag = IAddressCheckBoxFlag.Default;
            component.defaultAddress = {
                firstName: null,
                lastName: null,
                internationalAddress: null,
                address1: 'addy fake222',
                address2: null,
                city: 'city fake222',
                state: 'state fake222',
                zip: 'fake zip222',
                plus4: 'asdf222',
                country: 'USA'
            };

            const expectedNewAddress = {
                cardCode: 'V',
                cardNbr: '123123',
                expMonth: 1,
                expYear: 9999,
                nameOnCard: 'test name',
                address1: 'addy fake',
                city: 'city fake',
                state: 'state fake',
                zip: 'fake zip',
                plus4: 'asdf',
                country: 'USA',
                displayCountry: 'USA',
                international: false,
                internationalAddress: false
            };


            uiRouterGlobals.params.billingInfo.billingType = BillingType.Credit;

            component['setBillingInfoFromStateParams']();

            expect(component.checkBoxFlag).toEqual(IAddressCheckBoxFlag.New);
            expect(component.newAddressFlag).toEqual(INewAddressFlag.Updated);
            expect(component.newAddress).toEqual({ ...expectedNewAddress } as any);
            expect(component.newAddress.internationalAddress).toEqual(uiRouterGlobals.params.billingInfo.credit.international);

        });

    });

    describe('submitBillingInfo', () => {
        const mockCreditEntry: CreditCardEntryComponent = jasmine.createSpyObj('creditEntry', ['submit']);

        beforeEach(() => {
            component.billingInfo.credit = {
                cardCode: 'V',
                cardNbr: '123123',
                expMonth: 1,
                expYear: 9999,
                nameOnCard: 'test name',
                address1: null,
                city: null,
                state: null,
                zip: null,
                plus4: null,
                country: 'USA',
                displayCountry: 'USA',
                international: false
            };
            component.billingInfo.eft = {
                accountType: BankAccountType.Personal,
                name: 'test name',
                routingNumber: '1111111111',
                accountNumber: '1234',
                address1: null,
                city: null,
                state: null,
                zip: null,
                plus4: null,
                country: 'USA',
                displayCountry: 'USA',
                international: false
            };
            component.defaultAddress = {
                firstName: null,
                lastName: null,
                internationalAddress: null,
                address1: 'test address1',
                address2: 'test address2',
                city: 'test city',
                state: 'test state',
                zip: 'test zip',
                plus4: 'test plus4',
                country: 'test country'
            };

            component.newAddress = {
                firstName: null,
                lastName: null,
                internationalAddress: null,
                address1: 'new test address1',
                address2: 'new test address2',
                city: 'new test city',
                state: 'new test state',
                zip: 'new test zip',
                plus4: 'new test plus4',
                country: 'new test country'
            };

            (mockCreditEntry.submit as any).and.resolveTo(true);
            component.creditEntry = mockCreditEntry;
            (genericRepo.dataFactory.SetBillingInfoCreateAccountViolation as jasmine.Spy).and.resolveTo({});
        });
        it('should go through credit flow with default address', async () => {
            const nextState: StateConfig = {
                name: 'test'
            };
            component.billingInfo.billingType = BillingType.Credit;
            component.checkBoxFlag = IAddressCheckBoxFlag.Default;

            await component.submitBillingInfo(nextState);

            expect(genericRepo.dataFactory.SetBillingInfoCreateAccountViolation).toHaveBeenCalledTimes(1);
            expect(genericRepo.dataFactory.SetBillingInfoCreateAccountViolation).toHaveBeenCalledWith({
                creditCardPaymentMethod: {
                    firstName: null,
                    lastName: null,
                    internationalAddress: null,
                    address1: 'test address1',
                    address2: 'test address2',
                    city: 'test city',
                    state: 'test state',
                    zip: 'test zip',
                    plus4: 'test plus4',
                    country: 'test country',
                    cardCode: 'V',
                    cardNbr: '123123',
                    expMonth: 1,
                    expYear: 9999,
                    nameOnCard: 'test name',
                    displayCountry: 'USA',
                    international: false
                },
                isCreditCard: true
            });

            expect(state.go).toHaveBeenCalledTimes(1);
            expect(state.go).toHaveBeenCalledWith(nextState);
        });

        it('should go through credit flow with new address', async () => {
            const nextState: StateConfig = {
                name: 'test'
            };
            component.billingInfo.billingType = BillingType.Credit;
            component.checkBoxFlag = IAddressCheckBoxFlag.New;

            await component.submitBillingInfo(nextState);

            expect(genericRepo.dataFactory.SetBillingInfoCreateAccountViolation).toHaveBeenCalledTimes(1);
            expect(genericRepo.dataFactory.SetBillingInfoCreateAccountViolation).toHaveBeenCalledWith({
                creditCardPaymentMethod: {
                    firstName: null,
                    lastName: null,
                    internationalAddress: null,
                    address1: 'new test address1',
                    address2: 'new test address2',
                    city: 'new test city',
                    state: 'new test state',
                    zip: 'new test zip',
                    plus4: 'new test plus4',
                    country: 'new test country',
                    cardCode: 'V',
                    cardNbr: '123123',
                    expMonth: 1,
                    expYear: 9999,
                    nameOnCard: 'test name',
                    displayCountry: 'USA',
                    international: false
                },
                isCreditCard: true
            });

            expect(state.go).toHaveBeenCalledTimes(1);
            expect(state.go).toHaveBeenCalledWith(nextState);
        });

        it('should go through credit flow and not call api.SetBillingInfoCreateAccountViolation() if creditEntry.submit() returns false',
            async () => {
                (mockCreditEntry.submit as any).and.resolveTo(false);

                const nextState: StateConfig = {
                    name: 'test'
                };
                component.billingInfo.billingType = BillingType.Credit;
                component.checkBoxFlag = IAddressCheckBoxFlag.Default;

                await component.submitBillingInfo(nextState);

                expect(genericRepo.dataFactory.SetBillingInfoCreateAccountViolation).toHaveBeenCalledTimes(0);
            });

        it('should go through EFT flow', async () => {
            const nextState: StateConfig = {
                name: 'test'
            };
            component.billingInfo.billingType = BillingType.Eft;
            component.checkBoxFlag = IAddressCheckBoxFlag.Default;

            //API expects this specific casing (first letter capitalized),
            //while the components on this page erturned / expected all caps
            const expectedAccountTypeDisplay = component.billingInfo.eft.accountType === BankAccountType.Business
                ? 'Business'
                : 'Personal';

            await component.submitBillingInfo(nextState);

            expect(genericRepo.dataFactory.SetBillingInfoCreateAccountViolation).toHaveBeenCalledTimes(1);
            expect(genericRepo.dataFactory.SetBillingInfoCreateAccountViolation).toHaveBeenCalledWith({
                eFTPaymentMethod: {
                    accountType: component.billingInfo.eft.accountType,
                    name: 'test name',
                    routingNumber: '1111111111',
                    accountNumber: '1234',
                    displayCountry: 'USA',
                    international: false,
                    nameOnBankAccount: 'test name',
                    accountTypeDisplay: expectedAccountTypeDisplay,
                    address1: 'test address1',
                    address2: 'test address2',
                    city: 'test city',
                    state: 'test state',
                    zip: 'test zip',
                    plus4: 'test plus4',
                    country: 'test country',
                    firstName: null,
                    lastName: null,
                    internationalAddress: null

                },
                isCreditCard: false
            });

            expect(state.go).toHaveBeenCalledTimes(1);
            expect(state.go).toHaveBeenCalledWith(nextState,
                {
                    eftAddress: {
                        address1: 'test address1',
                        address2: 'test address2'
                    }
                });
        });
    });
    describe('cancel', () => {
        it('calls state.go', async () => {
            (dialogService.openGenericModal as jasmine.Spy).and.returnValue(null);
            const cancelState: StateConfig = {
                name: 'cancelState'
            };
            await component.cancel(cancelState);
            expect(state.go).toHaveBeenCalled();
        });

        it('doesnt call state.go', async () => {
            (dialogService.openGenericModal as jasmine.Spy).and.returnValue(true);
            const cancelState: StateConfig = {
                name: 'cancelState'
            };
            await component.cancel(cancelState);
            expect(state.go).not.toHaveBeenCalled();
        });
    });
});
