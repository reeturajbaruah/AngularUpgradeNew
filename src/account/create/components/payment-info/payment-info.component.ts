import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { isNullOrUndefined, StateDeclaration, UIRouterGlobals } from '@uirouter/core';
import { CampaignEventName, IPageEvent } from 'account/create/models/campaign-models';
import { Prop } from 'account/create/models/current-step.model';
import { IToggles } from 'account/create/models/toggles.models';
import { ComponentManagerService } from 'account/create/services/manager/component-manager-service';
import { NavigationService } from 'account/create/services/navigation/navigation.service';
import { PaymentFacadeService } from 'account/create/services/payment/facade/payment-facade.service';
import { States } from 'account/create/states';
import { SiteCoreItem } from 'cms/cms.module';
import {
    AddressInfo, BankAccountType, BankDetails, BillingInfo, BillingType, Country, CreditCardDetails,
    IAddorUpdatePaymentMethodandRebillAmountRequest,
    ICmsPaymentInfo,
    IMailingInfo, IPaymentMethodDetails, PaymentRadioStatus, State
} from 'common/models';
import { IAddressCheckBoxFlag, INewAddressFlag, WizardComponent } from 'common/ui';
import { PaymentMethodComponent } from 'shared/payment/method/components/payment-method.component';
import { CmsResolverService } from '../../../../cms/services';
import { CurrentUserService } from '../../../../common/services';
import { CmsIds } from '../../constants';
import { StoreService } from '../../services/store/store.service';
import { FrameComponent } from '../frame/frame.component';

@Component({
    selector: 'payment-info',
    templateUrl: './payment-info.component.html',
    styleUrls: ['./payment-info.component.less'],
})
export class PaymentInfoComponent implements OnInit {

    @ViewChild(PaymentMethodComponent, { static: false }) paymentMethod: PaymentMethodComponent;

    billingInfo: BillingInfo;
    paymentMethodHeader: string;
    billingAddressHeader: string;
    cmsPaymentInfo: ICmsPaymentInfo;

    @Input() stateList: State[];
    @Input() countryList: Country[];

    billingTitle: string;
    checkBoxFlag: IAddressCheckBoxFlag;
    newAddressFlag: INewAddressFlag;
    defaultAddress: IMailingInfo;
    newAddress: IMailingInfo;
    billingAddress: IMailingInfo;

    billingType = BillingType;
    paymentOperation: 'ADD' | 'UPDATE';
    submitBtnText: string;
    @Input() cancellationModal: SiteCoreItem;
    @Input() tagInfoModalCms: SiteCoreItem;
    navigationLinks = { prev: null, next: null };
    isMailingAddSameAsBilling = false;
    isMailingAddSameAsBillingCms: string;
    isAutoReplenishmentEnabled: boolean;
    paymentInfoData: any;
    pageName = 'PaymentInfo';
    managerBillingInfo: any;
    toggles: IToggles;

    constructor(private manager: ComponentManagerService,
        private uiRouterGlobals: UIRouterGlobals,
        private facade: PaymentFacadeService,
        private stateService: StateService,
        private parent: FrameComponent,
        private navigation: NavigationService,
        private store: StoreService,
        private currentUserService: CurrentUserService,
        private cmsResolverService: CmsResolverService
    ) {

    }

    // REFACTOR NOTE: Split all Phase-2 related tasks into it's own method
    async ngOnInit() {
        this.toggles = await this.manager.getToggles();

        await this.parent.campaignInit(this.pageName);
        this.parent.showHeader = false;
        this.isAutoReplenishmentEnabled = this.toggles.IsAutoReplenishmentEnabled;
        const payment = await this.manager.select(Prop.Payment);
        this.managerBillingInfo = payment.billingInfo;
        await this.init();
        await this.render(payment);

        this.manager.checkUserResumedCreateAcctFlow(this.uiRouterGlobals.params);

        this.showHideCashOption();

        this.renderFlexpayUserFlow(payment?.billingInfo);
    }

    private async init() {

        this.paymentMethodHeader = 'Payment Method'; // todo: sitecore
        this.billingAddressHeader = 'Billing Address';  // todo: sitecore
        this.billingTitle = 'Billing Title';

        this.checkBoxFlag = IAddressCheckBoxFlag.Default;
        this.newAddressFlag = INewAddressFlag.Empty;

        this.defaultAddress = await this.facade.getMailingInfo();

        if (this.defaultAddress.address1 === null) {
            this.isMailingAddSameAsBilling = true;
            this.billingAddress = {} as IMailingInfo;
            this.isMailingAddSameAsBillingCms = this.parent.cmsFrame.isMailingAddSameAsBillingCms;
        }

        await this.parent.skipDeliveryStep();
        this.submitBtnText = this.parent.nextButtonText(States.PaymentInfo);
        this.navigationLinks = this.navigation.navigation(States.PaymentInfo);
    }

