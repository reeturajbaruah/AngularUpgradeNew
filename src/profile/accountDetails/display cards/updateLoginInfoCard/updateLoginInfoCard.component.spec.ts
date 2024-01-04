import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StateService } from '@uirouter/angular';
import { AccountService, DialogService, ManageEzTagResponse, ResponseErrorService } from 'common/services';
import { GenericCmsModalComponent } from 'common/ui';
import { } from 'jasmine';
import { PipesModule } from 'pipes/module';
import { stateNames as profileStateNames } from 'profile/constants';
import { UpdateLoginInfoCardComponent } from './updateLoginInfoCard.component';


describe('component: update-login-info-card', () => {

    let fixture: ComponentFixture<UpdateLoginInfoCardComponent>;
    let component: UpdateLoginInfoCardComponent;
    let state: StateService;
    let dialogService: DialogService;
    let responseErrorService: ResponseErrorService;
    let accountService: AccountService;

    beforeEach(async () => {
        dialogService = jasmine.createSpyObj('dialogService', ['openGenericModal']);
        state = jasmine.createSpyObj('uiStateService', ['go', 'get']);
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree']);
        (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);
        accountService = jasmine.createSpyObj('accountService', ['getEZTagInfo']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    UpdateLoginInfoCardComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: StateService, useFactory: () => state },
                    { provide: DialogService, useFactory: () => dialogService },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: AccountService, useFactory: () => accountService }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(UpdateLoginInfoCardComponent);
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

    describe('changeUsername', () => {

        it('should call state.go with profileStateNames.ChangeUsername', async () => {
            await component.changeUsername();

            expect(state.go).toHaveBeenCalledTimes(1);
            expect(state.go).toHaveBeenCalledWith('ChangeUsername');
        });
    });

    describe('changePassword', () => {

        it('should call state.go with profileStateNames.ChangePassword', async () => {
            await component.changePassword();

            expect(state.go).toHaveBeenCalledTimes(1);
            expect(state.go).toHaveBeenCalledWith('ChangePassword');
        });
    });

    describe('updateSecurityQuestion', () => {

        it('should call state.go with profileStateNames.UpdateSecurityQuestion', async () => {
            await component.updateSecurityQuestion();

            expect(state.go).toHaveBeenCalledTimes(1);
            expect(state.go).toHaveBeenCalledWith('ChangeSecurityQuestion');
        });
    });

    describe('closeAccount', () => {
        [
            { pbp: [], account: [{ tagStatusDesc: 'active' }] },
            { pbp: [{ tagStatusDesc: 'active' }], account: [] },
            { pbp: [{ tagStatusDesc: 'active' }], account: [{ tagStatusDesc: 'inactive' }] }].forEach((input) => {
                it('should call openGenericModal if not all vehicles inactive', async () => {
                    (accountService.getEZTagInfo as jasmine.Spy).and.returnValue({
                        pbpTags: input.pbp,
                        accountTags: input.account
                    } as any);

                    const data = {
                        cmsContent: {
                            Title: 'close title',
                            PrimaryContent: 'this will close your account',
                            AcceptBtn: 'continue',
                            CancelBtn: 'close'
                        }
                    };

                    await component.closeAccount();

                    expect(dialogService.openGenericModal).toHaveBeenCalledOnceWith(GenericCmsModalComponent, data);
                });
            });
        [
            { pbp: [], account: [{ tagStatusDesc: 'inactive' }] },
            { pbp: [{ tagStatusDesc: 'expired' }], account: [] },
            { pbp: [{ tagStatusDesc: 'expired' }], account: [{ tagStatusDesc: 'inactive' }] }].forEach((input) => {
                it('should not call openGenericModal if all vehicles inactive/expired', async () => {
                    (accountService.getEZTagInfo as jasmine.Spy).and.returnValue({
                        pbpTags: input.pbp,
                        accountTags: input.account
                    } as any);

                    await component.closeAccount();

                    expect(dialogService.openGenericModal).not.toHaveBeenCalled();
                    expect(state.go).toHaveBeenCalledOnceWith(profileStateNames.CloseAccountAgreement);
                });
            });

        it('should call state.go if modal accept', async () => {
            (accountService.getEZTagInfo as jasmine.Spy).and.returnValue({
                pbpTags: [{}],
                accountTags: [{ tagStatusDesc: 'active' }]
            } as ManageEzTagResponse);

            (dialogService.openGenericModal as jasmine.Spy).and.resolveTo(true);

            await component.closeAccount();

            expect(dialogService.openGenericModal).toHaveBeenCalledTimes(1);
            expect(state.go).toHaveBeenCalledOnceWith(profileStateNames.CloseAccountAgreement);
        });

        it('should not call state.go if cancel', async () => {
            (accountService.getEZTagInfo as jasmine.Spy).and.returnValue({
                pbpTags: [{}],
                accountTags: [{ tagStatusDesc: 'active' }]
            } as ManageEzTagResponse);
            (dialogService.openGenericModal as jasmine.Spy).and.resolveTo(false);

            await component.closeAccount();

            expect(dialogService.openGenericModal).toHaveBeenCalledTimes(1);
            expect(state.go).not.toHaveBeenCalled();
        });
    });
});
