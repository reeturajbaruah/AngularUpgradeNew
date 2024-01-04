import {
    Component, OnInit
} from '@angular/core';
import { DialogRef } from 'common/services';
import { IReplenishmentInfoInjectionValues, IReplenishmentTableItem, IReplenishmentTableItemSCI } from './replenishmentInfoModal.interface';

@Component({
    selector: 'replenishment-info-modal',
    templateUrl: './replenishmentInfoModal.html',
    styleUrls: ['./replenishmentInfoModal.less']
})
export class ReplenishmentInfoModalComponent implements OnInit {
    constructor(
        private dialogRef: DialogRef<IReplenishmentInfoInjectionValues>,
    ) {
        this.modalCms = dialogRef.data.modalCms;
    }

    public modalCms: IReplenishmentTableItemSCI;
    public rebillTable: IReplenishmentTableItem[];

    ngOnInit() {
        this.rebillTable = [
            {
                numVehicles: '1-2 Vehicles',
                rebillAmt: this.modalCms.ONE_TWO_VEHICLE_REBILL || '$20.00',
                rebillMin: this.modalCms.ONE_TWO_VEHICLE_LB ||'$5.00',
            } as IReplenishmentTableItem,
            {
                numVehicles: '3-4 Vehicles',
                rebillAmt: this.modalCms.THREE_FOUR_VEHICLE_REBILL || '$40.00',
                rebillMin: this.modalCms.THREE_FOUR_VEHICLE_LB || '$10.00',
            } as IReplenishmentTableItem,
            {
                numVehicles: '5-6 Vehicles',
                rebillAmt: this.modalCms.FIVE_SIX_VEHICLE_REBILL || '$60.00',
                rebillMin: this.modalCms.FIVE_SIX_VEHICLE_LB || '$15.00',
            } as IReplenishmentTableItem,
            {
                numVehicles: '7-8 Vehicles',
                rebillAmt: this.modalCms.SEVEN_EIGHT_VEHICLE_REBILL || '$80.00',
                rebillMin: this.modalCms.SEVEN_EIGHT_VEHICLE_LB || '$20.00',
            } as IReplenishmentTableItem,
            {
                numVehicles: 'Etc.',
                rebillAmt: this.modalCms.MORE_THAN_EIGHT_VEHICLE_REBILL || 'Max $600.00*',
                rebillMin: this.modalCms.MORE_THAN_EIGHT_VEHICLE_LB || 'Max $300.00**',
            } as IReplenishmentTableItem
        ];
    }

    public cancel() {
        this.dialogRef.close();
    }

    public isTop(index: number) {
        return index === 0 && this.rebillTable.length > 1;
    }

    public isInner(index: number) {
        return index > 0 && index + 1 < this.rebillTable.length;
    }

    public isBottom(index: number) {
        return index > 0 && (index + 1 === this.rebillTable.length);
    }
}

