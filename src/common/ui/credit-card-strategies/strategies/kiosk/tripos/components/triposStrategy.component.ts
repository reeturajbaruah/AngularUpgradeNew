import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SiteCoreItem } from 'cms/cms.module';
import { CmsUtilService } from 'cms/services';
import { CreditCardDetails } from 'common/models';
import { WindowRef } from 'common/providers';
import { GenericRepoService, ToasterService, VantivPaymentService } from 'common/services';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { UrlPaths } from 'constants/module';
import { CreditCardHelperService, CreditCardStateService, IState } from '../../../../services';
import { CreditCardInputStrategy } from '../../../../model';
import { CreditCardTypeService } from 'common/billing';
import { StorefrontUtilityService } from 'storefront/services/storefrontUtility.service';
import { StorefrontModalService } from 'storefront/services/modal.service';
import { cmsIds } from 'storefront/constants';
import { ICreditCardDialogInjectedValues } from 'storefront/credit-card-dialog/credit-card-dialog.component';
import { BehaviorSubject } from 'rxjs';

export enum CreditCardPromptEnum {
    Wait, Success, Failure
}

@Component({
    selector: 'tripos-strategy',
    templateUrl: './triposStrategy.html',
    viewProviders: [
        { provide: ControlContainer, useExisting: NgForm }
    ]
})
export class TriPosStrategyComponent implements OnInit, CreditCardInputStrategy, OnDestroy {

    //@host decorator was removed for parent due to issue with Ivy. see https://github.com/angular/angular/issues/31539
    constructor(
        private vantivPaymentService: VantivPaymentService,
        private storefrontUtilityService: StorefrontUtilityService,
        private storefrontModalService: StorefrontModalService,
        private genericRepo: GenericRepoService,
        private cmsUtilService: CmsUtilService,
        @Inject(WindowRef) private window: Window,
        private routes: UrlPaths,
        @Inject(ENVIRON_CONFIG) private environmentConfig,
        private creditCardTypeService: CreditCardTypeService,
        private toasterService: ToasterService,
        private creditCardStateService: CreditCardStateService,
        private creditCardHelperService: CreditCardHelperService,
    ) { }

    private inUse = false;
    cardNumberDisplay: string;
    isActive: boolean;
    allowCcInput: boolean;
    getCardNameFromTriPos: boolean;
    editPencilSrc: string;
    editPencilMessage: string;
    detectedCreditCardNameChange = false;
    oldNameOnCard: string = null;
    oldNumberOnCard: string = null;
    nameSuffix: string;
    creditCard: CreditCardDetails;
    disableValidation: boolean;
    creditCardState: IState;

    ngOnInit() {
        this.init();
        this.setup();
    }

    private init() {
        this.creditCardState = this.creditCardStateService.getState();
        if (this.creditCardState) {
            this.nameSuffix = this.creditCardState.nameSuffix;
            this.creditCard = this.creditCardState.creditCard;
            this.disableValidation = this.creditCardState.disableValidation;

        }
    }

    setData = (data: any): void => {
        this.isActive = data.isActive;
        this.allowCcInput = data.allowCcInput;
        this.getCardNameFromTriPos = data.getCardNameFromTriPos;
    };

    setup = (): Promise<any> => {

        this.creditCardStateService.setState({
            creditCard: this.creditCardState.creditCard,
            disableValidation: this.creditCardState.disableValidation,
            nameSuffix: this.creditCardState.nameSuffix,
            config: this.creditCardState.config ? {
                useExistingCard: true,

                expMonthDisabled: true,
                expYearDisabled: true
            } : null

        });

        this.oldNameOnCard = this.creditCard.nameOnCard;
        this.oldNumberOnCard = this.creditCard.cardNbr;

        return this.genericRepo
            .dataFactory
            .getCmsPageById({
                ItemId: this.routes.triposEditCreditCardId,
                Fields: 'Image,Message'
            })
            .then(({ cmsResponse }) => {
                const obj = JSON.parse(cmsResponse) as SiteCoreItem;
                const img = this.cmsUtilService.parseAllImageAttributes(obj.Image);
                this.editPencilSrc = img.image;
                this.editPencilMessage = obj.Message;
            });
    };

