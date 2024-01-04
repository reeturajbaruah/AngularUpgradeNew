import { NgModule } from '@angular/core';
import { CommonModule as HctraCommonModule } from 'common/module';
import { ActivateRoutesStateConfig } from './activate.routing';
import { ActivateStateNames } from './activate.constants';
import { ActivateEzTagComponent } from './components/activateEzTag/activateEzTag.component';
import { ActivateApiService } from './services/activate-api/activate-api.service';
import { ActivateFacadeApiService } from './services/activate-facade-api/activate-facade-api.service';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { PipesModule } from 'pipes/module';
import { MatIconModule } from '@angular/material/icon';
import { ValidationModule } from 'validation/module';
import { StorefrontModule } from 'storefront/module';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { CompletionComponent } from './components/completion/completion.component';
import { VehicleCartRowModule } from 'vehicles/common/vehicleCartRow/vehicle-cart-row.module';
import { CommonModule } from '@angular/common';
import { MountEzTagComponent } from './components/mountEzTag/mountEzTag.component';
import { UIRouterModule } from '@uirouter/angular';

const componentDictionary = {
    [ActivateStateNames.Activate]: ActivateEzTagComponent,
    [ActivateStateNames.Confirm]: ConfirmComponent,
    [ActivateStateNames.Completion]: CompletionComponent
};

const routesWithComponents = ActivateRoutesStateConfig.map(route => {
    const routes = {
        ...route,
        component: componentDictionary[route.name]
    };
    return routes;
}
);

@NgModule({
    declarations: [ActivateEzTagComponent, ConfirmComponent, CompletionComponent, MountEzTagComponent],
    providers: [
        ActivateApiService,
        ActivateFacadeApiService
    ],
    imports: [
        UIRouterModule.forChild({ states: routesWithComponents }),
        CommonModule,
        HctraCommonModule,
        FormsModule,
        MatDividerModule,
        VehicleCartRowModule,
        PipesModule,
        MatIconModule,
        MatSelectModule,
        MatFormFieldModule,
        FlexLayoutModule,
        ValidationModule,
        StorefrontModule
    ]

})
export class ActivateEZTagModule {

}
