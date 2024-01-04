import { Component, Input, Inject, OnInit, AfterViewInit } from '@angular/core';
import { StateDeclaration, StateService } from '@uirouter/angular';
import { ICheckoutPaymentRes } from 'account/create/models/checkout-payment.models';
import { Prop } from 'account/create/models/current-step.model';
import { CheckoutApiService } from 'account/create/services/checkout/api/checkout-api.service';
import { CheckoutFacadeService } from 'account/create/services/checkout/facade/checkout-facade.service';
import { ComponentManagerService } from 'account/create/services/manager/component-manager-service';
import { PaymentFacadeService } from 'account/create/services/payment/facade/payment-facade.service';
import { VehiclesOperationHelper } from 'account/create/services/vehicles/operations/helper/operation-helper';
import { States } from 'account/create/states';
import { SiteCoreItem } from 'cms/cms.module';
import {
    AddressConstants,
    AddressInfo, BaseBankAccountRequest, BillingInfo, BillingType, Country, CreditCardDetails,
    DeliveryMethodType, IMailingInfo, IRemovePaymentMethodRequest, PaymentRadioStatus, State, TagType
} from 'common/models';
import { WizardComponent } from 'common/ui';
import { IDeliveryMethod } from 'shared/delivery-method/models';
import { Action, IEvent } from 'shared/models/events.model';
import { IPaymentInfoData, IReviewOrderCms } from 'shared/models/review-order.model';
import { IBillingContent } from 'shared/payment/billing/models/models';
import { IPaymentSummary } from 'shared/payment/summary/models';
import { IEZTag } from 'shared/vehicle-info';
import { IOrder } from 'shared/vehicle-info/order-summary/models';
import { FrameComponent } from '../frame/frame.component';
import { ReviewHelper } from './helper/review.helper';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { CurrentUserService, GenericRepoService, ResponseErrorService } from 'common/services';
import { NavigationService } from 'account/create/services/navigation/navigation.service';
import { ICashPaymentSummaryContent } from 'account/create/models/review.models';
import { RebillFacadeService } from 'account/create/services/payment/facade/rebill-facade.service';
import { PaymentApiService } from 'account/create/services/payment/api/payment-api.service';
import { IPageEvent } from 'account/create/models/campaign-models';
import { IToggles } from 'account/create/models/toggles.models';
import { StorefrontService } from '../../../../storefront/services/storefront.service';

export interface ICmsOrderSummarySection {
    Title: string;
    ShortDescription: string;           //Agreement - Text/label for Checkbox
    LongDescription: string;            //Agreement - Paragraph ABOVE Checkbox
    EzTagAgreementValidation: string;   //Agreement - Validation for Checkbox
}

@Component({
    selector: 'review',
    templateUrl: './review.component.html',
    styleUrls: ['./review.component.less'],
    providers: [CheckoutFacadeService, CheckoutApiService, ReviewHelper]
})
export class ReviewComponent implements OnInit {

    paymentInfo;
    deliveryMethod: any;
    deliveryMethodSummary: IDeliveryMethod;
    vehicles: IEZTag[];
    billingContent: IBillingContent;
    vehiclesOrder: IOrder;
    @Input() stateList: State[];
    paymentSummary: IPaymentSummary;

    @Input() countryList: Country[];
    @Input() cmsSectionConfirmOrderSummary: ICmsOrderSummarySection;
    @Input() pageCms: IReviewOrderCms;
    @Input() deleteModalCms: SiteCoreItem;
    @Input() editModalCms: SiteCoreItem;
    @Input() replenishmentAmtModalCms: SiteCoreItem;
    @Input() tagInfoModalCms: SiteCoreItem;
    @Input() cashPaymentSummaryModalCms: ICashPaymentSummaryContent;
    @Input() cancellationModal: SiteCoreItem;
    paymentDueInfo: IPaymentInfoData = {} as IPaymentInfoData;
    currentBalance: number;
    pendingCashPaymentAmt: number;
    private isAutoReplenishmentEnabled: boolean;

    billingInfo = {} as BillingInfo;
    deliveryInfo: any;
    checkoutPayment: ICheckoutPaymentRes;
    agreeCheckVal = false;
    rebillStatus?: boolean;
    navigationLinks = { prev: null, next: null };
    pageName = 'Review';

    toggles: IToggles;

    constructor(private manager: ComponentManagerService,
        private stateService: StateService,
        private checkoutFacade: CheckoutFacadeService,
        private vehiclesOperationHelper: VehiclesOperationHelper,
        private paymentFacade: PaymentFacadeService,
        private helper: ReviewHelper,
        private parent: FrameComponent,
        private genericRepo: GenericRepoService,
        private responseErrorService: ResponseErrorService,
        private currentUserService: CurrentUserService,
        private navigation: NavigationService,
        private storefrontService: StorefrontService,
        private rebillService: RebillFacadeService,
        private paymentApiService: PaymentApiService,
        @Inject(ENVIRON_CONFIG) public environmentConfig
    ) { }

