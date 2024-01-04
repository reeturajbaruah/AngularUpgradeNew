import { Injectable } from '@angular/core';
import { ICheckoutPaymentRes } from 'account/create/models/checkout-payment.models';
import { SiteCoreItem } from 'cms/cms.module';
import { CmsReplacementService } from 'cms/services';
import { AddressInfo, BankAccountType, BankDetails, BillingInfo, BillingType, Country, State, TagType } from 'common/models';
import { IReviewOrderCms } from 'shared/models/review-order.model';
import { IBillingContent } from 'shared/payment/billing/models/models';
import { IPaymentSummary } from 'shared/payment/summary/models';
import { IEZTag } from 'shared/vehicle-info';
import { IOrder } from 'shared/vehicle-info/order-summary/models';


@Injectable()
export class ReviewHelper {

    cms = {} as {
        pageCms: IReviewOrderCms;
        replenishmentAmtModalCms: SiteCoreItem;
        tagInfoModalCms: SiteCoreItem;
    };

    constructor(private cmsReplacementService: CmsReplacementService) {

    }

    getPaymentSummary = async (checkoutPayment: ICheckoutPaymentRes) => {

        const insertValues = {
            minReqAmt: checkoutPayment.depositAmt,
            totalAmt: checkoutPayment.totalAmt
        };
        this.cms.pageCms.RebillToolTip = this.cmsReplacementService.transformTemplate(this.cms.pageCms.RebillToolTip, insertValues);

        return await this.mapPaymentSummary(checkoutPayment);

    };

    private mapPaymentSummary = async (checkoutPayment: ICheckoutPaymentRes) =>

        await {
            header: this.cms.pageCms.PaymentSummaryTitle,
            paymentContext: this.cms.pageCms.PaymentContext,
            replenishmentAmt: {
                link: {
                    linkDesc: this.cms.pageCms.replenishmentAmtLinkDesc,
                    onClickContent: this.cms.replenishmentAmtModalCms
                }
            },
            tagInfo: {
                display: true,
                contextDesc: this.cms.pageCms.TagInfo,
                link: {
                    linkDesc: this.cms.pageCms.TagInfoModalLink,
                    onClickContent: this.cms.tagInfoModalCms
                }
            },
            paymentDueInfo: {
                tagSalesAmt: checkoutPayment.tagSalesAmt,
                totalAmt: checkoutPayment.totalAmt,
                rebillTooltip: this.cms.pageCms.RebillToolTip,
                displayReplinishmentAmtSection: false,
                totalAmtLabel: this.cms.pageCms.totalAmtLabel
            }
        } as IPaymentSummary;



    getBillingInfo = async (billing, billingInfo: BillingInfo,
        stateList: State[], countryList: Country[], isAutoReplenishmentEnabled: boolean) => {

        if (isAutoReplenishmentEnabled) {
            billingInfo.autoReplenishmentStatus = billing?.autoReplenishmentStatus;
            billingInfo.savePaymentStatus = billing?.savePaymentStatus;
            this.mapBillingInfo(billingInfo, billing, billing.savePaymentStatus);
        }
        else {
            if (billing) {
                this.mapBillingInfo(billingInfo, billing, true);

            }
        }

        const data = {
            header: this.cms.pageCms.billingInfoHeader,
            billingInfo,
            links: [
                {
                    name: this.cms.pageCms.billingInfoEditLink,
                    visible: true
                }
            ],
            states: stateList,
            countries: countryList
        } as IBillingContent;

        return data;
    };

    private mapBillingInfo(billingInfo: BillingInfo, billing, savePaymentStatus: boolean) {
        const billingType = billing.billingTypeDisplay;

        switch (billingType) {
            case BillingType.Credit:
                this.mapCreditCard(billingInfo, billing, savePaymentStatus);
                break;

            case BillingType.Eft:
                this.mapEft(billingInfo, billing, savePaymentStatus);
                break;

            default:
                this.setCash(billingInfo);
                break;
        }

    }
    private mapCreditCard(billingInfo: BillingInfo, billing, savePaymentStatus: boolean) {

        billingInfo.billingType = BillingType.Credit;

        if (savePaymentStatus && billing?.cards?.length > 0) {
            const card = billing.cards[0];
            billingInfo.credit = card;
            billingInfo.credit.expYear = card.selectedYear;
            billingInfo.credit.international = card.internationalAddress;
        } else {
            billingInfo.credit = billing.credit;
        }

    }

    private mapEft(billingInfo: BillingInfo, billing, savePaymentStatus: boolean) {

        billingInfo.billingType = BillingType.Eft;
        const eft: BankDetails & AddressInfo = billing.eft;
        billingInfo.eft = eft;
        billingInfo.eft.accountType = eft.accountTypeDisplay === 'Personal' ?
            BankAccountType.Personal : BankAccountType.Business;

        if (savePaymentStatus) {
            billingInfo.eft.account2 = billingInfo.eft.accountNumber;
            billingInfo.eft.nameOnBankAccount = eft.nameOnBankAccount;

        }

    }

    private setCash(billingInfo: BillingInfo) {
        billingInfo.billingType = BillingType.Cash;
        billingInfo.autoReplenishmentStatus = false;
        billingInfo.savePaymentStatus = false;
    }

    getVehiclesCart = async (tags: IEZTag[],
        cms: {
            editModalCms: SiteCoreItem;
            deleteModalCms: SiteCoreItem;
            ezTagsContext: string;
            pageCms: IReviewOrderCms;
        },
        stateList: State[],
        isFlexPay: boolean) => {

        if (tags.length > 0) {

            this.checkVehiclesTags(tags, cms.pageCms, isFlexPay);

            return await {
                display: true,
                summary: {
                    title: cms.pageCms.ezTagsSummaryTitle,
                    description: cms.ezTagsContext
                },
                details: [
                    {
                        title: cms.pageCms.ezTagsDetailsTitle,
                        tags,
                        isPlate: false
                    }
                ],
                operations: {
                    isEditable: true,
                    isRemoveable: tags.length > 1 ? true : false,
                    editContent: cms.editModalCms,
                    removeContent: cms.deleteModalCms
                },
                stateList
            } as IOrder;
        }

    };


    private checkVehiclesTags(vehicles: IEZTag[], pageCms: IReviewOrderCms, isFlexPay: boolean) {

        if (isFlexPay) {

            vehicles.forEach(v => {
                if (v.tagId === TagType.NoTag) {
                    v.tagInfo = { hasTag: false, desc: pageCms.ezTagNotOrdered };
                }
                else {
                    v.tagInfo = { hasTag: false, desc: pageCms.ezTagOrdered };
                }
            });
        }
    }
}
