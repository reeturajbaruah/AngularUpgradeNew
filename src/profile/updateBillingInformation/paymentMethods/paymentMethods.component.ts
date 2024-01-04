import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { collapseTrigger } from 'animations/collapse';
import { SiteCoreItem } from 'cms/cms.module';
import {
    BillingInfoUtilitiesService
} from 'common/billing/billingInfoUtilities.service';
import { CmsUtilService, CmsReplacementService } from 'cms/services';
import { BankAccountType, BillingInfo, BillingType, PaymentMethodOptions } from 'common/models';
import { ErrorMessage } from 'common/interfaces';
import {
    DialogContent, ResponseErrorService, ManageBillingService,
    ToasterService, DialogService, BillingDataService
} from 'common/services';
import { UpdateBillingInformationComponent, PaymentMethod, updateBillingInfoCms } from 'profile/updateBillingInformation/updateBillingInformation.component';
import { GenericCmsModalComponent, GenericCmsModalInjectionValues } from 'common/ui';
import { cloneDeep } from 'common/utilities';
import { isString, isNumber } from 'lodash';
import { WebApisService, UnblockPaymentMethodRequest, RemovePaymentMethodRequest, UpdateReplenishmentAmount } from 'profile/services/webApis.service';
import { BillingModalComponent, InjectionValues as BillingInjectionValues } from 'common/ui/modals/billingModal/billingModal.component';
import { RemovePaymentModalComponent, RemovePaymentModalInjectionValues, RemovePaymentModalResultInjectionValues }
    from 'profile/updateBillingInformation/removePaymentModal/removePaymentModal.component';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';

interface IconCms {
    ItemName: string;
    Image: string;
}

export interface BillingCardPaymentDetailsCms {
    Children: IconCms[];
}

export interface RemoveCMS extends SiteCoreItem {
    NewPrimaryContent: string;
    removeFlexPay: string;
}

export interface UnblockCMS extends SiteCoreItem {
    UnblockMaxCard: string;
    UnblockMaxEft: string;
    UnblockMaxTitle: string;
}

@Component({
    selector: 'payment-methods-component',
    templateUrl: './paymentMethods.html',
    styleUrls: ['./paymentMethods.less'],
    providers: [TitleCasePipe],
    animations: [
        collapseTrigger,
        // Each unique animation requires its own trigger. The first argument of the trigger function is the name
        trigger('rotatedState', [
            state('default', style({ transform: 'rotate(90deg)' })),
            state('rotated', style({ transform: 'rotate(270deg)' })),
            transition('rotated => default', animate('400ms ease-out')),
            transition('default => rotated', animate('400ms ease-in'))
        ])
    ]
})
export class PaymentMethodsComponent implements OnInit {

    @Input() myIndex: number;

    @Input() paymentMethodImages: BillingCardPaymentDetailsCms;

    @Input() name: string;
    @Input() paymentMethod: (BillingInfo & PaymentMethodOptions);
    public newPaymentMethod: (BillingInfo & PaymentMethodOptions);

    @Input() isSelected: boolean;
    @Input() isBlocked: boolean;
    @Input() isOnlyPayment: boolean;
    @Input() unblockCMS: UnblockCMS;
    @Input() removeCMS: RemoveCMS;
    @Input() removeOnlyCMS: SiteCoreItem;
    @Input() stateList: { stateCode: string }[];
    @Input() countryList: { countryCode: string; displayName: string }[];
    @Input() makePrimaryCMS: SiteCoreItem;

    @Input() activeCreditSlots: number;
    @Input() activeEFTSlots: number;

    public BillingType = BillingType;

    public cmsImage: string;

    @Input() animationState = 'default';
    public paymentType: string;
    public isPrimary: boolean;

    @Input() expiringTooltip: string;
    @Input() expiredTooltip: string;
    @Input() blockedTooltip: string;

    public expirationDate: Date;
    public isActive: boolean;
    public isExpired: boolean;
    public isExpiring: boolean;
    private thirtyDays: Date;
    public isFlexPay: boolean;
    public removeCMSModalContent: string;
    @Output() reloadGrid = new EventEmitter();

