import { TestBed } from '@angular/core/testing';
import { HttpService } from '../../../common/services';
import { CMSApiService } from './cms-api.service';

describe('CMSApiService', () => {

    let cmsApiService: CMSApiService;
    let httpService: jasmine.SpyObj<any>;
    beforeEach(() => {

        httpService = jasmine.createSpyObj('httpService', ['get', 'post']);

        TestBed.configureTestingModule({
            providers: [
                 CMSApiService,
                { provide: HttpService, useValue: httpService },
            ]

            
        });
        cmsApiService = TestBed.inject(CMSApiService);
    });

    it('should define news api service', () => {
        expect(cmsApiService).toBeDefined();
    });

    describe('getCmsPagesIds', () => {
        it('should call httpService with url', async () => {
            httpService.post.and.resolveTo({});
    
            await cmsApiService.getCmsPagesIds([{ itemId: 'fake id' }]);
            expect(httpService.post).toHaveBeenCalledWith('api/sessions/GenericCms/GetCmsPagesByIds',{requests: [{ itemId: 'fake id' }]});
        });
    });

});

