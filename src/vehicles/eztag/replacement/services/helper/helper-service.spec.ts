import { TestBed } from '@angular/core/testing';
import { StateService } from '@uirouter/angular';
import { SiteCoreItem } from 'cms/cms.module';
import { DialogService } from 'common/services';
import { } from 'jasmine';
import { ReplacementHelperService } from './helper-service';

describe('Replacement Api Service', () => {

    let replacementHelperService: ReplacementHelperService;
    let dialogServiceSpy: jasmine.SpyObj<DialogService>;
    let stateServiceSpy: jasmine.SpyObj<StateService>;

    beforeEach(() => {

        stateServiceSpy = jasmine.createSpyObj('stateService', ['go']);
        dialogServiceSpy = jasmine.createSpyObj('dialogService', ['openGenericModal']);

        TestBed.configureTestingModule({
            providers: [
                ReplacementHelperService,
                { provide: DialogService, useFactory: () => dialogServiceSpy },
                { provide: StateService, useFactory: () => stateServiceSpy }
            ]
        });

        replacementHelperService = TestBed.inject(ReplacementHelperService);

    });

    it('defines the service', () => {
        expect(replacementHelperService).toBeDefined();
    });

    it('opens the cancel modal', async () => {

        await replacementHelperService.cancel({ Title: 'title', LongDescription: 'test' } as SiteCoreItem, {});

        expect(dialogServiceSpy.openGenericModal).toHaveBeenCalled();
    });

    it('opens the cancel modal and user presses YES', async () => {

        dialogServiceSpy.openGenericModal.and.resolveTo(false);
        await replacementHelperService.cancel({ Title: 'title', LongDescription: 'test' } as SiteCoreItem, {});

        expect(dialogServiceSpy.openGenericModal).toHaveBeenCalled();
        expect(stateServiceSpy.go).toHaveBeenCalled();
    });

    it('opens the cancel modal and user presses NO', async () => {

        dialogServiceSpy.openGenericModal.and.resolveTo(true);
        await replacementHelperService.cancel({ Title: 'title', LongDescription: 'test' } as SiteCoreItem, {});

        expect(dialogServiceSpy.openGenericModal).toHaveBeenCalled();
        expect(stateServiceSpy.go).not.toHaveBeenCalled();
    });


});

