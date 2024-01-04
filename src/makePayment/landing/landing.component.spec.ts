import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';
import { WindowRef } from 'common/providers';

import { LandingComponent } from './landing.component';
import { FrameComponent } from '../frame/frame.component';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { WebApiService } from '../services/webApi.service';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BillingType, PaymentMethodInfo } from '../../common/models';
import { PendingFundsFacadeService } from 'account/pending-funds';
import { CurrentUserService } from 'common/services';

describe('component: make-payment-landing-component', () => {

    let fixture: ComponentFixture<LandingComponent>;
    let component: LandingComponent;
    let windowRef: jasmine.SpyObj<Window>;
    let parent: FrameComponent;
    let stateService: StateService;
    let webApiService: WebApiService;
    let currentUserService: jasmine.SpyObj<CurrentUserService>;

    let allPaymentMethods: PaymentMethodInfo;

    const uiRouterGlobals = {
        params: {}
    } as UIRouterGlobals;
    let facade: jasmine.SpyObj<PendingFundsFacadeService>;

    beforeEach(async () => {
        windowRef = jasmine.createSpyObj('window', ['scrollTo']);
        webApiService = jasmine.createSpyObj('webApiService', ['getAllPaymentMethods']);

        allPaymentMethods = {
            bankAccounts: [],
            creditCards: [],
            maxCards: 2,
            maxEfts: 1
        } as PaymentMethodInfo;

        (webApiService.getAllPaymentMethods as jasmine.Spy).and.resolveTo(allPaymentMethods);

        stateService = jasmine.createSpyObj('stateService', ['go']);

        parent = {
            paymentInfo: null,
            getDate: jasmine.createSpy('getDate') as any,
            scrollToTop: jasmine.createSpy('scrollToTop') as any,
            checkUserRolePendingFunds: jasmine.createSpy('checkUserRolePendingFunds') as any
        } as FrameComponent;

        facade = jasmine.createSpyObj('pendingFundsFacade', ['getRebillAmt']);
        currentUserService = jasmine.createSpyObj('CurrentUserService', ['getCurrentUser']);

        currentUserService.getCurrentUser.and.returnValue({ acctActivity: '' });

        await TestBed
            .configureTestingModule({
                declarations: [
                    LandingComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule, FormsModule],
                providers: [
                    { provide: WindowRef, useFactory: () => windowRef },
                    { provide: FrameComponent, useFactory: () => parent },
                    { provide: StateService, useFactory: () => stateService },
                    { provide: WebApiService, useFactory: () => webApiService },
                    { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals },
                    { provide: PendingFundsFacadeService, useFactory: () => facade },
                    CurrencyPipe,
                    { provide: CurrentUserService, useValue: currentUserService}
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(LandingComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(component).toBeDefined();
        });
    });

    describe('onInit', () => {

        it('calls get all payment method api', async () => {

            await component.ngOnInit();

            expect(webApiService.getAllPaymentMethods).toHaveBeenCalled();
        });

        it('sets max card and eft numbers', async () => {

            await component.ngOnInit();

            expect(component.maxCards).toBe(2);
            expect(component.maxEft).toBe(1);
        });

        it('builds payment methods list', async () => {

            allPaymentMethods.bankAccounts = [
                { primary: false, accountBillingMethodId: 3 } as any,
                { primary: false, accountBillingMethodId: 4, isBlocked: true }
            ];
            allPaymentMethods.creditCards = [
                { primary: false, accountBillingMethodId: 2 } as any,
                { primary: true, accountBillingMethodId: 1 } as any,
            ];

            await component.ngOnInit();

            expect(component.paymentMethods).toBeDefined();
            expect(component.paymentMethods.length).toBe(3);

            expect(component.paymentMethods[0].credit).toBeDefined();
            expect(component.paymentMethods[0].credit.accountBillingMethodId).toBe(1);
            expect(component.paymentMethods[0].credit.primary).toBeTruthy();
            expect(component.paymentMethods[0].billingType).toBe(BillingType.Credit);

            expect(component.paymentMethods[1].credit).toBeDefined();
            expect(component.paymentMethods[1].credit.accountBillingMethodId).toBe(2);
            expect(component.paymentMethods[1].credit.primary).toBeFalsy();
            expect(component.paymentMethods[1].billingType).toBe(BillingType.Credit);

            expect(component.paymentMethods[2].eft).toBeDefined();
            expect(component.paymentMethods[2].eft.accountBillingMethodId).toBe(3);
            expect(component.paymentMethods[2].eft.primary).toBeFalsy();
            expect(component.paymentMethods[2].billingType).toBe(BillingType.Eft);


        });

        it('defaults to first payment method if none saved', async () => {

            allPaymentMethods.bankAccounts = [
                { primary: false, accountBillingMethodId: 3 } as any,
            ];
            allPaymentMethods.creditCards = [
                { primary: false, accountBillingMethodId: 2 } as any,
                { primary: true, accountBillingMethodId: 1 } as any,
            ];

            await component.ngOnInit();

            expect(component.selectedMethod).toBeDefined();
            expect(component.selectedMethod.credit).toBeDefined();
            expect(component.selectedMethod.credit.accountBillingMethodId).toBe(1);
        });

        it('defaults payment amount if none saved', async () => {

            await component.ngOnInit();

            expect(component.paymentAmount).toBe(component.defaultPaymentAmount);
        });


        it('defaults payment amount if saved', async () => {

            parent.paymentInfo = {
                amount: 3141.00
            } as any;

            await component.ngOnInit();

            expect(component.paymentAmount).toBe(parent.paymentInfo.amount);
        });

        it('can select a saved payment method', async () => {

            parent.paymentInfo = {
                amount: 3141.00,
                credit: { accountBillingMethodId: 1 },
                billingType: BillingType.Credit
            } as any;

            await component.ngOnInit();

            expect(component.selectedMethod).toBeDefined();
            expect(component.selectedMethod.billingType).toBe(BillingType.Credit);
            expect(component.selectedMethod.credit).toBeDefined();
            expect(component.selectedMethod.credit.accountBillingMethodId).toBe(1);
        });

        it('can add a saved payment method not in user payment method list', async () => {

            parent.paymentInfo = {
                amount: 3141.00,
                credit: { cardNbr: '1234' },
                billingType: BillingType.Credit
            } as any;

            await component.ngOnInit();

            expect(component.selectedMethod).toBeDefined();
            expect(component.selectedMethod.billingType).toBe(BillingType.Credit);
            expect(component.selectedMethod.credit).toBeDefined();
            expect(component.selectedMethod.credit.accountBillingMethodId).toBeFalsy();
            expect(component.selectedMethod.credit.cardNbr).toBe('1234');
        });

    });

    describe('switchTo', () => {

        it('can handle switching from display payment to actual input', async () => {

            component.paymentAmountFocus = false;
            const inputElm = jasmine.createSpyObj('inputElm', ['focus', 'select']);

            const result = component.switchTo(inputElm as HTMLInputElement);
            expect(component.paymentAmountFocus).toBeTruthy();
            expect(inputElm.focus).not.toHaveBeenCalled();
            expect(inputElm.select).not.toHaveBeenCalled();

            await result;

            expect(inputElm.focus).toHaveBeenCalled();
            expect(inputElm.select).toHaveBeenCalled();
        });

    });


    describe('isNonBlockedPaymentMethod', () => {

        [
            { type: BillingType.Credit, isBlocked: true, expectedResult: false },
            { type: BillingType.Credit, isBlocked: false, expectedResult: true },
            { type: BillingType.Eft, isBlocked: true, expectedResult: false },
            { type: BillingType.Eft, isBlocked: false, expectedResult: true }
        ].forEach(({ type, isBlocked, expectedResult }) => {

            it(`returns ${expectedResult} for ${type} when payment is ${isBlocked ? 'blocked' : 'not blocked'}`, () => {

                const actualResult = component.isNonBlockedPaymentMethod({
                    billingType: type,
                    credit: type === BillingType.Credit ? { isBlocked } : undefined,
                    eft: type === BillingType.Eft ? { isBlocked } : undefined
                } as any);

                expect(expectedResult).toBe(actualResult);
            });

        });

    });


    describe('paymentAmountWithCurrency', () => {

        [
            { in: 10, out: '$10.00' },
            { in: 10.01, out: '$10.01' },
            { in: 0.10, out: '$0.10' },
            { in: .20, out: '$0.20' },
            { in: 'test', out: '' },
            { in: null, out: null },
        ].forEach(data => {

            it('can format amount', () => {

                component.paymentAmount = data.in as any;
                expect(component.paymentAmountWithCurrency).toBe(data.out);

            });

        });

    });

    describe('matchingPaymentMethod', () => {

        [
            { source: 'eft', dest: 'eft', sourceId: 3141, destId: 3141, result: true },
            { source: 'credit', dest: 'credit', sourceId: 3141, destId: 3141, result: true },

            { source: 'credit', dest: 'eft', sourceId: 1234, destId: 3141, result: false },
            { source: 'eft', dest: 'credit', sourceId: 3141, destId: 1234, result: false },

            { source: 'eft', dest: 'eft', sourceId: null, destId: 1234, result: false },
            { source: 'eft', dest: 'eft', sourceId: 3141, destId: null, result: false },
            { source: 'credit', dest: 'credit', sourceId: null, destId: null, result: false }

        ].forEach(data => {
            it(`can handle matching ${data.source}@${data.sourceId}->${data.dest}@${data.destId}`, () => {

                const matcher = component.matchingPaymentMethod({
                    [data.source]: { accountBillingMethodId: data.sourceId } as any
                } as any);

                const result = matcher({
                    [data.dest]: { accountBillingMethodId: data.destId }
                } as any);

                expect(result).toBe(data.result);

            });
        });


    });

    describe('getRank', () => {

        [
            { primary: false, billingType: BillingType.Credit, rank: 2 },
            { primary: true, billingType: BillingType.Credit, rank: 6 },

            { primary: false, billingType: BillingType.Eft, rank: 1 },
            { primary: true, billingType: BillingType.Eft, rank: 5 }
        ].forEach(data => {

            it(`sets rank for payment method that ${data.primary ? 'is' : 'is not'} primary and billingType ${data.billingType}`, () => {
                const paymentMethod = { primary: data.primary, billingType: data.billingType } as any;
                const rank = component['getRank'](paymentMethod);
                expect(rank).toBe(data.rank);
            });

        });

    });

    describe('nextStep', () => {

        it('can go to next step', async () => {

            const state = {} as any;

            component.paymentAmount = 31.41;
            component.selectedMethod = {
                credit: { cardNbr: '1234' } as any,
                eft: { accountNumber: '5678' } as any,
                addToPaymentList: true,
                billingType: BillingType.Credit,
                makePrimary: true,
                newMethodAdded: true,
                primary: true
            };

            await component.nextStep(state);

            expect(stateService.go).toHaveBeenCalledWith(state);
            expect(parent.paymentInfo).toBeDefined();
            const { amount, ...rest } = parent.paymentInfo;
            expect(amount).toBe(component.paymentAmount);
            expect(rest).toEqual(component.selectedMethod);
        });

    });

});
