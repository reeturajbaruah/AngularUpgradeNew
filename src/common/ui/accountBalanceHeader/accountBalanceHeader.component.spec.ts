import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CurrentUserService, CurrentUser } from 'common/services';

import { AccountBalanceHeaderComponent } from './accountBalanceHeader.component';

describe('component: account-balance-header', () => {

    let fixture: ComponentFixture<AccountBalanceHeaderComponent>;
    let component: AccountBalanceHeaderComponent;
    let currentUserService: jasmine.SpyObj<CurrentUserService>;

    beforeEach(async () => {
        currentUserService = jasmine.createSpyObj('currentUserService', ['getCurrentUser', 'getCurrentUserBalance']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    AccountBalanceHeaderComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: CurrentUserService, useFactory: () => currentUserService }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(AccountBalanceHeaderComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {

        it('getCurrentUser should set user information correctly', async () => {
            currentUserService.getCurrentUser.and.returnValue({
                acctId: 123322,
                currentBalanceObj: {
                    currentBalance: 50.01
                }
            } as CurrentUser);

            await component.ngOnInit();

            expect(currentUserService.getCurrentUser).toHaveBeenCalledTimes(1);
            expect(component.currentUserData).toBeDefined();
            expect(component.currentUserData.acctId).toEqual(123322);
            expect(component.currentUserData.currentBalanceObj.currentBalance).toEqual(50.01);
        });

        it('getCurrentUser should set user information to 0 if the current user doesnt exist', async () => {
            currentUserService.getCurrentUser.and.returnValue(null);

            await component.ngOnInit();

            expect(currentUserService.getCurrentUser).toHaveBeenCalledTimes(1);
            expect(component.currentUserData).toBeDefined();
            expect(component.currentUserData.acctId).toEqual(0);
            expect(component.currentUserData.currentBalanceObj.currentBalance).toEqual(0);
        });
    });
});
