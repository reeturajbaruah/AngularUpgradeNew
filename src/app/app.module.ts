import { NgModule, DoBootstrap } from '@angular/core';
import { appImports, appProviders, AppSetupService } from './setup';
import { StorefrontCoreModule, StorefrontModule } from 'storefront/module';
import { WizardStateResolver } from 'common/providers';
import { DefaultWizardStateResolverService } from 'common/ui';
import { HCTRAModule } from './hctra.module';
import { HctraModuleService } from './services/hctra-module.service';

downgrade('desktopAppComponent', { component: DesktopAppComponent });

import { DesktopAppComponent } from './desktop-app/desktop-app.component';
import { downgrade } from 'hybrid/module';
import { StateStackMemoryService } from 'common/services';


@NgModule({
    declarations: [
        DesktopAppComponent
    ],
    imports: [
        ...appImports,
        StorefrontModule,
        HCTRAModule
    ],
    providers: [
        ...appProviders,
        AppSetupService,
        HctraModuleService,
        StateStackMemoryService,
        { provide: WizardStateResolver, useClass: DefaultWizardStateResolverService }
    ],
    exports: [
        DesktopAppComponent
    ]
})
export class AppModule implements DoBootstrap {

    constructor(
        private appSetupService: AppSetupService,
    ) {
    }

    ngDoBootstrap() {
        console.log('AppModule - DoBoostrap');
    }

    //Setting up the fingerprint Id here
    async fetchFingerprintId() {
        await this.appSetupService.fetchFingerprintId();
    }

    public async isReady(): Promise<any> {
        await this.appSetupService.isReady();
    }
}

@NgModule({
    declarations: [],
    imports: [
        ...appImports,
        StorefrontCoreModule,
        HCTRAModule
    ],
    providers: [
        ...appProviders,
        AppSetupService,
        HctraModuleService,
        StateStackMemoryService
    ]
})
export class KioskAppModule implements DoBootstrap {

    constructor(
        private appSetupService: AppSetupService
    ) {
    }

    ngDoBootstrap() {
        console.log('KioskAppModule - DoBoostrap');
    }

    //Setting up the fingerprint Id here
    async fetchFingerprintId() {
        await this.appSetupService.fetchFingerprintId();
    }

    public async isReady(): Promise<any> {
        await this.appSetupService.isReady();
    }
}

