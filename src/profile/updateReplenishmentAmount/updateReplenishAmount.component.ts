import { Component, DoCheck, Inject, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { SiteCoreItem } from 'cms/cms.module';
import { BillingType } from 'common/models';
import { CurrentUser, CurrentUserService, DialogContent, DialogService, IsInvoicedService, ManageBillingService, ToasterService } from 'common/services';
import { GenericCmsModalComponent, GenericCmsModalInjectionValues, IReplenishmentInfoInjectionValues, ReplenishmentInfoModalComponent, WizardComponent, WizardStateResolverFactory } from 'common/ui';
import { childCmsIds, stateNames as profileStates } from 'profile/constants';
import { stateNames as accountDashboardStates } from 'accountDashboard/constants';
import {
    GetAccountInformationResponse, UpdateReplenishmentAmount,
    WebApisService as ProfileService
} from 'profile/services/webApis.service';
import { wait } from '../../common/utilities';
import { CurrencyPipe } from '@angular/common';
import { UserRoles } from 'constants/userRoles.constants';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { SessionService } from 'common/services/session/session.service';
import { StorefrontUtilityService } from '../../storefront/services/storefrontUtility.service';

export enum BillingTypeLong {
    BankAccount = 'bank account',
    CreditCard = 'credit card'
};

export interface CmsContent {
    minLowBalance: number;
    minimumBalanceMultiplier: number;
    minReqDeposit: number;
    Title: string;  ///Main title
    ShortDescription: string; //'Subtitle', under the main title, above Input box
    LongDescription: string; //Under Input box
    Children: SiteCoreItem[]; //For completion Modal & Replenishment Amount Error message for invoiced and pending closure accounts
}

interface Content {
    Title: string;  ///Main title
    ShortDescription: string; //'Subtitle', under the main title, above Input box
    LongDescription: string; //Under Input box
}

interface ShortDescriptionParams {
    accountMinBalance: number;
    currentReplenishmentAmount: number;
}

interface LongDescriptionParams {
    newAccountMinBalance: number;
    newReplenishmentAmount: number;
    billingTypeLong: BillingTypeLong;
}

@Component({
    selector: 'update-replenishment-amount',
    templateUrl: './updateReplenishAmount.html',
    styleUrls: ['./updateReplenishAmount.less']
})
export class UpdateReplenishmentAmountComponent implements OnInit, DoCheck {
    constructor(
        private state: StateService,
        private dialogService: DialogService,
        private uiRouterGlobals: UIRouterGlobals,
        private profileApiService: ProfileService,
        private storefrontUtilityService: StorefrontUtilityService,
        private toasterService: ToasterService,
        private currencyPipe: CurrencyPipe,
        private isInvoicedService: IsInvoicedService,
        private userRoles: UserRoles,
        private session: SessionService,
        private authService: AuthenticationService,
        private manageBillingService: ManageBillingService,
        private currentUserService: CurrentUserService,
    ) {
    }

    @Input() cmsContent: CmsContent;
    public accountData: GetAccountInformationResponse;
    public shortDescriptionParams: ShortDescriptionParams;
    public billingType: BillingType;
    public paymentAmountFocus: boolean;

    public longDescriptionParams: LongDescriptionParams;
    public rebillObj: UpdateReplenishmentAmount;
    public minNeededDeposit: number; //dependent on EFT or CC
    public isKiosk: boolean;
    public saveButtonText = 'SAVE';
    public isPendingClosure: boolean;
    public isAccountInvoiced: boolean;
    public currentUser: CurrentUser;
    public replenishmentAmtError: SiteCoreItem;

    content: Content = {
        Title: '',
        ShortDescription: '',
        LongDescription: ''
    };

    async ngOnInit() {
        this.rebillObj = {
            accountType: 'false',
            currentRebillAmount: 0,
            minimumBalance: 0,
            minimumBalanceMultiplier: this.cmsContent.minimumBalanceMultiplier,
            rebillAmount: null
        };
        this.isPendingClosure = this.session.userRole === this.userRoles.pendingClosure;
        this.isAccountInvoiced = this.isInvoicedService.isAccountInvoiced();
        this.currentUser = await this.currentUserService.getCurrentUser();

        const cmsId = this.isAccountInvoiced ? childCmsIds.InvoicedAccountsReplenishmentAmountError : childCmsIds.PendingClosureReplenishmentAmountError;
        this.replenishmentAmtError = this.cmsContent.Children.find((content) => content.ItemID === cmsId.toLocaleLowerCase());

        this.minNeededDeposit = 0;
        this.shortDescriptionParams = {
            accountMinBalance: 0,
            currentReplenishmentAmount: 0
        };
        this.longDescriptionParams = {
            newAccountMinBalance: this.calculateMinAcctBalance(this.rebillObj.rebillAmount),
            newReplenishmentAmount: this.rebillObj.rebillAmount || 0,
            billingTypeLong: null
        };

        this.isKiosk = this.storefrontUtilityService.isRunningAsKiosk && !this.storefrontUtilityService.webStoreData.fullSiteMode;

        if (this.isKiosk || this.currentUser.isFlexPay) {
            this.saveButtonText = 'PROCEED';
        }

        if (this.currentUser.isFlexPay) {
            const flexPayCMSContent = this.cmsContent.Children.find((content) => content.ItemID === childCmsIds.FlexPayUpdateReplenishment.toLocaleLowerCase());
            this.content.LongDescription = flexPayCMSContent && flexPayCMSContent.LongDescription || '';
            this.content.ShortDescription = flexPayCMSContent && flexPayCMSContent.ShortDescription || '';
            this.content.Title = flexPayCMSContent && flexPayCMSContent.Title || '';
        } else {
            this.content.LongDescription = this.cmsContent.LongDescription;
            this.content.ShortDescription = this.cmsContent.ShortDescription;
            this.content.Title = this.cmsContent.Title;
        }


        if (!this.isKiosk && (this.isPendingClosure || this.isAccountInvoiced) && !this.currentUser.isFlexPay) {
            this.saveButtonText = 'RETURN TO ACCOUNT DASHBOARD';
        }

        this.paymentAmountFocus = false;

        await this.getAccountInfo();
    }

    authorizeChange(e) {
        this.currentUser.rebillOptIn = e.target.checked;
        this.rebillObj.rebillAmount = (this.currentUser.rebillOptIn) ? this.accountData.rebillAmount : 0;
        this.minNeededDeposit = 0;

        if (this.accountData && this.currentUser.rebillOptIn) {
            this.minNeededDeposit =
                this.accountData.billingInfo.billingTypeDisplay === BillingType.Eft
                    ? this.accountData.depositAmtEFT
                    : this.accountData.depositAmtCC;

            this.rebillObj.rebillAmount = this.minNeededDeposit;
            if (this.minNeededDeposit < this.cmsContent.minReqDeposit) {
                this.minNeededDeposit = this.cmsContent.minReqDeposit;
            }
        }
    }

    async onAuthorizationClick() {
        const replenishmentAmountCms = this.cmsContent.Children.find((content) => content.ItemID === childCmsIds.ReplenishmentAmount.toLocaleLowerCase());
        const data = {
            modalCms: replenishmentAmountCms
        } as IReplenishmentInfoInjectionValues;

        await this.dialogService.openSliderCentered(ReplenishmentInfoModalComponent,
            data, { title: replenishmentAmountCms?.Title } as DialogContent);
    }

    ngDoCheck() {
        const billingTypeText: BillingTypeLong = this.billingType === BillingType.Eft
            ? BillingTypeLong.BankAccount : BillingTypeLong.CreditCard;

        //The newReplenishmentAmount and newAccountMinBalance change depending on user input
        this.longDescriptionParams = {
            newAccountMinBalance: this.calculateMinAcctBalance(this.rebillObj.rebillAmount),
            newReplenishmentAmount: this.rebillObj.rebillAmount || 0,
            billingTypeLong: billingTypeText
        };
    }

    private async getAccountInfo() {

        // Pull the account type and current rebill amount from state params (to minimize API Calls)
        this.accountData = this.uiRouterGlobals.params?.accountData;

        // Pull the account type and the current rebill amount from API (if needed/not obtained from state params)
        if (!this.accountData) {
            const accountInfoApiResponse: GetAccountInformationResponse = await this.profileApiService.getAccountInfo();
            this.accountData = accountInfoApiResponse;
        }

        if (this.accountData) {
            this.minNeededDeposit =
                this.accountData.billingInfo.billingTypeDisplay === BillingType.Eft
                    ? this.accountData.depositAmtEFT
                    : this.accountData.depositAmtCC;

            if (this.minNeededDeposit < this.cmsContent.minReqDeposit) {
                this.minNeededDeposit = this.cmsContent.minReqDeposit;
            }

            this.billingType = this.accountData.billingInfo.billingTypeDisplay;
            const billingTypeText: BillingTypeLong = this.billingType === BillingType.Eft
                ? BillingTypeLong.BankAccount : BillingTypeLong.CreditCard;

            this.shortDescriptionParams = {
                accountMinBalance: this.accountData.minimumBalance,
                currentReplenishmentAmount: this.accountData.rebillAmount || 0
            };

            this.longDescriptionParams = {
                newAccountMinBalance: this.calculateMinAcctBalance(this.rebillObj.rebillAmount),
                newReplenishmentAmount: this.rebillObj.rebillAmount || 0,
                billingTypeLong: billingTypeText
            };
        }
        this.rebillObj.rebillAmount = (this.currentUser.rebillOptIn) ? this.accountData.rebillAmount : 0;

    }

    isReBillAmtNotChanged() {
        return (this.accountData && this.accountData?.rebillAmount) === (this.rebillObj && this.rebillObj?.rebillAmount);
    }

    private async showCompletionModal() {
        const cmsId = this.currentUser.isFlexPay ? childCmsIds.OptOutCompletionModal : childCmsIds.CompletionModal;

        const modalCms = this.cmsContent.Children.find((content) => content.ItemID === cmsId.toLocaleLowerCase());
        const data = {
            cmsContent: {
                Title: modalCms.Title,
                AcceptBtn: 'OKAY',
                PrimaryContent: modalCms.ShortDescription
            }
        };

        await this.dialogService.openGenericModal<GenericCmsModalComponent, GenericCmsModalInjectionValues>(GenericCmsModalComponent, data);
    }

    private displayErrorForRequiredMinAmount(): boolean {
        //Enforce business rules that are not enforced by webservices, hardcoded on fronted on legacy HCTRA site
        //hardcoded alert for minimum balance depending upon the type of account, webservices only make sure value is not <=0 and NAN
        if (this.billingType === BillingType.Eft && this.rebillObj.rebillAmount < this.accountData.depositAmtEFT) {
            this.toasterService.show('Error', 'The required minimum replenishment amount for your account is $' + this.accountData.depositAmtEFT);
            return true;
        }
        if (this.billingType === BillingType.Credit && this.rebillObj.rebillAmount < this.accountData.depositAmtCC) {
            this.toasterService.show('Error', 'The required minimum replenishment amount for your account is $' + this.accountData.depositAmtCC);
            return true;
        }

        return false;
    };

    // Used in the action button component
    public async saveInformation(form: NgForm, wizardUi: WizardComponent) {

        if (this.isPendingClosure || this.isAccountInvoiced) {
            if (this.isKiosk && wizardUi) {
                await wizardUi.gotoNextState();
                return;
            }

            await this.state.go(accountDashboardStates.Frame);
            return;
        }

        if (!form.valid) {
            return;
        }

        if (((this.currentUser.isFlexPay && this.currentUser.rebillOptIn) || (!this.currentUser.isFlexPay)) && this.displayErrorForRequiredMinAmount()) {
            return;
        }

        if (this.isReBillAmtNotChanged()) {
            if (this.isKiosk && wizardUi) {
                const state = this.state.current;
                state['wizard']['isEndState'] = true;
                await wizardUi.gotoNextState();
                state['wizard']['isEndState'] = false;
            } else {
                await this.state.go(profileStates.AccountDetails);;
            }

            return;
        }

        if (this.currentUser.isFlexPay && this.currentUser.rebillOptIn) {
            this.viewBillingClick(wizardUi);
        } else {
            const apiResponse = await this.profileApiService.updateRebillAmount(this.rebillObj);

            if (apiResponse) {
                await this.showCompletionModal();
                await this.authService.profile({});
                if (this.isKiosk && wizardUi) {
                    await wizardUi.gotoCancelState();
                    return;
                }

                await this.state.go(profileStates.AccountDetails);
            }
        }
    };

    public async viewBillingClick(wizardUi: WizardComponent) {
        this.manageBillingService.rebillObj = this.rebillObj;
        if (!this.isKiosk) {
            await this.state.go(profileStates.UpdateFlexpayBillingInformation);
        }
        if (this.isKiosk && wizardUi) {
            await wizardUi.gotoNextState();
            return;
        }

    }

    // Used in the action buttons component.
    public async cancel(wizardUi: WizardComponent) {
        if (this.isKiosk && wizardUi) {
            await wizardUi.gotoCancelState();
            return;
        }

        await this.state.go(profileStates.AccountDetails);
    };

    public calculateMinAcctBalance(input: number) {
        this.rebillObj.minimumBalance = input * this.rebillObj.minimumBalanceMultiplier;
        this.rebillObj.minimumBalance = this.rebillObj.minimumBalance < this.cmsContent.minLowBalance ? this.cmsContent.minLowBalance : this.rebillObj.minimumBalance;
        if (!this.currentUser?.rebillOptIn && this.currentUser?.isFlexPay) {
            this.rebillObj.minimumBalance = 0;
        }
        return this.rebillObj.minimumBalance || 0;
    };

    public async switchTo(input: HTMLInputElement) {

        this.paymentAmountFocus = true;

        await wait(0);

        input.focus();
        input.select();
    }

    public get paymentAmountWithCurrency(): string {

        try {
            return this.currencyPipe.transform(this.rebillObj.rebillAmount, 'USD');
        } catch (e) {
            return '';
        }

    }
}
