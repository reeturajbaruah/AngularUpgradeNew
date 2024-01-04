import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { downgrade, HybridModule } from 'hybrid/module';
import { CommonModule } from '@angular/common';
import { CommonModule as HctraCommonModule } from 'common/module';

import { LanguageSelectComponent } from './languageSelect/languageSelect.component';
import { TranslationService } from './services';

import { TranslatableDirective } from './directives/translatable.directive';

import { FormsModule } from '@angular/forms';
import { TranslationServiceImplemented } from './services/translationService/translation.service';
import { PipesModule } from 'pipes/module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { TranslationDisclaimerComponent } from './disclaimer/translationDisclaimer.component';
import {
    StateNames, CmsIds, Routes,
    stateNames, cmsIds, urlPaths
} from './constants';

import { routes } from './routing';
import { UIRouterModule } from '@uirouter/angular';
import { MatSelectModule } from '@angular/material/select';
const routesWithComponents = routes.map(route => {
    const componentDictionary = {
        [stateNames.TranslationDisclaimer]: TranslationDisclaimerComponent,
    };

    return {
        ...route,
        component: componentDictionary[route.name]
    };
});

downgrade('translationService', { service: TranslationService });
downgrade('languageSelect', { component: LanguageSelectComponent });
downgrade('translationDisclaimer', { component: TranslationDisclaimerComponent });

downgrade('translateContent', {
    custom: (angular, module, registrationName) => {

        const factory: any = (translationService) => (
            {
                restrict: 'A',
                link: (scope: any, element: any) => {

                    const directive = new TranslatableDirective(
                        translationService,
                        { nativeElement: element[0] });

                    scope.$on('$destroy', () => directive.ngOnDestroy());
                    directive.ngOnInit();
                }
            });

        factory.$inject = ['translationService'];

        module.directive(registrationName, factory);
    }
});


@NgModule({
    declarations: [
        LanguageSelectComponent,
        TranslatableDirective,
        TranslationDisclaimerComponent
    ],
    exports: [
        LanguageSelectComponent,
        TranslatableDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        PipesModule,
        FlexLayoutModule,
        MatDividerModule,
        MatSelectModule,
        HctraCommonModule,
        MatIconModule,
        UIRouterModule.forChild({ states: routesWithComponents })
    ]
})
export class TranslationModule {
   
    static forRoot(): ModuleWithProviders<TranslationModule> {
        return {
            ngModule: TranslationModule,
            providers: [
                { provide: TranslationService, useClass: TranslationServiceImplemented },
                { provide: StateNames, useValue: stateNames },
                { provide: CmsIds, useValue: cmsIds },
                { provide: Routes, useValue: urlPaths }
            ]
        };
    }
 }
