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
import { NewsStateNames } from './news.constants';
import { NewsRoutesStateConfig } from './news.routing';
import { StorefrontModule } from 'storefront/module';
import { NewsFiltersComponent } from './components/news-filters/news-filters.component';
import { NewsResultsComponent } from './components/news-results/news-results.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { DynamicRoutes } from 'app/routing';
import { NewsStateService } from './services/state/news-state.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { NewsComponent } from './components/news/news.component';
import { PaginationModule } from 'common/ui/pagination/pagination.module';
import { DropdownModule } from 'common/ui/dropdown/dropdown.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NewsLatestResponseHelper } from './services/helpers/news-latest-response.helper';
import { NewsArchiveResHelper } from './services/helpers/news-archive-response.helper';
import { NewsFacadeApiService } from './services/news-facade-api/news-facade-api.service';
import { NewApiService } from './services/news-api/news-api.service';
import { NewsArticleComponent } from './components/news-article/news-article.component';
import { NewsCmsHelper } from './services/helpers/news-cms-helper';
import { DatePipe } from '@angular/common';

const componentDictionary = {
    [NewsStateNames.News]: NewsComponent,
    [NewsStateNames.NewsArticle]: NewsArticleComponent
};

const routesWithComponents = NewsRoutesStateConfig.map(route => {
    const routes = {
        ...route,
        component: componentDictionary[route.name]
    };
    return routes;
}
);

@NgModule({
    declarations: [
        NewsComponent,
        NewsFiltersComponent,
        NewsResultsComponent,
        NewsArticleComponent,
        NewsItemComponent],
    providers: [NewsLatestResponseHelper, NewsArchiveResHelper, NewsFacadeApiService, NewApiService,
        NewsStateService, NewsCmsHelper, DatePipe],
    imports: [
        DynamicRoutes([ENVIRON_CONFIG], (environConfig) => environConfig.useNewsRefresh ? routesWithComponents : []),
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
        MatButtonToggleModule
    ]

})
export class NewsModule {

}
