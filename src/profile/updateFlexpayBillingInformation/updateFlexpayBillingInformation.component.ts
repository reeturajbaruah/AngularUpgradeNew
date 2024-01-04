import { Component, OnInit, Input, Inject } from '@angular/core';
import { BillingInfo, BillingType, PaymentMethodOptions } from 'common/models';

import { StateService } from '@uirouter/angular';
import { SiteCoreItem } from 'cms/cms.module';
import { ErrorMessage } from 'common/interfaces';
import {
    ManageBillingService, BillingDataService,
    DialogContent, DialogService, AccountService, CurrentUserService, ToasterService, CurrentUser
} from 'common/services';
import {
    WizardComponent,
    GenericCmsModalComponent, GenericCmsModalInjectionValues
} from 'common/ui';
import {
    BillingModalComponent,
    InjectionValues as BillingInjectionValues
} from 'common/ui/modals/billingModal/billingModal.component';
import { stateNames as ProfileStates } from 'profile/constants';
import { WebApisService } from 'profile/services/webApis.service';
import { CmsUtilService } from 'cms/services';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { StorefrontUtilityService } from '../../storefront/services/storefrontUtility.service';

export interface updateBillingInfoCms {
    PAGE_TITLE: string;
    LongDescription: string;
    ADD_MODAL_ALL: string;
    ADD_MODAL_EFT: string;
    ADD_MODAL_CARD: string;
    BLOCKED_TITLE: string;
    BLOCKED_DESC: string;
    EDIT_MODAL: string;
    SUCCESS_TITLE: string;
    SUCCESS_DESC: string;
    SUCCESS_BUTTON: string;
    BUTTON_SAVE: string;
    BUTTON_CONTINUE: string;
    BUTTON_CANCEL: string;
    BUTTON_CONFIRM: string;
    NO_DATA_TITLE: string;
    Children: SiteCoreItem[];
}

export interface BillingCMS {
    LongDescription: string;
    ExpiringTooltip: string;
    ExpiredTooltip: string;
    NoData: string;
}

interface Sort {
    primary?: boolean;
}

interface CmsContent {
    Title: string;
    ShortDescription: string;
    LongDescription: string;
    Children: SiteCoreItem[];
}

interface IPaymentConfirmModal extends CmsContent {
    optInMessage: string;
}

interface IconCms {
    ItemName: string;
    Image: string;
}

export interface BillingCardPaymentDetailsCms {
    Children: IconCms[];
}

export type PaymentMethod = BillingInfo & PaymentMethodOptions & Sort;

@Component({
    selector: 'update-flexpay-billing-information',
    templateUrl: './updateFlexpayBillingInformation.html',
    styleUrls: ['./updateFlexpayBillingInformation.less']
})
export class UpdateFlexpayBillingInformationComponent implements OnInit {

    constructor(
        private manageBillingInformationService: ManageBillingService,
        private dialogService: DialogService,
        private billingDataService: BillingDataService,
        private accountService: AccountService,
        private currentUserService: CurrentUserService,
        private state: StateService,
        private storefrontUtilityService: StorefrontUtilityService,
        private toaster: ToasterService,
        private profileApiService: WebApisService,
        private cmsUtilService: CmsUtilService,
        private authService: AuthenticationService,

    ) { }

    @Input() public cmsContent: updateBillingInfoCms;
    @Input() public billingCMS: BillingCMS;
    @Input() public flexPaycmsContent: CmsContent;
    @Input() public paymentConfirmModal: IPaymentConfirmModal;
    @Input() public stateList: { stateCode: string }[];
    @Input() public countryList: { countryCode: string; displayName: string }[];
    @Input() public paymentMethodImages: BillingCardPaymentDetailsCms;

    public BillingType = BillingType;
    public openEFTSlots: number;
    public openCreditSlots: number;
    public activeEFTSlots: number;
    public activeCreditSlots: number;
    public addPayment: string;
    public paymentMethods: PaymentMethod[] = [];
    public blockedPaymentMethods: PaymentMethod[] = [];
    public maxCards: number;
    public maxEft: number;
    public selectedIndex: number;
    public selectedIndexBlocked: number;
    public isKiosk: boolean;
    public isOnlyPayment: boolean;
    public isOptIn: boolean;
    public isFlexPay: boolean;
    public isNoData = false;
    public currentUser: CurrentUser;
    public isDisabled: boolean;

    private existingPaymentMethodsCount = 0;

    async ngOnInit() {

        this.isKiosk = this.storefrontUtilityService.isRunningAsKiosk && !this.storefrontUtilityService.webStoreData.fullSiteMode;
        this.selectedIndex = -1;
        this.selectedIndexBlocked = -1;
        this.loadGrid();
    }

