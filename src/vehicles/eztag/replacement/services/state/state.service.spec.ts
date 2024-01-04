import { TestBed } from '@angular/core/testing';
import { DeliveryMethodType } from 'common/models';
import { } from 'jasmine';
import { IEZTag } from 'vehicles/interfaces';
import { ReplacementStateService } from './state.service';


describe('Replacement State Service', () => {

    let replacementStateService: ReplacementStateService;

    beforeEach(() => {

        TestBed.configureTestingModule({
            providers: [
                ReplacementStateService
            ]
        });

        replacementStateService = TestBed.inject(ReplacementStateService);

    });

    it('defines the service', () => {
        expect(replacementStateService).toBeDefined();
    });

    it('sets the state', () => {
        const state = {
            deliveryMethod: DeliveryMethodType.Mail,
            reason: 'xyz',
            replaceTag: {} as IEZTag,
            amount: 10
        };
        replacementStateService.setState(state);

        const newState = replacementStateService.getState();

        expect(newState).toBeDefined();
        expect(newState.reason).toEqual(state.reason);
        expect(newState.amount).toEqual(state.amount);
        expect(newState.replaceTag).toEqual(state.replaceTag);
        expect(newState.deliveryMethod).toEqual(state.deliveryMethod);

    });

    it('checks that the getState should not alter the private state obj', () => {

        const oldState = {
            deliveryMethod: DeliveryMethodType.Mail,
            reason: 'xyz',
            replaceTag: {} as IEZTag,
            amount: 10
        };
        replacementStateService.setState(oldState);

        const newState = replacementStateService.getState();

        expect(newState).toEqual(oldState);
    });


});
