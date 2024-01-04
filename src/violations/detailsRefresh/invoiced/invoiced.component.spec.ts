import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, SimpleChange, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DownloadService, DialogService } from 'common/services';

import { ViolationInvoice } from 'violations/interfaces';
import { Selectable } from '../';
//import { PdfUrlService } from 'violations/services/pdfUrl.service';
import { ViolationsInvoicedComponent } from './invoiced.component';
import {
    InjectionValues, OverpaymentModalComponent,
    CmsContent as OverpaymentModalCmsContent
} from './overpaymentModal/overpaymentModal.component';
import { InvoicedDetailsModalComponent } from './invoicedDetailsModal.component';
import { PdfUrlService } from 'violationsCommon/services/pdfUrl.service';

describe('component: violations-invoiced-row', () => {

    let fixture: ComponentFixture<ViolationsInvoicedComponent>;
    let component: ViolationsInvoicedComponent;

    let pdfUrlService: jasmine.SpyObj<PdfUrlService>;
    let downloadService: jasmine.SpyObj<DownloadService>;
    let dialog: jasmine.SpyObj<MatDialog>;
    let dialogService: jasmine.SpyObj<DialogService>;



    beforeEach(async () => {

        dialog = jasmine.createSpyObj('dialog', ['open']);
        pdfUrlService = jasmine.createSpyObj('webApisService', ['getPdfURL']);
        downloadService = jasmine.createSpyObj('downloadService', ['download']);
        dialogService = jasmine.createSpyObj('dialogService', ['openSliderFilled']);

        await TestBed
            .overrideComponent(ViolationsInvoicedComponent, {
                set: {
                    providers: [
                        { provide: DownloadService, useFactory: () => downloadService },
                        { provide: DialogService, useFactory: () => dialogService }
                    ]
                }
            });

        await TestBed
            .configureTestingModule({
                declarations: [
                    ViolationsInvoicedComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: PdfUrlService, useFactory: () => pdfUrlService },
                    { provide: DownloadService, useFactory: () => downloadService },
                    { provide: MatDialog, useFactory: () => dialog }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(ViolationsInvoicedComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', () => {

            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {

        beforeEach(() => {

            component.invoiced = {
                paymentAmount: 'fake initial payment amount',
                invoiceNum: 'fakeInvoiceId'
            } as any;

            component.ngOnInit();
        });

        it('should collapse details', () => {

            expect(component.areDetailsCollapsed).toBe(true);
        });

        it('should save initial payment amount', () => {

            expect(component['initialPaymentAmount']).toBe('fake initial payment amount' as any);
        });

        it('should initialize checkboxMetadata', () => {

            expect(component.checkboxMetadata).toEqual({
                id: 'checkboxinvoicefakeInvoiceId',
                description: 'Checkbox for Invoice fakeInvoiceId'
            });
        });

        it('should initialize inputMetadata', () => {

            expect(component.inputMetadata).toEqual({
                id: 'inputinvoicefakeInvoiceId',
                description: 'Input for Invoice fakeInvoiceId'
            });
        });
    });

    describe('allowKey', () => {

        [
            ' ', '!', '\'', '#', '%', '&', '"', '(', ')', '*', '+', ',', '-', '/', ':', ';', '<', '=', '>', '?', '@', 'A', 'B',
            'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y',
            'Z', '[', '\\', ']', '\^', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
            'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{', '|', '}', '~']
            .forEach(key => {

                it(`should should not allow key ${key}`, () => {

                    expect(component.allowKey(key)).toBe(false);
                });
            });

        ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
            .forEach(key => {

                it(`should should not allow key ${key}`, () => {

                    expect(component.allowKey(key)).toBe(true);
                });
            });

        [
            ['.', '.'],
            ['.', '$1.00'],
            ['Del', '.'],
            ['Del', '$3.00'],
            ['$', '$'],
            ['$', '$5.00'],
            ['$', '5.00']
        ]
            .forEach(([key, paymentAmountString]) => {

                it(`should should not allow key ${key} when payment amount string is ${paymentAmountString}`, () => {

                    component.paymentAmountString = paymentAmountString;

                    expect(component.allowKey(key)).toBe(false);
                });
            });

        [
            ['.', ''],
            ['.', '$100'],
            ['Del', ''],
            ['Del', '$300'],
            ['$', '']
        ]
            .forEach(([key, paymentAmountString]) => {

                it(`should allow key ${key} when payment amount string is ${paymentAmountString}`, () => {

                    component.paymentAmountString = paymentAmountString;

                    expect(component.allowKey(key)).toBe(true);
                });
            });
    });

    describe('amountChanged', () => {

        beforeEach(() => {
            spyOn(component as any, 'updatePaymentAmount').and.returnValue('amount updated');
        });

        [
            ['1', '1'],
            ['.', '.'],
            ['$', '$'],
            ['', ''],
            ['$1', '$1'],
            ['', ''],
            ['2', '2'],
            //bad formatting
            ['5$5', '$55'],
        ]
            .forEach(([newValue, expectedValue]) => {
                it(`should set paymentAmountString to ${expectedValue} when new value ${newValue}`, () => {

                    component.amountChanged(newValue);

                    expect(component.paymentAmountString).toBe(expectedValue);
                });
            });

        [

            { newValue: '0', expectedUpdateAmount: 0 },
            { newValue: '1', expectedUpdateAmount: 1 },
            { newValue: '$2', expectedUpdateAmount: 2 },
            { newValue: '3.2', expectedUpdateAmount: 3.2 },
            { newValue: '9.0', expectedUpdateAmount: 9 },
            { newValue: '$5.00002', expectedUpdateAmount: 5.00002 },
            //bad formating
            { newValue: '3$2', expectedUpdateAmount: 32 },
            //NaN
            { newValue: '', expectedUpdateAmount: 0 },
            { newValue: '.', expectedUpdateAmount: 0 },
            { newValue: '$', expectedUpdateAmount: 0 }
        ]
            .forEach(({ newValue, expectedUpdateAmount }) => {
                it(`should call updatePaymentAmount with ${expectedUpdateAmount} when new value ${newValue}`, () => {

                    component.paymentAmountString = '';

                    component.amountChanged(newValue);

                    expect(component['updatePaymentAmount']).toHaveBeenCalledWith(expectedUpdateAmount);
                    expect(component['updatePaymentAmount']).toHaveBeenCalledTimes(1);
                });
            });
    });

    describe('showOverPaymentModal', () => {
        it('should call matDialog.open() 1 times', () => {
            //Assemble
            component.invoiced = {
                invoiceDueBeforeDiscount: 54,
            } as any;

            component.cmsData = {
                Title: 'fake title',
                PrimaryContent: 'fake PrimaryContent'
            };

            const expectedsettings: MatDialogConfig<InjectionValues> = {
                data: {
                    cmsContent: {
                        Title: 'fake title',
                        PrimaryContent: 'fake PrimaryContent'
                    },
                    amountDue: 54
                }
            };

            //Act
            component['showOverPaymentModal']();

            //Assert
            expect(dialog.open).toHaveBeenCalledTimes(1);
            expect(dialog.open).toHaveBeenCalledWith(OverpaymentModalComponent, expectedsettings);
        });
    });

    describe('amountBlur', () => {

        beforeEach(() => {
            spyOn(component as any, 'updatePaymentAmount').and.returnValue('some fake payment amount');
            spyOn(component as any, 'showOverPaymentModal').and.returnValue('overpayment modal shown');
        });

        it('should call showOverPaymentModal when payment amount more than invoice due before discount', () => {

            component.invoiced = {
                invoiceDueBeforeDiscount: 54,
            } as any;
            component.paymentAmountString = '55';
            component.amountBlur();

            expect(component['showOverPaymentModal']).toHaveBeenCalledTimes(1);
        });

        it('should not call showOverPaymentModal when payment amount equal to invoice due before discount', () => {

            component.invoiced = {
                invoiceDueBeforeDiscount: 55,
            } as any;
            component.paymentAmountString = '55';
            component.amountBlur();

            expect(component['showOverPaymentModal']).toHaveBeenCalledTimes(0);
        });

        it('should not call showOverPaymentModal when payment amount less than invoice due before discount', () => {

            component.invoiced = {
                invoiceDueBeforeDiscount: 55,
            } as any;
            component.paymentAmountString = '54';
            component.amountBlur();

            expect(component['showOverPaymentModal']).toHaveBeenCalledTimes(0);
        });

        it('should set paymentAmountString to value returned by updatePaymentAmount', () => {

            component.invoiced = {
                invoiceDueBeforeDiscount: 55,
            } as any;
            component.paymentAmountString = '54';
            component.amountBlur();

            expect(component.paymentAmountString).toBe('some fake payment amount');
        });

        [
            //over payment
            { original: '$11', expectedUpdateAmount: 10 },
            //under payment
            { original: '$0', expectedUpdateAmount: 0.01 },
            { original: '$0.0', expectedUpdateAmount: 0.01 },
            { original: '$', expectedUpdateAmount: 0.01 },
            { original: '$.', expectedUpdateAmount: 0.01 },
            { original: '.', expectedUpdateAmount: 0.01 },
            //acceptable payment
            { original: '$5', expectedUpdateAmount: 5 },
            { original: '$6.1', expectedUpdateAmount: 6.1 },
            { original: '$0.5', expectedUpdateAmount: 0.5 },
            { original: '$10', expectedUpdateAmount: 10 },
        ].forEach(({ original, expectedUpdateAmount }) => {
            it(`should call updatePaymentAmount with ${expectedUpdateAmount} when payment amount string is ${original}`, () => {

                component.invoiced = {
                    invoiceDueBeforeDiscount: 10,
                } as any;
                component.paymentAmountString = original;
                component.amountBlur();

                expect(component['updatePaymentAmount']).toHaveBeenCalledTimes(1);
                expect(component['updatePaymentAmount']).toHaveBeenCalledWith(expectedUpdateAmount);
            });
        });

    });

    describe('parseCurrency', () => {

        [
            { original: '$5', expected: 5 },
            { original: '5$5', expected: 55 },
            { original: '.5', expected: 0.5 },
            { original: '.005', expected: 0.005 },
            //NaN
            { original: '', expected: 0 },
            { original: '$', expected: 0 },
            { original: '$.', expected: 0 },
            { original: '.', expected: 0 }
        ].forEach(({ original, expected }) => {
            it(`should return ${expected} when called with ${original}`, () => {

                expect(component['parseCurrency'](original)).toBe(expected);
            });
        });
    });

    describe('updatePaymentAmount', () => {

        beforeEach(() => {
            spyOn(component.paymentAmountChange, 'emit').and.returnValue(null);
            component.invoiced = {
            } as any;
        });

        it(`should emit paymentAmountChange`, () => {

            component['updatePaymentAmount'](99);

            expect(component.paymentAmountChange.emit).toHaveBeenCalledTimes(1);
        });

        [
            { original: 5, expected: 5 },
            { original: 55, expected: 55 },
            { original: 0.005, expected: 0.01 },
            { original: 9.024, expected: 9.02 },
        ].forEach(({ original, expected }) => {
            it(`should assign ${expected} to invoiced.paymentAmount when called with ${original}`, () => {

                component['updatePaymentAmount'](original);

                expect(component.invoiced.paymentAmount).toBe(expected);
            });
        });

        [
            { original: 5, expected: '$5.00' },
            { original: 55, expected: '$55.00' },
            { original: 0.005, expected: '$0.01' },
            { original: 9.024, expected: '$9.02' },
        ].forEach(({ original, expected }) => {
            it(`should return ${expected} when called with ${original}`, () => {

                expect(component['updatePaymentAmount'](original)).toBe(expected);
            });
        });
    });

    describe('checkBoxChange', () => {

        beforeEach(() => {

            spyOn(component as any, 'updatePaymentAmount').and.returnValue('some fake payment amount');
            component.invoiced = {
                invoiceDueBeforeDiscount: 99000
            } as any;
        });

        [true, false].forEach(event => {

            it('should set initialPaymentAmount to 0', () => {

                component['initialPaymentAmount'] = 990;
                component.isChecked = event;

                component.checkBoxChange();

                expect(component['initialPaymentAmount']).toBe(0);
            });
        });

        [true, false].forEach(event => {

            it(`should set invoiced.checked to ${JSON.stringify(event)}`, () => {
                component.isChecked = event;

                component.checkBoxChange();

                expect(component.invoiced.checked).toBe(event);
            });
        });

        [true, false].forEach(event => {

            it(`should emit selectionChange`, () => {

                component.isChecked = event;
                spyOn(component.selectionChange, 'emit').and.returnValue(null);

                component.checkBoxChange();

                expect(component.selectionChange.emit).toHaveBeenCalledTimes(1);
            });
        });

        it('should call updatePaymentAmount with initialPaymentAmount when isChecked is true and initialPaymentAmount truthy', () => {

            component.isChecked = true;
            component['initialPaymentAmount'] = 990;

            component.checkBoxChange();

            expect(component['updatePaymentAmount']).toHaveBeenCalledTimes(1);
            expect(component['updatePaymentAmount']).toHaveBeenCalledWith(990);
        });

        it('should call updatePaymentAmount with invoiceDueBeforeDiscount when isChecked true and initialPaymentAmount falsy', () => {

            component.isChecked = true;
            component['initialPaymentAmount'] = 0;

            component.checkBoxChange();

            expect(component['updatePaymentAmount']).toHaveBeenCalledTimes(1);
            expect(component['updatePaymentAmount']).toHaveBeenCalledWith(99000);
        });

        [0, 60, 9000].forEach(initialPaymentAmount => {

            it('should call updatePaymentAmount with 0 when isChecked falsy', () => {

                component.isChecked = false;
                component['initialPaymentAmount'] = initialPaymentAmount;

                component.checkBoxChange();

                expect(component['updatePaymentAmount']).toHaveBeenCalledTimes(1);
                expect(component['updatePaymentAmount']).toHaveBeenCalledWith(0);
            });
        });

        [true, false].forEach(event => {
            it('should assign return value of updatePaymentAmount to paymentAmountString', () => {
                component.isChecked = event;

                component.checkBoxChange();

                expect(component.paymentAmountString).toBe('some fake payment amount');
            });
        });

    });


    describe('ngOnChanges', () => {
        it('should call checkBoxChange() if isChecked changes in reference to the value of the invoiced', () => {
            spyOn(component, 'checkBoxChange');
            component.invoiced = { checked: false } as ViolationInvoice & Selectable;

            component.ngOnChanges({
                isChecked: new SimpleChange(false, true, component.isChecked)
            });

            expect(component.checkBoxChange).toHaveBeenCalledTimes(1);
        });

        it('should not call checkBoxChange() if not isChecked changes in reference to the value of the invoiced', () => {
            spyOn(component, 'checkBoxChange');
            spyOn(component as any, 'updatePaymentAmount').and.returnValue('fakeAmountString');
            component.invoiced = {
                checked: true,
                paymentAmount: 2
            } as ViolationInvoice & Selectable;

            component.ngOnChanges({
                isChecked: new SimpleChange(false, true, component.isEditAllowed)
            });

            expect(component.checkBoxChange).toHaveBeenCalledTimes(0);
            expect(component['updatePaymentAmount']).toHaveBeenCalledWith(2);
            expect(component.paymentAmountString).toEqual('fakeAmountString');
        });
    });

    describe('openTollDetailsModal', () => {
        it('should call dialogService', () => {
            component.openTollDetailsModal();

            expect(dialogService.openSliderFilled).toHaveBeenCalledTimes(1);
            expect(dialogService.openSliderFilled).toHaveBeenCalledWith(InvoicedDetailsModalComponent,
                { invoiced: component.invoiced, plate: component.plate, isPreviousPaid: false },
                { title: 'Invoice Details' });
        });
    });
});
