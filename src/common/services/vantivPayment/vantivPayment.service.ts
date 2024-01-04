declare var LitlePayPage: any; // eslint-disable-line no-var

import { Injectable, Inject } from '@angular/core';
import { ToasterService } from '../toasterService/toaster.service';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { CreditCardType, VantivDto, VantivRequestLog, VantivResponse, VantivResponseLog, VantivTriPosConfiguration, VantivTriPosCreateOmniTokenResponse } from 'common/models';
import { cloneDeep } from 'lodash';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { GenericRepoService } from '../genericRepo/genericRepo.service';
import { StorefrontUtilityService } from '../../../storefront/services/storefrontUtility.service';
import { SiteVerbiage } from '../../../constants/siteVerbiage.constants';

@Injectable()
export class VantivPaymentService {

    private static idCounter = 0;
    private timeoutData: VantivResponseLog;

    constructor(
        private toasterService: ToasterService,
        private genericRepoService: GenericRepoService,
        @Inject(ENVIRON_CONFIG) private environmentConfig: any,
        private siteVerbiage: SiteVerbiage,
        private httpClient: HttpClient,
        private storefrontUtilityService: StorefrontUtilityService,
        @Inject(DOCUMENT) private document: Document
    ) { }

    private logVantivData(logObj: VantivRequestLog | VantivResponseLog, isError: boolean): void {

        if ((this.environmentConfig.vantivConfig.ErrorToggle && isError) || this.environmentConfig.vantivConfig.InfoToggle) {

            const logRequest = cloneDeep(logObj);

            if (this.isVantivRequestLog(logRequest)) {
                this.genericRepoService.dataFactory.LogVantivRequest(logRequest);
            } else {
                logRequest.isError = isError;
                this.genericRepoService.dataFactory.LogVantivResponse(logRequest);
            }
        }
    }

    private isVantivRequestLog(log: any): log is VantivRequestLog {
        return ((log as VantivRequestLog).requestId) !== undefined;
    };

    public async vantivPay(creditCardNumber: string): Promise<any> {
        const paypageId = this.environmentConfig.vantivConfig.PayPageID;
        const reportGroup = this.environmentConfig.vantivConfig.ReportGroup;
        const now = new Date();
        const orderIdNbr = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getMilliseconds());
        const mTxnID = 'T' + orderIdNbr.toString();
        const litleRequest = {
            paypageId,
            reportGroup,
            orderId: orderIdNbr,
            id: mTxnID,
            url: this.environmentConfig.vantivConfig.PayPageUrl // 'https://request-prelive.np-securepaypage-litle.com'//vantivRequest.url
        };

        // Right before sending to Vantiv, inject the input element and populate the value with credit card number as in memory
        const ccElementId = this.generateElementId();

        this.document.querySelector('body').append(`<input id="${ccElementId}" type="hidden" value="${creditCardNumber}" />`);

        const injectedCreditCardElement = this.document.getElementById(ccElementId);
        const formFields = {
            accountNum: injectedCreditCardElement,
            cvv2: '',
            paypageRegistrationId: '',
            bin: ''
        };

        this.logVantivData(this.vantivRequestObjectForLogging(litleRequest), false);

        const promise = new Promise<any>((resolve, reject) => {
            new LitlePayPage().sendToLitle(litleRequest, formFields, resolve, reject, () => { this.timeoutOnLitle(reject); }, this.environmentConfig.vantivConfig.TimeoutMilliSeconds);
        });