    private async render(payment) {
        const billingInfo = payment.billingInfo;
        if (!billingInfo.billingInfoExists) {
            await this.renderFirstTimeSetup();
        } else {
            await this.renderExisting(payment);
        }

        const cmsContent = await this.cmsResolverService.resolve({
            ItemId: CmsIds.cmsPaymentInfo,
            mergeParams: true
        }) as ICmsPaymentInfo;

        this.billingInfo.cmsPaymentInfo = { ...cmsContent } as ICmsPaymentInfo;
        this.billingInfo.cmsPaymentInfo.tagInfoModalCms = this.tagInfoModalCms;
    }

    private async renderFirstTimeSetup() {

        this.paymentOperation = 'ADD';

        this.billingInfo = {
            credit: {
                country: 'USA',
                displayCountry: 'USA',
                international: false
            } as CreditCardDetails & AddressInfo,
            eft: {
                country: 'USA',
                displayCountry: 'USA',
                international: false,
                nameOnBankAccount: null,
            },
            billingType: null,
            cmsPaymentInfo: null
        } as BillingInfo;


    }

    private async renderExisting(payment) {
        const billingInfo = payment.billingInfo;
        this.paymentInfoData = payment?.paymentInfoData;
        this.paymentOperation = 'UPDATE';


        if (billingInfo.billingInfoExists) {

            switch (billingInfo.billingTypeDisplay) {

                case BillingType.Credit:
                    /* const paymentInfoData = payment?.paymentInfoData;*/
                    const savePaymentStatus = this.paymentInfoData?.paymentRequest?.payload?.billing?.savePaymentStatus;
                    if (savePaymentStatus !== null && savePaymentStatus !== undefined && savePaymentStatus === false) {
                        this.paymentOperation = 'ADD';

                    }
                    await this.parseCC(billingInfo, this.paymentInfoData);
                    break;

                case BillingType.Eft:
                    this.parseBank(billingInfo.eft);
                    break;

                case BillingType.Cash:
                    this.parseCash(billingInfo);
                    break;
            }

        }
    }

    private showHideCashOption() {
        this.billingInfo.paymentMethodDetails = {} as IPaymentMethodDetails;
        this.billingInfo.paymentMethodDetails.showCashOption = (this.toggles?.ShowCashOption) ? true : false;
        this.billingInfo.paymentMethodDetails.enableCashOption = this.billingInfo.paymentMethodDetails.showCashOption;
    }

    private renderFlexpayUserFlow(localBillingInfo: BillingInfo) {
        // Skip if Rebill toggle is OFF
        if (!this.toggles.IsAutoReplenishmentEnabled) { return; }

        // FlexPay Initial Render
        if (!this.billingInfo.billingType) {
            this.setBillingInfo(BillingType.Credit, true, true);
        }

        // FlexPay Non-Initial Cash Render
        else if (localBillingInfo.billingType === BillingType.Cash) {
            this.setBillingInfo(BillingType.Cash, false, false);
        }

        // FlexPay Non-Initial CC or EFT Render
        else {
            const rebillStatus = this.currentUserService.getCurrentUser().rebillOptIn;
            const savePaymentStatus = localBillingInfo.savePaymentStatus ?? !!this.billingInfo.billingType;

            this.setBillingInfo(this.billingInfo.billingType, rebillStatus, savePaymentStatus);
        }
    }

    private setBillingInfo(billingType, rebillStatus, savePaymentStatus) {
        this.billingInfo.billingType = billingType;
        this.billingInfo.autoReplenishmentStatus = rebillStatus;
        this.billingInfo.savePaymentStatus = savePaymentStatus;
    }


    private setBillingAddress(address) {

        if (this.defaultAddress.address1 !== null) {
            const defaultAddress = this.mapAddress(this.defaultAddress);

            let isDefault = false;

            if (JSON.stringify(address) === JSON.stringify(defaultAddress)) {
                isDefault = true;
            }

            if (isDefault) {
                this.checkBoxFlag = IAddressCheckBoxFlag.Default;
                this.newAddressFlag = INewAddressFlag.Empty;
            } else {
                this.checkBoxFlag = IAddressCheckBoxFlag.New;
                this.newAddressFlag = INewAddressFlag.Updated;
                this.newAddress = address as IMailingInfo;
            }
        } else {
            this.billingAddress = address as IMailingInfo;
        }

    }

