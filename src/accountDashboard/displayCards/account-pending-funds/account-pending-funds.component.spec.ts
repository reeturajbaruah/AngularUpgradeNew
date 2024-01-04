import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AccountPendingComponent } from './account-pending-funds.component';
import { StateService } from '@uirouter/core';
import { PendingFundsFacadeService } from 'account/pending-funds';
import { stateNames } from 'makePayment/constants';

describe('AccountPendingComponent', () => {
    let component: AccountPendingComponent;
    let fixture: ComponentFixture<AccountPendingComponent>;

    let stateServiceMock: jasmine.SpyObj<StateService>;
    let pendingFundsFacadeServiceMock: jasmine.SpyObj<PendingFundsFacadeService>;

    beforeEach(async () => {
        stateServiceMock = jasmine.createSpyObj('StateService', ['go']);
        pendingFundsFacadeServiceMock = jasmine.createSpyObj('PendingFundsFacadeService', ['getRebillAmt']);

        await TestBed.configureTestingModule({
            declarations: [AccountPendingComponent],
            providers: [
                { provide: StateService, useFactory: () => stateServiceMock },
                { provide: PendingFundsFacadeService, useFactory: () => pendingFundsFacadeServiceMock }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AccountPendingComponent);
        component = fixture.debugElement.componentInstance;
        component.cmsContent = {
            Title: 'Mock Title',
        } as any;
    });

    describe('canary test', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });

    describe('addFunds', () => {
        it('should navigate to landing state with params if rebillAmt is positive', async () => {
            pendingFundsFacadeServiceMock.getRebillAmt.and.returnValue(Promise.resolve(10));

            await component.addFunds({});

            expect(pendingFundsFacadeServiceMock.getRebillAmt).toHaveBeenCalled();
            expect(stateServiceMock.go).toHaveBeenCalledWith(stateNames.Landing, {
                source: {
                    name: 'PENDING-FUNDS',
                    data: {
                        rebillAmt: 10
                    }
                }
            });
        });

        it('should not navigate if rebillAmt is non-positive', async () => {
            pendingFundsFacadeServiceMock.getRebillAmt.and.returnValue(Promise.resolve(0));

            await component.addFunds({});

            expect(pendingFundsFacadeServiceMock.getRebillAmt).toHaveBeenCalled();
            expect(stateServiceMock.go).not.toHaveBeenCalled();
        });
    });
});
