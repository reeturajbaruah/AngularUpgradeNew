import { } from 'jasmine';

import { NO_ERRORS_SCHEMA} from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { PipesModule } from 'pipes/module';
import { ValidationModule } from 'validation/module';
import { WindowRef } from 'common/providers';
import { FormsModule, NgForm } from '@angular/forms';

import { PlateDataService, StateService } from '../services';
import { FrameComponent } from '../frame/frame.component';
import { IMailingInfo } from '../../cavve/interfaces';


describe('PaymentPlansFrameComponent tests', () => {

    let fixture: ComponentFixture<FrameComponent>;
    let component: FrameComponent;

    let dataService: PlateDataService;
    let state: StateService;
    let windowRef: jasmine.SpyObj<Window>;

    beforeEach(async () => {

        state = jasmine.createSpyObj('state',
            ['destroyPaymentPlansCurrentStep', 'getCachedEftAddressInfo',
                'destroyPaymentPlansCurrentStep', 'setCachedEftAddressInfo']
        );
        dataService = jasmine.createSpyObj('dataService', ['getPlanDataInfo']);
        windowRef = jasmine.createSpyObj('window', ['scrollTo']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    FrameComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule, FormsModule, ValidationModule],
                providers: [
                    { provide: StateService, useFactory: () => state },
                    { provide: PlateDataService, useFactory: () => dataService },
                    { provide: WindowRef, useFactory: () => windowRef }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(FrameComponent);
        component = fixture.debugElement.componentInstance;

        component.cmsBaseContent = {
            Title: 'Test',
            Step1: 'Step1',
            Step2: 'Step2',
            Step3: 'Step3',
            Step4: 'Step4'
        };
    });

    describe('onInit', () => {
        it('sucessfully assign data', async () => {
            const mockData = {
                selectedPaymentPlan: {
                    nextUpcomingInstallmentDate: '2020-04-23T12:00:00Z',
                    paymentPlanId: 123456789,
                    settlementAmount: 10000,
                    discountAmount: 0,
                    paidAmount: 0,
                    balanceAmount: 3141.59,
                    status: 'Open',
                    agency: 'HCTRA',
                    mobileAgency: null,
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
            (dataService.getPlanDataInfo as jasmine.Spy).and.returnValues(mockData);

            await component.ngOnInit();

            expect(component.Title).toEqual(component.cmsBaseContent.Title);
            expect(component.planData).toEqual(mockData);
            expect(dataService.getPlanDataInfo).toHaveBeenCalledTimes(1);
        });

        it('populates eft cache', () => {

            const cache = { 1: {} as IMailingInfo, 2: {} as IMailingInfo };

            (state.getCachedEftAddressInfo as jasmine.Spy).and.returnValue(cache);

            component.ngOnInit();

            expect(component['eftMailingInfo'].size).toBe(2);
            expect(component['eftMailingInfo'].get(1)).toBe(cache['1']);
            expect(component['eftMailingInfo'].get(2)).toBe(cache['2']);
        });
    });

    describe('ngOnDestroy', () => {
        it('sucessfully destroy current step', async () => {
            await component.ngOnDestroy();
            expect(state.destroyPaymentPlansCurrentStep).toHaveBeenCalledTimes(1);
        });
    });

    describe('getCachedEftMailingInfo', () => {

        it('can get cached eft addresses', () => {
            const mailInfo = {} as IMailingInfo;
            component['eftMailingInfo'].set(3141, mailInfo);

            const result = component.getCachedEftMailingInfo(3141);
            expect(result).toBe(mailInfo);
        });
    });

    describe('setCachedEftMailingInfo', () => {

        it('set and store eft address', () => {
            const mailInfo1 = {} as IMailingInfo;
            const mailInfo2 = {} as IMailingInfo;

            component['eftMailingInfo'].set(3141, mailInfo1);

            component.setCachedEftMailingInfo(4242, mailInfo2);

            expect(component['eftMailingInfo'].get(4242)).toBe(mailInfo2);
            expect(state.setCachedEftAddressInfo).toHaveBeenCalled();
            const args = (state.setCachedEftAddressInfo as jasmine.Spy).calls.argsFor(0);
            expect(args[0]).toEqual({
                3141: mailInfo1,
                4242: mailInfo2
            });
        });
    });

    describe('scrollToTop', () => {
        it('trigger window scroll', async () => {
            component.isHidden = null;

            await component.scrollToTop();
            expect(windowRef.scrollTo).toHaveBeenCalledTimes(1);
            expect(component.isHidden).toEqual(false);
        });
    });
});
