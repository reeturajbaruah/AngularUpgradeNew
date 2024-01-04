import { Inject, Injectable } from '@angular/core';
import { StateService } from '@uirouter/core';
import { CmsUtilService } from 'cms/services/cmsUtil/cmsUtil.service';
import { WindowRef } from 'common/providers';
import { EditInvoicedMessageService, ResponseErrorService } from 'common/services';
import { cloneDeep, isObject } from 'common/utilities/object';
import { PhoneNumbers } from 'constants/phoneNumbers.constants';
import { UrlPaths } from 'constants/routes.constants';
import { StateNames } from 'constants/stateNames.constants';
import { extend, merge } from 'lodash';
import { UpdateReplenishmentAmount } from 'profile/services/webApis.service';
import { BillingDataService } from './billingData.service';
import { StringUtilsService } from '../stringUtils/stringUtils.service';
import { GenericRepoService } from '../genericRepo/genericRepo.service';

interface CmsBillingIcon {
    ItemName: string;
    TertiaryImage: string;
    Image: string;
    Parameters: any;
}

interface CmsBillingPage {
    Children: { ItemName: string;[k: string]: any }[];
    ShortDescription: string;
}
interface CmsExpiredCardPopup {
    PrimaryContent: string;
}

interface CmsAlertImage {
    SecondaryImage: string;
}
interface PaymentMethod {
    accountBillingMethodId: number;
}
interface PaymentContainer {
    isEft: boolean;
    isPrimary: boolean;
    isSelected: boolean;
    paymentMethod: PaymentMethod;
}

export interface BillingInformation {
    selected: PaymentContainer;
    allPaymentContainers: PaymentContainer[];
}

interface ModalInfo {
    subHeading: string;
    eft: {
        actionText: string;
        state: string;
    };
    card: {
        actionText: string;
        state: string;
    };
}

@Injectable()
export class ManageBillingService {
    constructor(
        private routes: UrlPaths,
        private stateNames: StateNames,
        private phoneNumbers: PhoneNumbers,
        private cmsUtilService: CmsUtilService,
        private billingDataService: BillingDataService,
        private stateService: StateService,
        @Inject(WindowRef) private window: Window,
        private stringUtils: StringUtilsService,
        private genericRepo: GenericRepoService,
        private responseErrorService: ResponseErrorService,
        private editInvoicedMessageService: EditInvoicedMessageService
    ) { }

    public rebillObj: UpdateReplenishmentAmount = {
        accountType: 'false',
        currentRebillAmount: 0,
        minimumBalance: 0,
        minimumBalanceMultiplier: .25,
        rebillAmount: null
    };

    public inChildState = false;
    public billingInformation: BillingInformation;
    public cmsContent = {
        alertTooltip: {
            body: '',
            image: ''
        },
        confirmMakePrimary: {
            title: '',
            body: ''
        },
        updateSuccessfull: {
            title: '',
            body: ''
        },
        noBillingInfo: {
            title: '',
            body: ''
        },
        confirmDelete: {
            title: '',
            body: ''
        },
        largeImages: {},
        smallImages: {},
        imageForegroundTextColors: {},
        cardsTitle: '',
        eftsTitle: '',
        updateBillingInfoTitle: ''
    };
    public showSubControllerContents = () => { };

    private parseIcon({ ItemName, TertiaryImage, Image, Parameters }: CmsBillingIcon) {

        const key = ItemName.slice(0, 1).toUpperCase();

        return {
            largeImages: { [key]: `url(${this.cmsUtilService.generateFileSrc(TertiaryImage)})` },
            smallImages: { [key]: this.cmsUtilService.generateFileSrc(Image) },
            imageForegroundTextColors: { [key]: this.stringUtils.getParameterObject(Parameters).foregroundTextColor }
        };
    }

    private parseBillingInformation({ Children, ShortDescription }: CmsBillingPage) {
        const {
            Cards,
            'Bank Accounts': bankAccounts,
            'Confirm Changes': confirmChanges,
            'Billing Information Update': billInfoUpdate,
            'No Billing Information Popup': noBillInfo,
            //'Delete Payment Method': deletePayment
        } = Children
            .map(child => ({ [child.ItemName]: child }))
            .reduce((acc, curr) => ({ ...acc, ...curr }), {});

        return {
            updateBillingInfoTitle: ShortDescription,
            cardsTitle: Cards.Title,
            eftsTitle: bankAccounts.Title,
            confirmMakePrimary: {
                title: confirmChanges.Title,
                body: confirmChanges.PrimaryContent
            },
            updateSuccessfull: {
                title: billInfoUpdate.Title,
                body: billInfoUpdate.PrimaryContent
            },
            noBillingInfo: {
                title: noBillInfo.Title,
                body: noBillInfo.PrimaryContent
            }
        };
    }

    private parseExpiredCardPopup({ PrimaryContent }: CmsExpiredCardPopup) {
        return {
            alertTooltip: { body: PrimaryContent }
        };
    }

