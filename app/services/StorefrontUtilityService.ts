module HCTRA.Storefront.Service {

    //defines all fields that are saved in web storage and restored during browser refreshes
    export interface IStorefrontWebStorage {
        //kiosk token
        kioskToken: string;

        //db logging id
        sessionId: number;
        //id's of selected tasks
        selectedItemIds: Model.SelectedOptions[];
        //name of current task
        currentItemName: string;
        //id of the current task
        currentItemId: Model.SelectedOptions;
        //flag indicating the storefront should be showing the fullsite window
        fullSiteMode: boolean;
        //ids of completed tasks
        completedItemIds: Model.SelectedOptions[];
        //flag if shell users has been initialized
        shellUserInitialized: boolean;
    }
    
    export interface IStorefrontUtilityService {
        isRunningAsKiosk: boolean;
        
        storefrontLocation: Model.StoreLocations;

        machineName: string;

        webStoreData: IStorefrontWebStorage;

        defaultMachineName: string;

        delay: { short: number, medium: number, long: number };

        readonly stateChangingRestricted: { all: boolean };

        //cancels any state changing that is not a selected initial states of remaining tasks
        lockStateChanging(action: () => angular.IPromise<any>): angular.IPromise<any>;
}

    interface IKiowareApp {
        DoUrlSubstitution(url: string, replacementMode: number);
    }

    interface IKiowareWrapperService {
        KioApp : IKiowareApp;
    }

    class ReadonlyStorefrontWebStorage implements IStorefrontWebStorage {
        constructor(private innerData: IStorefrontWebStorage) { }
        get kioskToken(): string { return this.innerData.kioskToken }
        get sessionId(): number { return this.innerData.sessionId}
        get selectedItemIds(): Model.SelectedOptions[] { return this.innerData.selectedItemIds.slice(0)}
        get currentItemName(): string { return this.innerData.currentItemName;  }
        get currentItemId(): Model.SelectedOptions { return this.innerData.currentItemId; }
        get fullSiteMode(): boolean { return this.innerData.fullSiteMode; }
        get completedItemIds(): Model.SelectedOptions[] { return this.innerData.completedItemIds.slice(0); }
        get shellUserInitialized(): boolean { return this.innerData.shellUserInitialized; }
    }

    export class StorefrontUtilityService implements IStorefrontUtilityService {

        //flag if site is in storefront mode
        private isRunningInKioskMode: boolean;

        //current physical store location
        private storeLocation: Model.StoreLocations;

        //regex to extract physical store location from user agent string
        private storeLocationRegex: RegExp = /\(.*HCTRA\.Storefront\s([^;\)\s]+)(?:\s([^;\)\s]+))?.*\)/ig;

        private machineNameOverride: string;

        //flag indicating that any state changes should be denied
        public stateChangingRestricted = null;

        constructor(
            private userAgent: string,
            private $window: angular.IWindowService,
            private webStorage: HCTRA.Service.IWebStorageService,
            private storefrontUtilityInitializer: (base: any, userAgent: string) => void,
            private environmentConfig: HCTRA.Constant.IEnvironmentConfig
        ) {
            storefrontUtilityInitializer(this, userAgent);
        }

        static factory() {
            const service = ($window, webStorage, init, environmentConfig) => {
                return new StorefrontUtilityService($window.navigator.userAgent, $window, webStorage, init, environmentConfig);
            };
            service.$inject = ["$window", "webStorage", "StorefrontUtilityInitializer", "environmentConfig"];
            return service;
        }

        static configure(base: StorefrontUtilityService, userAgent: string) {

            if (base.webStorage.getValue("StorefrontUtilityService.TEST")) {
                //angular.extend(base, base.webStorage.getValue("StorefrontUtilityService.TEST") || {});
                console.error('StorefrontUtilityService.TEST is no longer supported.');
            } 
            
            base.machineNameOverride = null;
            const storeLocationMatch = base.storeLocationRegex.exec(userAgent);
            if (storeLocationMatch && storeLocationMatch[1]) {
                base.isRunningInKioskMode = true;
                base.storeLocation = HCTRA.Model.StoreLocations[storeLocationMatch[1]];
                base.machineNameOverride = storeLocationMatch[2] || null;
            }

        }

        public get isRunningAsKiosk(): boolean { return this.isRunningInKioskMode; }
        public get storefrontLocation(): Model.StoreLocations { return this.storeLocation; }

        public get accountLoggedInWorkItemIds() {
            return [Model.SelectedOptions.UBI, Model.SelectedOptions.UCI, Model.SelectedOptions.UAC, Model.SelectedOptions.URAMT, Model.SelectedOptions.ARTAG, Model.SelectedOptions.MKPAY];
        }

        public lockStateChanging(action: () => angular.IPromise<any>, all: boolean = false): angular.IPromise<any> {
            const currentRestrictionState = this.stateChangingRestricted;
            const setAll = currentRestrictionState ? currentRestrictionState.all : false;
            this.stateChangingRestricted = { all: setAll || all};
            return action().finally(() => this.stateChangingRestricted = currentRestrictionState);
        }

        public get machineName(): string {

            if (this.machineNameOverride && this.machineNameOverride.toLowerCase() === "-kapi") {
                if ("KioApp" in this.$window && "DoUrlSubstitution" in this.$window["KioApp"]) {
                    return this.$window["KioApp"]["DoUrlSubstitution"]("$$KIO_COMPUTERNAME$$", 0);
                } else if ("external" in this.$window && "getKioProperty" in this.$window["external"]) {
                    const getKioProperty: (s: string) => string = this.$window["external"]["getKioProperty"];
                    const kioskName = getKioProperty("Kiosk") || "";
                    const unitName = getKioProperty("Unit") || "";
                    //handles situation if kiosk name was configured in the unit name
                    return (unitName.toUpperCase() === "HCTRA" ? null : unitName)
                        || (kioskName.toUpperCase() === "HCTRA" ? null : kioskName)
                        || this.machineNameOverride;

                } else {
                    return this.environmentConfig.storefrontConfigs.DefaultMachineName;
                }
            }
            
            return this.machineNameOverride || this.environmentConfig.storefrontConfigs.DefaultMachineName;
        }

        public get defaultMachineName(): string {
            return this.environmentConfig.storefrontConfigs.DefaultMachineName;
        }

        public get webStoreData(): IStorefrontWebStorage {
            const storage = this.webStorage.getValue("StorefrontService");
            return storage ? new ReadonlyStorefrontWebStorage(storage) : null;
        }

        public get delay(): { short: number, medium: number; long: number } {
            const shortDelay = this.environmentConfig.storefrontConfigs.StorefrontShortDelay;
            return {
                short: shortDelay,
                medium: shortDelay * 4,
                long: shortDelay * 10
            };
        }

    }
} 

(() => {
    'use strict';
    angular.module('HCTRAModule')
        .factory("StorefrontUtilityService", HCTRA.Storefront.Service.StorefrontUtilityService.factory())
        .factory("StorefrontUtilityInitializer",() => HCTRA.Storefront.Service.StorefrontUtilityService.configure);
})();