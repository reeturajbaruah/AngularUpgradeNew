import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CancelPopUpModalComponent, CancelPopUpInjectionValues } from './cancelModal.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StateService } from '@uirouter/angular';
import { stateNames as profileStateNames } from 'profile/constants';
import { changesStable } from 'testing';
import { PipesModule } from 'pipes/module';

describe('CancelPopUpModalComponent tests', () => {

    let fixture: ComponentFixture<CancelPopUpModalComponent>;
    let component: CancelPopUpModalComponent;
    let dialogData: CancelPopUpInjectionValues;

    let dialog: jasmine.SpyObj<MatDialogRef<CancelPopUpModalComponent>>;
    let state: StateService;
    //let profileStateNames: ProfileStateNames;
    beforeEach(async () => {
        dialog = jasmine.createSpyObj('MatDialogRef', ['close']);
        dialogData = {
            Title: '', PrimaryContent: '', ContinueButton: '', RejectButton: ''
        };

        //StateService Mock
        state = jasmine.createSpyObj('state', ['go']);

        //profileStateNames = new ProfileStateNames();

        await TestBed
            .configureTestingModule({
                declarations: [
                    CancelPopUpModalComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: dialog, useFactory: () => dialog },
                    { provide: MatDialogRef, useFactory: () => dialog },
                    { provide: MAT_DIALOG_DATA, useFactory: () => dialogData },
                    { provide: StateService, useFactory: () => state },
                    //{ provide: ProfileStateNames, useFactory: () => profileStateNames }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(CancelPopUpModalComponent);
        component = fixture.debugElement.componentInstance;

        component.cmsContent = { Title: '', PrimaryContent: '', ContinueButton: '', RejectButton: '' };

        await changesStable(fixture);
    });


    it('is a canary test', async () => {

        expect(true).toEqual(true);
    });

    describe('ngOnInit', () => {
        it('should set data to injection values', () => {
            expect(component.cmsContent).toEqual({ Title: '', PrimaryContent: '', ContinueButton: '', RejectButton: '' });
        });
    });

    describe('acceptButtonClick', () => {

        it('should call state.go and call dialog.close', async () => {

            await component.continueButtonClick();
            expect(state.go).toHaveBeenCalledWith(profileStateNames.AccountDetails);
            expect(state.go).toHaveBeenCalledTimes(1);
            expect(dialog.close).toHaveBeenCalledTimes(1);
        });

    });

    describe('close', () => {

        it('should call matDialog.open() 1 times', () => {

            component['close']();
            expect(dialog.close).toHaveBeenCalledTimes(1);
        });

    });

});
