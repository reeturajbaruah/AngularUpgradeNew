import { Injectable, Inject } from '@angular/core';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { OperatingSystemSnifferService } from 'common/services';


export interface IEzTagAppRedirectLinkService {
    getEzTagAppLink(): string;
}

@Injectable()
export class EzTagAppRedirectLinkService {

    constructor(
        @Inject(ENVIRON_CONFIG) private environmentConfig,
        private operatingSystemSnifferService: OperatingSystemSnifferService,
    ) { }

    getEzTagAppLink = () => ({
        ios: this.environmentConfig.mappEzTagIOSLink,
        android: this.environmentConfig.mappEzTagAndroidLink
    })[this.operatingSystemSnifferService.getOsFull()];
}
