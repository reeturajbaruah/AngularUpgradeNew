import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, SimpleChange, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';

import { Selectable } from '../';
import { Violation } from 'violations/interfaces';
import { ViolationsUnInvoicedComponent } from './uninvoiced.component';
import { DialogService } from 'common/services';
import { UninvoicedDetailsModalComponent } from 'missedatoll/details/uninvoiced/uninvoicedDetailsModal.component';

describe('component: violations-uninvoiced-row', () => {

    let fixture: ComponentFixture<ViolationsUnInvoicedComponent>;
    let dialogService: DialogService;
    let component: ViolationsUnInvoicedComponent;

    beforeEach(async () => {

        dialogService = jasmine.createSpyObj('dialogueService', ['openSliderFilled']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    ViolationsUnInvoicedComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: DialogService, useFactory: () => dialogService }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(ViolationsUnInvoicedComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {

        beforeEach(() => {

            component.uninvoiced = {
                violationId: 'fakeViolationId'
            } as any;

            component.ngOnInit();
        });

        it('should collapse details', async () => {

            expect(component.areDetailsCollapsed).toBe(true);
        });

        it('should initialize checkboxMetadata', async () => {

            expect(component.checkboxMetadata).toEqual({
                id: 'checkboxviolationfakeViolationId',
                description: 'Checkbox for Violation fakeViolationId'
            });
        });

        it('should initialize inputMetadata', async () => {

            expect(component.inputMetadata).toEqual({
                id: 'inputviolationfakeViolationId',
                description: 'Input for Violation fakeViolationId'
            });
        });
    });


    describe('checkBoxChange', () => {

        beforeEach(() => {

            component.uninvoiced = {
                tollAmount: 99000
            } as any;
        });

        [true, false].forEach(event => {

            it(`should set uninvoiced.checked to ${event}`, async () => {
                component.isChecked = event;

                component.checkBoxChange();

                expect(component.uninvoiced.checked).toBe(event);
            });
        });

        [true, false].forEach(event => {

            it(`should emit selectionChange`, async () => {

                component.isChecked = event;
                spyOn(component.selectionChange, 'emit').and.returnValue(null);

                component.checkBoxChange();

                expect(component.selectionChange.emit).toHaveBeenCalledTimes(1);
            });
        });

        it('should set payment amount to uninvoiced.tollAmount when event true', async () => {
            component.isChecked = true;

            component.checkBoxChange();

            expect(component.uninvoiced.paymentAmount).toBe(99000);
        });

        it('should set payment amount to 0 when event false', async () => {
            component.isChecked = false;

            component.checkBoxChange();

            expect(component.uninvoiced.paymentAmount).toBe(0);
        });

        [true, false].forEach(event => {

            it(`should emit paymentAmountChange`, async () => {

                component.isChecked = event;
                spyOn(component.paymentAmountChange, 'emit').and.returnValue(null);

                component.checkBoxChange();

                expect(component.paymentAmountChange.emit).toHaveBeenCalledTimes(1);
            });
        });

        it('should set paymentAmountString to uninvoiced.tollAmount when event true', async () => {
            component.isChecked = true;

            component.checkBoxChange();

            expect(component.paymentAmountString).toBe('$99000.00');
        });

        it('should set paymentAmountString to 0 when event false', async () => {
            component.isChecked = false;

            component.checkBoxChange();

            expect(component.paymentAmountString).toBe('$0.00');
        });
    });

    describe('ngOnChanges', () => {
        it('should call checkBoxChange() if isChecked changes in reference to the value of the uninvoiced', () => {
            spyOn(component, 'checkBoxChange');
            component.uninvoiced = { checked: false } as Violation & Selectable;

            component.ngOnChanges({
                isChecked: new SimpleChange(false, true, component.isChecked)
            });

            expect(component.checkBoxChange).toHaveBeenCalledTimes(1);
        });

        it('should not call checkBoxChange() if not isChecked changes in reference to the value of the uninvoiced', () => {
            spyOn(component, 'checkBoxChange');
            component.uninvoiced = {
                checked: true,
                paymentAmount: 2
            } as Violation & Selectable;

            component.ngOnChanges({
                isChecked: new SimpleChange(false, true, component.isEditAllowed)
            });

            expect(component.checkBoxChange).toHaveBeenCalledTimes(0);
            expect(component.paymentAmountString).toEqual('$2.00');
        });
    });

    describe('openTollDetailsModal', () => {
        beforeEach(() => {

            component.uninvoiced = {
                tollAmount: 99000,
                violationId: 123,
                agencyName: 'test name',
                location: 'test location',
                violationDate: 'asdf',
            } as any;
        });

        it('should call dialogService', () => {
            const uninvoicedData = {
                agencyCode: 'test name',
                amountDue: 99000,
                location: 'test location',
                violationDate: 'asdf',
                violationNumber: '123'
            } as any;

            component.openTollDetailsModal();

            expect(dialogService.openSliderFilled).toHaveBeenCalledTimes(1);
            expect(dialogService.openSliderFilled).toHaveBeenCalledWith(UninvoicedDetailsModalComponent,
                { uninvoicedDetails: uninvoicedData },
                { title: 'Invoice Details' });
        });
    });
});