        // TODO: inject hidden input vantivCreditCard field in current html with no value
        // Right before sending to Vantiv, inject the input element and populate the value with credit card number as in memory
        try {
            const res: VantivResponse = await promise;

            this.logVantivData(this.vantivResponseObjectForLogging(res), false);

            const vantivDto = new VantivDto(res.lastFour, res.paypageRegistrationId);

            return Promise.resolve(vantivDto);
        } catch (err) {
            let errorMessage: string;

            if (err.isErrorLogged) {
                errorMessage = this.siteVerbiage.genericErrorMsg;
            } else {
                errorMessage = this.onErrorAfterLitle(err);

                this.toasterService.show('Error', errorMessage);
            }

            return Promise.reject<string>(errorMessage);
        } finally {
            injectedCreditCardElement.remove();
        }
    };

    public async getTokenizedCreditCardData(config: VantivTriPosConfiguration, invokeManualEntry: boolean): Promise<VantivTriPosCreateOmniTokenResponse> {
        if (config.errors && config.errors.length > 0) {
            return Promise.reject(config);
        }

        const url = config.url.replace(/\/$/, '') + '/token/omni';

        //create header object scoped to this method
        const headers = {
            'tp-application-id': config.applicationId || '',
            'tp-application-name': config.applicationName || '',
            'tp-application-version': config.applicationVersion || '',
            'tp-authorization': config.authorization || '',
            'tp-express-acceptor-id': config.acceptorId || '',
            'tp-express-account-id': config.accountId || '',
            'tp-express-account-token': config.accountToken || '',
            'tp-request-id': config.requestId || '',
            'tp-return-logs': 'true'
        };

        const data = {
            laneId: config.laneId,
            vaultId: config.vaultId,
            invokeManualEntry
        };

        //destroy credentials
        delete config.applicationId;
        delete config.applicationName;
        delete config.applicationVersion;
        delete config.authorization;
        delete config.acceptorId;
        delete config.accountId;
        delete config.accountToken;
        delete config.url;
        delete config.laneId;
        delete config.vaultId;

        const response = await (
            firstValueFrom(this.httpClient.post<VantivTriPosCreateOmniTokenResponse>(url, data, {
                observe: 'response',
                headers,
                withCredentials: false
            }))
                .catch(body => body));

        if (response.ok) {
            let responseData: any = response.body;

            const log = this.buildRequestObjForLogging({
                config: { data, headers, method: 'POST', url },
                data: responseData,
                status: response.status
            });

            if (!responseData) {
                const xhrStatusError = (response.statusText || '').toLowerCase() === 'unknown error';

                log.isError = true;
                log.message = xhrStatusError
                    ? 'Vantiv responded with no data with error status. This may be a possible CORS error.'
                    : 'Vantiv responded with no data and no error status.';

                responseData = { errors: [], _errors: [], cardLogo: '' } as any;
            }

            const wasCancelled = log.isError &&
                responseData['_errors'].some(e => (e.exceptionMessage || '').indexOf('cancelled response') > -1);

            responseData.cancelledByUser = wasCancelled;

            if (wasCancelled) {
                log.isError = false;
            }

            if (responseData.cardLogo && !Object.keys(CreditCardType).includes(responseData.cardLogo.toLowerCase())) {
                log.message = `Kiosk does not support '${responseData.cardLogo}' cards`;
                log.isError = true;
            }

            console.log(log);

            this.genericRepoService.dataFactory.TriPosLog(log);

            return log.isError ? Promise.reject(responseData) : Promise.resolve(responseData);
        } else {

            const log = {
                isError: true,
                message:
                    (response.statusText || '').toLowerCase() === 'unknown error'
                        ? 'A error occured when contacting Vantivs API. This may be a possible CORS error.'
                        : 'A error occured when contacting Vantivs API',
                machineName: this.storefrontUtilityService.machineName,
                rawData: JSON.stringify(response.body)
            };

            console.log(log);

            this.genericRepoService.dataFactory.TriPosLog(log);

            return Promise.reject();
        }

    };

    public buildRequestObjForLogging(responseObject: any): any {
        const { config, data, status } = responseObject;
        const cleanHeaders = { ...config.headers, 'tp-express-account-token': '****' };
        const cleanConfig = { data: config.data, headers: cleanHeaders, method: config.method, url: config.url };
        const cleanData = data ? { ...data, binValue: '****', expirationMonth: '**', expirationYear: '**', tokenId: '****', _processor: null } : {};
        const cleanResponse = { config: cleanConfig, data: cleanData, status };
        const message = (responseObject.data && responseObject.data.exceptionMessage) || (cleanData[`_errors`] || []).map(x => x.exceptionMessage).join(' ## ');

        return {
            message,
            isError: (responseObject.data && responseObject.data[`_hasErrors`]) || (((responseObject.data && responseObject.data.errors) || []).length > 0),
            machineName: this.storefrontUtilityService.machineName,
            rawData: JSON.stringify(cleanResponse)
        };
    }

    public vantivRequestObjectForLogging(litleRequest: any): VantivRequestLog {
        const ret = {
            orderId: litleRequest.orderId,
            requestId: litleRequest.id,
            paypageId: litleRequest.paypageId,
            reportGroup: litleRequest.reportGroup,
            url: litleRequest.url
        } as VantivRequestLog;

        this.timeoutData = {
            orderId: litleRequest.orderId,
            reportGroup: litleRequest.reportGroup,
            violationsData: null
        } as VantivResponseLog;

        return ret;
    };

    public vantivResponseObjectForLogging(response: VantivResponse): VantivResponseLog {
        const ret = {
            orderId: response.orderId,
            message: response.message,
            response: response.response,
            paypageRegistrationId: response.paypageRegistrationId,
            litleTxnId: response.litleTxnId,
            responseTime: response.responseTime,
            targetServer: response.targetServer,
            type: response.type,
            id: response.id,
            reportGroup: response.reportGroup,
            violationsData: null
        } as VantivResponseLog;

        return ret;
    };

    private timeoutOnLitle = (reject) => {
        const timeoutResponse = cloneDeep(this.timeoutData);

        timeoutResponse.customLogMessage = 'Vantiv timeout error';

        this.logVantivData(timeoutResponse, true);

        this.toasterService.show('Error', this.siteVerbiage.genericErrorMsg);

        reject({ isErrorLogged: true, response: timeoutResponse });
    };

    private onErrorAfterLitle(response: VantivResponse): string {
        let outMessage: string;

        if (response.response === '871') {
            outMessage = 'Invalid card number. Check and retry. (Not Mod10)';
        }
        else if (response.response === '872') {
            outMessage = 'Invalid card number. Check and retry. (Too short)';
        }
        else if (response.response === '873') {
            outMessage = 'Invalid card number. Check and retry. (Too long)';
        }
        else if (response.response === '874') {
            outMessage = 'Invalid card number. Check and retry. (Not a number)';
        }
        else if (response.response === '875') {
            outMessage = this.siteVerbiage.genericErrorMsg;
        }
        else if (response.response === '876') {
            outMessage = 'Invalid card number. Check and retry. (Failure from Server)';
        }
        else if (response.response === '881') {
            outMessage = 'Invalid card validation code. Check and retry. (Not a number)';
        }
        else if (response.response === '882') {
            outMessage = 'Invalid card validation code. Check and retry. (Too short)';
        }
        else if (response.response === '883') {
            outMessage = 'Invalid card validation code. Check and retry. (Too long)';
        }
        else if (response.response === '889') {
            outMessage = this.siteVerbiage.genericErrorMsg;
        }

        // Log the Vantiv error
        this.logVantivData({
            orderId: response.orderId,
            message: response.message,
            response: response.response,
            responseTime: response.responseTime,
            id: response.id,
            reportGroup: response.reportGroup,
            customLogMessage: outMessage,
            violationsData: null
        } as VantivResponseLog, true);

        return outMessage;
    };

    private generateElementId(): string {
        return 'vantivRequiredCardElement' + VantivPaymentService.idCounter++;
    }

}
