import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { StateService } from '@uirouter/angular';
import { AddMissingInformationService } from 'authentication/addMissingInformationService/addMissingInformation.service';
import { DialogService, GenericRepoService, ResponseErrorService } from 'common/services';
import { GenericCmsModalComponent } from 'common/ui';
import { } from 'jasmine';
import { MissingInformationFlags } from 'login/interfaces';
import { PipesModule } from 'pipes/module';
import { stateNames as profileStates } from 'profile/constants';
import { ChangeUsernameComponent } from './changeUsername.component';


describe('component: change-username', () => {

    let fixture: ComponentFixture<ChangeUsernameComponent>;
    let component: ChangeUsernameComponent;
    let genericRepo: any;
    let state: StateService;
    let responseErrorService: jasmine.SpyObj<any>;
    let addMissingInformationService: jasmine.SpyObj<AddMissingInformationService>;
    let dialogService: DialogService;

    beforeEach(async () => {
        genericRepo = {
            dataFactory: {
                updateLoginID: jasmine.createSpy('updateLoginID'),
            }
        };
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree']);
        addMissingInformationService = jasmine.createSpyObj('addMissingInformation', ['returnMissingInformation']);
        dialogService = jasmine.createSpyObj('dialogService', ['openGenericModal']);
        state = jasmine.createSpyObj('state', ['go']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    ChangeUsernameComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule, FormsModule],
                providers: [
                    { provide: StateService, useFactory: () => state },
                    { provide: GenericRepoService, useFactory: () => genericRepo },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: AddMissingInformationService, useFactory: () => addMissingInformationService },
                    { provide: DialogService, useFactory: () => dialogService },
                    NgForm
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(ChangeUsernameComponent);
        component = fixture.debugElement.componentInstance;
    });

    beforeEach(() => {
        component.cmsContent = {
            completionModalBody: '123',
            completionModalTitle: '456',
            ShortDescription: '789',
            LongDescription: 'Long Description',
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
    });

    describe('saveInformation', () => {
        beforeEach(() => {
            spyOn(component as any, 'showCompletionModal');
        });

        it('should not call any functions if form is invalid', async () => {
            //act
            await component.saveInformation({ valid: false } as NgForm);

            //assert
            expect(genericRepo.dataFactory.updateLoginID).not.toHaveBeenCalled();
            expect(responseErrorService.isErrorFree).not.toHaveBeenCalled();
        });

        it('should call api functions if form is valid', async () => {
            //assemble
            genericRepo.dataFactory.updateLoginID.and.returnValue('hello there');

            //act
            await component.saveInformation({ valid: true } as NgForm);

            //assert
            expect(genericRepo.dataFactory.updateLoginID).toHaveBeenCalledOnceWith(component.addMissingInformation);
            expect(responseErrorService.isErrorFree).toHaveBeenCalledOnceWith('hello there');
        });
        it('should call showCompletionModal() if form is valid and api returns with no errors', async () => {
            //assemble
            responseErrorService.isErrorFree.and.returnValue(true);

            //act
            await component.saveInformation({ valid: true } as NgForm);

            //assert
            expect((component as any).showCompletionModal).toHaveBeenCalledTimes(1);
        });
        it('should not call showCompletionModal() if form is valid and api returns with errors', async () => {
            //assemble
            responseErrorService.isErrorFree.and.returnValue(false);

            //act
            await component.saveInformation({ valid: true } as NgForm);

            //assert
            expect((component as any).showCompletionModal).not.toHaveBeenCalled();
        });
    });

    describe('showCompletionModal', () => {

        it('should call dialogService.openGenericModal with correct parameters', async () => {
            //Assemble
            component.cmsContent = {
                completionModalBody: '111',
                completionModalTitle: '222',
                ShortDescription: '333',
                LongDescription: 'Long Description',
                Title: '444'
            };

            const data = {
                cmsContent: {
                    Title: '222',
                    AcceptBtn: 'OKAY',
                    PrimaryContent: 'Long Description'
                }
            };

            //Act
            await component['showCompletionModal']();

            //Assert
            expect(dialogService.openGenericModal).toHaveBeenCalledOnceWith(GenericCmsModalComponent, data);
        });

        it('should call state.go with correct parameters', async () => {
            //Assemble
            component.cmsContent = {
                completionModalBody: '111',
                completionModalTitle: '222',
                ShortDescription: '333',
                LongDescription: 'Long Description',
                Title: '444'
            };

            //Act
            await component['showCompletionModal']();

            //Assert
            expect(state.go).toHaveBeenCalledOnceWith(profileStates.AccountDetails);
        });
    });

    describe('cancel', () => {

        it('should call state.go 1 time', async () => {
            //assemble

            //Act
            await component.cancel();

            //assert
            expect(state.go).toHaveBeenCalledTimes(1);
        });
    });

});
