import { } from 'jasmine';
import { WebStorageConst } from 'constants/module';
import { CurrentUserService } from './currentUser.service';

import { CookieService } from '../cookieService/cookie.service';
import { timer } from 'rxjs';
import { reduce, takeUntil } from 'rxjs/operators';

describe('currentUserService', () => {

    let webStorage;
    let webStorageConst: WebStorageConst;
    let session;
    let cookieService: jasmine.SpyObj<CookieService>;
    let service: CurrentUserService;

    beforeEach(() => {

        webStorageConst = new WebStorageConst();
        webStorage = jasmine.createSpyObj('webStorage', ['setKeyValue', 'getValue']);
        cookieService = jasmine.createSpyObj('cookieService', ['put', 'get']);
        session = jasmine.createSpyObj('session', ['getAcctActivity']);

        service = new CurrentUserService(webStorage, webStorageConst, session, cookieService);
    });

    describe('canary', () => {

        it('should pass', () => {

            expect(true).toBe(true);
        });
    });

    describe('ngOnDestroy', () => {

        it(`should complete authorizationChange`, async () => {

            const result = service.authorizationChange$.toPromise();

            service.ngOnDestroy();

            await expectAsync(result).toBeResolved();
        });
    });

    describe('setCurrentUser', () => {

        let fakeCurrentUser;
        beforeEach(() => {
            fakeCurrentUser = { acctId: 'fake acct id' };
            spyOn(service, 'getCurrentUser').and.returnValue(fakeCurrentUser);
            session.getAcctActivity.and.returnValue('fake acct activity');
        });

        it('should setCurrentUser to webstorage', () => {

            service.setCurrentUser();

            expect(webStorage.setKeyValue).toHaveBeenCalledOnceWith(webStorageConst.currentUser, fakeCurrentUser);
        });

        it('should set currentUser acctActivity to value returned by session.getAcctActivity', () => {

            service.setCurrentUser();

            expect(fakeCurrentUser.acctActivity).toBe('fake acct activity');
        });

        it('should set currentUserAcctId cookie from currentUser', () => {

            service.setCurrentUser();

            expect(cookieService.put).toHaveBeenCalledOnceWith('currentUserAcctId', 'fake acct id');
        });

        it('should notify subscribers of authorizationChange', async () => {

            const result = service.authorizationChange$.pipe(
                takeUntil(timer(100)),
                reduce(acc => acc + 1, 0)
            ).toPromise();

            service.setCurrentUser();

            expect(await result).toBe(1);
        });


        it('should notify subscribers of authorizationChange every time setCurrentUser is called', async () => {

            const result = service.authorizationChange$.pipe(
                takeUntil(timer(100)),
                reduce(acc => acc + 1, 0)
            ).toPromise();

            service.setCurrentUser();
            service.setCurrentUser();
            service.setCurrentUser();

            expect(await result).toBe(3);
        });
    });

    describe('updateCurrentUser', () => {

        beforeEach(() => {
            spyOn(service, 'setCurrentUser');
        });

        it('should set memCurrentUser and webStorage current user to response value', () => {

            const fake = { acctId: 'fake id' };

            service.updateCurrentUser(fake);

            expect(service['memCurrentUser']).toBe(fake);
            expect(webStorage.setKeyValue).toHaveBeenCalledOnceWith(webStorageConst.currentUser, fake);
        });

        it('should set cookie value for acctId', () => {

            const fake = { acctId: 'fake id' };

            service.updateCurrentUser(fake);

            expect(cookieService.put).toHaveBeenCalledOnceWith('currentUserAcctId', 'fake id');
        });

    });

    describe('destroyCurrentUser', () => {

        it('should empty memCurrentUser leaving prop acctId: 0', () => {

            service['memCurrentUser'] = { someProp: 'asfdasdf' };

            service.destroyCurrentUser();

            expect(service['memCurrentUser']).toEqual({ acctId: 0 });
        });

        it('should set webStorage current user to empty with acctId: 0', () => {


            service.destroyCurrentUser();

            expect(webStorage.setKeyValue).toHaveBeenCalledOnceWith(webStorageConst.currentUser, { acctId: 0 });
        });

        it('should put acctId in cookie', () => {

            service.destroyCurrentUser();

            expect(cookieService.put).toHaveBeenCalledOnceWith('currentUserAcctId', 0);
        });

        it('should notify subscribers of authorizationChange', async () => {

            const result = service.authorizationChange$.pipe(
                takeUntil(timer(100)),
                reduce(acc => acc + 1, 0)
            ).toPromise();

            service.destroyCurrentUser();

            expect(await result).toBe(1);
        });

        it('should notify subscribers of authorizationChange every time destroyCurrentUser is called', async () => {

            const result = service.authorizationChange$.pipe(
                takeUntil(timer(100)),
                reduce(acc => acc + 1, 0)
            ).toPromise();

            service.destroyCurrentUser();
            service.destroyCurrentUser();
            service.destroyCurrentUser();
            service.destroyCurrentUser();

            expect(await result).toBe(4);
        });
    });

    describe('getCurrentUser', () => {

        it('should set memCurrentUser to value from webStorage when values not equal', () => {

            const fakeWebStorageValue = { fake: 'webStorage' };
            service['memCurrentUser'] = { fake: 'mem' };
            webStorage.getValue.and.returnValue(fakeWebStorageValue);

            expect(service.getCurrentUser()).toBe(fakeWebStorageValue);

            expect(webStorage.getValue).toHaveBeenCalledOnceWith(webStorageConst.currentUser);
            expect(service['memCurrentUser']).toBe(fakeWebStorageValue);
        });
    });

    describe('getCurrentUser balance', () => {

        it('returns the current user balance', async () => {
            const mockCurrentUser =
            {
                currentBalanceObj: {
                    currentBalance: -40
                }

            };

            service['memCurrentUser'] = { fake: 'mem' };
            webStorage.getValue.and.returnValue(mockCurrentUser);

            expect(service.getCurrentUserBalance()).toEqual(mockCurrentUser.currentBalanceObj.currentBalance);
        });

        it('returns the current user balance if the user is asked to reset the pwd', async () => {
            const mockCurrentUser = {

                passwordNeedsReset: false

            };

            service['memCurrentUser'] = { fake: 'mem' };
            webStorage.getValue.and.returnValue(mockCurrentUser);
            service.getCurrentUserBalance();
            expect(webStorage.getValue).toHaveBeenCalledWith(webStorageConst.currentBalance);
                        //expect(webStorage.getValue).toHaveBeenCalledOnceWith(webStorageConst.currentBalance)
        });
    });

    describe('currentUserIsInSyncAcrossTabs', () => {

        it('should return false when cookie acctId value does not match memCurrentUser Value', () => {

            cookieService.get.and.returnValue('444');
            service['memCurrentUser'] = { acctId: 1234 };

            expect(service.currentUserIsInSyncAcrossTabs()).toBe(false);
            expect(cookieService.get).toHaveBeenCalledOnceWith('currentUserAcctId');
        });

        it('should return true when cookie acctId value matches memCurrentUser Value', () => {

            cookieService.get.and.returnValue('1234');
            service['memCurrentUser'] = { acctId: 1234 };

            expect(service.currentUserIsInSyncAcrossTabs()).toBe(true);
            expect(cookieService.get).toHaveBeenCalledOnceWith('currentUserAcctId');
        });
    });
});