    private parseCash(billingInfo) {
        this.billingInfo = billingInfo;
        this.billingInfo.billingType = BillingType.Cash;
        this.billingInfo.billingInfoExists = billingInfo.billingInfoExists;
        this.billingInfo.billingTypeDisplay = BillingType.Cash;
        this.billingInfo.autoReplenishmentStatus = billingInfo.autoReplenishmentStatus;
        this.billingInfo.savePaymentStatus = billingInfo.savePaymentStatus;
    }

    private async parseCC(billingInfo, paymentInfoData) {
        const cards = billingInfo.cards;
        if (cards && cards.length > 0) {
            const creditCardData = await this.manager.select(Prop.CreditCard);
            const card = cards[0];
            card.paypageRegistrationId = creditCardData?.paypageRegistrationId;
            this.billingInfo = {} as BillingInfo;
            this.billingInfo.credit = card;
            this.billingInfo.credit.expYear = card.selectedYear;
            this.billingInfo.billingType = BillingType.Credit;
            this.billingInfo.billingTypeDisplay = BillingType.Credit;
            this.billingInfo.eft = {
                country: 'USA',
                displayCountry: 'USA',
                international: false
            } as BankDetails & AddressInfo;

            let apiAddress;
            const billingAddress = paymentInfoData?.paymentRequest?.payload?.billingAddress;
            if (billingAddress) {
                apiAddress = this.mapAddress(billingAddress);
            }
            else {
                apiAddress = this.mapAddress(card);
            }

            this.setBillingAddress(apiAddress);
        }
    }

    private mapAddress(obj) {
        const { address1, address2, address3, address4, city, country, state, zip, plus4 } = obj;
        return { address1, address2, address3, address4, city, country, state, zip, plus4 };
    }

    private parseBank(eft) {
        if (eft) {
            this.billingInfo = {} as BillingInfo;
            this.billingInfo.eft = eft;
            this.billingInfo.eft.account2 = eft.accountNumber;
            this.billingInfo.billingType = BillingType.Eft;
            this.billingInfo.billingTypeDisplay = BillingType.Eft;
            this.billingInfo.eft.accountTypeDisplay = eft.accountTypeDisplay;
            this.billingInfo.eft.nameOnBankAccount = null;
            this.billingInfo.eft.accountType = eft.accountTypeDisplay === 'Personal' ?
                BankAccountType.Personal : BankAccountType.Business;
            this.billingInfo.billingInfoExists = true;
            this.billingInfo.credit = {
                country: 'USA',
                displayCountry: 'USA',
                international: false
            } as CreditCardDetails & AddressInfo;

        }
    }

