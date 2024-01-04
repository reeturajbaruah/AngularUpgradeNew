import { TestBed } from '@angular/core/testing';
import { CmsUtilService } from 'cms/services';
import { CMSApiService } from '../cmsApi/cms-api.service';
import { CMSFacadeService } from './cms-facade.service';

describe('CMSApiService', () => {

    let cmsFacadeService: CMSFacadeService;
    let cmsUtilService: jasmine.SpyObj<CmsUtilService>;
    let cmsFacadeServiceSpy: jasmine.SpyObj<CMSFacadeService>;
    let cmsApiServiceSpy: jasmine.SpyObj<CMSApiService>;

    
    beforeEach(() => { 
        cmsFacadeServiceSpy = jasmine.createSpyObj('methods', ['getCmsPagesData', 'mapSiteCoreReq', 'parseResponse']);
        cmsApiServiceSpy = jasmine.createSpyObj('api', ['getCmsPagesIds']);

        TestBed.configureTestingModule({
            providers: [
                CMSFacadeService,
                { provide: CmsUtilService, useFactory: () => cmsUtilService },
                { provide: CMSApiService, useFactory: () => cmsApiServiceSpy },
            ]
        });
        cmsFacadeService = TestBed.inject(CMSFacadeService);
    });

    it('should define news api service', () => {
        expect(cmsFacadeService).toBeDefined();
    });

    describe('mapSiteCoreReq', () => {
        it('should call mapSiteCoreReq', async () => {
            const sampleReqs: Array<any> = [{ itemId: 'fake id' }];
            spyOn<any>(cmsFacadeService, 'mapSiteCoreReq').and.returnValue(sampleReqs);
        });
    });


    describe('parseResponse', () => {
        it('should call parseResponse', async () => {
            const sampleMap =['id', {}];
            spyOn<any>(cmsFacadeService, 'parseResponse').and.returnValue(sampleMap);
        });
    });

    describe('getCmsPagesData', () => {
        it('should call getCmsPagesData', async () => {
            const sampleMap =['id', {}];
            spyOn<any>(cmsFacadeService, 'mapSiteCoreReq').and.resolveTo([{itemId: 'fake id'}]);
            spyOn<any>(cmsFacadeService, 'parseResponse').and.returnValue(sampleMap);
        });
    });

});
