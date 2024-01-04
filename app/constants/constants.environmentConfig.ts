module HCTRA.Constant {

    // Actual values can be found in index.cshtml
    export interface IEnvironmentConfig {
        mcAfeeIconQuerySelector: string;
        accountActivityMaxDaysInSearch: number;
        enableSuspendedAccountGridLandingPage: boolean;
        accountActivityDefaultDaysInSearch: number;
        disableActivityDefaultSearch: string;
        arcGisMapLink: string;
        angularExPopUpEnabled: string;
        googleAnalyticsID: string;
        rssConfig: RssConfig;
        hidePdfAccountActivity: string;
        hideExcelAccountActivity: string;
        hidePdfViolations: string;
        hideAccountActivityTabs: string;
        hideTransactionsDescriptionColumn: string;
        heedLargeAccountFlag: boolean;
        accountActivityTransactonsAllSearchText: string;
        accountActivityTransactonsDefaultVehicleValue: string;
        storefrontConfigs: StorefrontConfigs;
        featureToggleCacheDateTime: string;
        cardTypeDefinitions: { [key: string]: CardTypeDefinition };
        accountOverviewConfigs: AccountOverviewConfigs;
        hideEmailVerificationAlert: boolean;
        mappEzTagIOSLink: string;
        mappEzTagAndroidLink: string;
        eventTrackingConfig: EventTrackingConfig;
        billingInformation: BillingInformation;
        reportFeatureToggles: ReportFeatureToggles;
        hideMediaActionButtons: HideMediaActionButtons;
        pinkLetterDiscountAvailable: boolean;
        missingEmailBypass: boolean;
        tollWaiverRedirect: boolean;
        transactionsDateRangeTypeFilterAvailable: boolean;
        scriptIntegrityConfig: { [key: string]: ScriptIntegrityToggle };
        tagDeliveryConfig: TagDeliveryConfig;
        allowStorefrontTesting: boolean;
        mvuConfig: MvuConfig;
        removeDL: boolean;
        isMergeMATandVioOn: boolean;
        useFingerPrintId: boolean;
        useNewMvu: boolean;
        useNewsRefresh: boolean;
        enableAETComplex: boolean;
        vehicleReactivate: boolean;
        vehicleReplacement: boolean;
    }
    interface ReportFeatureToggles {
        ReportUiToggles: ReportUiToggles;
    }
    interface ReportUiToggles {
        TransactionPdfNewWindow: boolean;
        TransactionExcelNewWindow: boolean;
    }
    interface HideMediaActionButtons {
        TransactionTabPdf: boolean;
        TransactionTabExcel: boolean;
    }
    interface BillingInformation {
        UseUpdatedPage: boolean;
    }
    interface RssConfig {
        [s: string]: RssConfigObj;
    }

    interface RssConfigObj {
        Path: string;
        NeedsDate: boolean;
        Locations: Array<string>;
    }

    interface StorefrontConfigs {
        DisableStorefrontClientCert: boolean;
        DefaultMachineName: string;
        StorefrontInactivityIntervalDelay: number;
        StorefrontInactivityReset: number;
        StorefrontInactivityWarning: number;
        StorefrontMaintenanceModeIntervalDelay: number;
        StorefrontShortDelay: number;
        KioskConfigs: { [key: string]: { AllowCreditCardInputWhenDeviceDisabled: boolean } };
    }

    interface CardTypeDefinition {
        Prefixes: string[];
        Validations: string[];
        MaxLength: number;
    }

    export interface EventTrackingConfig {
        Rules: EventTrackingRule[];
        EventTrackingEnabled: boolean;
    }

    export interface EventTrackingRule {
        Name: string;
        Id?: string;
        IdRegex?: string;
        Page?: string;
        PageRegex?: string;
        TriggerIf?: string;
    }

    interface AccountOverviewConfigs {
        RedirectAccountSummaryToAccountOverview: boolean;
        MaxPlateCount: number;
        MaxTagCountIfPlates: number;
        MaxTagCountIfNoPlates: number;
        RecentTransactionsSpan: number;
        MaxRecentTransactionsCount: number;
    }

    export interface ScriptIntegrityToggle {
        ShaKey: string;
        CrossoriginAttribute: string;
        SrcFallback: string;
    }

    export interface TagDeliveryConfig {
        AllowDeliveryByMail: boolean;
        AllowPickup: boolean;
        MvuAllowDelivery: boolean;
        MvuAllowPickup: boolean;
    }
    export interface MvuConfig {
        ShowTimedOutPopup: boolean;
    }
}