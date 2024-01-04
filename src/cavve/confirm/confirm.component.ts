import {
    Component, OnInit, Inject, Input, ViewChild
} from '@angular/core';
import { FrameComponent } from '../frame/frame.component';
import { BillingType, BankAccountType } from 'common/models';
import { StateConfig } from 'common/interfaces';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { UserRoles } from 'constants/module';
import {
    BillingModalComponent,
    InjectionValues as BillingInjectionValues
} from 'common/ui/modals/billingModal/billingModal.component';
import { isString, isEqual, isNumber, isObject } from 'lodash';
import { cloneDeep } from 'common/utilities';
import { DialogContent, DialogService, GenericRepoService, ResponseErrorService } from 'common/services';
import {
    EditVehicleModalComponent,
    EditVehicleInjectionValues
} from 'common/ui';
import { IFeeInfo } from '../interfaces';
import {
    BillingInfoUtilitiesService
} from 'common/billing/billingInfoUtilities.service';

import {
    ChooseDeliveryMethodComponent
} from 'common/ui/chooseDeliveryMethod/chooseDeliveryMethod.component';
import { AuthChannelService } from 'authentication/authChannelService/authChannel.service';
import { SessionService } from 'common/services/session/session.service';

interface CmsContent {
    Title: string;
    billingInfoHeader: string;
    vehicleInfoHeader: string;
    deliveryMethodHeader: string;

    //TODO: fields below may not be needed
    editVehicleInfoTitle: string;
    editVehicleToolTipEditButton: string;
    editVehicleToolTipText: string;
}

interface CmsOrderSummarySection {
    Title: string;
    ShortDescription: string;           //Agreement - Text/label for Checkbox
    LongDescription: string;            //Agreement - Paragraph ABOVE Checkbox
    EzTagAgreementValidation: string;   //Agreement - Validation for Checkbox
}


@Component({
    selector: 'cavve-confirm-component',
    templateUrl: './confirm.html',
    styleUrls: ['./confirm.less']
})
export class ConfirmComponent implements OnInit {
    constructor(
        private parent: FrameComponent,
        private state: StateService,
        private userRoles: UserRoles,
        private dialogService: DialogService,
        private billingInfoUtilitiesService: BillingInfoUtilitiesService,
        private uiRouterGlobals: UIRouterGlobals,
        private authChannel: AuthChannelService,
        private genericRepoService: GenericRepoService,
        private responseErrorService: ResponseErrorService,
        private session: SessionService
    ) { }

    @Input() cmsContent: CmsContent;
    @Input() cmsSectionConfirmOrderSummary: CmsOrderSummarySection;

    public billingInfo: any;
    public billingInfoOriginal: any;
    public BillingType = BillingType;
    public createAccountFromViolationsTotals: IFeeInfo;
    public verifyAgreementChecked: boolean;
    public vehicleInfo: any;
    public vehicleInfoOriginal: any;
    public accountInfoOriginal: any;

    @ViewChild(ChooseDeliveryMethodComponent) deliveryMethodOptions: ChooseDeliveryMethodComponent;

    ngOnInit() {

        this.setUpPage();
    }

    private setUpPage = async () => {

        this.parent.setFrameTitle(this.cmsContent.Title);
        this.parent.stepNum = 3;

        //set Violations Data
        this.createAccountFromViolationsTotals = this.parent.createAccountFromViolationsTotals;

        const accountSummary = await this.genericRepoService.dataFactory.GetAccountSummaryCreateAccountFromViolation();
        await this.setAccountData(accountSummary);

        //This is only set once, because
        //we only want to check for state params from uirouterglobals at the very beginning
        //This should be clean up when ETC fix thier set violatorCall to include address, BUG 58048
        if (this.responseErrorService.isErrorFree(accountSummary)) {
            this.billingInfo.eft.address1 = this.billingInfo.eft.address1
                || (this.uiRouterGlobals.params.eftAddress
                    ? this.uiRouterGlobals.params.eftAddress.address1 : null);
            this.billingInfo.eft.address2 = this.billingInfo.eft.address2
                || (this.uiRouterGlobals.params.eftAddress
                    ? this.uiRouterGlobals.params.eftAddress.address2 : null);

            this.billingInfoOriginal.eft.address1 = this.billingInfoOriginal.eft.address1
                || (this.uiRouterGlobals.params.eftAddress
                    ? this.uiRouterGlobals.params.eftAddress.address1 : null);
            this.billingInfoOriginal.eft.address2 = this.billingInfoOriginal.eft.address2
                || (this.uiRouterGlobals.params.eftAddress
                    ? this.uiRouterGlobals.params.eftAddress.address2 : null);
        }
    };