    private parseAlertImage({ SecondaryImage }: CmsAlertImage) {
        return {
            alertTooltip: { image: this.cmsUtilService.generateFileSrc(SecondaryImage) }
        };
    };

    private parse(cmsItemId: string, rawCmsContent: CmsBillingIcon | CmsBillingPage | CmsExpiredCardPopup | CmsAlertImage) {

        switch (cmsItemId) {

            case this.routes.amexIcon:
            case this.routes.discoverIcon:
            case this.routes.masterCardIcon:
            case this.routes.bankIcon:
            case this.routes.visaIcon:
                return this.parseIcon(rawCmsContent as CmsBillingIcon);

            case this.routes.manageBillingInformationCmsContent:
                return this.parseBillingInformation(rawCmsContent as CmsBillingPage);

            case this.routes.expiredCardPopup:
                return this.parseExpiredCardPopup(rawCmsContent as CmsExpiredCardPopup);

            case this.routes.alertImage:
                return this.parseAlertImage(rawCmsContent as CmsAlertImage);

            default:
                return {};
        }
    }

    private parseCmsContent(allItemIds: string[], responses: any[]) {
        return responses
            .map(({ cmsResponse }) => JSON.parse(cmsResponse))
            .map((rawCmsContent, index) =>
            ({
                cmsItemId: allItemIds[index],
                rawCmsContent
            })
            )
            .map(({ cmsItemId, rawCmsContent }) => this.parse(cmsItemId, rawCmsContent))
            .reduce((acc, parsedContent) => merge({}, acc, parsedContent), {});
    }

    public async fetchCmsContent() {

        const allItemIds = [
            this.routes.amexIcon,
            this.routes.discoverIcon,
            this.routes.masterCardIcon,
            this.routes.bankIcon,
            this.routes.visaIcon,
            this.routes.manageBillingInformationCmsContent,
            this.routes.expiredCardPopup,
            this.routes.alertImage // TODO: Replace instances of this alertImage with <mat-icon svgIcon="alert"></mat-icon>
        ];

        const response = await this.genericRepo.dataFactory.getCmsPagesByIds({ requests: allItemIds.map(itemId => ({ itemId })) });

        if (this.responseErrorService.isErrorFree(response)) {

            merge(this.cmsContent, this.parseCmsContent(allItemIds, response.responses));
        }
    }

    public triggerShowSubControllerContents() {
        //Show SubController Contents after state change or else kiosk behaves weird
        //Mobile view is triggered the same way for the sake of consistency
        this.showSubControllerContents();
        this.showSubControllerContents = () => { };
    }

    public async refreshBillingInfo(unselected: number[]) {

        const response = await this.genericRepo.dataFactory.getAllPaymentMethods();

        //Delete existing billing information
        Object.keys(this.billingInformation || {}).forEach(key => delete this.billingInformation[key]);

        if (this.responseErrorService.isErrorFree(response) && this.billingInformation) {

            extend(this.billingInformation, this.billingDataService.getBillingInformationFrom(response));

            this.makeSelection(this.billingInformation.allPaymentContainers, unselected);

            if (response.isAccountInvoiced) {
                await this.editInvoicedMessageService.setPhoneNumberDisplay(this.phoneNumbers.invoicedAccountSupport.display).invoicedMessage();
                return;
            }
        }
    }

    private makeSelection(allPaymentContainers: PaymentContainer[], unselected: number[]) {
        const previouslySelectedPaymentMethodContainer =
            allPaymentContainers
                .find(container => unselected && !unselected.includes(container.paymentMethod.accountBillingMethodId));
        const primaryPaymentContainer = allPaymentContainers.find(container => container.isPrimary);
        const firstPaymentContainer = allPaymentContainers[0];

        this.select(previouslySelectedPaymentMethodContainer || primaryPaymentContainer || firstPaymentContainer, false);

    }

    public select(paymentContainer: PaymentContainer, isMobile: boolean) {

        if (!isObject(paymentContainer)) {
            return;
        }

        const isMobileUnselect = isMobile && paymentContainer.isSelected;

        if (isMobileUnselect) {

            paymentContainer.isSelected = false;
            this.billingInformation.selected = null;
        } else {

            this.billingInformation.allPaymentContainers.forEach(curr => curr.isSelected = false);
            paymentContainer.isSelected = true;
            this.billingInformation.selected = paymentContainer;
        }
    }

    private getUnselectedBillingMethodIds(allPaymentContainers: PaymentContainer[], selectedAccountBillingMethodId: number) {
        return allPaymentContainers
            .map(container => container.paymentMethod.accountBillingMethodId)
            .filter(accountBillingMethodId => accountBillingMethodId !== selectedAccountBillingMethodId);

    }

    public returnToManageBillingInformationPage = () => {

        if (this.inChildState) { this.window.history.go(-1); }
    };
}
