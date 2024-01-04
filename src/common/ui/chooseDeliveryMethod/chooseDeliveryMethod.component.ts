import { Component, Inject, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMailingInfo } from 'common/models';
import { GenericRepoService, ResponseErrorService } from 'common/services';
import { StringUtilsService } from 'common/services/stringUtils/stringUtils.service';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { UrlPaths } from 'constants/module';
import { StorefrontService } from '../../../storefront/services/storefront.service';

interface CmsSection {
    ShortDescription: string;
    LongDescription: string;
    MailCMS: string;
    MailingAddressTooltip: string;
    MailingHeader: string;
    PickupHeader: string;
    addMailing: string;
    missingMailing: string;
}

export enum DeliveryMethodType {
    Mail = 'mail',
    Store = 'store'
}


@Component({
    selector: 'choose-delivery-method',
    templateUrl: './chooseDeliveryMethod.html',
    styleUrls: ['./chooseDeliveryMethod.less']
})
export class ChooseDeliveryMethodComponent implements OnInit {

    constructor(
        private routes: UrlPaths,
        private genericRepoService: GenericRepoService,
        private responseErrorService: ResponseErrorService,
        @Inject(ENVIRON_CONFIG) private environmentConfig,
        private storefrontService: StorefrontService,
        private stringUtils: StringUtilsService,
    ) { }

    @Input() public mailingInfo?: IMailingInfo;
    @Input() public deliveryMethod: string;
    @Input() public isMvu: boolean;
    @Input() public hideTooltip?: boolean;
    @Input() isAddEzTag: boolean;

    @Output() public deliveryMethodChange = new EventEmitter<string>();
    @Output() onEdit: EventEmitter<string> = new EventEmitter<string>();

    public deliveryMethodCMS = {} as CmsSection;

    public allowDeliveryByMail: boolean;
    public allowPickup: boolean;

    public deliveryMethodType = DeliveryMethodType;

    ngOnInit() {
        this.allowDeliveryByMail = this.isMvu ? this.environmentConfig.tagDeliveryConfig.MvuAllowDelivery : this.environmentConfig.tagDeliveryConfig.AllowDeliveryByMail;
        this.setAllowPickup();
        this.setDeliveryMethod();
        this.populateDeliveryMethodCms();
    }

    public setAllowPickup() {
        this.allowPickup = this.isMvu ? this.environmentConfig.tagDeliveryConfig.MvuAllowPickup : this.environmentConfig.tagDeliveryConfig.AllowPickup;
        if (!this.allowPickup) {
            this.allowPickup = this.storefrontService.isEnabled;
        }
    }

    public setDeliveryMethod() {
        // Customers can only pick up in store if using Kiosk
        if (this.storefrontService && this.storefrontService.isEnabled) {
            this.deliveryMethod = this.deliveryMethodType.Store;
            this.deliveryMethodChange.emit(this.deliveryMethod);    //Dev Note: If we don't emit here, the reviewOrder screen doesn't show the Store Pick-Up method properly.
            return;
        }

        // Feature Toggles dominate delivery method(s)

        if (!this.deliveryMethod) {
            if (this.allowDeliveryByMail && !this.allowPickup) {
                this.deliveryMethod = this.deliveryMethodType.Mail;
            }
            else if (!this.allowDeliveryByMail && this.allowPickup) {
                this.deliveryMethod = this.deliveryMethodType.Store;
            }
            else if (this.allowDeliveryByMail && this.allowPickup) {
                this.deliveryMethod = this.deliveryMethodType.Mail;
            }
        }

        this.deliveryMethodChange.emit(this.deliveryMethod);

    };

    public deliveryMethodChanged() {
        this.deliveryMethodChange.emit(this.deliveryMethod);
    }

    async populateDeliveryMethodCms() {

        const apiRequest = { ItemId: this.routes.deliveryMethodCMS, Fields: 'ShortDescription,LongDescription,Parameters' };
        const apiResponse = await this.genericRepoService.dataFactory.getCmsPageById(apiRequest) || {};

        if (this.responseErrorService.isErrorFree(apiResponse)) {
            const parsedResponse = JSON.parse(apiResponse.cmsResponse);

            this.deliveryMethodCMS = {
                LongDescription: parsedResponse.LongDescription,
                ShortDescription: parsedResponse.ShortDescription,
                MailCMS: this.stringUtils.getParameterObject(parsedResponse.Parameters).MailCMS,
                MailingAddressTooltip: this.stringUtils.getParameterObject(parsedResponse.Parameters).MailingAddressTooltip,
                MailingHeader: this.stringUtils.getParameterObject(parsedResponse.Parameters).MailingHeader,
                PickupHeader: this.stringUtils.getParameterObject(parsedResponse.Parameters).PickupHeader,
                addMailing: this.stringUtils.getParameterObject(parsedResponse.Parameters).addMailing,
                missingMailing: this.stringUtils.getParameterObject(parsedResponse.Parameters).missingMailing,
            };

        }

    }

    public onMailingAddressEdit(option: string) {
        this.onEdit.emit(option);
    }
}
