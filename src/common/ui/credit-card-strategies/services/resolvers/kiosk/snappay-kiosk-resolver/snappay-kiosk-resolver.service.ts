import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ToasterService } from 'common/services';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { StorefrontUtilityService } from '../../../../../../../storefront/services/storefrontUtility.service';
import { SnapPayDeviceStrategyFacadeService } from '../../../../strategies/kiosk/snapPayDevice/services/facade/snapPayDeviceStrategy-facade.service';
import { KioskDataService } from '../data-service/kiosk-data-service';


@Injectable()
export class SnappayKioskResolverService {

    constructor(@Inject(ENVIRON_CONFIG) private environmentConfig,
        private storefrontUtilityService: StorefrontUtilityService,
        private toasterService: ToasterService,
        private kioskDataService: KioskDataService,
        protected httpClient: HttpClient,
        private snapPayDeviceStrategyFacadeService: SnapPayDeviceStrategyFacadeService
    ) {
    }

    private snapPayDeviceconfig: {
        isActive: boolean;
        allowCcInput: boolean;
        getCardNameFromDevice: boolean;
    };

    canUseKiosk = async (): Promise<{ canUse: boolean; data?: any }> => {
        //this logic will need to be updated if we allow cc input devices at machines other than kiosks
        if (!this.storefrontUtilityService.isRunningAsKiosk) {
            return Promise.resolve({
                canUse: false
            });
        }

        const machineName = this.storefrontUtilityService.machineName || this.environmentConfig.storefrontConfigs.DefaultMachineName;
        const response = await this.snapPayDeviceStrategyFacadeService.GetStatus(machineName);
        const config = response.body; //response.data;
        const isActive = config?.active;
        const allowCcInput = config?.allowCreditCardInputWhenDeviceDisabled;
        const getCardNameFromDevice = config?.getCardNameFromDevice;
        const strategyActive = (config?.active || !config?.allowCreditCardInputWhenDeviceDisabled) && config?.useSnapPay;

        if (!isActive && !allowCcInput) {
            this.toasterService.show('Warning', 'Credit card input is disabled');
        }

        if (strategyActive) {
            const data = {
                isActive,
                allowCcInput,
                getCardNameFromDevice
            };
            this.setSnapPayKioskConfig(data);
        }

        return Promise.resolve({
            canUse: strategyActive
        });

    };

    //Commented below method and added this method in facade.
    //async GetStatus(machineName): Promise<any> {
    //    const response = await (firstValueFrom(
    //        this.httpClient.get(
    //            `/api/sessions/SnapPayStatus/GetStatus/${machineName}`,
    //            {
    //                observe: 'response',
    //                withCredentials: false
    //            })
    //    ).catch(r => r));
    //    return response;
    //}

    private setSnapPayKioskConfig(data: any) {
        this.snapPayDeviceconfig = {
            isActive: data.isActive,
            allowCcInput: data.allowCcInput,
            getCardNameFromDevice: data.getCardNameFromDevice
        };
        this.kioskDataService.setData(this.snapPayDeviceconfig);
    }

    async resolve() {
        const { SnapPayDeviceStrategyComponent } = await import('../../../../strategies');
        return {
            type: SnapPayDeviceStrategyComponent,
            data: this.kioskDataService.getData()
        };
    }
}
