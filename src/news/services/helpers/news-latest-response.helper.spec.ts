import { DatePipe } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { CmsUtilService } from 'cms/services';
import { } from 'jasmine';
import { INewsResults } from 'news/models/news.interface';
import { NewsLatestResponseHelper } from './news-latest-response.helper';


describe('News Latest Response Helper Service', () => {

    let newsLatestResponseHelper: NewsLatestResponseHelper;
    let cmsUtilService: jasmine.SpyObj<CmsUtilService>;
    let datePipe: jasmine.SpyObj<DatePipe>;

    beforeEach(() => {

        cmsUtilService = jasmine.createSpyObj('cmsUtilService', ['processArticleArray']);
        datePipe = jasmine.createSpyObj('datePipe', ['transform']);

        TestBed.configureTestingModule({
            providers: [
                NewsLatestResponseHelper,
                { provide: CmsUtilService, useFactory: () => cmsUtilService },
                { provide: DatePipe, useFactory: () => datePipe }
            ]
        });

        newsLatestResponseHelper = TestBed.inject(NewsLatestResponseHelper);

    });

    it('should define service', () => {
        expect(newsLatestResponseHelper).toBeDefined();
    });

    it('should test method parseResponse', () => {

        const res = {
            responses: [
                {
                    cmsResponse: 'test cms response mock'
                }
            ]
        };

        spyOn<any>(newsLatestResponseHelper, 'jsonParse').and.returnValue({});
        cmsUtilService.processArticleArray.and.returnValue([]);

        spyOn<any>(newsLatestResponseHelper, 'mapResults').and.returnValue({
            category: { displayName: 'All', isDefault: true, itemID: 'xyz', queryID: 'pqr' },
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
        } as INewsResults);


        newsLatestResponseHelper.parseResponse(res);
        expect(newsLatestResponseHelper['mapResults']).toHaveBeenCalled();
        expect(newsLatestResponseHelper['jsonParse']).toHaveBeenCalled();
        expect(cmsUtilService.processArticleArray).toHaveBeenCalled();



    });

    it('should test method mapResults', () => {

        const res = {
            responses: [
                {
                    cmsResponse: 'test cms response mock'
                }
            ]
        };

        spyOn<any>(newsLatestResponseHelper, 'jsonParse').and.returnValue({});

        cmsUtilService.processArticleArray.and.returnValue([
            {
                Title: '',
                Subtitle: '',
                ShortDescription: '',
                NewsDisplayDate: '',
                LongDescription: '',
                ItemPath: '',
                Category: ''
            }
        ]);


        const results = newsLatestResponseHelper.parseResponse(res);
        expect(newsLatestResponseHelper['jsonParse']).toHaveBeenCalled();
        expect(cmsUtilService.processArticleArray).toHaveBeenCalled();

        //expect(results.count).toEqual(1);

    });


});