    async ngOnInit() {
        this.toggles = await this.manager.getToggles();
        await this.parent.campaignInit(this.pageName);
        this.parent.showHeader = false;
        this.helper.cms = {
            pageCms: this.pageCms,
            replenishmentAmtModalCms: this.replenishmentAmtModalCms,
            tagInfoModalCms: this.tagInfoModalCms
        };

        this.isAutoReplenishmentEnabled = (this.toggles?.IsAutoReplenishmentEnabled === true) ? true : false;

        await this.get();
        await this.set();
        this.agreeCheckVal = false;
        await this.GetPaymentDetails();

        this.navigationLinks = this.navigation.navigation(States.Review);
    }

    async get() {
        this.vehicles = await this.manager.select(Prop.Vehicles);
        const pymntInfo = await this.manager.select(Prop.Payment);
        this.paymentInfo = pymntInfo;

        this.deliveryInfo = await this.manager.select(Prop.DeliveryMethod);
        this.deliveryMethod = this.deliveryInfo.selectedDeliveryMethod as DeliveryMethodType;
    }

    async set() {
        this.rebillStatus = this.currentUserService.getCurrentUser().rebillOptIn;
        await this.setBillingInfo();
        await this.setVehiclesOrder();
        this.setDeliveryMethod();
        await this.setPaymentSummary();
        await this.ValidateRoutingNumber();
    }

    private async setBillingInfo() {
        this.billingInfo = {
            credit: {
                country: AddressConstants.USA,
                displayCountry: AddressConstants.USA,
                international: false
            } as CreditCardDetails & AddressInfo,
            eft: {
                country: AddressConstants.USA,
                displayCountry: AddressConstants.USA,
                international: false,
                nameOnBankAccount: null
            },
            billingType: null
        } as BillingInfo;

        let billing: any;

        if (this.isAutoReplenishmentEnabled) {
            billing = this.billingInfo;
            const noSavePayment = (this.paymentInfo?.paymentInfoData?.savePaymentStatus === false);
            const billingType = this.paymentInfo?.paymentInfoData?.paymentRequest?.payload?.billing?.billingType;

            if (noSavePayment && billingType !== BillingType.Cash) {
                billing.billingTypeDisplay = billingType;
                if (billingType === BillingType.Credit) {
                    const address = this.paymentInfo?.paymentInfoData?.paymentRequest?.payload?.billingAddress as AddressInfo;
                    const card = this.paymentInfo?.paymentInfoData?.paymentRequest?.payload?.billing?.credit;
                    const credit = (address) ? { ...card, ...address } : { ...card };
                    billing.credit = credit;
                }
                else if (billingType === BillingType.Eft) {
                    billing = { ...this.paymentInfo?.paymentInfoData?.paymentRequest?.payload?.billing };
                }
            }
            else {
                billing = this.paymentInfo.billingInfo;
            }
            billing.autoReplenishmentStatus = this.paymentInfo?.paymentInfoData?.autoReplenishmentStatus;
            billing.savePaymentStatus = this.paymentInfo?.paymentInfoData?.savePaymentStatus;
        }
        else {

            billing = this.paymentInfo.billingInfo;
        }

        this.billingContent = await this.helper.getBillingInfo(billing, this.billingInfo, this.stateList, this.countryList, this.isAutoReplenishmentEnabled);

        if (this.toggles?.IsAutoReplenishmentEnabled) {
            this.billingContent.redirectToPaymentOnEdit = true;
        }
    }

    private async setVehiclesOrder() {
        const tags = this.vehicles;

        this.vehiclesOrder = await this.helper.getVehiclesCart(tags,
            {
                deleteModalCms: this.deleteModalCms,
                editModalCms: (this.toggles.IsFlexPay && this.toggles.EzTagOption) ?
                    null : this.editModalCms,
                ezTagsContext: this.pageCms.ezTagsContextDesc,
                pageCms: this.pageCms
            }, this.stateList,
            (this.toggles.IsFlexPay && this.toggles.EzTagOption));


    }



    private checkAllVehiclesHasNoTags() {
        const countNoTags = this.vehicles.filter(v => v.tagId === TagType.NoTag).length;
        if (countNoTags === this.vehicles.length) {
            return true;
        } else {
            return false;
        }
    }

    private setDeliveryMethod() {
        const allVehiclesHasNoTags = this.checkAllVehiclesHasNoTags();

        this.setDeliveryMethodType(allVehiclesHasNoTags);
        this.setDeliveryMethodSummary(allVehiclesHasNoTags);
    }