    // Component & Modal View Model Binding Functions
    private setAccountData = (response: any) => {
        if (this.responseErrorService.isErrorFree(response)) {

            const billingInfoInternal = {
                credit: this.normalizeCreditCard(response.creditCardPaymentMethod || {}),
                eft: this.normalizeEFT(response.eftPaymentMethod || {}),
                billingType: response.isCreditCard ? BillingType.Credit : BillingType.Eft,
                international: this.billingInfoUtilitiesService.isInternationalAddress(response.creditCardPaymentMethod)
            };

            //This should be clean up when ETC fix thier set violatorCall to include address, BUG 58048
            if (this.billingInfo && this.billingInfo.eft && billingInfoInternal?.eft?.address1 && billingInfoInternal?.eft?.address2) {
                billingInfoInternal.eft.address1 = this.billingInfo.eft.address1;
                billingInfoInternal.eft.address2 = this.billingInfo.eft.address2;
            }

            if (this.billingInfo) {

                if (this.billingInfo.billingType !== billingInfoInternal.billingType) {
                    this.billingInfo.credit = {};
                    this.billingInfo.eft = {};
                }

                const card = this.billingInfo.credit;
                const eft = this.billingInfo.eft;

                Object.keys(card).forEach(key => delete card[key]);
                Object.keys(eft).forEach(key => delete eft[key]);

                Object.assign(card, billingInfoInternal.credit);
                Object.assign(eft, billingInfoInternal.eft);

                this.billingInfo.billingType = billingInfoInternal.billingType;
                this.billingInfo.international = billingInfoInternal.international;

            } else {
                this.billingInfo = billingInfoInternal;
            }

            this.billingInfoOriginal = cloneDeep(this.billingInfo);
            this.accountInfoOriginal = cloneDeep(response.accountInfo);
            this.vehicleInfoOriginal = this.normalizeVehicleInfo(response.accountInfo);
            if (!this.vehicleInfo || isEqual(this.vehicleInfo, this.vehicleInfoOriginal)) {
                this.vehicleInfo = cloneDeep(this.vehicleInfoOriginal);
            }
        }
    };