    constructor(
        private parent: UpdateBillingInformationComponent,
        private cmsUtilService: CmsUtilService,
        private dialogService: DialogService,
        private webApi: WebApisService,
        private responseErrorService: ResponseErrorService,
        private toasterService: ToasterService,
        private billingInfoUtilitiesService: BillingInfoUtilitiesService,
        private billingDataService: BillingDataService,
        private manageBillingInformationService: ManageBillingService,
        private cmsReplacementService: CmsReplacementService,
        private titleCasePipe: TitleCasePipe,
        private authService: AuthenticationService
    ) {
    }

    async ngOnInit() {
        await this.getPaymentMethodData();
        this.isFlexPay = this.parent.isFlexPay;
    }

    private getPaymentMethodData() {
        this.paymentType = this.paymentMethod.billingType;
        this.cmsImage = this.getIconImage();
        this.isPrimary = (this.paymentMethod.billingType === BillingType.Credit) ? this.paymentMethod.credit.primary : this.paymentMethod.eft.primary;
        if (this.paymentMethod.billingType === BillingType.Eft && this.paymentMethod.eft.nameOnBankAccount) {
            this.paymentMethod.eft.nameOnBankAccount = this.paymentMethod.eft.nameOnBankAccount.toLowerCase();
        }
        if (this.paymentMethod.billingType === BillingType.Credit && this.paymentMethod.credit.nameOnCard) {
            this.paymentMethod.credit.nameOnCard = this.paymentMethod.credit.nameOnCard.toLowerCase();
        }

        if (this.paymentType !== BillingType.Eft) {
            const dateToCompare = new Date(this.paymentMethod.credit.expYear, this.paymentMethod.credit.expMonth);
            const today = new Date();

            this.thirtyDays = new Date();
            this.thirtyDays.setDate(this.thirtyDays.getDate() + 30);

            this.expirationDate = dateToCompare;

            const blocked = this.isBlocked;

            const expired = (dateToCompare < today) && !blocked &&
                this.paymentType !== BillingType.Eft;

            const expiring = ((dateToCompare < this.thirtyDays) && !expired) &&
                !blocked && !expired;

            this.isActive = !blocked && !expired && !expiring;

            this.isExpiring = expiring;

            this.isExpired = expired;
        }
        else if (this.paymentType === BillingType.Eft) {
            const blocked = this.isBlocked;

            this.isActive = !blocked;
            this.isExpired = false;
            this.isExpiring = false;
        }

    }

    private getIconImage = (): string => {
        if (!this.paymentMethodImages) {
            return '';
        }

        const iconDict = this.paymentMethodImages.Children.reduce((acc, curr) => ({ ...acc, [curr.ItemName]: curr.Image }), {});

        const childName = this.getPaymentType(this.paymentMethod);

        return this.cmsUtilService.generateFileSrc(iconDict[childName] || '');
    };

    private getPaymentType(paymentMethod: (BillingInfo & PaymentMethodOptions)) {
        const cardCodes = {
            a: 'AMEX',
            m: 'MasterCard',
            d: 'Discover',
            v: 'Visa'
        };

        return paymentMethod.billingType === BillingType.Eft
            ? 'Bank'
            : cardCodes[(this.paymentMethod.credit.cardCode || '').toLowerCase()] || '';
    }

    public changeSelection() {
        this.isSelected = !this.isSelected;
        this.animationState = (this.animationState === 'default' ? 'rotated' : 'default');

        if (this.isBlocked) {
            this.parent.selectedIndexBlocked = this.myIndex;
        }
        else {
            this.parent.selectedIndex = this.myIndex;
        }
    }

