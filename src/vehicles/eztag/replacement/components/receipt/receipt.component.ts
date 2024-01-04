import { Component, Inject, OnInit, Input } from '@angular/core';
import { StateDeclaration, StateService } from '@uirouter/core';
import { WizardComponent } from 'common/ui';
import { IReceipt } from 'vehicles/common/receipt';
import { IEZTag } from 'vehicles/interfaces';
import { ReplacementStateService } from 'vehicles/eztag/replacement/services';
import { States } from 'vehicles/eztag/replacement/states';
import { ReceiptDataHelperService } from 'vehicles/shared/services/receipt-data-helper/receipt-data-helper.service';
import { States as SharedStates } from '../../../../shared';
import { MailingAddressService } from 'vehicles/shared';
import { StorefrontUtilityService } from '../../../../../storefront/services/storefrontUtility.service';


@Component({
    selector: 'replacement-receipt',
    templateUrl: './receipt.component.html',
    styleUrls: ['./receipt.component.less']
})
export class ReceiptComponent implements OnInit {

    isKiosk: boolean;
    @Input() cmsContent;
    ezTags: IEZTag[];
    deliveryMethod: string;
    data: IReceipt;

    constructor(private state: StateService,
        private storefrontUtilityService: StorefrontUtilityService,
        private receiptDataHelper: ReceiptDataHelperService,
        private replacementStateService: ReplacementStateService,
        private mailingService: MailingAddressService
    ) {

    }

    async ngOnInit() {

        this.isKiosk = this.storefrontUtilityService.isRunningAsKiosk && !this.storefrontUtilityService.webStoreData.fullSiteMode;

        this.data = this.getData();
        await this.mailingService.clearData();
    }

    private getData() {

        const state = this.replacementStateService.getState();

        return this.receiptDataHelper.getData({
            cmsContent: this.cmsContent,
            paymentAmt: state.amount,
            ezTags: [state.replaceTag],
            isPlate: false,
            deliveryMethod: state.deliveryMethod,
        });

    }

    async viewVehiclesClick() {
        await this.state.go(SharedStates.Root);
    }

    async nextStep(state: StateDeclaration) {
        await this.state.go(state);
    }

    proceed(wizardUi: WizardComponent) {

        if (this.isKiosk && wizardUi) {
            wizardUi.gotoNextState();
            return;
        }
    }

}
