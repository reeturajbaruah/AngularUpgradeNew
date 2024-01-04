import { Component, Inject, Input, OnInit } from '@angular/core';
import { StateDeclaration, StateService } from '@uirouter/angular';
import { AddressInfo, BankDetails, BillingInfo, BillingType, CreditCardDetails, IMailingInfo } from 'common/models';
import { IEZTag } from 'vehicles/interfaces';
import { VehiclesManagerService } from 'vehicles/shared';
import { DeliveryMethodType, WizardComponent } from 'common/ui';
import { ICmsReceiptContent } from './receipt.interface';
import { AccountService } from 'common/services';
import { States as SharedStates } from 'vehicles/shared';
import { AddTagFrameComponent } from '../frame/frame.component';
import { StorefrontUtilityService } from '../../../../../storefront/services/storefrontUtility.service';

@Component({
    selector: 'vehicles-addTag-receipt-component',
    templateUrl: './receipt.component.html',
    styleUrls: ['./receipt.component.less']
})
export class AddTagReceiptComponent implements OnInit {

    @Input() cmsContent: ICmsReceiptContent;
    paymentAmount: number;
    paymentDate: Date;
    actNumber: number;
    actName: string;
    billingInfo: BillingInfo = {
        credit: {} as CreditCardDetails & AddressInfo,
        eft: {} as BankDetails & AddressInfo
    } as BillingInfo;
    tags: IEZTag[] = [];
    deliveryMethod: string;
    isKiosk: boolean;
    mailingAddress$: Promise<IMailingInfo>;
    isByMail: boolean;
    BillingType = BillingType;
    isOptIn: boolean;
    deliveryMethodCmsDesc: string;

    constructor(
        private frame: AddTagFrameComponent,
        private state: StateService,
        private manager: VehiclesManagerService,
        private storefrontUtilityService: StorefrontUtilityService,
        private accountService: AccountService
    ) { }

    async ngOnInit() {

        this.isKiosk = this.storefrontUtilityService.isRunningAsKiosk && !this.storefrontUtilityService.webStoreData.fullSiteMode;

        this.paymentDate = new Date();
        this.paymentAmount = (await this.manager.getPaymentInfo()).totalAmt;
        this.getActInfo();
        this.mailingAddress$ = this.accountService.getMailingInfo();
        this.setDeliveryMethod();
        this.billingInfo = await this.manager.getBillingInfo();
        this.tags = this.manager.getVehicleInfoList();

    }

    private setDeliveryMethod() {

        const deliveryMethodData = this.manager.getDeliveryMethod();
        this.isByMail = deliveryMethodData.deliveryMethod === DeliveryMethodType.Mail;
        this.deliveryMethod = 'Delivery Method:' + (this.isByMail ? 'By Mail' : 'EZ TAG Store Pickup');

        this.setDeliveryMethodCmsDesc();
    }

    private setDeliveryMethodCmsDesc() {
        if (this.isByMail) {
            this.deliveryMethodCmsDesc = this.cmsContent.LongDescription;
        } else {
            this.deliveryMethodCmsDesc = this.cmsContent.tagStorePickup;
        }
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
