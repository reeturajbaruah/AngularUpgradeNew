import { Component, EventEmitter, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { StateRegistry } from '@uirouter/core';
import { CmsReplacementService } from 'cms/services';
import { CreditCardTypeService } from 'common/billing';
import { BillingInfoUtilitiesService } from 'common/billing/billingInfoUtilities.service';
import { CountryConversionService } from 'common/conversions';
import { StateConfig } from 'common/interfaces';
import { BankAccountType, BillingType } from 'common/models';
import { CommonModule } from 'common/module';
import { DialogService, GenericRepoService, ResponseErrorService } from 'common/services';
import { WizardComponent, WizardStateResolverFactory } from 'common/ui';
import {
    InjectionValues as BillingInjectionValues
} from 'common/ui/modals/billingModal/billingModal.component';
import { WizardTestingProvider } from 'common/ui/wizard/wizard.testUtility';
import { } from 'jasmine';
import { PipesModule } from 'pipes/module';
import { changesStable } from 'testing';
import { ValidationModule } from 'validation/module';
import { IMailingInfo } from '../../cavve/interfaces';
import { FrameComponent } from '../frame/frame.component';
import { BillingMethod, PlateDataService } from '../services';
import { PaymentOptions, SelectPaymentComponent } from './selectPayment.component';


describe('SelectPaymentPlanPaymentComponent tests', () => {

    let fixture: ComponentFixture<SelectPaymentComponent>;
    let component: SelectPaymentComponent;
    let form: NgForm;

    let dataService: PlateDataService;
    let state: StateService;
    let dialog: jasmine.SpyObj<MatDialog>;
    let parent: FrameComponent;

    let creditCardTypeService: jasmine.SpyObj<any>;
    let countryConversionService: jasmine.SpyObj<CountryConversionService>;
    let billingInfoUtilitiesService: jasmine.SpyObj<BillingInfoUtilitiesService>;
    let responseErrorService: ResponseErrorService;
    let cmsReplacementService: CmsReplacementService;
    let genericRepo: any;

    let dialogService: DialogService;
    beforeEach(async () => {
        dialogService = jasmine.createSpyObj('DialogService', ['openSliderCentered']);
        dialog = jasmine.createSpyObj('MatDialog', ['open']);
        state = jasmine.createSpyObj('state', ['go']);
        dataService = jasmine.createSpyObj('dataService', ['setBillingMethod']);

        creditCardTypeService = jasmine.createSpyObj('creditCardTypeService', ['cardCodeToName']);

        creditCardTypeService.cardCodeToName.and.returnValue('CARDTYPE');

        countryConversionService = jasmine.createSpyObj('countryConversionService', ['isValidCountryCode', 'countryNameToCode']);
        billingInfoUtilitiesService = jasmine.createSpyObj('billingInfoUtilitiesService', ['isInternationalAddress']);
        genericRepo = {
            dataFactory: {
                getPersonalInfo: jasmine.createSpy('getPersonalInfo'),
                getStates: jasmine.createSpy('getStates'),
                getCountries: jasmine.createSpy('getCountries'),
                getAllPaymentMethods: jasmine.createSpy('getAllPaymentMethods')
            }
        };
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree']);

        parent = jasmine.createSpyObj('parent', ['ngOnInit', 'scrollToTop', 'getCachedEftMailingInfo', 'setCachedEftMailingInfo']);
        cmsReplacementService = jasmine.createSpyObj('cmsRepServ', ['getTemplateTransformer']);
        (cmsReplacementService.getTemplateTransformer as jasmine.Spy).and.returnValue(() => '');


        await TestBed
            .configureTestingModule({
                declarations: [
                    SelectPaymentComponent,
                  //  WizardComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule, FormsModule, ValidationModule, BrowserAnimationsModule, CommonModule],
                providers: [
                    { provide: DialogService, useFactory: () => dialogService },
                    { provide: FrameComponent, useFactory: () => parent },
                    { provide: PlateDataService, useFactory: () => dataService },
                    { provide: StateService, useFactory: () => state },
                    { provide: UIRouterGlobals, useFactory: () => ({}) },
                    { provide: StateRegistry, useFactory: () => ({}) },
                    { provide: MatDialog, useFactory: () => dialog },
                    { provide: CountryConversionService, useFactory: () => countryConversionService },
                    { provide: BillingInfoUtilitiesService, useFactory: () => billingInfoUtilitiesService },
                    { provide: CreditCardTypeService, useFactory: () => creditCardTypeService },
                    { provide: GenericRepoService, useFactory: () => genericRepo },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: CmsReplacementService, useFactory: () => cmsReplacementService},
                    WizardTestingProvider
                ]
            }).compileComponents();

        fixture = TestBed.createComponent(SelectPaymentComponent);
        component = fixture.debugElement.componentInstance;
        form = fixture.debugElement.query(By.directive(NgForm)).references.Form as NgForm;

    });

    beforeEach(() => {

        parent.planData = {
            billingMethod: {
                address: null,
                eftPaymentMethod: null,
                creditCardPaymentMethod: null
            },
            selectedPaymentPlan: {
                paymentPlanId: 493722,
                settlementAmount: 43.15,
                discountAmount: 0,
                paidAmount: 0,
                balanceAmount: 43.15,
                status: 'Open',
                agency: 'HCTRA',
                mobileAgency: 'h',
                nextInstallmentAmount: 14.38,
                nextInstallmentDate: '2018-04-23',
                nextUpcomingInstallmentDate: null,
                billingMethod: null,
                isSelected: true
            },
            paymentAmount: null,
            addAccountFunds: null,
            addAccountFundsAmount: null
        };

        component.cmsContent = {
            Title: '',
            ezTagPaymentHeader: '',
            amountSelectionNoteTemplate: '',
            ShortDescription: '',
            selectPaymentMethod: '',
            selectPaymentAmount: '',
            appliedEzTagPaymentNote: '',
            ezTagAmountSelectionHeader: ''
        };

    });

    describe('With bindings', () => {

        it('does not try to load existing payments', async () => {
            component.isEzTagFlow = false;

            await changesStable(fixture);

            expect(genericRepo.dataFactory.getAllPaymentMethods).not.toHaveBeenCalled();
        });

        it('does try to load existing payments', async () => {
            component.isEzTagFlow = true;

            await changesStable(fixture);

            expect(genericRepo.dataFactory.getAllPaymentMethods).toHaveBeenCalled();
        });

        it('does try to load existing payments and removes duplicate methods', async () => {
            component.isEzTagFlow = true;
            parent.planData.selectedPaymentPlan.billingMethod = {
                creditCardPaymentMethod: {
                    cardCode: 'V',
                    cardNbr: '1111',
                    expMonth: 1,
                    expYear: 2030,
                    nameOnCard: '',
                    address1: '',
                    city: '',
                    country: ''
                },
                eftPaymentMethod: null,
                billingType: component.BillingType.Credit,
                address: null
            };

            genericRepo.dataFactory.getAllPaymentMethods.and.returnValue({
                creditCardPaymentMethod: {
                    cardCode: 'V',
                    cardNbr: '1111',
                    expMonth: 1,
                    expYear: 2030,
                    nameOnCard: '',
                    address1: '',
                    city: '',
                    country: ''
                },
                eftPaymentMethod: null,
                billingType: component.BillingType.Credit,
                address: null
            });

            await changesStable(fixture);

            expect(genericRepo.dataFactory.getAllPaymentMethods).toHaveBeenCalled();
            expect(component.paymentInfo.length).toBe(1);
            expect(component.selectedPaymentMethod.data.creditCardPaymentMethod.cardNbr).toBe('1111');
        });

        it('initializes binding data - no saved payment method', async () => {
            await changesStable(fixture);

            expect(component.selectedPaymentMethod).toBeFalsy();
            expect(component.paymentInfo.length).toBe(0);
        });

        it('initializes binding data - with saved payment method', async () => {
            parent.planData.selectedPaymentPlan.billingMethod = {
                creditCardPaymentMethod: {
                    cardCode: 'V',
                    cardNbr: '1111',
                    expMonth: 1,
                    expYear: 2030,
                    nameOnCard: '',
                    address1: '',
                    city: '',
                    country: ''
                },
                eftPaymentMethod: null,
                billingType: component.BillingType.Credit,
                address: null
            };

            await changesStable(fixture);

            expect(component.paymentInfo.length).toBe(1);
            expect(component.selectedPaymentMethod.data.creditCardPaymentMethod.cardNbr).toBe('1111');
        });

        it('knows if there is an payment overage', async () => {
            await changesStable(fixture);

            component.selectedPaymentAmount = component.PaymentOptions.OtherPaymentAmount;

            component.otherPaymentAmount = 1111.00;
            expect(component.hasOverage).toBeTruthy();

            component.otherPaymentAmount = 1.00;
            expect(component.hasOverage).toBeFalsy();
        });

        describe('can validate model', () => {

            it('validates with installment amount', async () => {

                await changesStable(fixture);

                component.selectedPaymentMethod = {
                    data: {
                        eftPaymentMethod: null,
                        address: null,
                        billingType: component.BillingType.Credit,
                        creditCardPaymentMethod: {
                            cardCode: 'V',
                            cardNbr: '1111',
                            expMonth: 1,
                            expYear: 2030,
                            nameOnCard: '',
                            address1: '',
                            city: '',
                            country: ''
                        }
                    },
                    label: 'test'
                };
                component.selectedPaymentAmount = component.PaymentOptions.NextInstallmentAmount;

                await changesStable(fixture);

                expect(form.valid).toBeTruthy();
            });

            it('validates with balanceAmount amount', async () => {
                await changesStable(fixture);

                component.selectedPaymentMethod = {
                    data: {
                        eftPaymentMethod: null,
                        address: null,
                        billingType: component.BillingType.Credit,
                        creditCardPaymentMethod: {
                            cardCode: 'V',
                            cardNbr: '1111',
                            expMonth: 1,
                            expYear: 2030,
                            nameOnCard: '',
                            address1: '',
                            city: '',
                            country: ''
                        }
                    },
                    label: 'test'
                };

                component.selectedPaymentAmount = component.PaymentOptions.BalanceAmount;

                await changesStable(fixture);

                expect(form.valid).toBeTruthy();
            });

            it('calculates min payment amount', async () => {
                await changesStable(fixture);
                component.selectedPaymentMethod = {
                    data: {
                        eftPaymentMethod: null,
                        address: null,
                        billingType: component.BillingType.Credit,
                        creditCardPaymentMethod: {
                            cardCode: 'V',
                            cardNbr: '1111',
                            expMonth: 1,
                            expYear: 2030,
                            nameOnCard: '',
                            address1: '',
                            city: '',
                            country: ''
                        }
                    },
                    label: 'test'
                };
                component.selectedPaymentAmount = PaymentOptions.OtherPaymentAmount;
                await changesStable(fixture);

                parent.planData.selectedPaymentPlan.nextInstallmentAmount = 1.01;
                parent.planData.selectedPaymentPlan.balanceAmount = 1.01;

                expect(component.minPaymentAmount).toBe(1.0);

                parent.planData.selectedPaymentPlan.nextInstallmentAmount = .99;
                parent.planData.selectedPaymentPlan.balanceAmount = 1.01;

                expect(component.minPaymentAmount).toBe(0.01);

                parent.planData.selectedPaymentPlan.nextInstallmentAmount = 1.01;
                parent.planData.selectedPaymentPlan.balanceAmount = .99;

                expect(component.minPaymentAmount).toBe(0.01);

                component.planData.selectedPaymentPlan = null;
                expect(component.minPaymentAmount).toBe(1.0);
            });

            it('validates with less than 1 dollar if next install amount less than 1 dollar', async () => {
                parent.planData.selectedPaymentPlan.nextInstallmentAmount = .99;

                await changesStable(fixture);

                component.selectedPaymentMethod = {
                    data: {
                        eftPaymentMethod: null,
                        address: null,
                        billingType: component.BillingType.Credit,
                        creditCardPaymentMethod: {
                            cardCode: 'V',
                            cardNbr: '1111',
                            expMonth: 1,
                            expYear: 2030,
                            nameOnCard: '',
                            address1: '',
                            city: '',
                            country: ''
                        }
                    },
                    label: 'test'
                };

                component.selectedPaymentAmount = component.PaymentOptions.NextInstallmentAmount;

                expect(form.valid).toBeTruthy();
            });

            it('validates with less than 1 dollar if balance amount less than 1 dollar', async () => {
                parent.planData.selectedPaymentPlan.balanceAmount = .99;

                await changesStable(fixture);

                component.selectedPaymentMethod = {
                    data: {
                        eftPaymentMethod: null,
                        address: null,
                        billingType: component.BillingType.Credit,
                        creditCardPaymentMethod: {
                            cardCode: 'V',
                            cardNbr: '1111',
                            expMonth: 1,
                            expYear: 2030,
                            nameOnCard: '',
                            address1: '',
                            city: '',
                            country: ''
                        }
                    },
                    label: 'test'
                };

                component.selectedPaymentAmount = component.PaymentOptions.BalanceAmount;

                expect(form.valid).toBeTruthy();
            });
        });

    });

    describe('validation ', () => {

        it('should not disable continue on autopay', async () => {
            await changesStable(fixture);
            component.isEzTagFlow = false;

            component.paymentInfo = [{
                data: {
                    address: null,
                    eftPaymentMethod: null,
                    creditCardPaymentMethod: null
                },
                label: '',
                attached: true,
                stored: false
            }];


            await fixture.whenStable();


            component.selectedPaymentMethod = component.paymentInfo[0];

            await fixture.whenStable();

            component.selectedPaymentAmount = component.PaymentOptions.BalanceAmount;

            await fixture.whenStable();

            expect(component.isWizardDisabled(form.invalid)).toBeFalsy();
        });
        [
            { otherAmountValid: true, selectedPaymentType: PaymentOptions.OtherPaymentAmount, expected: true },
            { otherAmountValid: false, selectedPaymentType: PaymentOptions.OtherPaymentAmount, expected: false },
            { otherAmountValid: true, selectedPaymentType: PaymentOptions.BalanceAmount, expected: true },
            { otherAmountValid: false, selectedPaymentType: PaymentOptions.BalanceAmount, expected: true },
            { otherAmountValid: true, selectedPaymentType: PaymentOptions.NextInstallmentAmount, expected: true },
            { otherAmountValid: false, selectedPaymentType: PaymentOptions.NextInstallmentAmount, expected: true }
        ].forEach(({ otherAmountValid, selectedPaymentType, expected }) => {
            it(`should return ${expected} if otheramount is ${otherAmountValid}, selectedpayment is ${selectedPaymentType}`, async () => {
                await component.ngOnInit();
                await changesStable(fixture);

                component.paymentInfo.push({
                    data: {
                        eftPaymentMethod: null,
                        address: null,
                        billingType: component.BillingType.Credit,
                        creditCardPaymentMethod: {
                            cardCode: 'V',
                            cardNbr: '1111',
                            expMonth: 1,
                            expYear: 2030,
                            nameOnCard: '',
                            address1: '',
                            city: '',
                            country: ''
                        }
                    },
                    label: 'test'
                });

                component.selectedPaymentMethod = component.paymentInfo[0];

                component.selectedPaymentAmount = selectedPaymentType;

                if (component.minPaymentAmount !== undefined) {

                    component.otherPaymentAmount = otherAmountValid ? component.minPaymentAmount : (component.minPaymentAmount - .01);
                }

                await changesStable(fixture);

                expect(form.valid).toBe(expected, form.errors);
            });
        });
    });

    describe('updateOtherAmount ', () => {
        it('should update otherPaymentAmount with balance amount', async () => {

            component.otherPaymentAmount = null;
            parent.planData = {
                billingMethod: {
                    address: null,
                    eftPaymentMethod: null,
                    creditCardPaymentMethod: null
                },
                selectedPaymentPlan: {
                    paymentPlanId: 493722,
                    settlementAmount: 43.15,
                    discountAmount: 0,
                    paidAmount: 0,
                    balanceAmount: 43.15,
                    status: 'Open',
                    agency: 'HCTRA',
                    mobileAgency: 'h',
                    nextInstallmentAmount: 14.38,
                    nextInstallmentDate: '2018-04-23',
                    nextUpcomingInstallmentDate: null,
                    billingMethod: null,
                    isSelected: true
                },
                paymentAmount: null,
                addAccountFunds: null,
                addAccountFundsAmount: null
            };
            await component.updateOtherAmount('balanceAmount');

            expect(component.otherPaymentAmount).toEqual(43.15);
        });

        it('should update otherPaymentAmount with nextBalanceAmount', async () => {

            component.otherPaymentAmount = null;
            parent.planData = {
                billingMethod: {
                    address: null,
                    eftPaymentMethod: null,
                    creditCardPaymentMethod: null
                },
                selectedPaymentPlan: {
                    paymentPlanId: 493722,
                    settlementAmount: 43.15,
                    discountAmount: 0,
                    paidAmount: 0,
                    balanceAmount: 43.15,
                    status: 'Open',
                    agency: 'HCTRA',
                    mobileAgency: 'h',
                    nextInstallmentAmount: 14.38,
                    nextInstallmentDate: '2018-04-23',
                    nextUpcomingInstallmentDate: null,
                    billingMethod: null,
                    isSelected: true
                },
                paymentAmount: null,
                addAccountFunds: null,
                addAccountFundsAmount: null
            };
            await component.updateOtherAmount(PaymentOptions.NextInstallmentAmount);

            expect(component.otherPaymentAmount).toEqual(14.38);
        });

        it('should return empty if other option', async () => {
            await component.updateOtherAmount(PaymentOptions.OtherPaymentAmount);

            expect(component.otherPaymentAmount).toBeUndefined();
        });
    });

    describe('updateDisplayText ', () => {
        it('should update otherPaymentAmount if condition match', async () => {

            component.otherPaymentAmount = null;
            await component.updateDisplayText({
                target: {
                    value: '100,000.00'
                }
            });

            expect(component.otherPaymentAmount.toString()).toEqual('100000.00');
        });


        it('should update otherPaymentAmount if condition NOT match', async () => {

            component.otherPaymentAmount = null;
            await component.updateDisplayText({
                target: {
                    value: '1,.00,000.00'
                }
            });

            expect(component.otherPaymentAmount.toString()).toEqual('0');
        });
    });

    describe('updateAmount ', () => {
        it('should update with FLASE flag', async () => {
            component.planData.selectedPaymentPlan.balanceAmount = 20;
            await component.updateAmount(false);

            expect(component.otherPaymentAmount.toString()).toEqual('20');
        });
    });

    describe('paymentAmount ', () => {
        it('with NextInstallmentAmount option', async () => {
            component.selectedPaymentAmount = PaymentOptions.NextInstallmentAmount;
            component.planData.selectedPaymentPlan.nextInstallmentAmount = 30;
            const result = component.paymentAmount;

            expect(result).toEqual(30);
        });

        it('with NextInstallmentAmount option', async () => {
            component.selectedPaymentAmount = PaymentOptions.OtherPaymentAmount;
            component.planData.selectedPaymentPlan.nextInstallmentAmount = 30;
            component.otherPaymentAmount = 40;
            const result = component.paymentAmount;

            expect(result).toEqual(40);
        });
    });

    describe('promptNewPaymentMethod ', () => {
        it('will prompt getAddress and modal popup and return EFT', async () => {
            (countryConversionService.isValidCountryCode as jasmine.Spy).and.returnValue(true);

            (genericRepo.dataFactory.getPersonalInfo).and.returnValue({
                errors: {},
                MailingAddress: {
                    countryList: ['USA', 'LAO'],
                    country: 'USA'
                }
            });

            const mockBillingInfo = {
                eft: {
                    accountType: BankAccountType.Personal,
                    name: 'TestName',
                    routingNumber: '1234567890',
                    accountNumber: '999999',
                    address1: 'address',
                    city: 'city',
                    country: 'country'
                },
                credit: null,
                billingType: BillingType.Eft
            };

            const data: BillingInjectionValues = {
                billingInformation: {
                    credit: mockBillingInfo.credit,
                    eft: mockBillingInfo.eft
                },
                billingType: mockBillingInfo.billingType,
                stateList: component.states,
                countryList: component.countries
            };

            const event = new EventEmitter<BillingInjectionValues>();

            (dialogService.openSliderCentered as jasmine.Spy).and.returnValue(event.toPromise());


            const promise = component.promptNewPaymentMethod();

            event.emit(data);
            event.complete();
            await promise;

            expect(genericRepo.dataFactory.getPersonalInfo).toHaveBeenCalled();
        });

        it('will prompt getAddress and modal popup and return CREDDIT CARD', async () => {
            (countryConversionService.isValidCountryCode as jasmine.Spy).and.returnValue(true);

            genericRepo.dataFactory.getPersonalInfo.and.returnValue({
                errors: {},
                MailingAddress: {
                    countryList: ['USA', 'LAO'],
                    country: 'USA'
                }
            });



            const mockBillingInfo = {
                eft: null,
                credit: {
                    nameOnCard: 'test',
                    cardCode: '1234567890',
                    cardNbr: '999999',
                    expMonth: 2,
                    expYear: 2099,
                    address1: 'address',
                    city: 'city',
                    country: 'country'
                },
                billingType: BillingType.Credit
            };

            const data: BillingInjectionValues = {
                billingInformation: {
                    credit: mockBillingInfo.credit,
                    eft: mockBillingInfo.eft
                },
                billingType: mockBillingInfo.billingType,
                stateList: component.states,
                countryList: component.countries
            };

            const event = new EventEmitter<BillingInjectionValues>();

            (dialogService.openSliderCentered as jasmine.Spy).and.returnValue(event.toPromise());

            const promise = component.promptNewPaymentMethod();

            event.emit(data);
            event.complete();
            await promise;

            expect(genericRepo.dataFactory.getPersonalInfo).toHaveBeenCalled();
        });

        it('will prompt getAddress and modal popup and return null when Modal Cancel', async () => {
            (countryConversionService.isValidCountryCode as jasmine.Spy).and.returnValue(true);

            genericRepo.dataFactory.getPersonalInfo.and.returnValue({
                errors: {},
                mailingAddress: {
                    countryList: ['USA', 'LAO'],
                    country: 'USA'
                }
            });
            component.isEzTagFlow = true;

            (countryConversionService.isValidCountryCode as jasmine.Spy).and.returnValue(false);
            (countryConversionService.countryNameToCode as jasmine.Spy).and.returnValue('');

            const event = new EventEmitter<BillingInjectionValues>();

            (dialogService.openSliderCentered as jasmine.Spy).and.returnValue(event.toPromise());

            const promise = component.promptNewPaymentMethod();

            event.emit(null);
            event.complete();
            await promise;

            expect(genericRepo.dataFactory.getPersonalInfo).toHaveBeenCalled();
        });
    });

    describe('ngOnInit ', () => {
        it('will trigger all functions with selectAmount to be Balance Amount', async () => {
            component.planData.paymentAmount = 43.15;
            await component.ngOnInit();
            expect(component.otherPaymentAmount).toEqual(component.planData.paymentAmount);
            expect(component.selectedPaymentAmount).toEqual(PaymentOptions.BalanceAmount);
        });

        it('will trigger all functions with selectAmount to be Next Installment Amount', async () => {
            component.planData.paymentAmount = 14.38;
            component.planData.billingMethod.autoPay = true;
            component.planData.selectedPaymentPlan.nextUpcomingInstallmentDate = '2018-05-23';
            await component.ngOnInit();
            expect(component.otherPaymentAmount).toEqual(component.planData.paymentAmount);
            expect(component.selectedPaymentAmount).toEqual(PaymentOptions.NextInstallmentAmount);
        });

        it('will trigger all functions with selectAmount to be Next Other Amount', async () => {
            component.isEzTagFlow = true;
            component.planData.paymentAmount = 8.00;

            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);
            genericRepo.dataFactory.getAllPaymentMethods.and.returnValue({
                creditCards: [
                    {
                        cardCode: '12',
                        cardNbr: '1234567890',
                        expMonth: 2,
                        expYear: 2025,
                        nameOnCard: 'testCred',
                        address1: '',
                        city: '',
                        country: ''
                    }
                ],
                bankAccounts: [
                    {
                        accountType: BankAccountType.Personal,
                        name: 'testBank',
                        routingNumber: '999999999',
                        accountNumber: '000000000'
                    }
                ],
                address: {
                    address1: '',
                    city: '',
                    country: ''
                }
            });


            component.planData.billingMethod = {
                creditCardPaymentMethod: null,
                eftPaymentMethod: {
                    accountType: BankAccountType.Personal,
                    name: 'test',
                    routingNumber: '123456789',
                    accountNumber: '9999999',
                    address1: '',
                    city: '',
                    country: ''
                },
                billingType: component.BillingType.Eft,
                address: null
            };
            await component.ngOnInit();
            expect(component.otherPaymentAmount).toEqual(component.planData.paymentAmount);
            expect(component.selectedPaymentAmount).toEqual(PaymentOptions.OtherPaymentAmount);
        });

        it('will trigger all functions with selectAmount to be Next Other Amount with empty API billing return', async () => {
            component.isEzTagFlow = true;
            component.planData.paymentAmount = 8.00;

            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);
            genericRepo.dataFactory.getAllPaymentMethods.and.returnValue({
                creditCards: [
                    {
                        cardCode: '12',
                        cardNbr: '1234567890',
                        expMonth: 2,
                        expYear: 2025,
                        nameOnCard: 'testCred',
                        address1: '',
                        city: '',
                        country: ''
                    }
                ],
                bankAccounts: [
                    {
                        accountType: BankAccountType.Personal,
                        name: 'testBank',
                        routingNumber: '999999999',
                        accountNumber: '000000000',
                        address1: '',
                        city: '',
                        country: ''
                    }
                ],
                address: null
            });


            component.planData.billingMethod = {
                creditCardPaymentMethod: null,
                eftPaymentMethod: {
                    accountType: BankAccountType.Personal,
                    name: 'test',
                    routingNumber: '123456789',
                    accountNumber: '9999999',
                    address1: '',
                    city: '',
                    country: ''
                },
                billingType: component.BillingType.Eft,
                address: null
            };
            await component.ngOnInit();
            expect(component.otherPaymentAmount).toEqual(component.planData.paymentAmount);
            expect(component.selectedPaymentAmount).toEqual(PaymentOptions.OtherPaymentAmount);
        });

        it('will show no payment methods with API billing returning only blocked cards', async () => {
            component.isEzTagFlow = true;

            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);
            genericRepo.dataFactory.getAllPaymentMethods.and.returnValue({
                creditCards: [
                    {
                        cardCode: '12',
                        cardNbr: '1234567890',
                        expMonth: 2,
                        expYear: 2025,
                        nameOnCard: 'testCred',
                        address1: '',
                        city: '',
                        country: '',
                        isBlocked: true
                    }
                ],
                address: null
            });

            await component.ngOnInit();

            expect(component.paymentInfo).toEqual([]);
        });
    });

    describe('nextStep ', () => {
        it('will trigger', async () => {
            const nextState: StateConfig = {
                name: 'test'
            };

            component.selectedPaymentMethod = {
                data: {
                    creditCardPaymentMethod: {
                        cardCode: 'V',
                        cardNbr: '1111',
                        expMonth: 1,
                        expYear: 2030,
                        nameOnCard: '',
                        address1: '',
                        city: '',
                        country: ''
                    },
                    eftPaymentMethod: null,
                    billingType: component.BillingType.Credit,
                    address: null
                },
                label: ''
            };

            (dataService.setBillingMethod as jasmine.Spy).and.returnValue('');

            await component.nextStep(nextState);
            expect(state.go as jasmine.Spy).toHaveBeenCalledTimes(1);
        });

        it('will trigger with addEzTagPayment', async () => {
            const nextState: StateConfig = {
                name: 'test'
            };
            component.addEzTagPayment = true;
            component.selectedPaymentMethod = {
                data: {
                    creditCardPaymentMethod: {
                        cardCode: 'V',
                        cardNbr: '1111',
                        expMonth: 1,
                        expYear: 2030,
                        nameOnCard: '',
                        address1: '',
                        city: '',
                        country: ''
                    },
                    eftPaymentMethod: null,
                    billingType: component.BillingType.Credit,
                    address: null
                },
                label: ''
            };

            (dataService.setBillingMethod as jasmine.Spy).and.returnValue('');

            await component.nextStep(nextState);
            expect(state.go as jasmine.Spy).toHaveBeenCalledTimes(1);
        });

        describe('saved eft payments', () => {

            it('prompts for address input for stored eft payments (empty cache)', async () => {

                const mailInfo = { firstName: 'first', lastName: 'last' } as IMailingInfo;

                (dialogService.openSliderCentered as jasmine.Spy).and.resolveTo({ mailingInfo: mailInfo });
                (parent.getCachedEftMailingInfo as jasmine.Spy).and.returnValue(null);

                component.paymentInfo = [
                    {
                        data: {
                            eftPaymentMethod: {
                                accountBillingMethodId: 3141
                            },
                            billingType: BillingType.Eft,
                        } as BillingMethod,
                        label: '',
                        attached: false,
                        stored: true
                    }
                ];

                component.selectedPaymentMethod = component.paymentInfo[0];
                const stateConfig = {} as StateConfig;

                await component.nextStep(stateConfig);

                expect(dialogService.openSliderCentered).toHaveBeenCalled();
                expect(parent.getCachedEftMailingInfo).toHaveBeenCalledWith(3141);
                expect(parent.setCachedEftMailingInfo).toHaveBeenCalledWith(3141, mailInfo);
                expect(component.selectedPaymentMethod.data.eftPaymentMethod.nameOnBankAccount).toBe('first last');
                expect(component.selectedPaymentMethod.data.address).toBe(mailInfo);
            });

            it('pre-pops with cache address', async () => {

                const mailInfo = { firstName: 'first', lastName: 'last' } as IMailingInfo;

                (dialogService.openSliderCentered as jasmine.Spy).and.resolveTo({ mailingInfo: mailInfo });
                (parent.getCachedEftMailingInfo as jasmine.Spy).and.returnValue(mailInfo);

                component.paymentInfo = [
                    {
                        data: {
                            eftPaymentMethod: {
                                accountBillingMethodId: 3141
                            },
                            billingType: BillingType.Eft,
                        } as BillingMethod,
                        label: '',
                        attached: false,
                        stored: true
                    }
                ];

                component.selectedPaymentMethod = component.paymentInfo[0];
                const stateConfig = {} as StateConfig;

                await component.nextStep(stateConfig);

                expect(dialogService.openSliderCentered).toHaveBeenCalled();
                const args = (dialogService.openSliderCentered as jasmine.Spy).calls.argsFor(0);
                expect(args[1].mailingInfo).toEqual(mailInfo);

            });
        });
    });
});
