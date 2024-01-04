import { DatePipe } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { } from 'jasmine';
import { NewsArchiveResHelper } from './news-archive-response.helper';


describe('News Archive Response Helper Service', () => {

    let newsArchiveResHelper: NewsArchiveResHelper;
    let datePipe: jasmine.SpyObj<DatePipe>;

    beforeEach(() => {

        datePipe = jasmine.createSpyObj('datePipe', ['transform']);

        TestBed.configureTestingModule({
            providers: [
                NewsArchiveResHelper,
                { provide: DatePipe, useFactory: () => datePipe }
            ]
        });

        newsArchiveResHelper = TestBed.inject(NewsArchiveResHelper);

    });

    it('should define archive response helper service', () => {
        expect(newsArchiveResHelper).toBeDefined();
    });

    it('should test method parseResponse', () => {

        const res = {
            numberOfArticles: 5
        };

        spyOn<any>(newsArchiveResHelper, 'parseArticles').and.returnValue([]);

        newsArchiveResHelper.parseResponse(res);
        expect(newsArchiveResHelper['parseArticles']).toHaveBeenCalled();
    });

    it('should test method parseArticles', () => {

         const res = {
            numberOfArticles: 5,
            articles: [
                {
                    title: 'article1',
                    shortDescription: '',
                    newsDisplayDate: '',
                    subtitle: '',
                    longDescription: '',
                    itemPath: '',
                    category: ''
                },
                {
                    title: 'article2',
                    shortDescription: '',
                    newsDisplayDate: '',
                    subtitle: '',
                    longDescription: '',
                    itemPath: '',
                    category: ''
                }
            ]
        };

        const result = newsArchiveResHelper.parseResponse(res);
        //expect(result.items.length).toEqual(2);

    });

});