    private setDeliveryMethodType(allVehiclesHasNoTags: boolean) {
        const noAddressPresent = !this.deliveryInfo?.addressInfo?.address1;

        if (this.deliveryMethod === DeliveryMethodType.Store || (allVehiclesHasNoTags && noAddressPresent) || noAddressPresent || this.storefrontService?.isEnabled) {
            this.deliveryMethod = DeliveryMethodType.Store;
        }
        else {
            this.deliveryMethod = DeliveryMethodType.Mail;
        }
    }

    private setDeliveryMethodSummary(allVehiclesHasNoTags: boolean) {
        const isKiosk = this.storefrontService?.isEnabled;
        const isFlexPay = this.toggles.IsFlexPay;
        const isMultipleDeliveryMethodAllowed = this.environmentConfig.tagDeliveryConfig.AllowPickup && this.environmentConfig.tagDeliveryConfig.AllowDeliveryByMail;

        this.deliveryMethodSummary = allVehiclesHasNoTags ? null : {
            display: true,
            header: this.pageCms.DeliveryMethodTitle,
            type: this.deliveryMethod,
            operations: [
                {
                    label: this.pageCms.deliveryMethodEdit,
                    display: isKiosk ? false : isFlexPay || isMultipleDeliveryMethodAllowed,
                    action: Action.Edit,
                    source: 'delivery-method'
                }
            ],
            deliveryMethodRebillText: this.rebillStatus ? null : this.pageCms.deliveryMethodTextForOptOutRep
        } as IDeliveryMethod;
    }

    private async setPaymentSummary() {
        this.checkoutPayment = await this.checkoutFacade.checkoutPayment();

        if (this.billingContent?.billingInfo?.billingType === BillingType.Cash) {
            this.pendingCashPaymentAmt = this.checkoutPayment.totalAmt;
            this.checkoutPayment.totalAmt = 0;
            this.checkoutPayment.rebillAmt = 0;
        }

        this.paymentSummary = await this.helper.getPaymentSummary(
            { ...this.checkoutPayment }
        );

        let hasMotorcycle = false;
        this.vehicles.forEach(v => {
            if (v.motorcycle) {
                hasMotorcycle = true;
                return;
            }
        });

        const rebillOptIn = this.currentUserService.getCurrentUser().rebillOptIn;
        const motorcycleText = (this.billingInfo.autoReplenishmentStatus || !this.toggles.IsFlexPay || rebillOptIn)
            ? this.pageCms.motorcycleTextForOptInRep :
            this.pageCms.motorcycleTextForOptOutRep;

        this.paymentSummary.tagInfo.motorcycleText = hasMotorcycle ? motorcycleText : null;
    }

    async onClickOperation(event: IEvent) {
        switch (event.action) {
            case Action.Edit:
                switch (event.source.toUpperCase()) {
                    case 'DELIVERY-METHOD':
                        await this.stateService.go(States.DeliveryMethod);
                        break;

                    case 'ORDER-SUMMARY':
                        if (event.data !== undefined) {
                            await this.editVehicles(event.data);
                            await this.setPaymentSummary();
                        }
                        break;

                    default:
                        break;
                }
                break;

            case Action.Remove:
                switch (event.source.toUpperCase()) {
                    case 'ORDER-SUMMARY':
                        const res = await this.vehiclesOperationHelper.remove(event.data.index, this.vehicles);
                        if (res) {
                            await this.setPaymentSummary();
                        }
                        break;

                    default:
                        break;
                }
                break;
        }

    }

    private async editVehicles(data) {
        if (this.toggles.IsFlexPay && this.toggles.EzTagOption) {
            this.stateService.go(States.VehicleInfo);
        } else {
            await this.vehiclesOperationHelper.edit(data.vehicleEdited, data.index, this.vehicles, this.pageCms.vehicleExsts);
        }

    }
    async editBilling(result) {
        if (this.billingContent.redirectToPaymentOnEdit) {
            await this.stateService.go(States.PaymentInfo);
            return;
        }

        const billingInfo = result.billingInformation as BillingInfo;

        let address = {} as IMailingInfo;

        if (result.billingType === BillingType.Credit) {
            address = {
                ...billingInfo.credit as AddressInfo
            } as IMailingInfo;
            address.internationalAddress = address.country === AddressConstants.USA ? false : true;
        }

        let res = await this.paymentFacade.submitPayment({
            method: result.billingType as BillingType,
            payload: {
                billing: billingInfo,
                billingAddress: address
            }
        }, 'UPDATE');

        if (res) {
            res = await this.updatePaymentMethod(result);
        }

        if (res) {
            if (result.billingType === BillingType.Credit) {
                this.billingInfo.credit = result.billingInformation.credit;
                this.billingInfo.billingType = BillingType.Credit;
            }
            if (result.billingType === BillingType.Eft) {
                this.billingInfo.eft = result.billingInformation.eft;
                //Temp fix. Need to refctor the interface for BillingInfo or need to change BillingComponent code. Eft does not need AddressInfo.
                this.setNoAddressForEft();
                this.billingInfo.billingType = BillingType.Eft;
            }
        }
    }

