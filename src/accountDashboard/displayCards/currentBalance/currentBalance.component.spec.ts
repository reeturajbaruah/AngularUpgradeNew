import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { StateService } from '@uirouter/angular';
import { CurrentUserService, DialogService } from 'common/services';
import {
    AccountDashboardService,
    GetAccountDataResponse,
    CurrentBalanceObj
} from '../../services';
import { CurrentBalanceComponent } from './currentBalance.component';
import { TruncatePipe } from 'pipes/truncate/truncate.pipe';

describe('component: account-dashboard-current-balance', () => {

    let fixture: ComponentFixture<CurrentBalanceComponent>;
    let component: CurrentBalanceComponent;

    let accountDashboardService: AccountDashboardService;
    let currentUser: CurrentUserService;
    let state: StateService;
    let dialogService: jasmine.SpyObj<DialogService>;

    const fakeResponse: GetAccountDataResponse = {
        accountStatus: '',
        currentBalance: null,
        emailAddress: '',
        username: '',
        alerts: null,
        errors: null,
        exception: null,
        sessionTimedOut: null
    };

    beforeEach(async () => {

        currentUser = jasmine.createSpyObj('currentUser', ['getCurrentUser', 'firstName', 'lastName', 'acctId', 'getRootScopeCurrentUser']);
        accountDashboardService = jasmine.createSpyObj('accountDashboardService', ['getAccountData']);
        state = jasmine.createSpyObj('state', ['go']);
        dialogService = jasmine.createSpyObj('DialogService', ['openGenericModal']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    CurrentBalanceComponent,
                    TruncatePipe
                ],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    { provide: AccountDashboardService, useFactory: () => accountDashboardService },
                    { provide: CurrentUserService, useFactory: () => currentUser },
                    { provide: StateService, useFactory: () => state },
                    { provide: DialogService, useFactory: () => dialogService }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(CurrentBalanceComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {
        beforeEach(() => {
            (currentUser.getCurrentUser as jasmine.Spy).and.returnValue({username: 'test!test!test'});
        });

        it('should call currentUser.getCurrentUser', () => {

            const fakeCurrentBalanceObj: CurrentBalanceObj = {
                currentBalance: 0
            };

            fakeResponse.currentBalance = fakeCurrentBalanceObj;

            (accountDashboardService.getAccountData as jasmine.Spy).and.resolveTo(fakeResponse);

            //act
            component['ngOnInit']();

            //assert
            expect(currentUser.getCurrentUser).toHaveBeenCalled();
        });

        it('should set isLargeNumber to true', async () => {

            const fakeCurrentBalanceObj: CurrentBalanceObj = {
                currentBalance: 10000
            };
            
            fakeResponse.currentBalance = fakeCurrentBalanceObj;

            (accountDashboardService.getAccountData as jasmine.Spy).and.resolveTo(fakeResponse);

            //act
            await component['ngOnInit']();
                //assert
            expect(component.isLargeNumber).toBeTruthy();                
        });
    });

    describe('makePaymentClick', () => {
        it('should go to MakePaymentStates EnterAmount', () => {
            
            //Act
            component.makePaymentClick();

            //Assert
            expect(state.go).toHaveBeenCalledTimes(1);

        });
    });

    describe('changeReplenishAmtClick', () => {
        it('should go to UpdateReplenishAmount', () => {

            //Act
            component.changeReplenishAmtClick();

            //Assert
            expect(state.go).toHaveBeenCalledTimes(1);

        });
    });

    describe('paymentPlanClick', () => {
        it('should go to Payment Plan', () => {

            //Act
            component.paymentPlanClick();

            //Assert
            expect(state.go).toHaveBeenCalledTimes(1);

        });
    });

    describe('openUsernameModal', () => {
        beforeEach(() => {
            (currentUser.getCurrentUser as jasmine.Spy).and.returnValue({ username: 'test' });
            component.currentBalanceCMS = {
                UsernameTitle: 'test',
            } as any;
            (accountDashboardService.getAccountData as jasmine.Spy).and.resolveTo(fakeResponse);
        });

        it('should call openGenericModal', async () => {

            const fakeCurrentBalanceObj: CurrentBalanceObj = {
                currentBalance: 0
            };

            fakeResponse.currentBalance = fakeCurrentBalanceObj;

            //Act
            await component.ngOnInit();
            component.openUsernameModal();

            //Assert
            expect(dialogService.openGenericModal).toHaveBeenCalled();
        });
    });
});
