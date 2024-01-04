import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';
import { WebApisService } from 'profile/services/webApis.service';
import { CurrentUserService, CurrentUser, AccountService, IsInvoicedService } from 'common/services';
import { IMailingInfo } from 'common/models';

import { AccountDetailsComponent } from './accountDetails.component';

describe('component: account-details', () => {

    let fixture: ComponentFixture<AccountDetailsComponent>;
    let component: AccountDetailsComponent;
    let currentUserService: jasmine.SpyObj<CurrentUserService>;
    let webApiService: jasmine.SpyObj<WebApisService>;
    let isInvoicedService: jasmine.SpyObj<IsInvoicedService>;
    let accountService: jasmine.SpyObj<AccountService>;

    beforeEach(async () => {
        currentUserService = jasmine.createSpyObj('currentUserService', ['getCurrentUser']);
        isInvoicedService = jasmine.createSpyObj('isInvoicedService', ['isAccountInvoiced']);
        webApiService = jasmine.createSpyObj('WebApisService', ['getAccountInfo', 'getAuthContacts']);
        accountService = jasmine.createSpyObj('AccountService', ['getContactInfo', 'getMailingInfo']);

        webApiService.getAccountInfo.and.returnValue(Promise.resolve() as any);
        webApiService.getAuthContacts.and.returnValue(Promise.resolve() as any);
        accountService.getContactInfo.and.returnValue(Promise.resolve() as any);
        accountService.getMailingInfo.and.returnValue({} as Promise<IMailingInfo>);

        await TestBed
            .configureTestingModule({
                declarations: [
                    AccountDetailsComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: WebApisService, useFactory: () => webApiService },
                    { provide: CurrentUserService, useFactory: () => currentUserService },
                    { provide: IsInvoicedService, useFactory: () => isInvoicedService },
                    { provide: AccountService, useFactory: () => accountService }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(AccountDetailsComponent);
        component = fixture.debugElement.componentInstance;
        component.closeAccountModalCms = {
            ModalTitle: 'close title',
            LongDescription: 'this will close your account',
            ContinueButtonText: 'continue',
            CloseButtonText: 'close'
        };
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('checkIfAccountClosed', () => {

        it('isAccountClosed should be true if current user is null', async () => {
            currentUserService.getCurrentUser.and.returnValue(null);

            await component.ngOnInit();

            expect(currentUserService.getCurrentUser).toHaveBeenCalledTimes(1);
            expect(component.isAccountClosed).toBeTrue();
        });

        it('isAccountClosed should be true if current user acctActivity is "I"', async () => {
            currentUserService.getCurrentUser.and.returnValue({ acctActivity: 'I' } as CurrentUser);

            await component.ngOnInit();

            expect(currentUserService.getCurrentUser).toHaveBeenCalledTimes(1);
            expect(component.isAccountClosed).toBeTrue();
        });

        it('isAccountClosed should be false if current user acctActivity is not "I"', async () => {
            currentUserService.getCurrentUser.and.returnValue({ acctActivity: 'A' } as CurrentUser);

            await component.ngOnInit();

            expect(currentUserService.getCurrentUser).toHaveBeenCalledTimes(1);
            expect(component.isAccountClosed).toBeFalse();
        });
    });
});
