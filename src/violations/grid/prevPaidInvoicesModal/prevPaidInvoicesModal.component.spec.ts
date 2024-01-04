import { DialogRef, DialogService } from 'common/services/dialogService/dialog.service';
import { PrevPaidInvoicesComponent, PrevPaidInvoicesData } from './prevPaidInvoicesModal.component';
import { InvoicedDetailsModalComponent } from 'violations/detailsRefresh/invoiced/invoicedDetailsModal.component';


describe('PrevPaidInvoicesComponent', () => {

    let dialogRef: DialogRef<PrevPaidInvoicesData>;
    let dialogService: DialogService;
    let component: PrevPaidInvoicesComponent;

    beforeEach((() => {
        dialogRef = {} as any;
        dialogService = jasmine.createSpyObj('dialogService', ['openSliderFilled']);;

        (dialogRef.data as PrevPaidInvoicesData) = {
            previouslyPaidInvoices: [
                { something: 1 } as any,
                { something: 2 } as any],
            plate: {
                state: 'TX',
                // eslint-disable-next-line id-blacklist
                number: '123'
            }
        };

        component = new PrevPaidInvoicesComponent(dialogRef, dialogService);
    }));


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
            expect(dialogService.openSliderFilled).toHaveBeenCalledWith(InvoicedDetailsModalComponent,
                {
                    invoiced: component.prevPaidInvoices[0],
                    plate: component.plate,
                    isPreviousPaid: true
                },
                { title: 'Invoice Details', hasBack: true });
        });
    });

});
