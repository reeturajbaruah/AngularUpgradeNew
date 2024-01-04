import { Inject, Injectable } from '@angular/core';
import { ToastType } from 'common/models';
import { ToasterService } from 'common/services';


type LegacyToastType = 'info' | 'wait' | 'warning' | 'error';

/**
 * DO NOT USE THIS SERVICE
 * This is only migrated to allow AngularJS services/controllers easy access to ToasterService without changing all references in AngularJS
 * 
 * @deprecated
 */
@Injectable()
export class ErrorDisplayService {

    constructor(
        private toasterService: ToasterService
    ) { }


    public displayToasts(msgArr: string | string[], type: ToastType | LegacyToastType = 'error') {
       
        if (!msgArr) {
            return;
        }

        if (!Array.isArray(msgArr)) {
            msgArr = [msgArr] as string[];
        }

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

        msgArr.forEach(msg => this.toasterService.show(mappedToastType, msg));
       
    }

    /**
     * You shouldn't be using errorDisplayService.
     * BUT if you find that you must, please use the ToasterService.removeAll instead of this clearToasts function
     *
     * @deprecated
     */
    public clearToasts() {       
        this.toasterService.removeAll();
    }

    // TODO: Straight from AngularJS, delete after Refresh Wave 2
    private chainToasts(messages: string[], type: ToastType | LegacyToastType) {
        return messages.map(msg => this.constructToast(msg, type as LegacyToastType));
    }

    // TODO: Straight from AngularJS, delete after Refresh Wave 2
    private constructToast(message: string, type: LegacyToastType) {
        return {
            type,
            body: message,
            showCloseButton: true,
            timeout: type === 'info' ? 5000 : 0
        };
    }

}
