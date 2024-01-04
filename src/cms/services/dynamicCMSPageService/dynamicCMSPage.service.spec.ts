import { } from 'jasmine';
import { DynamicCMSPageService } from './dynamicCMSPage.service';
import { INewsArticleDictionaryItem } from 'news/models/news.interface';
import { UrlManagerService } from 'common/services/urlManager/urlManager.service';


describe('dynamicCMSPageService', () => {

    let urlManagerService: jasmine.SpyObj<UrlManagerService>;

    let service: DynamicCMSPageService;

    beforeEach(() => {

        const fakeArticleLookupByPath = new Map<string, INewsArticleDictionaryItem>();
        fakeArticleLookupByPath.set('test', {
            itemID: '1',
            friendlyURL: 'path',
            templateName: 'cmsTemplateName'
        });

        urlManagerService = jasmine.createSpyObj('urlManagerService', null, ['newRoutes']);
        (Object.getOwnPropertyDescriptor(urlManagerService, 'newRoutes').get as jasmine.Spy).and.returnValue({ articleLookupByPath: fakeArticleLookupByPath });

        service = new DynamicCMSPageService(urlManagerService);
    });

    describe('canary', () => {

        it('should pass', () => {

            expect(true).toBe(true);
        });
    });

    describe('getCMSId', () => {
        it('should call articleIdLookup with expected parameters', () => {

            spyOn(service, 'articleIdLookup').and.returnValue('articleIds');

            service.getCMSId('path', 'cmsTemplateName');

            expect(service.articleIdLookup).toHaveBeenCalled();
            expect(service.articleIdLookup).toHaveBeenCalledWith('path', 'cmsTemplateName', urlManagerService.newRoutes.articleLookupByPath);
        });
    });

    describe('articleIdLookup', async () => {
        it('should find the right cmsId for the given parameters', async () => {

            const result = '1';

            const fakeArticleLookupByPath = new Map<string, INewsArticleDictionaryItem>();
            fakeArticleLookupByPath.set('test', {
                itemID: '1',
                friendlyURL: 'path',
                templateName: 'cmsTemplateName'
            });

            urlManagerService.newRoutes.articleLookupByPath = fakeArticleLookupByPath;

            const response = await service.articleIdLookup('path', 'cmsTemplateName', urlManagerService.newRoutes.articleLookupByPath);

            expect(response).toEqual(jasmine.any(String));

            expect(fakeArticleLookupByPath.size === 1);

            expect(response === result);

        });

    });

});
