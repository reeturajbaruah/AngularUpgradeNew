import { TestBed } from '@angular/core/testing';
import { StateService } from '@uirouter/angular';
import { SiteCoreItem } from 'cms/cms.module';
import { DialogService } from 'common/services';
import { } from 'jasmine';
import { IEZTag } from 'vehicles/interfaces';
import { States } from 'vehicles/eztag/replacement/states';
import { ReplacementManagerService } from './replacement-manager-service';


describe('Replacement Manager Service', () => {

    let replacementManagerService: ReplacementManagerService;

    let stateServiceSpy: jasmine.SpyObj<StateService>;
    let dialogServiceSpy: jasmine.SpyObj<DialogService>;

    beforeEach(() => {

        stateServiceSpy = jasmine.createSpyObj('stateService', ['go']);
        dialogServiceSpy = jasmine.createSpyObj('dialogService', ['openGenericModal']);

        TestBed.configureTestingModule({
            providers: [
                ReplacementManagerService,
                { provide: StateService, useFactory: () => stateServiceSpy },
                { provide: DialogService, useFactory: () => dialogServiceSpy }

            ]
        });

        replacementManagerService = TestBed.inject(ReplacementManagerService);

    });

    it('defines the service', () => {
        expect(replacementManagerService).toBeDefined();
    });

    it('opens the modal', async () => {
        dialogServiceSpy.openGenericModal.and.resolveTo(true);
        await replacementManagerService.replace({} as SiteCoreItem, {} as IEZTag);
        expect(dialogServiceSpy.openGenericModal).toHaveBeenCalled();
    });

    it('opens the modal and user wants to replace', async () => {
        const vehicle = {} as IEZTag;
        dialogServiceSpy.openGenericModal.and.resolveTo(true);
        await replacementManagerService.replace({} as SiteCoreItem, vehicle);
        expect(stateServiceSpy.go).toHaveBeenCalledWith(States.ReplacementDeliveryMethod,
            { vehicle }
        );

    });

    it('opens the modal and user cancels the replace', async () => {
        dialogServiceSpy.openGenericModal.and.resolveTo(false);
        await replacementManagerService.replace({} as SiteCoreItem, {} as IEZTag);
        expect(stateServiceSpy.go).not.toHaveBeenCalled();
    });

});
