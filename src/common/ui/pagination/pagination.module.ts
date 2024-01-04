import { NgModule } from '@angular/core';
import { PaginationComponent } from './components/pagination.component';
import { PaginationStateService } from './services/pagination-state.service';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule as HctraCommonModule } from 'common/module';
import { PipesModule } from 'pipes/module';
import { ValidationModule } from 'validation/module';
import { StorefrontModule } from 'storefront/module';
import { OverlayModule } from '@angular/cdk/overlay';
import { DropdownModule } from '../dropdown/dropdown.module';


@NgModule({
    declarations: [PaginationComponent],
    providers: [
        PaginationStateService
    ],
    exports: [PaginationComponent],
    imports: [
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
        OverlayModule,
        DropdownModule
    ]

})
export class PaginationModule {

}
