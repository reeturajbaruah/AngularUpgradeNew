import { TestBed } from '@angular/core/testing';
import { DialogService } from 'common/services';
import { } from 'jasmine';
import { ITagReactivateContent, TagReactivateStatus } from 'vehicles/eztag/reactivate/models';
import { TagReactivateFacadeService } from '../facade/tag-reactivate-facade.service';
import { TagReactivateManagerService } from './tag-reactivate-manager.service';


describe('Tag Reactivation Manager Service', () => {

    let tagReactivateManagerService: TagReactivateManagerService;

    let tagReactivateFacadeServiceSpy: jasmine.SpyObj<TagReactivateFacadeService>;
    let dialogServiceSpy: jasmine.SpyObj<DialogService>;

    beforeEach(async () => {

        tagReactivateFacadeServiceSpy = jasmine.createSpyObj('facade', ['reactivate']);
        dialogServiceSpy = jasmine.createSpyObj('dialogService', ['openGenericModal']);

     await   TestBed.configureTestingModule({
            providers: [
                TagReactivateManagerService,
                { provide: TagReactivateFacadeService, useFactory: () => tagReactivateFacadeServiceSpy },
                { provide: DialogService, useFactory: () => dialogServiceSpy }

            ]
        });

        tagReactivateManagerService = TestBed.inject(TagReactivateManagerService);

    });

    it('defines the service', () => {
        expect(tagReactivateManagerService).toBeDefined();
    });

    it('checks if the reactivation modal is open', async () => {

        dialogServiceSpy.openGenericModal.and.resolveTo(false);

        await tagReactivateManagerService.reactivate({} as ITagReactivateContent);
        expect(dialogServiceSpy.openGenericModal).toHaveBeenCalled();

    });


    it('checks if the user cancels the reactivation', async () => {

        dialogServiceSpy.openGenericModal.and.resolveTo(false);
        const res = await tagReactivateManagerService.reactivate({} as ITagReactivateContent);

        expect(res.status).toEqual(TagReactivateStatus.UserCancel);

    });

    it('checks if the user requests for reactivation and it is successful', async () => {

        dialogServiceSpy.openGenericModal.and.resolveTo(true);

        tagReactivateFacadeServiceSpy.reactivate.and.resolveTo({
            status: TagReactivateStatus.Pass
        });

        const res = await tagReactivateManagerService.reactivate({} as ITagReactivateContent);

        expect(tagReactivateFacadeServiceSpy.reactivate).toHaveBeenCalled();
        expect(res.status).toEqual(TagReactivateStatus.Pass);

    });

    it('checks if the user requests for reactivation and it is unsuccessful', async () => {

        dialogServiceSpy.openGenericModal.and.resolveTo(true);

        tagReactivateFacadeServiceSpy.reactivate.and.resolveTo({
            status: TagReactivateStatus.Fail
        });

        const res = await tagReactivateManagerService.reactivate({} as ITagReactivateContent);

        expect(tagReactivateFacadeServiceSpy.reactivate).toHaveBeenCalled();
        expect(res.status).toEqual(TagReactivateStatus.Fail);

    });


});
