import { } from 'jasmine';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { CurrentUserService, IsInvoicedService } from 'common/services';
import { UserRoles } from 'constants/module';
import { LinkAuthorizationService } from './linkAuthorization.service';
import { urlPaths as profileUrlPaths } from 'profile/constants';
import { urlPaths as paymentPlanUrlPaths } from 'paymentplans/constants';
import { urlPaths as accountActivityUrlPaths } from 'accountActivity/constants';

describe('stateResolver', () => {

    let userRoles: UserRoles;
    let authService: jasmine.SpyObj<AuthenticationService>;
    let currentUserService: CurrentUserService;
    let isInvoicesService: jasmine.SpyObj<IsInvoicedService>;

    let service: LinkAuthorizationService;

    beforeEach(() => {

        userRoles = new UserRoles();
        authService = jasmine.createSpyObj('authService', ['isAuthorized', 'isAuthenticated']);
        currentUserService = { hasPaymentPlans : false } as CurrentUserService;
        isInvoicesService = jasmine.createSpyObj('isInvoicedService', ['isAccountInvoiced']);

        service = new LinkAuthorizationService(userRoles, authService, currentUserService, isInvoicesService);
    });

    describe('canary', () => {

        it('should pass', () => {

            expect(true).toBe(true);
        });
    });

    describe('isAuthorized', () => {

        beforeEach(() => {

            authService.isAuthorized.and.returnValue(false);
        });

        it('should return true if one of the authorizedRoles is anonymous even if authService.isAuthorized returns false', () => {

            expect(service['isAuthorized']([userRoles.anonymous, 'fake', 'fake 2'])).toBe(true);
            expect(authService.isAuthorized).toHaveBeenCalledOnceWith([userRoles.anonymous, 'fake', 'fake 2']);
        });

        it('should return false if none of the authorizedRoles is anonymous and authService.isAuthorized returns false', () => {

            expect(service['isAuthorized'](['fake', 'fake 2'])).toBe(false);
            expect(authService.isAuthorized).toHaveBeenCalledOnceWith(['fake', 'fake 2']);
        });

        it('should return true when authService.isAuthorized returns true', () => {

            authService.isAuthorized.and.returnValue(true);

            expect(service['isAuthorized'](['fake', 'fake 2'])).toBe(true);
            expect(authService.isAuthorized).toHaveBeenCalledOnceWith(['fake', 'fake 2']);
        });
    });

    describe('isAllowed', () => {

        let isAuthorizedSpy;

        beforeEach(() => {

            isAuthorizedSpy = spyOn(service as any, 'isAuthorized');
        });

        it('should return false when isAuthorized returns false', () => {

            isAuthorizedSpy.and.returnValue(false);

            expect(service.isAllowed({
                url: '/someLink',
                authorizedRoles: ['fake', 'fake z']
            })).toBe(false);
            expect(isAuthorizedSpy).toHaveBeenCalledOnceWith(['fake', 'fake z']);
        });

        [
            accountActivityUrlPaths.accountActivityInvoices,
            profileUrlPaths.UpdateReplenishmentAmount,
            paymentPlanUrlPaths.accountOverviewSummary,
        ].forEach(url => {

            it('should return true when isAuthorized and not Authenticated', () => {

                isAuthorizedSpy.and.returnValue(true);
                authService.isAuthenticated.and.returnValue(false);

                expect(service.isAllowed({
                    url,
                    authorizedRoles: ['fake', 'fake z']
                })).toBe(true);
                expect(isAuthorizedSpy).toHaveBeenCalledOnceWith(['fake', 'fake z']);
                expect(isInvoicesService.isAccountInvoiced).not.toHaveBeenCalled();
            });
        });
               

        [
            { url: profileUrlPaths.UpdateReplenishmentAmount, isInvoiced: true, expected: false },
            { url: profileUrlPaths.UpdateReplenishmentAmount, isInvoiced: false, expected: true },
            { url: accountActivityUrlPaths.accountActivityInvoices, isInvoiced: true, expected: true },
            { url: accountActivityUrlPaths.accountActivityInvoices, isInvoiced: false, expected: false },
        ].forEach(({ url, isInvoiced, expected }) => {

            it(`should return ${expected} for isAuthorized &Authenticated & ${url} & invoiced ${isInvoiced}`, () => {

                isAuthorizedSpy.and.returnValue(true);
                authService.isAuthenticated.and.returnValue(true);
                isInvoicesService.isAccountInvoiced.and.returnValue(isInvoiced);

                expect(service.isAllowed({
                    url,
                    authorizedRoles: ['fake', 'fake z']
                })).toBe(expected);
                expect(isAuthorizedSpy).toHaveBeenCalledOnceWith(['fake', 'fake z']);
                expect(isInvoicesService.isAccountInvoiced).toHaveBeenCalledTimes(1);
            });
        });

        [false, true].forEach(hasPaymentPlans => {


            it(`should return ${hasPaymentPlans} for isAuthorized &Authenticated & paymentPlanAccountSummary & hasPaymentPlans ${
                hasPaymentPlans}`, () => {

                    isAuthorizedSpy.and.returnValue(true);
                    authService.isAuthenticated.and.returnValue(true);
                    (currentUserService as any).hasPaymentPlans = hasPaymentPlans;

                    expect(service.isAllowed({
                        url: paymentPlanUrlPaths.accountOverviewSummary,
                        authorizedRoles: ['fake', 'fake z']
                    })).toBe(hasPaymentPlans);
                    expect(isAuthorizedSpy).toHaveBeenCalledOnceWith(['fake', 'fake z']);
                    expect(isInvoicesService.isAccountInvoiced).not.toHaveBeenCalled();
            });
        });
    });
});
