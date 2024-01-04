import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';

import { ReceiptComponent } from './receipt.component';
import { StateService } from '@uirouter/core';
import { CurrentUserService, ToasterService } from '../../common/services';
import { FrameComponent } from '../frame/frame.component';
import { StateConfig } from '../../common/interfaces';
import { BillingInfo } from '../../common/models';
import { stateNames as profileStateNames } from 'profile/constants';

describe('component: make-payment-receipt-component', () => {

    let fixture: ComponentFixture<ReceiptComponent>;
    let component: ReceiptComponent;
    let stateService: StateService;
    let currentUserService: CurrentUserService;
    let parent: FrameComponent;
    let toasterService: ToasterService;

    beforeEach(async () => {

        parent = {
            paymentInfo: null,
            getDate: jasmine.createSpy('getDate') as any,
            scrollToTop: jasmine.createSpy('scrollToTop') as any,
            checkUserRolePendingFunds: jasmine.createSpy('checkUserRolePendingFunds') as any
        } as FrameComponent;

        stateService = jasmine.createSpyObj('stateService', ['go']);
        toasterService = jasmine.createSpyObj('toasterService', ['show']);
        currentUserService = jasmine.createSpyObj('currentUserService', ['getCurrentUser']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    ReceiptComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: FrameComponent, useFactory: () => parent },
                    { provide: StateService, useFactory: () => stateService },
                    { provide: CurrentUserService, useFactory: () => currentUserService },
                    { provide: ToasterService, useFactory: () => toasterService }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(ReceiptComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(component).toBeDefined();

        });
    });


    describe('accountNumber', () => {

        it('can get accountNumber from currentUserService', () => {

            const currentUser = {
                acctId: 123456789
            };

            (currentUserService.getCurrentUser as jasmine.Spy).and.returnValue(currentUser);

            const accountNumber = component.accountNumber;

            expect(accountNumber).toBe(currentUser.acctId);
        });

    });

    describe('ngOnInit', () => {

        it('can init all data', () => {

            const billing = {
            } as BillingInfo;

            const date = new Date();

            (parent.getDate as jasmine.Spy).and.returnValue(date);

            parent.paymentInfo = {
                addToPaymentList: true,
                makePrimary: true,
                amount: 1234,
                ...billing
            } as any;

            component.cmsContent = {} as any;

            component.ngOnInit();

            expect(component.billingInfo).toEqual(billing);
            expect(component.paymentAmount).toBe(parent.paymentInfo.amount);
            expect(component.paymentDate).toBe(date);

        });

        it('shows toaster if payment method added', () => {

            component.cmsContent = {
                paymentAdded: 'added'
            } as any;

            parent.paymentInfo = {
                addToPaymentList: true,
                makePrimary: false
            } as any;

            component.ngOnInit();

            expect(toasterService.show).toHaveBeenCalledWith('Success', component.cmsContent.paymentAdded);

        });

        it('shows toaster if primary method added', () => {

            component.cmsContent = {
                paymentAdded: 'added'
            } as any;

            parent.paymentInfo = {
                addToPaymentList: false,
                makePrimary: true
            } as any;

            component.ngOnInit();

            expect(toasterService.show).toHaveBeenCalledWith('Success', component.cmsContent.paymentAdded);

        });

        it('shows no toaster if no method added', () => {

            parent.paymentInfo = {
                addToPaymentList: false,
                makePrimary: false
            } as any;

            component.ngOnInit();

            expect(toasterService.show).not.toHaveBeenCalled();

        });
    });

    describe('nextStep', () => {

        it('can go next step', async () => {

            const state = {} as StateConfig;

            await component.nextStep(state);

            expect(stateService.go).toHaveBeenCalledWith(state);

        });

    });

    describe('viewPaymentMethods', () => {

        it('can navigate to payment methods', async () => {

            await component.viewPaymentMethods();

            expect(stateService.go).toHaveBeenCalledWith(profileStateNames.UpdateBillingInformation);

        });

    });
});
