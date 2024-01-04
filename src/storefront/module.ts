import { StorefrontService } from './services/storefront.service';
import { StorefrontModalService } from './services/modal.service';

downgrade('kioskAppComponent', { component: KioskAppComponent });

import {  NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { routes } from './routing';

import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { WizardStateResolverService } from './services/wizardStateResolver.service';
export { WizardStateResolverService } from './services/wizardStateResolver.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export { StorefrontUtilityComponent } from './utility/utility.component';

import { TranslationModule } from 'translation/module';

import { StartPageComponent } from './startPage/startPage.component';
import { LanguageSelectComponent } from './languageSelect/languageSelect.component';
import { GoogleTranslatedIconComponent } from './googleTranslatedIcon/googleTranslatedIcon.component';

import { downgrade } from 'hybrid/module';
import { cmsIds } from './constants';

import { MenuModule } from 'menu/module';
import { CommonModule as HctraCommonModule, ENVIRON_CONFIG, WizardStateResolver } from 'common/module';
import { WizardStateResolverFactory } from 'common/ui';
import { DynamicRoutes } from 'app/routing';
import { KioskAppComponent } from './kiosk-app/kiosk-app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SelectionComponent } from './selection/selection.component';
import { GenericDialogComponent } from './generic-dialog/generic-dialog.component';
import { SurveyComponent } from './survey/survey.component';
import { StorefrontUtilityService } from './services/storefrontUtility.service';
import { BannerComponent } from './banner/banner.component';
import { ExternalDialogComponent } from './external-dialog/external-dialog.component';
import { CreditCardDialogComponent } from './credit-card-dialog/credit-card-dialog.component';
import { StorefrontUtilityComponent } from './utility/utility.component';

downgrade('storefrontCmsIds', { constant: cmsIds });
downgrade('kioskLanguageSelectComponent', { component: LanguageSelectComponent });
downgrade('kioskGoogleTranslatedIconComponent', { component: GoogleTranslatedIconComponent });

@NgModule({
    declarations: [StorefrontUtilityComponent],
    exports: [StorefrontUtilityComponent],
    providers: [
        WizardStateResolverService,
        WizardStateResolverFactory
    ],
    imports: [
        HctraCommonModule,
        CommonModule,
        TranslationModule,
        MatSelectModule,
        FormsModule,
    ]
})
export class StorefrontModule {
}

@NgModule({
    declarations: [
        StartPageComponent,
        LanguageSelectComponent,
        GoogleTranslatedIconComponent,
        SelectionComponent,
        SurveyComponent,
        SideMenuComponent,
        KioskAppComponent,
        GenericDialogComponent,
        ExternalDialogComponent,
        CreditCardDialogComponent,
        BannerComponent
    ],
    exports: [
        KioskAppComponent
    ],
    imports: [
        HctraCommonModule,
        CommonModule,
        MenuModule,
        TranslationModule,
        MatSelectModule,
        FormsModule,
        BrowserAnimationsModule,
        DynamicRoutes([ENVIRON_CONFIG], (environConfig) => {
            const versionStr = environConfig.storefrontConfigs.version || '1.0.0';
            const majorVersion = versionStr.split('.')[0];
            const useVersionTwoPlus = majorVersion > 1;

            if (useVersionTwoPlus) {
                return routes;
            } else {
                return [];
            }
        })
    ],
    providers: [
        StorefrontService,
        StorefrontModalService,
        StorefrontUtilityService,
        WizardStateResolverFactory,
        { provide: WizardStateResolver, useClass: WizardStateResolverService }
    ]
})
export class StorefrontCoreModule {
}
