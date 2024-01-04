import { TestBed } from '@angular/core/testing';
import { GlobalEventService } from './globalEvent.service';

describe('globalEventServicee', () => {
    let globalEventService: GlobalEventService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                GlobalEventService,
            ]
        });

        globalEventService = TestBed.inject(GlobalEventService);
    });

    it('should be defined', () => {
        expect(GlobalEventService).toBeDefined();
    });

    it('should be defined', () => {
        expect(GlobalEventService).toBeDefined();
    });

    it('should broadcast event', () => {
        let count = 0;
        globalEventService.on('test', () => {
            count++;
        });
        globalEventService.broadcast('test', null);
        expect(count).toEqual(1);
    });

    it('should delete listener', () => {
        let count = 0;
        const deleteListener = globalEventService.on('test', () => {
            count++;
        });
        globalEventService.broadcast('test', null);
        deleteListener();
        globalEventService.broadcast('test', null);
        expect(count).toEqual(1);
    });
});
