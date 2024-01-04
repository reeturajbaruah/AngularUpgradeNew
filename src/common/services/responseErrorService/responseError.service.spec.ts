import { StateService } from '@uirouter/core';
import { BaseResponse } from 'common/interfaces';
import { ToastType } from 'common/models';
import { ErrorDisplayService, ToasterService } from 'common/services';
import { StateNames as HomeStates } from 'home/constants';
import { } from 'jasmine';
import { ResponseErrorService } from './responseError.service';


describe('responseErrorService', () => {

    let errorDisplayService: jasmine.SpyObj<ErrorDisplayService>;
    let toasterService: jasmine.SpyObj<ToasterService>;
    let $rootScope: any;
    let stateService: jasmine.SpyObj<StateService>;
    let homeStates: HomeStates;
    let serverConstants: any;

    let service: ResponseErrorService;

    beforeEach(() => {
        errorDisplayService = jasmine.createSpyObj('errorDisplayService', ['displayToasts', 'clearToasts']);
        toasterService = jasmine.createSpyObj('toasterService', ['show', 'removeAll']);
        stateService = jasmine.createSpyObj('stateService', ['go']);
        homeStates = new HomeStates();
        serverConstants = { maintenanceKey: 'fakeMaintenanceKey' };

        service = new ResponseErrorService(errorDisplayService, toasterService, stateService, homeStates, serverConstants);
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('displayToast', () => {

        describe('alpha mode', () => {
            [
                'Success',
                'Warning',
                'Error'
            ].forEach((toastType: ToastType) => {
                it('should call the toaster service', () => {
                    service.displayToast('fake toast', toastType);

                    expect(toasterService.show).toHaveBeenCalledWith(toastType, 'fake toast', false);
                });
            });

            it('should call the toaster service with a set delayed paramter', () => {
                service.displayToast('fake toast', 'Error', true);

                expect(toasterService.show).toHaveBeenCalledWith('Error', 'fake toast', true);
            });

            [
                { input: 'info', expected: 'Success' as ToastType },
                { input: 'wait', expected: 'Success' as ToastType },
                { input: 'warning', expected: 'Warning' as ToastType },
                { input: 'error', expected: 'Error' as ToastType }
            ].forEach(({ input, expected }) => {
                it('should be able to handle legacy toaster types', () => {
                    service.displayToast('fake toast', input as any);

                    expect(toasterService.show).toHaveBeenCalledWith(expected, 'fake toast', false);
                });
            });

            [
                null,
                undefined,
                ''
            ].forEach((invalidInput) => {
                it('should default to error toaster if invalid type input', () => {
                    service.displayToast('fake toast', invalidInput as any);

                    expect(toasterService.show).toHaveBeenCalledWith('Error', 'fake toast', false);
                });
            });
        });
    });

    describe('isErrorFree', () => {
        [
            null,
            undefined,
            '',
            0,
            {},
            []
        ].forEach((invalidInput) => {
            it('should check to see if the error array is a non-empty array', () => {
                const hasNoErrors = service.isErrorFree(invalidInput as any);

                expect(hasNoErrors).toBeTrue();
            });
        });

        it('should call display errors before returning response', () => {
            spyOn(service, 'displayErrorsFromResponse');

            const hasNoErrors = service.isErrorFree({ errors: [{ key: '123', message: 'fake error' }] } as BaseResponse);

            expect(service.displayErrorsFromResponse).toHaveBeenCalledWith({ errors: [{ key: '123', message: 'fake error' }] } as BaseResponse);
            expect(hasNoErrors).toBeFalse();
        });
    });

    describe('displayErrorsFromResponse', () => {

        describe('alpha mode', () => {
            [
                null,
                undefined,
                '',
                0,
                [],
                {},
                { errors: [] }
            ].forEach((noErrorInput) => {
                it('should immediately return if no errors found', () => {
                    service.displayErrorsFromResponse(noErrorInput as any);

                    expect(toasterService.show).not.toHaveBeenCalled();
                });
            });

            it('should call toaster service with delay if delay flag is true', () => {
                service.displayErrorsFromResponse({ errors: [{ key: '123', message: 'fake error' }] } as BaseResponse, true)
                    .catch(() => { });

                expect(toasterService.show).toHaveBeenCalledWith('Error', 'fake error', true);
            });

            it('should call toaster service with delay if session timeout error is found', () => {
                service.displayErrorsFromResponse({ errors: [{ key: 'SESSIONTIMEDOUT', message: 'fake error' }] } as BaseResponse)
                    .catch(() => { });

                expect(toasterService.show).toHaveBeenCalledWith('Error', 'fake error', true);
            });

            it('should display error toast', () => {
                service.displayErrorsFromResponse({ errors: [{ key: '123', message: 'fake error' }] } as BaseResponse)
                    .catch(() => { });

                expect(toasterService.show).toHaveBeenCalledWith('Error', 'fake error', false);
            });

            it('should display multiple error toasts', () => {
                service.displayErrorsFromResponse({
                    errors: [
                        { key: '123', message: 'fake error1' },
                        { key: '456', message: 'fake error2' },
                        { key: '789', message: 'fake error3' }
                    ]
                } as BaseResponse)
                    .catch(() => { });

                expect(toasterService.show).toHaveBeenCalledTimes(3);
            });
        });
    });

    describe('displayAlertsFromResponse', () => {

        describe('alpha mode', () => {
            [
                null,
                undefined,
                '',
                0,
                [],
                {},
                { alerts: [] }
            ].forEach((noAlertInput) => {
                it('should immediately return if no alerts found', () => {
                    service.displayAlertsFromResponse(noAlertInput as any);

                    expect(toasterService.show).not.toHaveBeenCalled();
                });
            });

            it('should sort the alerts by importance', () => {
                service.displayAlertsFromResponse({
                    alerts: [
                        { alertId: 123, alertMsg: 'fake error1', importance: 3 },
                        { alertId: 456, alertMsg: 'fake error2', importance: 1 },
                        { alertId: 789, alertMsg: 'fake error3', importance: 2 }
                    ]
                } as BaseResponse)
                    .catch(() => { });

                expect(toasterService.show).toHaveBeenCalledTimes(3);
                expect((toasterService.show).calls.argsFor(0)).toEqual(['Warning', 'fake error2', false]);
                expect((toasterService.show).calls.argsFor(1)).toEqual(['Warning', 'fake error3', false]);
                expect((toasterService.show).calls.argsFor(2)).toEqual(['Warning', 'fake error1', false]);
            });

            it('should display delayed if delay flag is true', () => {
                service.displayAlertsFromResponse({ alerts: [{ alertId: 123, alertMsg: 'fake error1', importance: 3 }] } as BaseResponse, true)
                    .catch(() => { });

                expect(toasterService.show).toHaveBeenCalledWith('Warning', 'fake error1', true);
            });

            it('should display warning toast', () => {
                service.displayAlertsFromResponse({ alerts: [{ alertId: 123, alertMsg: 'fake error1', importance: 3 }] } as BaseResponse)
                    .catch(() => { });

                expect(toasterService.show).toHaveBeenCalledWith('Warning', 'fake error1', false);
            });
        });
    });

    describe('handleMaintenanceErrors', () => {
        [
            null,
            undefined,
            '',
            0,
            [],
            {},
            { errors: [] }
        ].forEach((noErrorInput) => {
            it('should immediately return if no errors found', () => {
                spyOn(service, 'displayErrorsFromResponse');

                service.handleMaintenanceErrors(noErrorInput as any);

                expect(service.displayErrorsFromResponse).not.toHaveBeenCalled();
                expect(stateService.go).not.toHaveBeenCalled();
            });
        });

        it('should immediately return if no error keys match the maintenance key', () => {
            spyOn(service, 'displayErrorsFromResponse');

            service.handleMaintenanceErrors({ errors: [{ key: '123', message: 'fake error' }] } as BaseResponse);

            expect(service.displayErrorsFromResponse).not.toHaveBeenCalled();
            expect(stateService.go).not.toHaveBeenCalled();
        });

        it('should display errors and redirect to home', async () => {
            spyOn(service, 'displayErrorsFromResponse');

            await service.handleMaintenanceErrors({ errors: [{ key: serverConstants.maintenanceKey, message: 'fake error' }] } as BaseResponse);

            expect(service.displayErrorsFromResponse).toHaveBeenCalledWith({
                errors: [{ key: serverConstants.maintenanceKey, message: 'fake error' }]
            } as BaseResponse, true);
            expect(stateService.go).toHaveBeenCalledWith(homeStates.Frame);
        });
    });

    describe('formatErrorMessages', () => {
        [
            null,
            undefined,
            '',
            0,
            [],
            {}
        ].forEach((noErrorInput) => {
            it('should handle if no errors array found', () => {
                const message = service.formatErrorMessages(noErrorInput as any);

                expect(message).toEqual([]);
            });
        });

        it('should handle if errors have no message', () => {
            const message = service.formatErrorMessages({ errors: [{ key: '123', message: null }] } as BaseResponse);

            expect(message).toEqual(['']);
        });

        it('should handle if errors have no key', () => {
            const message = service.formatErrorMessages({ errors: [{ key: undefined, message: 'fake error' }] } as BaseResponse);

            expect(message).toEqual(['fake error']);
        });

        it('should handle if errors have negative key', () => {
            const message = service.formatErrorMessages({ errors: [{ key: '-123', message: 'fake error' }] } as BaseResponse);

            expect(message).toEqual(['fake error']);
        });

        it('should handle if errors have positive key', () => {
            const message = service.formatErrorMessages({ errors: [{ key: '123', message: 'fake error' }] } as BaseResponse);

            expect(message).toEqual(['fake error']);
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
