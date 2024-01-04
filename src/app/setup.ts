import { Injectable, ErrorHandler, Inject, PLATFORM_ID } from '@angular/core';
import { UIRouterUpgradeModule } from '@uirouter/angular-hybrid';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { UIRouterModule } from '@uirouter/angular';
import { MatIconModule } from '@angular/material/icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogConfig } from '@angular/material/dialog';

// application wide modules
import { HybridModule, downgrade } from 'hybrid/module';
import { ClientCache, CommonServicesModule, BuildIdRef } from 'common/module';
import { PipesModule } from 'pipes/module';
import { ConstantsModule } from 'constants/module';
import { SuspendedAccountSharedModule } from 'suspendedAccountRefresh/shared.module';


import { ViolationsCommonModule } from 'violationsCommon/violationsCommon.module';

// feature modules
import { CmsModule } from 'cms/cms.module';
import { MenuModule } from 'menu/module';
import { HomeModule } from 'home/module';

import { UnsupportedBrowserModule } from 'unsupportedBrowserWarning/module';
import { TranslationModule } from 'translation/module';
import { FlexbookerModule } from 'flexbooker/module';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { MatIconRegistryComponent } from './matIconRegistry.component';
import { HttpClientModule } from '@angular/common/http';

import { CustomBreakPointsProviders } from 'common/provider/customBreakPointsProvider';
import { FingerprintService } from 'common/services/fingerprintService/fingerPrintId.service';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { isPlatformBrowser } from '@angular/common';
import { BuildId } from 'buildId';
import { MatIconRegistryModule } from './matIconRegistry.component';

//todo: consider a common location for wrappers like this
@Injectable()
class StorefrontMaterialDialogWrapper {
    constructor(private matDialog: MatDialog) { }
    closeAll() {
        this.matDialog.closeAll();
    }
}

//until storefront is migrated, it needs to be able to close Angular's Dialogs
//this simple wrapper gives it access
downgrade('storefrontMaterialDialogWrapper', { service: StorefrontMaterialDialogWrapper });
downgrade('matIconRegistry', { component: MatIconRegistryComponent });
downgrade('fingerPrintIdService', { service: FingerprintService });

import { lazyRoutes } from './routing';
import { AuthenticationModule } from 'authentication/module';
import { LoggingModule } from 'logging/module';
import { HctraErrorHandler } from './error.handler';
import { MissedATollServicesModule } from 'missedatoll/services.module';
import { AccountDashboardServicesModule } from 'accountDashboard/services.module';
import { HttpModule } from 'common/http/http.module';
import { ConfigRouterService } from './routerConfing/confing-router.service';
import { ShipChannelBridgeModule } from 'shipChannelBridge/ship-channel-bridge.module';
import { MailingAddressService } from 'vehicles/shared';
import { ActivateEZTagModule } from 'vehicles/eztag/activate/activate.module';
import { ConstructionAndEngineeringModule } from 'constructionAndEngineering/constructionAndEngineering.module';
import { GenericHeaderBodyModule } from '../genericHeaderBody/genericHeaderBody.module';
import { WashburnTunnelModule } from 'washburnTunnel/washburnTunnel.module';
import { TravelToolsModule } from 'travelTools/travelTools.module';
import { LynchburgFerryModule } from '../lynchburgFerry/lynchburgFerry.module';
import { CaptchaModule } from '../captcha/captcha.module';
import { SimplePageTemplateModule } from '../simple-page-template/simple-page-template.module';
import { SectionalPageTemplateModule } from 'sectional-page-template/sectional-page-template.module';
import { MobileAppRedirectModule } from 'mobileAppRedirect/mobileAppRedirect.module';

export const appImports = [
    MatIconRegistryModule,
    BrowserModule,
    UpgradeModule,
    UIRouterUpgradeModule,
    HybridModule,
    UIRouterModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
    HttpModule,
    CommonServicesModule,
    PipesModule,
    ConstantsModule,
    CmsModule,
    HomeModule,
    MenuModule,
    UnsupportedBrowserModule,
    TranslationModule.forRoot(),
    FlexbookerModule.forRoot(),
    MissedATollServicesModule,
    AuthenticationModule,
    LoggingModule,
    SuspendedAccountSharedModule,
    ViolationsCommonModule,
    AccountDashboardServicesModule,
    UIRouterModule.forChild({ states: lazyRoutes }),
    ShipChannelBridgeModule,
    ActivateEZTagModule,
    ConstructionAndEngineeringModule,
    GenericHeaderBodyModule,
    TravelToolsModule,
    WashburnTunnelModule,
    LynchburgFerryModule,
    CaptchaModule,
    SimplePageTemplateModule,
    SectionalPageTemplateModule,
    MobileAppRedirectModule
];

export const appProviders = [
    { provide: BuildIdRef, useValue: BuildId },
    { provide: CacheStorage, useValue: caches },
    { provide: ErrorHandler, useClass: HctraErrorHandler },
    StorefrontMaterialDialogWrapper,
    ...CustomBreakPointsProviders,
    { provide: Window, useValue: window },
    //defines global dialog settings
    //also, super important, NEVER new-up the MatDialogConfig when opening a
    //dialog, it will always override defaults, even if you didn't include
    //an overrided value
    {
        provide: MAT_DIALOG_DEFAULT_OPTIONS,
        deps: [Overlay],
        useFactory: (overlay: Overlay): MatDialogConfig => ({
            ...new MatDialogConfig(),
            panelClass: 'hctra-dialog-container',
            disableClose: true,
            closeOnNavigation: true,
            hasBackdrop: true,
            autoFocus: false
        })
    },
    ConfigRouterService,
    MailingAddressService
];

@Injectable()
export class AppSetupService {

    fingerPrintId: string;
    isBrowser: boolean;

    constructor(
        @Inject(PLATFORM_ID) platformId: object,
        private upgrade: UpgradeModule,
        private hybrid: HybridModule,
        private fingerprintService: FingerprintService,
        private caches: CacheStorage,
        @Inject(ClientCache) private clientCaches: string[]) {
        this.isBrowser = isPlatformBrowser(platformId);
    }


    /*
    ngDoBootstrap() {
        console.log('ngDoBootstrap is running');
        //this.upgrade.bootstrap(document.documentElement, ['HCTRAModule'], { strictDi: true });
    }
    */


    private async handleCaches() {
        const cacheNames = await this.caches.keys();
        const expectedClientCacheNames = (this.clientCaches || [])
            .filter(x => x)
            .reduce((acc, v) => ({ ...acc, [v]: v }), {});

        await Promise.all(
            cacheNames
                .filter(x => !(x in expectedClientCacheNames))
                .map(x => this.caches.delete(x))
        );
    }

    //Setting up the fingerprint Id here
    async fetchFingerprintId() {
        if (this.isBrowser) {
            const fpPromise = FingerprintJS.load();
            const fp = await fpPromise;
            const result = await fp.get();
            this.fingerPrintId = result && result.visitorId || '';
            this.fingerprintService.setFingerprintId(result.visitorId);
        }
    }

    public async isReady(): Promise<any> {
        await this.handleCaches();
        await this.fetchFingerprintId();
        this.upgrade.bootstrap(document.documentElement, ['HCTRAModule'], { strictDi: true });
       //Needs to register all paths here.
    }
}
