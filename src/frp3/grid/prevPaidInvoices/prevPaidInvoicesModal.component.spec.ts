import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogRef, DialogService } from 'common/services';
import { PrevPaidInvoicesData } from 'frp3/interfaces';
import { InvoicedDetailsComponent } from 'violationsCommon/components/violationsDetails/invoiced/invoicedDetails/invoicedDetails.component';
import { PrevPaidInvoicesComponent } from './prevPaidInvoicesModal.component';

describe('PrevPaidInvoicesComponent', () => {

    let fixture: ComponentFixture<PrevPaidInvoicesComponent>;
    let component: PrevPaidInvoicesComponent;

    let dialogRef: jasmine.SpyObj<DialogRef<PrevPaidInvoicesData>>;
    let dialogService: jasmine.SpyObj<DialogService>;

    beforeEach(async () => {
        dialogRef = jasmine.createSpyObj('dialogRef', [], {
            data: {
                previouslyPaidInvoices: [
                    { something: 1 } as any,
                    { something: 2 } as any],
                plate: {
                    state: 'TX',
                    // eslint-disable-next-line id-blacklist
                    number: '123'
                }
            }
        });
        dialogService = jasmine.createSpyObj('dialogService', ['openSliderFilled']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    PrevPaidInvoicesComponent
                ],
                providers: [
                    { provide: DialogRef, useFactory: () => dialogRef },
                    { provide: DialogService, useFactory: () => dialogService }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(PrevPaidInvoicesComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(component).toBeTruthy();
        });
    });

    describe('OnInit', () => {
        it('should assign variables correctly', () => {
            //Assemble
            const expected = {
                closedLogoImgSrc: 'fake img src',
                previouslyPaidInvoices: [
                    { something: 1 } as any,
                    { something: 2 } as any
                ]
            };

            //Act
            component.ngOnInit();

            //Assert
            expect(component.prevPaidInvoices).toEqual(expected.previouslyPaidInvoices);
        });
    });

    describe('openTollDetailsModal', () => {
        it('should call dialogService', () => {
            component.prevPaidInvoices = [{} as any];
            component.openTollDetailsModal(0);

            expect(dialogService.openSliderFilled).toHaveBeenCalledTimes(1);
            expect(dialogService.openSliderFilled).toHaveBeenCalledWith(InvoicedDetailsComponent,
                {
                    invoiced: component.prevPaidInvoices[0],
                    plate: component[`plate`],
                    isPreviousPaid: true
                },
                { title: 'Invoice Details', hasBack: true });
        });
    });
});
