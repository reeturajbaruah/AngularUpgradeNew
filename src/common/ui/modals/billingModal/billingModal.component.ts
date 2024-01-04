import { T } from '@angular/cdk/keycodes';
import { Component, Inject, OnInit, ViewChild, Input } from '@angular/core';
import { SiteCoreItem } from 'cms/cms.module';
import { billingModalCmsItemId } from 'cms/constants';
import { CmsResolverService } from 'cms/services';
import { AddressConstants, AddressInfo, BaseBankAccountRequest, BillingInfo, BillingType, IMailingInfo } from 'common/models';
import { AccountService, DialogRef, GenericRepoService, ResponseErrorService, SetContactInfoRequest, ToasterService } from 'common/services';
import { SessionService } from 'common/services/session/session.service';
import { CreditCardEntryComponent, IAddressCheckBoxFlag, INewAddressFlag } from 'common/ui';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { userRoles } from 'constants/module';

export interface InjectionValues {
    billingInformation?: BillingInfo;
    billingType: BillingType | string;
    stateList: any[];
    countryList: any[];

    paymentMethodAvailability?: { openCardSlots: number; openEftSlots: number };
    uiOptions?: { isNew?: boolean; showMakePrimary?: boolean };
    uiResults?: { addToPaymentList?: boolean; makePrimary?: boolean };
    lockType?: boolean;
    creditEntryExpireOnly?: boolean;
    hideForEFT?: boolean;
    hidePaymentSelection?: boolean;
    cmsImage?: string;
    shouldForcePrimarySelection?: boolean;
}


interface CmsContent {
    addPaymentMethod: string;
    makePrimary: string;
    creditReadOnly: string;
    manageBillingToolTip: string;
    isMailingAddSameAsBillingCms: string;
}

@Component({
    selector: 'billing-modal',
    templateUrl: './billingModal.html',
    styleUrls: ['./billingModal.less']
})
export class BillingModalComponent implements OnInit {

    constructor(
        private dialogRef: DialogRef<InjectionValues>,
        private genericRepoService: GenericRepoService,
        private responseErrorService: ResponseErrorService,
        private cmsResolverService: CmsResolverService,
        private toasterService: ToasterService,
        private accountService: AccountService,
        @Inject(ENVIRON_CONFIG) public environmentConfig,
        private session: SessionService
    ) { }

    @ViewChild(CreditCardEntryComponent, { static: false }) creditEntry: CreditCardEntryComponent;

    @Input() lockType?: boolean;

    @Input() creditEntryExpireOnly?: boolean;

    @Input() hideForEFT?: boolean;

    @Input() hidePaymentSelection?: boolean;

    @Input() cmsImage?: string;

    @Input() shouldForcePrimarySelection?= false;

    public data = {} as InjectionValues;
    public cmsContent: CmsContent;
    public BillingType = BillingType;

    public isInternational: boolean;
    public address: AddressInfo;
    public mailingAddress: AddressInfo;

    popUpDelay = false;
    isPendingFunds = false;
    billingAddress: IMailingInfo;
    saveBillingAddressAsMailing: boolean;
    isMailingAddSameAsBillingCms: string;
    checkBoxFlag: IAddressCheckBoxFlag;
    newAddressFlag: INewAddressFlag;
    newAddress: IMailingInfo;

    public close() {
        this.toasterService.removeAll();
        this.dialogRef.close();
    }

    public async submit() {
        if (this.data.billingType === 'EFT') {

            this.data.billingInformation.eft = Object.assign(this.data.billingInformation.eft, {
                accountTypeDisplay: this.data.billingInformation.eft.accountType,
                nameOnBankAccount: this.data.billingInformation.eft.name
            });

            this.data.billingInformation.eft = Object.assign(this.data.billingInformation.eft, this.address);
            this.data.billingInformation.eft.international = this.isInternational;
            const eftRequest: BaseBankAccountRequest = {
                AccountType: this.data.billingInformation.eft.accountType,
                RoutingNumber: this.data.billingInformation.eft.routingNumber,
                AccountNumber: this.data.billingInformation.eft.accountNumber
            };

            if (this.showMakePrimary && this.setAsPrimary) {
                this.data.billingInformation.eft.primary = true;
            }

            const response = await this.genericRepoService.dataFactory.eftValidateRouting(eftRequest);

            if (Array.isArray(response.alerts) && response.alerts.length !== 0) {
                this.responseErrorService.displayAlertsFromResponse(response);
            }

        } else {
            const address = await this.getBillingAddress();

            if (this.saveBillingAddressAsMailing) {
                this.setMailingAddress(address);
            }

            this.data.billingInformation.credit = Object.assign(this.data.billingInformation.credit, address);
            this.data.billingInformation.credit.international = this.isInternational;

            if (this.showMakePrimary && this.setAsPrimary) {
                this.data.billingInformation.credit.primary = true;
            }

            if (this.creditEntry) {
                const submitResponse = await this.creditEntry.submit();
                if (!submitResponse) {
                    return;
                }
            }
        }

        this.data.uiResults = {
            addToPaymentList: this.showAddToPaymentMethodList && this.addPaymentMethod,
            makePrimary: this.showMakePrimary && this.setAsPrimary
        };

        this.dialogRef.close(this.data);
    }

