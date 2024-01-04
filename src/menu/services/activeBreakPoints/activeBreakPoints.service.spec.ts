import { } from 'jasmine';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { ActiveBreakPointsService } from './activeBreakPoints.service';
import { TestScheduler } from 'rxjs/testing';

describe('stateResolver', () => {

    let mediaObserver: jasmine.SpyObj<MediaObserver>;
    let testScheduler: TestScheduler;
    let service: ActiveBreakPointsService;

    beforeEach(() => {

        mediaObserver = jasmine.createSpyObj('mediaObserver', ['asObservable']);
        testScheduler = new TestScheduler((actual, expected) => expect(actual).toEqual(expected));
        service = new ActiveBreakPointsService(mediaObserver);
    });

    describe('canary', () => {

        it('should pass', () => {

            expect(true).toBe(true);
        });
    });

    describe('asObservable', () => {

        it('should emit when value has been stable for 500ms', () => {

            testScheduler.run(({ cold, expectObservable }) => {
                const a = [
                    {
                        mqAlias: 'lt-md'
                    },
                    {
                        mqAlias: 'lt-sm'
                    }] as MediaChange[];

                const b = [
                    {
                        mqAlias: 'md'
                    },
                    {
                        mqAlias: 'lt-lg'
                    }
                ] as MediaChange[];

                mediaObserver.asObservable.and.returnValue(cold('a 50ms a 490ms b', {a, b}));

                expectObservable(service.asObservable()).toBe('  - 50ms - 490ms 500ms r', { r: { md: true, 'lt-lg': true } });
            });
        });

        it('should emit using custom debounce', () => {

            testScheduler.run(({ cold, expectObservable }) => {
                const a = [
                    {
                        mqAlias: 'xs'
                    },
                    {
                        mqAlias: 'lt-sm'
                    }] as MediaChange[];

                const b = [
                    {
                        mqAlias: 'md'
                    },
                    {
                        mqAlias: 'lt-lg'
                    }
                ] as MediaChange[];

                const c = [
                    {
                        mqAlias: 'lg'
                    },
                    {
                        mqAlias: 'lt-xl'
                    }
                ] as MediaChange[];

                mediaObserver.asObservable.and.returnValue(cold('a 50ms b 40ms c', { a, b, c }));

                expectObservable(service.asObservable(50)).toBe('- 49ms a 40ms - 50ms c', {
                    a: { xs: true, 'lt-sm': true },
                    c: { lg: true, 'lt-xl': true }
                });
            });
        });
    });
});
