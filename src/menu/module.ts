import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { downgrade } from '../hybrid/module';
import { ENVIRON_CONFIG, CommonModule as HctraCommonModule } from 'common/module';

import { FrameComponent } from 'menu/frame/frame.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CharmsComponent } from './charms/charms.component';
import { MatIconModule } from '@angular/material/icon';
import { MenuLinkMapperService, LinkAuthorizationService, MenuNavigationService, ActiveBreakPointsService } from './services';
import { MatDialogModule } from '@angular/material/dialog';
import { ParentModalComponent } from './hamburger/parent/parentModal.component';
import { ContainerComponent } from './hamburger/container/container.component';
import { HamburgerRowComponent } from './hamburger/row/hamburgerRow.component';
import { ChildModalComponent } from './hamburger/child/childModal.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { AccountDropdownComponent } from './accountDropdown/accountDropDown.component';
import { SearchComponent } from './search/search.component';
import { TranslationModule } from 'translation/module';
import { MenuLinkHelper } from './services/menuLinkHelper';
import { HamburgerMenuLayersComponent } from './hamburger/menu-layers/hamburgerMenuLayers.component';
import { routes } from './menu.routing';
import { CmsIds, Routes, StateNames, cmsIds, stateNames, urlPaths } from './constants';
import { GoogleSearchComponent } from './googleSearch/googleSearch.component';
import { DynamicRoutes } from 'app/routing';

downgrade('menuFrameComponent', { component: FrameComponent });

const routesWithComponents = routes.map(route => {
    const componentDictionary = {
        [stateNames.Search]: GoogleSearchComponent
    };

    return {
        ...route,
        component: componentDictionary[route.name]
    };
});

@NgModule({
    declarations: [
        FrameComponent,
        HeaderComponent,
        FooterComponent,
        CharmsComponent,
        ContainerComponent,
        HamburgerRowComponent,
        HamburgerMenuLayersComponent,
        AccountDropdownComponent,
        SearchComponent,
        ParentModalComponent,
        ChildModalComponent,
        GoogleSearchComponent
    ],
    imports: [
        DynamicRoutes([ENVIRON_CONFIG], (environConfig) => routesWithComponents),

        TranslationModule,
        FlexLayoutModule,
        CommonModule,
        MatIconModule,
        MatDialogModule,
        MatDividerModule,
        MatMenuModule,
        HctraCommonModule
    ],
    exports: [FrameComponent],
    providers: [
        ActiveBreakPointsService,
        LinkAuthorizationService,
        MenuLinkMapperService,
        MenuNavigationService,
        MenuLinkHelper,
        { provide: StateNames, useValue: stateNames },
        { provide: CmsIds, useValue: cmsIds },
        { provide: Routes, useValue: urlPaths }
    ]
})
export class MenuModule {
}