    public async openEditBillingModal() {

        const openEftSlots = this.openEFTSlots;
        const openCardSlots = this.openCreditSlots;

        const thisLockType: boolean = (openEftSlots === 0 || openCardSlots === 0) ? true : false;

        let openBillingType = null;

        if (openEftSlots === 0) {
            openBillingType = BillingType.Credit;
        }
        else if (openCardSlots === 0) {
            openBillingType = BillingType.Eft;
        }

        const newBillingInfo = {
            credit: {},
            eft: {},
            billingType: openBillingType
        } as BillingInfo & PaymentMethodOptions;

        //if this needs to be either just EFT or just Credit, locktype needs to be passed to paymentmethod inside modal
        //and injection billing type needs to be set to just necessary type
        const data: BillingInjectionValues = {
            billingInformation: newBillingInfo,
            billingType: openBillingType,
            stateList: this.stateList,
            countryList: this.countryList,
            lockType: thisLockType,
            hideForEFT: true,
            shouldForcePrimarySelection: this.existingPaymentMethodsCount === 0,
            paymentMethodAvailability: {
                openCardSlots,
                openEftSlots
            },
            uiOptions: {
                //the add button is only shown if there's an open slot
                // so, showMakePrimary can always be true
                showMakePrimary: true
            }
        };

        const result = await this.dialogService.openSliderCentered(BillingModalComponent, data,
            { title: this.addPayment } as DialogContent);

        if (result) {
            //then call the add payment method api and call api to get new list of payment methods

            const newPaymentMethod = {
                ...result.billingInformation,
                billingType: result.billingType,
                newMethodAdded: true,
                makePrimary: result.uiResults?.makePrimary //this is true if the Make Primary checkbox was checked

            } as BillingInfo & PaymentMethodOptions;

            if (newPaymentMethod.billingType === BillingType.Credit) {
                newPaymentMethod.eft = null;
            } else if (newPaymentMethod.billingType === BillingType.Eft) {
                newPaymentMethod.credit = null;
            }

            const errors: ErrorMessage[] = await this.billingDataService.updatePaymentInfo('a', newPaymentMethod);

            if (errors.length === 0 && this.isOptIn) {

                const modalData = {
                    cmsContent: {
                        Title: this.cmsContent.SUCCESS_TITLE,
                        AcceptBtn: this.cmsContent.SUCCESS_BUTTON,
                        PrimaryContent: this.cmsContent.SUCCESS_DESC
                    }
                };
                await this.dialogService.openGenericModal<GenericCmsModalComponent, GenericCmsModalInjectionValues>(GenericCmsModalComponent, modalData);
            }

            this.manageBillingInformationService.billingInformation = {
                selected: null,
                allPaymentContainers: null
            };

            await this.manageBillingInformationService.refreshBillingInfo([]);

            this.loadGrid();
        }

    }

    getCmsImage(paymentMethod) {

        return this.getIconImage(paymentMethod);
    }

    private getIconImage = (paymentMethod): string => {
        if (!this.paymentMethodImages) {
            return '';
        }

        const iconDict = this.paymentMethodImages.Children.reduce((acc, curr) => ({ ...acc, [curr.ItemName]: curr.Image }), {});

        const childName = this.getPaymentType(paymentMethod);

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
            : cardCodes[(paymentMethod?.credit?.cardCode || '').toLowerCase()] || '';
    }

