import { TestBed } from '@angular/core/testing';
import { } from 'jasmine';
import { INewsCms } from 'news/models/news.interface';
import { NewsCmsHelper } from './news-cms-helper';

describe('News Latest Response Helper Service', () => {

    let newsCmsHelperSpy: NewsCmsHelper;

    beforeEach(() => {

        TestBed.configureTestingModule({
            providers: [
                NewsCmsHelper,
            ]
        });

        newsCmsHelperSpy = TestBed.inject(NewsCmsHelper);

    });

    it('should define news cms helper service', () => {
        expect(newsCmsHelperSpy).toBeDefined();
    });

    it('initializes helper cms data', () => {

        const data = {
            bannerTitle: '',
            view: '',
            latestNews: '',
            archive: '',
            searchResults: '',
            itemsFound: '',
            readMore: '',
            publishedOn: ''
        } as INewsCms;

        newsCmsHelperSpy.initialize(data);
        expect(newsCmsHelperSpy['cmsData']).toEqual(data);
        expect(newsCmsHelperSpy['keys'].length).toEqual(Object.keys(data).length);

    });

    it('returns value based on the key', () => {

        const data = {
            bannerTitle: 'test bannerTitle',
            view: 'test view',
            latestNews: 'test latestNews',
            archive: 'test archive',
            searchResults: 'test searchResults',
            itemsFound: 'test itemsFound',
            readMore: 'test readMore',
            publishedOn: 'test publishedOn'
        } as INewsCms;

        newsCmsHelperSpy.initialize(data);

        expect(newsCmsHelperSpy.getVal('bannerTitle')).toEqual('test bannerTitle');
        expect(newsCmsHelperSpy.getVal('view')).toEqual('test view');
        expect(newsCmsHelperSpy.getVal('latestNews')).toEqual('test latestNews');
        expect(newsCmsHelperSpy.getVal('archive')).toEqual('test archive');
        expect(newsCmsHelperSpy.getVal('searchResults')).toEqual('test searchResults');
        expect(newsCmsHelperSpy.getVal('itemsFound')).toEqual('test itemsFound');
        expect(newsCmsHelperSpy.getVal('readMore')).toEqual('test readMore');

    });

    it('returns an empty string if the requested sitecore key is not found', () => {

        const data = {
            bannerTitle: 'test bannerTitle',
            view: 'test view',
            latestNews: 'test latestNews',
            archive: 'test archive',
            searchResults: 'test searchResults',
            itemsFound: 'test itemsFound',
            readMore: 'test readMore',
            publishedOn: 'test publishedOn'
        } as INewsCms;

        newsCmsHelperSpy.initialize(data);

        expect(newsCmsHelperSpy.getVal('test')).toEqual('');

    });

    it('resets helper cms data when consumer component gets destroyed', () => {

        newsCmsHelperSpy.reset();
        expect(newsCmsHelperSpy['cmsData']).toEqual({} as INewsCms);
    });

});
