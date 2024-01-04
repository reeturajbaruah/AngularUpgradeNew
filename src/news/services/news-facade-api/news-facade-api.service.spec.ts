import { TestBed } from '@angular/core/testing';
import { } from 'jasmine';
import { ICategory, INewsQueryParams, INewsResults, IState, NewsAction, ViewType } from 'news/models/news.interface';
import { NewsArchiveResHelper } from '../helpers/news-archive-response.helper';
import { NewsLatestResponseHelper } from '../helpers/news-latest-response.helper';
import { NewApiService } from '../news-api/news-api.service';
import { NewsStateService } from '../state/news-state.service';
import { NewsFacadeApiService } from './news-facade-api.service';


describe('News Facade Api Service', () => {

    let newsFacadeApiService: NewsFacadeApiService;
    let newsStateServiceSpy: jasmine.SpyObj<NewsStateService>;
    let newApiServiceSpy: jasmine.SpyObj<NewApiService>;
    let newsArchiveResHelperSpy: jasmine.SpyObj<NewsArchiveResHelper>;
    let newsLatestResponseHelperSpy: jasmine.SpyObj<NewsLatestResponseHelper>;


    beforeEach(() => {
        newsStateServiceSpy = jasmine.createSpyObj('stateService', ['setInitialState', 'getState']);
        newApiServiceSpy = jasmine.createSpyObj('api', ['getCategories', 'getArchiveNewsByCategoryId', 'getLatestNews']);
        newsArchiveResHelperSpy = jasmine.createSpyObj('archiveResHelper', ['parseResponse']);
        newsLatestResponseHelperSpy = jasmine.createSpyObj('newsLatestResHelper', ['parseResponse']);


        TestBed.configureTestingModule({
            providers: [
                NewsFacadeApiService,
                { provide: NewsStateService, useFactory: () => newsStateServiceSpy },
                { provide: NewApiService, useFactory: () => newApiServiceSpy },
                { provide: NewsArchiveResHelper, useFactory: () => newsArchiveResHelperSpy },
                { provide: NewsLatestResponseHelper, useFactory: () => newsLatestResponseHelperSpy }
            ]
        });

        newsFacadeApiService = TestBed.inject(NewsFacadeApiService);

    });

    it('should define news facade api service', () => {
        expect(newsFacadeApiService).toBeDefined();
    });


    it('tests categories in method getPageInfo when view is archive', async () => {

        const state = {
            category: { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' } as ICategory,
            currentPage: 0,
            pageSize: 5,
            view: ViewType.Archive
        } as IState;

        newsStateServiceSpy.getState.and.returnValue(state);

        newApiServiceSpy.getCategories.and.resolveTo(
            {
                categories: [
                    {
                        displayName: 'All',
                        itemName: null,
                        itemID: '5da904c7-f1cd-46ad-b974-ac47c7a83221',
                        queryID: '441AEF0E-058D-41B2-A336-47CB339A523F'
                    },
                    {
                        displayName: 'All Electronic Tolling',
                        itemName: null,
                        itemID: '5da904c7-f1cd-46ad-b974-ac47c7a83224',
                        queryID: '441AEF0E-058D-41B2-A336-47CB339A5239'
                    }
                ]
            }
        );

        spyOn<any>(newsFacadeApiService, 'setDefaultSelectedCategory');
        spyOn<any>(newsFacadeApiService, 'setSelectedView');
        spyOn<any>(newsFacadeApiService, 'getLatestNews');

        spyOn<any>(newsFacadeApiService, 'getArchiveNews').and.resolveTo({
            newsResults: {},
            noOfPages: 5
        });

        const res = await newsFacadeApiService.getPageInfo();

        expect(res.categories.length).toEqual(2);
        expect(newsFacadeApiService['getArchiveNews']).toHaveBeenCalled();




    });

    it('tests categories in method getPageInfo when view is latest', async () => {

        const state = {
            category: { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' } as ICategory,
            currentPage: 0,
            pageSize: 5,
            view: ViewType.Latest
        } as IState;

        newsStateServiceSpy.getState.and.returnValue(state);

        newApiServiceSpy.getCategories.and.resolveTo(
            {
                categories: [
                    {
                        displayName: 'All',
                        itemName: null,
                        itemID: '5da904c7-f1cd-46ad-b974-ac47c7a83221',
                        queryID: '441AEF0E-058D-41B2-A336-47CB339A523F'
                    },
                    {
                        displayName: 'All Electronic Tolling',
                        itemName: null,
                        itemID: '5da904c7-f1cd-46ad-b974-ac47c7a83224',
                        queryID: '441AEF0E-058D-41B2-A336-47CB339A5239'
                    }
                ]
            }
        );

        spyOn<any>(newsFacadeApiService, 'setDefaultSelectedCategory');
        spyOn<any>(newsFacadeApiService, 'setSelectedView');

        spyOn<any>(newsFacadeApiService, 'getLatestNews').and.resolveTo({});
        spyOn<any>(newsFacadeApiService, 'getArchiveNews');

        const res = await newsFacadeApiService.getPageInfo();

        expect(res.categories.length).toEqual(2);
        expect(newsFacadeApiService['getLatestNews']).toHaveBeenCalled();

    });

    it('tests getLatestNews method when view is latest', async () => {

        const state = {
            category: { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' } as ICategory,
            currentPage: 0,
            pageSize: 5,
            view: ViewType.Latest
        } as IState;

        newsStateServiceSpy.getState.and.returnValue(state);

        const categories = [
            { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' },
            { displayName: 'All Electronic Tolling', isDefault: false, itemID: 'xyz1', queryID: 'pqr1' }
        ] as ICategory[];

        spyOn<any>(newsFacadeApiService, 'getCategories').and.resolveTo(categories);

        spyOn<any>(newsFacadeApiService, 'setDefaultSelectedCategory');
        spyOn<any>(newsFacadeApiService, 'setSelectedView');

        newApiServiceSpy.getLatestNews.and.resolveTo({});

        const results = {
            count: 5,
            items: [
                {
                    description: 'test2',
                    publishedOn: '9/19/2022',
                    subtitle: 'test2',
                    targetUrl: '',
                    title: 'test2'
                }
            ]
        } as INewsResults;

        newsLatestResponseHelperSpy.parseResponse.and.returnValue(results);

        const res = await newsFacadeApiService.getPageInfo();
        expect(res.categories).toEqual(categories);
        expect(res.results).toEqual(results);
        expect(res.results.category).toEqual(state.category);

        expect(newApiServiceSpy.getLatestNews).toHaveBeenCalled();
        expect(newsLatestResponseHelperSpy.parseResponse).toHaveBeenCalled();

    });

    it('tests getArchiveNews method when view is archive', async () => {

        const state = {
            category: { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' } as ICategory,
            currentPage: 0,
            pageSize: 5,
            view: ViewType.Archive
        } as IState;

        newsStateServiceSpy.getState.and.returnValue(state);

        const categories = [
            { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' },
            { displayName: 'All Electronic Tolling', isDefault: false, itemID: 'xyz1', queryID: 'pqr1' }
        ] as ICategory[];

        spyOn<any>(newsFacadeApiService, 'getCategories').and.resolveTo(categories);
        spyOn<any>(newsFacadeApiService, 'setDefaultSelectedCategory');
        spyOn<any>(newsFacadeApiService, 'setSelectedView');

        newApiServiceSpy.getArchiveNewsByCategoryId.and.resolveTo({
            numberOfPages: 5
        });

        const results = {
            count: 5,
            items: [
                {
                    description: 'test1',
                    publishedOn: '9/19/2022',
                    subtitle: 'test1',
                    targetUrl: '',
                    title: 'test1'
                }
            ],

        } as INewsResults;

        newsArchiveResHelperSpy.parseResponse.and.returnValue(results);

        const res = await newsFacadeApiService.getPageInfo();
        expect(res.results).toEqual(results);

        expect(newApiServiceSpy.getArchiveNewsByCategoryId).toHaveBeenCalled();
        expect(newsArchiveResHelperSpy.parseResponse).toHaveBeenCalled();

    });

    it('tests method setDefaultSelectedCategory without params when view is latest', async () => {

        const state = {
            category: { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' } as ICategory,
            currentPage: 0,
            pageSize: 5,
            view: ViewType.Latest
        } as IState;

        newsStateServiceSpy.getState.and.returnValue(state);

        const categories = [
            { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' },
            { displayName: 'All Electronic Tolling', isDefault: false, itemID: 'xyz1', queryID: 'pqr1' }
        ] as ICategory[];

        spyOn<any>(newsFacadeApiService, 'getCategories').and.resolveTo(categories);
        spyOn<any>(newsFacadeApiService, 'setSelectedView');

        spyOn<any>(newsFacadeApiService, 'getLatestNews').and.resolveTo({});
        spyOn<any>(newsFacadeApiService, 'getArchiveNews');

        await newsFacadeApiService.getPageInfo();

        const defaultCat = categories.filter(cat => cat.isDefault === true)[0];

        expect(newsStateServiceSpy.setInitialState).toHaveBeenCalledWith({
            action: NewsAction.Category,
            value: defaultCat
        });

    });


    it('tests method setDefaultSelectedCategory without params when view is archive', async () => {

        const state = {
            category: { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' } as ICategory,
            currentPage: 0,
            pageSize: 5,
            view: ViewType.Archive
        } as IState;

        newsStateServiceSpy.getState.and.returnValue(state);

        const categories = [
            { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' },
            { displayName: 'All Electronic Tolling', isDefault: false, itemID: 'xyz1', queryID: 'pqr1' }
        ] as ICategory[];

        spyOn<any>(newsFacadeApiService, 'getCategories').and.resolveTo(categories);
        spyOn<any>(newsFacadeApiService, 'setSelectedView');

        spyOn<any>(newsFacadeApiService, 'getLatestNews').and.resolveTo({});
        spyOn<any>(newsFacadeApiService, 'getArchiveNews').and.resolveTo({
            newsResults: {},
            noOfPages: 5
        });
        await newsFacadeApiService.getPageInfo();

        const defaultCat = categories.filter(cat => cat.isDefault === true)[0];

        expect(newsStateServiceSpy.setInitialState).toHaveBeenCalledWith({
            action: NewsAction.Category,
            value: defaultCat
        });

    });

    it('tests method setDefaultSelectedCategory with URL params when view is latest', async () => {

        const state = {
            category: { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' } as ICategory,
            currentPage: 0,
            pageSize: 5,
            view: ViewType.Latest
        } as IState;

        newsStateServiceSpy.getState.and.returnValue(state);

        const categories = [
            { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' },
            { displayName: 'All Electronic Tolling', isDefault: false, itemID: 'xyz1', queryID: 'pqr1' }
        ] as ICategory[];

        spyOn<any>(newsFacadeApiService, 'getCategories').and.resolveTo(categories);
        spyOn<any>(newsFacadeApiService, 'setSelectedView');

        spyOn<any>(newsFacadeApiService, 'getLatestNews').and.resolveTo({});
        spyOn<any>(newsFacadeApiService, 'getArchiveNews');

        await newsFacadeApiService.getPageInfo({
            category: 'All Electronic Tolling',
            filter: ViewType.Latest
        } as INewsQueryParams);


        expect(newsStateServiceSpy.setInitialState).toHaveBeenCalledWith({
            action: NewsAction.Category,
            value: { displayName: 'All Electronic Tolling', isDefault: false, itemID: 'xyz1', queryID: 'pqr1' }
        });

    });

    it('tests method setSelectedView without URL params when view is latest', async () => {

        const state = {
            category: { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' } as ICategory,
            currentPage: 0,
            pageSize: 5,
            view: ViewType.Latest
        } as IState;

        newsStateServiceSpy.getState.and.returnValue(state);

        const categories = [
            { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' },
            { displayName: 'All Electronic Tolling', isDefault: false, itemID: 'xyz1', queryID: 'pqr1' }
        ] as ICategory[];

        spyOn<any>(newsFacadeApiService, 'getCategories').and.resolveTo(categories);
        spyOn<any>(newsFacadeApiService, 'setDefaultSelectedCategory');

        spyOn<any>(newsFacadeApiService, 'getLatestNews').and.resolveTo({});
        spyOn<any>(newsFacadeApiService, 'getArchiveNews');

        await newsFacadeApiService.getPageInfo();

        expect(newsStateServiceSpy.setInitialState).toHaveBeenCalledWith({
            action: NewsAction.ToggleView,
            value: ViewType.Latest
        });

    });

    it('tests method setSelectedView with URL params when view is latest', async () => {

        const state = {
            category: { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' } as ICategory,
            currentPage: 0,
            pageSize: 5,
            view: ViewType.Archive
        } as IState;

        newsStateServiceSpy.getState.and.returnValue(state);

        const categories = [
            { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' },
            { displayName: 'All Electronic Tolling', isDefault: false, itemID: 'xyz1', queryID: 'pqr1' }
        ] as ICategory[];

        spyOn<any>(newsFacadeApiService, 'getCategories').and.resolveTo(categories);
        spyOn<any>(newsFacadeApiService, 'setDefaultSelectedCategory');

        spyOn<any>(newsFacadeApiService, 'getLatestNews').and.resolveTo({});
        spyOn<any>(newsFacadeApiService, 'getArchiveNews').and.resolveTo({
            newsResults: {},
            noOfPages: 5
        });

        await newsFacadeApiService.getPageInfo({
            category: 'All Electronic Tolling',
            filter: ViewType.Archive
        } as INewsQueryParams);

        expect(newsStateServiceSpy.setInitialState).toHaveBeenCalledWith({
            action: NewsAction.ToggleView,
            value: ViewType.Archive
        });

    });

    it('tests method refreshResults when view is latest', async () => {

        const state = {
            category: { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' } as ICategory,
            currentPage: 0,
            pageSize: 5,
            view: ViewType.Latest
        } as IState;

        newsStateServiceSpy.getState.and.returnValue(state);

        spyOn<any>(newsFacadeApiService, 'getLatestNews').and.resolveTo({});

        await newsFacadeApiService.refreshResults(state);
        expect(newsFacadeApiService['getLatestNews']).toHaveBeenCalled();
    });

    it('tests method refreshResults when view is archive', async () => {

        const state = {
            category: { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' } as ICategory,
            currentPage: 0,
            pageSize: 5,
            view: ViewType.Archive
        } as IState;

        newsStateServiceSpy.getState.and.returnValue(state);

        spyOn<any>(newsFacadeApiService, 'getArchiveNews').and.resolveTo({
            newsResults: {},
            noOfPages: 5
        });

        await newsFacadeApiService.refreshResults(state);
        expect(newsFacadeApiService['getArchiveNews']).toHaveBeenCalled();
    });

});
