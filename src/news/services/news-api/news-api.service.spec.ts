import { TestBed } from '@angular/core/testing';
import { } from 'jasmine';
import { INewsLatestApiRequest, INewsPagingInfo } from 'news/models/news.interface';
import { HttpService } from '../../../common/services/httpService/http.service';
import { NewApiService } from '../news-api/news-api.service';


describe('News Api Service', () => {

    let newsApiService: NewApiService;
    let httpService: jasmine.SpyObj<any>;

    beforeEach(() => {

        httpService = jasmine.createSpyObj('httpService', ['get', 'post']);

        TestBed.configureTestingModule({
            providers: [
                NewApiService,
                { provide: HttpService, useValue: httpService },

            ]
        });

        newsApiService = TestBed.inject(NewApiService);

    });


    it('should define news api service', () => {
        expect(newsApiService).toBeDefined();
    });

    it('should test method getCategories', async () => {

        httpService.post.and.resolveTo({});

        await newsApiService.getCategories({});
        expect(httpService.post).toHaveBeenCalledWith('/api/sessions/Article/Categories', {});
    });

    it('should test method getArchiveNewsByCategoryId', async () => {

        httpService.post.and.resolveTo({});

        await newsApiService.getArchiveNewsByCategoryId({} as INewsPagingInfo);
        expect(httpService.post).toHaveBeenCalledWith('/api/sessions/Article/ExecuteCmsPaging', {});

    });

    it('should test method getLatestNews', async () => {

        httpService.post.and.resolveTo({});

        await newsApiService.getLatestNews({});
        expect(httpService.post).toHaveBeenCalledWith('api/sessions/GenericCms/GetCmsPages',
            {
                requests: [{}]
            } as INewsLatestApiRequest);

    });


});
