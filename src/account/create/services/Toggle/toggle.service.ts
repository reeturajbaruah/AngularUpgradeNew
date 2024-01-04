import { Inject, Injectable } from '@angular/core';
import { IKioskInfo } from 'account/create/models/kiosk-models';
import { CurrentUserService, ResponseErrorService } from '../../../../common/services';
import { ENVIRON_CONFIG } from '../../../../common/upgrades';
import { StorefrontUtilityService } from '../../../../storefront/services/storefrontUtility.service';
import { IToggles } from '../../models/toggles.models';
import { KioskFacadeService } from '../kiosk/facade/kiosk-facade.service';

@Injectable()
export class ToggleService {

    private isKiosk: boolean;
    private toggles: IToggles = {
        IsFlexPay: false,
        EzTagOption: false,
        IsMailingAddressOptional: false,
        IsAutoReplenishmentEnabled: false,
        ShowCashOption: false,
        SocialMediaCampaign: {
            isSocialMediaCampaign: false,
            campaignSources: [],
            campaignName: ''
        }
    };

    constructor(
        @Inject(ENVIRON_CONFIG) private environmentConfig,
        private storefrontUtilityService: StorefrontUtilityService,
        private kioskFacadeService: KioskFacadeService,
        private responseErrorService: ResponseErrorService,
        private currentUser: CurrentUserService
    ) {
    }

    async getToggles() {
        this.isKiosk = this.storefrontUtilityService.isRunningAsKiosk && !this.storefrontUtilityService.webStoreData.fullSiteMode;
        if (this.isKiosk !== undefined && this.isKiosk) {
            await this.setKioskToggles();
            return this.toggles;
        }
        else {
            this.setTogglesForWeb();
            return this.toggles;

        }
    }

    private async setKioskToggles() {
        const res: any = await this.kioskFacadeService.getKioskStoreConfig();

        let isKioskEnabledFlexPayAtStoreResponse;
        if (this.responseErrorService?.isErrorFree(res)) {
            isKioskEnabledFlexPayAtStoreResponse = res;
        }

        this.exec(res, res.flexpayEnabled);
    };

    private setTogglesForWeb() {
        const config = this.environmentConfig;
        this.exec(config, config.flexpayWebEnabled);
        this.setCampaignToggles();
    };


    private exec(serverConfig, serverFlexpayEnabled) {

        const { isFlexPay, acctActivity } = this.currentUser.getCurrentUser();

        switch (acctActivity) {

            // User has already begin create account process
            case 'P':
                // if pending user is FlexPay: set() would set child toglles based on what's present in serverConfig
                // if pending user is not FlexPay: set() would call overrideToggles and set child toglles to false
                this.set(serverConfig, isFlexPay);
                break;

            // User is initially creating an account
            default:
                // Set child Toggles based on Parent FlexPay toggle
                this.set(serverConfig, serverFlexpayEnabled);
                break;
        }
    }


    private set(config, isFlexPayEnabled) {

        switch (isFlexPayEnabled) {

            case true:
                this.toggles.IsFlexPay = isFlexPayEnabled;
                this.toggles.EzTagOption = config.ezTagOption;
                this.toggles.ShowCashOption = config.showCashOption;
                this.toggles.IsMailingAddressOptional = config.isMailingAddressOptional;
                this.toggles.IsAutoReplenishmentEnabled = config.isAutoReplenishmentEnabled;
                break;


            case false:
                this.overrideToggles(false);
                break;

            default:
                break;

        }

    }


    private overrideToggles(val: boolean) {
        this.toggles.IsFlexPay = val;
        this.toggles.EzTagOption = val;
        this.toggles.IsMailingAddressOptional = val;
        this.toggles.IsAutoReplenishmentEnabled = val;
        this.toggles.ShowCashOption = val;
    }


    private setCampaignToggles() {
        const socialMediaCampaigns = this.environmentConfig.socialMediaCampaigns;

        if (socialMediaCampaigns && socialMediaCampaigns.createAccount) {
            const { IsSocialMediaCampaign, CampaignSources, CampaignName } = socialMediaCampaigns.createAccount;
            const campaignToggles = this.toggles.SocialMediaCampaign;
            campaignToggles.isSocialMediaCampaign = IsSocialMediaCampaign;
            campaignToggles.campaignName = CampaignName;;
            campaignToggles.campaignSources = CampaignSources;
        }
    }
}


