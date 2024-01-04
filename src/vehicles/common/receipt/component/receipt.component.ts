import { Component, Input, OnInit } from '@angular/core';
import { BillingInfo, BillingType, DeliveryMethodType, IMailingInfo } from 'common/models';
import { AccountService, CurrentUserService } from 'common/services';
import { IAccountInfo, IDeliveryMethod, IPaymentInfo, IReceipt, ISummary, ITagsOrdered } from '../models/model';

@Component({
    selector: 'receipt',
    templateUrl: './receipt.component.html',
    styleUrls: ['./receipt.component.less']
})
export class ReceiptComponent implements OnInit {

    @Input() data: IReceipt;
    summary: ISummary;
    deliveryMethodInfo: IDeliveryMethod;
    paymentInfo: IPaymentInfo;
    accountInfo: IAccountInfo;
    mailingAddress: IMailingInfo;
    actNumber: number;
    actName: string;
    isByMail: boolean;
    billingInfo: BillingInfo;
    tagsOrdered: ITagsOrdered;
    BillingType = BillingType;
    loadPage = false;

    constructor(private accountService: AccountService,
        private currentUserService: CurrentUserService
    ) { }

    async ngOnInit() {

        this.summary = this.data.summary;
        this.paymentInfo = this.data.paymentInfo;
        this.tagsOrdered = this.data.tagsOrdered;

        this.setActInfo();
        await this.setMailingInfo();
        this.billingInfo = await this.getBillingInfo();

        this.loadPage = true;
    }

    private async setMailingInfo() {

        if (this.data.deliveryMethodInfo.type === DeliveryMethodType.Mail) {
            this.isByMail = true;
            this.mailingAddress = await this.accountService.getMailingInfo();
        } else {
            this.isByMail = false;
        }
    }

    private setActInfo() {
        this.accountInfo = this.data.accountInfo;
        const currentUser = this.currentUserService.getCurrentUser();
        this.actNumber = currentUser.acctId;
        this.actName = currentUser.firstName + ' ' + currentUser.lastName;
    }


    private async getBillingInfo(): Promise<BillingInfo> {
        const res = await this.accountService.getAllPaymentMethods();

        if (res) {
            if (res.bankAccounts) {
                const payment = res.bankAccounts.filter(bank => bank.primary);

                if (payment.length > 0) {
                    return {
                        billingType: BillingType.Eft,
                        eft: payment[0],
                        credit: null
                    } as BillingInfo;
                }
            }
            if (res.creditCards) {
                const payment = res.creditCards.filter(card => card.primary);

                if (payment.length > 0) {
                    return {
                        billingType: BillingType.Credit,
                        eft: null,
                        credit: payment[0]
                    } as BillingInfo;
                }
            }
        }
    }

}
