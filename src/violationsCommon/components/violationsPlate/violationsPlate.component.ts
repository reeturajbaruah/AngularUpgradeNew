import {
    Component, Input, Output, EventEmitter, OnInit, Inject, OnDestroy
} from '@angular/core';
import { IViolationPlate } from '../../interfaces/violationPlate.interface';

import { trigger, state, style, animate, transition } from '@angular/animations';
import { StateService } from '@uirouter/angular';
import { stateNames } from 'paymentplans/constants';
import { IPlate, PaymentPlanToolTip } from 'frp3/interfaces';
import { WebStorageConst } from '../../../constants/webstorage.constants';
import { WebStorageService } from '../../../common/services/webStorageService/webStorage.service';

@Component({
    selector: 'violations-plate-row',
    templateUrl: './violationsPlate.component.html',
    styleUrls: ['./violationsPlate.component.less'],
    animations: [
        trigger('rotatedState', [
            state('default', style({ transform: 'rotate(90deg)' })),
            state('rotated', style({ transform: 'rotate(270deg)' })),
            transition('rotated => default', animate('400ms ease-out')),
            transition('default => rotated', animate('400ms ease-in'))
        ])
    ]

})
export class ViolationsPlateComponent implements OnInit, OnDestroy {

    areAllSelected: boolean;

    constructor(
        private stateService: StateService,
        private webStorage: WebStorageService,
        private webStorageConst: WebStorageConst
    ) { }

    @Input() id: string;
    @Input() plate: IViolationPlate;
    @Input() noDiscount: boolean;
    @Input() showCollapseUi: boolean;
    @Input() hideHeader: boolean;
    @Input() cmsData: PaymentPlanToolTip;
    @Input() isRound: boolean;
    @Input() isCollapsed: boolean;
    @Input() isAssociated: boolean;
    @Output() isCollapsedChange = new EventEmitter<boolean>();
    @Input() selectAllAsDefault: boolean;
    @Input() isEditAllowed: boolean;
    @Input() hidePmntPlan: boolean;
    @Output() changeSelectionAll = new EventEmitter<any>();

    ngOnInit(): void {
        if (this.selectAllAsDefault && !this.areAllSelected) {
            this.areAllSelected = true;
        }
    }

    ngOnDestroy(): void {
        setTimeout(() => {
            this.webStorage.removeEntry(this.webStorageConst.vehicleSelected);
        }, 250);
    }

    public changeSelection() {
        if (this.showCollapseUi) {
            this.isCollapsedChange.emit(!this.isCollapsed);
        }
    }

    public goToPaymentPlans(plate: IViolationPlate) {
        const maskedPlate = plate.licensePlate.includes('*');
        const plateData = {
            state: !maskedPlate ? plate.licenseState : null,
            // eslint-disable-next-line id-blacklist
            number: !maskedPlate ? plate.licensePlate : null
        } as IPlate;

        this.webStorage.setKeyValue(this.webStorageConst.vehicleSelected, plateData);
        window.open(this.stateService.href(stateNames.Landing), '_blank');
    }



    toggleSelectAll() {
        this.changeSelectionAll.emit();
    }

}
