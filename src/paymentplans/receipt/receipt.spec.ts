import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { StateService } from '@uirouter/angular';
import { BillingType } from 'common/models';
import { DateWithTimeZoneService, ResponseErrorService } from 'common/services';
import { } from 'jasmine';
import { PipesModule } from 'pipes/module';
import { changesStable } from 'testing';
import { ValidationModule } from 'validation/module';
import { PaymentPlansStateNames, stateNames } from '../constants';
import { FrameComponent } from '../frame/frame.component';
import { PlateDataService } from '../services';
import { WebApiService } from '../services/webApi.service';
import { ReceiptComponent } from './receipt.component';


describe('PaymentPlansReceiptComponent tests', () => {

    let fixture: ComponentFixture<ReceiptComponent>;
    let component: ReceiptComponent;

    let dataService: PlateDataService;
    let state: StateService;
    let parent: FrameComponent;

    let api: jasmine.SpyObj<any>;
    let responseErrorService: ResponseErrorService;
    let dateWithTimeZoneService: jasmine.SpyObj<DateWithTimeZoneService>;
    beforeEach(async () => {

        state = jasmine.createSpyObj('state', ['go']);
        dataService = jasmine.createSpyObj('dataService', ['getPaymentResponse', 'setPaymentPlans']);
        api = jasmine.createSpyObj('api', ['ezTagSearchPaymentPlans', 'violationsPaymentPlansSearch']);
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree']);
        parent = jasmine.createSpyObj('parent', ['ngOnInit', 'scrollToTop']);
        dateWithTimeZoneService = jasmine.createSpyObj('DateWithTimeZoneService', ['withoutOffsetToCentral', 'withoutOffsetToCentral']);
        await TestBed
            .configureTestingModule({
                declarations: [
                    ReceiptComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule, FormsModule, ValidationModule],
                providers: [
                    { provide: FrameComponent, useFactory: () => parent },
                    { provide: StateService, useFactory: () => state },
                    { provide: WebApiService, useFactory: () => api },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: PlateDataService, useFactory: () => dataService },
                    { provide: DateWithTimeZoneService, useFactory: () => dateWithTimeZoneService },
                    { provide: PaymentPlansStateNames, useFactory: () => stateNames }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(ReceiptComponent);
        component = fixture.debugElement.componentInstance;

        component.cmsContent = {
            Title: '',
            LongDescription: '',
            ShortDescription: '',
            paymentAmount: '',
            paymentDate: '',
            paymentMethod: '',
            amountEzTag: '',
            totalAmount: '',
            billingInfoHeader: '',
            Children: [{
                ShortDescription: 'text'
            }]
        };
    });

    describe('formatCurrentDate', () => {

        beforeEach(() => {
            parent.planData = {
                selectedPaymentPlan: {
                    nextUpcomingInstallmentDate: '2020-04-23T12:00:00Z',
                    paymentPlanId: 123456789,
                    settlementAmount: 10000,
                    discountAmount: 0,
                    paidAmount: 0,
                    balanceAmount: 4000,
                    status: 'Open',
                    agency: 'HCTRA',
                    mobileAgency: 'h',
                    nextInstallmentAmount: 100,
                    nextInstallmentDate: '',
                    billingMethod: null
                },
                paymentAmount: 3141.59,
                billingMethod: {
                    address: null,
                    billingType: null,
                    creditCardPaymentMethod: null,
                    eftPaymentMethod: null
                },
                addAccountFunds: null,
                addAccountFundsAmount: 20
            };
        });

        it('can return current date', async () => {
            parent.planData.billingMethod = {
                billingType: BillingType.Credit,
                eftPaymentMethod: null,
                creditCardPaymentMethod: {
                    cardCode: '123456',
                    cardNbr: '123456789',
                    expMonth: null,
                    expYear: null,
                    nameOnCard: 'TEST',
                    paypageRegistrationId: null,
                    omniToken: null,
                    primary: null,
                    isNewCard: null,
                    address1: '',
                    city: '',
                    country: ''
                },
                address: {
                    address1: '',
                    zip: '12345',
                    city: '',
                    country: 'USA'
                }
            };
            await component.formatCurrentDate();
            //2 from on init and 1 from the actual call
            expect(dateWithTimeZoneService.withoutOffsetToCentral).toHaveBeenCalledTimes(1);
        });
    });

    describe('backToPaymentPlans', () => {

        beforeEach(() => {
            parent.planData = {
                selectedPaymentPlan: {
                    nextUpcomingInstallmentDate: '2020-04-23T12:00:00Z',
                    paymentPlanId: 123456789,
                    settlementAmount: 10000,
                    discountAmount: 0,
                    paidAmount: 0,
                    balanceAmount: 4000,
                    status: 'Open',
                    agency: 'HCTRA',
                    mobileAgency: 'h',
                    nextInstallmentAmount: 100,
                    nextInstallmentDate: '',
                    billingMethod: null
                },
                paymentAmount: 3141.59,
                billingMethod: {
                    address: null,
                    billingType: null,
                    creditCardPaymentMethod: null,
                    eftPaymentMethod: null
                },
                addAccountFunds: null,
                addAccountFundsAmount: 20
            };


            (dataService.setPaymentPlans as jasmine.Spy).and.returnValue({});
            (state.go as jasmine.Spy).and.callFake(() => { });
        });

        it('in ezTag Flow', async () => {
            component.isEzTagFlow = true;
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);
            parent.planData.billingMethod = {
                billingType: BillingType.Credit,
                eftPaymentMethod: null,
                creditCardPaymentMethod: {
                    cardCode: '123456',
                    cardNbr: '123456789',
                    expMonth: null,
                    expYear: null,
                    nameOnCard: 'TEST',
                    paypageRegistrationId: null,
                    omniToken: null,
                    primary: null,
                    isNewCard: null,
                    address1: '',
                    city: '',
                    country: ''
                },
                address: {
                    address1: '',
                    zip: '12345',
                    city: '',
                    country: 'USA'
                }
            };
            const nextState = {};
            await component.backToPaymentPlans(nextState);

            expect(api.ezTagSearchPaymentPlans).toHaveBeenCalledTimes(1);
            expect(api.violationsPaymentPlansSearch).toHaveBeenCalledTimes(0);
        });

        it('in violation Flow', async () => {

            component['paymentResponse'] = {
                originalRequest: {
                    eftPaymentMethod: null,
                    creditCardPaymentMethod: null,
                    creditCard: null,
                    paymentPlanId: 123456,
                    invoiceNumber: 123,
                    amount: null,
                    email: null,
                    licensePlate: 'ABC123',
                    licenseState: 'TX',

                    accountPayment: null,
                    accountPaymentAmount: null
                },
                errors: [],
                alerts: [],
                exception: null,
                sessionTimedOut: false,
                accountStatus: null
            };

            parent.planData.billingMethod = {
                billingType: BillingType.Credit,
                eftPaymentMethod: null,
                creditCardPaymentMethod: {
                    cardCode: '123456',
                    cardNbr: '123456789',
                    expMonth: null,
                    expYear: null,
                    nameOnCard: 'TEST',
                    paypageRegistrationId: null,
                    omniToken: null,
                    primary: null,
                    isNewCard: null,
                    address1: '',
                    city: '',
                    country: ''
                },
                address: {
                    address1: '',
                    zip: '12345',
                    city: '',
                    country: 'USA'
                }
            };
            const nextState = {};
            await component.backToPaymentPlans(nextState);

            expect(api.ezTagSearchPaymentPlans).toHaveBeenCalledTimes(0);
            expect(api.violationsPaymentPlansSearch).toHaveBeenCalledTimes(1);
        });
    });

    describe('isMaxPayment', () => {
        it('return TRUE when paymentAmmount EQUAL to balance ammount', async () => {
            component.isEzTagFlow = true;
            parent.planData = {
                selectedPaymentPlan: {
                    nextUpcomingInstallmentDate: '2020-04-23T12:00:00Z',
                    paymentPlanId: 123456789,
                    settlementAmount: 10000,
                    discountAmount: 0,
                    paidAmount: 0,
                    balanceAmount: 3141.59,
                    status: 'Open',
                    agency: 'HCTRA',
                    mobileAgency: 'h',
                    nextInstallmentAmount: 100,
                    nextInstallmentDate: '',
                    billingMethod: null
                },
                paymentAmount: 3141.59,
                billingMethod: {
                    address: null,
                    billingType: null,
                    creditCardPaymentMethod: null,
                    eftPaymentMethod: null
                },
                addAccountFunds: null,
                addAccountFundsAmount: 20
            };
            parent.planData.billingMethod = {
                billingType: BillingType.Credit,
                eftPaymentMethod: null,
                creditCardPaymentMethod: {
                    cardCode: '123456',
                    cardNbr: '123456789',
                    expMonth: null,
                    expYear: null,
                    nameOnCard: 'TEST',
                    paypageRegistrationId: null,
                    omniToken: null,
                    primary: null,
                    isNewCard: null,
                    address1: '',
                    city: '',
                    country: ''
                },
                address: {
                    address1: '',
                    zip: '12345',
                    city: '',
                    country: 'USA'
                }
            };
            const nextState = {};
            await changesStable(fixture);

            expect(component.isMaxPayment).toEqual(true);

        });


        it('return FALSE when paymentAmmount NOT EQUAL to balance ammount', async () => {
            component.isEzTagFlow = true;
            parent.planData = {
                selectedPaymentPlan: {
                    nextUpcomingInstallmentDate: '2020-04-23T12:00:00Z',
                    paymentPlanId: 123456789,
                    settlementAmount: 10000,
                    discountAmount: 0,
                    paidAmount: 0,
                    balanceAmount: 4000,
                    status: 'Open',
                    agency: 'HCTRA',
                    mobileAgency: 'h',
                    nextInstallmentAmount: 100,
                    nextInstallmentDate: '',
                    billingMethod: null
                },
                paymentAmount: 3141.59,
                billingMethod: {
                    address: null,
                    billingType: null,
                    creditCardPaymentMethod: null,
                    eftPaymentMethod: null
                },
                addAccountFunds: null,
                addAccountFundsAmount: 20
            };
            parent.planData.billingMethod = {
                billingType: BillingType.Credit,
                eftPaymentMethod: null,
                creditCardPaymentMethod: {
                    cardCode: '123456',
                    cardNbr: '123456789',
                    expMonth: null,
                    expYear: null,
                    nameOnCard: 'TEST',
                    paypageRegistrationId: null,
                    omniToken: null,
                    primary: null,
                    isNewCard: null,
                    address1: '',
                    city: '',
                    country: ''
                },
                address: {
                    address1: '',
                    zip: '12345',
                    city: '',
                    country: 'USA'
                }
            };
            const nextState = {};
            await changesStable(fixture);

            expect(component.isMaxPayment).toEqual(false);

        });
    });

    describe('hasOverage', () => {
        it('return TRUE when paymentAmmount LARGER to nextInstallmentAmount', async () => {
            component.isEzTagFlow = true;
            parent.planData = {
                selectedPaymentPlan: {
                    nextUpcomingInstallmentDate: '2020-04-23T12:00:00Z',
                    paymentPlanId: 123456789,
                    settlementAmount: 10000,
                    discountAmount: 0,
                    paidAmount: 0,
                    balanceAmount: 3141.59,
                    status: 'Open',
                    agency: 'HCTRA',
                    mobileAgency: 'h',
                    nextInstallmentAmount: 100,
                    nextInstallmentDate: '',
                    billingMethod: null
                },
                paymentAmount: 3141.59,
                billingMethod: {
                    address: null,
                    billingType: null,
                    creditCardPaymentMethod: null,
                    eftPaymentMethod: null
                },
                addAccountFunds: null,
                addAccountFundsAmount: 20
            };
            parent.planData.billingMethod = {
                billingType: BillingType.Credit,
                eftPaymentMethod: null,
                creditCardPaymentMethod: {
                    cardCode: '123456',
                    cardNbr: '123456789',
                    expMonth: null,
                    expYear: null,
                    nameOnCard: 'TEST',
                    paypageRegistrationId: null,
                    omniToken: null,
                    primary: null,
                    isNewCard: null,
                    address1: '',
                    city: '',
                    country: ''
                },
                address: {
                    address1: '',
                    zip: '12345',
                    city: '',
                    country: 'USA'
                }
            };
            const nextState = {};
            await changesStable(fixture);

            expect(component.hasOverage).toEqual(true);

        });


        it('return FALSE when paymentAmmount NOT LARGER to balance ammount', async () => {
            component.isEzTagFlow = true;
            parent.planData = {
                selectedPaymentPlan: {
                    nextUpcomingInstallmentDate: '2020-04-23T12:00:00Z',
                    paymentPlanId: 123456789,
                    settlementAmount: 10000,
                    discountAmount: 0,
                    paidAmount: 0,
                    balanceAmount: 4000,
                    status: 'Open',
                    agency: 'HCTRA',
                    mobileAgency: 'h',
                    nextInstallmentAmount: 100,
                    nextInstallmentDate: '',
                    billingMethod: null
                },
                paymentAmount: 50,
                billingMethod: {
                    address: null,
                    billingType: null,
                    creditCardPaymentMethod: null,
                    eftPaymentMethod: null
                },
                addAccountFunds: null,
                addAccountFundsAmount: 20
            };
            parent.planData.billingMethod = {
                billingType: BillingType.Credit,
                eftPaymentMethod: null,
                creditCardPaymentMethod: {
                    cardCode: '123456',
                    cardNbr: '123456789',
                    expMonth: null,
                    expYear: null,
                    nameOnCard: 'TEST',
                    paypageRegistrationId: null,
                    omniToken: null,
                    primary: null,
                    isNewCard: null,
                    address1: '',
                    city: '',
                    country: ''
                },
                address: {
                    address1: '',
                    zip: '12345',
                    city: '',
                    country: 'USA'
                }
            };
            const nextState = {};
            await changesStable(fixture);

            expect(component.hasOverage).toEqual(false);

        });
    });

});
