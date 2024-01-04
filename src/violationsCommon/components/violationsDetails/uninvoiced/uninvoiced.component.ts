import {
    Component, Input, Output, OnInit, OnChanges,
    EventEmitter, SimpleChanges, Inject
} from '@angular/core';

import { DialogService, DialogContent } from 'common/services';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { UninvoicedDetailsModalComponent, InjectionValues } from 'missedatoll/details/uninvoiced/uninvoicedDetailsModal.component';
import { ViolationDataEntry } from 'missedatoll/interfaces';
import { IInputFieldMetadata } from '../interfaces/input-filemetadata.interface';
import { ISelectable } from '../interfaces/selectable.interface';
import { IViolation } from '../interfaces/violation.interface';

@Component({
    selector: 'violations-uninvoiced-row',
    templateUrl: './uninvoiced.component.html',
    styleUrls: ['./uninvoiced.component.less']
})
export class ViolationsUnInvoicedComponent implements OnInit, OnChanges {

    constructor(private dialogService: DialogService, @Inject(ENVIRON_CONFIG) private environmentConfig) { }

    @Input() uninvoiced: IViolation & ISelectable;
    @Input() isEditAllowed: boolean;
    @Input() isLast: boolean;
    @Input() isChecked: boolean;
    @Output() selectionChange = new EventEmitter();
    @Output() paymentAmountChange = new EventEmitter();
    public paymentAmountString: string;
    public checkboxMetadata: IInputFieldMetadata;
    public inputMetadata: IInputFieldMetadata;
    public areDetailsCollapsed: boolean;

    checkBoxChange() {
        this.uninvoiced.checked = this.isChecked;
        this.selectionChange.emit();

        this.uninvoiced.paymentAmount = this.isChecked ? this.uninvoiced.tollAmount : 0;
        this.paymentAmountChange.emit();

        this.paymentAmountString = '$' + this.uninvoiced.paymentAmount.toFixed(2);
    }

    ngOnInit() {
        this.areDetailsCollapsed = true;

        const metaData = (prefix: string) => ({
            id: `${prefix.toLowerCase()}violation${this.uninvoiced.violationId}`,
            description: `${prefix} for Violation ${this.uninvoiced.violationId}`
        });

        this.checkboxMetadata = metaData('Checkbox');
        this.inputMetadata = metaData('Input');
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.isChecked) {
            if (changes.isChecked.currentValue && this.uninvoiced.checked) {
                // When the invoiced component is reloaded from pagination
                this.paymentAmountString = '$' + this.uninvoiced.paymentAmount.toFixed(2);
            } else {
                this.checkBoxChange();
            }
        }
    }

    public openTollDetailsModal() {
        const uninvoicedData = {
            agencyCode: this.uninvoiced.agencyName,
            amountDue: this.uninvoiced.tollAmount,
            location: this.uninvoiced.location,
            violationDate: this.uninvoiced.violationDate,
            violationNumber: this.uninvoiced.violationId.toString(),
            mobileAgency: this.uninvoiced.mobileAgencyName
        } as ViolationDataEntry;

        this.dialogService.openSliderFilled(UninvoicedDetailsModalComponent,
            { uninvoicedDetails: uninvoicedData } as InjectionValues,
            { title: this.environmentConfig.isMergeMATandVioOn ? 'Transaction Details' : 'Invoice Details' } as DialogContent);
    }
}
