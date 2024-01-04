import { Injectable, OnDestroy } from '@angular/core';
import {
    IMailingAddressInfo
} from 'vehicles/interfaces';
import { Country, IMailingInfo, State } from 'common/models';
import { AccountService, DialogService, GetContactInfoResponse, SetContactInfoRequest } from 'common/services';
import { NewBillingAddressInjectionValues } from 'common/ui';
import { emptyMailingInfo } from 'vehicles/shared';


@Injectable(
    { providedIn: 'root' }
)
export class MailingAddressService {

    private mailingAddressInfo: IMailingAddressInfo = {
        mailingInfo: {} as IMailingInfo,
        requestInfo: {} as SetContactInfoRequest,
        contactInfo: {} as GetContactInfoResponse
    };

    private isUpdatedAddress: boolean;
    private isAddressSet: boolean;

    constructor(
        private accountService: AccountService,
        private dialogService: DialogService
    ) { }

    public async setData() {
        if (!this.isAddressSet) {
            this.mailingAddressInfo.mailingInfo = await this.accountService.getMailingInfo();
            this.mailingAddressInfo.contactInfo = await this.accountService.getContactInfo();
            this.isUpdatedAddress = false;
            this.isAddressSet = true;
            if (this.mailingAddressInfo.mailingInfo?.badAddressFlag) {
                this.mailingAddressInfo.mailingInfo = emptyMailingInfo;
            }
        }
    }

    public async setMailingAddress(result: any) {
        Object.assign(this.mailingAddressInfo.mailingInfo, result);
        this.isUpdatedAddress = true;
    }

    public async getMailingAddress(): Promise<IMailingInfo> {
        if (!this.isAddressSet) {
            await this.setData();
        }
        return this.mailingAddressInfo.mailingInfo;
    }

    public getMailingAddressInfo(): IMailingAddressInfo {
        return this.mailingAddressInfo;
    }

    public async setMailingAddressOnAcctLevel(): Promise<boolean> {
        if (this.isUpdatedAddress) {
            this.mailingAddressInfo.requestInfo.mailingAddress = this.mailingAddressInfo.mailingInfo;
            this.mailingAddressInfo.requestInfo.contactInfo = this.mailingAddressInfo.contactInfo.contactInfo;
            this.mailingAddressInfo.requestInfo.personalInfo = this.mailingAddressInfo.contactInfo.personalInfo;
            const result = await this.accountService.setContactInfo(this.mailingAddressInfo.requestInfo);
            if (!result) {
                return false;
            }
        }
        return true;
    }

    public async onMailingAddressEdit(option: string, states: State[], countries: Country[], component: any) {

        const data: NewBillingAddressInjectionValues = {
            mailingInfo: Object.assign({}, await this.getMailingAddress()) as IMailingInfo,
            stateList: states,
            countryList: countries,
            isShowPersonalInfo: false,
            addressTitle: 'Mailing Address'
        };

        const result = await this.dialogService.openSliderCentered(component, data, { title: option + ' Mailing Address' });
        if (result) {
            await this.setMailingAddress(result.mailingInfo);
        }

    }

    public async clearData() {
        this.mailingAddressInfo.mailingInfo = {} as IMailingInfo;
        this.mailingAddressInfo.contactInfo = {} as GetContactInfoResponse;
        this.mailingAddressInfo.requestInfo = {} as SetContactInfoRequest;
        this.isUpdatedAddress = false;
        this.isAddressSet = false;
    }
}
