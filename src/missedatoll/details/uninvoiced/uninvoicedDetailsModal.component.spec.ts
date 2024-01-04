import { DialogRef } from 'common/services';
import { UninvoicedDetailsModalComponent, InjectionValues } from './uninvoicedDetailsModal.component';
import { ViolationDataEntry } from '../../interfaces';


describe('billingModalComponent', () => {
    let dialogRef: DialogRef<InjectionValues>;
    let component: UninvoicedDetailsModalComponent;

    let mockUninvoicedDetails: ViolationDataEntry;

    beforeEach(() => {
        dialogRef = jasmine.createSpyObj('dialogRef', ['close']);

        mockUninvoicedDetails = {
            agencyCode: 'fakeAgency',
            mobileAgency:'fa',
            amountDue: 12,
            location: 'fakeLocation',
            violationDate: 'fakeVioDate',
            violationNumber: 'fakeVioNumber'
        };
        (dialogRef.data as InjectionValues) = {
            uninvoicedDetails: mockUninvoicedDetails
        };

        component = new UninvoicedDetailsModalComponent(dialogRef);
    });


    describe('ngOnInit', () => {
        it('should assign data', () => {
            component.ngOnInit();
            expect(component.data).toEqual({ uninvoicedDetails: mockUninvoicedDetails });
        });
    });

    describe('close', () => {
        it('should call dialogRef close', () => {
            component.close();
            expect(dialogRef.close).toHaveBeenCalledTimes(1);
        });
    });

});
