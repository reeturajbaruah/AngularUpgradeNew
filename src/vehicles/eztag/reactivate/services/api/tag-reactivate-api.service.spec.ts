import { TestBed } from '@angular/core/testing';
import { } from 'jasmine';
import { HttpService } from '../../../../../common/services/httpService/http.service';
import { TagReactivateApiService } from './tag-reactivate-api.service';


describe('Tag Reactivate Api Service', () => {

    let tagReactivateApiService: TagReactivateApiService;
    let httpService: jasmine.SpyObj<HttpService>;

    beforeEach(() => {

        httpService = jasmine.createSpyObj('httpService', ['get', 'post']);

        TestBed.configureTestingModule({
            providers: [
                TagReactivateApiService,
                { provide: HttpService, useValue: httpService },

            ]
        });

        tagReactivateApiService = TestBed.inject(TagReactivateApiService);

    });


    it('should define tag reactivate api service', () => {
        expect(tagReactivateApiService).toBeDefined();
    });

    it('should call backend reactivate api', async () => {
        const req = {} as any;
        await tagReactivateApiService.reactivate(req);
        expect(httpService.post).toHaveBeenCalledWith('/api/sessions/ManageVehicles/ReactivateEZTag', req);
    });
});
