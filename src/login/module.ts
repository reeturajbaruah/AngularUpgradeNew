import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';

import { environment } from 'environments/environment';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CommonModule as HctraCommonModule } from 'common/module';

import { StorefrontModule } from 'storefront/module';
import { ValidationModule } from 'validation/module';
import { EzTagAppRedirectLinkService } from 'common/services/ezTagAppRedirectLinkService/ezTagAppRedirectLink.service';

//components
import { LoginComponent } from './login/login.component';
import { AddMissingInformationComponent } from './addMissingInformation/addMissingInformation.component';
import { ClaimSessionComponent } from './claimSession/claimSession.component';

// Refresh imports
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { WebApiService } from './services/webApi.service';

//other
import { routes } from 'login/routing';
import {
    stateNames, urlPaths, StateNames
} from './constants';
export * from './constants';

const routesWithComponents = routes.map(route => {
    const componentDictionary = {
        [stateNames.Login]: LoginComponent,
        [stateNames.AddMissingInformation]: AddMissingInformationComponent,
        [stateNames.ClaimSession]: ClaimSessionComponent,
    };

    return {
        ...route,
        component: componentDictionary[route.name]
    };
});

@NgModule({
    declarations: [
        LoginComponent,
        AddMissingInformationComponent,
        ClaimSessionComponent
    ],
    imports: [
        CommonModule,
        HctraCommonModule, StorefrontModule,
        UIRouterModule.forChild({ states: routesWithComponents }),
        MatFormFieldModule, FormsModule,
        MatDividerModule,
        FlexLayoutModule,
        ValidationModule,
        MatSelectModule
    ],
    providers: [
        { provide: StateNames, useValue: stateNames },
        EzTagAppRedirectLinkService,
        WebApiService
    ]
})
export class LoginModule {
}
