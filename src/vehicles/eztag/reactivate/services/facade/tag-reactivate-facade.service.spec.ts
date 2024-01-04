import { TestBed } from '@angular/core/testing';
import { } from 'jasmine';
import { IEZTag } from 'vehicles/interfaces';
import { TagReactivateStatus } from 'vehicles/eztag/reactivate/models';
import { TagReactivateApiService } from '../api/tag-reactivate-api.service';
import { TagReactivateFacadeService } from '../facade/tag-reactivate-facade.service';


describe('Tag Reactivation Facade Service', () => {

    let tagReactivateFacadeService: TagReactivateFacadeService;

    let tagReactivateApiServiceSpy: jasmine.SpyObj<TagReactivateApiService>;

    beforeEach(async () => {

        tagReactivateApiServiceSpy = jasmine.createSpyObj('api', ['reactivate']);

      await  TestBed.configureTestingModule({
            providers: [
                TagReactivateFacadeService,
                { provide: TagReactivateApiService, useFactory: () => tagReactivateApiServiceSpy },

            ]
        });

        tagReactivateFacadeService = TestBed.inject(TagReactivateFacadeService);

    });

    it('defines the service', () => {
        expect(tagReactivateFacadeService).toBeDefined();
    });

    it('checks if the backend api is called', async () => {

        tagReactivateApiServiceSpy.reactivate.and.resolveTo({
            successStatus: true
        });

        const res = await tagReactivateFacadeService.reactivate({} as IEZTag);
        expect(tagReactivateApiServiceSpy.reactivate).toHaveBeenCalled();
    });


    it('checks if the api response has reactivate status true ', async () => {

        tagReactivateApiServiceSpy.reactivate.and.resolveTo({
            successStatus: true
        });

        const res = await tagReactivateFacadeService.reactivate({} as IEZTag);
        expect(res.status).toEqual(TagReactivateStatus.Pass);
    });

    it('checks if the api response has reactivate status false ', async () => {

        tagReactivateApiServiceSpy.reactivate.and.resolveTo({
            successStatus: false,
            errors: [{ key: 'error', message: 'something is wrong' }]
        });

        const res = await tagReactivateFacadeService.reactivate({} as IEZTag);
        expect(res.status).toEqual(TagReactivateStatus.Fail);
        expect(res.errors[0]['message']).toEqual('something is wrong');
    });

});

