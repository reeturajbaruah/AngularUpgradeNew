import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NewsStateService } from 'news/services/state/news-state.service';
import { NewsComponent } from './news.component';
import { NewsFacadeApiService } from 'news/services/news-facade-api/news-facade-api.service';
import { NewApiService } from 'news/services/news-api/news-api.service';
import { NewsArchiveResHelper } from 'news/services/helpers/news-archive-response.helper';
import { NewsLatestResponseHelper } from 'news/services/helpers/news-latest-response.helper';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CmsModule } from 'cms/cms.module';
import { CmsUtilService } from 'cms/services';
import { PaginationStateService } from 'common/ui/pagination/services/pagination-state.service';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { ICategory, INewsResults, IQueryNews, IState, NewsAction, ViewType } from 'news/models/news.interface';
import { IPagingState } from 'common/ui/pagination/models/pagination.interface';
import { NewsCmsHelper } from 'news/services/helpers/news-cms-helper';
import { HttpService } from '../../../common/services/httpService/http.service';

describe('component: News', () => {

    let fixture: ComponentFixture<NewsComponent>;
    let component: NewsComponent;

    let newsStateServiceSpy: jasmine.SpyObj<NewsStateService>;
    let paginationStateServiceSpy: jasmine.SpyObj<PaginationStateService>;

    let facadeApiSpy: jasmine.SpyObj<NewsFacadeApiService>;
    let apiSpy: jasmine.SpyObj<NewApiService>;
    let latestResponseHelperSpy: jasmine.SpyObj<NewsLatestResponseHelper>;
    let archiveResHelperSpy: jasmine.SpyObj<NewsArchiveResHelper>;
    let httpService: jasmine.SpyObj<any>;
    let cmsUtilService: jasmine.SpyObj<CmsUtilService>;
    let stateService: StateService;
    let uiRouterGlobals: UIRouterGlobals;
    let cmsHelperSpy: jasmine.SpyObj<NewsCmsHelper>;


    beforeEach(async () => {
        newsStateServiceSpy = jasmine.createSpyObj('newsStateService', ['getState', 'dispatchEvent', 'subscribe', 'unsubscribe']);
        paginationStateServiceSpy = jasmine.createSpyObj('paginationStateService', ['subcribeEvent', 'dispatchPagingInfo']);

        facadeApiSpy = jasmine.createSpyObj('facadeApi', ['getPageInfo', 'refreshResults']);
        apiSpy = jasmine.createSpyObj('api', ['']);
        latestResponseHelperSpy = jasmine.createSpyObj('', ['']);
        archiveResHelperSpy = jasmine.createSpyObj('', ['']);
        httpService = jasmine.createSpyObj('httpService', ['get', 'post']);
        cmsUtilService = jasmine.createSpyObj('cmsUtilService', ['generateFileSrc']);

        stateService = jasmine.createSpyObj('state', ['go']);
        cmsHelperSpy = jasmine.createSpyObj('cmsHelper', ['initialize', 'reset']);


        uiRouterGlobals = {
            params: {}
        } as UIRouterGlobals;

        await TestBed
            .configureTestingModule({
                declarations: [
                    NewsComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [
                    CommonModule,
                    FormsModule,
                    CmsModule],
                providers: [
                    { provide: NewsStateService, useFactory: () => newsStateServiceSpy },
                    { provide: PaginationStateService, useFactory: () => paginationStateServiceSpy },
                    { provide: NewsFacadeApiService, useFactory: () => facadeApiSpy },
                    { provide: NewApiService, useFactory: () => apiSpy },
                    { provide: NewsLatestResponseHelper, useFactory: () => latestResponseHelperSpy },
                    { provide: NewsArchiveResHelper, useFactory: () => archiveResHelperSpy },
                    { provide: HttpService, useValue: httpService },
                    { provide: CmsUtilService, useFactory: () => cmsUtilService },
                    { provide: StateService, useValue: stateService },
                    { provide: NewsCmsHelper, useValue: cmsHelperSpy },
                    { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals }


                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(NewsComponent);
        component = fixture.debugElement.componentInstance;
    });

    it('should define news component', () => {
        expect(component).toBeDefined();
    });



    it('loads page - including filters, news results and pagination comp.', async () => {

        const state = {
            category: { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' } as ICategory,
            currentPage: 0,
            pageSize: 5,
            view: ViewType.Archive
        } as IState;

        newsStateServiceSpy.getState.and.returnValue(state);

        const pageInfo = {
            categories: [
                { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' },
                { displayName: 'All Electronic Tolling', isDefault: false, itemID: 'xyz1', queryID: 'pqr1' }
            ],
            results: {
                category: { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' },
                items: [
                    {
                        description: 'test1',
                        publishedOn: '9/19/2022',
                        subtitle: 'test1',
                        targetUrl: '',
                        title: 'test1',
                        category: 'A'
                    },
                    {
                        description: 'test2',
                        publishedOn: '9/19/2022',
                        subtitle: 'test2',
                        targetUrl: '',
                        title: 'test2',
                        category: 'B'
                    },
                    {
                        description: 'test3',
                        publishedOn: '9/19/2022',
                        subtitle: 'test3',
                        targetUrl: '',
                        title: 'test3',
                        category: 'C'
                    },
                    {
                        description: 'test4',
                        publishedOn: '9/19/202',
                        subtitle: 'test4',
                        targetUrl: '',
                        title: 'test4',
                        category: 'D'
                    },
                    {
                        description: 'test5',
                        publishedOn: '9/19/2022',
                        subtitle: 'test5',
                        targetUrl: '',
                        title: 'test5',
                        category: 'E'
                    }
                ],
                count: 15
            } as INewsResults,
            totalPages: 3
        } as IQueryNews;

        facadeApiSpy.getPageInfo.and.resolveTo(pageInfo);

        await component.ngOnInit();

        expect(component.categories).toEqual(pageInfo.categories);
        expect(component.newsResults).toEqual(pageInfo.results);

        const pagingState: IPagingState = {
            totalPages: pageInfo.totalPages,
            totalResultCount: pageInfo.results.count,
            currentpageItemsCount: pageInfo.results.items.length,
            currentPage: 0,
            itemsPerPage: 5
        };
        expect(paginationStateServiceSpy.dispatchPagingInfo).toHaveBeenCalledOnceWith(pagingState);

    });

    it('loads the page based on the URL params', async () => {

        uiRouterGlobals.params.category = 'All';
        uiRouterGlobals.params.filter = 'Latest';

        const state = {
            category: { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' } as ICategory,
            currentPage: 0,
            pageSize: 5,
            view: ViewType.Latest
        } as IState;

        newsStateServiceSpy.getState.and.returnValue(state);

        const pageInfo = {
            categories: [
                { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' },
                { displayName: 'All Electronic Tolling', isDefault: false, itemID: 'xyz1', queryID: 'pqr1' }
            ],
            results: {
                category: { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' },
                items: [
                    {
                        description: 'test1',
                        publishedOn: '9/19/2022',
                        subtitle: 'test1',
                        targetUrl: '',
                        title: 'test1'
                    },
                    {
                        description: 'test2',
                        publishedOn: '9/19/2022',
                        subtitle: 'test2',
                        targetUrl: '',
                        title: 'test2'
                    },
                    {
                        description: 'test3',
                        publishedOn: '9/19/2022',
                        subtitle: 'test3',
                        targetUrl: '',
                        title: 'test3'
                    },
                    {
                        description: 'test4',
                        publishedOn: '9/19/202',
                        subtitle: 'test4',
                        targetUrl: '',
                        title: 'test4'
                    },
                    {
                        description: 'test5',
                        publishedOn: '9/19/2022',
                        subtitle: 'test5',
                        targetUrl: '',
                        title: 'test5'
                    }
                ],
                count: 15
            } as INewsResults,
            totalPages: 3
        } as IQueryNews;

        facadeApiSpy.getPageInfo.and.resolveTo(pageInfo);

        await component.ngOnInit();

        expect(facadeApiSpy.getPageInfo).toHaveBeenCalledWith(
            { category: 'All', filter: ViewType.Latest });

    });


    it('refresh the news results when category is changed or filter view is changed', async () => {

        uiRouterGlobals.params.category = 'All';
        uiRouterGlobals.params.filter = 'Latest';

        const state = {
            category: { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' } as ICategory,
            currentPage: 0,
            pageSize: 5,
            view: ViewType.Archive
        } as IState;

        facadeApiSpy.refreshResults.and.resolveTo({
            newsResults: {
                category: { displayName: 'All Electronic Tolling', isDefault: true, itemID: 'xyz', queryID: 'pqr' },
                count: 5,
                items: [{
                    description: 'test1',
                    publishedOn: '9/19/2022',
                    subtitle: 'test1',
                    targetUrl: '',
                    title: 'test1',
                    category: 'A'
                },
                {
                    description: 'test2',
                    publishedOn: '9/19/2022',
                    subtitle: 'test2',
                    targetUrl: '',
                    title: 'test2',
                    category: 'B'
                },]

            },
            noOfPages: 5
        });

        await component.refreshPage(state);
        expect(paginationStateServiceSpy.dispatchPagingInfo).toHaveBeenCalled();

        expect(stateService.go).toHaveBeenCalled();
    });


});
