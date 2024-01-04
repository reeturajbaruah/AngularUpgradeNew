import { TestBed } from '@angular/core/testing';
import { FilterChangeService } from './filter-change.service';

describe('ForgotUsernameService', () => {
    let service: FilterChangeService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [FilterChangeService]
        });
        service = TestBed.inject(FilterChangeService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('notifyEvent', () => {
        it('should call next', () => {
            spyOn(service['eventInfo$'], 'next');

            service.notifyEvent({ } as any);

            expect(service['eventInfo$'].next).toHaveBeenCalled();
        });
    });

    describe('listenToFilters', () => {
        it('should call asObservable', () => {
            spyOn(service['eventInfo$'], 'asObservable');
            
            const obs = service.listenToFilters();

            expect(service['eventInfo$'].asObservable).toHaveBeenCalled();
        });
    });
});
