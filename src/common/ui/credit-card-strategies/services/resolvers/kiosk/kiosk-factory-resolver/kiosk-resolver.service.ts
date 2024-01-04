import { Inject, Injectable } from '@angular/core';
import { GenericRepoService, ToasterService } from 'common/services';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { StorefrontUtilityService } from '../../../../../../../storefront/services/storefrontUtility.service';
import { KioskDataService } from '../data-service/kiosk-data-service';

@Injectable()
export class KioskResolverService {

    private config: {
        isActive: boolean;
        allowCcInput: boolean;
        getCardNameFromTriPos: boolean;
    };

    constructor(@Inject(ENVIRON_CONFIG) private environmentConfig,
        private storefrontUtilityService: StorefrontUtilityService,
        private genericRepoService: GenericRepoService,
        private toasterService: ToasterService,
        private kioskDataService: KioskDataService

    ) {

    }

    canUseKiosk = (): Promise<{ canUse: boolean; data?: any }> => {


        //this logic will need to be updated if we allow cc input devices at machines other than kiosks
        if (!this.storefrontUtilityService.isRunningAsKiosk) {
            return Promise.resolve({
                canUse: false
            });
        }

        const kioskConfig =
            this.environmentConfig.storefrontConfigs.KioskConfigs[this.storefrontUtilityService.defaultMachineName];

        if (this.storefrontUtilityService.machineName === this.storefrontUtilityService.defaultMachineName) {

            const isActive = false;
            const allowCcInput = kioskConfig.AllowCreditCardInputWhenDeviceDisabled;

            const strategyActive = !kioskConfig.AllowCreditCardInputWhenDeviceDisabled && !kioskConfig?.useSnapPay;

            if (!isActive && !allowCcInput) {
                this.toasterService.show('Warning', 'Credit card input is disabled');
            }

            if (strategyActive) {
                const data = {
                    isActive: false,
                    allowCcInput: kioskConfig.AllowCreditCardInputWhenDeviceDisabled,
                    getCardNameFromTriPos: false
                };
                this.setConfig(data);
            }

            return Promise.resolve({
                canUse: strategyActive
            });
        }

        return this.genericRepoService
            .dataFactory
            .TriPosStatus(this.storefrontUtilityService.machineName || this.environmentConfig.storefrontConfigs.DefaultMachineName)
            .then((config) => {

                const strategyActive = config.active || !config.allowCreditCardInputWhenDeviceDisabled && !kioskConfig?.useSnapPay;

                if (!config.active && !config.allowCreditCardInputWhenDeviceDisabled) {
                    this.toasterService.show('Warning', 'Credit card input is disabled');
                }

                if (strategyActive) {
                    const data = {
                        isActive: config.active,
                        allowCcInput: config.allowCreditCardInputWhenDeviceDisabled,
                        getCardNameFromTriPos: config.getCardNameFromTriPos
                    };

                    this.setConfig(data);
                }

                return Promise.resolve({
                    canUse: strategyActive
                });
            });
    };

    private setConfig(data: any) {
        this.config = {
            isActive: data.isActive,
            allowCcInput: data.allowCcInput,
            getCardNameFromTriPos: data.getCardNameFromTriPos

        };
        this.kioskDataService.setData(this.config);
    }


}
