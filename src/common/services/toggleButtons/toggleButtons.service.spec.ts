import { TestBed } from '@angular/core/testing';
import { SpinnerService } from '../../ui';
import { ToggleButtonsService } from './toggleButtons.service';

describe('ToggleButtonsService', () => {

    let toggleButtonsService: ToggleButtonsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ToggleButtonsService, SpinnerService]
        });

        toggleButtonsService = TestBed.inject(ToggleButtonsService);
    });

    it('should define ToggleButtonsService', () => {
        expect(ToggleButtonsService).toBeDefined();
    });


    it('should enable buttons globally when not locked', () => {
        const spyEnableButtons = spyOn(toggleButtonsService, 'enableButtons').and.callThrough();

        toggleButtonsService.enableButtonsGlobal();
        expect(spyEnableButtons).toHaveBeenCalled();
    });

    it('should disable buttons globally when not locked', () => {
        const spyDisableButtons = spyOn(toggleButtonsService, 'disableButtons').and.callThrough();

        toggleButtonsService.disableButtonsGlobal();
        expect(spyDisableButtons).toHaveBeenCalled();
    });

    it('should not enable buttons globally when locked', (done) => {
        const spyEnableButtons = spyOn(toggleButtonsService, 'enableButtons').and.callThrough();
        const resolvedPromise = Promise.resolve().then(() => { done(); });
        toggleButtonsService.disableUntilResolved(resolvedPromise);

        toggleButtonsService.enableButtonsGlobal();
        expect(spyEnableButtons).not.toHaveBeenCalled();
    });

    it('should not disable buttons globally when locked', (done) => {
        const spyDisableButtons = spyOn(toggleButtonsService, 'disableButtons').and.callThrough();
        const resolvedPromise = Promise.resolve().then(() => { done(); });
        toggleButtonsService.disableUntilResolved(resolvedPromise);
        expect(spyDisableButtons).toHaveBeenCalledTimes(1);

        toggleButtonsService.disableButtonsGlobal();
        expect(spyDisableButtons).toHaveBeenCalledTimes(1);
    });
});



