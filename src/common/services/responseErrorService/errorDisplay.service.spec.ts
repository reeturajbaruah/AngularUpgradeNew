import { ToastType } from 'common/models';
import { ErrorDisplayService, ToasterService } from 'common/services';
import { } from 'jasmine';


describe('errorDisplayService', () => {


    let toasterService: jasmine.SpyObj<ToasterService>;

    let service: ErrorDisplayService;

    beforeEach(() => {
        toasterService = jasmine.createSpyObj('toasterService', ['show', 'removeAll']);

        service = new ErrorDisplayService(toasterService);
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('displayToasts', () => {

        describe('alpha mode', () => {

            [
                undefined,
                null,
                '',
                0
            ].forEach((input: any) => {
                it('should not call toaster display when input is falsy', () => {
                    service.displayToasts(input);

                    expect(toasterService.show).not.toHaveBeenCalled();
                });
            });

            it('should call toaster display when called with string', () => {
                service.displayToasts('a msg', 'Success');

                expect(toasterService.show).toHaveBeenCalledWith('Success', 'a msg');
            });

            it('should call toaster display when called with an array', () => {
                service.displayToasts(['a msg array'], 'Success');

                expect(toasterService.show).toHaveBeenCalledWith('Success', 'a msg array');
            });

            [
                { input: 'info', expected: 'Success' as ToastType },
                { input: 'wait', expected: 'Success' as ToastType },
                { input: 'warning', expected: 'Warning' as ToastType },
                { input: 'error', expected: 'Error' as ToastType }
            ].forEach(({ input, expected }) => {
                it('should be able to handle legacy toaster types', () => {
                    service.displayToasts('fake toast', input as any);

                    expect(toasterService.show).toHaveBeenCalledWith(expected, 'fake toast');
                });
            });
        });
    });

    describe('clearToasts', () => {
        describe('alpha mode', () => {

            it('should call toaster service to clear toasts', () => {
                service.clearToasts();

                expect(toasterService.removeAll).toHaveBeenCalledTimes(1);
            });
        });
    });

});
