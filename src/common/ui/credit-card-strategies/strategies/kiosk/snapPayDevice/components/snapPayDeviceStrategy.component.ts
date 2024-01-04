import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CmsUtilService } from 'cms/services';
import { CmsBundler } from 'cms/services/cmsBundler/cmsBundler.service';
import { CreditCardTypeService } from 'common/billing';
import { CreditCardDetails } from 'common/models';
import { WindowRef } from 'common/providers';
import { GenericRepoService, ToasterService } from 'common/services';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { UrlPaths } from 'constants/module';
import { CreditCardInputStrategy } from '../../../../model';
import { CreditCardHelperService, CreditCardStateService, IState } from '../../../../services';
import { CreditCardEntryComponent, } from '../../../../../form-entry/creditCardEntry/creditCardEntry.component';
import { CreditCardPromptEnum } from '../..';
import { SnapPayDeviceStrategyFacadeService } from '../services/facade/snapPayDeviceStrategy-facade.service';
import { StorefrontUtilityService } from 'storefront/services/storefrontUtility.service';
import { cmsIds } from 'storefront/constants';
import { StorefrontModalService } from '../../../../../../../storefront/services/modal.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ICreditCardDialogInjectedValues } from 'storefront/credit-card-dialog/credit-card-dialog.component';

@Component({
    selector: 'snappay-device-strategy',
    templateUrl: './snapPayDeviceStrategy.component.html',
    viewProviders: [
        { provide: ControlContainer, useExisting: NgForm }
    ]
})
export class SnapPayDeviceStrategyComponent implements OnInit, CreditCardInputStrategy, OnDestroy {

    private inUse: boolean;
    strategyActive: boolean;
    isActive: boolean;
    allowCcInput: boolean;
    detectedCreditCardNameChange: boolean;
    getCardNameFromDevice = true;

    private sessionKey: string;
    editPencilMessage: string;
    oldNameOnCard: string = null;
    oldNumberOnCard: string = null;
    editPencilSrc: string;
    cardNumberDisplay: string;
    nameSuffix: string;
    creditCard: CreditCardDetails;
    disableValidation: boolean;
    creditCardState: IState;