    public async unblockPaymentMethod() {
        let data: GenericCmsModalInjectionValues;

        if (this.paymentType === BillingType.Credit && this.activeCreditSlots <= 0) {
            data = {
                cmsContent: {
                    Title: this.unblockCMS.UnblockMaxTitle,
                    PrimaryContent: this.unblockCMS.UnblockMaxCard,
                    AcceptBtn: 'OKAY'
                }
            } as GenericCmsModalInjectionValues;

            await this.dialogService.openGenericModal(GenericCmsModalComponent, data);

            return;
        }
        else if (this.paymentType === BillingType.Eft && this.activeEFTSlots <= 0) {
            data = {
                cmsContent: {
                    Title: this.unblockCMS.UnblockMaxTitle,
                    PrimaryContent: this.unblockCMS.UnblockMaxEft,
                    AcceptBtn: 'OKAY'
                }
            } as GenericCmsModalInjectionValues;

            await this.dialogService.openGenericModal(GenericCmsModalComponent, data);

            return;
        }

        data = {
            cmsContent: {
                Title: this.unblockCMS.Title,
                PrimaryContent: this.unblockCMS.LongDescription,
                AcceptBtn: this.parent.cmsContent.BUTTON_CONTINUE,
                CancelBtn: this.parent.cmsContent.BUTTON_CANCEL
            }
        } as GenericCmsModalInjectionValues;

        const res = await this.dialogService.openGenericModal(GenericCmsModalComponent, data);

        if (res) {
            const unblockPaymentMethodData: UnblockPaymentMethodRequest = {
                accountBillingMethodId: this.paymentMethod.credit ? this.paymentMethod.credit.accountBillingMethodId : this.paymentMethod.eft.accountBillingMethodId
            };

            await this.webApi.unblockPaymentMethod(unblockPaymentMethodData).then((response) => {
                this.responseErrorService.displayAlertsFromResponse(response);

                if (this.responseErrorService.isErrorFree(response)) {
                    this.toasterService.show('Success', this.parent.cmsContent.SUCCESS_DESC);
                }
            });
        }

        await this.manageBillingInformationService.refreshBillingInfo([]);
        this.reloadGrid.emit();
    }

    public async openEditPaymentMethodModal() {

        const data: BillingInjectionValues = {
            billingInformation: {
                credit: cloneDeep(this.paymentMethod.credit),
                eft: cloneDeep(this.paymentMethod.eft)
            },
            billingType: cloneDeep(this.paymentMethod.billingType),
            stateList: cloneDeep(this.parent.stateList),
            countryList: cloneDeep(this.parent.countryList),
            lockType: true,
            creditEntryExpireOnly: true,
            hideForEFT: true,
            hidePaymentSelection: true,

            uiOptions: {
                isNew: false,
                showMakePrimary: !this.isPrimary
            },

            cmsImage: this.cmsImage
        };

        if (this.paymentMethod.eft) {
            data.billingInformation.eft.account2 = this.paymentMethod.eft.accountNumber;
            data.billingInformation.eft.accountType = BankAccountType[this.paymentMethod.eft.accountTypeDisplay];
        }

        await this.dialogService.openSliderCentered(
            BillingModalComponent, data, { title: this.parent.cmsContent.EDIT_MODAL } as DialogContent)
            .then((result) => {
                if (result) {
                    this.paymentMethod = result.billingInformation;
                    this.paymentMethod.billingType = result.billingType;

                    if (result.billingType === BillingType.Credit) {
                        this.paymentMethod.credit = this.normalizeCreditCard(this.paymentMethod.credit);
                    }
                    if (result.billingType === BillingType.Eft) {
                        this.paymentMethod.eft.accountTypeDisplay = this.titleCasePipe.transform(result.billingInformation.eft.accountType);
                        this.paymentMethod.eft.nameOnBankAccount = result.billingInformation.eft.name;
                        this.paymentMethod.eft = this.normalizeEFT(this.paymentMethod.eft);
                    }

                    this.updatePaymentMethod(result);
                }
            });

        await this.manageBillingInformationService.refreshBillingInfo([]);
        this.reloadGrid.emit();
    }

