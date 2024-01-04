import { NgModule } from '@angular/core';
import { ContactUsComponent, DocumentsComponent, FrameComponent, StoreLocatorComponent, TopFaqComponent } from './components';

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

import { DropdownModule } from 'common/ui/dropdown/dropdown.module';
import { PaginationModule } from 'common/ui/pagination/pagination.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { OverlayModule } from '@angular/cdk/overlay';
import { HelpAndSupportStatesConfig } from './states-config';
import { States } from './states';
import { HelpAndSupportManagerService } from './services/manager/help-and-support-manager.service';
import { TabsComponent } from './components/tabs/tabs.component';
import { AccordionModule } from 'shared/ui/display/accordion/accordion.module';
import { UIRouterModule } from '@uirouter/angular';

const dictionary = {
    [States.ContactUs]: ContactUsComponent,
    [States.Documents]: DocumentsComponent,
    [States.HelpAndSupportFrame]: FrameComponent,
    [States.StoreLocator]: StoreLocatorComponent,
    [States.TopFiveFaq]: TopFaqComponent
};

const routesWithComponents = HelpAndSupportStatesConfig.map(stateConfig => (
    {
        ...stateConfig,
        component: dictionary[stateConfig.name]
    }));

@NgModule({
    declarations: [
        ContactUsComponent,
        DocumentsComponent,
        FrameComponent,
        StoreLocatorComponent,
        TopFaqComponent,
        TabsComponent
    ],
    providers: [
        HelpAndSupportManagerService
    ],
    imports: [
        UIRouterModule.forChild({ states: routesWithComponents }),
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

export class HelpAndSupportModule {

}
