import { Inject, Injectable } from '@angular/core';
import { StateService } from '@uirouter/core';
import { BaseResponse } from 'common/interfaces';
import { ToastType } from 'common/models';
import { ErrorDisplayService, ToasterService } from 'common/services';
import { SERVER_CONSTANTS } from 'common/upgrades';

import { StateNames as HomeStates } from 'home/constants';
import { isNumber, isObject } from 'lodash';


@Injectable()
export class ResponseErrorService {

    constructor(
        private errorDisplayService: ErrorDisplayService,
        private toasterService: ToasterService,
        private stateService: StateService,
        private homeStates: HomeStates,
        @Inject(SERVER_CONSTANTS) private serverConstants
    ) { }


    /**
     * Use the ToasterService directly if you want to just display a custom toaster
     *
     * @deprecated
     */
    public displayToast(msg: string, type: ToastType, isDelayed = false) {
        // TODO: This should be cleanup-able with a default value for ToastType but don't want to break things for legacy
        type = !type ? 'Error' : type;

        // TODO: Delete after Refresh Wave 2, this mapping is just to make things compatible with legacy
        let mappedToastType: ToastType;
        switch (type as string) {
            case 'info':
            case 'wait':
            case 'Success':
                mappedToastType = 'Success';
                break;
            case 'warning':
            case 'Warning':
                mappedToastType = 'Warning';
                break;
            case 'error':
            case 'Error':
            default:
                mappedToastType = 'Error';
                break;
        }

        this.toasterService.show(mappedToastType, msg, isDelayed);
    };

    /**
     * isErrorFree - checks response for errors WITH mutation
     * 
     * @param response 
     * @returns true if no errors; false if errors AND shows toaster (WHY!?!?)
     */
    public isErrorFree(response: BaseResponse) {
        if (!isObject(response) || !Array.isArray(response.errors) || response.errors.length === 0) {
            return true;
        }

        this.displayErrorsFromResponse(response);
        return false;
    }

    /**
     * hasErrors - checks response for errors WITH NO mutation
     * 
     * @param response 
     * @returns true if no errors; false if errors and nothing else
     */
    public hasErrors(response: BaseResponse): boolean {
        if (!isObject(response) || !Array.isArray(response.errors) || response.errors.length === 0) {
            return false;
        } else {
            return true;
        }
    }

    public displayErrorsFromResponse(response: BaseResponse, isDelayed = false) {
            const hasErrors = isObject(response) && Array.isArray(response.errors) && response.errors.length > 0;

            if (hasErrors) {
                const errorArr = response.errors.map(error => error.message);
                const sessionTimedOut = response.errors.some(error => error.key === 'SESSIONTIMEDOUT');
                errorArr.forEach(error => this.toasterService.show('Error', error, (sessionTimedOut || isDelayed)));
            }

            // TODO: This function can return void after Refresh Wave 2 Cleanup
            return Promise.resolve([] as string[]);
    };

    public displayAlertsFromResponse(response: BaseResponse, isDelayed = false) {
       
            const hasAlerts = isObject(response) && Array.isArray(response.alerts) && response.alerts.length > 0;

            if (hasAlerts) {
                const sortedAlerts = response.alerts.sort((alert1, alert2) => alert1.importance - alert2.importance);
                const alertArr = sortedAlerts.map(alert => alert.alertMsg);
                alertArr.forEach(alert => this.toasterService.show('Warning', alert, isDelayed));
            }

            // TODO: This function can return void after Refresh Wave 2 Cleanup
            return Promise.resolve([] as string[]);
        
    };

    public async handleMaintenanceErrors(response: BaseResponse, isDelayed = true) {
        if (isObject(response) && Array.isArray(response.errors) && response.errors.length > 0) {
            if (response.errors.some(error => error.key === this.serverConstants.maintenanceKey)) {
                this.displayErrorsFromResponse(response, isDelayed);
                await this.stateService.go(this.homeStates.Frame);
            }
        }
    };

    public formatErrorMessages(response: BaseResponse) {
        const errorArr = isObject(response) && Array.isArray(response.errors)
            ? response.errors
            : [];

        return errorArr.map(error =>
            !isNaN(+error.key) && isNumber(+error.key) && parseInt(error.key, 10) < 0
                ? (error.message || '').replace(error.key, '')
                : (error.message || ''));
    }

    /**
     * Use the ToasterService directly if you want to clear the toasts
     *
     * @deprecated
     */
    public clearToasts() {
            this.toasterService.removeAll();
    }

}
