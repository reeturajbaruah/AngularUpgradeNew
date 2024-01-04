import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { PaymentSummaryComponent } from './paymentSummary.component';

import { DialogService, DialogContent } from 'common/services';

import { TollViolationsModalComponent, InjectionValues } from './tollViolationsModal.component';
import { FrameComponent } from '../frame/frame.component';
import { ENVIRON_CONFIG } from 'common/upgrades';

describe('CAVVE Offer Button PaymentSummary Component', () => {

    let fixture: ComponentFixture<PaymentSummaryComponent>;
    let component: PaymentSummaryComponent;
    let dialogueService: DialogService;
    let parent: FrameComponent;
    let environmentConfig;

    beforeEach(async () => {

        parent = {} as FrameComponent;
        parent.getPlateContainer = jasmine.createSpy('getPlateContainer').and.returnValue({ plate: {} } as any);

        dialogueService = jasmine.createSpyObj('dialogueService', ['openSliderFilled']);
        environmentConfig = {
            isMergeMATandVioOn: false
        };
        await TestBed
            .configureTestingModule({
                declarations: [
                    PaymentSummaryComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    { provide: FrameComponent, useFactory: () => parent },
                    { provide: DialogService, useFactory: () => dialogueService },
                    { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(PaymentSummaryComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('onInit', () => {
        it('should set inital values', () => {
            //Assert
            component.isCreateAccount = false;

            const feesConst = {
                totalViolationsDue: '1',
                totalUninvoicedAmount: '1',
                totalFeesDiscountedDontCreateAccount: '1',
                serviceFee: '1',
                createAccountDiscount: '1',
                createAccountStartingBalance: '1',
                createAccountEZTagFee: '1',
                createAccountPlateTotal: '1',
                dontCreateAccountPlateTotal: '1'
            };

            component.fees = feesConst;

            //Act
            component.ngOnInit();

            //Assert
            expect(component.isCreateAccount).toBe(false);
            expect(component.tollSummary).toEqual({ totalViolationsDue: '1' });
        });

    });

    describe('openTollViolationsModal', () => {
        it('should open a sliding modal with toll details', () => {
            component.openTollViolationsModal();

            expect(dialogueService.openSliderFilled).toHaveBeenCalledWith(TollViolationsModalComponent,
                {
                    tollSummaryDetails: component.tollSummary,
                    plate: parent.getPlateContainer().plate
                } as InjectionValues,
                { title: 'Toll Transactions' } as DialogContent);
        });
    });

});
