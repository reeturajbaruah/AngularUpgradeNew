import {
    Component, Inject, Input, OnInit, ViewChild
} from '@angular/core';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { StateConfig } from 'common/interfaces';
import { BankAccountType, BillingInfo, BillingType } from 'common/models';
import { CreditCardEntryComponent, GenericCmsModalComponent, GenericCmsModalInjectionValues, IAddressCheckBoxFlag, INewAddressFlag } from 'common/ui';
import { DialogService, GenericRepoService, ResponseErrorService } from 'common/services';
import { FrameComponent } from '../frame/frame.component';
import { IMailingInfo } from '../interfaces';

interface CavveBillingCmsData {
    ItemName: string;
    Title: string;
    LongDescription: string;
    ShortDescription: string;
    paymentMethodHeader: string;
    billingAddressHeader: string;
    newBillingSliderHeader: string;
}
interface CancelMessageCmsData {    
    cancelQuestion: string;
    cancelReject: string;
    cancelResolve: string;
}
@Component({
    selector: 'cavve-billing-component',
    templateUrl: './billing.html',
    styleUrls: ['./billing.less']
})
export class BillingComponent implements OnInit {
    constructor(
        private parent: FrameComponent,
        private state: StateService,
        private genericRepoService: GenericRepoService,
        private responseErrorService: ResponseErrorService,
        private uiRouterGlobals: UIRouterGlobals,
        private dialogService: DialogService
    ) { }
    @Input() public cmsContent: CavveBillingCmsData;
    @Input() public cancelMessageContent: CancelMessageCmsData;
    @ViewChild(CreditCardEntryComponent, { static: false }) creditEntry: CreditCardEntryComponent;

    public statesList: { stateCode: string }[];
    public countriesList: { countryCode: string; displayName: string }[];

    public checkBoxFlag: IAddressCheckBoxFlag;
    public newAddressFlag: INewAddressFlag;
    public BillingType = BillingType;

    public billingInfo: BillingInfo = {
        eft: {
            accountType: null,
            name: null,
            routingNumber: null,
            accountNumber: null,
            address1: null,
            city: null,
            state: null,
            zip: null,
            plus4: null,
            country: 'USA',
            displayCountry: 'USA',
            international: false
        },
        credit: {
            cardCode: null,
            cardNbr: null,
            expMonth: null,
            expYear: null,
            nameOnCard: null,
            address1: null,
            city: null,
            state: null,
            zip: null,
            plus4: null,
            country: 'USA',
            displayCountry: 'USA',
            international: false
        },
        billingType: null
    };
    public defaultAddress: IMailingInfo;
    public newAddress: IMailingInfo;
    public billingAddress: IMailingInfo;

    ngOnInit() {
        this.checkBoxFlag = IAddressCheckBoxFlag.Default;
        this.newAddressFlag = INewAddressFlag.Empty;

        this.parent.stepNum = 2;
        this.parent.setFrameTitle(this.cmsContent.Title);

        this.statesList = this.parent.usStates;
        this.countriesList = this.parent.countries;
        this.setDefaultAddress();
    }

    private async setDefaultAddress() {
        const res = await this.genericRepoService.dataFactory.GetMailingAddressCreateAccountViolation();
        if (this.responseErrorService.isErrorFree(res)) {
            this.defaultAddress = {
                firstName: null,
                lastName: null,
                internationalAddress: null,
                address1: res.address1,
                address2: res.address2,
                city: res.city,
                state: res.state,
                zip: res.zip,
                plus4: res.plus4,
                country: res.country
            };

            this.setBillingInfoFromStateParams();
        }
    }

