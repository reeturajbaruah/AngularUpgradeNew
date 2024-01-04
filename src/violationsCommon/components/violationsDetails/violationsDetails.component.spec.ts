import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';
import { ENVIRON_CONFIG } from 'common/upgrades';

import { ViolationsDetailsComponent } from './violationsDetails.component';
import { ISelectable } from './interfaces/selectable.interface';
import { ISelectableViolationPlate } from './interfaces/selectable-violations-plate.interface';
import { IViolationInvoice } from '../../interfaces/violationIinvoice.interface';
import { IViolation } from './interfaces/violation.interface';

describe('component: violations-details', () => {

    let fixture: ComponentFixture<ViolationsDetailsComponent>;
    let component: ViolationsDetailsComponent;
    let environmentConfig: {
        isMergeMATandVioOn: boolean;
    };
    let modalService;

    beforeEach(async () => {

        modalService = jasmine.createSpyObj('modalService', ['showModal']);
        modalService.currentAlertModalSettings = 'fake currentAlertModalSettings';
        environmentConfig = { isMergeMATandVioOn: false };

        await TestBed
            .configureTestingModule({
                declarations: [
                    ViolationsDetailsComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(ViolationsDetailsComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', () => {

            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {

        beforeEach(() => {

            component.plate = { invoices: [], uninvoicedViolations: [] } as any;
        });

        it('should initialize checkboxMetadata', () => {

            component.ngOnInit();

            expect(component.checkboxMetadata).toEqual({
                id: 'checkboxSelectAll',
                description: 'Checkbox for Selecting All'
            });
        });

        it('should set total to 0 when isEditAllowed true', () => {

            component.isEditAllowed = true;
            component.plate = { plateDueBeforeDiscount: 5, invoices: [], uninvoicedViolations: [] } as any;

            component.ngOnInit();

            expect(component.total).toEqual(0);
        });

        it('should set total to sum of plateDueBeforeDiscount of the plate when isEditAllowed false', () => {

            component.isEditAllowed = false;
            component.plate = { plateDueBeforeDiscount: 5, invoices: [], uninvoicedViolations: [] } as any;

            component.ngOnInit();

            expect(component.total).toEqual(5);
        });

        it('should call computeTotals', () => {
            spyOn(component as any, 'computeTotals');

            component.ngOnInit();

            expect(component['computeTotals']).toHaveBeenCalledTimes(1);
        });

    });

    describe('computeTotals', () => {

        it('should default to 0 for paymentAmount if it is undefined.', () => {

            component.plate = {
                invoices: [],
                uninvoicedViolations: [{ checked: false }]
            } as ISelectableViolationPlate;

            component['computeTotals']();

            expect(component.plate.totalSelected).toBe(0);
        });

        it('should compute correct totals for total discounts and total payment amount', () => {

            component.plate = {
                serviceFee: 5,
                invoices: [
                    {
                        checked: true,
                        paymentAmount: 3,
                        invoiceDueBeforeDiscount: 3,
                        invoiceLevelDiscount: 2
                    },
                    {
                        checked: true,
                        paymentAmount: 3,
                        invoiceDueBeforeDiscount: 6,
                        invoiceLevelDiscount: 2
                    }],
                uninvoicedViolations: [
                    {
                        checked: false,
                        paymentAmount: 5
                    },
                    {
                        checked: true,
                        paymentAmount: 3
                    }
                ]
            } as ISelectableViolationPlate;

            component['computeTotals']();

            expect(component.plate.totalFeesDiscountedFRP3).toBe(2);
            expect(component.plate.totalPaymentAmountFRP3).toBe(17);
        });
    });


    describe('isEveryChildSelected', () => {

        [
            {
                plate: {
                    invoices: [],
                    uninvoicedViolations: []
                }, expected: true
            },
            {
                plate: {
                    invoices: [],
                    uninvoicedViolations: [{ checked: true }, { checked: true }]
                }, expected: true
            },
            {
                plate: {
                    invoices: [{ checked: true }, { checked: true }],
                    uninvoicedViolations: []
                }, expected: true
            },
            {
                plate: {
                    invoices: [{ checked: true }, { checked: true }],
                    uninvoicedViolations: [{ checked: true }, { checked: true }]
                }, expected: true
            },
            {
                plate: {
                    invoices: [{ checked: true }],
                    uninvoicedViolations: [{ checked: true }]
                }, expected: true
            },
            {
                plate: {
                    invoices: [{ checked: true }, { checked: false }],
                    uninvoicedViolations: [{ checked: true }, { checked: true }]
                }, expected: false
            },
            {
                plate: {
                    invoices: [{ checked: true }, { checked: true }],
                    uninvoicedViolations: [{ checked: true }, { checked: false }]
                }, expected: false
            },
            {
                plate: {
                    invoices: [{ checked: false }],
                    uninvoicedViolations: []
                }, expected: false
            },
            {
                plate: {
                    invoices: [],
                    uninvoicedViolations: [{ checked: false }]
                }, expected: false
            }
        ]
            .forEach(({ plate, expected }) => {

                it(`should return ${expected} when ${JSON.stringify(plate)}`, async () => {
                    component.plate = plate as ISelectableViolationPlate;
                    expect(component['isEveryChildSelected']()).toBe(expected);
                });
            });
    });

    describe('setPaymentAmountAndChecked', () => {

        [
            { checkEvent: true, currentCheck: false, expectedPaymentAmount: 1 },
            { checkEvent: true, currentCheck: true, expectedPaymentAmount: 3 },
            { checkEvent: false, currentCheck: false, expectedPaymentAmount: 3 },
            { checkEvent: false, currentCheck: true, expectedPaymentAmount: 0 }
        ].forEach(({ checkEvent, currentCheck, expectedPaymentAmount }) => {
            it(`should apply checked boolean to all invoices and set the payment amount: ${currentCheck} to ${checkEvent}`, () => {
                const fakeInvoice = {
                    invoiceDueBeforeDiscount: 1,
                    paymentAmount: 3,
                    checked: currentCheck
                } as (IViolationInvoice & ISelectable);
                component.areAllSelected = checkEvent;

                component['setPaymentAmountAndChecked'](fakeInvoice, fakeInvoice.invoiceDueBeforeDiscount, 0);

                expect(fakeInvoice).toEqual({
                    invoiceDueBeforeDiscount: 1,
                    paymentAmount: expectedPaymentAmount,
                    checked: checkEvent
                } as (IViolationInvoice & ISelectable));
            });
        });
    });

    describe('applyCheckEventToAll', () => {

        beforeEach(() => {
            spyOn(component as any, 'computePaymentAmount');
            spyOn(component as any, 'setPaymentAmountAndChecked');
        });

        it('should apply false check event to all the plate when called with a false event', () => {

            component.plate = {
                invoices: [],
                uninvoicedViolations: []
            } as ISelectableViolationPlate;
            component.areAllSelected = false;

            component['applyCheckEventToAll']();

            expect(component.plate).toEqual({
                invoices: [],
                uninvoicedViolations: [],
                checked: false
            } as ISelectableViolationPlate);
            expect(component.computePaymentAmount).toHaveBeenCalledTimes(1);
        });

        it('should apply true check event to the plate when called with a true event', () => {

            component.plate = {
                invoices: [],
                uninvoicedViolations: []
            } as ISelectableViolationPlate;
            component.areAllSelected = true;

            component['applyCheckEventToAll']();

            expect(component.plate).toEqual({
                invoices: [],
                uninvoicedViolations: [],
                checked: true
            } as ISelectableViolationPlate);
            expect(component.computePaymentAmount).toHaveBeenCalledTimes(1);
        });

        it('should call paymentAmount and checked setting method to all of plate\'s children when called with any event', () => {

            component.plate = {
                invoices: [
                    { invoiceDueBeforeDiscount: 1, checked: true },
                    { invoiceDueBeforeDiscount: 2, checked: true },
                    { invoiceDueBeforeDiscount: 3, checked: true }
                ],
                uninvoicedViolations: [
                    { tollAmount: 4, checked: true },
                    { tollAmount: 5, checked: true },
                    { tollAmount: 6, checked: true }
                ]
            } as any;
            component.areAllSelected = false;

            component['applyCheckEventToAll']();

            expect(component['setPaymentAmountAndChecked']).toHaveBeenCalledTimes(6);
            expect(component['setPaymentAmountAndChecked']).toHaveBeenCalledWith(
                { invoiceDueBeforeDiscount: 1, checked: true } as (IViolationInvoice & ISelectable), 1, 0);
            expect(component['setPaymentAmountAndChecked']).toHaveBeenCalledWith(
                { invoiceDueBeforeDiscount: 2, checked: true } as (IViolationInvoice & ISelectable), 2, 0);
            expect(component['setPaymentAmountAndChecked']).toHaveBeenCalledWith(
                { invoiceDueBeforeDiscount: 3, checked: true } as (IViolationInvoice & ISelectable), 3, 0);
            expect(component['setPaymentAmountAndChecked']).toHaveBeenCalledWith(
                { tollAmount: 4, checked: true } as (IViolation & ISelectable), 4, 0);
            expect(component['setPaymentAmountAndChecked']).toHaveBeenCalledWith(
                { tollAmount: 5, checked: true } as (IViolation & ISelectable), 5, 0);
            expect(component['setPaymentAmountAndChecked']).toHaveBeenCalledWith(
                { tollAmount: 6, checked: true } as (IViolation & ISelectable), 6, 0);
            expect(component.computePaymentAmount).toHaveBeenCalledTimes(1);
        });

        [true, false].forEach(checkEvent => {
            it('should not change plate\'s children when they are empty', () => {

                component.plate = {
                    invoices: [],
                    uninvoicedViolations: []
                } as any;
                component.areAllSelected = true;

                component['applyCheckEventToAll']();

                expect(component.plate).toEqual({
                    invoices: [],
                    uninvoicedViolations: [],
                    checked: true
                } as any);
                expect(component.computePaymentAmount).toHaveBeenCalledTimes(1);
            });
        });

    });

    describe('changeSelectAll', () => {

        let isEveryChildSelectedSpy: jasmine.Spy;

        beforeEach(() => {

            component.areAllSelected = 'some initial value' as any;
            isEveryChildSelectedSpy = spyOn(component as any, 'isEveryChildSelected');
            spyOn(component as any, 'applyCheckEventToAll').and.returnValue(null);
        });

        [false, true].forEach(event => {

            it(`should call isEveryChildSelected with the plate`, () => {

                component.plate = {
                    invoices: [],
                    uninvoicedViolations: []
                } as ISelectableViolationPlate;

                component.changeSelectAll();

                expect(component['isEveryChildSelected']).toHaveBeenCalledTimes(1);
            });
        });

        [[true, false], [false, true]].forEach(([isEveryChildSelected, event]) => {

            it(`should applyCheckEventToAll when isEveryChildSelected returns ${isEveryChildSelected} and event ${event}`, () => {

                isEveryChildSelectedSpy.and.returnValue(isEveryChildSelected);
                component.areAllSelected = event;

                component.changeSelectAll();

                expect(component['applyCheckEventToAll']).toHaveBeenCalledTimes(1);
            });
        });

        [[true, true], [false, false]].forEach(([isEveryChildSelected, event]) => {

            it(`should not applyCheckEventToAll when isEveryChildSelected returns ${isEveryChildSelected} and event ${event}`, () => {

                isEveryChildSelectedSpy.and.returnValue(isEveryChildSelected);
                component.areAllSelected = event;

                component.changeSelectAll();

                expect(component['applyCheckEventToAll']).toHaveBeenCalledTimes(0);
            });
        });
    });

    describe('computePaymentAmount', () => {

        [
            {
                plate: { invoices: [], uninvoicedViolations: [], plateDueBeforeDiscount: 10 },
                expectedTotal: 0,
                expectedRemaining: 10
            },
            {
                plate: { invoices: [{ paymentAmount: 5 }], uninvoicedViolations: [], plateDueBeforeDiscount: 10 },
                expectedTotal: 5,
                expectedRemaining: 5
            },
            {
                plate: { invoices: [], uninvoicedViolations: [{ paymentAmount: 5 }], plateDueBeforeDiscount: 10 },
                expectedTotal: 5,
                expectedRemaining: 5
            },
            {
                plate: { invoices: [{ paymentAmount: 5 }], uninvoicedViolations: [{ paymentAmount: 5 }], plateDueBeforeDiscount: 10 },
                expectedTotal: 10,
                expectedRemaining: 0
            }

        ].forEach(({ plate, expectedTotal, expectedRemaining }) => {

            it(`should set total to ${expectedTotal} when plate ${JSON.stringify(plate)}`, () => {

                component.plate = plate as any;

                component.computePaymentAmount();

                expect(component.total).toBe(expectedTotal);
                expect(component.plate.remainingBalance).toBe(expectedRemaining);
            });
        });
    });

    describe('computeSelectAll', () => {
        [
            { plate: { invoices: [], uninvoicedViolations: [] }, expected: true },
            { plate: { invoices: [{ checked: true }], uninvoicedViolations: [] }, expected: true },
            { plate: { invoices: [], uninvoicedViolations: [{ checked: true }] }, expected: true },
            { plate: { invoices: [{ checked: true }], uninvoicedViolations: [{ checked: true }] }, expected: true },
            { plate: { invoices: [{ checked: false }], uninvoicedViolations: [] }, expected: false },
            { plate: { invoices: [], uninvoicedViolations: [{ checked: false }] }, expected: false },
            { plate: { invoices: [{ checked: false }], uninvoicedViolations: [{ checked: true }] }, expected: false },
            { plate: { invoices: [{ checked: true }], uninvoicedViolations: [{ checked: false }] }, expected: false },
            { plate: { invoices: [{ checked: false }], uninvoicedViolations: [{ checked: false }] }, expected: false },
            {
                plate: {
                    invoices: [{ checked: true }, { checked: false }],
                    uninvoicedViolations: [{ checked: true }, { checked: true }]
                },
                expected: false
            },
            {
                plate: {
                    invoices: [{ checked: true }, { checked: true }],
                    uninvoicedViolations: [{ checked: true }, { checked: false }]
                },
                expected: false
            }
        ]
            .forEach(({ plate, expected }) => {

                it(`should set plate.checked to value returned by isEveryChildSelected`, () => {
                    component.plate = plate as any;

                    component.computeSelectAll();

                    expect(component.areAllSelected).toBe(expected);
                });
            });
    });

    describe('isInvoice', () => {
        it('should return isInvoice if it exists', () => {
            const violation1 = { isInvoice: true, violations: [] } as IViolationInvoice;
            const violation2 = { isInvoice: false } as IViolation;

            expect(component.isInvoice(violation1)).toBeTruthy();
            expect(component.isInvoice(violation2)).toBeFalsy();
        });

        it('should return isInvoice using fallback if it doesnt exist', () => {
            const violation1 = { violations: [] } as IViolationInvoice;
            const violation2 = { } as IViolation;

            expect(component.isInvoice(violation1)).toBeTruthy();
            expect(component.isInvoice(violation2)).toBeFalsy();
        });
    });
});
