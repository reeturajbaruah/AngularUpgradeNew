import { Component, Inject, Input, OnInit } from '@angular/core';
import { StateDeclaration, StateService } from '@uirouter/angular';
import { BillingInfo, BillingType } from 'common/models';
import { IEZTag } from 'vehicles/interfaces';
import { VehiclesManagerService } from 'vehicles/shared';
import { ICmsReceiptContent } from './receipt.interface';
import { WizardComponent } from 'common/ui';
import { States as SharedStates } from 'vehicles/shared';
import { AddPlateFrameComponent } from '../frame/frame.component';
import { StorefrontUtilityService } from '../../../../../storefront/services/storefrontUtility.service';


@Component({
    selector: 'vehicles-addPlate-receipt-component',
    templateUrl: './receipt.component.html',
    styleUrls: ['./receipt.component.less']
})
export class AddPlateReceiptComponent implements OnInit {

    @Input() cmsContent: ICmsReceiptContent;
    paymentAmount: number;
    paymentDate: Date;
    actNumber: number;
    actName: string;
    billingInfo: BillingInfo;
    plates: IEZTag[] = [];
    isKiosk: boolean;
    isOptIn: boolean;
    public BillingType = BillingType;

    constructor(
        private frame: AddPlateFrameComponent,
        private state: StateService,
        private manager: VehiclesManagerService,
        private storefrontUtilityService: StorefrontUtilityService

    ) { }

    async ngOnInit() {

        this.isKiosk = this.storefrontUtilityService.isRunningAsKiosk && !this.storefrontUtilityService.webStoreData.fullSiteMode;

        this.paymentDate = new Date();
        this.paymentAmount = (await this.manager.getPaymentInfo()).totalAmt;

        this.getActInfo();

        this.billingInfo = await this.manager.getBillingInfo();

        this.plates = this.manager.getVehicleInfoList();


    }

    private getActInfo() {
        const currentUser = this.manager.getCurrentUser();
        this.actNumber = currentUser.acctId;
        this.actName = currentUser.firstName + ' ' + currentUser.lastName;
        this.isOptIn = currentUser.rebillOptIn;
    }


    public async viewVehiclesClick() {
        this.manager.clearData();
        await this.state.go(SharedStates.Root);
    }

    async nextStep(state: StateDeclaration) {
        this.manager.clearData();
        await this.state.go(state);
    }


    public proceed(wizardUi: WizardComponent) {
        this.manager.clearData();

        if (this.isKiosk && wizardUi) {
            wizardUi.gotoNextState();
            return;
        }
    }

}