    private setBillingInfoFromStateParams() {
        if (this.uiRouterGlobals.params.billingInfo) {
            const billingInfo = this.uiRouterGlobals.params.billingInfo;

            if (billingInfo.billingType === BillingType.Credit) {
                this.billingInfo.credit = billingInfo.credit;
                this.billingInfo.billingType = BillingType.Credit;
            } else {
                this.billingInfo.eft = { ...billingInfo.eft };
                this.billingInfo.eft.account2 = this.billingInfo.eft.accountNumber;
                this.billingInfo.billingType = BillingType.Eft;
            }

            //If defaulted and addresses are different
            const isSameAddress = this.compareAddress(
                billingInfo.billingType === BillingType.Credit
                    ? this.billingInfo.credit : this.billingInfo.eft);

            if (!isSameAddress && (billingInfo.credit || billingInfo.eft)) {
                this.newAddressFlag = INewAddressFlag.Updated;
                this.checkBoxFlag = IAddressCheckBoxFlag.New;
                this.newAddress = billingInfo.billingType === BillingType.Credit
                    ? { ...billingInfo.credit } : { ...billingInfo.eft };
                this.newAddress.internationalAddress = billingInfo.billingType === BillingType.Credit
                    ? billingInfo.credit.international : billingInfo.eft.international;
            }
        }
    }

    private compareAddress = (billingInfo: any) => {
        if (billingInfo) {
            const billingAddress = this.normalizeAddress(billingInfo);
            const mailingAddress = this.normalizeAddress(this.defaultAddress);

            return (mailingAddress.address1 === billingAddress.address1
                && mailingAddress.address2 === billingAddress.address2
                && mailingAddress.city === billingAddress.city
                && mailingAddress.country === billingAddress.country
                && mailingAddress.plus4 === billingAddress.plus4
                && mailingAddress.state === billingAddress.state
                && mailingAddress.zip === billingAddress.zip
            );
        }
        return false;
    };

    private normalizeAddress = ({ address1, address2, city, state, country, zip, plus4 }) => {
        const normalized = { address1, address2, city, state, country, zip, plus4 };

        Object.keys(normalized)
            .forEach(key => {

                if (normalized[key] === '') {
                    normalized[key] = null;
                }
            });

        return normalized;
    };

    public async submitBillingInfo(nextState: StateConfig) {
        this.billingAddress = (this.checkBoxFlag === IAddressCheckBoxFlag.Default) ?
            this.defaultAddress : this.newAddress;

        if (this.billingInfo.billingType === BillingType.Credit) {
            if (this.creditEntry) {
                const submitResponse = await this.creditEntry.submit();
                if (!submitResponse) {
                    return;
                }
            }
            const request = {
                creditCardPaymentMethod: Object.assign(this.billingInfo.credit, this.billingAddress),
                isCreditCard: true
            };
            const res = await this.genericRepoService.dataFactory.SetBillingInfoCreateAccountViolation(request);
            await this.processBillingInfoCall(res, nextState);
        } else if (this.billingInfo.billingType === BillingType.Eft) {

            const bankReq = {
                nameOnBankAccount: this.billingInfo.eft.name,

                //API expects this specific casing (first letter capitalized),
                //while the components on this page returned / expected all caps
                accountTypeDisplay:
                    this.billingInfo.eft.accountType === BankAccountType.Business
                        ? 'Business'
                        : 'Personal'
            };
            const request = {
                eFTPaymentMethod: Object.assign(this.billingInfo.eft, bankReq, this.billingAddress),
                isCreditCard: false
            };

            const res = await this.genericRepoService.dataFactory.SetBillingInfoCreateAccountViolation(request);
            await this.processBillingInfoCall(res, nextState);
        }
    }

    private async processBillingInfoCall(res, nextState: StateConfig) {
        if (this.responseErrorService.isErrorFree(res)) {
            this.responseErrorService.displayAlertsFromResponse(res, true);

            await (this.billingInfo.billingType === BillingType.Credit
                ? this.state.go(nextState)
                : this.state.go(nextState, {
                    //This should be clean up when ETC fix thier set violatorCall to include address, BUG 58048
                    eftAddress:
                    {
                        address1: this.billingInfo.eft.address1,
                        address2: this.billingInfo.eft.address2
                    }
                }));
        }
    }
    public async cancel(cancelState: StateConfig) {

        const data: GenericCmsModalInjectionValues = {
            cmsContent: {
                Title: this.cancelMessageContent.cancelQuestion,
                PrimaryContent: '',
                CancelBtn: this.cancelMessageContent.cancelResolve,
                AcceptBtn: this.cancelMessageContent.cancelReject
            }
        };
        const res = await this.dialogService.openGenericModal(GenericCmsModalComponent, data);
        if (!res) {
            this.state.go(cancelState);
        }
    }
}
