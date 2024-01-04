import { FormsModule, NgForm } from '@angular/forms';
import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { PaymentSelectionComponent } from './paymentSelection.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogService } from '../../../services';

import { createFormWrap } from 'testing/utilities';
import { BillingInfo, BillingType, PaymentMethodOptions } from '../../../models';
import { BillingModalComponent } from '../../modals/billingModal/billingModal.component';

describe('PaymentSelect Component', () => {
    let fixture: ComponentFixture<PaymentSelectionComponent>;
    let component: PaymentSelectionComponent;
    let dialogService: DialogService;
    let form: NgForm;

    beforeEach(async () => {

        dialogService = jasmine.createSpyObj('dailogService', ['openSliderCentered']);

        await TestBed
            .configureTestingModule({
                declarations: [PaymentSelectionComponent],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [FormsModule, MatDialogModule],
                providers: [
                    NgForm,
                    { provide: DialogService, useFactory: () => dialogService }
                ]
            })
            .compileComponents();

        const construct = await createFormWrap(PaymentSelectionComponent, () => { });

        fixture = construct.fixture;
        component = construct.component;
        form = construct.form;

    });

    describe('canary', () => {
        it('should pass', async () => {
            expect(component).toBeDefined();
        });
    });

    describe('paymentMethodChanged', () => {

        it('handles when other payment method is selected', () => {

            const spy1 = jasmine.createSpy('selectedPaymentMethodChange');
            const spy2 = jasmine.createSpy('otherPaymentMethodSelected');

            component.selectedPaymentMethod = null;
            const cleanup1 = component.selectedPaymentMethodChange.subscribe(spy1);
            const cleanup2 = component.otherPaymentMethodSelected.subscribe(spy2);

            component.paymentMethodChanged(component.otherMethod);

            expect(spy1).not.toHaveBeenCalled();
            expect(spy2).toHaveBeenCalled();
            
            cleanup1.unsubscribe();
            cleanup2.unsubscribe();

        });

        it('handles when a given payment method is selected', () => {

            const spy1 = jasmine.createSpy('selectedPaymentMethodChange');
            const spy2 = jasmine.createSpy('otherPaymentMethodSelected');

            component.selectedPaymentMethod = null;
            const cleanup1 = component.selectedPaymentMethodChange.subscribe(spy1);
            const cleanup2 = component.otherPaymentMethodSelected.subscribe(spy2);

            const newPayment = {} as (BillingInfo & PaymentMethodOptions);

            component.paymentMethodChanged(newPayment);

            expect(spy1).toHaveBeenCalledWith(newPayment);
            expect(spy2).not.toHaveBeenCalled();

            cleanup1.unsubscribe();
            cleanup2.unsubscribe();
        });

    });

    describe('addNewPaymentMethod', () => {

        [
            { paymentMethods: [], showMakePrimary: true, eftSlots: 1, ccSlots: 2, acctActivity: '' },
            { paymentMethods: [BillingType.Credit], showMakePrimary: false, eftSlots: 1, ccSlots: 1, acctActivity: 'I' },
            { paymentMethods: [BillingType.Eft], showMakePrimary: false, eftSlots: 0, ccSlots: 2, acctActivity: '' },
            { paymentMethods: [BillingType.Eft, BillingType.Credit], showMakePrimary: false, eftSlots: 0, ccSlots: 1, acctActivity: '' },
        ].forEach(data => {            
            it('passes in uiOptions', async () => {

                (dialogService.openSliderCentered as jasmine.Spy).and.resolveTo(null);

                component.paymentMethods = data.paymentMethods.map(billingType => ({
                    billingType
                } as BillingInfo & PaymentMethodOptions));

                await component.addNewPaymentMethod(data.eftSlots, data.ccSlots, data.showMakePrimary, data.acctActivity);

                expect(dialogService.openSliderCentered).toHaveBeenCalledWith(BillingModalComponent, jasmine.any(Object), jasmine.any(Object));


                const args = (dialogService.openSliderCentered as jasmine.Spy).calls.argsFor(0);

                expect(args[1].uiOptions).toBeDefined();
                expect(args[1].uiOptions.isNew).toBeTrue();
                expect(args[1].uiOptions.showMakePrimary).toBe(!component.paymentMethods.some(paymentMethod => paymentMethod?.makePrimary || paymentMethod?.primary) && data.acctActivity !== 'I');
            });
        });


        [
            { paymentMethods: [], openCards: 2, openEfts: 1 },
            { paymentMethods: [BillingType.Credit], openCards: 1, openEfts: 1 },
            { paymentMethods: [BillingType.Eft], openCards: 2, openEfts: 0 },
            { paymentMethods: [BillingType.Eft, BillingType.Credit], openCards: 1, openEfts: 0 },
            { paymentMethods: [BillingType.Eft, BillingType.Credit, BillingType.Credit], openCards: 0, openEfts: 0 },
        ].forEach(data => {
            it('passes in payment availablity info', async () => {

                (dialogService.openSliderCentered as jasmine.Spy).and.resolveTo(null);

                component.paymentMethods = data.paymentMethods.map(billingType => ({
                    billingType
                } as BillingInfo & PaymentMethodOptions));

                await component.addNewPaymentMethod(data.openEfts, data.openCards, false, '');

                expect(dialogService.openSliderCentered).toHaveBeenCalledWith(BillingModalComponent, jasmine.any(Object), jasmine.any(Object));


                const args = (dialogService.openSliderCentered as jasmine.Spy).calls.argsFor(0);

                expect(args[1].paymentMethodAvailability).toBeDefined();
                expect(args[1].paymentMethodAvailability.openCardSlots).toBe(data.openCards);
                expect(args[1].paymentMethodAvailability.openEftSlots).toBe(data.openEfts);

            });
        });



        it('handles changing selected method', async () => {

            const results = {
                billingInformation: {
                    credit: { cardNbr: '1234'  }
                },
                billingType: BillingType.Credit,
                uiResults: {
                    addToPaymentList: true,
                    makePrimary: true
                }
            };

            (dialogService.openSliderCentered as jasmine.Spy).and.resolveTo(results);

            const spy = jasmine.createSpy('selectedpaymentMethodChange');
            component.paymentMethods = [];
            component.selectedPaymentMethod = null;
            const cleanup = component.selectedPaymentMethodChange.subscribe(spy);

            await component.addNewPaymentMethod(1, 2, true, '');

            const expectedResults = {
                credit: { cardNbr: '1234'  },
                eft: null,

                billingType: BillingType.Credit,                
                
                newMethodAdded: true,
                addToPaymentList: results.uiResults.addToPaymentList,
                makePrimary: results.uiResults.makePrimary
            } as BillingInfo & PaymentMethodOptions;

            expect(component.selectedPaymentMethod).toEqual(expectedResults);
            expect(spy).toHaveBeenCalledWith(component.selectedPaymentMethod);
            expect(component.paymentMethods[0]).toBeDefined();
            expect(component.paymentMethods[0]).toBe(component.selectedPaymentMethod);

            cleanup.unsubscribe();

        });

        it('handles a cancel', async () => {

            (dialogService.openSliderCentered as jasmine.Spy).and.resolveTo(null);
            const spy = jasmine.createSpy('selectedpaymentMethodChange');
            component.paymentMethods = [];
            component.selectedPaymentMethod = null;
            const cleanup = component.selectedPaymentMethodChange.subscribe(spy);

            await component.addNewPaymentMethod(1, 2, true, '');

            expect(component.selectedPaymentMethod).toBeNull();
            expect(spy).not.toHaveBeenCalled();

            cleanup.unsubscribe();
        });

        it('clears eft data when credit is added', async () => {

            const results = {
                billingInformation: {},
                billingType: BillingType.Credit,
                uiResults: {
                    addToPaymentList: true,
                    makePrimary: true
                }
            };

            (dialogService.openSliderCentered as jasmine.Spy).and.resolveTo(results);

            component.paymentMethods = [];
            component.selectedPaymentMethod = null;
            
            await component.addNewPaymentMethod(1, 2, true, '');

            expect(component.selectedPaymentMethod.eft).toBeNull();

        });

        it('clears credit data when eft is added', async () => {

            const results = {
                billingInformation: {},
                billingType: BillingType.Eft,
                uiResults: {
                    addToPaymentList: true,
                    makePrimary: true
                }
            };

            (dialogService.openSliderCentered as jasmine.Spy).and.resolveTo(results);

            component.paymentMethods = [];
            component.selectedPaymentMethod = null;

            await component.addNewPaymentMethod(1, 1, true, '');

            expect(component.selectedPaymentMethod.credit).toBeNull();

        });
    });

    describe('submitted', () => {

        it('can tell if its been submitted', () => {

            component.paymentMethods = [{} as BillingInfo & PaymentMethodOptions];
            component.selectedPaymentMethod = component.paymentMethods[0];

            expect(form.submitted).toBeFalse();
            expect(component.submitted).toBeFalse();

            form.onSubmit(new CustomEvent('submit'));

            expect(form.submitted).toBeTrue();
            expect(component.submitted).toBeTrue();

        });

    });

    describe('groupName', () => {

        it('sets group name', () => {

            component.name = null;
            expect(component.groupName).toBe('paymentSelect');
            component.name = 'test';
            expect(component.groupName).toBe('test');

        });

    });
});