    // Data Mapping
    private normalizeCreditCard = (creditCard: any) => {
        if (isString(creditCard.cardNbr) && isNumber(creditCard.expMonth) && isNumber(creditCard.expYear)) {

            // Retrofit the return information to work with legacy directives
            const cardAsLegacy = Object.assign({},
                creditCard,
                {
                    cardNbr: creditCard.cardNbr.slice(creditCard.cardNbr.length - 4),
                    cardExpires: `${creditCard.expMonth}/${creditCard.expYear}`,
                    selectedYear: creditCard.expYear,
                    international: this.billingInfoUtilitiesService.isInternationalAddress(creditCard)
                }
            );

            return cardAsLegacy;
        }
        return creditCard;
    };
    private normalizeEFT = (eft: any) => {
        if (isString(eft.nameOnBankAccount)) {

            const eftAsLegacy = Object.assign({}, eft,
                {
                    name: eft.nameOnBankAccount,
                    accountType: eft.accountTypeDisplay.toUpperCase(),
                    accountTypeDisplay: eft.accountTypeDisplay.toUpperCase(),
                    account2: eft.accountNumber,
                    international: this.billingInfoUtilitiesService.isInternationalAddress(eft)
                });
            return eftAsLegacy;
        }
        return eft;
    };
    private normalizeVehicleInfo = (objContainsVehicleInfo: any) => ({
        licPlate: objContainsVehicleInfo.licPlate,
        licState: objContainsVehicleInfo.licState,
        motorcycle: objContainsVehicleInfo.motorcycle,
        nickname: objContainsVehicleInfo.nickname,
        temporaryLicPlate: objContainsVehicleInfo.temporaryLicPlate,
        vehicleClassCode: Number(objContainsVehicleInfo.vehicleClassCode),
        vehicleClassDesc: objContainsVehicleInfo.vehicleClassDesc,
        vehicleColor: objContainsVehicleInfo.vehicleColor,
        vehicleMake: objContainsVehicleInfo.vehicleMake,
        vehicleModel: objContainsVehicleInfo.vehicleModel,
        vehicleYear: objContainsVehicleInfo.vehicleYear,
        isMotorcycleDisabled: true
    });
    public onSubmit = async (nextState: StateConfig) => {
        await this.setEditedBillingInfo(this.billingInfo);
        await this.setEditedVehicleInfo(this.vehicleInfo);
        await this.convertAccountAndGoToReceiptPage(nextState);
    };
    public onPrevious = async (nextState: StateConfig) => {
        await this.state.go(nextState,
            {
                billingInfo: this.billingInfo
            },
            { custom: { isExplicitlyAllowedTransition: true } });
    };
    public convertAccountAndGoToReceiptPage = async (nextState: StateConfig) => {
        const convertAccountRequest = {
            deliveryMethod: this.deliveryMethodOptions.deliveryMethod,
            totalPaymentAmount: this.createAccountFromViolationsTotals.createAccountPlateTotal
        };

        const apiResponse = await this.genericRepoService.dataFactory.ConvertAccountCreateAccountFromViolation(convertAccountRequest);

        if (this.responseErrorService.isErrorFree(apiResponse)) {
            this.session.userRole = this.userRoles.active;
            this.session.setAcctActivity('A');
            this.authChannel.logIn(apiResponse);
            await this.state.go(nextState,
                {
                    billingInfo: this.billingInfo,
                    vehicleInfo: this.vehicleInfo
                },
                { custom: { isExplicitlyAllowedTransition: true } });
        }
    };
    public openEditBillingModal() {

        const data: BillingInjectionValues = {
            billingInformation: {
                credit: cloneDeep(this.billingInfo.credit),
                eft: cloneDeep(this.billingInfo.eft)
            },
            billingType: cloneDeep(this.billingInfo.billingType),
            stateList: cloneDeep(this.parent.usStates),
            countryList: cloneDeep(this.parent.countries)
        };

        return this.dialogService.openSliderCentered(
            BillingModalComponent, data, { title: 'Edit Payment Method' } as DialogContent)
            .then((result) => {
                if (result) {
                    this.billingInfo = result.billingInformation;
                    this.billingInfo.billingType = result.billingType;

                    if (result.billingType === BillingType.Credit) {
                        this.billingInfo.credit = this.normalizeCreditCard(this.billingInfo.credit);
                    }
                    if (result.billingType === BillingType.Eft) {
                        this.billingInfo.eft.accountTypeDisplay = result.billingInformation.eft.accountType;
                        this.billingInfo.eft.nameOnBankAccount = result.billingInformation.eft.name;
                        this.billingInfo.eft = this.normalizeEFT(this.billingInfo.eft);
                    }
                }
            });
    }
    public openEditVehiclesModal() {

        const data: EditVehicleInjectionValues = {
            vehicleInfo: cloneDeep(this.vehicleInfo),
            modalCms: {
                vehicleInfoTitle: this.cmsContent.editVehicleInfoTitle,
                vehicleToolTipEditButton: this.cmsContent.editVehicleToolTipEditButton,
                vehicleToolTipText: this.cmsContent.editVehicleToolTipText
            },
            stateList: this.parent.usStates,
            plateIsReadOnly: true,
            motorcycleDisabled: true
        };

        this.dialogService.openSliderCentered(
            EditVehicleModalComponent, data, { title: 'Edit Vehicles' } as DialogContent)
            .then((result) => {
                if (result) {
                    this.vehicleInfo = this.normalizeVehicleInfo(result.vehicleInfo);
                }
            });
    }