    public async loadGrid() {
        this.setUserData();

        const savedPaymentMethods = await this.accountService.getAllPaymentMethods();
        this.existingPaymentMethodsCount = savedPaymentMethods.bankAccounts?.length + savedPaymentMethods.creditCards?.length;

        //maxCards and maxEfts subtract blocked payment methods when they shouldn't.
        //is this a bug for ETC?

        this.maxCards = 2;//savedPaymentMethods.maxCards;
        this.maxEft = 1;//savedPaymentMethods.maxEfts;

        this.paymentMethods = [
            ...(savedPaymentMethods.bankAccounts || [])
                .filter(x => x)
                .map(eft => ({
                    billingType: BillingType.Eft,
                    primary: eft.primary || false,
                    eft
                } as PaymentMethod)),

            ...(savedPaymentMethods.creditCards || [])
                .filter(x => x)
                .map(credit => ({
                    billingType: BillingType.Credit,
                    primary: credit.primary || false,
                    credit
                } as PaymentMethod))
        ];

        if (this.paymentMethods === null) {
            this.isNoData = true;
        }
        else {
            this.isNoData = this.paymentMethods.length > 0 ? false : true;
        }

        this.openEFTSlots = this.maxEft - this.paymentMethods.filter(x => x.billingType === BillingType.Eft).length;
        this.openCreditSlots = this.maxCards - this.paymentMethods.filter(x => x.billingType === BillingType.Credit).length;

        this.isOnlyPayment = this.paymentMethods.length === 1;

        this.blockedPaymentMethods = this.paymentMethods
            .filter(this.checkBlocked)
            .sort((a, b) => this.getRank(b) - this.getRank(a));

        this.paymentMethods = this.paymentMethods
            .filter(p => !this.checkBlocked(p))
            .sort((a, b) => this.getRank(b) - this.getRank(a));

        this.activeEFTSlots = this.maxEft - this.paymentMethods.filter(x => x.billingType === BillingType.Eft).length;
        this.activeCreditSlots = this.maxCards - this.paymentMethods.filter(x => x.billingType === BillingType.Credit).length;

        if (this.openEFTSlots === 0 && this.openCreditSlots > 0) {
            this.addPayment = this.cmsContent.ADD_MODAL_CARD;
        }
        else if (this.openEFTSlots === 1 && this.openCreditSlots === 0) {
            this.addPayment = this.cmsContent.ADD_MODAL_EFT;
        }
        else if (this.openEFTSlots === 1 && this.openCreditSlots > 0) {
            this.addPayment = this.cmsContent.ADD_MODAL_ALL;
        }

        this.isDisabled = this.paymentMethods.length === 0;
    }


    public checkBlocked(payment: PaymentMethod) {
        if (payment.credit) {
            return payment.credit.isBlocked;
        }
        else {
            return payment.eft.isBlocked;
        }
    }


    checkActive(payment) {
        if (payment?.billingType !== BillingType.Eft) {

            const dateToCompare = new Date(payment.credit.expYear, payment.credit.expMonth);
            const today = new Date();

            const thirtyDays = new Date();
            thirtyDays.setDate(thirtyDays.getDate() + 30);

            const blocked = this.checkBlocked(payment);

            const expired = (dateToCompare < today) && !blocked &&
                payment.billingType !== BillingType.Eft;

            const expiring = ((dateToCompare < thirtyDays) && !expired) &&
                !blocked && !expired;
            return !blocked && !expired && !expiring;

        } else if (payment?.billingType === BillingType.Eft) {
            return !payment.eft.isBlocked;
        } else {
            return true;
        }


    }

    checkExpired(payment) {
        if (payment.billingType !== BillingType.Eft) {
            const dateToCompare = new Date(payment.credit.expYear, payment.credit.expMonth);
            const today = new Date();

            const blocked = this.checkBlocked(payment);


            const expired = (dateToCompare < today) && !blocked;
            return expired;

        } else {
            return false;
        }
    }


    private getRank(paymentMethod: PaymentMethod) {
        let rank = 0;
        rank += paymentMethod.primary ? 4 : 0;
        rank += paymentMethod.billingType === BillingType.Credit ? 2 : 1;
        return rank;
    }

    public async setUserData() {
        this.currentUser = await this.currentUserService.getCurrentUser();
        this.isOptIn = this.currentUser.rebillOptIn;
        this.isFlexPay = this.currentUser.isFlexPay;
    }

    public async proceed(wizardUi: WizardComponent) {
        await this.showConfirmationModal(wizardUi);
    }

    public async showConfirmationModal(wizardUi: WizardComponent) {
        const data = {
            cmsContent: {
                Title: this.paymentConfirmModal.Title,
                AcceptBtn: 'Confirm',
                CancelBtn: 'CANCEL',
                PrimaryContent: this.isOptIn ? this.paymentConfirmModal?.ShortDescription : this.paymentConfirmModal.optInMessage
            }
        };
        const res = await this.dialogService.openGenericModal<GenericCmsModalComponent, GenericCmsModalInjectionValues>(GenericCmsModalComponent, data);
        if (res) {
            const apiResponse = await this.profileApiService.updateRebillAmount(this.manageBillingInformationService.rebillObj);
            if (apiResponse?.errors.length === 0) {
                await this.authService.profile({});
                if (this.isKiosk && wizardUi) {
                    await wizardUi.gotoNextState();
                    return;
                }
                await this.state.go(ProfileStates.AccountDetails);
            } else {
                this.toaster.show('Error', res?.errors);
            }
        }
    }

    async cancel(wizardUi: WizardComponent) {
        if (this.isKiosk && wizardUi) {
            await wizardUi.gotoNextState();
            return;
        }

        await this.state.go(ProfileStates.AccountDetails);
    }

    async previous(wizardUi: WizardComponent) {
        if (this.isKiosk && wizardUi) {
            await wizardUi.gotoPreviousState();
            return;
        }

        await this.state.go(ProfileStates.UpdateReplenishmentAmount);
    }
}

