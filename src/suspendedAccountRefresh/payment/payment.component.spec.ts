import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';

import { PaymentComponent } from './payment.component';
import { FrameComponent } from '../frame/frame.component';

import { StateDeclaration, StateService } from '@uirouter/core';
import { ISuspendedPaymentInfo, SuspendedAccountService } from '../services/suspendedAccount.service';
import { BillingInfo, BillingType } from 'common/models';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';


describe('component: payment', () => {

    let fixture: ComponentFixture<PaymentComponent>;
    let component: PaymentComponent;
    let stateService: StateService;
    let suspendedAccountService: SuspendedAccountService;
    let frameComponent: FrameComponent;
    let webStorage: any;
    let storePaymentInfo: ISuspendedPaymentInfo;

    beforeEach(async () => {

        frameComponent = jasmine.createSpyObj('frameComponent', ['scrollToTop']);
        suspendedAccountService = jasmine.createSpyObj('suspendedAccountService', ['test'], ['paymentInfo']);
        webStorage =jasmine.createSpyObj('webStorage', ['getValue']);

        (Object.getOwnPropertyDescriptor(suspendedAccountService, 'paymentInfo').get as jasmine.Spy).and.callFake(() => storePaymentInfo);
        (Object.getOwnPropertyDescriptor(suspendedAccountService, 'paymentInfo').set as jasmine.Spy).and.callFake((v) => storePaymentInfo = v);

        stateService = jasmine.createSpyObj('stateService', ['go']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    PaymentComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule, FormsModule, CommonModule],
                providers: [
                    { provide: StateService, useFactory: () => stateService },
                    { provide: FrameComponent, useFactory: () => frameComponent },
                    { provide: SuspendedAccountService, useFactory: () => suspendedAccountService },

                    { provide: WebStorageService, useFactory: () => webStorage },
                
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(PaymentComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(component).toBeDefined();
        });
    });

    describe('ngOnInit', () => {

        it('should load saved data if stored in sus acc service', () => {

            storePaymentInfo = {} as ISuspendedPaymentInfo;
            const defaultInfo = component.billingInfo;
            component.ngOnInit();

            expect(component.billingInfo).toBe(storePaymentInfo);

        });

    });

    describe('nextStep', () => {

        let statusResult: boolean;
        let state: StateDeclaration;

        beforeEach(() => {
            component.paymentMethod = jasmine.createSpyObj('paymentMethod', ['getStatus']);
            (component.paymentMethod.getStatus as jasmine.Spy).and.callFake(() => Promise.resolve(statusResult));

            state = {} as StateDeclaration;
        });

        it('should not proceed if payment is not ready', async () => {
            statusResult = false;

            storePaymentInfo = {} as ISuspendedPaymentInfo;
            component.billingInfo = {} as BillingInfo;

            await component.nextStep(state);

            expect(stateService.go).not.toHaveBeenCalled();
        });

        it('should proceed if payment method is ready', async () => {
            statusResult = true;

            storePaymentInfo = {} as ISuspendedPaymentInfo;

            component.billingInfo = {} as BillingInfo;

            await component.nextStep(state);

            expect(stateService.go).toHaveBeenCalledWith(state);
        });

        it('should save cc data', async () => {

            const amount = 3141;
            storePaymentInfo = {
                amount,
                credit: {},
                eft: {}
            } as ISuspendedPaymentInfo;

            component.billingInfo = {
                billingType: BillingType.Credit,
                credit: {
                    cardNbr: '1234'
                } as any,
                eft: {}
            } as BillingInfo;

            statusResult = true;

            await component.nextStep({});

            expect(storePaymentInfo.billingType).toBe(BillingType.Credit);
            expect(storePaymentInfo.credit.cardNbr).toBe('1234');
            expect(storePaymentInfo.amount).toBe(amount);
        });

        it('should save eft data', async () => {
            const amount = 3141;
            storePaymentInfo = {
                amount,
                credit: {},
                eft: {}
            } as ISuspendedPaymentInfo;

            component.billingInfo = {
                billingType: BillingType.Eft,
                eft: {
                    accountNumber: '4321'
                } as any,
                credit: {}
            } as BillingInfo;

            statusResult = true;

            await component.nextStep({});

            expect(storePaymentInfo.billingType).toBe(BillingType.Eft);
            expect(storePaymentInfo.eft.accountNumber).toBe('4321');
            expect(storePaymentInfo.amount).toBe(amount);
        });

        it('should save cc make primary', async () => {
            component.makePrimary = true;
            component.billingInfo = {
                billingType: BillingType.Credit,
                credit: {
                    cardNbr: 1234
                } as any,
                eft: {}
            } as BillingInfo;

            storePaymentInfo = {
                amount: 3141
            } as ISuspendedPaymentInfo;

            statusResult = true;

            await component.nextStep({});

            expect(storePaymentInfo.makePrimary).toBeTrue();
            expect(storePaymentInfo.credit.primary).toBeTrue();
        });

        it('should save eft make primary', async () => {
            component.makePrimary = true;
            component.billingInfo = {
                billingType: BillingType.Eft,
                eft: {
                    accountNumber: 1234
                } as any,
                credit: {}
            } as BillingInfo;

            storePaymentInfo = {
                amount: 3141
            } as ISuspendedPaymentInfo;

            statusResult = true;

            await component.nextStep({});

            expect(storePaymentInfo.makePrimary).toBeTrue();
            expect(storePaymentInfo.eft.primary).toBeTrue();
        });

    });

});
