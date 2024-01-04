import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CurrentUserService, CurrentUser } from 'common/services';
import { RecentTransactionsComponent } from './recentTransactions.component';

import {
    AccountDashboardService,
    GetTransactionsDataResponse,
    TransactionsSectionData,
    TransactionRecord
} from '../../services';
import { StateService } from '@uirouter/angular';
import { StateNames } from 'constants/module';

describe('component: account-dashboard-recent-transactions', () => {

    let fixture: ComponentFixture<RecentTransactionsComponent>;
    let component: RecentTransactionsComponent;

    let accountDashboardService: AccountDashboardService;
    let state: StateService;
    let stateNames: StateNames;
    let currentUser: CurrentUserService;

    beforeEach(async () => {

        accountDashboardService = jasmine.createSpyObj('accountDashboardService', ['getTransactionsData']);
        state = jasmine.createSpyObj('state', ['go']);
        currentUser = jasmine.createSpyObj('currentUser', ['getCurrentUser']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    RecentTransactionsComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    { provide: AccountDashboardService, useFactory: () => accountDashboardService },
                    { provide: StateService, useFactory: () => state },
                    { provide: StateNames, useFactory: () => stateNames },
                    { provide: CurrentUserService, useFactory: () => currentUser },
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(RecentTransactionsComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {

        beforeEach(() => {
            spyOn<any>(component, 'getTransactionsData').and.callFake(() => { });
        });

        it('should call getTransactionsData 1 time', () => {
            //act
            component['ngOnInit']();

            //assert
            expect(component.getTransactionsData).toHaveBeenCalledTimes(1);
        });

        it('isLargeAccount should be false if largeAccountFlag and extraLargeAccountFlag are undefined', () => {

            const fakeCurrentUserData: CurrentUser = {
                accountStatus: null,
                acctActivity: null,
                acctId: null,
                alerts: [],
                claimSessionCredential: null,
                companyName: null,
                currentBalance: null,
                currentBalanceObj: null,
                driverLic: null,
                driverLicState: null,
                emailIsMissing: false,
                environment: null,
                errors: [],
                exception: null,
                extraLargeAccountFlag: undefined,
                firstName: null,
                hasPaymentPlans: false,
                invalidAccountSource: false,
                isCorporateAccount: false,
                isExpressAccount: false,
                isExpressPlan: false,
                isInvoiced: false,
                largeAccountFlag: undefined,
                lastName: null,
                newAccountStep: null,
                passwordNeedsReset: false,
                paymentPlanBalance: null,
                securityIssue: false,
                securityQuestionIsMissing: false,
                sessionTimedOut: false,
                username: null,
                webVersion: null,
                isFlexPay: false,
                rebillOptIn: false
            };

            (currentUser.getCurrentUser as jasmine.Spy).and.returnValue(fakeCurrentUserData);

            //act
            component['ngOnInit']();

            //assert
            expect(component.isLargeAccount).toEqual(false);
        });

        it('isLargeAccount should be true if largeAccountFlag = true', () => {

            const fakeCurrentUserData: CurrentUser = {
                accountStatus: null,
                acctActivity: null,
                acctId: null,
                alerts: [],
                claimSessionCredential: null,
                companyName: null,
                currentBalance: null,
                currentBalanceObj: null,
                driverLic: null,
                driverLicState: null,
                emailIsMissing: false,
                environment: null,
                errors: [],
                exception: null,
                extraLargeAccountFlag: undefined,
                firstName: null,
                hasPaymentPlans: false,
                invalidAccountSource: false,
                isCorporateAccount: false,
                isExpressAccount: false,
                isExpressPlan: false,
                isInvoiced: false,
                largeAccountFlag: true,
                lastName: null,
                newAccountStep: null,
                passwordNeedsReset: false,
                paymentPlanBalance: null,
                securityIssue: false,
                securityQuestionIsMissing: false,
                sessionTimedOut: false,
                username: null,
                webVersion: null,
                isFlexPay: false,
                rebillOptIn: false
            };

            (currentUser.getCurrentUser as jasmine.Spy).and.returnValue(fakeCurrentUserData);

            //act
            component['ngOnInit']();

            //assert
            expect(component.isLargeAccount).toEqual(true);
        });

        it('isLargeAccount should be true if extraLargeAccountFlag = true', () => {

            const fakeCurrentUserData: CurrentUser = {
                accountStatus: null,
                acctActivity: null,
                acctId: null,
                alerts: [],
                claimSessionCredential: null,
                companyName: null,
                currentBalance: null,
                currentBalanceObj: null,
                driverLic: null,
                driverLicState: null,
                emailIsMissing: false,
                environment: null,
                errors: [],
                exception: null,
                extraLargeAccountFlag: true,
                firstName: null,
                hasPaymentPlans: false,
                invalidAccountSource: false,
                isCorporateAccount: false,
                isExpressAccount: false,
                isExpressPlan: false,
                isInvoiced: false,
                largeAccountFlag: undefined,
                lastName: null,
                newAccountStep: null,
                passwordNeedsReset: false,
                paymentPlanBalance: null,
                securityIssue: false,
                securityQuestionIsMissing: false,
                sessionTimedOut: false,
                username: null,
                webVersion: null,
                isFlexPay: false,
                rebillOptIn: false
            };

            (currentUser.getCurrentUser as jasmine.Spy).and.returnValue(fakeCurrentUserData);

            //act
            component['ngOnInit']();

            //assert
            expect(component.isLargeAccount).toBe(true);
        });

    });

    describe('getTransactionsData', () => {

        it('should call getTransactionsData', async () => {

            const fakeTransactionData: TransactionRecord[] = [
                {
                    trxnDate: new Date('2021-06-19T11:35:46'),
                    postedDate: new Date('2021-06-19T11:46:03'),
                    licensePlate: 'AAA5555',
                    licenseState: 'TX',
                    licenseStateAndPlate: 'TX-AAA5555',
                    vehicleClassCode: '2',
                    transType: 'AVI Transaction',
                    vehicleNickName: null,
                    amount: -1.5,
                    locationName: 'HCTRA-281-875-3279-SAM HOUSTON TOLL ROAD-SAM HOUSTON EAST PLAZA-SHT-SAME-08 NORTH',
                    agencyContact: '281-875-3279',
                    agencyName: 'HCTRA',
                    direction: 'NORTH',
                    facilityName: 'SAM HOUSTON TOLL ROAD',
                    laneName: 'SHT-SAME-08',
                    plazaName: 'SAM HOUSTON EAST PLAZA',
                    latitude: null,
                    longitude: null,
                    agencyWebsite: '',
                    hasLocationCoordinates: false,
                    initialIndex: '0'
                }
            ];

            const fakeTransactionsSectionData: TransactionsSectionData = {
                transactions: fakeTransactionData
            };

            const fakeResponse: GetTransactionsDataResponse = {
                transactionsData: fakeTransactionsSectionData,
                accountStatus: null,
                alerts: [],
                errors: [],
                exception: null,
                sessionTimedOut: null
            };

            (accountDashboardService.getTransactionsData as jasmine.Spy).and.resolveTo(fakeResponse);

            await (component as any).getTransactionsData();

            expect(accountDashboardService.getTransactionsData).toHaveBeenCalledTimes(1);

        });

        it('should have one transaction', async () => {

            const fakeTransactionData: TransactionRecord[] = [
                {
                    trxnDate: new Date(),
                    postedDate: new Date(),
                    licensePlate: 'AAA5555',
                    licenseState: 'TX',
                    licenseStateAndPlate: 'TX-AAA5555',
                    vehicleClassCode: '2',
                    transType: 'AVI Transaction',
                    vehicleNickName: null,
                    amount: -1.5,
                    locationName: 'HCTRA-281-875-3279-SAM HOUSTON TOLL ROAD-SAM HOUSTON EAST PLAZA-SHT-SAME-08 NORTH',
                    agencyContact: '281-875-3279',
                    agencyName: 'HCTRA',
                    direction: 'NORTH',
                    facilityName: 'SAM HOUSTON TOLL ROAD',
                    laneName: 'SHT-SAME-08',
                    plazaName: 'SAM HOUSTON EAST PLAZA',
                    latitude: null,
                    longitude: null,
                    agencyWebsite: '',
                    hasLocationCoordinates: false,
                    initialIndex: '0'
                },
                {
                    trxnDate: new Date('2021-06-19T11:35:46'),
                    postedDate: new Date('2021-06-19T11:46:03'),
                    licensePlate: 'AAA5555',
                    licenseState: 'TX',
                    licenseStateAndPlate: 'TX-AAA5555',
                    vehicleClassCode: '2',
                    transType: 'AVI Transaction',
                    vehicleNickName: null,
                    amount: -1.5,
                    locationName: 'HCTRA-281-875-3279-SAM HOUSTON TOLL ROAD-SAM HOUSTON EAST PLAZA-SHT-SAME-08 NORTH',
                    agencyContact: '281-875-3279',
                    agencyName: 'HCTRA',
                    direction: 'NORTH',
                    facilityName: 'SAM HOUSTON TOLL ROAD',
                    laneName: 'SHT-SAME-08',
                    plazaName: 'SAM HOUSTON EAST PLAZA',
                    latitude: null,
                    longitude: null,
                    agencyWebsite: '',
                    hasLocationCoordinates: false,
                    initialIndex: '0'
                }
            ];

            const fakeTransactionsSectionData: TransactionsSectionData = {
                transactions: fakeTransactionData
            };

            const fakeResponse: GetTransactionsDataResponse = {
                transactionsData: fakeTransactionsSectionData,
                accountStatus: null,
                alerts: [],
                errors: [],
                exception: null,
                sessionTimedOut: null
            };

            (accountDashboardService.getTransactionsData as jasmine.Spy).and.resolveTo(fakeResponse);

            await (component as any).getTransactionsData();

            expect(component.transactions.length).toEqual(1);
        });

        it('should set noDate to true if no transaction data', async () => {

            const fakeTransactionData: TransactionRecord[] = [];

            const fakeTransactionsSectionData: TransactionsSectionData = {
                transactions: fakeTransactionData
            };

            const fakeResponse: GetTransactionsDataResponse = {
                transactionsData: fakeTransactionsSectionData,
                accountStatus: null,
                alerts: [],
                errors: [],
                exception: null,
                sessionTimedOut: null
            };

            (accountDashboardService.getTransactionsData as jasmine.Spy).and.resolveTo(fakeResponse);

            await (component as any).getTransactionsData();

            expect(component.noData).toBe(true);
        });
    });

    describe('viewTransactionsClick', () => {
        it('should go to Account Activity', () => {

            //Act
            component.viewTransactionsClick();

            //Assert
            expect(state.go).toHaveBeenCalledTimes(1);

        });
    });
});
