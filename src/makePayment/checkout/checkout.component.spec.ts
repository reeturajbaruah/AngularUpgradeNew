import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';
import { CheckoutComponent } from './checkout.component';
import { StateDeclaration, StateService } from '@uirouter/angular';
import { WebApiService } from '../services/webApi.service';
import { FrameComponent } from '../frame/frame.component';
import { BillingInfo } from '../../common/models';
import { CurrentUserService } from 'common/services';
import { UserRoles } from 'constants/module';

describe('component: make-payment-checkout-component', () => {

    let fixture: ComponentFixture<CheckoutComponent>;
    let component: CheckoutComponent;
    let stateService: StateService;
    let webApiService: WebApiService;
    let parent: FrameComponent;
    let currentUserService: CurrentUserService;
    let userRoles: UserRoles;

    beforeEach(async () => {

        parent = {
            paymentInfo: null,
            getDate: jasmine.createSpy('getDate') as any,
            scrollToTop: jasmine.createSpy('scrollToTop') as any,
            checkUserRolePendingFunds: jasmine.createSpy('checkUserRolePendingFunds') as any
        } as FrameComponent;

        webApiService = jasmine.createSpyObj('webApiService', ['addPaymentMethodInfo', 'makePayment']);
        stateService = jasmine.createSpyObj('stateService', ['go']);
        currentUserService = jasmine.createSpyObj('currentUserService', ['makeSessionActive']);
        userRoles = { active: 'A' } as UserRoles;

        await TestBed
            .configureTestingModule({
                declarations: [
                    CheckoutComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: FrameComponent, useFactory: () => parent },
                    { provide: StateService, useFactory: () => stateService },
                    { provide: WebApiService, useFactory: () => webApiService },
                    { provide: CurrentUserService, useFactory: () => currentUserService },
                    { provide: UserRoles, useFactory: () => userRoles }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(CheckoutComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', async () => {
            expect(component).toBeDefined();
        });
    });

    describe('address', () => {

        it('can get address if credit', () => {

            component.billingInfo = {
                credit: {
                    address1: 'test'
                }
            } as any;

            expect(component.address.address1).toBe('test');

        });

        it('can get address if eft', () => {

            component.billingInfo = {
                eft: {
                    address1: 'test'
                }
            } as any;

            expect(component.address.address1).toBe('test');

        });

    });


    describe('ngOnInit', () => {

        it('can initialize fields', () => {

            const date = new Date();
            (parent.getDate as jasmine.Spy).and.returnValue(date);

            const billingInfo = {
                eft: null,
                credit: null,
                billingType: null
            };

            parent.paymentInfo = {
                amount: 1234,

                addToPaymentList: true,
                makePrimary: true,
                newMethodAdded: true,

                ...billingInfo
            };

            component.ngOnInit();

            expect(component.addToPaymentList).toBeTrue();
            expect(component.makePrimary).toBeTrue();
            expect(component.newMethodAdded).toBeTrue();
            expect(component.paymentDate).toBe(date);
            expect(component.paymentAmount).toBe(1234);
            expect(component.billingInfo).toEqual(billingInfo);
        });

    });

    describe('nextStep', () => {

        it('can make a payment', async () => {

            const state = {} as StateDeclaration;

            component.billingInfo = {
                credit: {},
                eft: {},
                billingType: null
            } as BillingInfo;
            component.paymentAmount = 1234;

            (webApiService.makePayment as jasmine.Spy).and.resolveTo([]);

            await component.nextStep(state);

            expect(webApiService.makePayment).toHaveBeenCalledWith({
                amount: 1234,
                ...component.billingInfo
            });

        });

        it('can handle a payment error', async () => {

            const state = {} as StateDeclaration;

            component.billingInfo = {} as BillingInfo;

            (webApiService.makePayment as jasmine.Spy).and.resolveTo([{ message: 'error' }]);

            await component.nextStep(state);

            expect(webApiService.makePayment).toHaveBeenCalled();

            expect(stateService.go).not.toHaveBeenCalled();

        });

        it('can add payment method when addPaymentMethod is true', async () => {

            const state = {} as StateDeclaration;

            component.billingInfo = {} as BillingInfo;
            component.addToPaymentList = true;

            await component.nextStep(state);

            expect(webApiService.addPaymentMethodInfo).toHaveBeenCalled();

        });

        it('can add payment method when make primary is true', async () => {

            const state = {} as StateDeclaration;

            component.billingInfo = {} as BillingInfo;
            component.makePrimary = true;

            await component.nextStep(state);

            expect(webApiService.addPaymentMethodInfo).toHaveBeenCalled();

        });

        it('does not make payment if add payment method fails', async () => {

            const state = {} as StateDeclaration;

            component.billingInfo = {} as BillingInfo;
            component.addToPaymentList = true;

            (webApiService.addPaymentMethodInfo as jasmine.Spy).and.resolveTo([{ message: 'error' }]);

            await component.nextStep(state);

            expect(webApiService.makePayment).not.toHaveBeenCalled();
            expect(stateService.go).not.toHaveBeenCalled();
        });

        it('can handle a session change when funds are pending', async () => {
            const state = {} as StateDeclaration;

            component.billingInfo = {} as BillingInfo;
            component.isPendingFunds = true;

            await component.nextStep(state);

            expect(currentUserService.makeSessionActive).toHaveBeenCalledWith('A', userRoles.active);
        });

        it('goes to next step', async () => {

            const state = {} as StateDeclaration;

            component.billingInfo = {} as BillingInfo;

            (webApiService.makePayment as jasmine.Spy).and.resolveTo([]);

            await component.nextStep(state);

            expect(stateService.go).toHaveBeenCalledWith(state);
        });

    });

    describe('cancel', () => {

        it('can cancel', () => {
            const state = {} as StateDeclaration;
            component.cancel(state);
            expect(stateService.go).toHaveBeenCalledWith(state);
        });

    });

    describe('previous', () => {

        it('can go prev', () => {
            const state = {} as StateDeclaration;
            component.previous(state);
            expect(stateService.go).toHaveBeenCalledWith(state);
        });

    });


});
