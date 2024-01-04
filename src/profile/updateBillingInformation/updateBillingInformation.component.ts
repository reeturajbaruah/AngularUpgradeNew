import { Component, OnInit, Input, Inject } from '@angular/core';
import { BillingInfo, BillingType, PaymentMethodOptions } from 'common/models';

import { StateService } from '@uirouter/angular';
import { SiteCoreItem } from 'cms/cms.module';
import { ErrorMessage } from 'common/interfaces';
import {
    ManageBillingService, BillingDataService,
    DialogContent, DialogService, AccountService, CurrentUserService
} from 'common/services';
import {
    WizardComponent,
    GenericCmsModalComponent, GenericCmsModalInjectionValues
} from 'common/ui';
import {
    BillingModalComponent,
    InjectionValues as BillingInjectionValues
} from 'common/ui/modals/billingModal/billingModal.component';
import { RebillOptInModalComponent, RebillOptInModalContent } from './rebillOptInModal/rebillOptInModal.component';
import { stateNames as ProfileStates } from 'profile/constants';
import { StorefrontUtilityService } from '../../storefront/services/storefrontUtility.service';
import { StorefrontService } from '../../storefront/services/storefront.service';


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

export type PaymentMethod = BillingInfo & PaymentMethodOptions & Sort;

@Component({
    selector: 'update-billing-information',
    templateUrl: './updateBillingInformation.html',
    styleUrls: ['./updateBillingInformation.less']
})
export class UpdateBillingInformationComponent implements OnInit {
    constructor(
        private manageBillingInformationService: ManageBillingService,
        private dialogService: DialogService,
        private billingDataService: BillingDataService,
        private storefrontUtilityService: StorefrontUtilityService,
        private storefrontService: StorefrontService,
        private accountService: AccountService,
        private currentUserService: CurrentUserService,
        private state: StateService
    ) { }

    @Input() public cmsContent: updateBillingInfoCms;
    @Input() public billingCMS: BillingCMS;
    @Input() public optInCMS: RebillOptInModalContent;
    @Input() public stateList: { stateCode: string }[];
    @Input() public countryList: { countryCode: string; displayName: string }[];
    @Input() public paymentMethodImages: string;

    public openEFTSlots: number;
    public openCreditSlots: number;
    public activeEFTSlots: number;
    public activeCreditSlots: number;

    public addPayment: string;
    public showAddPayment: boolean;

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

    public currentUser: any;

    private existingPaymentCount = 0;

    async ngOnInit() {

        this.isKiosk = this.storefrontUtilityService.isRunningAsKiosk && !this.storefrontUtilityService.webStoreData.fullSiteMode;
        this.selectedIndex = -1;
        this.selectedIndexBlocked = -1;
        this.loadGrid();
    }

    public async loadGrid() {
        this.setUserData();

        const savedPaymentMethods = await this.accountService.getAllPaymentMethods();
        this.existingPaymentCount = savedPaymentMethods.bankAccounts?.length + savedPaymentMethods.creditCards?.length;

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

        this.blockedPaymentMethods = this.paymentMethods
            .filter(this.isBlockedPaymentMethod)
            .sort((a, b) => this.getRank(b) - this.getRank(a));

        this.paymentMethods = this.paymentMethods
            .filter(p => !this.isBlockedPaymentMethod(p))
            .sort((a, b) => this.getRank(b) - this.getRank(a));

        this.isOnlyPayment = this.paymentMethods.length === 1;

        this.activeEFTSlots = this.maxEft - this.paymentMethods.filter(x => x.billingType === BillingType.Eft).length;
        this.activeCreditSlots = this.maxCards - this.paymentMethods.filter(x => x.billingType === BillingType.Credit).length;

        if (this.openEFTSlots === 0 && this.openCreditSlots === 0) {
            this.showAddPayment = false;
        }
        else if (this.openEFTSlots === 0 && this.openCreditSlots > 0) {
            this.addPayment = this.cmsContent.ADD_MODAL_CARD;//'Add a new card';
            this.showAddPayment = true;
        }
        else if (this.openEFTSlots === 1 && this.openCreditSlots === 0) {
            this.addPayment = this.cmsContent.ADD_MODAL_EFT;//'Add Bank Account';
            this.showAddPayment = true;
        }
        else if (this.openEFTSlots === 1 && this.openCreditSlots > 0) {
            this.addPayment = this.cmsContent.ADD_MODAL_ALL;//'Add a new Payment Method';
            this.showAddPayment = true;
        }
    }

    public async setUserData() {
        this.currentUser = await this.currentUserService.getCurrentUser();
        this.isOptIn = this.currentUser.rebillOptIn;
        this.isFlexPay = this.currentUser.isFlexPay;
    }

    public isBlockedPaymentMethod(input: PaymentMethod) {
        if (input.credit) {
            return input.credit.isBlocked;
        }
        else {
            return input.eft.isBlocked;
        }
    }

    public isSelected(index: number, selectedIndex: number): boolean {
        if (index === selectedIndex && selectedIndex >= 0) {
            return true;
        }
        else {
            return false;
        }
    }

    public toggleAnimation(index: number, selectedIndex: number): string {
        if (index === selectedIndex && selectedIndex >= 0) {
            return 'default';
        }
        else {
            return 'rotated';
        }
    }

    private getRank(paymentMethod: PaymentMethod) {
        let rank = 0;
        rank += paymentMethod.primary ? 4 : 0;
        rank += paymentMethod.billingType === BillingType.Credit ? 2 : 1;
        return rank;
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
            shouldForcePrimarySelection: this.existingPaymentCount === 0,
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

            if ((errors.length === 0 && this.isOptIn) || (errors.length === 0 && !this.isOptIn && !this.isFlexPay)) {

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

            if (errors.length === 0 && !this.isOptIn && this.isFlexPay) {

                const optIn: boolean = await this.dialogService.openGenericModal<RebillOptInModalComponent,
                    RebillOptInModalContent>(RebillOptInModalComponent, this.optInCMS);

                if (optIn) {
                    if (!this.storefrontUtilityService.isRunningAsKiosk || (this.storefrontUtilityService.isRunningAsKiosk && this.storefrontUtilityService.webStoreData.fullSiteMode)) {
                        this.state.go(ProfileStates.UpdateReplenishmentAmount);
                    }
                    if (this.storefrontUtilityService.isRunningAsKiosk && !this.storefrontUtilityService.webStoreData.fullSiteMode) {
                        this.storefrontService.startDesktopMode(true);
                        await this.state.go(ProfileStates.UpdateReplenishmentAmount);
                    }

                }
            }

            this.loadGrid();
        }

    }

    public proceed(wizardUi: WizardComponent) {

        if (this.isKiosk && wizardUi) {
            wizardUi.gotoNextState();
            return;
        }
    }
}
