import { Component, Inject, Input, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { collapseTrigger } from 'animations/collapse';
import { CreditCardTypeService } from 'common/billing';
import { BillingInfoUtilitiesService } from 'common/billing/billingInfoUtilities.service';
import { CountryConversionService } from 'common/conversions';
import { StateConfig } from 'common/interfaces';
import {
    AddressInfo, BankDetails, BillingInfo, BillingType, Country, CreditCardDetails, State
} from 'common/models';
import { DialogContent, DialogService, GenericRepoService, ResponseErrorService } from 'common/services';
import { NewBillingAddressInjectionValues, NewBillingAddressModalComponent } from 'common/ui';
import {
    BillingModalComponent,
    InjectionValues as BillingInjectionValues
} from 'common/ui/modals/billingModal/billingModal.component';
import * as moment from 'moment';
import { FrameComponent } from '../frame/frame.component';
import { BillingMethod, PaymentPlanData, PlateDataService } from '../services';


interface PaymentMethodResponse {
    creditCards: (CreditCardDetails & AddressInfo)[];
    bankAccounts: BankDetails[];
    address: AddressInfo;
}

export interface CmsContent {
    Title: string;
    amountSelectionNoteTemplate: string;
    ShortDescription: string;

    selectPaymentMethod: string;
    selectPaymentAmount: string;

    ezTagAmountSelectionHeader: string;
    appliedEzTagPaymentNote: string;
    ezTagPaymentHeader: string;
}

export enum PaymentOptions {
    BalanceAmount = 'balanceAmount',
    NextInstallmentAmount = 'nextInstallmentAmount',
    OtherPaymentAmount = 'otherPaymentAmount'
}

type BillingStruct = {
    data: BillingMethod;
    label: string;
    stored?: boolean;
    attached?: boolean;
};

@Component({
    selector: 'select-payment',
    templateUrl: './selectPayment.html',
    styleUrls: ['./selectPayment.less'],
    animations: [collapseTrigger]
})
export class SelectPaymentComponent implements OnInit {

    //@host decorator was removed for parent due to issue with Ivy. see https://github.com/angular/angular/issues/31539
    constructor(
        private parent: FrameComponent,
        private dataService: PlateDataService,
        private state: StateService,
        private dialogService: DialogService,
        private countryConversionService: CountryConversionService,
        private billingInfoUtilitiesService: BillingInfoUtilitiesService,
        private creditCardTypeService: CreditCardTypeService,
        private genericRepoService: GenericRepoService,
        private responseErrorService: ResponseErrorService
    ) { }

    public readonly PaymentOptions = PaymentOptions;

    public get planData(): PaymentPlanData {
        return this.parent.planData;
    }

    //binding
    @Input() isEzTagFlow: boolean;
    @Input() states: State[];
    @Input() countries: Country[];
    @Input() cmsContent: CmsContent;

    public BillingType = BillingType;

    public selectedPaymentAmount: PaymentOptions;
    public selectedPaymentMethod: BillingStruct;
    public readonly maxPaymentAmount: number = 10000;

    public otherPaymentAmount: number;
    public nextUpcomingInstallmentDateFormatted: string = null;
    public addEzTagPayment = false;
    public ezTagPaymentAmount = 0;
    public paymentInfo: BillingStruct[] = [];
    public cms: CmsContent;
    public get host() {
        return this;
    }

    public updateOtherAmount(option) {
        if (option === PaymentOptions.BalanceAmount) {
            this.otherPaymentAmount = this.planData.selectedPaymentPlan.balanceAmount;
        }
        else if (option === PaymentOptions.NextInstallmentAmount) {
            this.otherPaymentAmount = this.planData.selectedPaymentPlan.nextInstallmentAmount;
        }
    }

    public get minPaymentAmount(): number | undefined {
        if (this.selectedPaymentAmount !== PaymentOptions.OtherPaymentAmount) {
            return;
        }
        if (this.planData && this.planData.selectedPaymentPlan) {
            const lessThanOneDollarPaymentAllowed =
                this.planData.selectedPaymentPlan.balanceAmount < 1 ||
                this.planData.selectedPaymentPlan.nextInstallmentAmount < 1;

            return lessThanOneDollarPaymentAllowed ? 0.01 : 1.0;
        }
        return 1.0;
    }

    public updateDisplayText(element): void {
        let factorNum = null;
        if (element.target.value.match(/^\d+(,\d{3})*(\.\d{0,2})?$/)) {
            factorNum = element.target.value.replace(/[,]/g, '');
            this.otherPaymentAmount = factorNum;
        }
        else {
            this.otherPaymentAmount = 0;
            element.target.value = 0;
        }
    }

    public updateAmount(isOtherAmountSelected?: boolean): void {
        this.otherPaymentAmount = this.planData.selectedPaymentPlan.balanceAmount;
        if (isOtherAmountSelected) {
            (document.getElementById('otherAmountTxt') as HTMLInputElement).select();
        }
    }

    public get paymentAmount() {

        let amount = null;
        if (this.selectedPaymentAmount === this.PaymentOptions.BalanceAmount
            || this.selectedPaymentAmount === this.PaymentOptions.NextInstallmentAmount) {

            amount = this.planData.selectedPaymentPlan[this.selectedPaymentAmount];

        } else if (this.selectedPaymentAmount === this.PaymentOptions.OtherPaymentAmount) {

            amount = this.otherPaymentAmount;
        }
        return amount;
    }

    isWizardDisabled(formInvalid: boolean): boolean {
        return this.selectedPaymentMethod === undefined || this.selectedPaymentMethod === null || formInvalid;
    }

    async ngOnInit() {
        this.parent.stepNum = 2;
        this.parent.scrollToTop();

        this.cms = Object.assign({}, this.cmsContent, {
            amountSelectionNoteTemplate: this.cmsContent.ShortDescription
        });

        await this.processingPaymentInfo();

        if (this.planData.selectedPaymentPlan.nextUpcomingInstallmentDate) {
            this.nextUpcomingInstallmentDateFormatted =
                moment(this.planData.selectedPaymentPlan.nextUpcomingInstallmentDate).format('MMM Do, YYYY');
        }

        if (this.planData.paymentAmount) {
            if (this.planData.paymentAmount === this.planData.selectedPaymentPlan.balanceAmount) {
                this.selectedPaymentAmount = this.PaymentOptions.BalanceAmount;
            } else if (this.planData.paymentAmount === this.planData.selectedPaymentPlan.nextInstallmentAmount) {
                this.selectedPaymentAmount = this.PaymentOptions.NextInstallmentAmount;
            } else {
                this.selectedPaymentAmount = this.PaymentOptions.OtherPaymentAmount;
            }
            this.otherPaymentAmount = this.planData.paymentAmount;
        } else {
            this.selectedPaymentAmount = this.PaymentOptions.NextInstallmentAmount;
            this.otherPaymentAmount = this.planData.selectedPaymentPlan.nextInstallmentAmount;
        }
    }

    public async promptNewPaymentMethod() {
        const currentMailingAddress = await this.getCurrentMailingAddress();
        const billingInformation: BillingInfo = {
            eft: {
                accountType: null,
                accountTypeDisplay: null,
                name: null,
                routingNumber: null,
                accountNumber: null,
                account2: null,
                primary: null,
                accountBillingMethodId: null,
                nameOnBankAccount: null,
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
                paypageRegistrationId: null,
                omniToken: null,
                primary: null,
                isNewCard: null,
                address1: null,
                city: null,
                state: null,
                zip: null,
                plus4: null,
                country: 'USA',
                displayCountry: 'USA',
                international: false
            }
        };

        const data: BillingInjectionValues = {
            stateList: this.states,
            countryList: this.countries,
            billingType: null,
            billingInformation
        };
        const dialogContent: DialogContent = {
            title: 'Add a New Payment Method'
        };

        return this.dialogService.openSliderCentered(BillingModalComponent, data, dialogContent)
            .then((result: BillingInjectionValues) => {
                if (result) {

                    const billingType = result.billingType as BillingType;
                    const address =
                        (billingType === BillingType.Credit)
                            ? result.billingInformation.credit as AddressInfo || currentMailingAddress
                            : result.billingInformation.eft as AddressInfo || currentMailingAddress;

                    const newPaymentMethod = {
                        data: {
                            billingType,
                            creditCardPaymentMethod: result.billingInformation.credit,
                            eftPaymentMethod: result.billingInformation.eft,
                            address
                        } as BillingMethod,
                        label: this.getLabel(result),
                        stored: false,
                        attached: false
                    };

                    this.paymentInfo.push(newPaymentMethod);
                    this.selectedPaymentMethod = newPaymentMethod;
                    if (!this.selectedPaymentAmount) {
                        this.selectedPaymentAmount = this.PaymentOptions.NextInstallmentAmount;
                    }
                }
                else {
                    this.selectedPaymentMethod = null;
                }
            });
    }

    public async nextStep(nextState: StateConfig) {

        const isEft = this.selectedPaymentMethod.data.billingType === BillingType.Eft;
        const isStored = this.selectedPaymentMethod.stored;

        if (isEft && isStored) {

            const eft = this.selectedPaymentMethod.data.eftPaymentMethod;
            const cachedAddress = this.parent.getCachedEftMailingInfo(eft.accountBillingMethodId);

            const eftData = {
                stateList: this.states,
                countryList: this.countries,
                isShowPersonalInfo: true,
                addressTitle: 'EFT Billing Address',
                mailingInfo: cachedAddress ? { ...cachedAddress } : {}
                
            } as NewBillingAddressInjectionValues;

            const result = await this.dialogService.openSliderCentered(NewBillingAddressModalComponent, eftData, { title: 'EFT Billing Information' });
            if (!result) {
                return;
            }

            this.parent.setCachedEftMailingInfo(eft.accountBillingMethodId, result.mailingInfo);
            const { firstName, lastName } = result.mailingInfo;
            this.selectedPaymentMethod.data.eftPaymentMethod.nameOnBankAccount = `${firstName} ${lastName}`;
            this.selectedPaymentMethod.data.address = result.mailingInfo;
        }

        this.planData.billingMethod = this.selectedPaymentMethod.data;
        this.planData.paymentAmount = this.paymentAmount;

        this.dataService.setBillingMethod(this.planData.billingMethod, this.planData.paymentAmount, this.isEzTagFlow);

        //stuff below are no longer needed(for now)
        this.planData.addAccountFunds = this.addEzTagPayment;
        this.planData.addAccountFundsAmount =
            this.addEzTagPayment ? this.ezTagPaymentAmount : 0;

        await this.state.go(nextState);
    }

    public get hasOverage(): boolean {
        if (this.selectedPaymentAmount === this.PaymentOptions.OtherPaymentAmount) {
            return this.otherPaymentAmount > this.planData.selectedPaymentPlan.nextInstallmentAmount;
        } else {
            return false;
        }
    }

    public get showNoteForOtherAmmount(): boolean {
        return this.planData.selectedPaymentPlan.balanceAmount > this.planData.selectedPaymentPlan.nextInstallmentAmount;
    }

    private async processingPaymentInfo(): Promise<void> {
        this.paymentInfo = [];

        //Add stored payments
        if (this.isEzTagFlow) {
            const results = await this.genericRepoService.dataFactory.getAllPaymentMethods();

            if (this.responseErrorService.isErrorFree(results)) {
                this.paymentInfo = [
                    ...(results.creditCards || []).map(cc => ({
                        billingType: BillingType.Credit,
                        creditCardPaymentMethod: cc,
                        autoPay: false,
                        eftPaymentMethod: null,
                        address: results.address || (cc as AddressInfo),
                        isInternational: ((results.address || (cc as AddressInfo)) || {} as AddressInfo).country !== 'USA'
                    } as BillingMethod))
                        .filter(card => (!card.creditCardPaymentMethod.isBlocked)),
                    ...(results.bankAccounts || []).map(eft => ({
                        billingType: BillingType.Eft,
                        eftPaymentMethod: eft,
                        autoPay: false,
                        address: results.address,
                        isInternational: (results.address || {} as AddressInfo).country !== 'USA'
                    } as BillingMethod))
                ].map(payment => ({
                    data: payment, label: this.getLabel(payment), stored: true, attached: false
                }));
            }
        }

        //add billing method attached to the payment plan
        if (this.planData.selectedPaymentPlan.billingMethod
            && this.planData.selectedPaymentPlan.billingMethod.billingType) {
            const paymentMethod = {
                data: this.planData.selectedPaymentPlan.billingMethod,
                label: this.getLabel(this.planData.selectedPaymentPlan.billingMethod),
                stored: true,
                attached: true
            };

            this.paymentInfo.push(paymentMethod);
        }
        

        //match selected payment into stored list or
        //add to payment options
        if (this.planData.billingMethod && this.planData.billingMethod.billingType) {

            const billingMethodId = this.planData.billingMethod.billingType === BillingType.Credit
                ? this.planData.billingMethod.creditCardPaymentMethod.accountBillingMethodId
                : this.planData.billingMethod.eftPaymentMethod.accountBillingMethodId;

            let selection: BillingStruct;

            if (billingMethodId) {
                //a stored billing method was already chosen,
                //find in list and set it as selected
                const selector = this.planData.billingMethod.billingType === BillingType.Credit
                    ? (x: BillingStruct) => x.data.creditCardPaymentMethod.accountBillingMethodId === billingMethodId
                    : (x: BillingStruct) => x.data.eftPaymentMethod.accountBillingMethodId === billingMethodId;

                selection = this.paymentInfo
                    .filter(x => x.stored && x.data.billingType === this.planData.billingMethod.billingType)
                    .find(selector);
            }
                        
            if (selection) {
                this.selectedPaymentMethod = selection;
            } else {
                this.selectedPaymentMethod = {
                    attached: false,
                    label: this.getLabel(this.planData.billingMethod),
                    stored: false,
                    data: this.planData.billingMethod
                };
                this.paymentInfo.push(this.selectedPaymentMethod);
            }
            
        } else {
            //use the attached method
            this.selectedPaymentMethod = this.paymentInfo.find(x => x.attached);
        }

    }

    private async getCurrentMailingAddress(): Promise<AddressInfo> {
        const response = await this.genericRepoService.dataFactory.getPersonalInfo();

        if (response.errors.length > 0 || !this.isEzTagFlow) {
            return null;
        }

        const { mailingAddress } = response;
        const { countryList } = mailingAddress;
        let { country } = mailingAddress;

        if (country && !this.countryConversionService.isValidCountryCode(countryList, country)) {
            country = this.countryConversionService.countryNameToCode(countryList, country);
        }

        return {
            ...mailingAddress,
            country,
            international: this.billingInfoUtilitiesService.isInternationalAddress(mailingAddress)
        };
    }

    public getLabel = (data): string => {
        if (data === null) {
            return null;
        }

        if (data.billingType === BillingType.Credit) {
            let card;
            if (data.billingInformation) {
                card = data.billingInformation.credit;
            }
            else {
                card = data.creditCardPaymentMethod;
            }
            return `${this.creditCardTypeService.cardCodeToName(card.cardCode)} **** ${card.cardNbr.replace(/[*-]/g, '')}`;

        } else if (data.billingType === BillingType.Eft) {

            let eft;
            if (data.billingInformation) {
                eft = data.billingInformation.eft;
            }
            else {
                eft = data.eftPaymentMethod;
            }
            const accountType = eft.accountType ? eft.accountType : eft.accountTypeDisplay;
            return `${accountType} **** ${eft.accountNumber.slice(-4)}`;

        } else {
            return null;
        }
    };
}
