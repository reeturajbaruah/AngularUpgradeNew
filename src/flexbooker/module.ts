import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { downgrade, HybridModule } from 'hybrid/module';
import { CommonModule } from '@angular/common';
import { CommonModule as HctraCommonModule } from 'common/module';
import { FlexbookerService } from './services/flexbooker.service';

import { FormsModule } from '@angular/forms';
import { PipesModule } from 'pipes/module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FlexbookerComponent } from './flexbooker.component';
import { MatSelectModule } from '@angular/material/select';

downgrade('flexbookerComponent', { component: FlexbookerComponent, outputs:['skipBooking', 'bookingComplete'] });
downgrade('flexbookerService', { service: FlexbookerService });

@NgModule({
    declarations: [
        FlexbookerComponent
    ],
    exports: [
        FlexbookerComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        PipesModule,
        FlexLayoutModule,
        MatDividerModule,
        MatSelectModule,
        HctraCommonModule,
        MatIconModule
    ]
})
export class FlexbookerModule {
    constructor(@Optional() @SkipSelf() module?: FlexbookerModule) {
        if (module) {
            throw new Error(
                'FlexbookerModule is already loaded in a root module. Import it only once in the root module.');
        }
    }

    static forRoot(): ModuleWithProviders<FlexbookerModule> {
        return {
            ngModule: FlexbookerModule,
            providers: [
            ]
        };
    }
 }
