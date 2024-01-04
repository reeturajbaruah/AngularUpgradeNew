import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReviewOrderService } from './review-order.service';

describe('ReviewOrderService', () => {
    let service: ReviewOrderService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ReviewOrderService]
        });
        service = TestBed.inject(ReviewOrderService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('dispatchAction', () => {
        it('should call next', () => {
            spyOn(service['event$'], 'next');

            service.dispatchAction({
                action: null,
                source: ''
            });

            expect(service['event$'].next).toHaveBeenCalled();
        });
    });

    describe('subscribe/unsubscribe', () => {
        it('should call subscribe', fakeAsync(() => {
            spyOn(service['event$'], 'subscribe').and.callThrough();

            service.subscribe(() => { });
            tick(12);
            service.unsubscribe();

            expect(service['event$'].subscribe).toHaveBeenCalled();
            expect(service['subscriptions'].length).toEqual(1);
        }));
    });
});