    constructor(
        private parent: CreditCardEntryComponent,
        private storefrontUtilityService: StorefrontUtilityService,
        private storefrontModalService: StorefrontModalService,
        protected httpClient: HttpClient,
        private cmsUtilService: CmsUtilService,
        @Inject(WindowRef) private window: Window,
        private routes: UrlPaths,
        @Inject(ENVIRON_CONFIG) private environmentConfig,
        private creditCardConversionService: CreditCardTypeService,
        private cmsBundler: CmsBundler,
        private toasterService: ToasterService,
        private creditCardStateService: CreditCardStateService,
        private creditCardHelperService: CreditCardHelperService,
        private snapPayDeviceStrategyFacadeService: SnapPayDeviceStrategyFacadeService,
        private genericRepo: GenericRepoService
    ) { }

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
        this.getCardNameFromDevice = data.getCardNameFromDevice;
    };

    setup = async (): Promise<any> => {
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

        if (!this.isActive && !this.allowCcInput) {
            this.toasterService.show('Warning', 'Credit card input is disabled');
        }

        const machineName = this.storefrontUtilityService.machineName || this.environmentConfig.storefrontConfigs.DefaultMachineName;
        //No need to log errors here as we are logging errors in our APIs
        await this.snapPayDeviceStrategyFacadeService.postCreateSession(machineName).then((sessionResponse) => {
            const responseBody = sessionResponse.body;
            this.sessionKey = responseBody.sessionKey;
        }).catch(r => r);

        const response = await this.cmsBundler
            .getCmsItemById({
                ItemId: this.routes.triposEditCreditCardId,
                Fields: 'Image,Message'
            } as any);

        const cmsResponse = JSON.parse((response as any).cmsResponse);
        const img = this.cmsUtilService.parseAllImageAttributes(cmsResponse.Image);
        this.editPencilSrc = img.image;
        this.editPencilMessage = cmsResponse.Message;
    };



    trySwipeTokenize = (): void => {
        this.tokenizeCard().catch(e => { });
    };

    tryPinPadTokenize = (): void => {
        this.tokenizePinPad().catch(e => { });
    };

    private tokenizeCard = (): Promise<boolean> => new Promise(async (resolve, reject) => {
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

        const injectedData = { state: CreditCardPromptEnum.Wait, isSnapPay: true, closeDialog: new BehaviorSubject<boolean>(false) } as ICreditCardDialogInjectedValues;

        //Pre-load data to minimize delays
        const requests = [];
        for (const itemId of [cmsIds.CloseModalImgId, cmsIds.swipePromptId, cmsIds.SnappayKioskSwipePromptAltId, cmsIds.swipeSuccessId, cmsIds.swipeFailureId]) {
            requests.push({ itemId });
        }
        this.genericRepo.dataFactory.getCmsPagesByIds({ requests }).then(async (response) => {
            const parsedResponses = [];
            for (const res of response.responses) {
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
                        this.tokenizeCard().then(resolve, reject);
                    }, 250);
                }
            });

            const machineName = this.storefrontUtilityService.machineName || this.environmentConfig.storefrontConfigs.DefaultMachineName;

            await this.snapPayDeviceStrategyFacadeService.postRequestCard(machineName, this.sessionKey).then((tokenizeResponse) => {

                if (!tokenizeResponse.ok) {
                    //No need to log errors here as we are logging errors in our APIs
                    injectedData.state = CreditCardPromptEnum.Failure;
                    this.inUse = false;
                    reject();
                    return;
                }

                const { name, token, expiry, errorCode, errors, cardCode } = tokenizeResponse.body;

                //if modal is closed before swipe is completed, throw away result
                if (!this.inUse) {
                    resolve(false);
                    return;
                }

                if (errorCode === '8') {//user pressed the cancel button
                    if (modalTimeoutId) {
                        this.window.clearTimeout(modalTimeoutId);
                        modalTimeoutId = null;
                    }
                    injectedData.closeDialog.next(true);
                    resolve(false);
                    return;
                }

                //Will need to investigate other possible error codes
                if (errorCode || errors?.length) {
                    resolve(false);
                    return;
                }

                injectedData.state = CreditCardPromptEnum.Success;
                //splits the lastname/firstname input and reverses order
                const cardName = this.getCardNameFromDevice ? (name.split('/').reverse().join(' ') || '') : '';
                this.creditCard.omniToken = token;
                this.creditCard.cardNbr = token.slice(-4);
                this.creditCard.cardCode = cardCode;
                this.creditCard.cardTypeDisplay = this.creditCardConversionService.cardCodeToName(this.creditCard.cardCode);
                this.creditCard.expMonth = +(expiry.substring(0, 2));
                this.creditCard.expYear = +('20' + expiry.substring(2));
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

    private tokenizePinPad = (): Promise<boolean> => new Promise(async (resolve, reject) => {
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

        const injectedData = { state: CreditCardPromptEnum.Wait, isSnapPay: true, closeDialog: new BehaviorSubject<boolean>(false) } as ICreditCardDialogInjectedValues;

        //Pre-load data to minimize delays
        const requests = [];
        for (const itemId of [cmsIds.CloseModalImgId, cmsIds.swipePromptId, cmsIds.SnappayKioskSwipePromptAltId, cmsIds.swipeSuccessId, cmsIds.swipeFailureId]) {
            requests.push({ itemId });
        }
        this.genericRepo.dataFactory.getCmsPagesByIds({ requests }).then(async (response) => {
            const parsedResponses = [];
            for (const res of response.responses) {
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
                        this.tokenizePinPad().then(resolve, reject);
                    }, 250);
                }
            });

            const machineName = this.storefrontUtilityService.machineName || this.environmentConfig.storefrontConfigs.DefaultMachineName;

            await this.snapPayDeviceStrategyFacadeService.postPinPad(machineName, this.sessionKey).then((tokenizeResponse) => {

                if (!tokenizeResponse.ok) {
                    //No need to log errors here as we are logging errors in our APIs
                    injectedData.state = CreditCardPromptEnum.Failure;
                    this.inUse = false;
                    reject();
                    return;
                }

                const { name, token, expiry, errorCode, errors, cardCode } = tokenizeResponse.body;

                //if modal is closed before swipe is completed, throw away result
                if (!this.inUse) {
                    resolve(false);
                    return;
                }

                if (errorCode === '8') {//user pressed the cancel button
                    if (modalTimeoutId) {
                        this.window.clearTimeout(modalTimeoutId);
                        modalTimeoutId = null;
                    }
                    injectedData.closeDialog.next(true);
                    resolve(false);
                    return;
                }

                //Will need to investigate other possible error codes
                if (errorCode || errors?.length) {
                    resolve(false);
                    return;
                }

                injectedData.state = CreditCardPromptEnum.Success;
                //pinpad won't have name
                //const cardName = this.getCardNameFromDevice ? (name.split('/').reverse().join(' ') || '') : '';
                this.creditCard.omniToken = token;
                this.creditCard.cardNbr = token.slice(-4);
                this.creditCard.cardCode = cardCode;
                this.creditCard.cardTypeDisplay = this.creditCardConversionService.cardCodeToName(this.creditCard.cardCode);
                this.creditCard.expMonth = +(expiry.substring(0, 2));
                this.creditCard.expYear = +('20' + expiry.substring(2));
                this.creditCard.isNewCard = true;

                //pinpad won't have name
                //if (!this.detectedCreditCardNameChange) {
                //    this.creditCard.nameOnCard = cardName;
                //}

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

    update = (): Promise<any> => {
        if (!this.isActive) {
            return Promise.reject('terminal cannot accept credit card info at this time');
        }

        //detects pre-swipe change in name to not allow tripos response to override it
        if (this.oldNameOnCard !== this.creditCard.nameOnCard) {
            this.detectedCreditCardNameChange = true;
        }

        //detect change in card number to signal card has changed
        if (this.oldNumberOnCard !== this.creditCard.cardNbr) {
            this.parent.useExistingCard = false;
        }

        return Promise.resolve();
    };

    onCardNumberChange() {
        this.cardNumberDisplay = this.creditCardHelperService.maskNumber(this.creditCard);
    }

    ngOnDestroy() {
        this.tearDown();
    }

    tearDown = async (): Promise<void> => {
        const machineName = this.storefrontUtilityService.machineName || this.environmentConfig.storefrontConfigs.DefaultMachineName;
        //According to Tim, No need to log errors here as we are logging errors in our APIs.
        const tokenizeResponse = await this.snapPayDeviceStrategyFacadeService.postEndSession(machineName, this.sessionKey)
            .catch(r => r)
            .finally(() => this.sessionKey = null);
    };
}
