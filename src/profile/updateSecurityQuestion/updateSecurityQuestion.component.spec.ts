import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { StateService } from '@uirouter/angular';
import { AddMissingInformationService } from 'authentication/addMissingInformationService/addMissingInformation.service';
import { AccountService, DialogService, ResponseErrorService } from 'common/services';
import { GenericCmsModalComponent } from 'common/ui';
import { } from 'jasmine';
import { MissingInformationFlags } from 'login/interfaces';
import { PipesModule } from 'pipes/module';
import { stateNames as profileStates } from 'profile/constants';
import { UpdateSecurityQuestionComponent } from './updateSecurityQuestion.component';


describe('component: update-security-question', () => {

    let fixture: ComponentFixture<UpdateSecurityQuestionComponent>;
    let component: UpdateSecurityQuestionComponent;

    let accountService: jasmine.SpyObj<AccountService>;
    let state: StateService;
    let responseErrorService: jasmine.SpyObj<any>;
    let addMissingInformationService: jasmine.SpyObj<AddMissingInformationService>;
    let dialogService: DialogService;

    beforeEach(async () => {
        accountService = jasmine.createSpyObj('accountService', ['saveInformation']);
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree']);
        addMissingInformationService = jasmine.createSpyObj('addMissingInformation', ['returnMissingInformation']);
        dialogService = jasmine.createSpyObj('dialogService', ['openGenericModal']);
        state = jasmine.createSpyObj('state', ['go']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    UpdateSecurityQuestionComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule, FormsModule],
                providers: [
                    { provide: StateService, useFactory: () => state },
                    { provide: AccountService, useFactory: () => accountService },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: AddMissingInformationService, useFactory: () => addMissingInformationService },
                    { provide: DialogService, useFactory: () => dialogService },
                    NgForm
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(UpdateSecurityQuestionComponent);
        component = fixture.debugElement.componentInstance;
    });

    beforeEach(() => {
        component.cmsContent = {
            Children: [{ Title: 'modal title', ShortDescription: 'modal body' } as any],
            ShortDescription: '789',
            Title: '111111'
        };
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('component creation', () => {

        it('should create a component', () => {
            expect(component).toBeDefined();
        });
    });

    describe('ngOnInit', () => {
        beforeEach(() => {
            spyOn(component as any, 'setSecurityQuestions');
        });

        it('should set missinginfoFlags', async () => {
            //assemble
            const missingInformation: MissingInformationFlags = {
                passwordNeedsReset: true,
                emailIsMissing: true,
                securityQuestionIsMissing: false,
                profileCallHasOccured: false
            };

            addMissingInformationService.returnMissingInformation.and.returnValue(missingInformation);

            //act
            component.ngOnInit();

            //assert
            expect(component.addMissingInformation.missingInformationFlags).toEqual(missingInformation);
        });

        it('should call setSecurityQuestions()', async () => {
            //act
            await component.ngOnInit();

            //assert
            expect(component['setSecurityQuestions']).toHaveBeenCalledTimes(1);
        });
    });

    describe('saveInformation', () => {
        beforeEach(() => {
            spyOn(component as any, 'showCompletionModal').and.resolveTo('completed');
        });

        it('should not call any functions if form is invalid', async () => {
            //act
            await component.saveInformation({ valid: false } as NgForm);

            //assert
            expect(accountService.saveInformation).not.toHaveBeenCalled();
            expect(responseErrorService.isErrorFree).not.toHaveBeenCalled();
        });

        it('should call api functions if form is valid', async () => {
            //assemble
            accountService.saveInformation.and.returnValue('hello there' as any);

            //act
            await component.saveInformation({ valid: true } as NgForm);

            //assert
            expect(accountService.saveInformation).toHaveBeenCalledOnceWith(component.addMissingInformation);
            expect(responseErrorService.isErrorFree).toHaveBeenCalledOnceWith('hello there');
        });

        it('should call showCompletionModal() and state.go() if form is valid and api returns with no errors', async () => {
            //assemble
            responseErrorService.isErrorFree.and.returnValue(true);

            //act
            await component.saveInformation({ valid: true } as NgForm);

            //assert
            expect((component as any).showCompletionModal).toHaveBeenCalledTimes(1);
            expect(state.go).toHaveBeenCalledOnceWith(profileStates.AccountDetails);
        });
        it('should not call showCompletionModal() or state.go() if form is valid and api returns with errors', async () => {
            //assemble
            responseErrorService.isErrorFree.and.returnValue(false);

            //act
            await component.saveInformation({ valid: true } as NgForm);

            //assert
            expect((component as any).showCompletionModal).not.toHaveBeenCalled();
            expect(state.go).not.toHaveBeenCalled();
        });
    });

    describe('showCompletionModal', () => {

        it('should call dialogService.openGenericModal with correct parameters', async () => {
            //Assemble
            (dialogService.openGenericModal as jasmine.Spy).and.resolveTo('completed');
            component.cmsContent = {
                Children: [{ Title: 'Modal Title', ShortDescription: 'modal body' } as any],
                ShortDescription: '333',
                Title: '444'
            };

            const data = {
                cmsContent: {
                    Title: 'Modal Title',
                    AcceptBtn: 'OKAY',
                    PrimaryContent: 'modal body'
                }
            };

            //Act
            await component['showCompletionModal']();

            //Assert
            expect(dialogService.openGenericModal).toHaveBeenCalledOnceWith(GenericCmsModalComponent, data);
        });


    });

    describe('cancel', () => {

        it('should call state.go 1 time', async () => {
            //Act
            await component.cancel();

            //assert
            expect(state.go).toHaveBeenCalledTimes(1);
        });
    });

});
