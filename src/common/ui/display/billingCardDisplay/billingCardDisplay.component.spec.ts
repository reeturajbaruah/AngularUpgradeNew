import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { StateService } from '@uirouter/angular';
import { CurrentUserService } from 'common/services';
import { CmsUtilService } from 'cms/services';
import {
    GetPaymentMethodDataResponse,
    PaymentMethodService,
    SimplePaymentMethod
} from 'common/services/paymentMethodService/paymentMethod.service';

import { BillingCardDisplayComponent } from './billingCardDisplay.component';

describe('component: account-dashboard-billing', () => {

    let fixture: ComponentFixture<BillingCardDisplayComponent>;
    let component: BillingCardDisplayComponent;

    let paymentMethodService: PaymentMethodService;
    let currentUser: CurrentUserService;
    let cmsUtilService: jasmine.SpyObj<CmsUtilService>;;
    let state: StateService;

    beforeEach(async () => {

        paymentMethodService = jasmine.createSpyObj('paymentMethodService', ['getPaymentMethodData']);
        cmsUtilService = jasmine.createSpyObj('cmsUtilService', ['generateFileSrc']);
        state = jasmine.createSpyObj('state', ['go']);

        cmsUtilService.generateFileSrc.and.callFake(tagString => 'mock-generateFileSrc-' + tagString);

        await TestBed
            .configureTestingModule({
                declarations: [
                    BillingCardDisplayComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    { provide: PaymentMethodService, useFactory: () => paymentMethodService },
                    { provide: CurrentUserService, useFactory: () => currentUser },
                    { provide: CmsUtilService, useFactory: () => cmsUtilService },
                    { provide: StateService, useFactory: () => state },
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(BillingCardDisplayComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {

        beforeEach(() => {
            spyOn<any>(component, 'getPaymentMethodData').and.callFake(() => { });
        });

        it('should call getPaymentMethodData 1 time', () => {
            //act
            component['ngOnInit']();

            //assert
            expect(component.getPaymentMethodData).toHaveBeenCalledTimes(1);
        });

    });

    describe('getPaymentMethodData', () => {

        it('should call getPaymentMethodData', async () => {

            const paymentMethodData: SimplePaymentMethod = {
                lastFour: '9999',
                expirationDate: new Date('1/1/2099'),
                isExpired: false,
                bigImage: '',
                smallImage: '',
                paymentType: 'VISA',
                isBlocked: false
            };

            const fakeResponse: GetPaymentMethodDataResponse = {
                primaryPaymentMethod: paymentMethodData,
                hasPaymentMethod: true,
                hasPrimary: true,
                accountStatus: null,
                alerts: [],
                errors: [],
                exception: null,
                sessionTimedOut: null
            };

            (paymentMethodService.getPaymentMethodData as jasmine.Spy).and.resolveTo(fakeResponse);

            await (component as any).getPaymentMethodData();

            expect(paymentMethodService.getPaymentMethodData).toHaveBeenCalledTimes(1);

        });

        it('should set noDate to false if isAccountInvoiced is true', async () => {

            const paymentMethodData: SimplePaymentMethod = {
                lastFour: '9999',
                expirationDate: new Date('1/1/2099'),
                isExpired: false,
                bigImage: '',
                smallImage: '',
                paymentType: 'VISA',
                isBlocked: false
            };

            const fakeResponse: GetPaymentMethodDataResponse = {
                primaryPaymentMethod: paymentMethodData,
                hasPaymentMethod: true,
                hasPrimary: true,
                accountStatus: null,
                alerts: [],
                errors: [],
                exception: null,
                sessionTimedOut: null
            };

            (paymentMethodService.getPaymentMethodData as jasmine.Spy).and.resolveTo(fakeResponse);

            component.isAccountInvoiced = true;

            await (component as any).getPaymentMethodData();

            expect(component.noData).toBe(false);
        });

        it('should set noDate to true if no primary payment data', async () => {

            const fakeResponse: GetPaymentMethodDataResponse = {
                primaryPaymentMethod: null,
                hasPaymentMethod: null,
                hasPrimary: null,
                accountStatus: null,
                alerts: [],
                errors: [],
                exception: null,
                sessionTimedOut: null
            };

            (paymentMethodService.getPaymentMethodData as jasmine.Spy).and.resolveTo(fakeResponse);

            await (component as any).getPaymentMethodData();

            expect(component.noData).toBe(true);
        });

    });

    describe('viewBillingClick', () => {
        it('should go to Manage Billing page', () => {

            //Act
            component.viewBillingClick();

            //Assert
            expect(state.go).toHaveBeenCalledTimes(1);

        });
    });

});
