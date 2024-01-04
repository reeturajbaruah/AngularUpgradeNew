import { AfterViewInit, Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import { StateDeclaration, StateService, UIRouterGlobals } from '@uirouter/core';
import { AddressInfo, BankAccountType, BankDetails, BillingInfo, BillingType, CreditCardDetails, DeliveryMethodType, ITagOrderDesc, TagType } from '../../../../common/models';
import { AccountService, CurrentUserService } from '../../../../common/services';
import { IBillingContent } from '../../../../shared/payment/billing/models/models';
import { IEZTag } from '../../../../shared/vehicle-info';
import { IOrder, IOrderDetails } from '../../../../shared/vehicle-info/order-summary/models/order.models';
import { ComponentManagerService } from '../../services/manager/component-manager-service';
import { stateNames as profileStateNames } from 'profile/constants';
import { IRecieptInfoCmsData } from 'account/create/models/receipt.models';
import { IWizardCmsData } from 'account/create/models/wizard-data.models';
import { IDeliveryMethodInfo } from 'account/create/models/delivery-method.model';
import { Prop } from 'account/create/models/current-step.model';
import { ITagsOrdered } from 'shared/models/vehicles.models';
import { UserRoles } from 'constants/userRoles.constants';
import { FrameComponent } from '../frame/frame.component';
import { KioskFacadeService } from 'account/create/services/kiosk/facade/kiosk-facade.service';
import { stateNames as accountDashboardStates } from 'accountDashboard/constants';
import { CampaignEventName, IPageEvent } from 'account/create/models/campaign-models';
import { IToggles } from 'account/create/models/toggles.models';
import { StorefrontUtilityService } from '../../../../storefront/services/storefrontUtility.service';

@Component({
    selector: 'receipt',
    templateUrl: './receipt.component.html',
    styleUrls: ['./receipt.component.less']
})
export class ReceiptComponent implements OnInit {

    @Input() deliveryMethodInfoPage: IWizardCmsData;
    @Input() receiptInfoPage: IRecieptInfoCmsData;
    paymentAmount: number;
    paymentDate: Date;
    actNumber: number;
    paymentInfo;
    vehicles;
    BillingType = BillingType;
    billingInfo: BillingInfo;
    vehicle: IEZTag;
    billingContent: IBillingContent;
    vehiclesOrder: IOrder;
    details: IOrderDetails[];
    mailingAddress: AddressInfo;
    isByMail: boolean;
    deliveryMethodInfo: IDeliveryMethodInfo;
    isKiosk: boolean;
    tagsOrdered: ITagsOrdered;
    deliveryMethodDesc: string;
    hasEzTag: boolean;
    isFlexPay: boolean;
    pageName = 'Receipt';
    toggles: IToggles;

    constructor(
        private currentUserService: CurrentUserService,
        private manager: ComponentManagerService,
        private state: StateService,
        private uiRouterGlobals: UIRouterGlobals,
        private storefrontUtilityService: StorefrontUtilityService,
        private userRoles: UserRoles,
        private parent: FrameComponent,
        private kioskFacade: KioskFacadeService,
        private stateService: StateService,
        private acctSerivce: AccountService
    ) { }

    async ngOnInit() {
        this.toggles = await this.manager.getToggles();
        await this.parent.campaignInit(this.pageName);

        this.parent.showHeader = false;
        this.isKiosk = this.storefrontUtilityService.isRunningAsKiosk && !this.storefrontUtilityService.webStoreData.fullSiteMode;

        this.vehicles = await this.manager.select(Prop.Vehicles);
        const billing = await this.manager.select(Prop.Payment);
        this.billingInfo = await this.parseBillingInfo(billing);
        await this.getDeliveryMethodInfo();

        if (this.uiRouterGlobals.params && this.uiRouterGlobals.params.totalAmt !== null) {
            this.paymentAmount = this.uiRouterGlobals.params.totalAmt;
        }

        if (this.toggles.IsFlexPay && this.toggles.IsAutoReplenishmentEnabled) {
            this.isFlexPay = true;
        }
        else {
            this.isFlexPay = false;
        }

        this.paymentDate = new Date();
        this.actNumber = this.currentUserService.getCurrentUser().acctId;
        this.setVehicleInfo();
        this.setDeliveryMethod();

        this.updateSession();
    }

    private updateSession() {
        if (this.billingInfo.billingType === BillingType.Cash) {
            this.currentUserService.makeSessionActive('PF', this.userRoles.pendingFunds);
        }
        else {
            this.currentUserService.makeSessionActive('A', this.userRoles.active);
        }
    }

    private async getDeliveryMethodInfo() {
        this.deliveryMethodInfo = await this.manager.select(Prop.DeliveryMethod);
        if (!this.deliveryMethodInfo?.addressInfo?.address1) {
            this.deliveryMethodInfo.addressInfo = await this.acctSerivce.getMailingInfo();
        }
    }

    private setVehicleInfo() {
        this.setTagsOrdered();
        this.setVehiclesTagsDesc();
        this.setEzTagStatus();
    }

    private setTagsOrdered() {
        this.tagsOrdered = {
            title: this.receiptInfoPage.vehicleInfoTitle,
            tags: [
                {
                    title: this.receiptInfoPage.vehicleInfoText,
                    ezTags: this.vehicles,
                    isPlate: false
                }
            ]
        };
    }

    private setVehiclesTagsDesc() {
        if (this.toggles.IsFlexPay && this.toggles.EzTagOption) {
            this.vehicles.forEach(v => {
                if (v.tagId === TagType.NoTag) {
                    v.tagInfo = { hasTag: false, desc: this.receiptInfoPage.ezTagNotOrdered };
                }
                else {
                    v.tagInfo = { hasTag: false, desc: this.receiptInfoPage.ezTagOrdered };
                }
            });
        }
    }

    private setEzTagStatus() {
        this.hasEzTag = this.tagsOrdered?.tags?.some(tag => tag.ezTags?.some(ezTag => ezTag.tagId !== TagType.NoTag));
    }

    private setDeliveryMethod() {
        if (this.deliveryMethodInfo.selectedDeliveryMethod === DeliveryMethodType.Mail) {
            this.isByMail = true;
            this.mailingAddress = this.deliveryMethodInfo?.addressInfo;
            this.deliveryMethodDesc = this.deliveryMethodInfoPage.deliveryMethodMail;
        } else {
            this.isByMail = false;
            this.deliveryMethodDesc = this.deliveryMethodInfoPage.deliveryMethodPickUp;
        }
    }

    parseBillingInfo = async (billingData) => {
        const billingInfo = {} as BillingInfo;
        const billing = billingData?.billingInfo;
        const paymentInfo = billingData?.paymentInfoData;

        if (billing) {
            if (billing.billingTypeDisplay === BillingType.Credit && billing.cards.length > 0) {
                const card = billing.cards[0];
                const address = paymentInfo?.paymentRequest?.payload?.billingAddress as AddressInfo;
                const credit = (address) ? { ...card, ...address } : { ...card };
                billingInfo.credit = credit;
                billingInfo.credit.expYear = card.selectedYear;
                billingInfo.billingType = BillingType.Credit;
            }
            else if (billing.billingTypeDisplay === BillingType.Eft) {
                const eft: BankDetails & AddressInfo = billing.eft;
                billingInfo.eft = billing.eft;
                billingInfo.billingType = BillingType.Eft;
                billingInfo.eft.nameOnBankAccount = eft.nameOnBankAccount;
                billingInfo.eft.accountType = eft.accountTypeDisplay as BankAccountType;
            }
            else {
                billingInfo.billingType = BillingType.Cash;
            }
        }

        if (paymentInfo) {
            billingInfo.autoReplenishmentStatus = paymentInfo?.autoReplenishmentStatus;
            billingInfo.savePaymentStatus = paymentInfo?.savePaymentStatus;
        }
        else if (billingInfo?.billingType === BillingType.Cash) {
            billingInfo.savePaymentStatus = false;
        }
        else {
            billingInfo.savePaymentStatus = true;
        }

        return billingInfo;
    };


    async routeToAuthorizedContact() {
        this.clear();
        await this.state.go(profileStateNames.UpdateAuthorizedContacts);
    }

    async routeToSecondaryPaymentMethod() {
        this.clear();
        await this.state.go(profileStateNames.UpdateBillingInformation);

    }

    async routeToCommunicationPreferences() {
        this.clear();
        await this.state.go(profileStateNames.AccountDetails);
    }


    async nextStep(state: StateDeclaration) {

        await this.manager.campaign({ pageEvent: IPageEvent.Submit, pageName: this.pageName });

        this.clear();
        await this.state.go(state);
    }

    private clear() {
        this.manager.clearStore();
    }

    async proceed() {
        await this.kioskFacade.proceedOnAcctComplete(this.billingInfo.billingType as BillingType, this.hasEzTag);
        this.manager.clearStore();
    }

    async routeToMailingAddress() {
        this.clear();
        await this.state.go(profileStateNames.UpdateMailingAddress);
    }

    @HostListener('window:popstate', ['$event'])
    onBrowserBackNav(event) {
        this.stateService.go(accountDashboardStates.Frame);
    }

}
