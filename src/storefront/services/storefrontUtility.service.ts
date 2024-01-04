import { Inject, Injectable } from '@angular/core';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { compare } from 'common/utilities';
import { IStorefrontSession, WorkflowStateId } from './storefront.service';

export enum StoreLocations {
    UKN,
    TNO,
    TWS,
    sTNE,
    TEA,
    TSW,
    DATS
}

@Injectable()
export class DesktopStorefrontUtilityService {
    public get isRunningAsKiosk(): boolean {
        return false;
    }

    public get webStoreData(): any {
        return {
            desktopMode: false
        };
    }
}

@Injectable({ providedIn: 'root' })
export class StorefrontUtilityService {
    private isRunningInKioskMode: boolean;
    public isStateChangingRestricted: any = null;
    public storeLocation: any;
    public machineNames: any;
    public desktopMode = false;

    constructor(
        private window: Window,
        @Inject(ENVIRON_CONFIG) private environmentConfig
    ) {
        //Returns an array of length of 3
        //Index 0: full user agent
        //Index 1: store location
        //Index 2: machine name
        const match = /\(.*HCTRA\.Storefront\s([^;\)\s]+)(?:\s([^;\)\s]+))?.*\)/ig.exec(this.window.navigator.userAgent) || [];
        this.storeLocation = StoreLocations[match[1]];
        const machineName = match[2];

        this.machineNames = {
            config: this.defaultMachineName,
            userAgent: machineName,
            default: machineName || this.defaultMachineName
        };

        this.isRunningInKioskMode = match[1] ? true : false;
    }


    public get accountLoggedInWorkItemIds() {
        return [WorkflowStateId.UBI, WorkflowStateId.UCI, WorkflowStateId.UAC, WorkflowStateId.URAMT, WorkflowStateId.ARTAG, WorkflowStateId.MKPAY];
    }

    public get isRunningAsKiosk(): boolean {
        return this.isRunningInKioskMode;
    }

    public get storefrontLocation(): string {
        return StoreLocations[this.storeLocation];
    }

    public get defaultMachineName(): string {
        return this.environmentConfig.storefrontConfigs.DefaultMachineName;
    }

    public get storefrontShortDelay() {
        return this.environmentConfig.storefrontConfigs.StorefrontShortDelay;
    }

    public get webStoreData(): IStorefrontSession {
        const rawData = this.window.sessionStorage.getItem('StorefrontService');
        if (!rawData) {
            return;
        }

        return JSON.parse(rawData) as IStorefrontSession;
    }

    public get machineName(): string {
        if (compare(this.machineNames.userAgent, '-kapi')) {
            if ('KioApp' in this.window && 'DoUrlSubstitution' in this.window['KioApp']) {
                return this.window['KioApp']['DoUrlSubstitution']('$$KIO_COMPUTERNAME$$', 0);
            } else if ('external' in this.window && 'getKioProperty' in this.window['external']) {
                const kiosk = this.window['external']['getKioProperty']('Kiosk');
                const unit = this.window['external']['getKioProperty']('Unit');
                return !compare(kiosk, 'hctra', true) ? kiosk : (!compare(unit, 'hctra', true) ? unit : this.machineNames.userAgent);
            } else {
                return this.machineNames.config;
            }
        }

        return this.machineNames.default;
    }

    public get delay(): { short: number; medium: number; long: number } {
        const val = this.storefrontShortDelay;
        return {
            short: val,
            medium: val * 4,
            long: val * 10
        };
    }
}
