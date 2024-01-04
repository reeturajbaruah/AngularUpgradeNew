import { Inject, Injectable } from '@angular/core';
import { BillingType } from 'common/models';
import { UrlPaths } from 'constants/routes.constants';
import { ENVIRON_CONFIG } from '../../../../../common/upgrades';
import { StorefrontModalService } from '../../../../../storefront/services/modal.service';
import { StorefrontUtilityService } from '../../../../../storefront/services/storefrontUtility.service';
import { IKioskInfo } from '../../../models/kiosk-models';
import { KioskApiService } from '../api/kiosk-api.service';

@Injectable()
export class KioskFacadeService {
    constructor(
        private kioskApiService: KioskApiService,
        @Inject(ENVIRON_CONFIG) private environmentConfig,
        private storefrontUtilityService: StorefrontUtilityService,
        private storefrontModalService: StorefrontModalService,
        private cmsItemId: UrlPaths
    ) { }

    async getKioskStoreConfig() {
        let res;
        const machineName = this.storefrontUtilityService.machineName || this.environmentConfig.storefrontConfigs.DefaultMachineName;

        if (machineName) {
            res = await this.kioskApiService.getKioskStoreConfig(machineName);
        }

        const response = {
            isKiosk: true,
            flexpayEnabled: (res?.flexpayEnabled) ? true : false,
            showCashOption: (res?.showCashOption) ? true : false,
            ezTagOption: res?.ezTagOption,
            isMailingAddressOptional: res?.isMailingAddressOptional,
            isAutoReplenishmentEnabled: res?.isAutoReplenishmentEnabled
        } as IKioskInfo;

        return response;
    }

    async proceedOnAcctComplete(billingType: BillingType, hasTags: boolean) {

        switch (billingType) {

            case BillingType.Cash:

                switch (hasTags) {
                    case true:
                        return await this.storefrontModalService.genericPostSignup(this.cmsItemId.storefrontThankYouNewCashAccountEzTagModal);
                    case false:
                        return await this.storefrontModalService.genericPostSignup(this.cmsItemId.storefrontThankYouNewCashAccountNoEzTagModal);
                    default:
                        break;
                }
                break;

            case BillingType.Credit:
            case BillingType.Eft:

                switch (hasTags) {
                    case true:
                        return await this.storefrontModalService.genericPostSignup(this.cmsItemId.storefrontThankYouNewAccountModal);
                    case false:
                        return await this.storefrontModalService.genericPostSignup(this.cmsItemId.storefrontThankYouNewAccountNoEzTagModal);
                    default:
                        break;
                }
                break;

            default:
                break;
        }
    }
}