    async submit(event) {
        let submitRes = false;

        await this.manager.campaign({ pageEvent: IPageEvent.Submit, pageName: this.pageName });

        if (this.isAutoReplenishmentEnabled) {
            this.billingInfo.billingTypeDisplay = this.billingInfo.billingType;
            await this.removeBillingMethodandStorePaymentInfo(this.billingInfo);
        }
        const billingType: string = this.billingInfo.billingType;

        switch (billingType) {
            case BillingType.Cash:
                this.currentUserService.updateAutoReplenishmentStatus(false);
                await this.stateService.go(this.navigationLinks.next.name);
                break;

            case BillingType.Credit:
                if (this.paymentMethod) {
                    const res = await this.paymentMethod.submit();
                    if (res) {
                        // REFACTOR NOTE: Split between Phase-1 and Phase-2
                        if (this.isAutoReplenishmentEnabled) {
                            const request = this.getAddorUpdatePaymentMethodandRebillAmountRequest(this.billingInfo);

                            if(this.managerBillingInfo?.credit?.cardNbr && this.managerBillingInfo.credit.cardNbr === this.billingInfo.credit.cardNbr) {
                                request.billingInfo.credit.accountBillingMethodId = this.billingInfo.credit.accountBillingMethodId;
                            }

                            if (this.billingInfo?.credit?.paypageRegistrationId) {
                                const paypageRegistrationId = await this.getPaypageRegistrationId();
                                await this.storeCreditCardData(paypageRegistrationId);
                            }
                            if (this.billingInfo.savePaymentStatus && !this.hasAutoRepStatusChanged()) {
                                const res2 = await this.facade.addorUpdatePaymentMethodandRebillAmountofCreditCard(request);
                                if(res2) { submitRes = true; }
                            }
                            else if (this.billingInfo.savePaymentStatus && this.hasAutoRepStatusChanged()) {
                                // If the user changes Replenishment status, ETC wants us to remove Payment Method and then Re-Add it
                                // REFACTOR NOTE: Ask ETC if we can utilize the same API to allow them to opt-in or opt-out of Auto-Replenishment, similar to what we do for Existing Users
                                // REFACTOR NOTE: Redesign removeBillingMethodandStorePaymentInfo to remove true
                                // REFACTOR NOTE: Split removeBillingMethodandStorePaymentInfo in remove and store
                                await this.removeBillingMethodandStorePaymentInfo(this.billingInfo, true);
                                const res2 = await this.facade.addPaymentMethodandRebillAmountofCreditCard(request);
                                if(res2) { submitRes = true; }
                            }
                            else {
                                await this.storePaymentInfoData(request);
                                submitRes = true;
                            }
                        }
                        else {
                            const submitPaymentResponse = await this.submitPayment();
                            if (submitPaymentResponse) { submitRes = true; }
                        }

                        if (submitRes) {
                            await this.updateMailingAddress();
                            this.updateRebillStatus();
                            await this.stateService.go(this.navigationLinks.next.name);
                        }
                    }
                }
                break;

            case BillingType.Eft:

                if (this.paymentMethod) {

                    if (this.isAutoReplenishmentEnabled) {
                        const request = this.getAddorUpdateEFTPaymentMethodandRebillAmountRequest(this.billingInfo);
                        if (this.billingInfo.savePaymentStatus && !this.hasAutoRepStatusChanged()) {
                            const res = await this.facade.addorUpdatePaymentMethodandRebillAmountofEFT(request);
                            if(res) { submitRes = true; }
                        }
                        else if (this.billingInfo.savePaymentStatus && this.hasAutoRepStatusChanged()) {
                            // REFACTOR NOTE: Redesign removeBillingMethodandStorePaymentInfo to remove true
                            await this.removeBillingMethodandStorePaymentInfo(this.billingInfo, true);
                            const res = await this.facade.addPaymentMethodandRebillAmountofEFT(request);
                            if(res) { submitRes = true; }
                        }
                        else {
                            submitRes = this.isValidEftAccount(request?.billingInfo?.eft?.accountNumber) && this.isValidEftAccount(request?.billingInfo?.eft?.account2);
                            await this.storePaymentInfoData(request);
                        }
                    }
                    else {
                        const submitPaymentResponse = await this.submitPayment();
                        if (submitPaymentResponse) { submitRes = true; }
                    }
                }

                if (submitRes) {
                    this.updateRebillStatus();
                    await this.stateService.go(this.navigationLinks.next.name);
                }
                break;
        }
    }

    private updateRebillStatus() {
        // Explicitly checking for 'false' to trigger the else condition for Phase-1, where autoReplenishmentStatus would be null instead of false.
        if (this.billingInfo.autoReplenishmentStatus === false) {
            this.currentUserService.updateAutoReplenishmentStatus(false);
        }
        else {
            this.currentUserService.updateAutoReplenishmentStatus(true);
        }
    }

    private isValidEftAccount(value: string | undefined): boolean {
        return value !== '';
    }

    private async storePaymentInfoData(request) {
        let paymentInfoData;

        if (request.billingInfo?.billingType) {
            paymentInfoData = {
                autoReplenishmentStatus: request.billingInfo.autoReplenishmentStatus,
                savePaymentStatus: request.billingInfo.savePaymentStatus,
                isBillingTypeCash: request.billingInfo.billingType === BillingType.Cash,
                selectedBillingType: request.billingInfo.billingType,
                paymentRequest: null,
                paymentOperation: null,
            };

            if (request.billingInfo?.savePaymentStatus === false) {
                paymentInfoData.paymentRequest = {
                    method: request.billingInfo.billingType as BillingType,
                    payload: {
                        billing: request.billingInfo,
                        billingAddress: this.getBillingAddress()
                    }
                };
                paymentInfoData.paymentOperation = request.paymentOperation;
            }

            this.store.dispatch(Prop.Payment, { paymentInfoData });
        }
    }

    private async storeCreditCardData(paypageRegistrationId) {
        let creditCardData;
        if (!isNullOrUndefined(paypageRegistrationId)) {
            creditCardData = {
                paypageRegistrationId
            };
            this.store.dispatch(Prop.CreditCard, { creditCardData });
        }
    }

