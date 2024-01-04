import { IWizardStateResolverService } from 'common/interfaces';
import { Injectable, Injector, Inject } from '@angular/core';
import { DefaultWizardStateResolverService } from './defaultStateResolver.service';
import { WizardStateResolver } from '../../providers';
import { StorefrontUtilityService } from '../../../storefront/services/storefrontUtility.service';

@Injectable()
export class WizardStateResolverFactory {
    constructor(
        private injector: Injector,
        @Inject(WizardStateResolver) private stateResolver: IWizardStateResolverService,
        private storefrontUtilityService: StorefrontUtilityService
    ) { }

    public getService(): IWizardStateResolverService {
        const isKioskMode = this.storefrontUtilityService.isRunningAsKiosk && !this.storefrontUtilityService.webStoreData.fullSiteMode;

        if (isKioskMode) {
            return this.stateResolver;
        } else {
            //if running in fullSiteMode make sure that DefaultWizardStateResolverService is used
            return this.injector.get(DefaultWizardStateResolverService) as IWizardStateResolverService;
        }
    }
}
