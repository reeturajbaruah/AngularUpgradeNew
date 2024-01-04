import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

import {
    FaqComponent,
    SearchResultsComponent,
    FaqResultsComponent,
    FaqSearchComponent, TopResultsComponent,
    FaqItemComponent
} from './components';

import { FaqApiService, FaqManagerService, FaqPaginationEventService, FaqFacadeService, FaqStateService } from './services';
import { DynamicRoutes } from 'app/routing';
import { DropdownModule } from 'common/ui/dropdown/dropdown.module';
import { PaginationModule } from 'common/ui/pagination/pagination.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { OverlayModule } from '@angular/cdk/overlay';
import { FaqStatesConfig } from './states-config';
import { AccordionModule } from 'shared/ui/display/accordion/accordion.module';
import { FaqSharedService } from './services/faq-shared/faq-shared.service';
import { UIRouterModule } from '@uirouter/angular';

@NgModule({
    declarations: [
        FaqComponent,
        FaqSearchComponent,
        FaqResultsComponent,
        SearchResultsComponent,
        TopResultsComponent,
        FaqItemComponent
    ],
    providers: [
        FaqApiService,
        FaqManagerService,
        FaqFacadeService,
        FaqStateService,
        FaqPaginationEventService,
        FaqSharedService
    ],
    imports: [
        UIRouterModule.forChild({ states: FaqStatesConfig }),
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
        PaginationModule,
        DropdownModule,
        MatButtonToggleModule,
        AccordionModule
    ]
})
export class FaqModule {

}