    private async getPaypageRegistrationId() {
        const creditCardData = await this.manager.select(Prop.CreditCard);
        const currentpaypageRegistrationId = this.billingInfo?.credit?.paypageRegistrationId;
        const prevpaypageRegistrationId = creditCardData?.paypageRegistrationId;
        const paypageRegistrationId = (prevpaypageRegistrationId !== currentpaypageRegistrationId) ? currentpaypageRegistrationId : prevpaypageRegistrationId;
        return paypageRegistrationId;
    }

    private getAddorUpdatePaymentMethodandRebillAmountRequest(billingInfo) {

        const mailingInfo = this.getBillingAddress();
        this.setInternationalAdd();
        const paymentOperation = this.paymentOperation;
        return { billingInfo, mailingInfo, paymentOperation } as IAddorUpdatePaymentMethodandRebillAmountRequest;
    }

    private getAddorUpdateEFTPaymentMethodandRebillAmountRequest(billingInfo) {

        const mailingInfo = this.getBillingAddress();
        const paymentOperation = this.paymentOperation;
        return { billingInfo, mailingInfo, paymentOperation } as IAddorUpdatePaymentMethodandRebillAmountRequest;
    }

    private setInternationalAdd() {
        if (this.defaultAddress.address1 !== null) {
            this.defaultAddress.internationalAddress = this.defaultAddress.country === 'USA' ? false : true;
        }
    }

    private async removeBillingMethodandStorePaymentInfo(billingInfo, skip?) {
        const updatedBillingInfo = await this.facade.removeBillingMethod(billingInfo, skip);
        const request = this.getAddorUpdatePaymentMethodandRebillAmountRequest(updatedBillingInfo);
        await this.storePaymentInfoData(request);
        this.setInternationalAdd();
    }

    private async submitPayment() {

        this.setInternationalAdd();

        const paymentRequest = {
            method: this.billingInfo.billingType as BillingType,
            payload: {
                billing: this.billingInfo,
                billingAddress: this.getBillingAddress()
            }
        };

        return await this.facade.submitPayment(paymentRequest, this.paymentOperation);
    }

    private getBillingAddress() {
        if (this.defaultAddress.address1 !== null) {
            return this.checkBoxFlag === IAddressCheckBoxFlag.Default ? this.defaultAddress : this.newAddress;
        } else {
            return this.billingAddress;
        }
    }

    private async updateMailingAddress() {
        if (this.isMailingAddSameAsBilling) {
            const address = this.getBillingAddress();
            await this.facade.setMailingInfoAtAcctLevel(address);
        }
    }

    async cancel(state: StateDeclaration, wizardUi: WizardComponent) {
        return await this.parent.cancel(this.cancellationModal, wizardUi);
    }

    async previous(state: StateDeclaration) {
        await this.stateService.go(this.navigationLinks.prev.name);
    }

    onAutoReplenishmentStatusChange(status: boolean) {
        this.billingInfo.autoReplenishmentStatus = status;
        if (this.billingInfo?.paymentMethodDetails?.showCashOption) {
            this.billingInfo.paymentMethodDetails.enableCashOption = this.billingInfo.autoReplenishmentStatus === false
                && this.billingInfo?.paymentMethodDetails?.showCashOption;
        }
        if (this.billingInfo?.autoReplenishmentStatus !== false && this.billingInfo?.billingType === BillingType.Cash) {
            this.billingInfo.billingType = BillingType.Credit;
            this.billingInfo.savePaymentStatus = true;
        }
    }

    onAutoReplenishmentSelectionChange(status: boolean) {
        this.billingInfo.autoReplenishmentStatus = status;
        if (this.billingInfo?.paymentMethodDetails?.showCashOption) {
            this.billingInfo.paymentMethodDetails.enableCashOption = this.billingInfo?.paymentMethodDetails?.showCashOption;
        }
        if (this.billingInfo?.autoReplenishmentStatus !== false && this.billingInfo?.billingType === BillingType.Cash) {
            this.billingInfo.billingType = BillingType.Credit;
            this.billingInfo.savePaymentStatus = true;
        }
    }

    private hasAutoRepStatusChanged() {
        if (this.currentUserService.getCurrentUser()?.rebillOptIn === null) {
            return false;
        }
        return this.billingInfo?.autoReplenishmentStatus !== this.currentUserService.getCurrentUser()?.rebillOptIn;
    }
}
