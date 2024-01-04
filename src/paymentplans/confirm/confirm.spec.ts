import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { StateService } from '@uirouter/angular';
import { BankAccountType, BankDetails, BillingType } from 'common/models';
import { GenericRepoService, ResponseErrorService } from 'common/services';
import { } from 'jasmine';
import { PipesModule } from 'pipes/module';
import { changesStable } from 'testing';
import { ValidationModule } from 'validation/module';
import { PaymentPlansStateNames, stateNames } from '../constants';
import { FrameComponent } from '../frame/frame.component';
import { PaymentRequest } from '../interfaces';
import { PlateDataService } from '../services';
import { WebApiService } from '../services/webApi.service';
import { ConfirmComponent } from './confirm.component';


describe('PaymentPlansConfirmComponent tests', () => {

    let fixture: ComponentFixture<ConfirmComponent>;
    let component: ConfirmComponent;

    let dataService: PlateDataService;
    let state: StateService;
    let parent: FrameComponent;
    let paymentPlanApi: WebApiService;
    let genericRepo: any;
    let responseErrorService: ResponseErrorService;

    beforeEach(async () => {

        state = jasmine.createSpyObj('state', ['go']);
        dataService = jasmine.createSpyObj('dataService', ['setPaymentResponse', 'setPlanDataInfo']);
        genericRepo = {
            dataFactory: {
                getPersonalInfo: jasmine.createSpy('getPersonalInfo'),
            }
        };
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree']);
        parent = jasmine.createSpyObj('parent', ['ngOnInit', 'scrollToTop']);
        paymentPlanApi = jasmine.createSpyObj('paymentPlanApi', ['ezTagPayment', 'violationsPayment']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    ConfirmComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule, FormsModule, ValidationModule],
                providers: [
                    { provide: FrameComponent, useFactory: () => parent },
                    { provide: PlateDataService, useFactory: () => dataService },
                    { provide: StateService, useFactory: () => state },
                    { provide: PaymentPlansStateNames, useFactory: () => stateNames },
                    { provide: GenericRepoService, useFactory: () => genericRepo },
                    { provide: WebApiService, useFactory: () => paymentPlanApi },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(ConfirmComponent);
        component = fixture.debugElement.componentInstance;

        component.cmsContent = {
            reviewInfoHeader: '',
            emailInstruction: '',
            amountSelectionNoteTemplate: '',
            ezTagAmountLabel: '',
            paymentAmountLabel: '',
            paymentDateLabel: '',
            paymentDetailsHeader: '',
            paymentDetailsTitle: '',
            paymentPlanAmountLabel: '',
            totalAmountLabel: ''
        };
    });

    describe('Make Payment', () => {

        beforeEach(() => {
            component.emailReceipt = 'random@random.com';

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
                    mobileAgency: null,
                    nextInstallmentAmount: 100,
                    nextInstallmentDate: '',
                    billingMethod: null
                },
                paymentAmount: 3141.59,
                billingMethod: {
                    address: {
                        address1: '',
                        zip: '12345',
                        city: '',
                        country: 'USA',
                        international: false
                    },
                    billingType: null,
                    creditCardPaymentMethod: null,
                    eftPaymentMethod: null
                },
                addAccountFunds: null,
                addAccountFundsAmount: null
            };
        });

        it('can process payment EFT - Personal', async () => {

            await changesStable(fixture);

            parent.planData.billingMethod = {
                billingType: BillingType.Eft,
                eftPaymentMethod: {
                    accountNumber: '123456789',
                    accountType: BankAccountType.Personal,
                    routingNumber: '123421342',
                    name: 'name',
                    address1: null,
                    city: null,
                    country: null
                },
                creditCardPaymentMethod: null,
                address: {
                    address1: '',
                    zip: '12345',
                    city: '',
                    country: 'USA',
                    international: false
                }
            };

            const nextState = {};
            await component.makePayment(nextState);

            expect(paymentPlanApi.violationsPayment).toHaveBeenCalledTimes(1);

            const args = (paymentPlanApi.violationsPayment as jasmine.Spy).calls.argsFor(0);
            const request: PaymentRequest = args[0];

            expect((request.eftPaymentMethod as BankDetails).accountTypeDisplay).toBe('Personal');
        });

        it('can process payment EFT - Personal', async () => {

            await changesStable(fixture);

            parent.planData.billingMethod = {
                billingType: BillingType.Eft,
                eftPaymentMethod: {
                    accountNumber: '123456789',
                    accountType: BankAccountType.Business,
                    routingNumber: '123421342',
                    name: 'name',
                    address1: null,
                    city: null,
                    country: null
                },
                creditCardPaymentMethod: null,
                address: {
                    address1: '',
                    zip: '12345',
                    city: '',
                    country: 'USA',
                    international: false
                }
            };

            const nextState = {};
            await component.makePayment(nextState);

            expect(paymentPlanApi.violationsPayment).toHaveBeenCalledTimes(1);

            const args = (paymentPlanApi.violationsPayment as jasmine.Spy).calls.argsFor(0);
            const request: PaymentRequest = args[0];

            expect((request.eftPaymentMethod as BankDetails).accountTypeDisplay).toBe('Business');
        });

        it('can process payment CC', async () => {

            await changesStable(fixture);

            parent.planData.billingMethod = {
                billingType: BillingType.Credit,
                eftPaymentMethod: null,
                creditCardPaymentMethod: {
                    cardCode: 'CARDTYPE',
                    cardNbr: '1111',
                    expMonth: 1,
                    expYear: 2030,
                    nameOnCard: '',
                    address1: '',
                    city: '',
                    country: ''
                },
                address: {
                    address1: '',
                    zip: '12345',
                    city: '',
                    country: 'USA',
                    international: false
                }
            };

            const nextState = {};
            await component.makePayment(nextState);

            expect(paymentPlanApi.violationsPayment).toHaveBeenCalledTimes(1);
        });
    });

    describe('isMaxPayment', () => {


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
                    mobileAgency: null,
                    nextInstallmentAmount: 100,
                    nextInstallmentDate: '',
                    billingMethod: {
                        address: null,
                        billingType: null,
                        creditCardPaymentMethod: null,
                        eftPaymentMethod: null
                    }
                },
                paymentAmount: 3141.59,
                billingMethod: {
                    address: {
                        address1: '',
                        zip: '12345',
                        city: '',
                        country: 'USA',
                        international: false
                    },
                    billingType: null,
                    creditCardPaymentMethod: null,
                    eftPaymentMethod: null
                },
                addAccountFunds: null,
                addAccountFundsAmount: null
            };

        });

        it('return TRUE for same balance amount', async () => {

            await changesStable(fixture);
            parent.planData.paymentAmount = 20;
            parent.planData.selectedPaymentPlan.balanceAmount = 20;

            const result = component.isMaxPayment;
            expect(result).toEqual(true);
        });
        it('return FALSE for same balance amount', async () => {

            await changesStable(fixture);

            parent.planData.paymentAmount = 20;
            parent.planData.selectedPaymentPlan.balanceAmount = 18;

            const result = component.isMaxPayment;
            expect(result).toEqual(false);
        });
    });
    //
});
