import { TestBed } from '@angular/core/testing';
import { } from 'jasmine';
import { CreditCardStateService } from './credit-card-state.service';


describe('Credit Card State Service', () => {

    let creditCardStateService: CreditCardStateService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                CreditCardStateService
            ]
        });

        creditCardStateService = TestBed.inject(CreditCardStateService);

    });

    it('defines the service', () => {
        expect(creditCardStateService).toBeDefined();
    });

});
