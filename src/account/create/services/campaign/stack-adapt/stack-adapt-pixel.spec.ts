import { TestBed, waitForAsync } from '@angular/core/testing';
import { StackAdaptPixelService } from './stack-adapt-pixel';
import { WindowRef } from 'common/providers';

describe('StackAdaptPixelService', () => {
    let service: StackAdaptPixelService;
    let windowRef: jasmine.SpyObj<any>;

    beforeEach(() => {
        windowRef = jasmine.createSpyObj('Window', ['saq']);

        (windowRef.saq as jasmine.Spy).and.returnValue(null);

        TestBed.configureTestingModule({
            providers: [
                StackAdaptPixelService,
                { provide: WindowRef, useValue: windowRef }
            ]
        });
        service = TestBed.inject(StackAdaptPixelService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should call saq', waitForAsync(() => {
        service.trackSubmit('test').then(() => {
            expect(windowRef.saq).toHaveBeenCalled();
        });
    }));
});
