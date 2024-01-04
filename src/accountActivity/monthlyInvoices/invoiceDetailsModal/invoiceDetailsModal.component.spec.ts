import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogRef } from 'common/services';
import { InjectionModel } from '../invoiceDetails/invoiceDetails.component';
import { InvoiceDetailsModalComponent } from './invoiceDetailsModal.component';
import { TransactionRecord } from 'accountDashboard/services';

describe('component: invoiceDetailsModalComponent', () => {
    let fixture: ComponentFixture<InvoiceDetailsModalComponent>;
    let component: InvoiceDetailsModalComponent;
    //let dialogRef: DialogRef<InjectionModel>;
    const dialogRef: DialogRef<InjectionModel> = jasmine.createSpyObj('dialogRef', ['close'], ['data']);
    const data: InjectionModel = {
        details: [],
        selectedInvoice: {
            plateTagId: 'Test1',
            amount: 12345
        }};

    (Object.getOwnPropertyDescriptor(dialogRef, 'data').get as jasmine.Spy).and.callFake(() => data);

    beforeEach(() => {
        //dialogRef = {
        //    data: {} as InjectionModel
        //} as DialogRef<InjectionModel>;

        TestBed
            .configureTestingModule({
                declarations: [
                    InvoiceDetailsModalComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    { provide: DialogRef, useFactory: () => dialogRef }
                ]
            });
        fixture = TestBed.createComponent(InvoiceDetailsModalComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {
  
        it('should pass', () => {
            expect(true).toBe(true);
        });

        it('should initiate', async () => {
            await component.ngOnInit();
            expect(component.invoiceDetails).toEqual(dialogRef.data.details);
            expect(component.modalTitle).toEqual(dialogRef.data.selectedInvoice.plateTagId);
            expect(component.totalAmount).toEqual(dialogRef.data.selectedInvoice.amount);
        });
       
    });

});
