import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionRecord } from 'accountDashboard/services';
import { DialogService } from 'common/services';
import { InjectionModel, InvoiceDetailsComponent } from './invoiceDetails.component';

describe('component: invoiceDetailsComponent', () => {
    let fixture: ComponentFixture<InvoiceDetailsComponent>;
    let component: InvoiceDetailsComponent;
    let dialogService: jasmine.SpyObj<DialogService>;

    beforeEach(() => {
        dialogService = jasmine.createSpyObj('dialogService', ['openSliderFilled']);

        TestBed
            .configureTestingModule({
                declarations: [
                    InvoiceDetailsComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: DialogService, useFactory: () => dialogService }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(InvoiceDetailsComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('ngOnChanges', () => {
        it('should resort invoice details data and put into array', () => {
            component.details = [
                { customKey: 'abc', amount: 1 },
                { customKey: 'def', amount: 2 },
                { customKey: 'abc', amount: 3 }
            ] as TransactionRecord[];

            component.ngOnChanges();

            expect(component.plateTagIdAndAmount).toEqual([
                { plateTagId: 'abc', amount: 4 },
                { plateTagId: 'def', amount: 2 }
            ]);
        });
    });

    describe('getInvoiceDetails', () => {
        let invoiceDetail;

        beforeEach(() => {
            invoiceDetail = {
                plateTagId: '',
                amount: 10
            };
        });

        it('should open the modal', () => {
            component.getInvoiceDetails(invoiceDetail);
            expect(dialogService.openSliderFilled).toHaveBeenCalled();
        });
    });
});
