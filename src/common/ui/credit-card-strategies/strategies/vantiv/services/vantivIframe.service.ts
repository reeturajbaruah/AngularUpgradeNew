import { Inject, Injectable, InjectionToken, Provider } from '@angular/core';
import { WindowRef } from 'common/providers';
import { GenericRepoService, ToasterService } from 'common/services';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { SiteVerbiage } from '../../../../../../constants/siteVerbiage.constants';
import { ToggleButtonsService } from '../../../../../services/toggleButtons/toggleButtons.service';


//declare var EprotectIframeClient: any;
export const VANTIV_EPROTECT = new InjectionToken('EprotectIframeClient');

export const VantivEprotectProvider: Provider = {
    provide: VANTIV_EPROTECT,
    deps: [WindowRef],
    useFactory: (window: Window) => {
        if ('EprotectIframeClient' in window) {
            const EprotectIframeClient: new (config: any) => any = window['EprotectIframeClient'];
            return (config: any) => new EprotectIframeClient(config);
        }
        return undefined;
    }
};


interface VantivResponse {
    bin: string;
    firstSix: string;
    id: string;
    lastFour: string;
    litleTxnId: string;
    vantivTxnId: string;
    message: string;
    orderId: string;
    paypageRegistrationId: string;
    reportGroup: string;
    response: string;
    responseTime: string;
    targetServer: string;
    type: string;
    timeout: boolean;
}

interface Defered<T> {
    resolve: (value: T) => void;
    reject: (value: any) => void;
    message?: any;
};

@Injectable()
export class VantivIFrameService {

    constructor(
        @Inject(ENVIRON_CONFIG) private environmentConfig,
        private genericRepoService: GenericRepoService,
        private siteVerbiage: SiteVerbiage,
        private toggleButtonsService: ToggleButtonsService,
        @Inject(VANTIV_EPROTECT) private vantiveEprotectClientFactory: (config: any) => any,
        private toasterService: ToasterService) {
    }

    private payframeClient;
    private getPaypageRegistrationIdDefered: Defered<VantivResponse> = {} as any;
    private allInputsEmptyDefered: Defered<boolean> = {} as any;


    getConfiguration = (
        style: string,
        height: string,
        iFrameDiv: string,
        existingCreditCardNumber: string,
        payframeClientCallback,
        inputsEmptyCallback) => ({
            paypageId: this.environmentConfig.vantivConfig.PayPageID,
            reportGroup: this.environmentConfig.vantivConfig.ReportGroup,
            style,
            height,
            timeout: this.environmentConfig.vantivConfig.TimeoutMilliSeconds,
            div: iFrameDiv,
            callback: payframeClientCallback,
            inputsEmptyCallback,
            showCvv: false,
            htmlTimeout: this.environmentConfig.vantivConfig.TimeoutMilliSeconds,
            placeholderText: {
                accountNumber: existingCreditCardNumber
            },
            enhancedUxFeatures: {
                inlineFieldValidations: true,
                numericInputsOnly: true
            }
        });

    //Not testable
    private generateSeedDate = (): Date => new Date();

    private generatePseudoRandomNumber = (seedDate: Date) =>
        Date.UTC(
            seedDate.getUTCFullYear(),
            seedDate.getUTCMonth(),
            seedDate.getUTCDate(),
            seedDate.getUTCHours(),
            seedDate.getUTCMinutes(),
            seedDate.getUTCSeconds(),
            seedDate.getMilliseconds());

    private getMessage = (randomNumber: number): { id: string; orderId: number } => ({
        id: 'T' + randomNumber.toString(),
        orderId: randomNumber
    });

    private logRequest = message => {

        if (!this.environmentConfig.vantivConfig.InfoToggle) {
            return;
        }

        this.genericRepoService.dataFactory.LogVantivRequest({
            paypageId: this.environmentConfig.vantivConfig.PayPageID,
            reportGroup: this.environmentConfig.vantivConfig.ReportGroup,
            requestId: message.id,
            orderId: message.orderId,
            url: this.environmentConfig.vantivConfig.IFrameUrl,
            violationsData: null 
        });
    };

    private isSuccess = ({ response }: VantivResponse) => response === '870';

    private isTimeoutError = (response: VantivResponse): boolean =>
        response.response === '884' || response.timeout || false;

    private isResponseToBeLogged = (response: VantivResponse): boolean =>
        this.environmentConfig.vantivConfig.InfoToggle
        || this.environmentConfig.vantivConfig.ErrorToggle
        && !this.isSuccess(response) || false;

    private logResponse = (response, message) => {

        if (!this.isResponseToBeLogged(response)) {
            return;
        }

        this.genericRepoService.dataFactory.LogVantivResponse({
            id: message.id,
            orderId: message.orderId,
            reportGroup: this.environmentConfig.vantivConfig.ReportGroup,
            response: response.response,
            message: response.timeout ? 'Request for Paypage Registration Id Timed Out' : response.message,
            responseTime: response.responseTime,
            vantivTxnId: response.vantivTxnId,
            paypageRegistrationId: response.paypageRegistrationId,
            targetServer: response.targetServer,
            type: response.type,
            isError: !this.isSuccess(response),
            violationsData: null
        });

    };

    private prepCallback<T>(action: () => any, defered: Defered<T>, message = null) {

        return new Promise<T>((resolve, reject) => {
            defered.resolve = resolve;
            defered.reject = reject;
            defered.message = message ? Object.assign({}, message) : null;

            if (action) {
                action();
            }
        });
    }

    private payframeClientCallback = (response: VantivResponse) => {


        if (this.getPaypageRegistrationIdDefered.message) {
            this.logResponse(response, this.getPaypageRegistrationIdDefered.message);
        }

        if (this.isTimeoutError(response) || ['875', '889'].indexOf(response.response) > -1) {
            this.toasterService.show('Error', this.siteVerbiage.genericErrorMsg);
        }

        if (this.isSuccess(response) && this.getPaypageRegistrationIdDefered.resolve) {
            this.getPaypageRegistrationIdDefered.resolve(response);
        } else if (this.getPaypageRegistrationIdDefered.reject) {
            this.getPaypageRegistrationIdDefered.reject(response);
        }

        this.getPaypageRegistrationIdDefered = {} as any;
    };

    private inputEmptyCallback = ({ allInputsEmpty }: { allInputsEmpty: boolean }) => {
        if (this.allInputsEmptyDefered.resolve) {
            this.allInputsEmptyDefered.resolve(allInputsEmpty);
        }
        this.allInputsEmptyDefered = {} as any;
    };

    loadIFrame = (style: string, height: string, containerId: string, existingCreditCardNumber: string) => {
        const configuration = this.getConfiguration(style, height, containerId, existingCreditCardNumber,
            this.payframeClientCallback,
            this.inputEmptyCallback);

        this.payframeClient = this.vantiveEprotectClientFactory(configuration);
    };

    getPaypageRegistrationId = () => {
        const seedDate = this.generateSeedDate();
        const randomNumber = this.generatePseudoRandomNumber(seedDate);
        const message = this.getMessage(randomNumber);
        this.logRequest(message);

        const promise = this.prepCallback<VantivResponse>(
            () => this.payframeClient.getPaypageRegistrationId(message),
            this.getPaypageRegistrationIdDefered, message);
        this.toggleButtonsService.disableUntilResolved(promise);
        return promise;
    };

    isAllEmpty = () => this.prepCallback<boolean>(() => this.payframeClient.allInputsEmpty(), this.allInputsEmptyDefered);

}