    public async removePaymentMethod() {
        this.setRemoveChangeRequestCMS();

        const remainingPaymentMethods: PaymentMethod[] = this.parent.paymentMethods
            .filter(p => p !== this.paymentMethod);

        const dataChangeRequest = {
            cmsContent: {
                Title: this.removeCMS.Title,
                MainContent: this.removeCMSModalContent,
                NewPrimaryContent: this.removeCMS.NewPrimaryContent,
                PrimaryAcceptBtn: this.parent.cmsContent.BUTTON_SAVE,
                NonPrimaryAcceptBtn: this.parent.cmsContent.BUTTON_CONTINUE,
                CancelBtn: this.parent.cmsContent.BUTTON_CANCEL,
                ConfirmBtn: this.parent.cmsContent.BUTTON_CONFIRM,
                isPrimary: this.isPrimary,
                isOnlyPayment: this.isOnlyPayment,
                isFlexPay: this.parent.isFlexPay,
                removeFlexPay: this.removeCMS.removeFlexPay,
                otherMethods: remainingPaymentMethods,
                paymentMethodImages: this.paymentMethodImages,
                isOptIn: this.parent.isOptIn
            }
        } as RemovePaymentModalInjectionValues;

        const res_removeModal: RemovePaymentModalResultInjectionValues = await this.dialogService.openGenericModal<RemovePaymentModalComponent,
            RemovePaymentModalInjectionValues>(RemovePaymentModalComponent, dataChangeRequest);

        if (res_removeModal) {

            if (!res_removeModal.isRemoveOnly && !res_removeModal.optOut) {

                if (res_removeModal.newPrimaryMethod) {
                    const newPrimaryPaymentMethod = res_removeModal.newPrimaryMethod;

                    if (newPrimaryPaymentMethod.billingType === BillingType.Credit) {
                        newPrimaryPaymentMethod.eft = null;
                        newPrimaryPaymentMethod.credit.primary = true;
                    } else if (newPrimaryPaymentMethod.billingType === BillingType.Eft) {
                        newPrimaryPaymentMethod.credit = null;
                        newPrimaryPaymentMethod.eft.primary = true;
                    }

                    const errors: ErrorMessage[] = await this.billingDataService.updatePaymentInfo('e', newPrimaryPaymentMethod);

                    if (errors.length === 0) {
                        const removePaymentMethodData: RemovePaymentMethodRequest = {
                            eFTPaymentMethod: this.paymentMethod.eft,
                            creditCardPaymentMethod: this.paymentMethod.credit,
                            isCreditCard: this.paymentMethod.billingType === BillingType.Credit
                        };

                        const removeResponse = await this.webApi.removePaymentMethod(removePaymentMethodData);

                        if (this.responseErrorService.isErrorFree(removeResponse)) {
                            this.toasterService.show('Success', this.parent.cmsContent.SUCCESS_DESC);
                        }
                    }

                }
            }
            if (res_removeModal.optOut) {
                const optOutResponse = await this.webApi.updateRebillAmount({
                    accountType: 'Flex Pay',
                    currentRebillAmount: 0,
                    minimumBalance: 0,
                    minimumBalanceMultiplier: .25,
                    rebillAmount: 0
                } as UpdateReplenishmentAmount);

                if (optOutResponse) {
                    await this.authService.profile({});
                    const removePaymentMethodData: RemovePaymentMethodRequest = {
                        eFTPaymentMethod: this.paymentMethod.eft,
                        creditCardPaymentMethod: this.paymentMethod.credit,
                        isCreditCard: this.paymentMethod.billingType === BillingType.Credit
                    };

                    const removeResponse = await this.webApi.removePaymentMethod(removePaymentMethodData);

                    if (this.responseErrorService.isErrorFree(removeResponse)) {
                        this.toasterService.show('Success', this.parent.cmsContent.SUCCESS_DESC);
                    }
                }
            }
            if (res_removeModal.isRemoveOnly) {

                const removePaymentMethodData: RemovePaymentMethodRequest = {
                    eFTPaymentMethod: this.paymentMethod.eft,
                    creditCardPaymentMethod: this.paymentMethod.credit,
                    isCreditCard: this.paymentMethod.billingType === BillingType.Credit
                };

                const removeResponse = await this.webApi.removePaymentMethod(removePaymentMethodData);

                if (this.responseErrorService.isErrorFree(removeResponse)) {
                    this.toasterService.show('Success', this.parent.cmsContent.SUCCESS_DESC);
                }
            }

        }

        await this.manageBillingInformationService.refreshBillingInfo([]);
        this.reloadGrid.emit();
    }

