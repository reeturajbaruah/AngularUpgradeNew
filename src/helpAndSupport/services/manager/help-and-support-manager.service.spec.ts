import { TestBed } from '@angular/core/testing';
import { CmsIds } from '../../constants';
import { IHelpAndSupportCms } from 'helpAndSupport/models/frame.models';
import { HelpAndSupportManagerService } from './help-and-support-manager.service';

const mockContactUsChildren = [
    { Title: 'mock title' },
    { Title: 'mock title' },
    { Title: 'mock title' }
];

const mockHelpAndSupportChildren = [
    { ItemID: CmsIds.Frame, Title: 'mock title' },
    { ItemID: CmsIds.ContactUsPage, Title: 'mock title', Children: mockContactUsChildren },
    { ItemID: CmsIds.TopFaqPage, Title: 'mock title' },
    { ItemID: CmsIds.DocumentsPage, Title: 'mock title' },
    { ItemID: CmsIds.StoreLocatorPage, Title: 'mock title' }
];

describe('Help and Support Manager Service', () => {
    let service: HelpAndSupportManagerService;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            providers: [
                HelpAndSupportManagerService,
            ]
        });
	});

	beforeEach(() => {
        service = TestBed.inject(HelpAndSupportManagerService);
	});

    describe('canary', () => {
        it('should create', () => {
            expect(service).toBeTruthy();
        });
    });

    describe('findChildById', () => {
        it('should find and return the correct child item', () => {
            const cmsContent = { Children: mockHelpAndSupportChildren };

            const result = service.findChildById(cmsContent, CmsIds.Frame);

            expect(result).toEqual({ItemID: CmsIds.Frame, Title: 'mock title'});
        });
    });

    describe('loadCmsData', () => {
        it('should load CMS content', () => {
            const mockCmsContent = {
                Children: mockHelpAndSupportChildren
            } as IHelpAndSupportCms;
            
            service.loadCmsData(mockCmsContent);

            expect(service.getFrameCms()).toBeDefined();
            expect(service.getContactUsCms()).toBeDefined();
            expect(service.getTopFaqCms()).toBeDefined();
            expect(service.getDocumentsCms()).toBeDefined();
            expect(service.getStoreLocatorCms()).toBeDefined();
        });
    });

    describe('getters', () => {
        it('should return the correct Frame CMS', () => {
            service['frameCms'] = mockHelpAndSupportChildren[0] as any;

            expect(service.getFrameCms()).toEqual(mockHelpAndSupportChildren[0] as any);
        });

        it('should return the correct Contact Us CMS', () => {
            service['contactUsCms'] = mockHelpAndSupportChildren[1] as any;

            expect(service.getContactUsCms()).toEqual(mockHelpAndSupportChildren[1] as any);
        });

        it('should return the correct Top FAQ CMS', () => {
            service['topFaqCms'] = mockHelpAndSupportChildren[2] as any;

            expect(service.getTopFaqCms()).toEqual(mockHelpAndSupportChildren[2] as any);
        });

        it('should return the correct Top FAQ CMS', () => {
            service['documentsCms'] = mockHelpAndSupportChildren[3] as any;

            expect(service.getDocumentsCms()).toEqual(mockHelpAndSupportChildren[3] as any);
        });

        it('should return the correct Top FAQ CMS', () => {
            service['storeLocatorCms'] = mockHelpAndSupportChildren[4] as any;

            expect(service.getStoreLocatorCms()).toEqual(mockHelpAndSupportChildren[4] as any);
        });
    });
});
