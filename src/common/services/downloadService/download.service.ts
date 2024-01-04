import { HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { UIRouterGlobals } from '@uirouter/angular';
import { BaseResponse } from 'common/interfaces';
import { WindowRef } from 'common/providers';
import { CurrentUserService, ResponseErrorService, ToasterService, HttpService } from 'common/services';
import { ENVIRON_CONFIG, SERVER_CONSTANTS } from 'common/upgrades';
import { wait } from 'common/utilities';
import { StorefrontModalService } from '../../../storefront/services/modal.service';
import { StorefrontUtilityService } from '../../../storefront/services/storefrontUtility.service';


interface FileDownloadMessages {
    busy: string;
    success: string;
    failure: string;
}

@Injectable()
export class DownloadService {
    constructor(
        @Inject(SERVER_CONSTANTS) private serverConstants,
        private httpService: HttpService,
        private responseErrorService: ResponseErrorService,
        private currentUser: CurrentUserService,
        //Window does not have URL and Blob in ts 3.6 and later hence the use of globalThis
        //the version of ts in VS2015 does not know about globalThis.
        //build works because the build uses ts 3.9
        @Inject(WindowRef) private window: Window & typeof globalThis,
        private storefrontUtilityService: StorefrontUtilityService,
        private storefrontModalService: StorefrontModalService,
        private uiRouterGlobals: UIRouterGlobals,
        private toasterService: ToasterService,
        @Inject(ENVIRON_CONFIG) private environmentConfig,
    ) { }

    private isBusyValue: boolean;

    /**
     * This can be used to check if a download is in progress
     */
    public get isBusy() {
        return this.isBusyValue;
    }
    /**
     * Download file without opening a new tab when not kiosk
     * Open pdf link on new page when in kiosk (kiosk should hijack)
     */
    public async download(url: string, isPdf: boolean, params?: { [k: string]: any }, messages?: FileDownloadMessages, timeout?: number) {

        const urlWithParams = this.addParamsToUrl(url, params);

        await (this.storefrontUtilityService.isRunningAsKiosk
            ? this.showInKiosk(urlWithParams, isPdf)
            : this.downloadOnSameTab(urlWithParams, isPdf, messages, timeout || 100000));
    }

    private downloadOnSameTab = async (url: string, isPdf: boolean, customMessages: FileDownloadMessages, timeout: number) => {

        const messages: FileDownloadMessages = {
            busy: 'Processing your report',
            failure: 'Error downloading your report',
            success: 'Your report is downloaded',
            ...customMessages
        };

        if (this.isBusyValue) {

            this.toasterService.removeAll();
            this.toasterService.show('Success', messages.busy);
            return;
        }

        await this.tryDownload(url, isPdf, messages, timeout);
    };

    private tryDownload = async (url: string, isPdf: boolean, messages: FileDownloadMessages, timeout: number): Promise<void> => {

        this.isBusyValue = true;
        this.toasterService.show('Success', messages.busy);

        try {

            const filePromise = this.httpService.get(url, true, { responseType: 'arraybuffer' }, true);
            const timeoutPromise = wait(timeout).finally(() => Promise.reject());

            const response: BaseResponse & { headers } = await Promise.race([filePromise, timeoutPromise]);

            if (Array.isArray(response.errors) && response.errors.length > 0) {
                this.responseErrorService.displayErrorsFromResponse(response);
            } else {
                this.processDownload(response, isPdf, messages);
            }
        } catch {
            this.toasterService.show('Error', messages.failure);
        } finally {
            this.isBusyValue = false;
        }
    };

    private processDownload = (response: { headers }, isPdf: boolean, messages: FileDownloadMessages): void => {

        const fileName = this.getFileNameFromHeader(response.headers);
        const blob = new this.window.Blob([response as any], { type: `application${isPdf ? '/pdf' : ''}` });
        const defaultFileName = isPdf ? 'default.pdf' : 'default.xls';

        this.downloadBlob(blob, fileName || defaultFileName);
        this.toasterService.show('Success', messages.success);
    };

    private downloadBlob = (blob: Blob, name: string): void => {
        this.createAndClickDownloadLink(blob, name);
    };

    private createAndClickDownloadLink = (blob: Blob, name: string): void => {

        const a = this.window.document.createElement('a');
        const objectUrl = this.window.URL.createObjectURL(blob);
        a.href = objectUrl;
        a.download = name;
        a.click();
        this.window.URL.revokeObjectURL(objectUrl);
    };

    private getFileNameFromHeader(headers: HttpHeaders): string {

        let fileName = '';
        const disposition = headers.get('Content-Disposition');

        if (disposition && disposition.indexOf('attachment') !== -1) {
            const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
            const matches = filenameRegex.exec(disposition);
            if (matches !== null && matches[1]) {
                fileName = matches[1].replace(/['"]/g, '');
            }
        }

        return fileName;
    };

    private addParamsToUrl = (url: string, params: { [k: string]: any }): string => url + '?' + Object.entries({
        ...params,
        angularState: this.uiRouterGlobals.current.name,
        clientVersion: this.serverConstants.currentlyDownloadedWebUiVersion
    })
        .filter(([key, val]) => key !== null)
        .filter(([key, val]) => key !== undefined)
        .filter(([key, val]) => val !== null)
        .filter(([key, val]) => val !== undefined)
        .map(([key, val]) => `${key}=${val}`)
        .join('&');

    private showInKiosk = async (url: string, isPdf: boolean): Promise<void> => {

        if (!isPdf) {
            return;
        }

        await this.storefrontModalService.showExternalPage({ url, pdf: true });
    };

    private openInNewWindow = (url: string): void => {

        if (this.currentUser.currentUserIsInSyncAcrossTabs()) {
            this.window.open(url, '_blank');
        }
        else {
            this.window.location.reload();
        }
    };
}