    private async updatePaymentMethod(result) {
        if (result.billingType !== this.billingInfo.billingType) {
            const request = {
                eFTPaymentMethod: {},
                creditCardPaymentMethod: {}
            } as IRemovePaymentMethodRequest;

            if (this.billingInfo.billingType === BillingType.Credit) {
                request.creditCardPaymentMethod = this.billingInfo.credit;
                request.creditCardPaymentMethod.accountBillingMethodId = this.billingInfo.credit.accountBillingMethodId;
                request.isCreditCard = true;
            }

            if (this.billingInfo.billingType === BillingType.Eft) {
                request.eFTPaymentMethod = this.billingInfo.eft;
                request.eFTPaymentMethod.accountBillingMethodId = this.billingInfo.eft.accountBillingMethodId;
                request.isCreditCard = false;
            }

            return await this.paymentApiService.removeBillingMethod(request);
        }

        return result;
    }

    private setNoAddressForEft() {
        this.billingInfo.eft.address1 = null;
        this.billingInfo.eft.address2 = null;
        this.billingInfo.eft.address3 = null;
        this.billingInfo.eft.address4 = null;
    }

    async next(event) {

        await this.manager.campaign({ pageEvent: IPageEvent.Submit, pageName: this.pageName });

        // Refactor note: Try to move rebill logic from Payment Step to Review Step
        const case1 = this.toggles?.IsAutoReplenishmentEnabled && this.billingInfo.autoReplenishmentStatus;
        const case2 = !this.toggles?.IsAutoReplenishmentEnabled && this.toggles?.IsFlexPay;
        if (case1 || case2) {
            await this.rebillService.updateRebillAmount({ rebillAmount: this.checkoutPayment.totalAmt, minimumBalance: 0 });
        }


        const res = await this.makePayment();
        if (res) {
            await this.stateService.go(States.Receipt, { totalAmt: this.checkoutPayment.totalAmt });
        }
    }

    async cancel(state: StateDeclaration, wizardUi: WizardComponent) {
        return await this.parent.cancel(this.cancellationModal, wizardUi);
    }

    async previous(state: StateDeclaration) {
        await this.stateService.go(this.navigationLinks.prev.name);
    }

    private async makePayment() {

        const data = {
            deliveryMethod: this.deliveryMethod,
            checkoutPayment: this.checkoutPayment

        };

        if (this.billingContent.billingInfo.billingType === BillingType.Cash) {
            data.checkoutPayment.isCashPayment = true;
        }
        else {
            if (this.billingContent.billingInfo.savePaymentStatus === false) {

                data.checkoutPayment.credit = this.billingContent.billingInfo.credit;
                data.checkoutPayment.credit.creditCardNumber = this.billingContent.billingInfo.credit.cardNbr;
                data.checkoutPayment.credit.type = this.billingContent.billingInfo.credit.cardCode;
                data.checkoutPayment.eft = this.billingContent.billingInfo.eft;
                data.checkoutPayment.selectedBillingType = this.billingContent.billingInfo.billingType;
                data.checkoutPayment.isOnetimePayment = true;
            }

        }

        return await this.checkoutFacade.makePayment(data, this.storefrontService?.isEnabled);
    }

    async ValidateRoutingNumber() {
        if (this.billingInfo.billingType === BillingType.Eft) {
            const eftRequest: BaseBankAccountRequest = {
                AccountType: this.billingInfo.eft.accountType,
                RoutingNumber: this.billingInfo.eft.routingNumber,
                AccountNumber: this.billingInfo.eft.accountNumber
            };

            const response = await this.genericRepo.dataFactory.eftValidateRouting(eftRequest);

            if (Array.isArray(response.alerts) && response.alerts.length !== 0) {
                this.responseErrorService.displayAlertsFromResponse(response, false);
            }
        }
    }

    async GetPaymentDetails() {
        const paymentMethods = await this.genericRepo.dataFactory.getAllPaymentMethods();

        if (paymentMethods) {
            if (paymentMethods.creditCards.length >= 1 || paymentMethods.bankAccounts.length >= 1) {
                this.billingInfo.savePaymentStatus = true;
            }
            else {
                this.billingInfo.savePaymentStatus = false;
            }
        }
    }
}
