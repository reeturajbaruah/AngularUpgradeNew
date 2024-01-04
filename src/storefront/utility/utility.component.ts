import {
    Component
} from '@angular/core';

import { StorefrontUtilityService } from '../services/storefrontUtility.service';

@Component({
    selector: 'storefront-utility',
    template: ''
})
export class StorefrontUtilityComponent {

    constructor(
        private storefrontUtilityService: StorefrontUtilityService
    ) { }

    public get isKioskView(): boolean {
        return this.storefrontUtilityService.isRunningAsKiosk &&
            !this.storefrontUtilityService.webStoreData.fullSiteMode;
    }

}

