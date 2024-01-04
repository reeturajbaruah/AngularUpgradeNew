import { } from 'jasmine';
import { MatIconRegistry } from '@angular/material/icon';
import { MatIconAvailabilityService } from './matIconAvailability.service';
import { Observable } from 'rxjs';
import { wait } from 'common/utilities';

describe('stateResolver', () => {

    let service: MatIconAvailabilityService;
    let matIconRegistry: jasmine.SpyObj<MatIconRegistry>;

    beforeEach(() => {

        matIconRegistry = jasmine.createSpyObj('matIconRegistry', ['getNamedSvgIcon']);

        matIconRegistry.getNamedSvgIcon.and.returnValue(new Observable(sub => {

            sub.next();
            sub.complete();
        }));

        service = new MatIconAvailabilityService(matIconRegistry);
    });

    describe('canary', () => {

        it('should pass', () => {

            expect(true).toBe(true);
        });
    });

    describe('whenAvailable', () => {

        it('should not call getNamedSvgIcon when no subscribers', async () => {

            service.whenAvailable('x');

            expect(matIconRegistry.getNamedSvgIcon).toHaveBeenCalledTimes(0);
        });


        it('should call getNamedSvgIcon', async () => {

            service.whenAvailable('x').toPromise();

            expect(matIconRegistry.getNamedSvgIcon).toHaveBeenCalledOnceWith('x');
        });

        it('should call getNamedSvgIcon retry times + 1 when it always fails', async () => {

            matIconRegistry.getNamedSvgIcon.and.returnValue(new Observable(sub => {

                sub.error();
            }));

            const promise = service.whenAvailable('xyz', 1, 4).toPromise();

            await expectAsync(promise).toBeRejected();
            expect(matIconRegistry.getNamedSvgIcon).toHaveBeenCalledTimes(5);
            expect(matIconRegistry.getNamedSvgIcon
                .calls
                .allArgs()
                .reduce((acc, curr) => [...acc, ...curr], []))
                .toEqual(['xyz', 'xyz', 'xyz', 'xyz', 'xyz']);
        });

        [0, 1, 2, 3, 4].forEach(errorCount => {

            it('should resolve if failure count less than or equal to retry count', async () => {

                let errorsLeft = errorCount;

                matIconRegistry.getNamedSvgIcon.and.returnValue(new Observable(sub => {

                    if (errorsLeft--) {
                        sub.error();
                    } else {
                        sub.next();
                    }
                }));

                const promise = service.whenAvailable('xyz', 1, 4).toPromise();

                await expectAsync(promise).toBeResolved();

                expect(matIconRegistry.getNamedSvgIcon).toHaveBeenCalledTimes(errorCount + 1);
            });
        });

        it('should retry after retryDelay', async () => {

            matIconRegistry.getNamedSvgIcon.and.returnValue(new Observable(sub => {

                sub.error();
            }));

            const promise = service.whenAvailable('xyz', 100, 4).toPromise();
            await wait(50);

            expect(matIconRegistry.getNamedSvgIcon).toHaveBeenCalledTimes(1);

            await wait(80);

            expect(matIconRegistry.getNamedSvgIcon).toHaveBeenCalledTimes(2);

            await expectAsync(promise).toBeRejected();
        });
    });
});
