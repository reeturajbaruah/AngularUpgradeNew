import { TestBed } from '@angular/core/testing';
import { Toast } from 'common/interfaces';
import { } from 'jasmine';
import { ToasterService } from './toaster.service';



describe('ToasterService', () => {

    let service: ToasterService;

    beforeEach(() => {

        TestBed.configureTestingModule({
            providers: [
                ToasterService,
            ]
        });

        service = TestBed.inject(ToasterService);
    });

    describe('canary', () => {
        it('should pass', () => {

            expect(true).toBe(true);
        });
    });

    describe('show', () => {
        it('should call toaster observable', () => {
            const toast: Toast = {
                type: 'Error',
                description: 'something'
            };

            spyOn(service['subjectToasts'], 'next').and.callThrough();

            service.show(toast.type, toast.description);

            expect(service['subjectToasts'].next).toHaveBeenCalledTimes(1);
            expect(service['subjectToasts'].next).toHaveBeenCalledWith([toast]);
        });

        it('should return the toaster ref', () => {
            const toast: Toast = {
                type: 'Error',
                description: 'something'
            };

            spyOn(service['subjectToasts'], 'next').and.callThrough();

            const generatedToast = service.show(toast.type, toast.description);

            expect(generatedToast).toBeDefined();
            expect(generatedToast.type).toEqual('Error');
            expect(generatedToast.description).toEqual('something');
        });

        it('should shove toasters into the delayed array as needed', () => {
            const toast: Toast = {
                type: 'Error',
                description: 'something'
            };

            spyOn(service['subjectToasts'], 'next');

            service.show(toast.type, toast.description, true);

            expect(service['subjectToasts'].next).toHaveBeenCalledTimes(0);
            expect(service['delayedToasters']).toEqual([toast]);
        });
    });

    describe('showDelayed', () => {
        it('should call show toaster on all stored delayed toasters', () => {
            const toast: Toast = {
                type: 'Error',
                description: 'something'
            };
            service['delayedToasters'] = [toast, toast, toast];
            spyOn(service, 'show');

            service.showDelayed();

            expect(service.show).toHaveBeenCalledTimes(3);
            expect(service['delayedToasters']).toEqual([]);
        });
    });

    describe('remove', () => {
        it('should call toaster remove observable with one toaster removed - by index', () => {
            spyOn(service['subjectToasts'], 'next').and.callThrough();

            service.show('Error', 'fake error');
            service.show('Warning', 'fake warning');
            service.show('Success', 'fake success');
            service.remove(2);

            expect(service['subjectToasts'].next).toHaveBeenCalledWith([
                { type: 'Success', description: 'fake success' },
                { type: 'Warning', description: 'fake warning' }
            ]);
        });

        it('should call toaster remove observable with one toaster removed - by ref', () => {
            spyOn(service['subjectToasts'], 'next').and.callThrough();

            const errorToast = service.show('Error', 'fake error');
            service.show('Warning', 'fake warning');
            service.show('Success', 'fake success');
            service.remove(errorToast);

            expect(service['subjectToasts'].next).toHaveBeenCalledWith([
                { type: 'Success', description: 'fake success' },
                { type: 'Warning', description: 'fake warning' }
            ]);
        });
    });


    describe('removeAll', () => {
        it('should call toaster remove observable with no array', () => {
            spyOn(service['subjectToasts'], 'next').and.callThrough();

            service.removeAll();

            expect(service['subjectToasts'].next).toHaveBeenCalledTimes(1);
            expect(service['subjectToasts'].next).toHaveBeenCalledWith([]);
        });
    });

    describe('isShowing', () => {

        it('is true if toast is showing', () => {
            
            const toast = service.show('Error', 'something');

            expect(service.isShowing(toast)).toBeTruthy();
        });

        it('is false if toast is not showing', () => {
            
            const toast = {} as Toast;

            expect(service.isShowing(toast)).toBeFalsy();
        });

        it('is false if toast is null', () => {
            
            expect(service.isShowing(null)).toBeFalsy();
        });

        it('is false if toast is undefined', () => {
            
            expect(service.isShowing(undefined)).toBeFalsy();
        });

    });

});
