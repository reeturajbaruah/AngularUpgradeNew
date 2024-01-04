import { UrlManagerService } from 'common/services/urlManager/urlManager.service';
import { LinkLookupService } from './linkLookup.service';

describe('linkLookupService', () => {

    let urlManagerService: jasmine.SpyObj<UrlManagerService>;
    let service: LinkLookupService;

    beforeEach(() => {
        urlManagerService = jasmine.createSpyObj('urlManagerService', null, ['newRoutes']);

        service = new LinkLookupService(urlManagerService);
        service.cmsPathDictionary = {
            path1: { friendlyURL: 'pathValue1', itemID: '1', templateName: '' }
        };
        service.cmsIdDictionary = {
            id1: { friendlyURL: 'idValue1', itemID: '1', templateName: '' }
        };
    });


    it('should return a value if cms path exists in dictionary', () => {
        (Object.getOwnPropertyDescriptor(urlManagerService, 'newRoutes').get as jasmine.Spy).and.returnValue({
            articleLookupByPath: {
                path1: { friendlyURL: 'pathValue1', itemID: '1', templateName: '' }
            }
        });
        expect(service.articleLookup('path1')).toEqual('pathValue1');
    });

    it('should not return a value if cms path does not exist in dictionary', () => {
        (Object.getOwnPropertyDescriptor(urlManagerService, 'newRoutes').get as jasmine.Spy).and.returnValue({
            articleLookupByPath: {}
        });
        expect(service.articleLookup('invalidPath')).toBeUndefined();
    });

    it('should return a value if cms item id exists in dictionary', () => {
        (Object.getOwnPropertyDescriptor(urlManagerService, 'newRoutes').get as jasmine.Spy).and.returnValue({
            articleLookupByPath: {
                path1: { friendlyURL: 'pathValue1', itemID: '1', templateName: '' }
            }
        });
        expect(service.articleLookupById('id1')).toEqual('idValue1');
    });

    it('should not return a value if cms item id does not exist in dictionary', () => {
        (Object.getOwnPropertyDescriptor(urlManagerService, 'newRoutes').get as jasmine.Spy).and.returnValue({
            articleLookupByPath: {}
        });
        expect(service.articleLookupById('invalidId')).toBeUndefined();
    });

});