    private setRemoveChangeRequestCMS() {
        let insertValues: {
            oldPaymentType: string;
            oldLast4: string;
        };

        if (this.paymentMethod.billingType === BillingType.Eft) {
            insertValues = {
                oldPaymentType: this.getPaymentType(this.paymentMethod) + ' Account',
                oldLast4: this.paymentMethod.eft.accountNumber.slice(-4)
            };
        }
        else {
            insertValues = {
                oldPaymentType: this.getPaymentType(this.paymentMethod),
                oldLast4: this.paymentMethod.credit.cardNbr.slice(-4)
            };
        }

        this.removeCMSModalContent = this.cmsReplacementService.transformTemplate(this.removeCMS.ShortDescription, insertValues);
    }

    private async updatePaymentMethod(result: BillingInjectionValues) {
        const editPaymentMethod = {
            ...result.billingInformation,
            billingType: result.billingType,
            makePrimary: result.uiResults?.makePrimary

        } as BillingInfo & PaymentMethodOptions;

        if (editPaymentMethod.billingType === BillingType.Credit) {
            editPaymentMethod.eft = null;
        } else if (editPaymentMethod.billingType === BillingType.Eft) {
            editPaymentMethod.credit = null;
        }

        const errors: ErrorMessage[] = await this.billingDataService.updatePaymentInfo('e', editPaymentMethod);

        if (errors.length === 0) {

            const modalData = {
                cmsContent: {
                    Title: this.parent.cmsContent.SUCCESS_TITLE,
                    AcceptBtn: this.parent.cmsContent.SUCCESS_BUTTON,
                    PrimaryContent: this.parent.cmsContent.SUCCESS_DESC
                }
            };
            await this.dialogService.openGenericModal<GenericCmsModalComponent, GenericCmsModalInjectionValues>(GenericCmsModalComponent, modalData);
        }

        this.manageBillingInformationService.billingInformation = {
            selected: null,
            allPaymentContainers: null
        };

        await this.manageBillingInformationService.refreshBillingInfo([]);

        this.parent.loadGrid();
    }

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

    public async makePrimaryPayment() {
        const data = {
            cmsContent: {
                Title: this.makePrimaryCMS.Title,
                PrimaryContent: this.makePrimaryCMS.LongDescription,
                AcceptBtn: this.parent.cmsContent.BUTTON_CONTINUE,
                CancelBtn: this.parent.cmsContent.BUTTON_CANCEL
            }
        } as GenericCmsModalInjectionValues;

        const res = await this.dialogService.openGenericModal(GenericCmsModalComponent, data);

        if (res) {
            const editPaymentMethod = this.paymentMethod;

            if (editPaymentMethod.billingType === BillingType.Credit) {
                editPaymentMethod.eft = null;
                editPaymentMethod.credit.primary = true;
            } else if (editPaymentMethod.billingType === BillingType.Eft) {
                editPaymentMethod.credit = null;
                editPaymentMethod.eft.primary = true;
            }

            const errors: ErrorMessage[] = await this.billingDataService.updatePaymentInfo('e', editPaymentMethod);

            if (errors.length === 0) {
                this.toasterService.show('Success', this.parent.cmsContent.SUCCESS_DESC);
            }
        }

        await this.manageBillingInformationService.refreshBillingInfo([]);
        this.parent.loadGrid();
    }

    public setRightOffset() {
        return {
            right: this.isPrimary ? '0px' : '-165px'
        };
    }

}
