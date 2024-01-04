import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule as HctraCommonModule, ENVIRON_CONFIG } from 'common/module';
import { PipesModule } from 'pipes/module';
import { ValidationModule } from 'validation/module';
import { StorefrontModule } from 'storefront/module';
import { VehiclesCommonModule } from 'vehicles/common/vehicles-common.module';
import { TagReactivateModule } from 'vehicles/eztag/reactivate/module';
import { GridComponent } from './components/grid/grid.component';
import { SearchComponent } from './components/search/search.component';
import { LandingComponent } from './components/landing/landing.component';
import { RoutesConfig } from './routes-config';
import { States as SharedStates } from '../shared';
import { DynamicRoutes } from 'app/routing';
import { ReceiptDataHelperService } from 'vehicles/shared/services/receipt-data-helper/receipt-data-helper.service';
import { WebApisService as ProfileApis } from 'profile/services';
import { ReplacementManagerService } from 'vehicles/eztag/replacement';
import { EditPlateComponent } from 'vehicles/ezplate/edit/editPlate.component';
import { EditTagComponent } from 'vehicles/eztag/edit/editTag.component';
import { VehiclesManagerService, WebApiService, VehicleOperationsService } from 'vehicles/shared';
import { VehiclesSortingService } from './services/sorting/sorting-service';
import { MatSortModule } from '@angular/material/sort';

const componentDictionary = {
    [SharedStates.Root]: LandingComponent
};

const routesWithComponents = RoutesConfig.map(route => (
    {
        ...route,
        component: componentDictionary[route.name]
    }
));

@NgModule({
    declarations: [
        GridComponent,
        SearchComponent,
        LandingComponent,
        EditPlateComponent,
        EditTagComponent
    ],
    imports: [
        DynamicRoutes([ENVIRON_CONFIG], (environConfig) => routesWithComponents),
        HctraCommonModule,
        CommonModule,
        FormsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatIconModule,
        MatDividerModule,
        PipesModule,
        FlexLayoutModule,
        ValidationModule,
        StorefrontModule,
        VehiclesCommonModule,
        TagReactivateModule,
        MatSortModule
    ],
    providers: [
        WebApiService,
        ProfileApis,
        VehiclesManagerService,
        DatePipe,
        TitleCasePipe,
        ReceiptDataHelperService,
        ReplacementManagerService,
        VehiclesSortingService,
        VehicleOperationsService
    ]
})
export class ManageVehiclesModule {

}