    tryTokenize = (): void => {
        this.tokenize().catch(e => { });
    };

    tokenize = (): Promise<boolean> => new Promise((resolve, reject) => {
        if (!this.isActive) {
            this.inUse = false;
            this.toasterService.show('Warning', 'Terminal cannot accept credit card info at this time');
            reject();
            return;
        }

        if (this.inUse) {
            reject();
            return;
        }

        this.inUse = true;

        let modalTimeoutId = null;

        //
        const injectedData = { state: CreditCardPromptEnum.Wait, isSnapPay: false, closeDialog: new BehaviorSubject<boolean>(false) } as ICreditCardDialogInjectedValues;

        //Pre-load data to minimize delays
        const requests = [];
        for (const itemId of [cmsIds.CloseModalImgId, cmsIds.swipePromptId, cmsIds.swipePromptAltId, cmsIds.swipeSuccessId, cmsIds.swipeFailureId]) {
            requests.push({ itemId });
        }
        this.genericRepo.dataFactory.getCmsPagesByIds({ requests }).then((val) => {
            const parsedResponses = [];
            for (const res of val.responses) {
                parsedResponses.push(JSON.parse(res.cmsResponse));
            }

            injectedData.cmsData = parsedResponses;

            this.storefrontModalService.showCreditCardPrompt(injectedData).then((handled) => {
                if (handled === 'close') {
                    this.inUse = false;
                    if (modalTimeoutId) {
                        this.window.clearTimeout(modalTimeoutId);
                        modalTimeoutId = null;
                    };
                } else { //try again
                    this.inUse = false;
                    this.window.setTimeout(() => {
                        this.tokenize().then(resolve, reject);
                    }, 250);
                }
            });

            this.genericRepo
                .dataFactory
                .TriPosConfiguration(this.storefrontUtilityService.machineName ||
                    this.environmentConfig.storefrontConfigs.DefaultMachineName)
                .then(config => this.vantivPaymentService.getTokenizedCreditCardData(config, false))
                .then((response) => {

                    //if modal is closed before swipe is completed, throw away result
                    if (!this.inUse) {
                        resolve(false);
                        return;
                    }

                    if (response.cancelledByUser) {
                        if (modalTimeoutId) {
                            this.window.clearTimeout(modalTimeoutId);
                            modalTimeoutId = null;
                        }
                        injectedData.closeDialog.next(true);
                        resolve(false);
                        return;
                    }

                    injectedData.state = CreditCardPromptEnum.Success;

                    //splits the lastname/firstname input from vantiv and reverses order
                    const cardName = this.getCardNameFromTriPos
                        ? (response.cardHolderName || '').split(/[\/\\]+/).reverse().join(' ')
                        : '';

                    this.creditCard.omniToken = response.tokenId;
                    this.creditCard.cardNbr = response.accountNumber;
                    this.creditCard.cardCode = response.cardLogo.toUpperCase().slice(0, 1);
                    this.creditCard.cardTypeDisplay = this.creditCardTypeService.cardCodeToName(this.creditCard.cardCode);
                    this.creditCard.expMonth = +response.expirationMonth;
                    this.creditCard.expYear = +(response.expirationYear.length === 2 ? '20' : '').concat(
                        '' + response.expirationYear);
                    this.creditCard.isNewCard = true;

                    if (!this.detectedCreditCardNameChange) {
                        this.creditCard.nameOnCard = cardName;
                    }

                    modalTimeoutId = this.window.setTimeout(
                        () => injectedData.closeDialog.next(true),
                        this.storefrontUtilityService.delay.long);

                    resolve(true);
                })
                .catch((e) => {
                    injectedData.state = CreditCardPromptEnum.Failure;
                    reject();
                })
                .finally(() => this.inUse = false);
        });
    });

    submit = (): Promise<boolean> => Promise.resolve(true);


    onCardNumberChange() {
        this.cardNumberDisplay = this.creditCardHelperService.maskNumber(this.creditCard);
    }

    ngOnDestroy() {
        this.tearDown();
    }

    tearDown = (): void => {
    };
}