    // Form Submissions
    private setEditedBillingInfo = async (billingInfo: any) => {

        const violatorBillingInfoRequest = {
            creditCardPaymentMethod: billingInfo.billingType === BillingType.Credit ? billingInfo.credit : null,
            eftPaymentMethod: billingInfo.billingType === BillingType.Eft
                ? billingInfo.eft
                : null,
            isCreditCard: billingInfo.billingType === BillingType.Credit
        };

        if (!isEqual(billingInfo, this.billingInfoOriginal)) {

            //API expects this specific casing (first letter capitalized),
            //while the components on this page returned / expected all caps
            if (billingInfo.billingType === BillingType.Eft) {
                violatorBillingInfoRequest.eftPaymentMethod.nameOnBankAccount = this.billingInfo.eft.name;

                if (violatorBillingInfoRequest.eftPaymentMethod.accountType === BankAccountType.Business) {
                    violatorBillingInfoRequest.eftPaymentMethod.accountType = 'Business';
                    violatorBillingInfoRequest.eftPaymentMethod.accountTypeDisplay = 'Business';
                }
                else {
                    violatorBillingInfoRequest.eftPaymentMethod.accountType = 'Personal';
                    violatorBillingInfoRequest.eftPaymentMethod.accountTypeDisplay = 'Personal';
                }
            }

            const apiResponseSetBillingInfoCreateAccountViolation =
                await this.genericRepoService.dataFactory.SetBillingInfoCreateAccountViolation(violatorBillingInfoRequest);

            if (this.responseErrorService.isErrorFree(apiResponseSetBillingInfoCreateAccountViolation)) {
                this.responseErrorService.displayAlertsFromResponse(apiResponseSetBillingInfoCreateAccountViolation);
                const apiResponseGetAccountSummaryCreateAccountFromViolation =
                    await this.genericRepoService.dataFactory.GetAccountSummaryCreateAccountFromViolation();

                if (this.responseErrorService.isErrorFree(apiResponseGetAccountSummaryCreateAccountFromViolation)) {
                    this.setAccountData(apiResponseGetAccountSummaryCreateAccountFromViolation);
                }
            }
            else {
                throw new Error('setEditedBillingInfo() failed at API call SetBillingInfoCreateAccountViolation().');
            }
        }
    };

    private setEditedVehicleInfo = async (vehicleInfo: any) => {
        const violatorAccountInfoRequest = {
            AccountInfo: Object.assign({}, this.accountInfoOriginal, vehicleInfo)
        };

        if (!isEqual(vehicleInfo, this.vehicleInfoOriginal)) {
            const apiResponseSetViolatorAccountInfo = await this.genericRepoService.dataFactory.SetViolatorAccountInfo(violatorAccountInfoRequest);

            if (this.responseErrorService.isErrorFree(apiResponseSetViolatorAccountInfo)) {
                const apiResponseGetAccountSummaryCreateAccountFromViolation =
                    await this.genericRepoService.dataFactory.GetAccountSummaryCreateAccountFromViolation();


                if (this.responseErrorService.isErrorFree(apiResponseGetAccountSummaryCreateAccountFromViolation)) {
                    this.setAccountData(apiResponseGetAccountSummaryCreateAccountFromViolation);
                }
            }
            else {
                throw new Error('setEditedVehicleInfo() failed at API call SetViolatorAccountInfo().');
            }
        }
    };

}