    public get showAddToPaymentMethodList(): boolean {

        if (!this.data.paymentMethodAvailability || !this.data.billingType) {
            return false;
        }

        const showUi = this.data?.uiOptions?.isNew && !this.data?.uiOptions?.showMakePrimary;

        const inRange = this.data.billingType === BillingType.Credit
            ? (this.data.paymentMethodAvailability.openCardSlots > 0)
            : (this.data.paymentMethodAvailability.openEftSlots > 0);

        return showUi && inRange && (this.data && this.data.uiResults ?this.data.uiResults.addToPaymentList : true);
    }

    public get showMakePrimary(): boolean {
        return this.data?.uiOptions?.showMakePrimary;
    }

    public setAsPrimary: boolean;
    public addPaymentMethod: boolean;

    async ngOnInit() {
        this.popUpDelay = false;

        const cmsContent = await this.cmsResolverService
            .resolve({ ItemId: billingModalCmsItemId, mergeParams: true }) as
            {
                addPaymentMethod: string;
                makePrimary: string;
                credReadOnlyDesc: string;
                Children: SiteCoreItem[];
                isMailingAddSameAsBillingCms: string;
            };


        this.cmsContent = {
            addPaymentMethod: cmsContent.addPaymentMethod,
            makePrimary: cmsContent.makePrimary,
            creditReadOnly: cmsContent.credReadOnlyDesc,
            manageBillingToolTip: cmsContent.Children[0]?.ShortDescription,
            isMailingAddSameAsBillingCms: cmsContent.isMailingAddSameAsBillingCms
        };

        this.data = { ...this.dialogRef.data };

        // Ensure to set these properties first before making any async call to the API for rendering purposes
        this.addPaymentMethod = false;
        this.creditEntryExpireOnly = this.data.creditEntryExpireOnly;
        this.lockType = this.data.lockType;
        this.hideForEFT = this.data.hideForEFT;
        this.hidePaymentSelection = this.data.hidePaymentSelection;
        this.shouldForcePrimarySelection = this.data.shouldForcePrimarySelection;
        this.setAsPrimary = this.shouldForcePrimarySelection;

        this.address = this.data?.billingType === BillingType.Credit
            ? this.getAddressInfo(this.data?.billingInformation?.credit)
            : this.getAddressInfo(this.data?.billingInformation?.eft);

        this.isInternational = this.address?.country !== AddressConstants.USA;

        const mailInfo = await this.accountService.getMailingInfo();

        if (mailInfo) {
            this.mailingAddress = this.getAddressInfo(mailInfo as AddressInfo);
        }

        this.popUpDelay = true;

        if (this.environmentConfig.billingModalErrorPopUp) {
            this.data.billingInformation = undefined;
        }

        this.checkPendingFundsFlow();
    }

    private getAddressInfo(addressInfo: AddressInfo): AddressInfo {
        return {
            address1: addressInfo?.address1,
            address2: addressInfo?.address2,
            address3: addressInfo?.address3,
            address4: addressInfo?.address4,
            city: addressInfo?.city,
            state: addressInfo?.state,
            zip: addressInfo?.zip,
            plus4: addressInfo?.plus4,
            country: addressInfo?.country,
            displayCountry: addressInfo?.displayCountry || 'USA',
            international: addressInfo?.international || false
        };
    }

    private checkPendingFundsFlow() {

        if (this.session.userRole === userRoles.pendingFunds) {
            this.isPendingFunds = true;
            this.billingAddress = {} as IMailingInfo;
            this.isMailingAddSameAsBillingCms = this.cmsContent.isMailingAddSameAsBillingCms;
            this.checkBoxFlag = IAddressCheckBoxFlag.Default;
            this.newAddressFlag = INewAddressFlag.Empty;
            if (!this.mailingAddress.address1) {
                this.saveBillingAddressAsMailing = true;
            }
        }

    }

    private async getBillingAddress() {

        if (!this.isPendingFunds) {
            return this.address;
        } else {
            if (!this.mailingAddress.address1) {
                return this.billingAddress;
            } else {
                return this.checkBoxFlag === IAddressCheckBoxFlag.Default ? this.mailingAddress : this.newAddress;

            }
        }
    }

    private async setMailingAddress(address) {
        // TODO: Change this to only update Mailing Address during Sync RITE API Changes
        return await this.accountService.setMailingInfoAtAcctLevel(address);
    }
}
